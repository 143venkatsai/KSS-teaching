let rootContainer = document.getElementById("root");

function getApiData(data) {
  console.log(data);

  for (let category of data) {
    let container = document.createElement("div");
    let imageElement = document.createElement("img");
    imageElement.src = category.strCategoryThumb;
    imageElement.style.height = "200px";
    imageElement.style.width = "250px";
    container.appendChild(imageElement);

    let paragraph = document.createElement("p");
    paragraph.textContent = category.strCategory;
    paragraph.style.fontSize = "24px";
    container.appendChild(paragraph);

    container.style.textAlign = "center";
    container.style.border = "1px solid";
    container.style.width = "400px";
    container.style.margin = "auto";
    container.style.marginBottom = "30px";
    container.style.borderRadius = "10px";

    rootContainer.appendChild(container);
  }
}

let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
let options = {
  method: "GET",
};
fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    // console.log(jsonData);
    getApiData(jsonData.categories);
    // console.log(categoriesList);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//GET POST PUT DELETE
