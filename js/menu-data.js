/* =========================================================
   MENÜ İÇERİĞİ — yemekleri ve fiyatları buradan değiştirin.

   Her kategori:
     baslik    : Kategori adı
     altBaslik : Başlığın altındaki italik kısa not
     figur     : Çizim (fig-fish, fig-olive, fig-shrimp, fig-lemon, fig-shell, fig-raki)
     urunler   : [ "Ürün adı", "Açıklama (boş bırakılabilir)", fiyat ]

   Fiyatlar TL cinsinden sayı olarak yazılır (1150 → "1.150" görünür).
   ========================================================= */

const MENU = [
  {
    baslik: "Mevsim Balıkları",
    altBaslik: "Porsiyon fiyatlarıdır",
    figur: "fig-fish",
    urunler: [
      ["Hamsi", "Karadeniz hamsisi, mısır unu ile", 420],
      ["Palamut", "Kalın dilim, defne yapraklı", 680],
      ["Lüfer", "Boğaz lüferi", 1150],
      ["İstavrit", "Kıyı istavriti", 450],
      ["Mezgit", "Hafif ve yumuşak etli", 480],
      ["Kalkan", "Karadeniz kalkanı", 1450],
      ["Levrek", "Çiftlik", 690],
      ["Çipura", "Çiftlik", 640],
    ],
  },
  {
    baslik: "Soğuk Mezeler",
    altBaslik: "Her gün mutfağımızda hazırlanır",
    figur: "fig-olive",
    urunler: [
      ["Haydari", "Süzme yoğurt, taze nane, sarımsak", 160],
      ["Fava", "Kuru bakla, zeytinyağı, dereotu", 160],
      ["Atom", "Yoğurt, kuru biber, tereyağı", 170],
      ["Girit Ezmesi", "Beyaz peynir, ceviz, fesleğen", 190],
      ["Deniz Börülcesi", "Sarımsaklı zeytinyağı, limon", 210],
      ["Lakerda", "Ev yapımı, kırmızı soğanla", 340],
      ["Ahtapot Salatası", "Ahtapot, kapari, közlenmiş biber", 390],
    ],
  },
  {
    baslik: "Ara Sıcaklar",
    altBaslik: "Sıcak başlangıçlar",
    figur: "fig-shrimp",
    urunler: [
      ["Kalamar Tava", "Halka kalamar, tarator sos", 420],
      ["Karides Güveç", "Kaşarlı, domatesli", 480],
      ["Midye Tava", "Biralı hamur, tarator sos", 360],
      ["Paçanga Böreği", "Pastırma, kaşar, biber", 280],
      ["Ahtapot Izgara", "Kömür ateşinde, patates püresiyle", 620],
      ["Balık Köfte", "Günün balığından, limonlu mayonez", 340],
    ],
  },
  {
    baslik: "Salatalar",
    altBaslik: "Taze ve mevsiminde",
    figur: "fig-lemon",
    urunler: [
      ["Mevsim Salata", "Kıvırcık, roka, nar ekşisi", 160],
      ["Gavurdağı", "İnce kıyım domates, ceviz, sumak", 200],
      ["Roka Parmesan", "Roka, parmesan, balzamik", 220],
    ],
  },
  {
    baslik: "Tatlılar",
    altBaslik: "Tatlı bir kapanış",
    figur: "fig-shell",
    urunler: [
      ["İrmik Helvası", "Sıcak, dondurma ile", 220],
      ["Kabak Tatlısı", "Tahin ve ceviz ile", 200],
      ["Fırın Sütlaç", "Toprak kapta", 190],
    ],
  },
  {
    baslik: "İçecekler",
    altBaslik: "Soğuk ve serinletici",
    figur: "fig-raki",
    urunler: [
      ["Rakı · 20 cl", "", 650],
      ["Rakı · 35 cl", "", 1050],
      ["Rakı · 70 cl", "", 1900],
      ["Beyaz Şarap", "Kadeh", 320],
      ["Ev Yapımı Limonata", "Taze nane ile", 130],
      ["Şalgam", "", 90],
      ["Ayran", "", 70],
      ["Maden Suyu", "", 60],
      ["Su", "50 cl", 40],
    ],
  },
];

/* Baskıda (A4) kategorilerin sayfalara ve sütunlara dağılımı.
   Sayılar yukarıdaki MENU listesindeki sıradır (0'dan başlar).
   Örnek: [[0], [1]] → sol sütun: Mevsim Balıkları, sağ sütun: Soğuk Mezeler */
const BASKI_SAYFALARI = {
  sayfa1: [[0], [1]],
  sayfa2: [[2, 4], [3, 5]],
};
