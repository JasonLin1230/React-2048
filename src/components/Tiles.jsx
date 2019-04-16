import React, { Component } from 'react';
import {get_used} from "../utils/getTiles"


class Tiles extends Component{
    render(){
        var board = this.props.board;
        var tiles = get_used(board);
        return <div className="board">{
            tiles.map((key) => {
                var val = board[key];
                return <span key={key} className={key + " value" + val}>
                {val}
                </span>;
            })}</div>
    }
};

export default Tiles;