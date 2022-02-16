  <template>
    <div class="box-pagar">
      <a>Total productos: {{totalCantidad}}</a>
      <a class="btn btn-pagar" role="button"><span> Ir a pagar </span><span>Sub total: ${{totalPrecio}}</span></a>
    </div>

</template>


<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {

setup(){
    const store = useStore()
    const totalCantidad = computed(()=> store.getters.totalCantidad)
    const totalPrecio = computed(()=> store.getters.totalPrecio.toFixed(2))

    return{totalCantidad, totalPrecio}
}

}
</script>

<style scoped>
.box-pagar{
    
    width: 100%;
    display: grid;
    margin: none !important;
    margin-top: 0;
}

.btn-pagar{
      display: flex !important;
    justify-content: space-between;
    align-items: center;
    transition: .2s ease;
}
</style>