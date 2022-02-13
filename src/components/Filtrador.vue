<template>
  <div class="group-filter">
    <button :class="fondoBtn" @click="filtrar('especialidad')">Especialidad</button>
    <button :class="fondoBtn" @click="filtrar('popular')">Popular</button>
    <button :class="fondoBtn">Vegetariana</button>
    <button :class="fondoBtn" @click="filtrar('desayuno')">Desayunos</button>
    <button :class="fondoBtn" @click="filtrar('')">Todos</button>
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

<style lang='scss'>
.group-filter{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    
}
</style>