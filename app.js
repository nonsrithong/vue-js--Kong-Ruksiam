new Vue({
    el: "#vue-app",
    data: {

        newData: {

            empName: '',
            salary: 0
        },
        empGroup: [
            {
                empName: "non",
                salary: 5000
            },
            {
                empName: "non2",
                salary: 1000
            }
        ]

    },
    methods: {

        addEmp: function () {

            this.empGroup.push({
                empName: this.newData.empName,
                salary: this.newData.salary
            })
            this.newData.empName = '';
            this.newData.salary = 0;

        },

        showMessage: function(){

            alert("บันทุึกข้อมูลเรียบร้อย");

    
        }

    },
    
    
    computed :{
summation:function(){
    //แยกมาจัดการด้านการคำนวณ ไม่สามารถส่ง param เข้ามาได้
    var sum = this.empGroup.reduce(function(value,data){
        return value+Number(data.salary);
    },0);
    return sum;
},
avg : function(){
    var sum = this.empGroup.reduce(function(value,data){

        return  value+Number(data.salary);

    },0);
    return sum/this.empGroup.length;

}

    },
    // หลังจากทำงาน function.. ให้ทำอะไรต่อ
    watch:{
        summation:function(){
            this.showMessage();
        }
    }
})