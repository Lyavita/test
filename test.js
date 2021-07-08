function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

let items2 = [];
let items10 = [];
let items2Length = 4;

for (let i = 0; i < items2Length; i++) {
     items2[i] = getRandomInt(0, 2);
}


let result = (items2.map((num, i) => num * Math.pow(2, (items2.length-i-1)))).reduce((sum, elem) => sum + elem);

console.log(result); 