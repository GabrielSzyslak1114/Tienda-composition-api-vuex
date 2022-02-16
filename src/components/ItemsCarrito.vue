<template>
<main class="item-car">
    <picture>
        <img :src="item.imgurl" alt="">
    </picture>
    <main class="box-text">
        <h2>{{item.title}}</h2>
        <h3>${{priceProductTotal.toFixed(2)}}</h3>
    </main>
    <div class="box-btn-cart"> 
        <button class="btn-circle-carrito" @click="aumentarCar(item.id)"><i class="fas fa-plus"></i></button>
        <h3>{{item.cantidad}}</h3>
        <button class="btn-circle-carrito" @click="disminuirCar(item.id)"><i class="fas fa-minus"></i></button>
    </div>
</main>

</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
props: {
    item: Object
},
setup(props, context){
    const store = useStore()

    const priceProductTotal =  computed(()=>{
        return props.item.price * props.item.cantidad
    })
    
    const  aumentarCar = (id)=> {store.commit('aumentarCar', id)}
    const disminuirCar = (id)=> {store.commit('disminuirCar', id)}
    return{priceProductTotal, aumentarCar, disminuirCar}
}
}
</script>

<style lang="scss" scoped>

    .item-car{
    display: flex;
    width: 98%;
    height: 110px;
    background: #fcfcfc;
    border-radius: 15px;
    margin-bottom: 10px;
    box-shadow: 1px 4px 3px 1px rgb(0, 0, 0, .1);
    @media (max-width: 1160px) {
        height: 100px;
    }
    }

    picture{
        position: relative;
        border-radius: 15px;
        width: 25%;
        @media (max-width: 1160px) {
            width: 20%;
        }

        img{
            width: 100%;
            height: 100%;
            position: absolute;
            background-position: center;
            background-size: cover;
            border-radius: 15px;
        }
    }
    .box-text{
    width: 40%;
    justify-content: center;
    padding: 2%;
    display: flex;
    flex-direction: column;
    }
    .box-btn-cart{
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;


    }

</style>