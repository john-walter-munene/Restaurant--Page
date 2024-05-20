import { initializeProject as loadHomepage } from "./loader";
import './styles.css';
import { showMenu } from "./menu";
import { showContact } from "./contacts";

// Load homepage
loadHomepage();

let navigationButtons = document.querySelectorAll('nav button');
let contentHolder = document.querySelector('#content');

navigationButtons.forEach((button) => {
    button.addEventListener('click', () => switchTabs(button));
});

function switchTabs(button) {
    let buttonType = button.getAttribute('class');
    contentHolder.textContent = '';
    console.log(buttonType);
    if (buttonType === 'home') loadHomepage();
    if (buttonType === 'menu') showMenu();
    if (buttonType === 'contact') showContact();
    return;
}