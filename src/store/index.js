import { createStore } from 'vuex'

export default createStore({
  state: {
   productos: [],
   productosFiltrados: [],
   carrito: {},
   verCarrito: false

  },
  mutations:{
    getProducts(state, payload){
      state.productos = payload
    },
    getProductsFiltrados(state, payload){
      state.productosFiltrados = payload
    },
    addCar(state, payload){
      state.carrito[payload.id] = payload
    },
    vaciarCar(state){
      state.carrito = {}
    },
    aumentarCar(state, payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1
    },
    disminuirCar(state, payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1
      if (state.carrito[payload].cantidad === 0) {
        delete state.carrito[payload]
      }
    },

    verCarrito(state){
      state.verCarrito = true
    },
    ocultarCarrito(state){
      state.verCarrito = false
    }
  },
  actions: {
   async getProducts({commit}){
      const res = await fetch('https://restaurant-hamburguer-vue-default-rtdb.firebaseio.com/productos.json')

      const productos = await res.json()

      const arrayDatos = []
        
      for (let id in productos){
        arrayDatos.push(productos[id])
      }
      console.log(productos)
      commit('getProducts', arrayDatos)
    },

    getProductsFiltrados({commit, state}, categoria){
      const filtro = state.productos.filter(producto => producto.categoria.includes(categoria))
      commit('getProductsFiltrados', filtro)
    },
    filtroBuscador({commit, state}, texto){
      const textCliente = texto.toLowerCase()
      const filtro = state.productos.filter(producto => {
        const productoApi = producto.title.toLowerCase()
        if (productoApi.includes(textCliente)) {
          return producto
        }
      })
      commit('getProductsFiltrados', filtro)
    },
    addCar({commit, state}, producto){
      //buscar si es que existe dentro de carrito una propiedad similar al parametro (producto)
      state.carrito.hasOwnProperty(producto.id)
      ? producto.cantidad = state.carrito[producto.id].cantidad + 1
      : producto.cantidad = 1
      commit('addCar', producto)
    }

  },

  getters:{
    //Ordena los productos de mayor a menor...
    topProductos(state){
      return state.productosFiltrados.sort((a,b)=> a.price < b.price ? 1 : -1
      )
    },
    totalCantidad(state){
      //Sumar todos los valores del objeto
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    },
    totalPrecio(state){
      return Object.values(state.carrito).reduce((acc, {cantidad, price})=> acc + cantidad * price, 0)
    }
  },
  modules: {
  }
})
