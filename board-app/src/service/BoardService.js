import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/company";

class BoardService {

    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
    createBoard(comId) {
        return axios.post(BOARD_API_BASE_URL, comId);
    }

    getOneBoard(comId) {
        return axios.get(BOARD_API_BASE_URL + "/" + comId);
    }

    updateBoard(comId) {
        return axios.put(BOARD_API_BASE_URL, comId);
    }

    deleteBoard(comId) {
        return axios.delete(BOARD_API_BASE_URL + "/" + comId);
    }
}

export default new BoardService();