// Task-1:
// Count how many times a string has the letter a

const a = 'an apple a book a glass a pineapple a mango';

const find = a.match(/a/g);
console.log(find.length);

// Task-2:
// Count how many times a string has the letter a or A

const A = 'A ball a cat A dog A jAckfruit A self';
const found = A.match(/a/g);
const found1 = A.match(/A/g);
console.log(`small a = ${found.length} | capital A = ${found1.length}`);


// Check whether a string contains all the vowels a, e, i, o, u

const str = 'i love bangladesh';

    if(str.includes('a') && str.includes('e') && str.includes('i') && str.includes('o') && str.includes('u')){
        console.log(true);
    } else{
        console.log('not found');
    }     
      

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let text = 'x-ray x-value X-axis';

 if(text.match(/x/g) || text.match(/X/g)){
    text = text.replace(/x/g,'y');
    text = text.replace(/X/g,'Y');
 }
console.log(text);

// Capitalize Every first Letter of each word in a String

const name = 'md musfique patwary';
let divides = name.split(' ');
// console.log(divides)
for(let i = 0; i< divides.length; i++){
    divides[i] = divides[i][0].toUpperCase() + divides[i].slice(1).toLowerCase();
}
const result = divides.join(' ')
console.log(result)