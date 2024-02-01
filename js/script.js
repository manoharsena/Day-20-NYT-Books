
function getNYTBooks() {
  let url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=J63QBTyu7Kzs9GKRlhoWBrGV68o4eNgO`;

  // call the api_url to fetch the information
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //total no. of books
      const noofBooks = data.results.books.length; 

      //create cards for each books
      for (let i = 0; i < noofBooks; i++) {
        let row = document.querySelector(".row");
        let div = document.createElement("div");

        div.className = "col-sm-6 col-md-4 col-lg-4 col-xl-4";

        // Render the Card for each Books
        let fileLoad = `<div class="card h-100" >
              <div class="card-header">${data.results.books[i].title}</div>
                <div class="card-body">
                     <img class="flag1" src="${data.results.books[i].book_image}" alt="" className="block mx-auto w-1/2">
                     <div class=align><br>
                     <p class="card-text">${data.results.books[i].description}</p>
                     <p class="card-text">Author : ${data.results.books[i].author}</p>
                     <p class="card-text">ISBN : ${data.results.books[i].primary_isbn10}</p>
                     <p class="card-text">Publisher : ${data.results.books[i].publisher}</p>
                     <p class="card-text"><b>Rank : </b>${data.results.books[i].rank}</p>
                     <br>
                </div>
               </div>
             </div>`;

        div.innerHTML = fileLoad;
        row.appendChild(div);
      }
    });
}
getNYTBooks();
