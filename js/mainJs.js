function runScript(e) {
    if (e.keyCode == 13 || e.which == 13) {
        var movieName = document.getElementById("movieField");
        if(movieName.value != '' && movieName.value.length>2){
            var url = "showResult.html";
            localStorage.setItem("name", movieName.value);
            document.location.href = url;
        } else{
            alert('Enter A Name that is more than 2 charecter...')
        }
    }
}