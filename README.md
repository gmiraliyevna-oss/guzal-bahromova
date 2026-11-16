# Go‘zal Bahromova — shaxsiy sayt

Fayllar: `index.html` (mazmun), `styles.css` (dizayn), `script.js` (til, qorong‘u rejim, menyu, forma).

## Saytni ochish
`index.html` faylini brauzerda oching yoki papkada lokal server ishga tushiring:

```
python -m http.server 5500
```
so‘ng http://localhost:5500 manzilini oching.

## O‘zingizga moslash
1. **Rasmlar.** `images/` papkasini yarating va rasmlarni qo‘ying. `index.html` ichida
   `<div class="ph ...">…</div>` bloklarini `<img>` bilan almashtiring, masalan:
   `<img src="images/portrait.jpg" alt="Go‘zal Bahromova portreti">`
   (portret 4:5, maqola rasmlari 4:3, loyiha rasmlari 16:10 nisbatda yaxshi ko‘rinadi).
2. **Kontaktlar.** `index.html` dagi `email@example.com` va telefon raqamini, `script.js` boshidagi
   `CONTACT_EMAIL` qiymatini o‘zgartiring.
3. **Ijtimoiy tarmoqlar.** “Kundalik san’at hikoyalari” bo‘limidagi havolalarga sahifalaringiz manzilini yozing.
4. **Ta’lim yillari** (`20XX`) va loyihalar matnlarini haqiqiy ma’lumotlar bilan almashtiring.
5. **Inglizcha matnlar** `script.js` dagi `en` lug‘atida turadi — o‘zbekcha matnni o‘zgartirsangiz, u yerni ham yangilang.
6. **SEO.** Sayt manzili tayyor bo‘lgach, `<head>` dagi `https://example.com/` ni haqiqiy manzilga almashtiring va
   `images/og-cover.jpg` (1200×630) rasmini qo‘shing.

## Aloqa formasi
Forma hozir tashrif buyuruvchining pochta dasturini tayyor xat bilan ochadi (server kerak emas).
Xabarlar to‘g‘ridan-to‘g‘ri pochtangizga tushishi uchun Formspree yoki shunga o‘xshash xizmatni ulash mumkin.
