/* =========================================================
   MENÜ İÇERİĞİ — yemekleri ve fiyatları buradan değiştirin.

   Her kategori:
     baslik    : Kategori adı
     altBaslik : Başlığın altındaki italik kısa not
     figur     : Çizim (fig-fish, fig-olive, fig-shrimp, fig-lemon, fig-shell, fig-raki,
                 fig-salad, fig-dessert)
     urunler   : [ "Ürün adı", "Açıklama", fiyat ]  ya da açıklamasız  [ "Ürün adı", fiyat ]

   Fiyatlar TL cinsinden sayı olarak yazılır (1150 → "1.150" görünür).
   ========================================================= */

const MENU = [
  {
    baslik: "Balıklar",
    altBaslik: "Porsiyon fiyatlarıdır",
    figur: "fig-fish",
    urunler: [
      ["Izgara Levrek", 500],
      ["Izgara Çipura", 500],
      ["Izgara Palamut", 500],
      ["Izgara Lüfer", 500],
      ["Mezgit Tava", 500],
      ["Sardalya Tava", 500],
      ["Hamsi Tava", 500],
      ["Balık Köftesi", 500],
      ["Balık Ekmek", "Sardalya", 500],
    ],
  },
  {
    baslik: "Soğuk Mezeler",
    figur: "fig-olive",
    urunler: [
      ["Haydari", "Süzme yoğurt, taze nane, sarımsak", 300],
      ["Yoğurtlu Patlıcan", "Süzme yoğurt, közlemiş patlıcan", 300],
      ["Fava", "Kuru bakla, zeytinyağı, dereotu", 300],
      ["Atom", "Yoğurt, kuru biber, tereyağı", 300],
      ["Lakerda", "Kırmızı soğan ve dereotu ile servis edilir.", 300],
    ],
  },
  {
    baslik: "Ara Sıcaklar",
    figur: "fig-shrimp",
    urunler: [
      ["Kalamar Tava", "Tarator sos ile servis edilir.", 300],
      ["Karides Güveç", "Pul biberli tereyağlı sos", 300],
      ["Midye Tava", "Tarator sos ile servis edilir", 300],
    ],
  },
  {
    baslik: "Salatalar",
    figur: "fig-salad",
    urunler: [
      ["Mevsim Salata", "Kıvırcık marul, roka, domates, salatalık, biber", 300],
      ["İstanbul Salata", "Domates, soğan, özel sos", 300],
    ],
  },
  {
    baslik: "Tatlılar",
    figur: "fig-dessert",
    urunler: [
      ["Kabak Tatlısı", "Tahin ve ceviz ile", 200],
      ["Fırın Helva", "Güveç", 190],
    ],
  },
  {
    baslik: "İçecekler",
    figur: "fig-raki",
    urunler: [
      ["Şalgam", "", 90],
      ["Ayran", "", 70],
      ["Coca Cola", "", 100],

      ["Maden Suyu", "", 60],
      ["Su", "50 cl", 40],
    ],
  },
];

/* Baskıda (A4) kategorilerin sayfalara ve sütunlara dağılımı.
   Sayılar yukarıdaki MENU listesindeki sıradır (0'dan başlar).
   Örnek: [[0], [1, 2]] → sol sütun: Balıklar,
                          sağ sütun: Soğuk Mezeler + Ara Sıcaklar */
const BASKI_SAYFALARI = {
  sayfa1: [[0], [1, 2]],
  sayfa2: [[3, 4], [5]],
};
