pipeline {
    agent { label 'slave-ec2-fleet' }
    tools {nodejs "nodejs"}
    environment {
        finalArtifactName = "$GIT_BRANCH.$GIT_COMMIT.$BUILD_ID" + ".zip"
        s3Prefix = "$GIT_BRANCH" + "/"
        s3Bucket = "muf-modular-cfr-bucket"
        awsCredId = "Mufazzal"
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

                // sh """
                //     cd outputs
                //     mkdir tmp
                //     cp ${finalArtifactName} ${WORKSPACE}/outputs/tmp/latest.zip
                //     cd ..
                // """

                withAWS(region:'us-east-1',credentials: "$awsCredId") {
                    echo "Uploading latest artifact: outputs/" + "$finalArtifactName"
                    s3Upload(bucket: "$s3Bucket",
                                path: "$s3Prefix/latest.zip",
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


        stage('Deploy') {
            steps {
                echo 'Deploying Hello....'
            }
        }
    }
}
