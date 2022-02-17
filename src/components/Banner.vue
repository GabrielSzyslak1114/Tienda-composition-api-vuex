<template>
   <!-- home section starts  -->
<section class="home" id="home">
      <transition appear @before-enter="beforeEnter" @enter="enter">
    <div class="content">
        <h3>Food made with love</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>
        <router-link to="/productos" class="btn">Ordena ahora</router-link>
    </div>
      </transition>


    <div class="image">
        <img src="images/home-img.png" alt="">
    </div>



</section>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="rgb(42, 207, 134)" fill-opacity="1" d="M0,64L80,64C160,64,320,64,480,90.7C640,117,800,171,960,176C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
</template>

<script>
import gsap from "gsap"
export default {
  setup(){
      const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateX(25px)'
    }

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }
    return{ beforeEnter, enter }
  }
}
</script>

<style lang="scss" scoped>
svg{
  min-width: 100%;
}
.home{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
  min-height: 74vh;
  align-items: center;
 background: $color-secundary;
  background-size: cover;
  background-position: center;
  padding: 3rem 6rem;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 3rem;
        margin-top: 70px;

  }
    .content{
      flex:1 1 40rem;
      padding-top: 6.5rem;
        h3{
          font-size: 5rem;
          color: $color-alterno;
        }
        p{
          font-size: 1.7rem;
          color: $color-alterno;
          padding:1rem 0;
        }
    }
    .image{
      flex:1 1 40rem;
      @media (max-width: 900px) {
        flex: 1rem;
      }
       img{
        width:75%;
        padding: 2rem;
        animation: float 3s linear infinite;
      }
    }
}

@keyframes float{
  0%, 100%{
    transform: translateY(1.5rem);
  }
  50%{
    transform: translateY(5rem);
  }
}



</style>