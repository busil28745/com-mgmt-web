import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ListBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = ({ 
            boards: []
        })
    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ boards: res.data});
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">기업별 관리 페이지</h2>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>기업 아이디</th>
                                <th>기업 명</th>
                                <th>주소</th>
                                <th>교육 과정 유형</th>
                                <th>약정 인원</th>
                                <th>연락처</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board => 
                                    <tr key = {board.comId}>
                                        <td> {board.comId} </td>
                                        <td> {board.comNm} </td>
                                        <td> {board.addr} </td>
                                        <td> {board.eduTypeCd} </td>
                                        <td> {board.stuNum} </td>
                                        <td> {board.telNum} </td>
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

export default ListBoardComponent;