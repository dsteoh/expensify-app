// const person = {
//     name: 'DS',
//     age: '24',
//     location: {
//         city: 'Aus',
//         temp: 32
//     }
// }

// const {name = 'Anonymous', age} = person
// console.log(`${name} is ${age }.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It is ${temperature} in ${city}.`)
// }

const book = {
    title: 'Ego is the Enemy',
    authoer: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-published'} = book.publisher;
console.log(`${publisherName}`);


const address = ['1299 S Juniper Street',  'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state = 'New york', zip] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '2.75'];
const [itemName, , medium] = item;
console.log(`A small ${itemName} costs ${medium}`);