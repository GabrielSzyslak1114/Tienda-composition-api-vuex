<template>
<!-- order section starts  -->

<section class="contacto" id="order">
    <Title :span="'Contacto'"/>
    <div class="row">
        
        <div class="image">
            <img src="images/order-img.jpg" alt="">
        </div>

        <form action="">

            <div class="inputBox">
                <input type="text" placeholder="name">
                <input type="email" placeholder="email">
            </div>

            <div class="inputBox">
                <input type="number" placeholder="phone">
                <input type="text" placeholder="asunto">
            </div>

            <textarea placeholder="Descripción" name="" id="" cols="30" rows="10"></textarea>

            <a href="#" class="btn">Enviar</a>

        </form>

    </div>

</section>

<section class="box-lideres">
  <Title :span="'Lideres'"/>
  <div class="container">
    <CardLider v-for="(lider, index) in arrayData" :key="index" :lider="lider"/>
  </div>
</section>


</template>

<script>

import CardLider from '../components/CardLider.vue'
import Title from '../components/Title.vue'
import { useFetch } from '../hooks/useFetch'
export default {
  components: { Title, CardLider },
    setup(){
        const {arrayData} = useFetch('Lider.json')
        return{
            arrayData
        }
    }
}
</script>

<style lang="scss" scoped>

.contacto{
  margin: 100px auto;
}

 .row{
  padding:2rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
  background:#fff;
  display: flex;
  flex-wrap: wrap;
  gap:1.5rem;
  border-radius: .5rem;
}

 .row .image{
  flex:1 1 30rem;
}

 .row .image img{
  height: 100%;
  width:100%;
  object-fit: cover;
  border-radius: .5rem;
}

 .row form{
  flex:1 1 50rem;
  padding:1rem;
}

 .row form .inputBox{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

 .row form .inputBox input,  .row form textarea{
  padding:1rem;
  margin:1rem 0;
  font-size: 1.7rem;
  color:#333;
  text-transform: none;
  border:.1rem solid rgba(0,0,0,.3);
  border-radius: .5rem;
  width:49%;
}

 .row form textarea{
  width:100%;
  resize: none;
  height:15rem;
}

 .row form .btn{
  background:none;
}

 .row form .btn:hover{
  background:var(--red);
}

.box-lideres{
  height: auto;
  margin-bottom: 100px;
}

    .container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    }
</style>