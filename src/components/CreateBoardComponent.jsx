import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class CreateBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comId:'',
            comNm:'',
            comDesc:'',
            eduTypeCd:'',
            addr:'',
            stuNum:'',
            telNum:'',

        }

        this.changeComIdHandler = this.changeComIdHandler.bind(this);
        this.changeComNmHandler= this.changeComNmHandler.bind(this);
        this.changeComDescHandler =this.changeComDescHandler(this);
        this.changeTelNumHandler =this.changeTelNumHandler(this);
        this.changeAddrHandler =this.changeAddrHandler(this);
        this.changeEduTypeCdHandler =this.changeEduTypeCdHandler(this);

        this.createBoard = this.createBoard.bind(this);
    }



    changeComIdHandler = (event) => {
        this.setState({comId: event.target.value});
    }

    changeComNmHandler = (event)=> {
        this.setState({comNm: event.target.value});
    }
    changeComDescHandler = (event)=> {
        this.setState({comDesc: event.target.value});
    }
    changeTelNumHandler = (event)=> {
        this.setState({telNum: event.target.value});
    }

    changeAddrHandler = (event)=> {
        this.setState({addr: event.target.value});
    }
    changeEduTypeCdHandler = (event)=> {
        this.setState({eduTypeCd: event.target.value});
    }

    createBoard = (event) => {
        event.preventDefault();
        let board = {
            comId: this.state.comId,
            comNm: this.state.comNm,
            comDesc: this.state.comDesc,
            telNum: this.state.telNum,
            addr: this.state.addr,
            eduTypeCd: this.state.eduTypeCd
        };
        console.log("board => "+ JSON.stringify(board));
            BoardService.createBoard(board).then(res => {
                this.props.history.push('/board');
            });
        } 


    cancel() {
        this.props.history.push('/board');
    }

    

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> 기업 등록 </h3>
                            <div className = "card-body">

                            <div className = "row">      
                                
                                <label> 기업 아이디 </label> : {this.state.board.comId}
                            </div>
                            <div className = "row">      
                                <label> 기업명 </label> : {this.state.board.comNm}
                            </div>
                            <div className = "row">      
                                <label> 기업 설명 </label> : {this.state.board.comDesc}
                            </div>
                            <div className = "row">      
                                <label> 교육 과정 유형 </label> : {this.state.board.eduTypeCd}
                            </div>
                            <div className = "row">                               
                                <label> 연락처 </label> : {this.state.board.telNum}
                            </div>
                            <div className = "row">         
                                <label> 주소 </label> : {this.state.board.addr}
                            </div>
                 
                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateBoardComponent;