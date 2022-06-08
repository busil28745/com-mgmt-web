import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comId:  this.props.match.params.comId,
            board: {}
        }


    }

    componentDidMount() {
        BoardService.getOneBoard(this.state.comId).then( res => {
            this.setState({board: res.data});
        });

        
    }


    goToList() {
        this.props.history.push('/board');
    }


    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> Read Detail</h3>
                    <div className = "card-body">

                            <div className = "row">
                                <label> 기업 아이디 </label> : {this.state.board.comId}
                            </div>

                            <div className = "row">
                                <label> 기업명  </label>: {this.state.board.comNm}
                            </div>

                            <div className = "row">
                                <label> 기업 설명  </label>: {this.state.board.comDesc}
                                
                            </div>

                            <div className = "row">
                                <label> 교육 과정 유형  </label>: {this.state.board.eduTypeCd}
                                
                            </div>

                            <div className = "row">
                                <label> 연락처  </label>: {this.state.board.telNum}
                                
                            </div>

                            <div className = "row">
                                <label> 주소  </label>: {this.state.board.addr}
                            </div>

                            <div className = "row">
                                <label> 약정 인원  </label>: {this.state.board.stuNum} 
                            </div>

                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                
                    </div>
                </div>

            </div>
        );
    }
}


export default ReadBoardComponent;