/* Go‘zal Bahromova — sayt skriptlari: til, mavzu, menyu, filtr, forma */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  // Aloqa formasidan xatlar shu manzilga yuboriladi — o‘z pochtangizni yozing
  var CONTACT_EMAIL = 'gmiraliyevna@gmail.com';

  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  /* ---------------- Ingliz tili lug‘ati ---------------- */
  var en = {
    'skip': 'Skip to main content',
    'nav.about': 'About', 'nav.services': 'Services', 'nav.articles': 'Articles', 'nav.projects': 'Projects', 'nav.contact': 'Contact',

    'hero.eyebrow': 'Art Historian',
    'hero.lead': 'Art historian making art history and art value understandable',
    'hero.intro': 'Behind every artwork there is an era, a master and a story. I tell these stories in plain, warm language without heavy jargon — so that art lives not only on museum walls, but in your life too.',
    'hero.cta1': 'Get in touch', 'hero.cta2': 'Read articles',
    'ph.portrait': 'Portrait placeholder', 'ph.image': 'Image placeholder',

    'about.title': 'About me',
    'about.p1': 'For me, art is not just a profession — it is a conversation between people, eras and ideas. As an art historian, my main goal is to invite everyone into that conversation.',
    'about.p2': 'Over the years I have studied Persian miniature painting, the applied arts of Uzbekistan and contemporary fine art. Working with museums and galleries, I have helped prepare exhibitions, written catalogue texts and produced scholarly descriptions of artworks.',
    'about.p3': 'Today I focus on making art history accessible to a wide audience and openly explaining how an artwork’s artistic and market value is formed.',
    'about.eduTitle': 'Education',
    'about.edu1': 'Master’s degree — Art History',
    'about.edu2': 'Bachelor’s degree — History and Theory of Art',
    'about.edu3': 'Professional training — Art Market and Expertise',
    'about.intTitle': 'Interests',
    'about.int1': 'Persian miniature', 'about.int2': 'Timurid art', 'about.int3': 'Applied arts',
    'about.int4': 'Contemporary Uzbek painting', 'about.int5': 'Art market', 'about.int6': 'Museum education',

    'services.title': 'Services',
    'services.sub': 'Ways to work together on understanding, appreciating and properly valuing art.',
    's1.title': 'Art history lectures',
    's1.text': 'Lectures and seminars for schools, universities, museums and companies. Eras, styles and masters — lively and easy to follow.',
    's2.title': 'Art appraisal and value explained',
    's2.text': 'What determines an artwork’s artistic, historical and market value? I analyse authorship, condition, provenance and market trends.',
    's3.title': 'Consultations',
    's3.text': 'Advice for museums, galleries, artists and organisations on exhibition concepts, texts and curatorial work.',
    's4.title': 'Advice for collectors',
    's4.text': 'Personal guidance on starting a collection, choosing works, documenting them and growing your collection.',

    'articles.title': 'Articles',
    'articles.sub': 'On art history and the art market — in plain language.',
    'articles.all': 'All articles',
    'cat.history': 'Art history', 'cat.market': 'Art market', 'cat.collect': 'Collecting', 'cat.museum': 'Museums',
    'min4': '4 min read', 'min5': '5 min read', 'min6': '6 min read', 'min7': '7 min read', 'min8': '8 min read',
    'a1.title': 'How to “read” a miniature',
    'a1.text': 'A big world on a small page: understanding Persian miniatures through composition, colour and symbols.',
    'a2.title': 'What sets the price of a painting?',
    'a2.text': 'The artist’s name, condition, provenance and demand — how an artwork’s value takes shape.',
    'a3.title': 'Lapis lazuli: a colour dearer than the sky',
    'a3.text': 'Why the blue pigment from Badakhshan stone was worth more than gold, and how miniaturists used it.',
    'a4.title': 'Before you buy your first artwork',
    'a4.text': 'Five simple questions for a new collector: what, where from, with which documents and for how much.',
    'a5.title': 'Kamoliddin Behzod and his school',
    'a5.text': 'What made the Herat master’s style unique, and how he influenced generations of painters after him.',
    'a6.title': 'How to visit a museum',
    'a6.text': 'Without tiring, without rushing, and feeling more — practical tips for your next museum visit.',

    'projects.title': 'Projects & portfolio',
    'projects.sub': 'Exhibitions, publications and talks.',
    'tab.all': 'All', 'tab.exhibition': 'Exhibitions', 'tab.publication': 'Publications', 'tab.talk': 'Talks',
    'tab.exhibitionOne': 'Exhibition', 'tab.publicationOne': 'Publication', 'tab.talkOne': 'Talk',
    'p1.title': '“Lapis and Gold”: the art of the miniature',
    'p1.text': 'Curatorial project and catalogue texts. Tashkent.',
    'p2.title': 'Paper: the art of the book in the Timurid era',
    'p2.text': 'Art history journal, academic collection.',
    'p3.title': 'Lecture: “How is the value of art born?”',
    'p3.text': 'Public lecture at an arts centre, for a general audience.',
    'p4.title': 'Contemporary Uzbek graphic art',
    'p4.text': 'Exhibition concept and wall texts.',
    'p5.title': 'Series of popular articles',
    'p5.text': 'Articles on art history for a broad readership.',
    'p6.title': 'Conference paper',
    'p6.text': 'International conference, Central Asian art panel.',

    'social.title': 'Daily stories about art',
    'social.sub': 'One artwork, one story, every day. Follow along on social media.',

    'contact.title': 'Contact',
    'contact.sub': 'Have a question about a lecture, consultation or collaboration? Leave a message — I will definitely reply.',
    'contact.email': 'Email', 'contact.phone': 'Phone', 'contact.city': 'City', 'contact.cityVal': 'Tashkent, Uzbekistan',
    'form.name': 'Your name', 'form.email': 'Your email', 'form.topic': 'Topic', 'form.message': 'Your message',
    'form.t1': 'Lecture or seminar', 'form.t2': 'Artwork appraisal', 'form.t3': 'Consultation',
    'form.t4': 'Collection advice', 'form.t5': 'Other',
    'form.send': 'Send message',

    'footer.rights': 'All rights reserved.'
  };

  var meta = {
    uz: {
      title: document.title,
      desc: document.querySelector('meta[name="description"]').content,
      langBtn: 'EN', langLabel: 'Switch to English',
      themeDark: 'Qorong‘u rejim', themeLight: 'Yorug‘ rejim', menu: 'Menyu',
      soundOn: 'Ovozni yoqish', soundOff: 'Ovozni o‘chirish',
      errFields: 'Iltimos, barcha maydonlarni to‘ldiring.',
      errEmail: 'Elektron pochta manzili noto‘g‘ri ko‘rinadi.',
      ok: 'Rahmat! Pochta dasturingiz ochildi — xabarni yuborishni tasdiqlang.',
      mailSubject: 'Saytdan xabar'
    },
    en: {
      title: 'Guzal Bahromova — Art Historian',
      desc: 'Guzal Miraliyevna Bahromova — art historian making art history and art value understandable. Lectures, appraisal, consultations and articles.',
      langBtn: 'UZ', langLabel: 'O‘zbek tiliga o‘tish',
      themeDark: 'Dark mode', themeLight: 'Light mode', menu: 'Menu',
      soundOn: 'Turn sound on', soundOff: 'Turn sound off',
      errFields: 'Please fill in all fields.',
      errEmail: 'The email address looks incorrect.',
      ok: 'Thank you! Your mail app has opened — please confirm sending.',
      mailSubject: 'Message from website'
    }
  };

  /* ---------------- Til almashtirish ---------------- */
  var nodes = document.querySelectorAll('[data-i18n]');
  var uz = {};
  nodes.forEach(function (el) { uz[el.dataset.i18n] = el.innerHTML; });
  var lang = load('lang') === 'en' ? 'en' : 'uz';

  var langBtn = document.getElementById('langToggle');
  function applyLang(l) {
    lang = l;
    var dict = l === 'en' ? en : uz;
    nodes.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    root.lang = l;
    document.title = meta[l].title;
    document.querySelector('meta[name="description"]').content = meta[l].desc;
    langBtn.textContent = meta[l].langBtn;
    langBtn.setAttribute('aria-label', meta[l].langLabel);
    menuBtn.setAttribute('aria-label', meta[l].menu);
    updateThemeLabel();
    updateSoundBtn();
    store('lang', l);
  }
  langBtn.addEventListener('click', function () { applyLang(lang === 'uz' ? 'en' : 'uz'); });

  /* ---------------- Yorug‘ / qorong‘u rejim ---------------- */
  var themeBtn = document.getElementById('themeToggle');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  function currentTheme() { return root.dataset.theme || (mq.matches ? 'dark' : 'light'); }
  function updateThemeLabel() {
    themeBtn.setAttribute('aria-label', currentTheme() === 'dark' ? meta[lang].themeLight : meta[lang].themeDark);
  }
  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    store('theme', next);
    updateThemeLabel();
  });

  /* ---------------- Mobil menyu ---------------- */
  var menuBtn = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  function closeMenu() { nav.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------------- Header soyasi va faol menyu bandi ---------------- */
  var header = document.querySelector('.site-header');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navLinks = nav.querySelectorAll('a');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });

    /* Paydo bo‘lish animatsiyasi */
    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); rev.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { rev.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------- Loyihalar filtri ---------------- */
  var tabs = document.querySelectorAll('.tab');
  var projects = document.querySelectorAll('.project');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var f = tab.dataset.filter;
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
      });
      projects.forEach(function (p) {
        var show = f === 'all' || p.dataset.type === f;
        p.classList.toggle('is-hidden', !show);
        if (show) p.classList.add('is-visible');
      });
    });
  });

  /* ---------------- Aloqa formasi ---------------- */
  // Server kerak emas: forma pochta dasturini tayyor xat bilan ochadi.
  // Keyinchalik Formspree, Getform kabi xizmatni ulash mumkin (form action="...").
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var name = f['name'].value.trim();
    var email = f['email'].value.trim();
    var msg = f['message'].value.trim();
    var topic = f['topic'].options[f['topic'].selectedIndex].text;

    form.querySelectorAll('.field').forEach(function (f) { f.classList.remove('has-error'); });
    status.classList.remove('is-error');

    var missing = [['name', name], ['email', email], ['message', msg]].filter(function (x) { return !x[1]; });
    if (missing.length) {
      missing.forEach(function (x) { f[x[0]].closest('.field').classList.add('has-error'); });
      status.textContent = meta[lang].errFields; status.classList.add('is-error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      f['email'].closest('.field').classList.add('has-error');
      status.textContent = meta[lang].errEmail; status.classList.add('is-error');
      return;
    }

    var subject = meta[lang].mailSubject + ': ' + topic;
    var body = msg + '\n\n— ' + name + ' (' + email + ')';
    window.location.href = 'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    status.textContent = meta[lang].ok;
    form.reset();
  });

  /* ---------------- Jonli portret ---------------- */
  // Harakatni kamaytirishni tanlagan foydalanuvchilarga video o‘rniga tinch rasm ko‘rsatiladi
  var pv = document.getElementById('portraitVideo');
  if (pv && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    pv.removeAttribute('autoplay'); pv.pause();
  }

  // Ovoz tugmasi: yoqilganda video boshidan ovoz bilan qo‘yiladi
  var soundBtn = document.getElementById('soundToggle');
  if (pv && soundBtn) {
    soundBtn.addEventListener('click', function () {
      var turnOn = pv.muted;
      pv.muted = !turnOn;
      if (turnOn) { pv.currentTime = 0; pv.play().catch(function () {}); }
      updateSoundBtn();
    });
    // Ovoz boshqa yo‘l bilan o‘zgarsa ham tugma holati to‘g‘ri qolsin
    pv.addEventListener('volumechange', updateSoundBtn);
  }
  function updateSoundBtn() {
    if (!pv || !soundBtn) return;
    var on = !pv.muted;
    var text = on ? meta[lang].soundOff : meta[lang].soundOn;
    soundBtn.setAttribute('aria-pressed', String(on));
    soundBtn.setAttribute('aria-label', text);
    document.getElementById('soundLabel').textContent = text;
  }

  /* ---------------- Yil va boshlang‘ich til ---------------- */
  document.getElementById('year').textContent = new Date().getFullYear();
  if (lang === 'en') applyLang('en'); else updateThemeLabel();
})();
