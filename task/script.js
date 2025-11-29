    $(document).ready(function(){
        var form = document.getElementById("submit-form");
    
        form.addEventListener("submit",function(e){
        e.preventDefault();
        var name = document.getElementById("name").value;
        var study = document.getElementById("study").value;
        var color = document.getElementById("color").value;
        console.log(name , study , color);
        
        var card = document.createElement("div");

        card.innerHTML = `
        <h2>${name}</h2>
        <p>Field of study : ${study}</p>
        `
        card.style.background = color
        card.id = "card"
        document.querySelector("body").appendChild(card);
     });
    })
    

