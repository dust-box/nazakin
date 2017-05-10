+++
author = ""
comments = true
date = "2017-05-10T12:00:00+02:00"
draft = false
image = ""
menu = ""
share = true
slug = "snippets-01"
tags = ["note"]
title = "アコーディオンメニューのスニペット"

+++

JavaScript、clientHeightとかscrollHeightとか高さ関連のプロパティ多すぎませんか。<!--more-->

毎回間違えるのでスニペットとして覚書。

#### HTML

```
<nav class="menu">
  <button class="toggle"><i></i><i></i><i></i></button>
  <ul>
    <li><a href="#">MENU 01</a></li>
    <li><a href="#">MENU 02</a></li>
    <li><a href="#">MENU 03</a></li>
    <li><a href="#">MENU 04</a></li>
  </ul>
</nav>
```

buttonは開閉用です。

### CSS

#### メニュー本体

```
.menu {
  background: #efefef;
  padding: 20px;
}

.menu ul {
  max-height: 0;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  transition: max-height 300ms ease-in-out;
}

.menu ul > li {
  border-bottom: solid 1px #ddd;
}

.menu ul > li > a {
  color: #888;
  display: block;
  text-decoration: none;
}

.menu ul > li > a:hover {
  color: #000;
}
```

#### ボタン

```
.toggle {
  -webkit-appearance: none;
  appearance: none;
  background: #000;
  border: none;
  display: block;
  height: 30px;
  padding: 0;
  position: relative;
  width: 30px;
}

.toggle:focus { outline: none }

.toggle i {
  background: #fff;
  height: 2px;
  left: 50%;
  position: absolute;
  top: 50%;
  transition: transform 300ms ease-in-out;
  transform-origin: center;
  width: 50%;
}

.toggle i:first-child {
  transform: translate(-50%,-250%);
}

.toggle i:nth-child(2) {
  transform: translate(-50%,-50%);
}

.toggle i:last-child {
  transform: translate(-50%,150%);
}

/* メニュー開いた時のスタイル */
.active .toggle i:first-child {
  transform: translate(-50%,-50%) rotate(-45deg);
}

.active .toggle i:nth-child(2) {
  transform: translate(-50%,-50%) scale(0,1);
}

.active .toggle i:last-child {
  transform: translate(-50%,-50%) rotate(45deg);
}
```

#### JavaScript

```
window.addEventListener('DOMContentLoaded', function() {
  var body   = document.querySelector('.menu');
  var list   = document.querySelector('.menu ul');
  var button = document.querySelector('.toggle');
  var toggleClassName = 'active';

  button.addEventListener('click', function(event) {
    if (event.preventDefault) event.preventDefault();

    if (!body.classList.contains(toggleClassName)) {
      body.classList.add(toggleClassName);
      list.style.maxHeight = list.scrollHeight + 'px';
    } else {
      body.classList.remove(toggleClassName);
      list.style.maxHeight = null;
    }
  });
});
```

#### DEMO

<style scoped="scoped">
.menu {
  background: #efefef;
  margin-bottom: 40px;
  padding: 20px;
}

.menu ul {
  max-height: 0;
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  transition: max-height 300ms ease-in-out;
}

.menu ul > li {
  border-bottom: solid 1px #ddd;
}

.menu ul > li > a {
  color: #888;
  display: block;
  text-decoration: none;
}

.menu ul > li > a:hover {
  color: #000;
}

.toggle {
  -webkit-appearance: none;
  appearance: none;
  background: #000;
  border: none;
  display: block;
  height: 30px;
  padding: 0;
  position: relative;
  width: 30px;
}

.toggle:focus { outline: none }

.toggle i {
  background: #fff;
  height: 2px;
  left: 50%;
  position: absolute;
  top: 50%;
  transition: transform 300ms ease-in-out;
  transform-origin: center;
  width: 50%;
}

.toggle i:first-child {
  transform: translate(-50%,-250%);
}

.active .toggle i:first-child {
  transform: translate(-50%,-50%) rotate(-45deg);
}

.toggle i:nth-child(2) {
  transform: translate(-50%,-50%);
}

.active .toggle i:nth-child(2) {
  transform: translate(-50%,-50%) scale(0,1);
}

.toggle i:last-child {
  transform: translate(-50%,150%);
}

.active .toggle i:last-child {
  transform: translate(-50%,-50%) rotate(45deg);
}
</style>

<script>
window.addEventListener('DOMContentLoaded', function() {
  var body   = document.querySelector('.menu');
  var list   = document.querySelector('.menu ul');
  var button = document.querySelector('.toggle');
  var toggleClassName = 'active';

  button.addEventListener('click', function(event) {
    if (event.preventDefault) event.preventDefault();

    if (!body.classList.contains(toggleClassName)) {
      body.classList.add(toggleClassName);
      list.style.maxHeight = list.scrollHeight + 'px';
    } else {
      body.classList.remove(toggleClassName);
      list.style.maxHeight = null;
    }
  });
});
</script>

<nav class="menu">
  <button class="toggle"><i></i><i></i><i></i></button>
  <ul>
    <li><a href="#">MENU 01</a></li>
    <li><a href="#">MENU 02</a></li>
    <li><a href="#">MENU 03</a></li>
    <li><a href="#">MENU 04</a></li>
  </ul>
</nav>

#### 簡単な説明

状態を変化させるためのイベント（サンプルはクリック）については、CSSではどうにもならないためjsに任せますが、それ以外のアニメーション等の見た目の変化に関してはCSSに記述するのが基本方針です。  
しかし、 `transition` に関して `height` や `max-height` が `auto` の場合はアニメーションが動かないようです。  
トグルする要素（サンプルは `ul` ）に固定値を設定する方法もありますが、レスポンシブ等で縦幅が可変する可能性がある場合、サイズに応じてメディアクエリで対処するのは現実的ではありません。  
止むを得ずではありますが、クリック時にトグルする要素の高さを `scrollHeight` で取得、 `max-height` に設定します。

<small>※ `scrollHeight` は非表示部分も含めて高さを取得するプロパティです。そのため、デフォルトで `max-height:0` を設定していても本来の高さを取得することができます。</small>

jsよりCSSの方が長いけど仕方ないね。
