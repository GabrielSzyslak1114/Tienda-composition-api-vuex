<template>
<section class="body-page-product">
    <main class="section-filtrador">
        <Title :title="'Nuestros'" :span="'productos'"/>
        <Filtrador/>
        <Buscador/>
    </main>

    <main  class="products">
        <div class="box-container">
            <transition-group appear @before-enter="beforeEnter" @enter="enter">
                     <CardProduct v-for="(producto, index) in productos" :key="producto.id" :data-index="index" :producto="producto"/>
            </transition-group>
        </div>
    </main>
</section>


</template>

<script>
import gsap from 'gsap'
import Title from '../components/Title.vue'
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import CardProduct from '../components/CardProduct.vue'
import Filtrador from '../components/Filtrador.vue'
import Buscador from '../components/Buscador.vue'
export default {
  components: { CardProduct, Filtrador, Title, Buscador },
    setup(){
        const store = useStore()

         const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }

        onMounted(async()=>{
           await store.dispatch('getProducts')
           await store.dispatch('getProductsFiltrados', 'popular')
        })
        const productos = computed(()=> store.getters.topProductos)

        return{
            productos,  beforeEnter, enter 
        }
    }
}
</script>

<style lang="scss" scoped>
.body-page-product{
    min-width: 95%;
    min-height: 100vh;
    height: auto;
    margin: 50px auto 0;
    display: grid;
    grid-template-columns: 25% 74%;
    gap: 1%;
    padding: 20px 10px 0px;
    @media (max-width: 1160px) {
      gap: 30px;
      grid-template-columns: none;
     grid-template-rows: 390px auto;
    }
    @media (max-width: 620px){
      gap: 30px;
      grid-template-columns: none;
     grid-template-rows: 390px auto;



    }
  
}

.section-filtrador{
    border-radius: 10px;
    padding: 10px;

    height: auto;
    border-right: 1px solid #3f3f3f1f;
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    @media (max-width: 1160px) {
      flex-direction: row;
      justify-content: center;
      border-right: none;
      border-bottom: 2px solid #3f3f3f1f;
      max-height: 380px;
    }
}

.products{
      height: auto;
    padding: 10px;
}

section{
  padding:2rem 9%;
  margin: 50px auto;
  position: relative;

      

  @media (max-width: 600px) {
    width: 100%;
    padding: 2rem 2%;
  }
}
.box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
      width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 20px 0;
    justify-content: center;
}
</style>