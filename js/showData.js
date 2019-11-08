var name=localStorage.getItem("name");
var url = "http://www.omdbapi.com/?i=tt3896198&apikey=6d88b1e4&s=" + name;

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', url, true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    // console.log(data['Response']);
    if (data['Response'].localeCompare("False")){
        let numberOfRes = data.Search.length;
        if(numberOfRes < 8){
          document.querySelector("#showMore").classList.add("hidden");
        } else{
          document.querySelector("#showMore").classList.remove("hidden");
          var eightContent = 8;

          // console.log(data.Search[0].Title)
          // console.log(data.Search);
          for (let i = 0; i < eightContent; i++) {
              const card = document.createElement('div');
              card.setAttribute('class', 'card');
              container.appendChild(card);

              // console.log(data.Search[i].Title)
              const title = document.createElement('h3')
              var nameTitle = data.Search[i].Title;
              title.textContent = data.Search[i].Title;
              var titleName = nameTitle.replace(/ /g, "_");
              // console.log(titleName)

              const posterUrl = data.Search[i].Poster;
              // console.log(posterUrl)
              if(posterUrl.localeCompare('N/A')!=0){
                  const link = document.createElement("a");
                  var urlTitle = "seperateDetails.html?title=" + titleName;
                  link.setAttribute("href", urlTitle);
                  const image = document.createElement("img");
                  image.setAttribute("src", posterUrl);
                  image.setAttribute("width", "285");
                  image.setAttribute("height", "285");
                  image.setAttribute("alt", title);
                  link.appendChild(image);
                  card.appendChild(link);
              } else{
                  const linkNA = document.createElement("a");
                  linkNA.setAttribute("href", "seperateDetails.html");
                  const na = document.createElement("img");
                  na.setAttribute("src", "images/na.png");
                  na.setAttribute("width", "285");
                  na.setAttribute("height", "285");
                  na.setAttribute("alt", "Image Not Available...");
                  linkNA.appendChild(na);
                  card.appendChild(linkNA);
              }
              card.appendChild(title)
          }
          var clickCheck = document.querySelector("#showMore");
          clickCheck.addEventListener("click", function(){
            clickCheck.classList.add("hidden");
            for (let i = eightContent; i < numberOfRes; i++) {
              const card = document.createElement('div');
              card.setAttribute('class', 'card');
              container.appendChild(card);

              // console.log(data.Search[i].Title)
              const title = document.createElement('h3')
              var nameTitle = data.Search[i].Title;
              title.textContent = data.Search[i].Title;
              var titleName = nameTitle.replace(/ /g, "_");
              // console.log(titleName)

              const posterUrl = data.Search[i].Poster;
              // console.log(posterUrl)
              if(posterUrl.localeCompare('N/A')!=0){
                  const link = document.createElement("a");
                  var urlTitle = "seperateDetails.html?title=" + titleName;
                  link.setAttribute("href", urlTitle);
                  const image = document.createElement("img");
                  image.setAttribute("src", posterUrl);
                  image.setAttribute("width", "285");
                  image.setAttribute("height", "285");
                  image.setAttribute("alt", title);
                  link.appendChild(image);
                  card.appendChild(link);
              } else{
                  const linkNA = document.createElement("a");
                  linkNA.setAttribute("href", "seperateDetails.html");
                  const na = document.createElement("img");
                  na.setAttribute("src", "images/na.png");
                  na.setAttribute("width", "285");
                  na.setAttribute("height", "285");
                  na.setAttribute("alt", "Image Not Available...");
                  linkNA.appendChild(na);
                  card.appendChild(linkNA);
              }
              card.appendChild(title)
            }
          });
        }
    } else{
      document.querySelector("#noData").innerHTML = "No Record Found...";
    }
  } else {
    document.querySelector("#noData").innerHTML = "Problem in Connection";
  }
}

request.send()