/* =========================================================
   Masa kartındaki QR kodun açacağı adres.
   Menüyü kendi alan adınızda yayınlarsanız bu adresi değiştirin;
   QR kod sayfa açılınca otomatik olarak yeniden üretilir.
   ========================================================= */
const MENU_ADRESI = "https://aleynaozbalik.github.io/qr-menu/";

function qrSVG(adres) {
  // qrcode-generator kütüphanesi internetten yüklenir (index'te <script> ile).
  // İnternet yoksa hazır img/menu-qr.svg dosyası kullanılır.
  if (typeof qrcode !== "function") return `<img src="img/menu-qr.svg" alt="">`;
  const qr = qrcode(0, "Q"); // Q = yüksek hata düzeltme, baskıda çizilse bile okunur
  qr.addData(adres);
  qr.make();
  const n = qr.getModuleCount();
  let d = "";
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (qr.isDark(r, c)) d += `M${c} ${r}h1v1h-1z`;
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges"><path fill="#1b2d5c" d="${d}"/></svg>`;
}

const kart = document.getElementById("kart").innerHTML.replace("__QR__", qrSVG(MENU_ADRESI));
const kapsayici = document.getElementById("wrap");
// Ekranda 1 kart, baskıda 4 kart (A4)
kapsayici.innerHTML =
  kart + [1, 2, 3].map(() => kart.replace('class="card"', 'class="card print-only"')).join("");
