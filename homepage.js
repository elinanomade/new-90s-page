let button = document.getElementById('myCoolButton');

function sayHello() {
    let myElement = document.createElement('h2');
    myElement.innerHTML = 'DARK SECRETS OF FURBYS';
    alert('Helloooooo. Be aware of what you will find out.');
    document.getElementById('container').appendChild(myElement);
}

button.addEventListener('click', sayHello);

new cursoreffects.fairyDustCursor({colors: ["#ff0000", "#00ff00", "#0000ff"]});

