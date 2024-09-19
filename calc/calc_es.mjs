// using ECMAScript(ES) modules
import * as readline from 'readline';
import { stdin as input, stdout as output} from 'process';
import { resolve } from 'path';

const rl = readline.createInterface ({input, output });
//recursive method
// function question() {
//     rl.question('Enter the sample question: ',(input)=> {
//         if(input === 'quit')
//             rl.close();
//         else {
//             try {
//                 const value = eval(input);
//                 console.log(value);
//             } catch ( exception) {
//                 console.log("Invalid inputs");
//             }
//             question();
//         }
//     })
   
// }

// question();

// loop

function question(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    })
}

let answer = await question('Enter your question');

while( answer != 'quit') {
    try {
        const value = eval(answer);
        console.log(value);
    } catch ( exception) {
        console.log("Invalid inputs");
    }
    answer = await question('Enter your question');
}
rl.close();