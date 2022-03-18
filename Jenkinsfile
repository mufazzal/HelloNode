pipeline {
    agent { label 'slave-ec2-fleet' }
    tools {nodejs "nodejs"}
    environment {
        finalArtifactName = "$GIT_BRANCH.$GIT_COMMIT.$BUILD_ID" + ".zip"
        s3Prefix = "$GIT_BRANCH" + "/"
        s3Bucket = "muf-modular-cfr-bucket"
        awsCredId = "Mufazzal"
        dockerHubCredId = "dockerHubPassword"
        dockerECRRepo = "388412347424.dkr.ecr.us-east-1.amazonaws.com/hello-node-repo-ecr"
        dockerHubRepo = "mufazzal/hello-node"
        ecrUrl = "388412347424.dkr.ecr.us-east-1.amazonaws.com"
        aws_region = "us-east-1"
    }
    stages {
        stage('Versioning') {
            steps {
                sh 'printenv'
            }
        }        
        stage('Installing') {
            steps {
                echo 'Installation in progress..'
                sh 'npm install'
                echo 'Installation Finished'
            }
        }          
        stage('Lint') {
            steps {
                echo 'Linting in progress..'
                sh 'npm run lint'
                echo 'Linting Finished'
            }
        }        
        stage('Build') {
            steps {
                echo 'Building in progress..'
                sh 'npm run preBuild'
                sh 'npm run build'
                echo 'Building Finished'
            }
        }
        stage('Post Build') {
            steps {
                echo 'Post Building in progress..'
                sh 'npm run postBuild'
                echo 'Post Building Finished'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing in progress..'
                sh 'npm run test'
                echo 'Testing Finished'
            }
        }

        stage('Archiving') {
            steps {
                echo 'Archiving in progress..'
                sh """
                cd outputs
                zip -r -qq ${finalArtifactName} dist/*
                cd ..
                """
                echo 'Archiving Finished'
            }
        }        

        stage('Upload') {
            steps {
                withAWS(region:'us-east-1',credentials: "$awsCredId") {
                    echo "Uploading artifact: outputs/" + "$finalArtifactName"
                    s3Upload(bucket: "$s3Bucket",
                                path: "$s3Prefix",
                                file:"outputs/" + "$finalArtifactName");
                }
                withAWS(region:'us-east-1',credentials: "$awsCredId") {
                    echo "Uploading latest artifact: outputs/" + "$finalArtifactName"
                    s3Upload(bucket: "$s3Bucket",
                                path: "$s3Prefix"+"latest.zip",
                                file:"outputs/" + "$finalArtifactName");
                }                
                
            }

            post {
                success {
                    echo "Uploading location of artifact :-"
                    echo "https://"+"$s3Bucket"+".s3.amazonaws.com/"+"$s3Prefix"+"$finalArtifactName"
                }
            }
        }


        stage('Dockerizing') {
            steps {
                script {
                    echo "Building docker image"
                    
                    //def customImage = docker.build("my-image:${env.BUILD_ID}", "./Docker") 

                    sh """
                        docker build \
                            -f Docker/Dockerfile \
                            -t $dockerECRRepo:$GIT_BRANCH-latest \
                            -t $dockerECRRepo:$GIT_BRANCH-$BUILD_ID \
                            -t $dockerECRRepo:$GIT_BRANCH-$GIT_COMMIT \
                            -t $dockerHubRepo:$GIT_BRANCH-latest \
                            -t $dockerHubRepo:$GIT_BRANCH-$BUILD_ID \
                            -t $dockerHubRepo:$GIT_BRANCH-$GIT_COMMIT \
                            .
                    """
                    echo "Building docker image finish"
                    echo "Images build locally :-"
                    sh """
                        docker images
                    """
                }
            }
        } 

        stage('ECR Push') {
            steps {
                sh """
                    aws ecr get-login-password \
                        --region $aws_region | docker login \
                            --username AWS \
                            --password-stdin \
                            $ecrUrl
                    docker push $dockerECRRepo:$GIT_BRANCH-latest
                    docker push $dockerECRRepo:$GIT_BRANCH-$BUILD_ID
                    docker push $dockerECRRepo:$GIT_BRANCH-$GIT_COMMIT

                """
            }
        }

        stage('DockerHub Push') {
            steps {

                withCredentials([usernamePassword(credentialsId: "$dockerHubCredId", usernameVariable: 'USERNAME_DOCKER_HUB', passwordVariable: 'PASSWORD_DOCKER_HUB')]) {
                    sh """

                        docker login --username $USERNAME_DOCKER_HUB --password $PASSWORD_DOCKER_HUB

                        docker push $dockerHubRepo:$GIT_BRANCH-latest
                        docker push $dockerHubRepo:$GIT_BRANCH-$BUILD_ID
                        docker push $dockerHubRepo:$GIT_BRANCH-$GIT_COMMIT
                    
                    """
                
                }
            }
        }        

        stage('Clean up') {
            steps {
                sh """
                    docker rmi $dockerECRRepo:$GIT_BRANCH-latest
                    docker rmi $dockerECRRepo:$GIT_BRANCH-$BUILD_ID
                    docker rmi $dockerECRRepo:$GIT_BRANCH-$GIT_COMMIT
                    docker rmi $dockerHubRepo:$GIT_BRANCH-latest
                    docker rmi $dockerHubRepo:$GIT_BRANCH-$BUILD_ID
                    docker rmi $dockerHubRepo:$GIT_BRANCH-$GIT_COMMIT
                """
            }
        }        


    }
}
