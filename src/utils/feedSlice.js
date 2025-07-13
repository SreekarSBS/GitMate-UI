import { createSlice } from "@reduxjs/toolkit"

const feedSlice = createSlice({
    name : "feed",
    initialState : null,
    reducers : {
        addFeed :(state,action) => action.payload,
        removeUserfromFeed : (state,action) => {
            const newFeed = state.filter(item => item._id != action.payload)
            return newFeed
        },
        removeFeed : () => null
        
    }
})


export const {addFeed , removeUserfromFeed , removeFeed} = feedSlice.actions

export default feedSlice.reducer