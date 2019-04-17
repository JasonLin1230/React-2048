// 在棋盘中找到空格，返回数组
function get_vacant (board) {
  console.log(board);
  let count=0;
  Object.keys(board).forEach(line => {
    // console.log(board[line]);
    board[line].forEach(element => {
      if(element === 0){
        count++;
      }
    })
  });
  return count;
}

//  获取非空的格子
function get_used (board) {
  return Object.keys(board).filter(function(key){
      return board[key] !== null;
  });
}
export {get_used,get_vacant}