import { createSlice } from '@reduxjs/toolkit';

const Formslice = createSlice({
    name: "formData",
    initialState: {
        Data: [],

    },
    reducers: {
        addData: (state, action) => {
            const item = { ...action.payload };
            item.Id = new Date().getTime();
            state.Data.push(item);
        },
        console

        // const item = { ...action.payload };
        // item.Id = new Date().getTime();
        // state.expenceList.push(item);

        // updateData(state, action) {
        //     state.value = action.payload;
        // }
    },

    remove(state, action) {
        state.Data = state.Data.filter((item) => item.Id !== action.payload);
        //state.isView=false;
    },



})

export default Formslice.reducer;
export const { addData, remove } = Formslice.actions;