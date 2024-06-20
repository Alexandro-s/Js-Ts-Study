const sorcerer = ['Yuta', 'Gojo', 'Yuki,'];


// Add elements to array
sorcerer.push('Geto');

// add elements to the beginning of the array
sorcerer.unshift('Hakari');

// slice the array 
console.log(sorcerer.slice(0, -1));

// Return whether it is an array or not  
console.log(sorcerer instanceof Array);

// Add elements to array  at the end 
sorcerer[sorcerer.length] = 'Maki';

// Changer the array element
sorcerer[0] = 'Okkotsu';

// Remove at the end 
sorcerer.pop()

// Remove to the begnning of the array
sorcerer.shift();

// Delete the element but not index
delete sorcerer[1]; 

console.log(sorcerer);