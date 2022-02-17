<template>
  <input class="buscador" type="text" placeholder="ingresa tu comida aquí..."
  v-model="textBuscador"
  @keyup="procesarBuscador">
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex';
export default {
setup(){
    const store = useStore()
    const textBuscador = ref('');
    const procesarBuscador = ()=>{
        store.dispatch('filtroBuscador', textBuscador.value)
    }
    return{
        textBuscador, procesarBuscador
    }
}
}
</script>

<style lang="scss" scoped>
    .buscador{
        width: 100%;
        height: 50px;
        margin-top: 10px ;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 10px;
        color: rgba(0, 0, 0, 0.5);
        &:hover{
            border: 1px solid #ff383844;
        }
        @media (max-width: 1160px) {
            width: 94%;
        }
    } 
</style>