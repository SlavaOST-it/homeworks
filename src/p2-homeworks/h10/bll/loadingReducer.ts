
export type LoadingActionType = ReturnType<typeof loadingAC>


const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType) => { // fix any
    switch (action.type) {
        case "SET-LOADING": {
            return {...state,
            isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: "SET-LOADING",
        isLoading
    } as const
}