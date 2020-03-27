const eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(eventURL)
  .then((response) => response.json())
  .then((eventObject) => {

    let sitetitle=document.title;

    const upcomingtownsevent = eventObject['towns'];
  //console.log(eventObject);

    for(i in upcomingtownsevent){
      if(sitetitle.includes(upcomingtownsevent[i].name)){
       
        let upcommingtownEvent = document.createElement('div');

        upcommingtownEvent.setAttribute('class', 'upcommingevent')
        let towns= document.createElement('h3');
        towns.textContent=upcomingtownsevent[i].name + ' Events';

      

        upcommingtownEvent.appendChild(towns);  
                  for(j in upcomingtownsevent[i].events){
                    let spanlist=document.createElement('span');
                    spanlist.textContent=upcomingtownsevent[i].events[j];
                    
                    upcommingtownEvent.appendChild(spanlist);
                  }//for loop

               // console.log(upcomingtownsevent[i].events)
           
        document.querySelector('section.upcommingevents').appendChild(upcommingtownEvent);

      }
    }



  });