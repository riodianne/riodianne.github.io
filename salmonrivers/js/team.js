const requestURLteam = '/salmonrivers/json/team.json';

fetch(requestURLteam)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const team = jsonObject['team'];

for (let i = 0; i < team.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let spancert = document.createElement('span');
    let description = document.createElement('span');
    let image = document.createElement('img');
    let email = document.createElement('span');

    image.setAttribute('src', team[i].imageurl);
    let alt = team[i].name + ' ' + team[i].lastname;
    image.setAttribute('alt', alt);
    
    card.appendChild(image);
    
    h2.textContent = team[i].name + ' ' + team[i].lastname;
    card.appendChild(h2);



    spancert.textContent = team[i].experience +' '+ team[i].certification;
    spancert.setAttribute('class','card-professional')
    card.appendChild(spancert);

    email.textContent = team[i].email;
    email.setAttribute('class','card-email')
    card.appendChild(email);

    description.textContent = team[i].description;
    
    card.appendChild(description);

  

    document.querySelector('div.cards').appendChild(card);
}

  });