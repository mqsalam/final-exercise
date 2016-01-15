# hello-jenkins
[![Build Status](https://52.90.96.210/jenkins/buildStatus/icon?job=Deploy Node on Commit)](http://52.90.96.210/jenkins/job/Deploy%20Node%20on%20Commit/)

My super SIMPLE sample app to test out Jenkins. node.js w/ test script

[Tutorial to build the project](http://code.tutsplus.com/tutorials/setting-up-continuous-integration-continuous-deployment-with-jenkins--cms-21511)

Mocha testing framework



**CI server for this Training is http://52.90.96.210:8080**

**App server Public IP http://52.90.96.210**

##Set up the pipeline demo on an Amazon EC2 instance running Amazon Linux

###Update the instance.

`$ sudo yum update -y`

###Install docker and git.

`$ sudo yum install -y docker git`

###Install docker-compose.
```
$ sudo su
$ curl -L https://github.com/docker/compose/releases/download/1.5.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
$ chmod +x /usr/local/bin/docker-compose
$ exit
```

###Add the current user to the docker permissions group...

`$ sudo usermod -aG docker ec2-user`

###...and reconnect to your instance for the change to take effect.

```
$ exit
$ ssh -i /path/to/key.pem ec2-user@your.instance.ip
```

###Start the docker service.

`$ sudo service docker start`

###Clone the GitHub repository to the instance.

`$ git clone https://github.com/your-user/your-repo.git`

or
`$ git clone https://github.com/aetas-github-training/final-exercise.git`

###Create and run the docker containers in detached mode using the docker-compose.yml file.

`$ docker-compose up -d`
