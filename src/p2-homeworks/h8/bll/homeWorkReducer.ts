import {UserType} from "../HW8";

export type SortUpAT = {
    type: 'SORT',
    payload: 'UP' | 'DOWN'
}

export type CheckAT = {
    type: 'CHECK',
    payload: number
}
export type ActionType = SortUpAT | CheckAT


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'UP' ? newState : newState.reverse()
        }

        case 'CHECK': {
            return [...state.filter(el => el.age > action.payload)]
        }

        default:
            return state
    }
}