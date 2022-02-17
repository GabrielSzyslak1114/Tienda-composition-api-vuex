<template>
  <section :class="activarCarrito" >
    <main class="carrito-box">
        <div class="header-carrito">
            <h4>Tu canasta </h4>
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

<style lang="scss" scoped>


.body-carrito{
    width: 30%;
    height: 100%;
    position: fixed;
    top: 0;
    transition: .4s ease-in-out;
    right: -100% ;
    background: #ffff;
        @media (max-width: 1160px) {
            top: none;
            bottom: -100%;
            width: 100%;
            top: auto;
            height: 55%;
            right: auto !important;
                }
}

.activarCarrito{
    top: 60px !important;
    right: 0% !important;
    margin: 0 !important;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 12px;
    background: #ffff;
    position: fixed;
    z-index: 100;
    box-shadow: 10px 5px 10px 10px rgb(0,0,0,.1);
    transition: .4s ease-in-out;

        @media (max-width: 1160px) {
            bottom: 0% !important;
            top: auto !important;
            width: 100%;
            height: 52%;
            margin: 0;
            border-radius: 50px 50px 0px 0px;
            box-shadow: 0px -2px 10px 0px rgba(43, 43, 43, 0.096);
    }
    
  
}

    .carrito-box{
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-rows: 10% 65% 15%;
    grid-gap: 5px;
        @media (max-width: 1160px) {
        grid-template-rows: 15% 60% 15%;
        margin: 0 auto;
        width: 95%;
        grid-gap: 5px;

        }
        h4{
            font-size: 3em;
            color: $color-background;
        }
    }

    .header-carrito{
    display: flex;
    align-items: center;
    justify-content: space-between;
        @media (max-width: 1160px) {
                padding: 5px;

        }
    }

    .footer-carrito{
    padding: 1px;
    min-height: 115px;
    position: relative;
    background: white;
    display: flex;
    align-items: center;
        @media (max-width: 1160px) {
            min-height: 70px;
        }

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
            border: 1px solid $color-secundary;
            color: $color-secundary;
            &:hover{
                background: $color-secundary;
                transform: scale(.9);
                i{
                color: #ffff;
                }
            }
        i{
            color: $color-secundary;
            cursor: pointer;
            height: 12px;

        }
    }

    .body-item-car{
    width: 100%;
    padding: 0%;
    margin: 0 auto;

        transition: height 0.3s ease 0s;
    overflow: hidden;
    height: auto;
        overflow: auto;


    }
</style>