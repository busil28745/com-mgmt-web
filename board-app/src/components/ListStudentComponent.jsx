import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            students: []
        }

        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount() {
        BoardService.getstuBoards().then((res) => {
            this.setState({ students: res.data});
        });
    }

    createBoard() {
        this.props.history.push('/createstu-board/_create');
    }

    readBoard(studentId) {
        this.props.history.push(`/readstu-board/${studentId}`);
    }

    sendEmail(emal){
        this.props.history.push(`/send-email/${emal}`);
    }




    render() {
        return (
            <div>
                <h2 className="text-center">학생별 관리 시스템</h2>
                
                <div className= "row">
                    <button className="btn btn-primary" onClick={this.createBoard}> 학생 등록 </button>
                </div>

                <div className= "row">
                    <h2>       </h2>
                    <h2>       </h2>
                </div>

                <div className= "row">
                    <button className="btn btn-primary" onClick={this.sendEmail}> 메일 전송 </button>
                </div>

                <div className= "row">
                    <h2>       </h2>
                    <h2>       </h2>
                </div>
                
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> 학번 </th>
                                <th> 학생명 </th>
                                <th> 연락처 </th>
                                <th> 이메일 주소 </th>
                                <th> 전공 </th>
                                <th> 기업 아이디 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student => 
                                    <tr key = {student.studentId}>
                                        <td> {student.studentId} </td>
                                        <td> <a onClick= {()=>this.readBoard(student.studentId)}>{student.studentNm} </a> </td>
                                        <td> {student.stuTelNum} </td>
                                        <td> <a onClick= {()=>this.sendEmail(student.emal)}>{student.emal} </a></td>
                                        <td> {student.majCd} </td>
                                        <td> {student.stuComId} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;