const form = document.getElementById("student-form");
const card = document.getElementById("card");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const study = document.getElementById("study").value;
    const color = document.getElementById("color").value;

    card.innerHTML = `
        <h2>${name}</h2>
        <p>Field of Study: ${study}</p>
    `;

    card.style.backgroundColor = color;
    card.style.display = "block";
});
