+++
draft = false
title = "Docker使いました"
tags = ["notes"]
image = ""
comments = true
date = "2017-01-11T13:41:10+09:00"
author = "dustbox"
menu = ""
slug = "docker_01"
share = true

+++

<style scoped>
.post-content img { max-width: 100%; }
</style>

こんにちは、クソザコナメクジです。<!--more-->

Let's Encryptの更新期日が過ぎていましたが放置していました。  
申し訳ございませんでした。

ちょうど良いのでVPSにDockerを導入してみたのでその手順書的なやつ。

### よく分からないデータフロー

![Docker](/2017/01/11/docker@2x.png)

githubにソースをアップするとweckerでビルドして本番へデプロイしてくれるようにしてあります。  
[参照](/post/2016-10-31/wercker/)

デプロイしたソースファイルをデータボリュームコンテナへマウントします。  
そのコンテナをnginxコンテナへマウントします。  

nginxではSSLを含めたバーチャルホストの設定をしているのみです。  
各証明書については、ホストにインストールしたcertbotから生成、それをnginxのコンテナにマウントする形を取っています。

### よく分からない設定ファイル

#### docker-compose.yml

```
version: "2"
services:
  web:
    image: busybox
    volumes:
      - /hostos/website/path:/var/www/html
  nginx:
    build:
      context: ./
      dockerfile: docker/nginx/Dockerfile
    volumes:
      - /etc/letsencrypt:/etc/letsencrypt
      - /etc/ssh/private:/etc/ssh/private
    volumes_from:
      - web
    ports:
      - "80:80"
      - "443:443"
```

#### docker/nginx/Dockerfile

```
FROM nginx:latest
MAINTAINER dustbox

ADD ./templates/vhost.conf /etc/nginx/conf.d/vhost.conf

WORKDIR /var/www
```

nginxの設定ファイルをコンテナにぶち込むだけのDockerfileです。  

docker-machineでリモートへ接続している際にローカルのファイルをマウントしようとして2~3時間悩んでました。  
たったこれだけなのに苦労した感じある。
