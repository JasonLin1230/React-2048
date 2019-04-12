import React, { Component } from "react";
import { get_used } from "../utils/getTiles";

class Tiles extends Component {
  render() {
    var board = this.props.board;
    var tiles = get_used(board);
    return (
      <div className="board">
        {tiles.map(key => {
          return (
            <span key={key} className={key + " value" + board[key]}>
              {board[key]}
            </span>
          );
        })}
      </div>
    );
  }
}

export default Tiles;
