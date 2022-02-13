<template>
      <h1 class="heading"> {{title}} <span>{{span}}</span> </h1>
</template>

<script>
export default {
name: 'Title',
props: {
  title: String,
  span: String
}
}
</script>

<style lang='scss' scoped>


.heading{
  text-align: center;
  font-size: 3.5rem;
  padding:4rem;
  color:#666;
  text-transform: unset;
    span{
        color: $color-primary;
    }

}


</style>