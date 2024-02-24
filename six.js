var fullname="Mayank";

var obj={
    fullname:"Raj",
    prop:{
        fullname:"Inside Prop",
        getFullname:function(){
            return this.fullname;
        },
    },
    getFullname:function(){
        return this.fullname
    },

    getFullnameV2:()=>this.fullname,  // refer to window object 

    getFullnameV3:(function(){
        // return this.fullname;
        return "Mayank Test";
    })(),
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
// console.log(obj.getFullnameV3());
// console.log(obj.getFullnameV3);