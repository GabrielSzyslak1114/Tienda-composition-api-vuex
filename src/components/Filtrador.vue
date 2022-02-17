<template>
  <div class="group-filter">
    <button :class="[fondoBtn, 'btn-filter']" @click="filtrar('especialidad')">Especialidad</button>
    <button :class="[fondoBtn, 'btn-filter']" @click="filtrar('popular')">Popular</button>

    <button :class="[fondoBtn, 'btn-filter']" @click="filtrar('desayuno')">Desayunos</button>
    <button :class="[fondoBtn, 'btn-filter']" @click="filtrar('')">Todos</button>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex'
export default {
setup(){
    const btn = ref(false);
    const store = useStore();
    console.log(btn.value)

    const filtrar = (categoria)=>{
        store.dispatch("getProductsFiltrados", categoria)
        btn.value = true
    }
    console.log(filtrar)
    
    const fondoBtn = computed(()=> btn.value == 'true' ? 'btn btn-active' : 'btn')
    return{
        filtrar, fondoBtn
    }
}
}
</script>

<style lang='scss' scoped>
.group-filter{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1160px) {
          justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    }

    .btn-filter{
      width: 100% !important;
      @media (max-width: 1160px) {
        width: 45% !important;
      }
    }
    
}
</style>