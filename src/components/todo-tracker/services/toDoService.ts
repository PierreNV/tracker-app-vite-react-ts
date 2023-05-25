import axios from "axios";
import ToDo from "../models/toDo";

class ToDoService {
    http = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" })

    async getToDos() {
        const res = await this.http.get<ToDo[]>("/todos", {
            params: {
                _limit: 5
            }
        })
        return res.data
    }

    async addToDo(title: string) {
        const res = await this.http.post<ToDo>("/todos", { title })
        return res.data
    }

    async removeToDo(id: number) {
        const res = await this.http.delete("/todos" + id)
        return res.data
    }

}

export default new ToDoService()