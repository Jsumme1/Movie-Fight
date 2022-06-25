// use Axios for API call
const fetchData = async (searchTerm) => {
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "a828aba8",
        s: searchTerm,
      },
    });
    console.log(response.data.Plot);
};

const input = document.querySelector('input');

const debounce = (func, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutID);
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


const onInput = event => {
  fetchData(event.target.value);
};
input.addEventListener('input', debounce(onInput, 500));
