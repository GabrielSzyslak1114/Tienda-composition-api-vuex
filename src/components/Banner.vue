<template>
   <!-- home section starts  -->
<section class="home" id="home">

    <div class="content">
        <h3>Food made with love</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>
        <router-link to="/productos" class="btn">Ordena ahora</router-link>
    </div>

    <div class="image">
        <img src="images/home-img.png" alt="">
    </div>



</section>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="rgb(42, 207, 134)" fill-opacity="1" d="M0,64L80,64C160,64,320,64,480,90.7C640,117,800,171,960,176C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
</template>

<script>
export default {

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