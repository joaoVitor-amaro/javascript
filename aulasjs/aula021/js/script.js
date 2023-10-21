var section = document.querySelector("#secao")
var inputBuscaPoke = document.querySelector("#buscaPokemom")

function pesquisar() {
    var article = document.querySelectorAll(".cardPoke") 
    article.forEach((article) => {
        const textoDoParagrafo = article.querySelector('p').textContent;
        if(textoDoParagrafo.includes(inputBuscaPoke.value)) {
            article.style.display = "block"
        } else {
            article.style.display = "none"
        }
    })
}

const getPokemom = async () => {
    const pokelist = []
    for(var i = 1; i <= 100; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        const response = await fetch(url);
        const data = await response.json();
        pokelist.push(data); 
    }
    return pokelist
}


const backgroundType = (typePoke) => {
    const backgroundTypePokeOne = {
        fire: "#FD7D24", 
        water: "#4592C4",
        poison: "#B97FC9",
        bug: "#729F3F", 
        rock: "#A38C21",
        fighting: "#D56723",
        psychic: "#F366B9",
        ghost: "#544F5B"
    }
    const backgroundTypePokeTwo = {
        grass: "#9BCC50",
        flying: "#BDB9B8", 
        normal: "#A4ACAF",
        electric: "#EED535",
        ground: "#AB9842",
        fairy: "#FDB9E9",
        steel: "#A4ACAF",
        ice: "#51C4E7"
    }
    let colorTypePoke = ""
    if(typePoke in backgroundTypePokeOne) {
        colorTypePoke = "#ffffff"
        return [backgroundTypePokeOne[typePoke], colorTypePoke]
    }
    if(typePoke in backgroundTypePokeTwo) {
        colorTypePoke = '#000000'
        return [backgroundTypePokeTwo[typePoke], colorTypePoke]
    }
}

const types = (pokemon) => {
    const div_types = document.createElement("div")
    div_types.setAttribute("id", "typesPokemons")
    for (var i in pokemon) {
        let span = document.createElement("span")
        span.innerHTML = pokemon[i].type.name
        var [bgColorType, colorTypePok] = backgroundType(pokemon[i].type.name)
        span.style.background = bgColorType
        span.style.color = colorTypePok
        div_types.appendChild(span)
    }
    return div_types
}

const fetchPokemon = async () => {
    const data = await getPokemom()
    data.map((pokemom) => {
        const spanId = document.createElement("div")
        const img = document.createElement("img")
        const article = document.createElement('article')
        const pName = document.createElement('p')
        pName.setAttribute("id","namePoke")
        article.setAttribute("class", "cardPoke")
        spanId.innerHTML = `N° ${pokemom.id}`
        img.src = pokemom.sprites.front_default
        pName.innerHTML = `${pokemom.name}`
        article.appendChild(spanId)
        article.appendChild(img)
        article.appendChild(pName)
        article.appendChild(types(pokemom.types))
        section.appendChild(article)
    })
}

fetchPokemon();


