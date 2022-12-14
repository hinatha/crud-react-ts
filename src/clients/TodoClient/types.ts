import { Todo, Params } from '../../types'

export interface TodoClientInterface {
    getAll(): Promise<Todo[]>

    get(id: number): Promise<Todo>

    create(params: Params): Promise<Todo>

    update(id: number, todo: Todo): Promise<Todo>

    delete(id: number): Promise<void>
}