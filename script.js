const continentSelect = document.getElementById("continent-select")
const countryList = document.getElementById("countries-list")

//query the graphql api
// fetch('https://countries.trevorblades.com/', {
//     method: "POST",
//     headers: {"Content-Type" : "application/json"},
//     body: JSON.stringify({
//         query: `
//         query {
//         continents {
//         name
//         code
//         }
//         }
//         `
//         //use backticks surrounding your query
//     })
// }).then(response => response.json())

queryFetch(`
        query {
            continents {
            name
            code
            }
            }
        `).then(data => {
    // console.log(data.data)
    //loop through the continents and add each one as an option on the dropdown menu
    data.data.continents.forEach(continent => {
        const option = document.createElement('option')
        option.value = continent.code
        option.innerText = continent.name
        continentSelect.append(option)
    })
})

//loop through the countries and display the country and its capital
continentSelect.addEventListener('change', async e => {
    const continentCode = e.target.value
    const countries = await getContinentCountries(continentCode)
    countryList.innerHTML = ""
    countries.forEach(country => {
        const mydiv = document.createElement('div')
        const countryName = document.createElement('h1')
        const capitalName = document.createElement('h3')
        countryName.innerText = country.name
        capitalName.innerText = country.capital
        countryList.append(mydiv)
        mydiv.append(countryName)
        mydiv.append(capitalName)
        countryName.setAttribute("class", "countryNameClass")
        capitalName.setAttribute("class", "capitalNameClass")
    })
})

//function to get countries
function getContinentCountries(continentCode) {
    return queryFetch(`
    query getCountries($code: ID!) {
      continent(code: $code) {
        name 
        countries {
          name
          capital
        }
      }
    }
    `, {code: continentCode }).then(data => {
        // console.log(data.data.continent.countries)
            return data.data.continent.countries
        })
}


//put your fetch in a function with the query as the parameter, bc we're going to use it multiple times with a different query
function queryFetch(query, variables) {
    return fetch('https://countries.trevorblades.com/', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    }).then(response => response.json())
}

//queries used in graphql
///query {
//   continent (code: "AF") {
//     countries {
//       name
//     }
//   }
// }

//query {
//   continent(code: "AF") {
//     name
//     countries {
//       name
//       code
//       capital
//     }
//   }
// }

//not sure why tutorial uses String instead of ID!
//query getCountries($code: ID!){
//   continent(code: $code) {
//     name
//     countries {
//       name
//       code
//       capital
//     }
//   }
// }

//Thanks to Web Dev Simplified https://youtu.be/0ZJI4cBS4JM for the tutorial