import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/company";

class BoardService {

    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
    createBoard(board) {
        return axios.post( BOARD_API_BASE_URL , board );
    }

    createstuBoard(student) {
        return axios.post( BOARD_API_BASE_URL , student );
    }

    getOneBoard(comId) {
        return axios.get(BOARD_API_BASE_URL + "/" + comId);
    }

    getOnestuBoard(studentId) {
        return axios.get(BOARD_API_BASE_URL + "/" + studentId);
    }

    updateBoard(comId,board) {
        return axios.put(BOARD_API_BASE_URL + "/" + comId , board);
    }

    updatestuBoard(studentId,student) {
        return axios.put(BOARD_API_BASE_URL + "/" + studentId , student );
    }

    deleteBoard(comId) {
        return axios.delete(BOARD_API_BASE_URL + "/" + comId);
    }

    deletestuBoard(studentId) {
        return axios.delete(BOARD_API_BASE_URL + "/" + studentId);
    }
    
}

export default new BoardService();