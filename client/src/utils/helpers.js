import axios from 'axios';

class helpers {
    sendData(data) {
        axios.post('http://localhost:4200/users/create', {
            data: data
        })
            .then(res => this.setState({ createUser: res.data })
        )
        .catch(err => console.log(err));
    }

}

export default helpers;