# ijvr

ijvr.js は、Web上で3D表現を行うためのJavaScriptライブラリです。IchigoJam風のテキストや基本的な3D形状を簡単に配置できます。

## 機能
- IchigoJam風のテキスト表示
- 3D空間にボックスやスフィアなどの基本図形の配置
- カメラ、ライティングの設定など

## 必要環境
特に必要ありません。HTML/JavaScriptが動作する環境で利用できます。

## 使い方
import文でijvr.jsを読み込み、提供されている関数を使ってオブジェクトを作成・配置します。

```javascript
import * as eg from "./ijvr.js";

eg.textIJ("IchigoJam", 0, 1.5, -.5, .01);
eg.box(0, 0, -1.5, 2, "red");
```

## ライセンス
MIT License