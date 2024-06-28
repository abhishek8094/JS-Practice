//Debouncing 
const searchInput = document.getElementById("searchInput");

const debounce = (func, delay) => {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    },delay);
  };
};

const myFunction = function (event) {
  const query = event.target.value;
  console.log("query is:", query);

  fetch(`https://api.example.com/search?query=${query}`)
  .then((response) => response.json())
  .then((data) =>{
      console.log(data)
  })
};

searchInput.addEventListener("input", debounce(myFunction, 500));
