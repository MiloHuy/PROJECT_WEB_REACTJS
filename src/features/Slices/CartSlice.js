import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            const productId = action.payload
            try {
                const existproduct = state.cart.find(
                    (product) => product.id === productId.id
                        && product.size === productId.size
                        && product.color === productId.color)
                console.log("ProductId: ", productId)
                console.log("Exist : ", { existproduct })
                if (existproduct) {
                    existproduct.amount++;
                    existproduct.totalAmount += productId.price;
                    state.totalAmount++;
                    state.totalPrice += productId.price;
                    // const saveState = JSON.stringify(existproduct)
                    // sessionStorage.setItem("addToCart", saveState)
                } else {
                    state.cart.push({
                        id: productId.id,
                        price: productId.price,
                        size: productId.size,
                        img: productId.img,
                        text: productId.text,
                        amount: 1,
                        totalPrice: productId.price,
                        name: productId.name,
                        color: productId.color,
                    })
                    state.totalAmount++
                    state.totalPrice += productId.price;
                }
            }
            catch (err) {
                return err
            }
        },
        removeItemFromCart(state, action) {
            const productId = action.payload
            try {
                const existproduct = state.cart.find(
                    (product) => product.id === productId.id
                        && product.size === productId.size
                        && product.color === productId.color)
                console.log("ProductId: ", productId)
                console.log("Exist : ", existproduct.amount)
                if (existproduct.amount === 1) {
                    state.cart = state.cart.filter((product) => product.id !== existproduct.id ||
                        product.size !== productId.size ||
                        product.color !== productId.color)
                    state.totalAmount--;
                    state.totalPrice -= productId.price;
                }
                else {
                    existproduct.amount--;
                    existproduct.totalPrice += productId.price;
                    state.totalAmount--;
                    state.totalPrice -= productId.price;
                }
            }
            catch (e) {
                return e
            }
        }
    }
})
export const { addToCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
