<template>
      <div class="box">
        <router-link :to="`/producto/${image.id}`">
            <img :src="image.imgurl" alt="" role="button" >
            <div class="content">
                <h3>{{image.title}}</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, ipsum.</p>
            </div>
        </router-link>

        </div>
</template>

<script>
export default {
props: ['image']
}
</script>

<style scoped>

.box-container{
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
}

.box-container .box{
  height:25rem;
  flex:1 1 30rem;
  border:1rem solid #fff;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
  border-radius: .5rem;
  position: relative;
  overflow: hidden;
}

.box-container .box img{
  height:100%;
  width:100%;
  object-fit: cover;
}

.box-container .box .content{
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  top: 0%; left:0;
  height: 100%;
  width:100%;
  background:rgba(255,255,255,.9);
  padding:2rem;
  padding-top: 5rem;
  text-align: center;
}

.box-container .box .content h3{
  font-size: 2.5rem;
  color:#333;
}

.box-container .box .content p{
  font-size: 1.5rem;
  color:#666;
  padding:1rem 0;
}

.box-container .box:hover .content{
  top:0%;
}
</style>