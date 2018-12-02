const chalk = require("chalk");

//1
const helloBlue = () => {
  console.log(chalk.blue('Hello world!'));
}

//2
const helloRed = () => {
  console.log(chalk.red('Hello world!'));
}

//3
const strToColor = (str, color) => {
  console.log(chalk[color](str));
}

//4
const evensBlueOddsYellow = (str) => {
  let arr = str.split(" ");
  let newArr = []
  arr.forEach((el, i) => {
    if(i % 2 === 0){
      newArr.push(chalk.blue(el));
    }else{
      newArr.push(chalk.yellow(el));
    }
  })
  console.log(newArr.join(" "))
}

//5
const angryText = (str) => {
  console.log(chalk.red.bold.underline(str.toUpperCase()));
}

//6
const backgroundCyan = (str) => {
  console.log(chalk.bgCyan(str));
}

//7
const boldFirstUnderlineLast = (str) => {
  let arr = str.split(" ");
  let newArr = [];
  arr.forEach((el, i) => {
    if(i === 0){
      newArr.push(chalk.bold(el))
    } else if(i === arr.length-1){
      newArr.push(chalk.underline(el))
    }else{
      newArr.push(el)
    }
  })
  console.log(newArr.join(" "))
}

//8
// //hardcode ar1 = text color, arg2 = background color, arg3 = underline
// const commandLineChalk = () => {
  // let args = process.argv.slice(2)
//   if(args){
//     if(args[0] && !args[1]){
//       console.log(chalk[args[0]](`You chose ${args[0]} as your text color`));
//     } else if(!args[2]){
//       let Color = args[1][0].toUpperCase() + args[1].slice(1)
//       console.log(chalk[args[0]]["bg"+ Color](`You chose ${args[0]} as your text color and ${args[1]} as your background color`));
//     } else if(args[2] === "underline"){
//       let Color = args[1][0].toUpperCase() + args[1].slice(1)
//       console.log(chalk["underline"][args[0]]["bg"+ Color](`You chose ${args[0]} as your text color and ${args[1]} as your background color. All underlined.`));
//     }
//   }
const commandLineChalk = () => {
  var prompt = require('prompt');
  prompt.start();
  prompt.get(['Pick a text color', 'Pick a background color', 'Would you like to undrline the text'], function (err, result) {
   let myColor = result['Pick a text color'];
   let lowercaseBg = result['Pick a background color']
   let bgColor = lowercaseBg[0].toUpperCase() + lowercaseBg.slice(1);
   let underlineBool = result['Would you like to undrline the text'];
   console.log(typeof underlineBool)
   if(underlineBool == "yea" || underlineBool == "yes" || underlineBool == "yes please"){
     console.log(chalk["bg"+bgColor][myColor]["underline"](`You chose ${myColor} as your text color and ${bgColor} as your background color. All underlined.`));
   } else {
     console.log(chalk["bg"+bgColor][myColor](`You chose ${myColor} as your text color and ${bgColor} as your background color. You opted not to uderline your text.`));
   }
  });
}
commandLineChalk();
