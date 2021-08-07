function randomQuote() {
    const apiUrl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const quoteSpan = document.querySelector("#quote span:first-child");
            const authorSpan = document.querySelector("#quote span:last-child");

            const quote = data.quotes[0].text;
            const author = data.quotes[0].author;

            quoteSpan.innerText = quote;
            authorSpan.innerText = author;
        });
}

randomQuote();
