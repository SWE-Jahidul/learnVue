new Vue({
    el:"#vue-app",
    data:{
        output:"Tea"

    },
    methods:{
        redrefs:function(){
          console.log( this.$refs.innnertext);
          this.output= this.$refs.input.value
        }
    }
})