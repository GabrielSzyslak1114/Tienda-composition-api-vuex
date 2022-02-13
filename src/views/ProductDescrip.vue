<template>
  <h1>Producto descripcion: {{$route.params.id}}</h1>
  <section class="body-product-Descrip">
      <main class="product-box-image">
          <img :src="producto.imgurl" alt="">
      </main>
      <main class="product-box-descrip">
        <h1>{{producto.title}}</h1>
        <div class="descrip">
            <h2>Precio: $<span>{{producto.price}}</span></h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit sequi recusandae fuga quam ab aut!</p>
        </div>
      </main>
  </section>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import Title from '../components/Title.vue'
export default {
    props: ['id'],
    components:{
        Title
    },
    setup(props){
        const producto = ref({})
        onMounted(async()=>{
            try {
                const res = await fetch(`https://restaurant-hamburguer-vue-default-rtdb.firebaseio.com/productos/${props.id}.json`)
                producto.value = await res.json()
            } catch (error) {
                console.log(error, 'no consumio')
            }
        })
        return{producto}
    }
}
</script>

<style lang="scss" scoped>
.body-product-Descrip{
    width: 100%;
    height: 60vh;
    background: #fcfcfc;
    display: flex;
    align-items: center;
    margin: 100px auto ;

    .product-box-image{
        height: 100%;
        width: 50%;
        padding: 50px;

        img{
            width: 100%;
        }
    }

    .product-box-descrip{
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 50px;
        .descrip{
            margin-top: 15px;
        }
        h1{
            font-size: 4.5em;
            color: $color-primary;
            
        }
        h2{
            font-size: 2.1em;
        }
        p{
            font-size: 1.8em;
            margin-top: 4px;
            
        }
    }

}
</style>