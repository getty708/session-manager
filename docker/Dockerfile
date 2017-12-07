FROM ubuntu:16.04

# Emacsのインストール
RUN apt-get update
RUN apt-get install emacs24-nox -y

# React開発環境を用意
WORKDIR /root
RUN apt-get install curl -y
RUN curl -L git.io/nodebrew | perl - setup
RUN echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> /root/.bashrc \
    && . /root/.bashrc \
    && nodebrew install-binary v8.7.0 \
    && nodebrew use v8.7.0 \
    && npm update -g npm
