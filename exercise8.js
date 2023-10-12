// //fetch is itself a promise that is called to extract data from the api
// // We can use .then and .catch to handle response and errors 

 
// //fecthing the data using promises (.catch/.then)

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then((response) => { console.log(response)})
// .catch((err) => { console.error('Error', err);})



//fetching the data using async/await

const userId = 'Samantha';

async function review() {
try{
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const res  = await response.json();
console.log(res);
}
catch (err) {
console.error('Error', err);
}
}


review();

