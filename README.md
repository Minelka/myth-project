# Myth Project

**Myth Project**, kullanıcıların mitolojik hikayeler ve karakterler hakkında bilgi edinebildiği, hikaye favorileme ve keşfetme özelliklerine sahip bir web uygulamasıdır.

## Özellikler

- **Hikaye Listeleme**: Mitolojik hikayelerin listelenmesi.
- **Favorilere Ekleme**: Kullanıcıların beğendikleri hikayeleri favorilere ekleyebilmesi.
- **Detaylı Hikaye Görüntüleme**: Hikayelerin detay sayfalarında ek bilgiler.
- **Kategori Bazlı Filtreleme**: Hikayeleri mitoloji türüne göre filtreleme.
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu arayüz.

## Teknolojiler

- **React**
- **Redux**
- **Axios**
- **React Router**
- **TailwindCSS**

## Kurulum

### Gereksinimler

- Node.js (v16 ve üzeri)
- npm veya yarn

### Adımlar

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/Minelka/myth-project.git
   ```

2. Proje dizinine gidin:

   ```bash
   cd myth-project
   ```

3. Bağımlılıkları yükleyin:

   ```bash
   npm install
   # veya
   yarn install
   ```

4. Uygulamayı başlatın:

   ```bash
   npm start
   # veya
   yarn start
   ```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

## API Endpoints

- **GET** `/api/stories` – Tüm mitolojik hikayeleri listeler.
- **GET** `/api/stories/{id}` – Belirli bir hikayenin detaylarını getirir.
- **POST** `/api/favorites` – Hikayeyi favorilere ekler.
- **DELETE** `/api/favorites/{id}` – Favorilerden kaldırır.

## Proje Yapısı

```
myth-project
├─ src
│  ├─ components    # Yeniden kullanılabilir bileşenler
│  ├─ pages         # Sayfa bileşenleri
│  ├─ services      # API istekleri
│  ├─ store        # Redux Store
│  ├─ assets       # Görseller ve stiller
│  └─ App.jsx      # Ana bileşen
└─ package.json    # Bağımlılıklar
```

## Lisans

Bu proje açık kaynak değildir ve yalnızca izinli kullanıcılar tarafından kullanılabilir.

