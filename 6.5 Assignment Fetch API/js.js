// get data using fetch

 

fetch('https://api.openweathermap.org/data/2.5/weather?q=RIGA&units=metric&APPID=11916afcd608a6cb0430ee3fec967d2b')

.then(response => response.json())

.then(data => console.log(data))

.catch(error => console.error(error));






// post DATA 

 

// let userName = 'User';

// let myName = 'Inputs'; 

// let email = 'Go Here';

// let data = {username: userName, name: myName, email: email};

// fetch(https://www.bitdegreetask.club/some/url/postrequest, {

//   method: "POST",

//   body: JSON.stringify(data)

// })

//   .then(res => {

//      console.log("Request complete! Response:", res);

//    });