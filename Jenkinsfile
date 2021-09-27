pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Test') { 
            steps {
                echo 'Arranca el proceso de pruebas unitarias' 
            }
        }
        stage('Deploy') { 
            steps {
                sh 'docker-compose up' 
            }
        }
    }
}