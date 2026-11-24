# Mavi Kıyı Balıkçısı — QR Menü

Balık restoranı için telefonda açılan QR menü, baskı menüsü (A4) ve QR'lı masa kartı (A6).

## Klasör yapısı

```
qr-menu/
├── index.html          → Menü sayfası (QR ile açılan ve baskıda kullanılan)
├── masa-karti.html     → QR kodlu masa kartı (A4'e 4 adet A6)
├── css/
│   ├── menu.css        → Menünün renkleri, yazıları, baskı düzeni
│   └── masa-karti.css  → Masa kartının stili
├── js/
│   ├── menu-data.js    → ★ YEMEKLER VE FİYATLAR BURADA
│   ├── menu.js         → Menüyü sayfaya yerleştiren kod
│   └── masa-karti.js   → QR kodun açacağı adres burada
├── img/
│   ├── begonvil.jpg    → Begonvil fotoğrafı (Wikimedia Commons, CC0)
│   └── menu-qr.svg     → Hazır QR kod (internet yoksa kullanılır)
└── pdf/
    ├── menu-A4.pdf         → Matbaaya verilecek menü (2 sayfa)
    └── masa-karti-A4.pdf   → Masa kartları (A4'te 4 kart, kesim çizgili)
```

## VS Code'da açma ve önizleme

1. VS Code → **File › Open Folder** → `qr-menu` klasörünü seçin.
2. Önizleme için **Live Server** eklentisini kurun (Extensions'ta "Live Server" diye aratın).
3. `index.html` dosyasına sağ tıklayın → **Open with Live Server**. Kaydettiğiniz her değişiklik tarayıcıda anında görünür.

Eklenti kurmadan da `index.html` dosyasına çift tıklayıp tarayıcıda açabilirsiniz.

## Menüyü değiştirme

Sadece `js/menu-data.js` dosyasını düzenlemeniz yeterli:

```js
["Hamsi", "Karadeniz hamsisi, mısır unu ile", 420],
//  ad        açıklama (boş bırakılabilir: "")   fiyat (TL)
```

- Yeni ürün: ilgili kategoriye yeni bir satır ekleyin.
- Yeni kategori: `MENU` listesine `{ baslik, altBaslik, figur, urunler }` bloğu ekleyin.
- Kullanılabilir çizimler: `fig-fish`, `fig-olive`, `fig-shrimp`, `fig-lemon`, `fig-shell`, `fig-raki`.
- Baskıda hangi kategorinin hangi sayfada duracağı: aynı dosyanın sonundaki `BASKI_SAYFALARI`.

Restoran adı, çalışma saatleri, telefon ve Wi-Fi bilgisi `index.html` içindeki üst bölümdedir (`<header class="mast">`).
"Örnek menü" notunu kaldırmak için `index.html` içindeki `<p class="note">` satırlarını silin.

## Renkleri değiştirme

`css/menu.css` dosyasının başındaki değişkenler:

| Değişken | Renk | Kullanıldığı yer |
|---|---|---|
| `--navy` | Parlament mavisi | Üst bölüm, başlıklar, fiyatlar, çerçeve |
| `--bloom` | Begonvil | Başlık altındaki küçük süs, not yazısı |
| `--muted` | Gri-mavi | Açıklamalar |

## PDF alma (baskı)

1. `index.html`'i Chrome veya Edge'de açın.
2. **Ctrl + P** → Hedef: **PDF olarak kaydet**.
3. Kâğıt: **A4**, Kenar boşlukları: **Yok**, **Arka plan grafikleri: açık**.

Masa kartı için aynı adımları `masa-karti.html` ile yapın. A4 kâğıda 4 kart çıkar, silik kesik çizgilerden kesin.

## QR kod

QR kod GitHub Pages'teki menüyü açar: https://aleynaozbalik.github.io/qr-menu/

Menüyü güncellemek için dosyayı değiştirip VS Code'da **Source Control** bölümünden **Commit** ve ardından **Sync Changes** deyin. Site 1–2 dakika içinde kendiliğinden güncellenir; masa kartlarını yeniden basmaya gerek yoktur.

Menüyü başka bir adrese taşırsanız:

1. `js/masa-karti.js` dosyasındaki `MENU_ADRESI` satırını yeni adresle değiştirin.
2. `masa-karti.html`'i tarayıcıda açın. QR kod yeni adrese göre kendiliğinden yeniden üretilir.
3. Kartları yeniden PDF olarak alın.

> Not: QR üretimi için internet bağlantısı gerekir. Bağlantı yoksa kart, `img/menu-qr.svg` içindeki hazır kodu (mevcut adres) kullanır.

## Yayınlama

Klasörün tamamını bir web sunucusuna yüklemeniz yeterli; derleme adımı yoktur. En kolay ücretsiz yollar:

- **Netlify Drop**: app.netlify.com/drop adresine klasörü sürükleyip bırakın.
- **GitHub Pages**: Klasörü bir GitHub deposuna yükleyip Settings › Pages'ten açın.

Yayınladıktan sonra QR kodu yeni adrese göre güncellemeyi unutmayın.
