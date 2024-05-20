class Contact {
    constructor (name, role, number, email) {
        this.name = name;
        this.role = role; 
        this.number= number;
        this.email = email;
    }

    renderContactComponent() {
        let contactCompnent = document.createElement('div');
        contactCompnent.setAttribute('class', 'contact-item');

        let contactHeading = document.createElement('h3');
        contactHeading.textContent = this.name;

        let contactRole = document.createElement('p');
        contactRole.textContent = this.role;

        let contactDigits = document.createElement('p');
        contactDigits.textContent = this.number;

        let contactEmail = document.createElement('p');
        contactEmail.textContent = this.email;

        contactCompnent.appendChild(contactHeading);
        contactCompnent.appendChild(contactRole);
        contactCompnent.appendChild(contactDigits);
        contactCompnent.appendChild(contactEmail);

        return contactCompnent;
    }
}

let alchemistCeo = new Contact('Pikk Better', 'CEO', '0726723013', 'alchemistceo@gmail.com');
let alchemistChef = new Contact('Midway Master', 'Chef', '0726723013', 'alchemistchef@gmail.com');
let alchemistManager = new Contact('Goldenstar921', 'Manager', '0726723013', 'alchemistmanager@gmail.com');

let alchemistContacts = [alchemistCeo, alchemistChef, alchemistManager];

function showContact() {
    let contentHolder = document.querySelector('#content');

    // Contact content holder
    let contactContent = document.createElement('div');
    contactContent.setAttribute('class', 'contact-content');

    //  Create a contacts heading and its content
    let heading = document.createElement('h1');
    heading.textContent = "Contact Us";
    contactContent.appendChild(heading);

    // Add all contacts to contact content holder
    for (let counter = 0; counter < alchemistContacts.length; counter++) {
        let individualContact = alchemistContacts[counter];
        let individualContactContent = individualContact.renderContactComponent();
        contactContent.appendChild(individualContactContent);
    }

    contentHolder.appendChild(contactContent);
    return;
}

export { showContact };