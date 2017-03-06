+++
share = true
image = ""
author = "dustbox"
comments = true
slug = "post-title"
date = "2017-03-06T10:54:24+02:00"
title = "Google ウェブサイト翻訳ツールの自動言語変更"
draft = false
menu = ""
tags = ["notes"]

+++

ニッチっぽいけど日本語情報が出てこなかったので覚書。<!--more-->

layoutはselectタグが出力される奴で（DOMの操作しづらくなるから）。  
翻訳ツールのベーステンプレート（登録時に表示されるコード）をそのままコピペ。  
callbackの関数内に処理を記述する。

（多分）VirtualDOMでselectタグ以下を生成しているのでsetIntervalで完了するまで待つ。  
Observeできたらそっちの方が良さげ。

```
function googleTranslateElementInit() {
  ...

  var elem = document.querySelector("#google_translate_element select");
  var observe = setInterval(function() {
    if( elem.innerHTML !== "" ) {
      clearInterval(observe);

      var userLang = "en";
      var options  = document.querySelectorAll("#google_translate_element option");

      for( var i = 0; i < options.length; i++ ) {
        var option = options[i];

        if( option.value === "" ) { continue; }

        var curLang = new RegExp(option.value);

        if( userLang.match(curLang) !== null ) {
          elem.selectedIndex = i;
          elem.dispatchEvent(new Event('change'));
          break;
        }
      }
    }
  }, 300);
}
```

Google翻訳から渡される（optionのvalue）を正規表現で一致検索、一致したら`select`の`selectedIndex`を変更して`select`の`change`イベントを発火。  
かなり殴り書きなので一致検索の部分は適宜修正した方が良いと思います。  
初めjQueryの`trigger`で試してたら全然発火しなくて私の脳が発火しそうでした。
