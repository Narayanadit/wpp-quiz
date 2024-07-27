function start_spec_str(str) {
    // Check if the length of str is less than 4
    if (str.length < 4) {
      // If true, return false
      return false;
    }
    // Extract the first four characters of str
    front = str.substring(0, 4);
    // Check if front is equal to 'Java'
    if (front == 'Java') {
      // If true, return true
      return true;
    } else {
      // If not equal to 'Java', return false
      return false;
    }
  }
  
  // Log the result of calling the start_spec_str function with the argument "JavaScript" to the console
  console.log(start_spec_str("JavaScript"));
  
  // Log the result of calling the start_spec_str function with the argument "Java" to the console
  console.log(start_spec_str("Java"));
  
  // Log the result of calling the start_spec_str function with the argument "Python" to the console
  console.log(start_spec_str("Python"));