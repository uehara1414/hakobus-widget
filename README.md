# hakobus-widget
バス時刻をデスクトップに貼ろう

## Requirements

### Node.js

Node.js v7.0.0

### For Debugging

- electron-prebuilt

```sh
npm install -g electron-prebuilt
```

Run ```electron .``` to debug.

### For Building

- electron-packager

```sh
npm install -g electron-packager
```

## Build

```sh
electron-packager . hakobus-widget --platform=darwin,win32,linux --version=1.4.5
```

## ライセンス
[MIT](https://github.com/uehara1414/hakobus-widget/blob/master/LICENSE)
