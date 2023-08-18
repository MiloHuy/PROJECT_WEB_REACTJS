import {createSlice} from '@reduxjs/toolkit'
import { dataSlider } from '../../assets/data'
export const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        value: 0,
        length: dataSlider.length,
    },
    reducers: {
        nextSlide(state,action) {
            state.value = action.payload > state.length - 1 ? 0 : action.payload
        },
        prevSlide(state,action) {
            state.value = action.payload <0  ? state.length - 1: action.payload
        },
        dotSlides(state,action) {
            const slider = action.payload
            state.value = slider
        },
    }
})

export const {nextSlide, prevSlide, dotSlides} = sliderSlice.actions
export default sliderSlice.reducer