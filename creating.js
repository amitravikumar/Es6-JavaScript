console.log('Hello');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am p';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');

myImage.src = 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?cs=srgb&dl=red-and-black-audi-r8-coupe-parked-near-gray-concrete-1545743.jpg&fm=jpg';
myImage.alt = 'Nice Photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

document.body.appendChild(myParagraph);
document.body.appendChild(myDiv);

myDiv.appendChild(myParagraph);