import { TodoClient } from './TodoClient'
import { TodoClientInterface } from './TodoClient/types'
import { MockTodoClient } from './TodoClient/mock'

export const TODOS = 'todos'

export interface Repositories {
    [TODOS]: TodoClientInterface
}

export default {
    // If NODE_ENV is mock, work on mock ver
    // Else work on localstrage version
    [TODOS]: process.env.REACT_APP_ENV === 'mock' ? new MockTodoClient() : new TodoClient(),
} as Repositories
