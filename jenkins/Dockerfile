FROM jenkins:1.596

USER jenkins

WORKDIR /var/jenkins_home

COPY jobs/deploy-app-on-push/config.xml /usr/share/jenkins/ref/jobs/deploy-app-on-push/config.xml

RUN mkdir scripts/
COPY ./scripts scripts/

COPY plugins.txt plugins.txt
RUN /usr/local/bin/plugins.sh plugins.txt
