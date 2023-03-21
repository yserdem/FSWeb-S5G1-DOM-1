const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
let headerNav = document.querySelectorAll("nav a");
Object.values(siteContent.nav).forEach((element, index) => {
  headerNav[index].textContent = element;
  headerNav[index].setAttribute("class", "italic")
})


let myImages = document.querySelectorAll("img");
Object.values(siteContent.images).forEach((element, index) => {
  myImages[index].src = element;
})

let myCTA = document.getElementsByClassName("cta-text")[0].children;
Object.values(siteContent.cta).forEach((element, index) => {
  myCTA[index].textContent = element;
})

let textContainerH = document.querySelectorAll(".text-content h4");
let textContainerP = document.querySelectorAll(".text-content p")
Object.values(siteContent["ana-içerik"]).forEach((element, index) => {
  if (Object.keys(siteContent["ana-içerik"])[index].slice(-3) === "-h4") {
    textContainerH[index / 2].textContent = element;
  } else {
    textContainerP[Math.floor(index / 2)].textContent = element;
  }
})

let textContact = document.querySelectorAll(".contact")[0].children;
Object.values(siteContent["iletisim"]).forEach((element, index) => {
  textContact[index].textContent = element
})

let footerLink = document.querySelector("footer a");
footerLink.textContent = Object.values(siteContent["footer"])
footerLink.setAttribute("class", "bold")
