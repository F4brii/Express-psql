pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                sh 'echo "Construyendo la Aplicación"'
		     sh '''
                echo "Pasos múltiples de shell también funcionan"
			    pwd
             '''
            }
        }
        stage('Test') { 
            steps {
                echo 'Arranca el proceso de pruebas unitarias' 
            }
        }
        stage('Deploy') { 
            steps {
                echo 'Desplegando al área de desarrollo' 
            }
        }
    }
}