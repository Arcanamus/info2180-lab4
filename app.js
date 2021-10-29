window.addEventListener('load', function(){
    var searchButton = document.querySelector(".button");
    var form = document.querySelector('#searchBox');
    var url = `superheroes.php?query=${form.value}`;
    var result = document.querySelector('#result');

    searchButton.addEventListener('click', function(event){
        event.preventDefault();
        fetch(url)
        .then(response => response.text())
        .then(text => result.innerHTML = text)
        .catch(error => {console.log("Unable to complete this request! Please try again.")});
    });
});