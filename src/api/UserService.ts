import { AxiosResponse } from "axios";
import { IUser } from '../models/IUser';
import axios from 'axios';



export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./users.json')
    }
}