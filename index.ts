import { Observable, interval, timer } from "rxjs";

const apiKey = "d11be8fa8826b6777bc94891b01f0767";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
  const tick = interval(2000);  //Observable produce un intervallo
//il metodo utilizzato restituisce un Array oggetto da un oggetto con proprietà iterable
var cityElems = Array.from(document.getElementsByClassName("citta"));

const temp = new Observable(subscriber => tick.subscribe({
    next(n){
        fetch(URL)
          .then(response => response.json())
          .then(data => subscriber.next(data.main.temp))

    }
}));

temp.subscribe({})


/*
//N -- gestire promise e callback
function doCity(city, callback) {
  let promise = fetch(URL + city)
    .then(response => response.json(), error => alert(error))
    .then(data => callback(data));
  return promise;
}

//async costruisce una funzione che restituisce una promise
async function media() {
  let temps = await Promise.all(
    cityElems.map(cityElem => doCity(cityElem.innerHTML, data => data.main.temp))
  );
  let somma = temps.reduce((somma, temp) => temp + somma);
  document.getElementById("output").innerText = somma / cityElems.length;
}

*/