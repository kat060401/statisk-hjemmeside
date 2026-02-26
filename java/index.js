const kategorierne = document.querySelector(".kategorier");

// const kategorier = ["Accessories", "Apparel", "Footwear", "Free Items", "Personal Care", "Sporting Goods"];
// console.log("kategorier", kategorier[3]);

// kategorier.forEach((kategori) => {
//   //   console.log(kategori);
//   kategorier.innerHTML += `<li><a href="produktliste.html">${kategori}</a></li>`;
// });

fetch("http://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((kategori) => {
      kategorierne.innerHTML += `<li><a href="produktliste.html">${kategori.category}</a></li>`;
    });
  });
