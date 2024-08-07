declare enum Command {
  GAME_OVER = 'gameover',
  GO = 'go',
  IS_READY = 'isready',
  NEW_GAME = 'usinewgame',
  POSITION = 'position',
  QUIT = 'quit',
  SET_OPTION = 'setoption',
  STOP = 'stop',
  USI = 'usi'
}

declare enum USICommandOption {
  /**
   * 評価関数のディレクトリ
   */
  EVAL_DIR = 'EvalDir',
  /**
   * 定跡ファイルのディレクトリ
   */
  BOOK_DIR = 'BookDir',
  /**
   * 定跡ファイル名
   */
  BOOK_FILE = 'BookFile',
  /**
   * 候補手の最大数
   */
  MULTI_PV = 'MultiPV',
  /**
   * 利用スレッド数
   */
  THREADS = 'Threads',
  /**
   * ハッシュサイズ
   */
  USI_HASH = 'USI_Hash',
  /**
   * 最大探索深さ
   */
  DEPTH_LIMIT = 'DepthLimit',
  /**
   * 最大探索ノード数
   */
  NODES_LIMIT = 'NodesLimit'
}

declare namespace USICommand {
  interface BASE {
    type: Command
    toString(): string
  }
  /**
   * 疎通確認
   */
  export class USI implements BASE {
    readonly type: Command
    toString(): string
  }
  /**
   * 準備確認
   */
  export class READY implements BASE {
    readonly type: Command
    toString(): string
  }
  /**
   * 新規対局
   */
  export class NEWGAME implements BASE {
    readonly type: Command
    toString(): string
  }
  /**
   * エンジン終了
   */
  export class QUIT implements BASE {
    type: Command
    toString(): string
  }
  /**
   * 思考停止
   */
  export class STOP implements BASE {
    type: Command
    toString(): string
  }
  /**
   * 局面設定
   */
  export class POSITION implements BASE {
    type: Command
    sfen: string
    constructor(sfen: string)
    toString(): string
  }
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
  /**
   * 思考開始
   */
  export class GO implements BASE {
    readonly type: Command
    readonly moveTime: number
    readonly ponder: boolean
    readonly infinite: boolean
    readonly mate: boolean
    constructor(params?: Partial<USIGOCommonParams>)
    toString(): string
  }
  /**
   * オプション設定
   */
  export class OPTION implements BASE {
    readonly type: Command
    readonly name: USICommandOption
    readonly value: string | number
    constructor(name: USICommandOption, value: string | number)
    toString(): string
  }
}

export { Command, USICommand, USICommandOption }
