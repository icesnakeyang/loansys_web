import {createSlice} from "@reduxjs/toolkit";

export const homeSlice = createSlice({
        name: "homeSlice",
        initialState: {
            freshCount: 0,
        },
        reducers: {
            doFresh: (state: any) => {
                console.log('fresh ++')
                state.freshCount += 1;
            },
            clearFresh: (state: any) => {
                state.freshCount = 0
            }
        },
    })
;

export const {doFresh, clearFresh} = homeSlice.actions;
export default homeSlice.reducer;
