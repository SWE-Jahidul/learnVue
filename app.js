new Vue({
    el: "#veu-app",
    data: {
        age: 22,
        x:0,
        y:0
    },
    methods: {

        Add: function (inc) {
              this.age +=inc;
        },

        substract:function(dec){
            this.age -=dec;
        },

        updatexy:function(event)
        {
        this.x =event.offsetX;
        this.y =event.offsetY;            
        },
        click:function()
        {
            alert("you click me ")
        }
    }

});