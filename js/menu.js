/* Menü verisini (js/menu-data.js) sayfaya yerleştirir. */

const fiyat = (n) => n.toLocaleString("tr-TR");

function kategoriHTML(k) {
  const urunler = k.urunler
    .map(([ad, aciklama, tl]) => `
      <li class="it">
        <span class="n">${ad}</span><span class="p">${fiyat(tl)}</span>
        ${aciklama ? `<p class="d">${aciklama}</p>` : ""}
      </li>`)
    .join("");

  return `
    <section class="cat">
      <div class="cat-head">
        <svg class="fig" aria-hidden="true"><use href="#${k.figur}"/></svg>
        <h2>${k.baslik}</h2>
        <div class="orn" aria-hidden="true"><span></span><i></i><span></span></div>
        <p>${k.altBaslik}</p>
      </div>
      <ul class="items">${urunler}</ul>
    </section>`;
}

function sutunlar(gruplar) {
  return gruplar
    .map((g) => `<div class="col">${g.map((i) => kategoriHTML(MENU[i])).join("")}</div>`)
    .join("");
}

// Ekran (QR ile açılan) görünüm
document.getElementById("menu").innerHTML = MENU.map(kategoriHTML).join("");

// Baskı görünümü
document.getElementById("pp1").innerHTML = sutunlar(BASKI_SAYFALARI.sayfa1);
document.getElementById("pp2").innerHTML = sutunlar(BASKI_SAYFALARI.sayfa2);
