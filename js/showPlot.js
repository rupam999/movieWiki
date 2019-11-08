let url = new URLSearchParams(location.search);
var movieTitle = url.get('title');
if(movieTitle != null){
    var urlApi = "http://www.omdbapi.com/?i=tt3896198&apikey=6d88b1e4&t=" + movieTitle;
    // console.log(urlApi)
    const app = document.getElementById('root')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    app.appendChild(container)
    var request = new XMLHttpRequest()
    request.open('GET', urlApi, true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
                const card = document.createElement('div');
                card.setAttribute('class', 'card');
                container.appendChild(card);
                
                    const posterUrl = data.Poster;
                    if(posterUrl.localeCompare('N/A')!=0){
                        const image = document.createElement("img");
                        image.setAttribute("src", posterUrl);
                        image.setAttribute("width", "285");
                        image.setAttribute("height", "285");
                        image.setAttribute("alt", movieTitle);
                        card.appendChild(image);
                    } else{
                        const na = document.createElement("img");
                        na.setAttribute("src", "images/na.png");
                        na.setAttribute("width", "285");
                        na.setAttribute("height", "285");
                        na.setAttribute("alt", "Image Not Available...");
                        card.appendChild(na);
                    }

                const title = document.createElement('h3')
                title.textContent = "Name of the movie : " + data.Title;
                card.appendChild(title)

                const section = document.createElement('section')
                const year = document.createElement('p')
                year.textContent = "Release Date : " + data.Released;
                year.classList.add("year");

                const rating = document.createElement('p')
                rating.textContent = "IMDB Rating : " + data.imdbRating;

                const genre = document.createElement('p')
                genre.textContent = "Genre : " + data.Genre;

                const director = document.createElement('p')
                director.textContent = "Director : " + data.Director;

                const writer = document.createElement('p')
                writer.textContent = "Writer : " + data.Writer;

                const actors = document.createElement('p')
                actors.textContent = "Actors     : " + data.Actors;

                const plot = document.createElement('p')
                plot.textContent = "Plot : " + data.Plot;


                section.appendChild(year)
                section.appendChild(rating)
                section.appendChild(genre)
                section.appendChild(director)
                section.appendChild(writer)
                section.appendChild(actors)
                section.appendChild(plot)
                card.appendChild(section)

        } else {
            document.querySelector("#noData").innerHTML = "Problem In Connection . . .";
            document.querySelector("#root").classList.add('disableClass')
        }
    }
    request.send()
} else{
    document.querySelector("#noData").innerHTML = "No Data Found . . .";
    document.querySelector("#root").classList.add('disableClass')
}