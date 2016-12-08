+++
title = "wit"
image = ""
comments = true
date = "2016-12-08T14:31:03+09:00"
author = "nagisa"
menu = ""
slug = "wit"
tags = ["notes"]
share = true
draft = false

+++

こんにちは、社会のゴミです。  
<!--more-->  
`nodejs`でTwitter botを[wit.ai](http://wit.ai)に接続しました。  

#### wit.aiとは

対話型AIらしいです。  
若干しか使えてないのであれですが、学習機能を搭載しているので多分AIです。  
インプットはテキストと音声らしいですが、Twitterを利用している関係でテキストオンリーです。  
ソースは[ここ](https://github.com/dust-box/homoyo)。

#### 中身

実装に関しては[node-wit](https://github.com/wit-ai/node-wit)と[node-twitter](https://github.com/desmondmorris/node-twitter)に頼りっぱなしです。  
簡単なフローは、

1. Twitter Stream APIに接続する
2. メンションが飛んで来た場合に内容をwit.aiへ飛ばす
3. witがストーリーを選択して処理する
4. witがnodejsのアプリのactionsを要求してくるから処理してcontext返す（実際にはPromise返してる）
5. witがcontextに合わせてテキストを返す
6. アプリがTwitterに投稿する

みたいな流れになってんのかなと思います多分。  

あとどっかのTwitter botのブログ記事を見て`express`でWebサーバ立ててるんだけど必要かわからない。

#### 問題点

Twitterでメンション飛ばされたら反応するようになってるからSessionどうしようかなと。  
多分ユーザユニークで経過を保持しててそれと紐付けてると思うから設定しないと2回目以降の会話がおかしくなってしまう。
