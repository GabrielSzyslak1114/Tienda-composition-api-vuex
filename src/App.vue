<template>
  <Header/>
  <router-view/>
    <Carrito />
  <Footer/>
  <Loader/>
</template>
<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Loader from './components/Loader.vue'
import {computed} from 'vue'
import { useStore } from 'vuex'
import Carrito from './components/Carrito.vue'
export default {
  components:{
    Header,
    Footer,
    Loader,
    Carrito

  },
  setup(){
    const store = useStore()

      const carrito = computed(()=> store.state.carrito);
      return{carrito}
  }
}
</script>
<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');


*{
  font-family: 'Nunito', sans-serif;
  margin:0; padding:0;
  box-sizing: border-box;
  outline: none; border:none;
  text-decoration: none;
  transition:all .2s linear;
}

*::selection{
  background: $color-primary;
  color: $color-text-primary;
}

html{
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
  @media (max-width: 991px) {
    font-size: 55%;
  }
}

body{
  background: $color-alterno;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



.btn{
  display: inline-block;
  padding:.8rem 3rem;
  border:.2rem solid $color-secundary;
  color: $color-secundary;
  cursor: pointer;
  font-size: 1.7rem;
  border-radius: .5rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
  margin-top: 1rem;
  background: #fff;
}

.btn:hover{
  color:$color-alterno;
  border: .2rem solid $color-primary;
}

.btn::before{
  content: '';
  position: absolute;
  top:0; right: 0;
  width:0%;
  height:100%;
  background: $color-primary;
  transition: .3s linear;
  z-index: -1;
}

.btn:hover::before{
  width:100%;
  left: 0;
}




    .btn-circle-carrito{
            width: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 35px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.315);
            border: 1px solid $color-secundary;
            color: $color-secundary;
            cursor: pointer;
            &:hover{
                background: $color-secundary;
                transform: scale(.9);
                i{
                color: #ffff;
                text-decoration: none;
                text-transform: none;
                }
            }
        i{
            color: $color-secundary;
            cursor: pointer;
            height: 12px;

        }
    }

</style>
