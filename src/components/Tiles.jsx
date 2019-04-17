import React, { Component } from 'react';

class Tiles extends Component{
    render(){
        var board = this.props.board;
        return <div className="board">{
            Object.keys(board).map((line) => {
                return board[line].map((element,eIndex) => {
                    if(element !== 0){
                        return <span 
                                    key={line+eIndex} 
                                    className={"value"+element}
                                    style={{top:line*55+5+"px",left:eIndex*55+5+"px"}}>
                                {element}
                                </span>;
                    }
                })
            })
        }</div>
    }
};

export default Tiles;