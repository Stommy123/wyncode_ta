
const classroom = new Map();

const stevenJ = { name: 'Steven', age: 22 },
    sarah = { name: 'Sarah', age: 23 },
    stevenS = { name: 'Steven', age: 22 };

classroom.set('stevenJ', stevenJ);
classroom.set('sarah', sarah);
classroom.set('stevenS', stevenS);

//console.log('classroom size:', classroom.size);
//classroom.clear();
//console.log('classroom size:', classroom.size);

//if (classroom.has('stevenJ')) console.log('stevenJ is in the classroom');
//if (classroom.has('sarah')) console.log('sarah is in the classroom');
//if (classroom.has('stevenS')) console.log('stevenS is in the classroom');

//classroom.delete('sarah');
//console.log('sarah:', classroom.get('sarah'));


for (let student of classroom) console.log(`'${student[0]}': ${student[1].name} is ${student[1].age} years old.`);
