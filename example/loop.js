const users = ["quynhnv", "duongtx", "chinhdt"];
for (let i in users) {
    console.log(users[i]);
}
//lặp theo index

for (let item of users) {
    console.log(item);
}
//lặp theo gtri 


// c1
users.forEach(function (item, index) {
    console.log(index);
})
// arrow function
users.forEach((item, index) => {
    console.log(index);
})



const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
]
// map
// const result = products.map(function (item) {
//     // console.log(item);
//     return `
//         <div>${item.name}</div>
//         <div>${item.price}</div>
//     `
// })
// console.log(result);
// const app = document.querySelector("#app")
// app.innerHTML = result.join("");

// find
// const result = products.find(function (item) {
//     // console.log(item.id);
//     return item.id == 3
// })
// console.log(result);

// filter
const result = products.filter((item) => {
    return item.id != 1
})
console.log(result);
