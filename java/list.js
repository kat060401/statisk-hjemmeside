const produkter = document.querySelector(".product_list_container");

const produkterArray = [
  {
    name: "Seje bukser",
    brand: "Designbysi",
    price: 799,
    image: "img/1.jpg",
    onSale: false,
    soldOut: false,
  },
  {
    name: "Lilla prikket top",
    brand: "Designbysi",
    price: 699,
    oldPrice: 999,
    image: "img/2.jpg",
    onSale: true,
    discount: 30,
    soldOut: false,
  },
  {
    name: "Prikket top",
    brand: "Designbysi",
    price: 299,
    image: "img/3.jpg",
    onSale: false,
    soldOut: true,
  },
  {
    name: "Hvid prikket top",
    brand: "Designbysi",
    price: 699,
    oldPrice: 999,
    image: "img/4.jpg",
    onSale: true,
    discount: 50,
    soldOut: true,
  },
];

produkterArray.forEach((produkt) => {
  produkter.innerHTML += `
    <a href="produkt.html" class="product_card ${produkt.onSale ? "on_sale" : ""} ${produkt.soldOut ? "sold_out" : ""}">
      <div class="image_container">
        ${produkt.onSale ? `<span class="sale_badge">-${produkt.discount}%</span>` : ""}
        ${produkt.soldOut ? `<span class="sold_out_badge">Udsolgt</span>` : ""}
        <img src="${produkt.image}" alt="${produkt.name}" />
      </div>
      <h3>${produkt.name}</h3>
      <p class="brand">${produkt.brand}</p>
      ${
        produkt.onSale
          ? `<div class="price_container">
               <p class="old_price">${produkt.oldPrice} kr.</p>
               <p class="price sale_price">${produkt.price} kr.</p>
             </div>`
          : `<p class="price">${produkt.price} kr.</p>`
      }
    </a>
  `;
});
