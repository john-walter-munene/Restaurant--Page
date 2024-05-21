import { initializeProject as loadHomepage } from "./loader";
import './styles.css';
import { showMenu } from "./menu";
import { showContact } from "./contacts";

// Load homepage
loadHomepage();

// Get naivation buttons, attach listeners
let navigationButtons = document.querySelectorAll('nav button');
navigationButtons.forEach((button) => {
    button.addEventListener('click', () => switchTabs(button));
});

function switchTabs(button) {
    let contentHolder = document.querySelector('#content');
    contentHolder.textContent = '';
    let buttonType = button.getAttribute('class');
    if (buttonType === 'home') loadHomepage();
    if (buttonType === 'menu') showMenu();
    if (buttonType === 'contact') showContact();
    return;
}