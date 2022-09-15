function randomInteger (max) {
  return Math.floor(Math.random() * (max + 1)); 
                                                // Generating random numbers  
                                                // Math floor gets rid of the decimal in the random number, while max + 1
                                                // internally increases the maximum limit by 1
}

console.log(randomInteger(255));

function generateRandomRgbColour() { // RGB components
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r,g,b];
}

for(i=0; i < 5; i++) {
  
  console.log(generateRandomRgbColour())
}

function generateRandomHexColour() {
  let [r,g,b] = generateRandomRgbColour();
  
  let hexR = r.toString(16).padStart(2,'0');
  let hexG = g.toString(16).padStart(2,'0');
  let hexB = b.toString(16).padStart(2,'0');

  return "#" + hexR + hexG + hexB;

}

for(i=0; i < 3; i++) {
  console.log(generateRandomHexColour());
}

// function generateRandomHslColour() {
//   let h = positiveInteger(360);
//   let s = positiveInteger(100);
//   let l = positiveInteger(100);

//   return [h,s,l];

// }

// for(i=0; i < 5; i++) {
//   console.log(generateRandomHslColour());
// }




function changeColour() {
  let hex = generateRandomHexColour();
  document.querySelector('.colourone').value = hex;
  document.querySelector('.textone').innerHTML = hex;
}


function changeColour2() {
  let hex = generateRandomHexColour();
  document.querySelector('.colourtwo').value = hex;
  document.querySelector('.texttwo').innerHTML = hex;
}

function changeColour3() {
  let hex = generateRandomHexColour();
  document.querySelector('.colourthree').value = hex;
  document.querySelector('.textthree').innerHTML = hex;
}

function changeColour4() {
  let hex = generateRandomHexColour();
  document.querySelector('.colourfour').value = hex;
  document.querySelector('.textfour').innerHTML = hex;
}

function changeColour5() {
  let hex = generateRandomHexColour();
  document.querySelector('.colourfive').value = hex;
  document.querySelector('.textfive').innerHTML = hex;
}

function clickHandler(event) {
  changeColour();
  changeColour2();
  changeColour3();
  changeColour4();
  changeColour5();
  event.preventDefault();
}

document.addEventListener('click', clickHandler);

changeColour();
changeColour2();
changeColour3();
changeColour4();
changeColour5();



