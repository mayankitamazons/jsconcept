// sort array with custom code 
const req=[1,2,5,47,55,85,23,66,1,45,22,36,56,2];
const result=sort(req);
console.log(`result of sort ${result}`);
function sort(array){
    const output=[];
    array.forEach(element => {
        if(output.indexOf(element)==-1){
            output.push(element);

        }
        
    });
    const res=[];
    output.forEach(element => {
    for(i=0;i<=output.length-1;i++)
    {
        if(element>output[i+1]){
            output[i]=output[i+1];
        }
    //     if(output[i]>output[i+1]){
    //         res.push(output[i+1]);
    //     }
    //     else
    //     {
    //         res.push(output[i]);
    //     }
    }
});
    

    return output;
}
