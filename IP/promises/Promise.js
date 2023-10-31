const fetchApi = () => {
    return new Promise((resolve, reject) => {
        fetch("https://catfact.ninja/fact")
            .then(
                (res) => {
                    console.log(res);
                    return res.json();
                }
            )
            .then(
                (data) => {
                    console.log(data);
                    resolve(data);
                }
            )
            .catch(
                err => {
                    reject(`Data not fetched ${err}`);
                }
            )
            .finally(
                () => console.log("Fetch api executed")
            )
    });
}

prom = fetchApi()
console.log(prom);

// const axios = require('axios');

// const fetchApi = () => {
//   return new Promise((resolve, reject) => {
//     axios.get("https://catfact.ninja/fact")
//       .then((response) => {
//         console.log(response.data);
//         resolve(response.data);
//       })
//       .catch((error) => {
//         console.error(`Data not fetched: ${error.message}`);
//         reject(error);
//       })
//       .finally(() => {
//         console.log("Fetch API executed");
//       });
//   });
// };

// const data = fetchApi()
// console.log(data);
