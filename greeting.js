const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const body = document.querySelector("body");
const SHOWING_CN = "showing";

const USER = "currentUser";

function paintGreeting(text) {
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER);
    if(currentUser === null) {
        body.style.backgroundColor = "red";
    }
    else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();