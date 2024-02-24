const addUID= (obj: object)=>{
    let uid=Math.floor(Math.random()*100);
    return {...obj,uid}
}

let docOne=addUID({
  name:'mayank',
  age:32
});
console.log(docOne);