pipeline {
    agent { label 'slave-ec2-fleet' }
    tools {nodejs "nodejs"}
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
                pwd();
                ls()

                zip zipFile: 'muftest.zip', archive: false, dir: 'outputs/dist'
                archiveArtifacts artifacts: 'muftest.zip', fingerprint: true

                echo 'Archiving Finished'
            }
        }        

        // stage('Upload') {

        //         pwd(); //Log current directory

        //         withAWS(region:'us-east-1',credentials:'?????') {

        //             def identity=awsIdentity();//Log AWS credentials

        //             // Upload files from working directory 'dist' in your project workspace
        //             s3Upload(bucket:"yourBucketName", workingDir:'dist', includePathPattern:'**/*');
        //         }

        // }


        stage('Deploy') {
            steps {
                echo 'Deploying Hello....'
            }
        }
    }
}
