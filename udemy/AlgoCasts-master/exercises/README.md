# Jest

Using npx to Run Jest
In this course, we will be using the Jest library to run our tests in the terminal while writing code. As of now you no longer need to install the Jest library globally to use it.  Note - This assumes your Node/npm versions are not very out of date.

Anywhere you see in the course the jest command being run (this example is from the "Repo Test Setup" lecture):

```jest fib/tests.js --watch```

You can instead prepend npx to run the command without ever having installed it:

```npx jest fib/tests.js --watch```

Watch all of the tests at once:

```npx jest --watchAll```

## Debugger 

- Invoke/Instantiate your function 
- Include the term ```debugger``` where you want to inspect
  - This will pause the code at that statement
- Run: ```node inspect directoryName/filename```
- Run: ```c``` for continue or ```cont```
- It will stop at the debugger.
- Run: ```repl``` to inspect values
  - If you have a variable you can check the state by typing in the name.
- Run: ```^c``` Control + c will cancel the debug mode


# Run Code 

- Invoke/Instantiate your function 
- Include the term ```console.log()``` where you want to view value
- Install Code Runner in Extensions
- Once installed right click the file you would like to run then select ```Run Code```
- This will display on the output console