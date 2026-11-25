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
    'about.int11': 'Art journalism',
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
    'projects.sub': 'Academic papers, conference papers, publications and interviews.',
    'tab.all': 'All', 'tab.paper': 'Academic papers', 'tab.publication': 'Publications', 'tab.conference': 'Conferences',
    'tab.paperOne': 'Academic paper', 'tab.publicationOne': 'Publication', 'tab.conferenceOne': 'Conference paper',
    'read.zenodo': 'Read on Zenodo',
    'cap.steen': 'Jan Steen. The Drawing Lesson, c. 1665',
    'tab.interview': 'Interviews', 'tab.interviewOne': 'Interview',
    'iv1.title': '“Sanʼat palitrasi”, episode 1. Interview with Umidjon Alimov',
    'iv2.title': '“Sanʼat palitrasi”, episode 2. Interview with Şoxrux Qosimov',
    'iv.channel': 'YouTube channel of the Academy of Arts of Uzbekistan',
    'watch.youtube': 'Watch on YouTube',
    'j.bp': '“Badiiy taʼlim va pedagogika” (Art Education and Pedagogy) journal, 2025, issue 4, pp. 80–85',
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

  /* ---------------- Rus tili lug‘ati ---------------- */
  var ru = {
    'skip': 'Перейти к основному содержанию',
    'nav.about': 'Обо мне', 'nav.services': 'Услуги', 'nav.articles': 'Статьи', 'nav.projects': 'Проекты', 'nav.contact': 'Контакты',

    'hero.eyebrow': 'Искусствовед',
    'hero.lead': 'Специалист в области искусствознания, художественного образования, <span class="nowrap">арт-психологии</span>, экономики и менеджмента искусства',
    'hero.cta1': 'Связаться', 'hero.cta2': 'Читать статьи',
    'ph.portrait': 'Место для портрета', 'ph.image': 'Место для изображения',

    'about.title': 'Обо мне',
    'about.p1': 'Для меня искусство — это пространство, где встречаются творчество, человеческая психика и экономика. Как искусствовед я стремлюсь понятно раскрывать и художественную ценность произведения, и его рыночную стоимость, а также помогать художникам найти своё место в мире искусства.',
    'about.p2': 'В своей работе я изучала современную живопись Узбекистана, деятельность художественных галерей, международный арт-рынок и онлайн-арт-рынок. Сотрудничая с галереями, участвовала в подготовке выставок, написании текстов для каталогов и научном описании произведений искусства.',
    'about.p3': 'Сегодня я работаю в сфере арт-менеджмента и художественного образования.',
    'about.p4': 'Кроме того, я активно участвую в организации научных конференций и республиканских научно-практических семинаров, подготовке и издании научных сборников по их материалам, проведении квалификационных испытаний педагогических кадров, организации конкурсов именных стипендий для студентов и республиканских конкурсов среди одарённой молодёжи. При проведении этих мероприятий я вношу вклад в координацию организационной работы и сотрудничество с образовательными учреждениями.',
    'about.eduTitle': 'Образование',
    'about.edu1': 'Магистратура — Искусствоведение. Национальный институт художеств и дизайна имени Камолиддина Бехзода',
    'about.edu2': 'Бакалавриат — Искусствоведение. Национальный институт художеств и дизайна имени Камолиддина Бехзода',
    'about.intTitle': 'Сфера интересов',
    'about.int1': 'Арт-маркетинг и менеджмент искусства',
    'about.int2': 'Формирование стоимости произведений искусства',
    'about.int3': 'Галереи, аукционы и коллекционирование',
    'about.int4': 'Искусство и инвестиции',
    'about.int5': 'Тенденции международного арт-рынка',
    'about.int6': 'Арт-психология и влияние искусства на психику человека',
    'about.int7': 'Психология творчества',
    'about.int8': 'Цифровое искусство и роль искусственного интеллекта в искусстве',
    'about.int9': 'Интеграция искусства и технологий',
    'about.int10': 'Инновационное управление в сфере культуры',
    'about.int11': 'Арт-журналистика',
    'about.f1': 'Оценка художественной, исторической и экономической ценности произведений искусства.',
    'about.f2': 'Взаимосвязь искусства и общества.',
    'about.f3': 'Экономика культуры и искусства.',
    'about.f4': 'Концептуальная разработка выставок и кураторство.',

    'services.title': 'Направления и услуги',
    'services.sub': 'Формы сотрудничества для художников, образовательных учреждений, коллекционеров и организаций.',
    's1.title': 'Лекции по истории искусства',
    's1.text': 'Лекции и семинары для школ, университетов, музеев и компаний. Эпохи, стили и мастера — живо и понятно.',
    's2.title': 'Оценка произведений и объяснение их ценности',
    's2.text': 'Что определяет художественную, историческую и рыночную ценность произведения? Анализирую авторство, состояние, провенанс и тенденции рынка.',
    's4.title': 'Консультации для коллекционеров',
    's4.text': 'Персональное сопровождение: как начать коллекцию, выбирать произведения, документировать их и развивать собрание.',
    's5.title': 'Формирование портфолио художника',
    's5.text': 'Профессиональное портфолио для художников и авторов: отбор работ, научное описание и творческая биография, подготовка материалов для галерей, конкурсов и грантов.',
    's6.title': 'Выход художника на арт-рынок',
    's6.text': 'Формирование творческого бренда художника, ценовая политика и подготовка к работе с галереями.',
    's7.title': 'Документы для конкурсов и грантов',
    's7.text': 'Тщательная подготовка концепции проекта, текста заявки и презентационных материалов.',
    's8.title': 'Организация научных и творческих мероприятий',
    's8.text': 'Организация и координация конференций, семинаров, конкурсов и выставок.',
    's9.title': 'Подготовка научных сборников и каталогов к изданию',
    's9.text': 'Сбор, редактирование и издание материалов.',
    's10.title': 'Кураторство',
    's10.text': 'Разработка концепции выставки, отбор произведений и написание экспозиционных текстов.',
    's11.title': 'Курсы повышения квалификации для педагогов',
    's11.text': 'Практические тренинги по истории искусства, арт-менеджменту, арт-маркетингу и психологии искусства.',
    's14.title': 'Консультации по инвестициям в искусство',
    's14.text': 'Выбор произведений как объекта инвестиций, оценка рисков и анализ тенденций международного рынка.',
    's15.title': 'Подбор искусства для корпоративных коллекций и интерьеров',
    's15.text': 'Подбор произведений искусства, соответствующих бренду, для офисов, отелей и ресторанов.',

    'articles.title': 'Статьи',
    'articles.sub': 'Об истории искусства и арт-рынке — простым языком.',
    'soon': 'Скоро',
    'cat.history': 'История искусства', 'cat.market': 'Арт-рынок', 'cat.collect': 'Коллекционирование',
    'a1.title': 'Как «читать» миниатюру?',
    'a1.text': 'Большой мир на маленькой странице: как понять восточную миниатюру через композицию, цвет и символы.',
    'a2.title': 'Что определяет цену картины?',
    'a2.text': 'Имя автора, состояние, провенанс и спрос — как складывается стоимость произведения искусства.',
    'a4.title': 'Прежде чем купить первое произведение',
    'a4.text': 'Пять простых вопросов для начинающего коллекционера: что, где, с какими документами и сколько это стоит.',

    'projects.title': 'Проекты и портфолио',
    'projects.sub': 'Научные статьи, материалы конференций, публикации и интервью.',
    'tab.all': 'Все', 'tab.paper': 'Научные статьи', 'tab.publication': 'Публикации', 'tab.conference': 'Конференции',
    'tab.paperOne': 'Научная статья', 'tab.publicationOne': 'Публикация', 'tab.conferenceOne': 'Научная конференция',
    'read.zenodo': 'Читать на Zenodo',
    'cap.steen': 'Ян Стен. Урок рисования, около 1665',
    'tab.interview': 'Интервью', 'tab.interviewOne': 'Интервью',
    'iv1.title': '«Sanʼat palitrasi», выпуск 1. Интервью с Умиджоном Алимовым',
    'iv2.title': '«Sanʼat palitrasi», выпуск 2. Интервью с Шохрухом Косимовым',
    'iv.channel': 'YouTube-канал Академии художеств Узбекистана',
    'watch.youtube': 'Смотреть на YouTube',
    'j.bp': 'Научный журнал «Badiiy taʼlim va pedagogika» («Художественное образование и педагогика»), 2025, № 4, с. 80–85',
    'read.journal': 'Читать в журнале',
    'j.ego': 'Сборник научного проекта «EGO XIX». Издательство Lesson Press, 2020',
    'p5.title': 'Серия научно-популярных статей',
    'p5.text': 'Статьи об истории искусства для широкого круга читателей.',

    'social.title': 'Истории об искусстве каждый день',
    'social.sub': 'Открывайте искусство вместе со мной. Следите за мной в социальных сетях.',

    'contact.title': 'Контакты',
    'contact.sub': 'Есть вопрос о лекции, тренинге, проекте или сотрудничестве? Оставьте сообщение — я обязательно отвечу.',
    'contact.email': 'Эл. почта', 'contact.phone': 'Телефон', 'contact.city': 'Город', 'contact.cityVal': 'Ташкент, Узбекистан',
    'form.name': 'Ваше имя', 'form.email': 'Ваша эл. почта', 'form.topic': 'Тема', 'form.message': 'Ваше сообщение',
    'form.t1': 'Лекция или тренинг', 'form.t2': 'Оценка произведения', 'form.t3': 'Консультация по коллекции и инвестициям',
    'form.t4': 'Портфолио и выход на арт-рынок', 'form.t6': 'Мероприятие или издательский проект', 'form.t5': 'Другое',
    'form.send': 'Отправить сообщение',

    'footer.rights': 'Все права защищены.'
  };

  var meta = {
    uz: {
      title: document.title,
      desc: document.querySelector('meta[name="description"]').content,
      themeDark: 'Qoronğu rejim', themeLight: 'Yoruğ rejim', menu: 'Menyu', langGroup: 'Sayt tili',
      errFields: 'Iltimos, barça maydonlarni töldiring.',
      errEmail: 'Elektron poçta manzili notöğri körinadi.',
      ok: 'Rahmat! Poçta dasturingiz oçildi — xabarni yuborişni tasdiqlang.',
      mailSubject: 'Saytdan xabar'
    },
    en: {
      title: 'Guzal Bahromova — Art Historian',
      desc: 'Guzal Miraliyevna Bahromova — specialist in art history, art education, art psychology, and art economics and management. Lectures, appraisal, art management and portfolio services.',
      themeDark: 'Dark mode', themeLight: 'Light mode', menu: 'Menu', langGroup: 'Site language',
      errFields: 'Please fill in all fields.',
      errEmail: 'The email address looks incorrect.',
      ok: 'Thank you! Your mail app has opened — please confirm sending.',
      mailSubject: 'Message from website'
    },
    ru: {
      title: 'Гузаль Бахромова — искусствовед',
      desc: 'Гузаль Миралиевна Бахромова — специалист в области искусствознания, художественного образования, арт-психологии, экономики и менеджмента искусства. Лекции, оценка произведений, арт-менеджмент и портфолио.',
      themeDark: 'Тёмная тема', themeLight: 'Светлая тема', menu: 'Меню', langGroup: 'Язык сайта',
      errFields: 'Пожалуйста, заполните все поля.',
      errEmail: 'Адрес эл. почты указан неверно.',
      ok: 'Спасибо! Открылась ваша почтовая программа — подтвердите отправку.',
      mailSubject: 'Сообщение с сайта'
    }
  };
  var dicts = { en: en, ru: ru };

  /* ---------------- Til almashtirish ---------------- */
  var nodes = document.querySelectorAll('[data-i18n]');
  var uz = {};
  nodes.forEach(function (el) { uz[el.dataset.i18n] = el.innerHTML; });
  var saved = load('lang');
  var lang = (saved === 'en' || saved === 'ru') ? saved : 'uz';

  // Til tugmalari: UZ / RU / EN
  var langSwitch = document.getElementById('langSwitch');
  var langBtns = langSwitch.querySelectorAll('[data-lang]');
  function applyLang(l) {
    lang = l;
    var dict = dicts[l] || uz;
    nodes.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v == null) v = uz[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    root.lang = l;
    document.title = meta[l].title;
    document.querySelector('meta[name="description"]').content = meta[l].desc;
    langBtns.forEach(function (b) {
      var on = b.dataset.lang === l;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    langSwitch.setAttribute('aria-label', meta[l].langGroup);
    menuBtn.setAttribute('aria-label', meta[l].menu);
    updateThemeLabel();
    store('lang', l);
  }
  langBtns.forEach(function (b) {
    b.addEventListener('click', function () { if (b.dataset.lang !== lang) applyLang(b.dataset.lang); });
  });

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
  if (lang !== 'uz') applyLang(lang); else updateThemeLabel();
})();
