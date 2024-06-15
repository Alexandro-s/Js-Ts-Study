let fullName = prompt('Writer your full name: ');

document.body.innerHTML += `Your name is: ${fullName}<br />`;

document.body.innerHTML += `Your name has ${fullName.replace(/\s+/g, '').length} letters <br />`;

document.body.innerHTML += `The second letter of your name is: ${fullName[1]} <br />`;

document.body.innerHTML += `What is the first index of the letter A in your name?  ${fullName.indexOf('a')} <br />`;

document.body.innerHTML += `What is the last index of the letter A in your name? ${fullName.lastIndexOf('a')} <br />`;

document.body.innerHTML += `The last of 3 letter of your name are:  ${fullName.slice(-3)} <br />`;

document.body.innerHTML += `The words of your name are ${fullName.split(' ')} <br />`;

document.body.innerHTML += `Your name with uppercase letters: ${fullName.toUpperCase()}   <br />`;

document.body.innerHTML += `Your name with lower letter: ${fullName.toLocaleLowerCase()} <br />`;


