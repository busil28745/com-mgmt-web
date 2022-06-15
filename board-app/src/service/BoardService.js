import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080";

class BoardService {

    getBoards() {
        return axios.get(BOARD_API_BASE_URL + "/company");
    }

    getstuBoards() {
        return axios.get(BOARD_API_BASE_URL + "/student");
    }

    createBoard(board) {
        return axios.post( BOARD_API_BASE_URL + "/company", board );
    }

    createstuBoard(student) {
        return axios.post( BOARD_API_BASE_URL + "/student", student );
    }

    getOneBoard(comId) {
        return axios.get(BOARD_API_BASE_URL + + "/company"+ comId);
    }

    getOnestuBoard(studentId) {
        return axios.get(BOARD_API_BASE_URL + "/student" + studentId);
    }

    updateBoard(comId,board) {
        return axios.put(BOARD_API_BASE_URL + "/company" + comId , board);
    }

    updatestuBoard(studentId,student) {
        return axios.put(BOARD_API_BASE_URL + "/student" + studentId , student );
    }

    deleteBoard(comId) {
        return axios.delete(BOARD_API_BASE_URL + "/company" + comId);
    }

    deletestuBoard(studentId) {
        return axios.delete(BOARD_API_BASE_URL + "/student" + studentId);
    }
    
}

export default new BoardService();