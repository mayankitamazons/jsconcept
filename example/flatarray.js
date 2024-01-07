
const arr=[1,2,3,4,[5,6,7,[8,9],10],11];
// expected output [1,2,3,4,5,6,7,8,9,10,11]

const res=arr.flat(Infinity);
console.log(res.join(' '));


// write custom code with loop

function flattenedArray(arr){
    let flatted=[];
    arr.forEach(item => {
        if(Array.isArray(item)){
            flatted=  flatted.concat(flattenedArray(item));   
        } else
        {
            flatted.push(item);
        }
    
   });
   return flatted;
}

console.log('Flat an array with custom function ',flattenedArray(arr));