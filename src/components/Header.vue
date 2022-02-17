<template>
  <header>
    <a href="#" class="logo"><i class="fas fa-utensils"></i>food</a>

    <div :class="menu" @click="activarMenu"></div>

    <nav :class="navbar">
        <router-link to="/">Inicio</router-link>
        <router-link to="/productos">Productos</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <a @click="verCarrito" class="box-icon-cart"><i class="fa-solid fa-cart-shopping"></i></a>

    </nav>
</header>
    <div class="box-icon-cart-mobile">
        <a @click="verCarrito" class="icon-cart-mobile"><i class="fa-solid fa-cart-shopping"></i></a>
    </div>

</template>

<script>
import { computed, ref } from '@vue/reactivity'
import {useStore} from 'vuex'
export default {
setup(){
    const store = useStore()
    const menutoggle = ref(false)
    const activarMenu = ()=> menutoggle.value = !menutoggle.value
    const navbar = computed(()=> menutoggle.value ? 'navbar active' : 'navbar')
    const menu = computed(()=> menutoggle.value ? 'menutoggle menuactive' : 'menutoggle')
    const verCarrito = ()=> {store.commit('verCarrito')}




    return{ activarMenu, menu, navbar, verCarrito}

}
    

}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
  top:0; left: 0; right:0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $color-text-primary;
  padding:2rem 4%;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);

    @media(max-width:1160px){
        padding:2rem;
    }

    .logo{
        font-size: 2.5rem;
        font-weight: bolder;
        color:#666;
            i{
                padding-right: .5rem;
                color: $color-primary;
            }
        }

    .navbar{
        width: 50%;
        display: flex;
        justify-content: space-around;
        transition: .4s;
            a{
                font-size: 2rem;
                color:#666;

                &.router-link-exact-active {
                    color: $color-secundary;
                }

                &:hover{
                    color: $color-secundary;

                }
                    @media(max-width:1160px){
                        margin: 1.5rem;
                        padding:1.5rem;
                        display: block;
                        border: 1px solid rgba(146, 146, 146, 0.1);
                        border-left:.5rem solid $color-secundary;
                        background: $color-text-primary;
                    }
            }
                @media(max-width:1160px){
                    position: absolute;
                    top:100%; left: 0; right:0;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    background: #fcfcfc;
                    border-top: .1rem solid rgba(0,0,0,.1);
                    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
                        &.active{
                            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                        }
                }
        }
}

.menutoggle{
    display: none;
        @media(max-width:1160px){
            position: relative;
            display: flex !important;
            justify-content: center;
            align-items: center;
            top: 0px;
            right: 0px;
            width: 50px;
            height: 50px;
            background:  $color-secundary;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.2s;
            z-index: 1000;
            &::before{
                content: '';
            position: absolute;
            width: 28px;
            height: 2px;
            background:$color-alterno;
            transition: .2s;
            transform: translateY(-10px);
            box-shadow: 0 10px 0 $color-alterno; /*linea en medio*/
                }

            }
              &::after{
                content: '';
                position: absolute;
                width: 28px;
                height: 2px;
                background:$color-alterno;
                transition: .2s;
                transform: translateY(10px);
            }


}

.menuactive{
  background: $color-primary;
    &::before{
      transform: translateY(0px) rotate(45deg);
      box-shadow: 0 0 0 $color-alterno;
    }
    &::after{
      transform: translateY(0px) rotate(-45deg);
    }
}

.box-icon-cart{
            width: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 35px;
            color: $color-secundary;
            z-index: 100;
            cursor: pointer;
            &:hover{
                transform: scale(.9);
                i{
                    color: $color-secundary;
                }
            }
            @media(max-width:1160px){
                display: none !important;
            }




}

        .box-icon-cart-mobile{
                   display: none;

                   @media (max-width: 1160px) {
                        position: fixed;
                        height: 60px;
                        width: 60px;
                        background: $color-secundary;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        right: 0;
                        bottom: 0;
                        border-radius: 10px;
                        border: 1px solid $color-secundary;
                        margin: 15px;
                        z-index: 100;
                        cursor: pointer;
                        &:hover{
                            transform: scale(0.9);
                        }
                        i {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                height: 100%;
                                font-size: 30px;
                                color: #fcfcfc
                        }
                   }

                   .icon-cart-mobile{

                       display: flex;
                       position: relative;
                   }
        }
</style>