new Vue({
    el: "#vue-app",
    data: {
        name: "Nonny",
        job: "คนบ้า",
        age: 22,
        website:'https://www.google.com/'
,
        count:0,
        foods:[],
        gender:''

    },
    methods: {

        getName: function () {

            return this.name
        },
        setName: function (p_name) {
            return this.name = p_name

        }
            ,
        addAge:function(){
            this.age++;
            console.log(this.age);

        },
        SubtractAge:function(){
            
            this.age--;
            console.log(this.age)

        }
        ,

        addCount:function(){
            this.count++;
            console.log(this.age);

        }

       

    }


})