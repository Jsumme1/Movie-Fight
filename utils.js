const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      // .apply lets multiple arguments get passed individually to function
      func.apply(null, args);
    }, delay);
  };
};

// original search delay - replaced by debouncer above
// // delaying search input - allows user to finish typing, limiting API requests
// let timeoutID;
// const onInput = event => {
//     // first time function is called - timeoutID is zero b/c it hasn't been invoked yet. New timeout is formed every time to avoid triggering the function for multiple api calls
//     if (timeoutID) {
//         clearTimeout(timeoutID);
//     }
//   timeoutID =  setTimeout(()=> {
//   fetchData(event.target.value);
// }, 1000);
// };
