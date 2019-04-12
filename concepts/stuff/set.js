const classroom = new Set();

const stevenJ = { name: 'Steven', age: 22 },
    sarah = { name: 'Sarah', age: 23 },
    stevenS = { name: 'Steven', age: 22 };

classroom.add(stevenJ);
classroom.add(sarah);
classroom.add(stevenS);
classroom.add(sarah);

if (classroom.has(stevenJ)) console.log('stevenJ is in the classroom');
if (classroom.has(sarah)) console.log('sarah is in the classroom');
if (classroom.has(stevenS)) console.log('stevenS is in the classroom');

console.log('classroom size:', classroom.size);
classroom.deconste(stevenJ);
console.log('classroom size:', classroom.size);

// Create an array of students from the classroom set
const arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);

// Create a Set from an existing array
const alumni = new Set(arrayOfStudents);
console.log('alumni size:', alumni.size);
