<template>
  <section :class="activarCarrito" >
    <main class="carrito-box">
        <div class="header-carrito">
            <h4>Carrito de compras</h4>
            <div class="box-btn-cart">
                <button class="btn-circle-carrito" id="vaciar-carrito" @click="vaciarCar">
                <i class="fas fa-trash"></i>
                </button>
                <button class="btn-circle-carrito" @click="cerrarCar "><i class="fas fa-circle-xmark"></i></button>
            </div>
        </div>
            <section class="body-item-car">
            <ItemsCarrito v-for="item in carrito" :key="item.id" :item="item" />
            </section>
            <div class="footer-carrito">
                <th scope="row" colspan="5" v-if="Object.keys(carrito).length === 0">Carrito vacío - comience a comprar!</th>
                <FooterCarrito v-else/>
            </div>
      </main>

  </section>
</template>

<script>
import { computed, ref } from 'vue'
import {useStore} from 'vuex'
import ItemsCarrito from './ItemsCarrito'
import FooterCarrito from './FooterCarrito'
export default {
    components:{ItemsCarrito, FooterCarrito},
    setup(){
        const store = useStore()

        const activarCarrito = computed(()=> store.state.verCarrito === true 
       ? 'activarCarrito' 
       : 'body-carrito'
      )

        const carrito = computed(()=> store.state.carrito)
        const vaciarCar = ()=>{
            {store.commit('vaciarCar')}
        } 
        const cerrarCar = ()=>{
            {store.commit('ocultarCarrito')}
        }
   return{carrito, vaciarCar, activarCarrito,cerrarCar }
   }


}
</script>

<style lang="scss">


.body-carrito{
    width: 30%;
    height: 100%;
    position: fixed;
    top: 0;
    transition: .4s;

    right: -100% !important;
}

.activarCarrito{
    right: 0% !important;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1%;
    background: #ffff;
    position: fixed;
    top: 0;
    z-index: 100;
    box-shadow: 10px 5px 10px 10px rgb(0,0,0,.1);
    transition: .4s;
  
}

    .carrito-box{
    width: 100%;
    height: 100%;
    margin-top: 3%;
    position: relative;
    display: grid;
    grid-template-rows: 50px 500px 150px;
    grid-gap: 15px;
        h4{
            font-size: 3em;
            color: $color-background;
        }
    }

    .header-carrito{
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

    .footer-carrito{
    border-radius: 15px;
    background: #fcfcfc;
    display: flex;
    align-items: center;
    padding: 5px;
    display: flex;
    justify-content: center;
    height: 100px;
    }

    .box-btn-cart{
        display: flex;
        justify-content: space-between;
        width: 80px;
    }

    .btn-circle-carrito{
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.315);
            border: 1px solid $color-primary;
            color: $color-primary;
            &:hover{
                background: $color-primary;
                transform: scale(.9);
                i{
                color: #ffff;
                }
            }
        i{
            color: red;
            cursor: pointer;
            height: 12px;

        }
    }

    .body-item-car{
    width: 100%;
    padding: 0%;
    margin: 0%;

    }
</style>