<template>
  
<!-- loader  -->
<div class="loader-container">
    <img src="images/loader.gif" alt="">
</div>

</template>

<script>
export default {
setup(){
  function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();
}
}
</script>

<style scoped>

.loader-container{
  position: fixed;
  top:0; left:0;
  z-index: 10000;
  background:#fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height:100%;
  width:100%;
}

.loader-container.fade-out{
  top:-120%;
}
</style>