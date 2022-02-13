<template>
<main class="item-car">
    <picture>
        <img :src="item.imgurl" alt="">
    </picture>
    <main class="box-text">
        <h2>{{item.title}}</h2>
        <h3>${{item.price * item.cantidad}}</h3>
    </main>
    <div class="box-btn-cart"> 
        <button class="btn-circle-carrito" @click="aumentarCar(item.id)"><i class="fas fa-plus"></i></button>
        <h3>{{item.cantidad}}</h3>
        <button class="btn-circle-carrito" @click="disminuirCar(item.id)"><i class="fas fa-minus"></i></button>
    </div>
</main>

</template>

<script>
import { useStore } from 'vuex'
export default {
props: {
    item: Object
},
setup(){
    const store = useStore()
    const  aumentarCar = (id)=> {store.commit('aumentarCar', id)}
    const disminuirCar = (id)=> {store.commit('disminuirCar', id)}
    return{aumentarCar, disminuirCar}
}
}
</script>

<style lang="scss" scoped>

    .item-car{
    display: flex;
    width: 100%;
    height: 135px;
    background: #fcfcfc;
    border-radius: 15px;
    margin-bottom: 10px;
    box-shadow: 1px 4px 3px 1px rgb(0, 0, 0, .1);
    }

    picture{
        position: relative;
        border-radius: 15px;
        width: 30%;

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