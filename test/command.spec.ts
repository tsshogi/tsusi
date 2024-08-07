import { USICommandOption } from "@/enums/option";
import { USICommand } from "@/models/usi";
import { test, expect, describe } from "bun:test";

describe("USI Command", () => {
  test("USI", () => {
    expect(new USICommand.USI().toString()).toEqual("usi");
  });

  test("READY", () => {
    expect(new USICommand.READY().toString()).toEqual("isready");
  });

  test("NEWGAME", () => {
    expect(new USICommand.NEWGAME().toString()).toEqual("usinewgame");
  });

  test("QUIT", () => {
    expect(new USICommand.QUIT().toString()).toEqual("quit");
  });

  test("GO", () => {
    expect(new USICommand.GO().toString()).toEqual("go movetime 1000");
    expect(new USICommand.GO({ moveTime: 2000 }).toString()).toEqual("go movetime 2000");
    expect(new USICommand.GO({ ponder: true }).toString()).toEqual("go ponder movetime 1000");
    expect(new USICommand.GO({ ponder: false }).toString()).toEqual("go movetime 1000");
    expect(new USICommand.GO({ ponder: true, moveTime: 2000 }).toString()).toEqual("go ponder movetime 2000");
    expect(new USICommand.GO({ ponder: false, moveTime: 2000 }).toString()).toEqual("go movetime 2000");
    expect(new USICommand.GO({ ponder: true, infinite: true }).toString()).toEqual("go ponder infinite");
    expect(new USICommand.GO({ ponder: false, infinite: true }).toString()).toEqual("go infinite");
    expect(new USICommand.GO({ ponder: true, mate: true, infinite: true }).toString()).toEqual("go mate infinite");
    expect(new USICommand.GO({ ponder: true, mate: false, infinite: true }).toString()).toEqual("go ponder infinite");
    expect(new USICommand.GO({ ponder: false, mate: true, infinite: true }).toString()).toEqual("go mate infinite");
    expect(new USICommand.GO({ ponder: false, mate: false, infinite: true }).toString()).toEqual("go infinite");
  });

  test("STOP", () => {
    expect(new USICommand.STOP().toString()).toEqual("stop");
  });

  test("POSITION", () => {
    expect(new USICommand.POSITION("startpos moves 7g7f 3c3d 2g2f").toString()).toEqual("position startpos moves 7g7f 3c3d 2g2f");
  });

  test("OPTION", () => {
    expect(new USICommand.OPTION(USICommandOption.BOOK_DIR, 'engine/book').toString()).toEqual("setoption name BookDir value engine/book");
    expect(new USICommand.OPTION(USICommandOption.EVAL_DIR, 'engine/eval').toString()).toEqual("setoption name EvalDir value engine/eval");
    expect(new USICommand.OPTION(USICommandOption.BOOK_FILE, 'user_standard.db').toString()).toEqual("setoption name BookFile value user_standard.db");
    expect(new USICommand.OPTION(USICommandOption.MULTI_PV, 4).toString()).toEqual("setoption name MultiPV value 4");
    expect(new USICommand.OPTION(USICommandOption.THREADS, 16).toString()).toEqual("setoption name Threads value 16");
    expect(new USICommand.OPTION(USICommandOption.USI_HASH, 2048).toString()).toEqual("setoption name USI_Hash value 2048");
    expect(new USICommand.OPTION(USICommandOption.DEPTH_LIMIT, 20).toString()).toEqual("setoption name DepthLimit value 20");
    expect(new USICommand.OPTION(USICommandOption.NODES_LIMIT, 10000000).toString()).toEqual("setoption name NodesLimit value 10000000");
  });
});
