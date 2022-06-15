import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

            studentId: this.props.match.params.studentId,
            studentNm : '',
            telNum : '',
            emal : '',
            majCd : '',
            comId : '',

        }

        this.changeStudentIdHandler = this.changeStudentIdHandler.bind(this);
        this.changeStudentNmHandler = this.changeStudentNmHandler.bind(this);
        this.changeEmalHandler = this.changeEmalHandler.bind(this);
        this.changeTelNumHandler = this.changeTelNumHandler.bind(this);
        this.changeMajCdHandler = this.changeMajCdHandler.bind(this);
        this.changeComIdHandler = this.changeComIdHandler.bind(this);

        this.createBoard = this.createBoard.bind(this);
    }


    changeStudentIdHandler = (event) => {
        this.setState({studentId: event.target.value});
    }

    changeStudentNmHandler = (event) => {
        this.setState({ studentNm: event.target.value});
    }

    changeEmalHandler = (event) => {
        this.setState({emal: event.target.value});
    }

    changeTelNumHandler = (event) => {
        this.setState({telNum: event.target.value});
    }

    changeMajCdHandler = (event) => {
        this.setState({ majCd : event.target.value});
    }

    changeComIdHandler = (event) => {
        this.setState({ comId : event.target.value});
    }


    createBoard = (event) => {
        event.preventDefault();
        let student = {
                    comId: this.state.comId,
                    telNum: this.state.telNum,
                    studentId: this.state.studentId,
                    emal: this.state.emal,
                    majCd: this.state.majCd,
                    studentNm:  this.state.studentNm,
        };
        /*
        console.log("board => "+ JSON.stringify(board));
        if (this.state.comId === '_create') {
            BoardService.createBoard(board).then(res => {
                this.props.history.push('/board');
            });
        } else {
            BoardService.updateBoard(this.state.comId, board).then(res => {
                this.props.history.push('/board');
            });
        }*/
        console.log("student => "+ JSON.stringify(student));
        BoardService.createstuBoard(student).then(res => {
            this.props.history.push('/student');
        });

    }

    cancel() {
        this.props.history.push('/student');
    }

    getTitle() {
        if (this.state.studentId === '_create') {
            return <h3 className="text-center">새 기업을 등록해주세요.</h3>
        } else {
            return <h3 className="text-center">{this.state.studentId} 내용을 수정 합니다.</h3>
        }
    }

    componentDidMount() {
        if (this.state.studentId === '_create') {
            return
        } else {
            BoardService.getOnestuBoard(this.state.studentId).then( (res) => {
                let student = res.data;
                console.log("student => "+ JSON.stringify(student));
                
                this.setState({
                    comId: this.state.comId,
                    telNum: this.state.telNum,
                    studentId: this.state.studentId,
                    emal: this.state.emal,
                    majCd: this.state.majCd,
                    studentNm:  this.state.studentNm,
        
                    });
            });
        }
    }
    

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">새글을 작성해주세요</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> 학번 </label>
                                        <input type="text" placeholder="studentId" name="studentId" className="form-control"
                                        value={this.state.studentId} onChange={this.changeStudentIdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 학생명 </label>
                                        <input type="text" placeholder="studentNm" name="studentNm" className="form-control"
                                               value={this.state.studentNm} onChange={this.changeStudentNmHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 연락처 </label>
                                        <input type="text" placeholder="telNum" name="telNum" className="form-control"
                                               value={this.state.telNum} onChange={this.changeTelNumHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 이메일 주소 </label>
                                        <input type="text" placeholder="emal" name="emal" className="form-control"
                                               value={this.state.emal} onChange={this.changeEmalHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 전공 </label>
                                        <input type="text" placeholder="majCd" name="majCd" className="form-control"
                                               value={this.state.majCd} onChange={this.changeMajCdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 기업 아이디 </label>
                                        <input type="text" placeholder="comId" name="comId" className="form-control"
                                               value={this.state.comId} onChange={this.changeComIdHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateStudentComponent;