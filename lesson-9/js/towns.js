const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

    if (towns[i].name=="Fish Haven" || towns[i].name=="Preston" || towns[i].name=="Soda Springs") {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let motto = document.createElement('span');
    let yearFounded = document.createElement('span');
    let currentPopulation = document.createElement('span'); 
    let averageRainfall = document.createElement('span');
    let photo = document.createElement('img');
    
    
    h2.textContent = towns[i].name;
    card.appendChild(h2);

    motto.textContent = towns[i].motto;
    card.appendChild(motto);

    yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded; 
    card.appendChild(yearFounded);

    currentPopulation.textContent = 'Population: ' +  towns[i].currentPopulation;
    card.appendChild(currentPopulation);

    averageRainfall.textContent = 'Annual Rain Fall: ' +   towns[i].averageRainfall;
    card.appendChild(averageRainfall);

    photo.setAttribute('src', "images/placeholder002.png");
    card.appendChild(photo);

    document.querySelector('div.towns').appendChild(card);
    } 
    }
  });