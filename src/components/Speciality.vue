<template>
      <div class="box">
        <router-link :to="`/producto/${speciality.id}`">
                    <img class="image" :src="speciality.imgurl" :alt="speciality.name">
            <div class="content">
                <img :src="speciality.icon.iconUrl" >
                <h3>{{speciality.title}}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa tenetur voluptates aperiam tempore libero labore aut.</p>
            </div>
        </router-link>

        </div>
</template>

<script>
export default {
  props: ['speciality'],

}
</script>

<style lang="scss">

.box{
  flex:1 1 30rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 .5rem 1rem rgba(177, 177, 177, 0.1);
  border: 1px solid rgba(83, 83, 83, 0.2);
  cursor: pointer;
  border-radius: .5rem;
    &:hover{
      .image{
        top:0;
      }
      .content{
        transform: translateY(100%);
      }
    }

    .image{
      height:100%;
      width:100%;
      object-fit: cover;
      position: absolute;
      top:-100%; left:0;
    }
    .content{
      text-align: center;
      background:#fff;
      padding:2rem;
        img{
          margin:1.5rem 0;
        }
        h3{
          font-size: 2.5rem;
          color:#333;
        }
        p{
          font-size: 1.6rem;
          color:#666;
          padding:1rem 0;
        }
    }
}

</style>