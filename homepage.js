let button = document.getElementById('myCoolButton');

function sayHello() {
    let myElement = document.createElement('h2');
    myElement.innerHTML = 'DARK SECRETS OF FURBYS';
    alert('Helloooooo. Be aware of what you will find out.');
    document.getElementById('container').appendChild(myElement);
}

button.addEventListener('click', sayHello);

new cursoreffects.fairyDustCursor({colors: ["#C21E56", "#E56E94", "#1DC28B", "#E4E66E", "#FFFFAA", "#FFFFFF"]});

