//  按左方向键时的分组
var left = [
    ["a1", "a2", "a3", "a4"],
    ["b1", "b2", "b3", "b4"],
    ["c1", "c2", "c3", "c4"],
    ["d1", "d2", "d3", "d4"]
  ];
  //  按右方向键时的分组
  var right = [
    ["a4", "a3", "a2", "a1"],
    ["b4", "b3", "b2", "b1"],
    ["c4", "c3", "c2", "c1"],
    ["d4", "d3", "d2", "d1"]
  ];
  //  按上方向键时的分组
  var up = [
    ["a1", "b1", "c1", "d1"],
    ["a2", "b2", "c2", "d2"],
    ["a3", "b3", "c3", "d3"],
    ["a4", "b4", "c4", "d4"]
  ];
  //  按下方向键时的分组
  var down = [
    ["d1", "c1", "b1", "a1"],
    ["d2", "c2", "b2", "a2"],
    ["d3", "c3", "b3", "a3"],
    ["d4", "c4", "b4", "a4"]
  ];
  
  export default function handleKeyDown(board, keyCode) {
    var drection;
    switch (keyCode) {
      case 37:
        drection = left;
        break;
      case 38:
        drection = up;
        break;
      case 39:
        drection = right;
        break;
      case 40:
        drection = down;
        break;
      default:
        break;
    }
    // drection.forEach(line => {
    //   var new_line = handle_line(board, line); 
    //   Object.keys(new_line).forEach(key => {
    //     Object.keys(board).forEach(item => {
    //         if(key === item){
    //           board[item]=new_line[key];
    //         }
    //     });
    //   });
    // });
    return board;
  }
  //   处理棋盘的对应操作的每行
  function handle_line(board, line) {
    var tiles = line
      .map(key => {
        return board[key];
      })
      .filter(tile => {
        return tile !== null;
      });
    var new_tiles = [];
    if (tiles) {
      for (var i = 0; i < tiles.length; i++) {
        var tile = tiles[i];
        if (tile) {
          if (tiles[i + 1] && tile === tiles[i + 1]) {
            i++;
            new_tiles.push(tile * 2);
          } else {
            new_tiles.push(tile);
          }
        }
      }
    }
    var new_line = {};
    line.forEach((key, index) => {
      new_line[key] = new_tiles[index] || null;
    });
    return new_line;
  }
  