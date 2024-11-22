import axios from 'axios';

const userApi = axios.create({
    //baseURL:'http://127.0.0.1:8000/api/users/' para despliegue local
    baseURL:'https://django-react-user-backend-deploy.onrender.com/api/users/'
})

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

export const getAllUsers = () => userApi.get('/')

export const createUser = (user: Omit<User, 'id'>) => userApi.post('/', user)

