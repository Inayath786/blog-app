pipeline {
  agent any

  tools {
    nodejs "Node18"
  }

  environment {
    SONAR_TOKEN = credentials('sonarqubetoken') 
  }

  stages {

    stage('Checkout Code') {
      steps {
        git branch: 'master', url: 'https://github.com/Inayath786/blog-app.git'
      }
    }

    stage('Install Dependencies - Client') {
      steps {
        dir('client') {
          sh 'npm install'
        }
      }
    }

    stage('Install Dependencies - Server') {
      steps {
        dir('server') {
          sh 'npm install'
        }
      }
    }

    stage('SonarQube Analysis - Client') {
      steps {
        withSonarQubeEnv('MySonarQube') {
          dir('client') {
            sh """
              npx sonar-scanner \
                -Dsonar.projectKey=mern-client \
                -Dsonar.sources=. \
                -Dsonar.host.url=$SONAR_HOST_URL \
                -Dsonar.login=$SONAR_TOKEN
            """
          }
        }
      }
    }

    stage('SonarQube Analysis - Server') {
      steps {
        withSonarQubeEnv('MySonarQube') {
          dir('server') {
            sh """
              npx sonar-scanner \
                -Dsonar.projectKey=mern-server \
                -Dsonar.sources=. \
                -Dsonar.host.url=$SONAR_HOST_URL \
                -Dsonar.login=$SONAR_TOKEN
            """
          }
        }
      }
    }

    stage('Build') {
      steps {
        echo "Add build/test steps here if required"
      }
    }
  }
}

