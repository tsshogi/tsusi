export enum USICommandOption {
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
