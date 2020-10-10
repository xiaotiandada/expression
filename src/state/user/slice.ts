import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../index";
import { removeCookie } from "../../utils/cookie";

interface userState {
    username: string
}

const initialState :userState = {
    username: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsernameReducer: (state, action: PayloadAction<string>) => {
            console.log('action', action)
            state.username = action.payload
        }
    }
})

export const userLogOut = (): AppThunk => dispatch => {
    dispatch(setUsernameReducer(''))
    removeCookie('access-token')
    return Promise.resolve('success logout')
}

export const { setUsernameReducer } = userSlice.actions

export const selectUsername = (state: RootState) => state.user.username

export default userSlice.reducer