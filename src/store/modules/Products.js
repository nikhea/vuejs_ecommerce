import axios from "axios";


const state = {
    products: [],
};
const getters = {
    AllProducts: (state) => {
        
         return state.products
      }
};
const actions = {
     
    async fetchProducts({ commit }) {
        const response = await axios.get(`http://localhost:2000/api/routes/products`)
      
        commit('setProducts', response.data)
         
    },
    async fetchProduct({ commit }, id) {
        const response = await axios.get(`http://localhost:2000/api/routes/products/${id}`)
       
        commit('setProduct', response)
    }
}
const mutations = {
    setProducts: (state, products) => (state.products = products),
    setProduct: (product) => ( product)
};

export default {
	state,
	actions,
	mutations,
	getters
};
