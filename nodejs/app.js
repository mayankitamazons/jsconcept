module.exports={
  firstName:"mayank",
  lastName:"sharma",
  displayName: function (){
     return `My name is ${this.firstName} ${this.lastName}`
  }
};