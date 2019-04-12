import React, { Component } from "react";
import Tiles from "./Tiles";
import handleKeyDown from "../utils/handleMove";
import { get_vacant, get_used } from "../utils/getTiles";
import is_over from "../utils/isOver";
//c初始化棋盘对象
var initBoard = {
  a1: null,
  a2: null,
  a3: null,
  a4: null,
  b1: null,
  b2: null,
  b3: null,
  b4: null,
  c1: null,
  c2: null,
  c3: null,
  c4: null,
  d1: null,
  d2: null,
  d3: null,
  d4: null
};

// 在棋盘中添加新数,返回操作之后的棋盘对象
function add_new(board) {
  // 新生成一个随机的2或4
  var newNum = Math.random() * 5 < 4 ? 2 : 4;
  var vacant = get_vacant(board);
  var location = vacant[Math.floor(Math.random() * vacant.length)];
  if (location) {
    var new_board = {}; //更新棋盘
    Object.keys(board).forEach(item => {
      new_board[item] = item === location ? newNum : board[item];
    });
  }
  //使用本地存储，保存游戏进度
  localStorage.setItem("board", JSON.stringify(new_board));
  return new_board;
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  newGame = e => {
    //重新初始化棋盘
    this.setState(add_new(add_new(initBoard)));
  };

  // 挂载后监听按键
  componentDidMount() {
    //判断是否有正在进行的游戏
    var local_board = localStorage.getItem("board");
    if (local_board) {
      this.setState(JSON.parse(local_board));
    } else {
      this.newGame();
    }
    window.addEventListener("keydown", this.keyHandler);
  }

  keyHandler = e => {
    this.setState(add_new(handleKeyDown(this.state, e.keyCode)));
  };

  computeScore(board) {
    return get_used(board).reduce((pre, cur) => {
      return pre + board[cur];
    }, 0);
  }

  render() {
    return (
      <div>
        <Tiles board={this.state} />
        <button onClick={this.newGame}>NewGame</button>
        <p>{is_over(this.state) ? "Game Over" : ""}</p>
        <p>当前得分为：{this.computeScore(this.state)}分</p>
      </div>
    );
  }
}

export default Board;
