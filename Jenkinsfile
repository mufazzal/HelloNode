pipeline {
    agent { label 'slave-ec2-fleet' }
    tools {nodejs "nodejs"}
    environment {
        finalArtifactName = "$GIT_BRANCH.$GIT_COMMIT.$BUILD_ID"
    }
    stages {
        stage('Versioning') {
            steps {
                echo $finalArtifactName
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
                pwd();
                sh """
                cd outputs
                zip -r -qq ${GIT_BRANCH}.${GIT_COMMIT}.${BUILD_ID}.zip dist/*
                cd ..
                """
                // script  {
                //     zip zipFile: 'muftest.zip', archive: false, dir: 'outputs/dist'
                //     archiveArtifacts artifacts: 'muftest.zip', fingerprint: true
                // }
                echo 'Archiving Finished'
            }
        }        

        stage('Upload') {
            steps {
                withAWS(region:'us-east-1',credentials:'Mufazzal') {
                    //def identity=awsIdentity();//Log AWS credentials
                    echo "$GIT_BRANCH.$GIT_COMMIT.$BUILD_ID"
                    //s3Upload(bucket:"muf-modular-cfr-bucket", file:"outputs/$GIT_BRANCH.$GIT_COMMIT.$BUILD_ID.zip");
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
