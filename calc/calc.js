// using Standard input and output

process.stdin.on('data', (chunk)=> {
    const input = chunk.toString().trim();
    if(input === 'quit') {
        process.exit(0);
    }
    try {
        const value = eval(input);
        console.log(`${value}`);
    } catch (exception) {
        console.log("Invalid inputs")
    }
    process.stdout.write("Enter your simple equation: ");

})

process.stdout.write("Enter your simple equation: ");

