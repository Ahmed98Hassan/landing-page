// variable 
// Select section on the page
const section = document.querySelectorAll("section");
// Select header nav ul on the page
const Ul = document.getElementById('navbar__list');
// Select header nav ul li on the page
const link = document.querySelector('.menu__link');
// Create the list on ul
function addtoul(){
    // add list to nav bar by section
    for(let i = 0 ; i<section.length; i++){
        // create li
        let list =document.createElement('li');
        // add to li
        list.innerHTML = `
            <a data-nav="${section[i].id}" class="menu__link" href="#${section[i].id}">
                ${section[i].id}
            </a>
            `;
        // add li to ul 
        Ul.appendChild(list);
    };
};
// Calling a function add a menu item
addtoul();
// add active class
window.onscroll = function(){
    // Perform the procedure on all sections of the page
    for(let i = 0 ; i < section.length ; i++){
        // Condition of access to the section
        if(window.scrollY >= section[i].offsetTop &&
            window.scrollY < section[i].offsetTop +section[i].offsetHeight){
            // Add an active attribute to the section when accessing it
            section[i].classList.add('your-active-class');
        }else{
            // Remove it when you get out of it
            section[i].classList.remove('your-active-class');
        };
    };
};
// smoth scrolling
// Add a click event to the menu item when it is clicked
Ul.addEventListener('click', (event)=>{
    // Remove the default value for the old event
    event.preventDefault();
    // Adding the new value to the event "Smooth Scrolling"
    document
    .getElementById(`${event.target.dataset.nav}`)
    .scrollIntoView({behavior:"smooth"});
});