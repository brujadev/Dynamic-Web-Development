window.addEventListener('DOMContentLoaded', async() => {

    const myURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=black+women&api-key=G8GMlJGQtqD0NbaYRs1CnQQqJA0yY5wp&begin_date=19600101&end_date=19691231";
    const apiOptions = { method: "GET" };
    const response = await fetch(myURL, apiOptions);
    const result = await response.json();
    //console.log(result);

    window.addEventListener("click", () => {
        //when user interacts with app remove invitation and play song
        if (document.querySelector('.invitation')) {
            document.querySelector('.invitation').remove()
        }
        var song = document.getElementById("my_audio");
        song.play();

        //randomizes article on click
        var randomArticle = Math.floor(Math.random() * 10);
        var title = document.getElementById("headline");
        title.innerHTML = result.response.docs[randomArticle].headline.main;
        var subtext = document.getElementById("abstract");
        subtext.innerHTML = result.response.docs[randomArticle].abstract;
        var paragraph = document.getElementById("para");
        paragraph.innerHTML = result.response.docs[randomArticle].lead_paragraph;
    })
})