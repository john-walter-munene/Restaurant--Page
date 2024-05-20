function initializeProject() {
    let contentHolder = document.querySelector('#content');

    let homePageContent = document.createElement('div');
    homePageContent.setAttribute('class', 'home-content');
    
    // Create a heading and add its content.
    let heading = document.createElement('h1');
    heading.textContent = "Alchemist Beer Garden";

    let introText = createIntro();
    let opsText = createOperationTime();
    let location = createLocation();

    // Add all sections to my homepage components.
    homePageContent.appendChild(heading);
    homePageContent.appendChild(introText);
    homePageContent.appendChild(opsText);
    homePageContent.appendChild(location);

    // Add homepage content to content space
    contentHolder.appendChild(homePageContent);
    return;
}

function createIntro() {
    // Create intro section and add its content.
    let intro = document.createElement('div');
    intro.setAttribute('class', 'intro');
    let introParaOne = document.createElement('p');
    introParaOne.textContent = "In the Alchemist Beer Garden, we provide you with the best meals and drinks. Whether you\
                                want to enjoy these indoors or outdoor, we have halls and nature parks. If you'd even like \
                                to take things on the next level, we have plenty of games and recreational activities.";
    let introParaTwo = document.createElement('p');
    introParaTwo.textContent = "— Goldstars";
    intro.appendChild(introParaOne);
    intro.appendChild(introParaTwo);

    return intro;
}

function createOperationTime() {
    // Create Operation time section.
    let operationTime = document.createElement('div');
    operationTime.setAttribute('class', 'operation-time');
    let operationTimeHead = document.createElement('h3');
    operationTimeHead.textContent = 'Hours';
    let workHours = document.createElement('div');
    workHours.setAttribute('class', 'work-hours');
    let workHoursArray = [
        "Sunday: 9am - 9pm",
        "Monday: 8am - 8pm",
        "Tuesday: 8am - 8pm",
        "Wednesday: 8am - 8pm",
        "Thursday: 8am - 9pm",
        "Friday: 8am - 10pm",
        "Saturday: 9am - 10pm",
    ];

    operationTime.appendChild(operationTimeHead);

    for (let counter = 0; counter < workHoursArray.length; counter++) {
        let para = document.createElement('p');
        para.textContent = workHoursArray[counter];
        workHours.appendChild(para);
    }
    
    operationTime.appendChild(workHours);

    return operationTime;
}

function createLocation() {
    // Create location section and add content
    let locationSection = document.createElement('div');
    locationSection.setAttribute('class', 'location');
    let locationHeading = document.createElement('h3');
    locationHeading.textContent = 'Location';
    let loactionPara = document.createElement('p');
    loactionPara.textContent = "1254, Northland streets, Nairobi, Kenya.";
    locationSection.appendChild(locationHeading);
    locationSection.appendChild(loactionPara);

    return locationSection;
}

export { initializeProject };