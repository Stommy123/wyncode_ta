//SINGLE PYRAMID
const pyramid = height => {
for (let i = 0; i <= height; i++) {
  let output = "";
  for (let k = 0; k <= i; k++) output += "*" 
  console.log(output);
  }
}
pyramid(5)


//SINGLE PYRAMID METHOD 2
const pyramid2 = height => {
  const star = "*"
  for (let i = 1; i <= height; i++) console.log(star.repeat(i)) 
}
pyramid2(5);


//DOUBLE PYRAMID METHOD 1
const pyramid3 = height => {
  for (let i = 0; i < height; i++) {
    let star= ""
    for (let j = 0; j < height - i; j++) star += " " 
    for (let k = 0; k <= i; k++) star += "* " 
    console.log(star)
  }
}
pyramid3(5)


// DOUBLE PYRAMID METHOD 2
const pyramid4 = height => {
  for ( let i = 1; i <= height; i++){
    const space = ' '.repeat(height - i)
    const star = '*'.repeat(i * 2 - 1)
    console.log(space + star + space)
  }
}
pyramid4(5)
