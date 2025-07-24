import { createSlice } from "@reduxjs/toolkit"

const feedSlice = createSlice({
    name : "feed",
    initialState : null,
    reducers : {
        addFeed :(state,action) => action.payload,
        addPage: (state,action) => [...state, ...action.payload],
        removeUserfromFeed : (state,action) => {
            const newFeed = state.filter(item => item._id != action.payload)
            return newFeed
        },
        removeFeed : () => null
        
    }
})


export const {addFeed , addPage, removeUserfromFeed , removeFeed} = feedSlice.actions

export default feedSlice.reducer