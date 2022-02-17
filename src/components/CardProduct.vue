<template>
        <div class="box">
            <span class="price"> ${{producto.price}}</span>
            <img :src="producto.imgurl" alt="">
            <h3>{{producto.title}}</h3>
            <div class="box-btn">
            <router-link class="btn" :to="`/producto/${producto.id}`">ver</router-link>
            <a class="btn" @click="agregar(producto)">Agregar</a>
            </div>

        </div>
</template>

<script>

import { useStore } from 'vuex'
export default {
    props: ['producto'],
    setup(){
        const store = useStore()

        const agregar = producto =>{
            store.dispatch('addCar', producto)
            {store.commit('verCarrito')}

        }

        return{agregar}
    }
}
</script>

<style lang="scss" scoped>

.box{
  padding:2rem;
  background:#fff;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
  border:.1rem solid rgba(0,0,0,.3);
  border-radius: .5rem;
  text-align: center;
  flex:1 1 30rem;
  position: relative;
    max-height: 400px;
    max-width: 505px;
    img{
        height:25rem;
        object-fit: cover;
        width:100%;
        border-radius: .5rem;
    }
    .price{
        position: absolute;
        top:3rem; left:3rem;
        background:var(--red);
        color:#fff;
        font-size: 2rem;
        padding:.5rem 1rem;
        border-radius: .5rem;
    }
    h3{
        color:#333;
        font-size: 2.5rem;
        padding-top: 1rem;
    }
    .stars i{
        color:gold;
        font-size: 1.7rem;
        padding:1rem .1rem;
    }

    .box-btn{
        display: flex;
        justify-content: space-evenly;
    }

}

</style>