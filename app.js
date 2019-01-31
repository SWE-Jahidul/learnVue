var one = new Vue({
    el: "#veu-app-one",
    data: {
        title: 'vue App one '
    },
    methods: {

        

    }
    ,
    computed: {
        greet:function() {
            return "hellow from app one ";
        }
    }
});


var two = new Vue({
    el: "#veu-app-two",
    data: {
        title: 'vue App Two '

    },
    methods: {

        changetitle:function(){
            one.title = 'title change '
        }
    }
    ,
    computed: {

        greet:function() {
            return "hellow from app two ";
        }


    }
});


two.title = "change from outside"