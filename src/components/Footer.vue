<template>
<!-- footer section  -->

<section class="footer">
    <h1 class="credit"> Página de prueba, ve mi linkedin aquí
      <a target="_blank" href="https://www.linkedin.com/in/gabriel-alberto-rodríguez-ruíz-b04882209"> Gabriel Rodríguez </a> 2022 
    </h1>
</section>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.footer{
  background:#000;
  text-align: center;
  margin: 0;

.share{
  display: flex;
  gap:1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.credit{
  padding:2.5rem 1rem;
  color:#fff;
  font-weight: normal;
  font-size: 2rem;
}

 .credit a{
  color: $color-primary;
}

}




</style>