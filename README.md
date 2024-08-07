## TS USI

TypeScriptで書かれたUSIプロトコルを記述するためのライブラリです.

### 対応コマンド

- [x] `usi`
- [x] `isready`
- [x] `setoption name <id> [value <x>]`
- [x] `usinewgame`
- [x] `position <sfen>`
- [x] `go`
- [x] `stop`
- [x] `quit`

## コマンド一覧

### USI

```ts
new USICommand.USI()
```

### READY

```ts
new USICommand.READY()
```

### NEWGAME

```ts
new USICommand.NEWGAME()
```

### QUIT

```ts
new USICommand.QUIT()
```

### POSITION

```ts
new USICommand.POSITION('startpos moves 7g7f 3c3d 2g2f')
```

### GO

```ts
new USICommand.GO({ ponder: true, infinite: true })
```

```ts
/**
 * 思考オプション
 * @param moveTime 思考時間
 * @param mate 詰み探索モード
 * @param infinite 思考時間無制限
 * @param ponder 先読み機能
 */
export type USIGOCommonParams = {
  moveTime?: number
  mate?: boolean
  infinite?: boolean
  ponder?: boolean
}
```

### OPTION

```ts
new USICommand.OPTION(USICommandOption.BOOK_DIR, 'engine/book')
```

対応しているオプション

- [x] `EvalDir`
- [x] `BookDir`
- [x] `BookFile`
- [x] `MultiPV`
- [x] `Threads`
- [x] `USI_Hash`
- [x] `DepthLimit`
- [x] `NodesLimit`
