#!/bin/sh
cd /var/jenkins/
export IP=`/sbin/ip route|awk '/default/ { print $3 }'`
ssh -o StrictHostKeyChecking=no -i ./DockerPipelineDemo.pem core@$IP <<EOF
        docker stop node-app && docker rm node-app
	cd final-exercise
	git pull
	docker build -t node-app:latest .
	docker run -p 80:80 --name=node-app -d node-app:latest
	exit
EOF
