// Promise
fetch ('https://www.breakingbadapi.com/api/') //جلب
  .then (function (respone) {
    //من ثم انشاء فانكسن
    console.log (respone); //print the func in consol
    return respone.json (); // print in json
  })
  .then (function (data) {
    // then  fetch all "response" to data and print it
    console.log (data);
  });

//  the new
async function get () {
  //async => synce
  const respone = await fetch ('https://www.breakingbadapi.com/api/characters'); //wait to fetch the information then put the information in variable"response"
  const data = await respone.json (); //wait to respone tasks finiched then put respons.json in variable [data]
  console.log (data[0].name); // print the last variable data in console // for enter to masfofa we need index[] then .name for fetch the name

  data.map (function (actors) {
    // aftar i was collected all informtion in variable  "data" i progrming map for work with all masfofa for gave me all name
    console.log (actors.name);
  });

  document.querySelector ('#content h1').innerHTML =
    '<h1>' + data[0].name + '</h1>'; //select the id for div and chang ""all"" content div by .innerHtml to consol.log "test"
  document.querySelector ('#content h5').innerHTML = data[0].birthday;
  document.querySelector ('#content img').src = data[0].img;
  document.querySelector ('#actor').innerHTML = `<select>
    ${/* now i creat one select with map data option*/
    data.map (actors => `<option>${actors.name}</option>`)}
    </select>`;
}
get (); //call the func

////////////////////////////
const api = 'https://www.breakingbadapi.com/api/characters';

async function getData () {
  try {
    //for when have problem in server gave me message in console
    const respone = await fetch (api);
    const data = await respone.json ();
    const print = data.map (m => m.name); //m => parametar // all param gave me name this parametar
    printData (data);
  } catch (e) {
    //e = error ,catch = التقط
    console.log ('ERROR:', e.message);
  }
}

function printData (data) {
  const header = document.querySelector ('#header');
  const content = document.querySelector ('#content');

  header.innerHTML += `
        <select onchange="getCharac(this.value)"> 
            <option>Please Select actor</option>
            ${/*Character => parametar // all param gave me name this parametar away option*/
            data.map (Character => `<option>${Character.name}</option>`)}
        </select>
        `; //+=    => add not remove and change
  // onchange="getCharac(this.value) ==>> add to html onchange,
  // getCharac ==>> function
  // this.value ==>> i need the value selected in list for it will be name input
}
async function getCharac (name) {
  // name = (this.value)
  if (name !== 'Please Select actor') {
    // for not show error in console when select the please
    //console.log(name) //when i select a value in web will be  printed in consol
    const respone = await fetch (`${api}?name=${name}`); // about fetch => will need documantion how serch character by name because we have the name only in list
    const data = await respone.json (); // /api/characters?name=Walter ==>>/api/characters =<${api},, walter=${x}
    console.log (data); // data will be in consol looks like one masfofa only
    //console.log(data[0].nickname)  //[0] because the normal one masfofa and for "nickname"we get it from console
    content.innerHTML = `
    <h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].portrayed}</h4>
    <img src="${data[0].img}" width= '250px'">
    `;
  }
}
getData ();
