import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ReadStudentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentId: this.props.match.params.studentId,
            student: {}
        }

        this.goToUpdate = this.goToUpdate.bind(this);

    }

    componentDidMount() {
        BoardService.getOnestuBoard(this.state.studentId).then( res => {
            this.setState({student: res.data});
        });

        
    }


    goToList() {
        this.props.history.push('/student');
    }

    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/createstu-board/${this.state.studentId}`);
    }

    deleteView = async function () {
        if(window.confirm("정말로 목록을 삭제하시겠습니까?\n삭제된 목록은 복구 할 수 없습니다.")) {
            BoardService.deletestuBoard(this.state.studentId).then( res => {
                console.log("delete result => "+ JSON.stringify(res));
                if (res.status == 200) {
                    this.props.history.push('/student');
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
                                <label> 학번 </label> : {this.state.student.studentId}
                            </div>

                            <div className = "row">
                                <label> 학생명 </label> : {this.state.student.studentNm}
                            </div>

                            <div className = "row">
                                <label> 연락처 </label> : {this.state.student.stuTelNum}
                            </div>

                            <div className = "row">
                                <label> 이메일 주소 </label> : {this.state.student.emal}
                            </div>

                            <div className = "row">
                                <label> 전공 </label> : {this.state.student.majCd}
                            </div>

                            <div className = "row">
                                <label> 기업 아이디 </label> : {this.state.student.stuComId}
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


export default ReadStudentComponent;