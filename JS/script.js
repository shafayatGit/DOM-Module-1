const sections = document.querySelectorAll("section");
// sections.backgroundColor = 'blue';
for(let section of sections){
    section.style.backgroundColor = 'lightgreen'
    section.style.border = '2px solid steelblue'
    section.style.marginBottom = '20px'
    section.style.borderRadius = '8px'
    section.style.textAlign = 'center'
}

const liCollection = document.getElementsByTagName("li")
for(let li of liCollection){
    // console.log(li)
    li.style.listStyle = 'None';
    li.style.fontSize = '20px';
    li.style.marginBottom = '5px';
    // li.style.backgroundColor = 'aqua';


}


//Adding a new class using JS
const fruitsSection = document.getElementById('fruits_section');
fruitsSection.classList.add('large_text');
fruitsSection.classList.add('align_left');

//First Step: Where to add
let fruitsUl = document.querySelector('#fruits_section ul');

// Second Step: What to add
let li = document.createElement("li")
li.innerText = 'New khana by JS';

let newLi = document.createElement("li")
newLi.innerText = 'Another One'

//Third Step: Append the child
fruitsUl.appendChild(newLi)
fruitsUl.appendChild(li)


//First
let mainTag = document.querySelector("main"); //main kono tag na. so chaile emneo use korte parbo abar . diyeo use korte parbo 

let section = document.createElement("section");

let heading = document.createElement('h1');
heading.innerText = 'New Section Added By JS';
section.appendChild(heading);

mainTag.appendChild(section);

let ul = document.createElement("ul");
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
li1.innerText = 'Bolbona'
li2.innerText = 'Bolbona2'
li3.innerText = 'Bolbona3'
li4.innerText = 'Bolbona4'

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)

section.appendChild(ul)

//InnerHTML

const accessories = document.createElement('section');

accessories.innerHTML = `
    <h1> These are the accessories </h1>
    <ul>
        <li> Laptop </li>
        <li> Keyboard </li>
        <li> Cables </li>
        <li> Driver </li>
     </ul>
`
mainTag.appendChild(accessories)
