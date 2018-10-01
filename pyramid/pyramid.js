//SINGLE PYRAMID
function pyramid(height) {
for (let i = 0; i <= height; i++) {
  let output = "";
    for (let k = 0; k <= i; k++) {
       output += "*";
    }
    console.log(output);
  }
}
pyramid(5)


//SINGLE PYRAMID METHOD 2
function pyramid2(height) {
  let star = "*"
  for (let i = 1; i <= height; i++){
    console.log(star.repeat(i));
  }
}
pyramid2(5);


//DOUBLE PYRAMID METHOD 1
function pyramid3(height) {
  for (let i = 0; i < height; i++) {
    let star="";
    for (let j = 0; j < height - i; j++) {
        star += " ";
    }
    for (let k = 0; k <= i; k++) {
       star += "*";
    }
    console.log(star);
  }
}
pyramid3(5)


// DOUBLE PYRAMID METHOD 2
function pyramid4(height) {
  for ( let i = 1; i <= height; i++){
    let space = ' '.repeat(height - i);
    let star = '*'.repeat(i * 2 - 1)
    console.log(space + star + space);
  }
}
pyramid4(5)
