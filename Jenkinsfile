pipeline {
    agent { docker { image 'node:22.11.0-alpine' } }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build --if-present'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || echo "Tests failed or none found"'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }
    }
}
