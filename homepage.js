let button = document.getElementById('myCoolButton');

function sayHello() {
    let myElement = document.createElement('h2');
    myElement.innerHTML = 'Here would be a photo but I havent figured out yet JS so well';
    alert('Thank you for smiling. I just took a photo of you');
    document.getElementById('container').appendChild(myElement);
}

button.addEventListener('click', sayHello);

new cursoreffects.fairyDustCursor({colors: ["#C21E56", "#E56E94", "#1DC28B", "#E4E66E", "#FFFFAA", "#FFFFFF"]});

