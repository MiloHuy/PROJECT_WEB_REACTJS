import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data";
export const filterProductSlice = createSlice({
    name: "products",
    initialState:{
        filteredProducts: JSON.parse(sessionStorage.getItem("filterData")) || storeData,
        singleProdct: JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
        error: false
    },
    reducers:{
        filterProducts(state,action){
            try
            {
                console.log("Action: " , action)
                const filter = storeData.filter(product => product.type === action.payload)
                state.filteredProducts = filter
                state.error = false;
                console.log("Filter: ",filter)
                const saveState = JSON.stringify(filter)
                sessionStorage.setItem("filterData", saveState)
            }   
            catch(e){
                return e
            }
        },
        singleProduct(state,action){
            try{
                const oneProduct = storeData.filter(product => product.id === action.payload)
                state.singleProdct = oneProduct
                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem("oneProduct", saveState)
            }   
            catch(e){
                return e
            }
        },
        filerGender(state,action){
            try{
               const gender = state.filteredProducts.filter((product)=> product.gender === action.payload)
                state.error = false
                state.filteredProducts = gender
                const oneGenderType = gender.length > 0
                console.log("One gender type ", oneGenderType)
                if(oneGenderType){
                    state.error = false
                    const saveState = JSON.stringify(gender)
                    sessionStorage.setItem("filterData", saveState)
                }
                else{
                    state.error = true
                    state.filteredProducts = []
                }
            }   
            catch(e){
                return e
            }
        },
        sortByPrice(state,action){
            try{
                const price = state.filteredProducts.sort((a,b) =>
                    a.price > b.price ? -1 : 1
                    )
                state.filteredProducts = price
                let count = price.length
                if(count > 1)
                {
                    const noError = false
                    state.error = noError
                    if(!noError){
                        state.filteredProducts = price
                        const saveState = JSON.stringify(price)
                        sessionStorage.setItem("filterData", saveState)
                    }
                }
                else{
                    state.error = true
                    state.filteredProducts =[]
                }
             }   
             catch(e){
                 return e
             }
            },
            filterByColor(state,action){
                try {
                    const color = state.filteredProducts.filter((product) =>
                      product.color.includes(action.payload)
                    );
                    state.error = false;
                    state.filteredProducts = color;
                    if (color.length <= 0) {
                      state.error = true;
                      state.filteredProducts = [];
                    } else {
                      state.error = false;
                      state.filteredProducts = color;
                      const saveState = JSON.stringify(color);
                      sessionStorage.setItem("filteredData", saveState);
                    }
                  } catch (err) {
                    return err;
                  }
            },
            filterBySize(state,action){
                try {
                    const size = state.filteredProducts.filter((product) =>
                      product.size.includes(action.payload)
                    );
                    state.error = false;
                    state.filteredProducts = size;
                    if (size.length <= 0) {
                      state.error = true;
                      state.filteredProducts = [];
                    } else {
                      state.error = false;
                      state.filteredProducts = size;
                      const saveState = JSON.stringify(size);
                      sessionStorage.setItem("filteredData", saveState);
                    }
                } 
                catch (err) 
                {
                    return err;
                }
            },
            
            }
    },
    
)
export const {filterProducts,singleProduct,filerGender,sortByPrice,filterByColor,filterBySize} = filterProductSlice.actions
export default filterProductSlice.reducer