import axios from 'axios';

const URL = 'https://randomuser.me/api/?results=100&nat=us&exc=gender,location,login,registered,cell,id';

export default {
    getEmployees: () => {
        return axios.get(URL);
    }
};