<template>
  <Banner/>
  <section>
    <Title :title="`Rapido`" :span="`proceso`"></Title>
    <main class="box-container">
      <div class="steps">
      <Steps v-for="(step, index) in arrayData" :key="index" :step="step"/>
      </div>
    </main>
  </section>

  <!-- speciality -->
  <section id="speciality">
    <Title :title="'Nuestra'" :span="'especialidad'"/>
    <main class="box-container" >
    <Speciality  v-for="speciality in especialidad" :key="speciality.id" :speciality="speciality"/>
    </main>
  </section>

  <!-- popular-->
  <section  id="popular">
    <Title :title="'Lo más'" :span="'popular'"/>
    <main class="box-container">
      <CardProduct v-for="producto in popular" :producto="producto" :key="producto.id"/>
    </main>
  </section>


<!-- gallery section starts  -->

  <section>
    <Title :title="'Ricos'" :span="'desayunos'"/>
    <div class="box-container">
      <Galery v-for="image in galeria" :key="image.id" :image="image"/>
    </div>
  </section>

</template>

<script>
import {useStore} from 'vuex'
import Banner from '../components/Banner.vue'
import Title from '../components/Title.vue'
import CardProduct from '../components/CardProduct.vue'
import Speciality from '../components/Speciality.vue'
import { computed, onMounted, ref } from '@vue/runtime-core'
import Steps from '../components/Steps.vue'
import Galery from '../components/Galery.vue'
import {useFetch} from '../hooks/useFetch'

export default {
  components: {
    Banner,
     Title,
    Speciality,
    CardProduct,
    Steps,
    Galery 
  },
 
      setup(){
      const store = useStore()

      onMounted(()=>{
        store.dispatch('getProducts')
      })

      const popular = computed(()=> store.state.productos.filter(item => item.categoria == "popular"))
    const especialidad = computed(()=> store.state.productos.filter(item => item.categoria == "especialidad"))
      const galeria = computed(()=> store.state.productos.filter(item => item.categoria == "desayuno"))
      const {arrayData} = useFetch('https://restaurant-hamburguer-vue-default-rtdb.firebaseio.com/work.json')
  
      return{
        popular, especialidad, arrayData, galeria
      }

    }
}
</script>

<style lang="scss" >
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
}

.steps{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
  padding:1rem;
  margin: 0 auto;
}


</style>