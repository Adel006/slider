let pagination = document.querySelector(".pagination");
let pictures = document.querySelectorAll(".holder img");
let position = document.querySelector(".holder .position")
let previous_btn = document.querySelector(".controllers .prev");
let next_btn = document.querySelector(".controllers .next");
let counter = 2;

//create pagination elements
for(let i=1; i<=pictures.length; i++) {
    let pagination_element = document.createElement("span");
    let pagination_element_text = document.createTextNode(i);
    //---------------------------
    pagination_element.setAttribute("data-index", i);
    pagination_element.appendChild(pagination_element_text);
    pagination.appendChild(pagination_element);
}

//set active class to the appropriate bullet or image
function setActiveClass() {
    //image
    for(let i=0; i<pictures.length; i++) {
        pictures[i].classList.remove("active");
    }
    pictures[counter-1].classList.add("active");
    //pagination
    let bullets = pagination.children;
    for(let i=0; i<bullets.length; i++) {
        bullets[i].classList.remove("active");
    }
    bullets[counter-1].classList.add("active");
}

//check counter whether first or last to add the appropriate class
function checker() {
    counter == 1 ? previous_btn.classList.add("disable"): previous_btn.classList.remove("disable");
    counter == pictures.length ? next_btn.classList.add("disable"): next_btn.classList.remove("disable");
}

function setter() {
    //set the checker first
    checker();
    //set active class on current bullet and image
    setActiveClass();
    //set position
    position.textContent = `Picture ${counter} Of ${pictures.length}`;
}

//handle click event on bullet
for(let i=0; i<pictures.length; i++) {
    pagination.children[i].onclick = () => {
        counter = parseInt(pagination.children[i].dataset.index);
        setter();
    }
}

//next button
next_btn.onclick = () => {
    if(counter < pictures.length) {
        counter++;
        setter();
    }
}

//previous button
previous_btn.onclick = () => {
    if(counter > 1) {
        counter--;
        setter();
    }
}

setter();
