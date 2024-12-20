arr=[4,6,89,3,9,12,34,83]
evenArray=arr.filter((ele)=> ele % 2==0)
oddArray=arr.filter((ele)=> ele % 2 !=0)
console.log("Even numbers in the array : ",evenArray)
console.log("Odd numbers in the array : ",oddArray)

pattren=""
// pattren printing 
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        pattren +=j+ " "
    }
    pattren +='\n'
}
console.log(pattren)


pattren1=""
// pattren printing 
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        pattren1 +=i*j+ " "
    }
    pattren1 +='\n'
}
console.log(pattren1)
