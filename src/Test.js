const arr = [10, 2, 5, 7];

function double(x) {
  return x * 2;
}
// const output =
console.log(arr.map(double));

trible = (x) => {
  return x * 3;
};
binary = (x) => {
  return x.toString(2);
};

const max = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
});
console.log(max);
console.log(arr.map(trible));
console.log(arr.map(binary));

const user = [
  { name: "A", id: 1, address: "a" },
  { name: "B", id: 2, address: "b" },
  { name: "C", id: 2, address: "c" },
];

const redresult=user.reduce(function(acc,curr){
    if(curr.id>1){
        acc.push(curr.name);
    }
    return acc
},[]);
console.log(redresult);

const result = user.filter((x) => x.id > 1).map((x) => x.name);
console.log(result);


const name = user.map((x)=>x.name);
console.log(name);

// {
//   user.map((item, index) => (
//     <div key={index}>
//       <div>
//         <h1>{item.name}</h1>+-+
//       </div>
//     </div>
//   ));
// }
