<template>
  <div class="app">
        
    <!-- loading -->
    <loading></loading>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex' 

  export default {
    props: [],
    data () {
      return {
         
      }
    },
    computed:{
      // ...mapGetters(['getfromUser'])
    },
    created() {


    },
    methods:{
    //  ...mapMutations([
    //     'setfromUser'
    //   ])
    }
  }

</script>

<style lang="less">
  @import './assets/less/reset.less';



</style>
