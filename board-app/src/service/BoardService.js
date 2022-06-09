import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/company";

class BoardService {

    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(comId) {
        return axios.get(BOARD_API_BASE_URL + "/" + comId);
    }

    updateBoard(comId, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + comId , board);
    }

    deleteBoard(comId) {
        return axios.delete(BOARD_API_BASE_URL + "/" + comId);
    }
    
}

export default new BoardService();