+++
date = "2017-07-24T10:54:24+02:00"
draft = false
title = "Google Chromeでcolumn-countがバグ"
slug = "google-chrome-column-count-bug"
tags = ["notes"]
image = ""
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
menu= ""		# set "main" to add this content to the main menu
author = ""
+++

Google Chromeでcssの`column-count`がバグってました。<!--more-->

`ul`に`column-count:2`を設定して、`ul > li > a`に`:before`と`:after`の擬似セレクタを設定したら、最後の`li`の中だけ表示されない不具合。  
メモ書き程度なので、同様の現象が起きたら思い出すくらいに留めておいていただけると幸いです。

対処方法は以下。

```
transform: translateZ(0);
```

よくわかってないので適当なんですが、Transform 3Dを使用すると、レンダリングがCPUからGPUになるとかならないとかでモノによっては不具合が解決するとかしないとか。  
今回のケースは多分それです。

以上、ご参考まで。
