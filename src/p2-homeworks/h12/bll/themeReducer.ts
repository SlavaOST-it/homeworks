export type changeThemeActionType = ReturnType<typeof changeThemeAC>
export type ActionType = changeThemeActionType

// export type ThemeType = ['default', 'dark', 'red', 'some']

export type InitStateType = {
    isTheme: string
}
const initState = {
    isTheme: 'default'
} as const;

export const themeReducer = (state:InitStateType = initState, action: changeThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state,
            isTheme: action.isTheme}
        }
        default:
            return state;
    }
};

export const changeThemeAC = (isTheme: string) => {
    return {
        type: "CHANGE-THEME",
        isTheme
    } as const
}; // fix any