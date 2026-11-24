/* =========================================================
   MENÜ İÇERİĞİ — yemekleri ve fiyatları buradan değiştirin.

   Her kategori:
     baslik    : Kategori adı
     altBaslik : Başlığın altındaki italik kısa not
     figur     : Çizim (fig-fish, fig-olive, fig-shrimp, fig-lemon, fig-shell, fig-raki,
                 fig-salad, fig-dessert)
     urunler   : [ "Ürün adı", "Açıklama (boş bırakılabilir)", fiyat ]

   Fiyatlar TL cinsinden sayı olarak yazılır (1150 → "1.150" görünür).
   ========================================================= */

const MENU = [
  {
    baslik: "Izgara Balıklar",
    altBaslik: "Porsiyon fiyatlarıdır",
    figur: "fig-fish",
    urunler: [
      ["Levrek", 500],
      ["Çipura", 500],
      ["Palamut",  500],
      ["Lüfer",  500],
    ],
  },
  {
    baslik: "Tava Balıklar",
    altBaslik: "Çıtır tava, porsiyon fiyatlarıdır",
    figur: "fig-fish",
    urunler: [
      ["Mezgit", 500],
      ["Barbun", 500],
      ["Sardalya", 500],
      ["Hamsi", 500],
      ["Balık Köftesi", "... balığı", 500],
      ["Balık Ekmek", "Sardalya", 500],
    ],
  },
  {
    baslik: "Soğuk Mezeler",
    altBaslik: "Her gün mutfağımızda hazırlanır",
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
    altBaslik: "Sıcak başlangıçlar",
    figur: "fig-shrimp",
    urunler: [
      ["Kalamar Tava", "Tarator sos ile servis edilir.", 300],
      ["Karides Güveç", "Pul biberli tereyağlı sos", 300],
      ["Midye Tava", "Tarator sos ile servis edilir", 300],
    ],
  },
  {
    baslik: "Salatalar",
    altBaslik: "Taze ve mevsiminde",
    figur: "fig-salad",
    urunler: [
      ["Mevsim Salata", "Kıvırcık marul, roka, domates, salatalık, biber", 300],
      ["İstanbul Salata", "Domates, soğan, özel sos", 300],
    ],
  },
  {
    baslik: "Tatlılar",
    altBaslik: "Tatlı bir kapanış",
    figur: "fig-dessert",
    urunler: [
      ["Kabak Tatlısı", "Tahin ve ceviz ile", 200],
      ["Fırın Helva", "Güveç", 190],
    ],
  },
  {
    baslik: "İçecekler",
    altBaslik: "Soğuk ve serinletici",
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
   Örnek: [[0, 3], [1]] → sol sütun: Izgara Balıklar + Ara Sıcaklar,
                          sağ sütun: Tava Balıklar */
const BASKI_SAYFALARI = {
  sayfa1: [[0, 3], [1]],
  sayfa2: [[2, 4], [5, 6]],
};
