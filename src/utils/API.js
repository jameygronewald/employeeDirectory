import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=100&exc=gender,location,login,registered,cell,id,nat';

export default {
    getEmployees: () => {
        return axios.get(URL);
    }
};