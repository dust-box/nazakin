+++
title = "Twitter APIの投稿の全取得に挫折しました"
tags = ["notes"]
date = "2016-11-24T00:00:00+09:00"
comments = true
draft = false
slug = "twitter-api-timeline"
menu = ""
image = ""
share = true
author = ""

+++

こんにちは、ディアッカ・エルスマンです。  
嘘です。
<!--more-->
Twitter APIの投稿全取得に挫折した僕です。  
electronからTwitterのOAuthを突破してstatuses/user_timelineへリクエストを送信してテストしました。  
[公式ドキュメント](https://dev.twitter.com/rest/reference/get/statuses/user_timeline)にもある通り3,200件以上の取得は無理でした。  

で、ググってたら検索だったらいけんじゃねーの？みたいな記事を見た気がしたので[要出典]、[GET search/tweets](https://dev.twitter.com/rest/reference/get/search/tweets)で試してみました。  
が、これ多分本文しか検索かけてないのかな？うまく取得できませんでした。  
screen_nameで検索をかけてたんですが、通常の検索ではノイズが多く、厳密な検索では絞られはするもののscreen_nameに対するリプ、メンションのみで自身のつぶやきに関しては取得できていないようでした。

で、諦めた。
