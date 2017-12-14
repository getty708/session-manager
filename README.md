# session-manager
ジェスチャ認識の実験の際, 被験者に次にどのジェスチャを行うか指示を出すために使用できる. 各セッションではランダムな順番でジェスチャを行う必要があるため, このアプリがセッションごとにジェスチャをシャッフルして表示する. また被験者が間違ったジェスチャを行うことを避けるため説明用の画像も表示することができる.


## Quick start
大まかなアプリの使い方は以下の通り.
1. 使用したいジェスチャを登録する.
1. アプリをbuildする.
1. ブラウザで表示.

## ジェスチャの登録
実験で使用するジェスチャは, `src/constants/settings.js`内に以下のJSON形式で記述. ジェスチャidは重複がないように指定する. 画像はない場合は`null`を指定.

```javascript
export const GESTURE_SET = [
  {id: 0, name: 'air tap',    img: "./img/air_tap.jpg"},
  {id: 1, name: 'flick left', img: null},
  ...
]
```

## アプリのビルド
`webpack`を`npm`コマンドを使用して起動しアプリをビルドする(webpackのインストールが別途必要). コマンドは以下の通り.

```shell
For development
$ npm start

For production build
$ npm run build
```


### web serverがない場合
dockerを使用してサーバーをて立てる. `docker`および`docker-compose`を事前にインストールし, rootディレクトリで以下のコマンドでコンテナを立てる. その後[http://localhost:3030/](http://localhost:3030/)にアクセス.

```shell
$ docker-compose up
```

### web serverがある場合
xampなどを使用している場合は, `public/`以下を使用しているサーバの公開ディレクトリにコピー.


## Author
Yoshimura Naoya (Osaka University)


## License
MIT license
