// Define function receivesAFunction
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // Example usage:
  function callbackFunction() {
    console.log("Callback function called");
  }
  
  // Call receivesAFunction with the callback function
  receivesAFunction(callbackFunction);
  
  // Define function returnsANamedFunction
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      // Function body
      console.log("This is a named function");
    }
  
    // Return the named function
    return namedFunction;
  }
  
  // Example usage:
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Output: "This is a named function"
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      // Function body
      console.log("This is an anonymous function");
    };
  }
  
  // Example usage:
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc(); // Output: "This is an anonymous function"
  