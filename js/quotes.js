const quotes = [
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    // {
    //     quote: "",
    //     author: "",
    // },
    // {
    //     quote: "",
    //     author: "",
    // },
    // {
    //     quote: "",
    //     author: "",
    // },
    // {
    //     quote: "",
    //     author: "",
    // },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotesLen = quotes.length;
const ran = Math.floor(Math.random() * quotesLen);

quote.innerText = quotes[ran].quote;
author.innerText = quotes[ran].author;
