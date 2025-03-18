import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const arr = [...state]
            const upOrDown = action.payload === 'up';
            const sortForNAme = arr.sort((a,b) => upOrDown? (a.name > b.name? 1: -1) : (b.name > a.name? 1: -1))
            return sortForNAme // need to fix
        }
        case 'check': {
            const checkAge = state.filter( u => u.age >= 18? u : '')
            return checkAge // need to fix
        }
        default:
            return state
    }
}
