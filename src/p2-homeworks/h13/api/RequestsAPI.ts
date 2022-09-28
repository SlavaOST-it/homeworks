import axios from "axios";


export const requestsApi = {

    postCheckBoxValue(isChecked: boolean){
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',
            {success: isChecked})
            .then((res) => res.data)
    }
};

