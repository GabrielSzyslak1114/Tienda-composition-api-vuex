<template>
  
<!-- steps section starts  -->
        <div class="box">
            <img :src="step.imgurl" alt="">
            <h3>{{step.title}}</h3>
        </div>

</template>

<script>
export default {
props: {
  step: Object
}
}
</script>

<style lang="scss" scoped>


.box{
  flex:1 1 25rem;
  height: 290px;
  width: 320px;
  padding:1rem;
  text-align: center;
  transition: .4 ease;
  box-shadow: 5px 10px 9px rgba(0,0,0,.1);
  z-index: 1;
  &:hover{
    transform: translateY(-30px);
      z-index: 2;
  }
  @media (max-width: 990px) {
    transform: scale(1);
          margin: 20px;
      z-index: 1;

    &:hover{
      transform: scale(.9);

        z-index: 3;
    }
  }
}

.box img{
  border-radius: 50%;
  border:1rem solid #fff;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
}

.box h3{
  font-size: 2rem;
  color:#333;
  padding:1rem;
}

</style>