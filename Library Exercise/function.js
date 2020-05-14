const showBookResults = (allResults) => {

    //results.innerHTML = "";
    //let html = ""
    allResults.forEach(book => {

        console.log(book)

        results.innerHTML += `
        <br>
       <div class = "card overflow-auto mb-3 mr-3 col-sm-3 col-lg-2 col-md-4 bg-light"style="height: 200px" >
       <div><a href="${book.volumeInfo.infoLink}"><img src = ${book.volumeInfo.imageLinks.thumbnail} 
       class="w-100" title="See profile"></a></div>
     <div class = "card-body">
       <h6 class = "card-title">Title: ${book.volumeInfo.title}</h6>
      <p class = "card-text">Author: ${book.volumeInfo.authors}</p>
      <p class = "card-text">Category: ${book.volumeInfo.categories}</p>
      <p class = "card-text">Published Date: ${book.volumeInfo.publishedDate}</p>
      </div>
      </div>
         `
    })
   // results.innerHTML = html;
};

showBookResults(libraries.items)

/*

*/