
// const expenses = {
//     description: 'Gum 2',
//     note: '',
//     amount: 195,
//     createdAt: 0
// }
// const epxense2 = {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'day').valueOf()
// }
// const expense3 =  {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'day').valueOf()
// }

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });
// database.ref('expenses').once('value').then((snapshot)=> {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });
// database.ref('expenses').push(expenses)
// database.ref('expenses').push(epxense2)
// database.ref('expenses').push(expense3)

// database.ref().once('value').then((snapshot)=> {
//     console.log(snapshot.val());
// }).catch((e)=> {
//     console.log(e)
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const person = snapshot.val();
//     console.log(`${person.name} is a ${person.job.title} at ${person.job.company}.`);
// }, (e) => {
//     console.log(e);
// });

// database.ref().update({
//     name: 'Mike'
// })


// database.ref().set({
//     name: 'DS',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Melbourne',
//         country: 'Australia'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log(e);
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('age').remove().then(() => {
//     console.log('remove completed');
// }).catch((e) => {
//     console.log(e)
// })