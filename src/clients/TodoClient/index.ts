import { Todo , Params } from '../../types'
import { TodoClientInterface } from './types'

export class TodoClient implements TodoClientInterface {
    getAll() {
        return Promise.resolve(
        // Get localStrage key list(todo.id list)
        Object.keys(localStorage)
        // Change string to number
            .filter((key: any) => !isNaN(Number(key)))
            .map((key: any) => {
            // Change value(string) to todo(json)
            const todo = JSON.parse(localStorage.getItem(key) as string) as Todo
            // Change type of todo.createdAt from string to Date
            todo.createdAt = new Date(todo.createdAt)
            // Change type of todo.updatedAt from string to Date
            todo.updatedAt = new Date(todo.updatedAt)
            return todo
        })
        )
    }

    get(id: number) {
        // Find todo by todo.id
        const item = localStorage.getItem(String(id))
        if (item === null) {
        return Promise.reject(new Error(`id: ${id} is not found`))
        }
        // Change item from string to todo json
        return Promise.resolve(JSON.parse(item) as Todo)
    }

    create(params: Params) {
        // Make todo from param
        const todo = this.intitializeTodo(params)
        // key: todo.id as string, value: todo as string
        localStorage.setItem(String(todo.id), JSON.stringify(todo))
        return Promise.resolve(todo)
    }

    update(id: number, todo: Todo) {
        // Remove todo by todo.id
        localStorage.removeItem(String(id))
        // Change todo.updatedAt
        todo.updatedAt = new Date()
        // Add todo by id
        // key: todo.id as string, value: todo as string
        localStorage.setItem(String(id), JSON.stringify(todo))
        return Promise.resolve(todo)
    }

    delete(id: number) {
        // Remove todo by todo.id
        localStorage.removeItem(String(id))
        return Promise.resolve()
    }

    intitializeTodo(todo: Params) {
        const date = new Date()
        return {
        id: date.getTime(),
        title: todo.title,
        description: todo.description,
        status: todo.status,
        createdAt: date,
        updatedAt: date,
        } as Todo
    }
}
