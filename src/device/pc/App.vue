<template>
  <div>
    <transition name="main2" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

</template>

<script>

export default {
  name: 'app',
  watch: {
    '$route': (to, from) => {
      console.log(to)
      console.log(from)
    }
  }
}
</script>

<style lang="scss" scoped>
.main2-enter-active, .main2-leave{
  transition: all 1s;
}
.main2-enter, .main2-leave-active{
  opacity: 0;
  transform: translateX(20px);
}
</style>
