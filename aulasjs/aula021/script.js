const promise1 = fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0');
const promise2 = fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0');

Promise.all([promise1, promise2])
    .then((results) => {
        // Ambas as Promises foram resolvidas com sucesso
        const data1 = results[0];
        const data2 = results[1];
        console.log(data1)
        // Faça algo com os dados
    })
    .catch((error) => {
        // Pelo menos uma das Promises foi rejeitada
        console.error(error);
    });