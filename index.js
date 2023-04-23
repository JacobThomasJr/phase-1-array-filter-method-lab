// Code your solution here
// Function to find matching drivers based on input string
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function to fuzzy match drivers based on input string
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Function to match drivers based on name property in array of driver objects
  function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  