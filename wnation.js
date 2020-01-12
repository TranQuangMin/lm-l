fetch('https://restcountries.eu/rest/v2/all')
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    console.log(data);
    const nations = document.getElementById("#Nations")
    