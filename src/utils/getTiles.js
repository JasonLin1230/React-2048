// 在棋盘中找到空格，返回key数组
function get_vacant(board) {
  return Object.keys(board).filter(function(key) {
    return board[key] === null;
  });
}

//  获取非空的格子
function get_used(board) {
  return Object.keys(board).filter(function(key) {
    return board[key] !== null;
  });
}

export { get_used, get_vacant };
