  <template>

    <h4>Total productos: {{totalCantidad}}</h4>

    <button class="">${{totalPrecio}}</button>

</template>


<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {

setup(){
    const store = useStore()
    const totalCantidad = computed(()=> store.getters.totalCantidad)
    const totalPrecio = computed(()=> store.getters.totalPrecio)

    return{totalCantidad, totalPrecio}
}

}
</script>

<style>

</style>