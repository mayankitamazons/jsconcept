// Write a javascript function to count repeated character in a string and return the result like Result:{a:2,b:3,c:4}
// global logic  {g:1,l:3,o:2}


function countstr(str){
    let charCount={};
    for(let char of str){
        if(charCount.hasOwnProperty(char)){
            charCount[char]++;
        }
        else
        {
            charCount[char]=1;
        }
    }
    console.log(charCount);

}



var res=countstr('Global Logic');
