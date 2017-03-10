+++
image = ""
draft = false
tags = []
date = "2017-03-10T19:00:00"
comments = true
share = true
menu = ""
slug = "twitter-url-generator"
title = "Twitter Tweet URL Generator"
author = "nagisa"

+++

<div style="margin-bottom:40px;">
  <style scoped="scoped">
  label {
    display: block;
    margin: 20px 0 10px;
  }

  input[type="url"],
  input[type="text"] {
    background-color: #fff;
    border-color: #eee;
    border-style: solid;
    border-width: 0 0 1px;
    display: block;
    font-size: 16px;
    padding: 10px 15px;
    width: 100%;
    max-width: 300px;
  }

  input:focus {
    border-color: blue;
    outline: none;
  }

  #button {
    apperance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: #fff;
    border: none;
    box-shadow: 0 2px 4px rgba(0,0,0,.12);
    margin: 20px 0;
    max-width: 200px;
    padding: 10px 20px;
    transition: box-shadow 300ms ease-in-out;
  }

  #button:focus,
  #button:active {
    outline: none;
  }

  #button:hover {
    box-shadow: 0 5px 10px rgba(0,0,0,.12);
  }

  #result {
    border: solid 1px #eee;
    padding: 10px 15px;
    width: 100%;
    max-width: 300px;
    min-height: 3em;
  }

  #result:focus,
  #result:active {
    outline: none;
  }
  </style>

  <form>
    <label>URL</label>
    <input type="url" id="url" name="url" placeholder="ex) http://nazakin.net">

    <label>Text</label>
    <input type="text" id="text" name="text" placeholder="テキスト">

    <button type="button" id="button">Submit</button>
  </form>

  <textarea type="text" name="result" id="result" placeholder="ここに結果が出力されます"></textarea>
</div>

<script>
var tweetGenInit = function() {
  var urlInput = document.getElementById('url');
  var txtInput = document.getElementById('text');
  var button   = document.getElementById('button');
  var result   = document.getElementById('result');

  button.addEventListener('click', function() {
    var url = urlInput.value;
    var txt = encodeURIComponent(txtInput.value);

    var resultValue  = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + txt + '&original_referer=' + url;

    result.value = resultValue;
  });
};

window.addEventListener('DOMContentLoaded', tweetGenInit);
</script>

Twitterのツイートリンク作成ツール  
主に仕事用

encodeURIComponentをコンソールに突っ込むのが面倒だった。
