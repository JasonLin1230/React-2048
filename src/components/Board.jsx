import React, { Component } from "react";
import Tiles from "./Tiles";
import handleKeyDown from "../utils/handleMove";
import {get_vacant,get_used} from "../utils/getTiles"
// import is_over from "../utils/isOver";
//初始化棋盘矩阵数组   
// eslint-disable-next-line no-array-constructor
var initBoard={};                 
for(var x=0;x<4;x++){
  // eslint-disable-next-line no-array-constructor
  initBoard[x]=new Array();        
  for(var y=0;y<4;y++){
    initBoard[x][y]=0;            //数组初始化为0
  }
}


// 在棋盘中添加新数,返回操作之后的棋盘对象
function add_new(board) {
  // 新生成一个随机的2或4
  var newNum = Math.random() * 5 < 4 ? 2 : 4;
  var vacant = get_vacant(board);
  console.log(vacant);
  var random_index = Math.floor(Math.random() * vacant);
  if (random_index) {
    let count = 0;
    Object.keys(board).forEach(line => {
      board[line].forEach(element => {
        if(element === 0){
          if(count === random_index){
            board[line][element] = newNum;
          }else{
            count++;
          }
        }
      })
    });
  }
  //使用本地存储，保存游戏进度
  // localStorage.setItem("board",JSON.stringify(board));
  console.log(board);
  return board;
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getInitialState() {
    return add_new(add_new(initBoard));
  }

  newGame = e => {
    //重新初始化棋盘
    this.setState(this.getInitialState());
  };
  // 挂载后监听按键
  componentDidMount() {
    //判断是否有正在进行的游戏
    // var local_board=localStorage.getItem("board");
    // if(local_board){
    //     this.setState(JSON.parse(local_board));
    // }else{
        this.newGame();
    // }
    window.addEventListener("keydown", this.keyHandler);
  }

  keyHandler = e => {
    this.setState(add_new(handleKeyDown(this.state, e.keyCode)));
  };
  computeScore(board){
      return get_used(board).reduce((pre,cur) => {
          return pre+board[cur];
      },0)
  }
  render() {
    return (
      <div>
        <Tiles board={this.state} />
        <button onClick={this.newGame}>NewGame</button>
        {/* <p>{is_over(this.state)?"Game Over":""}</p> */}
        {/* <p>当前得分为：{this.computeScore(this.state)}分</p> */}
      </div>
    );
  }

}

export default Board;
