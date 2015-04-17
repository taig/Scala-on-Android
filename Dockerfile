FROM		taig/debian:wheezy

MAINTAINER	Niklas Klein "mail@taig.io"

RUN		apt-get update
RUN		apt-get install -y curl git

RUN		curl -sL https://deb.nodesource.com/setup_0.12 | bash - 
RUN		apt-get install -y nodejs
RUN		apt-get clean

RUN		npm install -g roots

RUN		mkdir -p /root/scalaonandroid
WORKDIR		/root/scalaonandroid