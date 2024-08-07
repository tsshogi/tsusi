import { Command } from '@/enums/command'
import type { USICommandOption } from '@/enums/option'

export namespace USICommand {
  interface BASE {
    type: Command

    toString(): string
  }

  /**
   * 疎通確認
   */
  export class USI implements BASE {
    readonly type: Command = Command.USI

    toString(): string {
      return `${this.type}`
    }
  }

  /**
   * 準備確認
   */
  export class READY implements BASE {
    readonly type: Command = Command.IS_READY

    toString(): string {
      return `${this.type}`
    }
  }

  /**
   * 新規対局
   */
  export class NEWGAME implements BASE {
    readonly type: Command = Command.NEW_GAME

    toString(): string {
      return `${this.type}`
    }
  }

  /**
   * エンジン終了
   */
  export class QUIT implements BASE {
    type: Command = Command.QUIT

    toString(): string {
      return `${this.type}`
    }
  }

  /**
   * 思考停止
   */
  export class STOP implements BASE {
    type: Command = Command.STOP

    toString(): string {
      return `${this.type}`
    }
  }

  /**
   * 局面設定
   */
  export class POSITION implements BASE {
    type: Command = Command.POSITION
    sfen: string

    constructor(sfen: string) {
      this.sfen = sfen
    }

    toString(): string {
      return `${this.type} ${this.sfen}`
    }
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
    readonly type: Command = Command.GO

    readonly moveTime: number
    readonly ponder: boolean
    readonly infinite: boolean
    readonly mate: boolean

    constructor(params: Partial<USIGOCommonParams> = {}) {
      this.moveTime = params.moveTime || 1000
      this.ponder = params.ponder || false
      this.infinite = params.infinite || false
      this.mate = params.mate || false
    }

    toString(): string {
      const prefix: string = this.ponder ? `${this.type} ponder` : this.type
      return this.mate
        ? this.infinite
          ? `${this.type} mate infinite`
          : `${this.type} mate ${this.moveTime}`
        : this.infinite
          ? `${prefix} infinite`
          : `${prefix} movetime ${this.moveTime}`
    }
  }

  /**
   * オプション設定
   */
  export class OPTION implements BASE {
    readonly type: Command = Command.SET_OPTION
    readonly name: USICommandOption
    readonly value: string | number

    constructor(name: USICommandOption, value: string | number) {
      this.name = name
      this.value = value
    }

    toString(): string {
      return `${this.type} name ${this.name} value ${this.value}`
    }
  }
}
