+++
author = "dustbox"
comments = false
date = "2016-10-04T17:14:31+09:00"
draft = false
image = ""
menu = ""
share = true
slug = "2016-10-31/wercker"
tags = ["notes"]
title = "そうだ、ここに鯖を立てよう"

+++

[Werker](http://wercker.com)を使って[Hugo](https://gohugo.io)をさくらVPSへデプロイするまで
<!--more-->

1. Hugoを適当に作る  
`hugo new site website`

2. githubかどっかに適当にレポジトリ作る

3. werckerとレポジトリを紐づける

4. wercker.ymlを書く
```
    box: debian
    build:
      steps:
        - arjen/hugo-build@1.12.1:
            version: "0.16"
            theme: casper
            flags: --buildDrafts=false

    deploy:
      steps:
        - install-packages:
            packages: ssh-client
        - add-to-known_hosts:
            hostname: [hostname]
        - mktemp:
            envvar: PRIVATEKEY_PATH
        - create-file:
            name: write key
            filename: $PRIVATEKEY_PATH
            content: $VPS_KEY_PRIVATE
            overwrite: true
        - script:
            name: show data
            code: ls -la public
        - script:
            name: transfer data
            code: scp -i $PRIVATEKEY_PATH -P 22 -o StrictHostKeyChecking=no -o UserKnownHostsFile=no -r ./public wercker@[hostname]:~/hugo
```
hugo-buildは必須  
deployフローは殆どがscpで転送するための設定  
簡単な流れは「sshクライアントのインストール」->「一時ファイル作成」->「環境設定のキーを一時ファイルへ書き込み」->「一覧表示」（なくてもいい）->「scpでリモートに転送」  
[hostname]は鯖のホスト名かip  
最後の行のcodeの部分はリモートのディレクトリを適当に変える  

5. 鍵発行
鯖とのやりとりの認証は公開鍵で  
Werckerの管理画面の環境変数設定から発行できる  

6. 発行した公開鍵を鯖上のデプロイするユーザ（上記設定ファイルだとwercker）のauthrized_keysへ追記

7. 作ったレポジトリに適当にプッシュする

8. 多分動く
