/*let elementName = document.querySelector("#name")*/

/*console.log(elementName.previousElementSibling);*/

const sampleDiv = document.querySelector("#sample-div");

const heading = document.querySelector('.cart');
const subHeading = document.querySelector("#page-title");


sampleDiv.replaceChild(subHeading, heading);
console.log(sampleDiv);

