//1) Select the section with an id of container without using querySelector.
document.getElementById("container");
//2) Select the section with an id of container using querySelector.
document.querySelector("#container");
//3) Select all of the list items with a class of "second".
document.getElementsByClassName("second");
//4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("#container > ol > li.third");
//5) Give the section with an id of container the text "Hello!".
const section = document.getElementById("container");
section.innerText = "Hello!";
//6) Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main')
console.log(footer);
//7) Remove the class main on the div with a class of footer.
footer.classList.remove('main')
console.log(footer);
//8) Create a new li element.
const li = document.createElement("li");
console.log(li);
//9) Give the li the text "four".
li.innerText = "four"
//10) Append the li to the ul element.
const ul = document.querySelector('ul');
ul.appendChild(li);
//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const lists = document.querySelectorAll('ol li');
for (let i = 0; i < lists.length; i++){
    lists[i].style.backgroundColor = 'green';
}
//13) Remove the div with a class of footer.
var removeDiv = document.getElementsByClassName("footer")[0];
removeDiv.remove();