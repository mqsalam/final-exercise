# hello-jenkins!

My super SIMPLE sample app to test out Jenkins. node.js w/ test script

[Tutorial to build the project](http://code.tutsplus.com/tutorials/setting-up-continuous-integration-continuous-deployment-with-jenkins--cms-21511)

## Build the application

Clone the GitHub repository to the instance.

`$ git clone https://github.com/aetas-github-training/final-exercise.git`

Create and run the docker containers in detached mode using the docker-compose.yml file.

```
$ cd final-exercise
$ docker-compose up -d
```

That's it!  Prerequisites for running the application via docker-compose:

* Docker

* Git

* Docker-Compose

##Install the prerequisites on an Amazon EC2 instance running Amazon Linux

Update the instance.

`$ sudo yum update -y`

Install docker and git.

`$ sudo yum install -y docker git`

Install docker-compose.
```
$ sudo su
$ mkdir /opt /opt/bin
$ curl -L https://github.com/docker/compose/releases/download/1.5.2/docker-compose-`uname -s`-`uname -m` > /opt/bin/docker-compose
$ chmod +x /opt/bin/docker-compose
$ export PATH=/opt/bin:$PATH
$ exit
```

Add the current user to the docker permissions group...

`$ sudo usermod -aG docker ec2-user`

...and reconnect to your instance for the change to take effect.

```
$ exit
$ ssh -i /path/to/key.pem username@your.instance.ip
```

Start the docker service.

`$ sudo service docker start`
