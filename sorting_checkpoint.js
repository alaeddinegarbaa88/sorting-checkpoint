let kaf = [1,2,5,5,6,8,10]
let test =[1, 2, 5, 5, 6, 8, 10]

let ejbed_war9a = (arr,num) =>
[...(arr.filter( n => n <= num)),num,...(arr.filter(n => n > num))]


console.log(ejbed_war9a(kaf,3))