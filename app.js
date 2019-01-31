Vue.component('greeting', {
    template: '<p> hey there , i am a {{name}}. <button v-on:click="changeName">change name </button> </p>',
    data: function () {

        return {
            name: "jimu"
        }
    },

    methods:
    {
        changeName:function() {
            this.name = "mario"

        }
    }



})




var one = new Vue({
    el: "#veu-app-one",
    data: {

    },

});


var two = new Vue({
    el: "#veu-app-two",
    data: {

    },


});