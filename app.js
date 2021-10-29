window.addEventListener('load', function(){
    var searchButton = document.querySelector(".button");
    var url = 'http://localhost/info2180-lab4/superheroes.php';


    searchButton.addEventListener('click', function(event){
        event.preventDefault();
        fetch(url)
        .then(response => response.text())
        .then(text => alert(text))
        .catch(error => {console.log("Unable to complete this request! Please try again.")});
    });
});
