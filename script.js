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
    'hero.lead': 'Specialist in art history, art education, <span class="nowrap">art psychology</span>, and art economics and management',
    'hero.cta1': 'Get in touch', 'hero.cta2': 'Read articles',
    'ph.portrait': 'Portrait placeholder', 'ph.image': 'Image placeholder',

    'about.title': 'About me',
    'about.p1': 'For me, art is where creativity, the human psyche and economics meet. As an art historian, my goal is to reveal both the artistic merit and the market value of a work in clear terms, and to help artists find their place in the art world.',
    'about.p2': 'Over the years I have studied contemporary Uzbek painting, the work of art galleries, the international art market and the online art market. Working with galleries, I have helped prepare exhibitions, written catalogue texts and produced scholarly descriptions of artworks.',
    'about.p3': 'Today I work in art management and art education.',
    'about.p4': 'I also take an active part in organising academic conferences and national scientific and practical seminars, preparing and publishing collections of papers based on their materials, conducting qualification assessments for teaching staff, and organising named scholarship competitions for students as well as national competitions for gifted young people. In these activities, I help coordinate the organisational work and build cooperation with educational institutions.',
    'about.eduTitle': 'Education',
    'about.edu1': 'Master’s degree — Art History. Kamoliddin Behzod National Institute of Fine Arts and Design',
    'about.edu2': 'Bachelor’s degree — Art History. Kamoliddin Behzod National Institute of Fine Arts and Design',
    'about.intTitle': 'Interests',
    'about.int1': 'Art marketing and art management',
    'about.int2': 'How the value of artworks is formed',
    'about.int3': 'Galleries, auctions and collecting',
    'about.int4': 'Art and investment',
    'about.int5': 'International art market trends',
    'about.int6': 'Art psychology and the impact of art on the human psyche',
    'about.int7': 'Psychology of creativity',
    'about.int8': 'Digital art and the role of artificial intelligence in art',
    'about.int9': 'Integration of art and technology',
    'about.int10': 'Innovative management in the cultural sector',
    'about.f1': 'Assessing the artistic, historical and economic value of artworks.',
    'about.f2': 'The relationship between art and society.',
    'about.f3': 'The economics of culture and the arts.',
    'about.f4': 'Conceptual development of exhibitions and curatorial practice.',

    'services.title': 'Services',
    'services.sub': 'Ways of working together for artists, educational institutions, collectors and organisations.',
    's1.title': 'Art history lectures',
    's1.text': 'Lectures and seminars for schools, universities, museums and companies. Eras, styles and masters — lively and easy to follow.',
    's2.title': 'Art appraisal and value explained',
    's2.text': 'What determines an artwork’s artistic, historical and market value? I analyse authorship, condition, provenance and market trends.',
    's4.title': 'Advice for collectors',
    's4.text': 'Personal guidance on starting a collection, choosing works, documenting them and growing your collection.',
    's5.title': 'Building an artist’s portfolio',
    's5.text': 'A professional portfolio for artists and creators: selecting works, writing descriptions and an artist biography, and preparing materials for galleries, competitions and grants.',
    's6.title': 'Bringing artists to the art market',
    's6.text': 'Building an artist’s creative brand, setting a pricing strategy and preparing to work with galleries.',
    's7.title': 'Applications for competitions and grants',
    's7.text': 'Carefully preparing the project concept, application text and presentation materials.',
    's8.title': 'Organising academic and creative events',
    's8.text': 'Organising and coordinating conferences, seminars, competitions and exhibitions.',
    's9.title': 'Preparing collections and catalogues for publication',
    's9.text': 'Gathering, editing and publishing materials.',
    's10.title': 'Curatorial services',
    's10.text': 'Developing exhibition concepts, selecting works and writing exhibition texts.',
    's11.title': 'Professional development for teachers',
    's11.text': 'Practical training in art history, art management, art marketing and art psychology.',
    's14.title': 'Art investment advice',
    's14.text': 'Choosing artworks as an investment, assessing risks and analysing international market trends.',
    's15.title': 'Art for corporate collections and interiors',
    's15.text': 'Selecting artworks that suit the brand for offices, hotels and restaurants.',

    'articles.title': 'Articles',
    'articles.sub': 'On art history and the art market — in plain language.',
    'soon': 'Coming soon',
    'cat.history': 'Art history', 'cat.market': 'Art market', 'cat.collect': 'Collecting',
    'a1.title': 'How to “read” a miniature',
    'a1.text': 'A big world on a small page: understanding Persian miniatures through composition, colour and symbols.',
    'a2.title': 'What sets the price of a painting?',
    'a2.text': 'The artist’s name, condition, provenance and demand — how an artwork’s value takes shape.',
    'a4.title': 'Before you buy your first artwork',
    'a4.text': 'Five simple questions for a new collector: what, where from, with which documents and for how much.',

    'projects.title': 'Projects & portfolio',
    'projects.sub': 'Academic papers, publications and conference papers.',
    'tab.all': 'All', 'tab.paper': 'Academic papers', 'tab.publication': 'Publications', 'tab.conference': 'Conferences',
    'tab.paperOne': 'Academic paper', 'tab.publicationOne': 'Publication', 'tab.conferenceOne': 'Conference paper',
    'read.zenodo': 'Read on Zenodo',
    'j.bp': '“Badiiy ta’lim va pedagogika” (Art Education and Pedagogy) journal, 2025, issue 4, pp. 80–85',
    'read.journal': 'Read in the journal',
    'j.ego': 'Collection of the “EGO XIX” research project. Lesson Press, 2020',
    'p5.title': 'Series of popular articles',
    'p5.text': 'Articles on art history for a broad readership.',

    'social.title': 'Daily stories about art',
    'social.sub': 'Discover art with me. Follow along on social media.',

    'contact.title': 'Contact',
    'contact.sub': 'Have a question about a lecture, training, project or collaboration? Leave a message — I will definitely reply.',
    'contact.email': 'Email', 'contact.phone': 'Phone', 'contact.city': 'City', 'contact.cityVal': 'Tashkent, Uzbekistan',
    'form.name': 'Your name', 'form.email': 'Your email', 'form.topic': 'Topic', 'form.message': 'Your message',
    'form.t1': 'Lecture or training', 'form.t2': 'Artwork appraisal', 'form.t3': 'Collecting and investment advice',
    'form.t4': 'Portfolio and entering the art market', 'form.t6': 'Event or publication project', 'form.t5': 'Other',
    'form.send': 'Send message',

    'footer.rights': 'All rights reserved.'
  };

  var meta = {
    uz: {
      title: document.title,
      desc: document.querySelector('meta[name="description"]').content,
      langBtn: 'EN', langLabel: 'Switch to English',
      themeDark: 'Qorong‘u rejim', themeLight: 'Yorug‘ rejim', menu: 'Menyu',
      errFields: 'Iltimos, barcha maydonlarni to‘ldiring.',
      errEmail: 'Elektron pochta manzili noto‘g‘ri ko‘rinadi.',
      ok: 'Rahmat! Pochta dasturingiz ochildi — xabarni yuborishni tasdiqlang.',
      mailSubject: 'Saytdan xabar'
    },
    en: {
      title: 'Guzal Bahromova — Art Historian',
      desc: 'Guzal Miraliyevna Bahromova — specialist in art history, art education, art psychology, and art economics and management. Lectures, appraisal, art management and portfolio services.',
      langBtn: 'UZ', langLabel: 'O‘zbek tiliga o‘tish',
      themeDark: 'Dark mode', themeLight: 'Light mode', menu: 'Menu',
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

  /* ---------------- Yil va boshlang‘ich til ---------------- */
  document.getElementById('year').textContent = new Date().getFullYear();
  if (lang === 'en') applyLang('en'); else updateThemeLabel();
})();
