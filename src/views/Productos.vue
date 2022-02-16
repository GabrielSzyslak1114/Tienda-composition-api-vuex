<template>

    <section class="section-filtrador">
        <Title :title="'Nuestros'" :span="'productos'"/>
        <Filtrador/>
        <Buscador/>
    </section>

    <section  id="products">

        <main class="box-container">
            <CardProduct v-for="producto in productos" :key="producto.id" :producto="producto"/>
        </main>
    </section>

</template>

<script>
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
        onMounted(async()=>{
           await store.dispatch('getProducts')
           await store.dispatch('getProductsFiltrados', 'popular')
        })
        const productos = computed(()=> store.getters.topProductos)

        return{
            productos
        }
    }
}
</script>

<style lang="scss" scoped>
.section-filtrador{
    border-radius: 10px;
    padding: 10px 50px;
}
section{
  padding:2rem 9%;
  margin: 50px auto;
  position: relative;

      background: #fcfcfc;

  @media (max-width: 600px) {
    width: 100%;
    padding: 2rem 2%;
  }
}
.box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}
</style>