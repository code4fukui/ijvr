# ijvr

ijvr.js は、JavaScript で 3D グラフィックスを表現するためのライブラリです。IchigoJam 風のテキストや基本的な 3D 図形を簡単に配置できます。

## 機能
- IchigoJam 風のテキスト表示
- 3D 空間にボックスやスフィアなどの基本図形の配置
- カメラ、ライティングの設定など

## 必要環境
特に必要ありません。HTML/JavaScript が動作する環境で利用できます。

## 使い方
`import` 文で `ijvr.js` を読み込み、提供されている関数を使ってオブジェクトを作成・配置します。

```javascript
import * as eg from "./ijvr.js";

eg.textIJ("IchigoJam", 0, 1.5, -.5, .01);
eg.box(0, 0, -1.5, 2, "red");
```

## ライセンス
この プロジェクトは MIT ライセンスの下で提供されています。