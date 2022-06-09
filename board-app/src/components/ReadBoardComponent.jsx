import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comId: this.props.match.params.comId,
            board: {}
        }

        this.goToUpdate = this.goToUpdate.bind(this);

    }

    componentDidMount() {
        BoardService.getOneBoard(this.state.comId).then( res => {
            this.setState({board: res.data});
        });

        
    }


    goToList() {
        this.props.history.push('/board');
    }

    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/create-board/${this.state.comId}`);
    }

    deleteView = async function () {
        if(window.confirm("정말로 목록을 삭제하시겠습니까?\n삭제된 목록은 복구 할 수 없습니다.")) {
            BoardService.deleteBoard(this.state.comId).then( res => {
                console.log("delete result => "+ JSON.stringify(res));
                if (res.status == 200) {
                    this.props.history.push('/board');
                } else {
                    alert("삭제를 실패했습니다.");
                }
            });

        }
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> 상세 목록 </h3>
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
                                <label> 주소 </label> : {this.state.board.addr}
                            </div>

                            <div className = "row">
                                <label> 교육 과정 유형 </label> : {this.state.board.eduTypeCd}
                            </div>

                            <div className = "row">
                                <label> 약정인원 </label> : {this.state.board.stuNum}
                            </div>

                            <div className = "row">
                                <label> 연락처 </label> : {this.state.board.telNum}
                            </div>


                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}> 목록으로 이동 </button>
                            <button className="btn btn-info" onClick={this.goToUpdate} style={{marginLeft:"10px"}}> 수정 </button>
                            <button className="btn btn-danger" onClick={() => this.deleteView()} style={{marginLeft:"10px"}}> 삭제 </button>
                    </div>
                </div>

            </div>
        );
    }
}


export default ReadBoardComponent;