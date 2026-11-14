/**
 * UDAANMART - INTERNATIONALIZATION (i18n) & GLOBAL DELIVERY ENGINE
 * Automatically switches language and currency based on user delivery country / PIN code.
 * Supports: Hindi (hi), English (en), Spanish (es), French (fr), German (de), Japanese (ja), Arabic (ar).
 */

const UDAAN_TRANSLATIONS = {
  hi: {
    name: 'हिन्दी',
    flag: '🇮🇳',
    deliver_to: 'डिलीवरी स्थान',
    search_placeholder: 'UdaanMart पर प्रोडक्ट, ब्रांड या डील खोजें...',
    all_departments: 'सभी विभाग',
    all_products: 'सभी उत्पाद',
    men: '👨 पुरुष (Men)',
    women: '👩 महिलाएं (Women)',
    karigar: '🏡 ग्रामीण कारीगर (Karigar)',
    clothing: '👗 कपड़े और फैशन',
    kitchen: '🍳 घर और रसोई',
    beauty: '💄 सौंदर्य और देखभाल',
    sports: '🏋️ खेलकूद और फिटनेस',
    electronics: '💻 इलेक्ट्रॉनिक्स',
    audio: '🎧 ऑडियो और साउंड',
    smarthome: '🏠 स्मार्ट होम',
    gaming: '🎮 गेमिंग',
    luxury: '⌚ लक्जरी घड़ियाँ',
    wishlist: '❤️ विशलिस्ट',
    seller_hub: '🚀 सेलर पोर्टल (बेचें)',
    prime_delivery_banner: '⚡ दुनिया के हर देश और भारत के 1,55,000+ गाँवों में घर तक मुफ़्त डिलीवरी',
    hello_account: 'नमस्ते, अभिषेक',
    account_lists: 'खाता और सूचियाँ ▾',
    returns: 'वापसी',
    orders: '& ऑर्डर',
    cart: 'कार्ट',
    add_to_cart: 'कार्ट में डालें',
    buy_now: '⚡ अभी खरीदें',
    deal_title: '⚡ आज की धमाकेदार डील्स',
    deal_sub: 'सीमित समय के ऑफ़र - स्टॉक खत्म होने से पहले ऑर्डर करें',
    deal_ends: 'ऑफ़र समाप्त होगा:',
    free_delivery_claim: '100% मुफ़्त डिलीवरी उपलब्ध',
    quickview: 'क्विक व्यू 👁️',
    choose_location: 'अपना डिलीवरी स्थान चुनें',
    worldwide_guarantee: '🌍 दुनिया के हर देश और भारत के सभी गाँवों में डिलीवरी गारंटी:',
    worldwide_desc: 'हम भारत के 1,55,000+ पिन कोड, ग्राम पंचायतों व कस्बों में इंडिया पोस्ट स्पीड पोस्ट से और विश्व के 195+ देशों में फेडेक्स/डीएचएल से सीधे घर तक डिलीवरी करते हैं।',
    apply_btn: 'लागू करें',
    back_to_top: 'वापस ऊपर जाएँ ↑',
    footer_tagline: '© 2026 UdaanMart. सर्वाधिकार सुरक्षित।'
  },
  en: {
    name: 'English',
    flag: '🇺🇸',
    deliver_to: 'Deliver to',
    search_placeholder: 'Search UdaanMart, products, brands, or deals...',
    all_departments: 'All Departments',
    all_products: 'All Products',
    men: "👨 Men's Fashion",
    women: "👩 Women's Fashion",
    karigar: '🏡 Rural Karigar',
    clothing: '👗 Clothing & Fashion',
    kitchen: '🍳 Home & Kitchen',
    beauty: '💄 Beauty & Care',
    sports: '🏋️ Sports & Outdoors',
    electronics: '💻 Electronics',
    audio: '🎧 Audio & Sound',
    smarthome: '🏠 Smart Home',
    gaming: '🎮 Gaming',
    luxury: '⌚ Luxury',
    wishlist: '❤️ Wish List',
    seller_hub: '🚀 Seller Central (Sell)',
    prime_delivery_banner: '⚡ Fast, Free Delivery Worldwide to 195+ Countries & 155,000+ Villages',
    hello_account: 'Hello, Abhishek',
    account_lists: 'Account & Lists ▾',
    returns: 'Returns',
    orders: '& Orders',
    cart: 'Cart',
    add_to_cart: 'Add to Cart',
    buy_now: '⚡ Buy Now',
    deal_title: '⚡ Deals of the Day',
    deal_sub: 'Limited-time lightning discounts on top electronics and apparel',
    deal_ends: 'Deals end in:',
    free_delivery_claim: 'FREE Delivery Available',
    quickview: 'Quick View 👁️',
    choose_location: 'Choose Your Delivery Location',
    worldwide_guarantee: '🌍 100% Guaranteed Worldwide & Village Delivery:',
    worldwide_desc: 'Delivering to 195+ countries worldwide via DHL/FedEx Express and 155,000+ village pincodes & Gram Panchayats across India via Speed Post.',
    apply_btn: 'Apply',
    back_to_top: 'Back to top ↑',
    footer_tagline: '© 2026 UdaanMart. All rights reserved.'
  },
  es: {
    name: 'Español',
    flag: '🇪🇸',
    deliver_to: 'Enviar a',
    search_placeholder: 'Buscar en UdaanMart productos, marcas o chollos...',
    all_departments: 'Departamentos',
    all_products: 'Todos los productos',
    men: '👨 Moda Hombre',
    women: '👩 Moda Mujer',
    karigar: '🏡 Artesanía Rural',
    clothing: '👗 Ropa y Moda',
    kitchen: '🍳 Hogar y Cocina',
    beauty: '💄 Belleza y Salud',
    sports: '🏋️ Deportes y Fitness',
    electronics: '💻 Electrónica',
    audio: '🎧 Audio y Sonido',
    smarthome: '🏠 Hogar Inteligente',
    gaming: '🎮 Videojuegos',
    luxury: '⌚ Lujo y Relojes',
    wishlist: '❤️ Lista de deseos',
    seller_hub: '🚀 Vender en UdaanMart',
    prime_delivery_banner: '⚡ Envío rápido y gratuito a todos los países y zonas rurales',
    hello_account: 'Hola, Abhishek',
    account_lists: 'Cuenta y Listas ▾',
    returns: 'Devoluciones',
    orders: 'y Pedidos',
    cart: 'Cesta',
    add_to_cart: 'Añadir a la cesta',
    buy_now: '⚡ Comprar ya',
    deal_title: '⚡ Ofertas del Día',
    deal_sub: 'Grandes descuentos por tiempo limitado en tecnología y moda',
    deal_ends: 'Termina en:',
    free_delivery_claim: 'Envío GRATIS disponible',
    quickview: 'Vista rápida 👁️',
    choose_location: 'Selecciona tu ubicación de entrega',
    worldwide_guarantee: '🌍 Garantía de entrega global en más de 195 países:',
    worldwide_desc: 'Entregamos en todas las ciudades y pueblos del mundo con servicio postal y mensajería exprés garantizada.',
    apply_btn: 'Aplicar',
    back_to_top: 'Volver arriba ↑',
    footer_tagline: '© 2026 UdaanMart. Todos los derechos reservados.'
  },
  fr: {
    name: 'Français',
    flag: '🇫🇷',
    deliver_to: 'Livrer à',
    search_placeholder: 'Rechercher sur UdaanMart, produits, marques...',
    all_departments: 'Tous les rayons',
    all_products: 'Tous les produits',
    men: '👨 Mode Homme',
    women: '👩 Mode Femme',
    karigar: '🏡 Artisans Ruraux',
    clothing: '👗 Mode & Vêtements',
    kitchen: '🍳 Maison & Cuisine',
    beauty: '💄 Beauté & Santé',
    sports: '🏋️ Sports & Loisirs',
    electronics: '💻 Électronique',
    audio: '🎧 Audio & Hi-Fi',
    smarthome: '🏠 Maison connectée',
    gaming: '🎮 Jeux vidéo',
    luxury: '⌚ Luxe & Montres',
    wishlist: "❤️ Liste d'envies",
    seller_hub: '🚀 Espace Vendeur',
    prime_delivery_banner: '⚡ Livraison rapide et gratuite dans 195+ pays et villages',
    hello_account: 'Bonjour, Abhishek',
    account_lists: 'Compte et listes ▾',
    returns: 'Retours',
    orders: 'et Commandes',
    cart: 'Panier',
    add_to_cart: 'Ajouter au panier',
    buy_now: '⚡ Acheter cet article',
    deal_title: '⚡ Ventes Flash du Jour',
    deal_sub: 'Réductions exceptionnelles pour une durée limitée',
    deal_ends: 'Se termine dans :',
    free_delivery_claim: 'Livraison GRATUITE disponible',
    quickview: 'Aperçu 👁️',
    choose_location: 'Choisissez votre lieu de livraison',
    worldwide_guarantee: '🌍 Livraison garantie dans le monde entier (195+ pays) :',
    worldwide_desc: 'Livraison express à domicile dans tous les pays et zones rurales par transporteur postal international.',
    apply_btn: 'Appliquer',
    back_to_top: 'Haut de page ↑',
    footer_tagline: '© 2026 UdaanMart. Tous droits réservés.'
  },
  de: {
    name: 'Deutsch',
    flag: '🇩🇪',
    deliver_to: 'Liefern an',
    search_placeholder: 'UdaanMart durchsuchen, Produkte, Marken oder Deals...',
    all_departments: 'Alle Kategorien',
    all_products: 'Alle Produkte',
    men: '👨 Herrenmode',
    women: '👩 Damenmode',
    karigar: '🏡 Kunsthandwerk',
    clothing: '👗 Kleidung & Mode',
    kitchen: '🍳 Küche, Haushalt & Wohnen',
    beauty: '💄 Beauty & Drogerie',
    sports: '🏋️ Sport & Fitness',
    electronics: '💻 Elektronik & Foto',
    audio: '🎧 Audio & Kopfhörer',
    smarthome: '🏠 Smart Home',
    gaming: '🎮 Games & Konsolen',
    luxury: '⌚ Luxus & Uhren',
    wishlist: '❤️ Wunschzettel',
    seller_hub: '🚀 Verkaufen bei UdaanMart',
    prime_delivery_banner: '⚡ Schnelle, kostenlose weltweite Lieferung in 195+ Länder',
    hello_account: 'Hallo, Abhishek',
    account_lists: 'Konto und Listen ▾',
    returns: 'Warenrücksendungen',
    orders: '& Bestellungen',
    cart: 'Einkaufswagen',
    add_to_cart: 'In den Einkaufswagen',
    buy_now: '⚡ Jetzt kaufen',
    deal_title: '⚡ Angebote des Tages',
    deal_sub: 'Stark reduzierte Blitzangebote für Elektronik und Mode',
    deal_ends: 'Endet in:',
    free_delivery_claim: 'Kostenlose Lieferung verfügbar',
    quickview: 'Schnellansicht 👁️',
    choose_location: 'Lieferadresse wählen',
    worldwide_guarantee: '🌍 Weltweite Liefergarantie in über 195 Länder:',
    worldwide_desc: 'Wir liefern zuverlässig per Express-Kurier und Post in alle Städte und ländlichen Regionen weltweit.',
    apply_btn: 'Übernehmen',
    back_to_top: 'Nach oben ↑',
    footer_tagline: '© 2026 UdaanMart. Alle Rechte vorbehalten.'
  },
  ja: {
    name: '日本語',
    flag: '🇯🇵',
    deliver_to: 'お届け先',
    search_placeholder: 'UdaanMartで商品、ブランド、セールを検索...',
    all_departments: 'すべて',
    all_products: 'すべての商品',
    men: '👨 メンズファッション',
    women: '👩 レディースファッション',
    karigar: '🏡 伝統職人手作り工芸',
    clothing: '👗 服＆ファッション小物',
    kitchen: '🍳 ホーム＆キッチン',
    beauty: '💄 ビューティー＆ヘルスケア',
    sports: '🏋️ スポーツ＆アウトドア',
    electronics: '💻 家電＆パソコン',
    audio: '🎧 イヤホン・オーディオ',
    smarthome: '🏠 スマート家電',
    gaming: '🎮 ゲーム＆VR',
    luxury: '⌚ ラグジュアリー時計',
    wishlist: '❤️ ほしい物リスト',
    seller_hub: '🚀 出品サービス (売る)',
    prime_delivery_banner: '⚡ 日本全国および世界195カ国の村落・都市へスピード無料配送',
    hello_account: 'こんにちは、Abhishek',
    account_lists: 'アカウント＆リスト ▾',
    returns: '返品もこちら',
    orders: '注文履歴',
    cart: 'カート',
    add_to_cart: 'カートに入れる',
    buy_now: '⚡ 今すぐ購入',
    deal_title: '⚡ 本日の特大タイムセール',
    deal_sub: '人気ガジェット・ファッションの数量限定特別割引',
    deal_ends: '終了まであと:',
    free_delivery_claim: '無料配送が利用可能です',
    quickview: 'クイックビュー 👁️',
    choose_location: 'お届け先を選択',
    worldwide_guarantee: '🌍 世界195カ国＆全地域へのドアステップ配達保証:',
    worldwide_desc: '世界中すべての郵便番号、郡部、村落へ国際スピード郵便および宅配便で確実にお届けします。',
    apply_btn: '設定する',
    back_to_top: 'トップへ戻る ↑',
    footer_tagline: '© 2026 UdaanMart. 無断転載を禁じます。'
  },
  ar: {
    name: 'العربية',
    flag: '🇦🇪',
    deliver_to: 'التوصيل إلى',
    search_placeholder: 'ابحث في أودان مارت عن المنتجات والماركات والعروض...',
    all_departments: 'جميع الأقسام',
    all_products: 'جميع المنتجات',
    men: '👨 أزياء رجالية',
    women: '👩 أزياء نسائية',
    karigar: '🏡 حرفيون قرويون تقليديون',
    clothing: '👗 ملابس وموضة',
    kitchen: '🍳 المنزل والمطبخ',
    beauty: '💄 الجمال والعناية',
    sports: '🏋️ رياضة ولياقة',
    electronics: '💻 إلكترونيات وأجهزة',
    audio: '🎧 صوتيات وسماعات',
    smarthome: '🏠 أجهزة المنزل الذكي',
    gaming: '🎮 ألعاب فيديو',
    luxury: '⌚ ساعات فاخرة',
    wishlist: '❤️ قائمة الرغبات',
    seller_hub: '🚀 بوابة البائعين',
    prime_delivery_banner: '⚡ توصيل سريع ومجاني لجميع دول العالم و155,000+ قرية',
    hello_account: 'مرحبًا، أبهيشيك',
    account_lists: 'الحساب والقوائم ▾',
    returns: 'المرتجعات',
    orders: 'والطلبات',
    cart: 'عربة التسوق',
    add_to_cart: 'أضف إلى السلة',
    buy_now: '⚡ اشتري الآن',
    deal_title: '⚡ عروض اليوم المميزة',
    deal_sub: 'خصومات حصرية ولفترة محدودة على أفضل المنتجات',
    deal_ends: 'ينتهي العرض بعد:',
    free_delivery_claim: 'توصيل مجاني متوفر',
    quickview: 'نظرة سريعة 👁️',
    choose_location: 'اختر موقع التوصيل الخاص بك',
    worldwide_guarantee: '🌍 ضمان التوصيل لجميع دول العالم (195+ دولة):',
    worldwide_desc: 'نقوم بالتوصيل لجميع المدن والقرى والمناطق الريفية والنائية عبر الشحن الجوي السريع والبريد الدولي.',
    apply_btn: 'تطبيق',
    back_to_top: 'العودة إلى الأعلى ↑',
    footer_tagline: '© 2026 UdaanMart. جميع الحقوق محفوظة.'
  }
};

class UdaanI18nEngine {
  constructor() {
    this.currentLang = localStorage.getItem('udaan_lang_v1') || 'hi';
    this.translations = UDAAN_TRANSLATIONS;
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang, false);
    this.bindLanguageSelector();
  }

  t(key) {
    const dict = this.translations[this.currentLang] || this.translations.en;
    return dict[key] || this.translations.en[key] || key;
  }

  applyLanguage(lang, announce = true) {
    if (!this.translations[lang]) {
      lang = 'en';
    }
    this.currentLang = lang;
    localStorage.setItem('udaan_lang_v1', lang);
    document.documentElement.setAttribute('lang', lang);

    // Apply RTL for Arabic if selected
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.removeAttribute('dir');
    }

    const dict = this.translations[lang];

    // 1. Update Navigation texts
    this.setTextSafe('.delivery-line-1', dict.deliver_to);
    this.setAttrSafe('#navbar-search-input', 'placeholder', dict.search_placeholder);
    this.setTextSafe('#nav-account-btn .nav-item-small', dict.hello_account);
    this.setTextSafe('#nav-account-btn .nav-item-bold', dict.account_lists);
    this.setTextSafe('#nav-orders-btn .nav-item-small', dict.returns);
    this.setTextSafe('#nav-orders-btn .nav-item-bold', dict.orders);
    this.setTextSafe('.nav-cart-label', dict.cart);
    this.setTextSafe('.prime-special-banner', dict.prime_delivery_banner);
    this.setTextSafe('.seller-hub-text', dict.seller_hub);

    // 2. Subnav links
    this.setTextSafe('#nav-hamburger-btn span:not(.hamburger-icon-lines)', dict.all_departments);
    this.setTextSafe('.nav-sub-item[data-filter-category="all"]', dict.all_products);
    this.setTextSafe('.nav-sub-item[data-filter-gender="men"]', dict.men);
    this.setTextSafe('.nav-sub-item[data-filter-gender="women"]', dict.women);
    this.setTextSafe('.nav-sub-item[data-filter-gender="karigar"]', dict.karigar);
    this.setTextSafe('.nav-sub-item[data-filter-category="clothing"]', dict.clothing);
    this.setTextSafe('.nav-sub-item[data-filter-category="kitchen"]', dict.kitchen);
    this.setTextSafe('.nav-sub-item[data-filter-category="beauty"]', dict.beauty);
    this.setTextSafe('.nav-sub-item[data-filter-category="sports"]', dict.sports);
    this.setTextSafe('.nav-sub-item[data-filter-category="electronics"]', dict.electronics);
    this.setTextSafe('.nav-sub-item[data-filter-category="audio"]', dict.audio);
    this.setTextSafe('.nav-sub-item[data-filter-category="smarthome"]', dict.smarthome);
    this.setTextSafe('.nav-sub-item[data-filter-category="gaming"]', dict.gaming);
    this.setTextSafe('.nav-sub-item[data-filter-category="fashion"]', dict.luxury);
    this.setTextSafe('#nav-wishlist-link', dict.wishlist);

    // 3. Deals banner
    this.setTextSafe('.deal-banner-heading', dict.deal_title);
    this.setTextSafe('.deal-banner-sub', dict.deal_sub);

    // 4. Modal headers
    this.setTextSafe('#location-modal .modal-title', dict.choose_location);
    this.setTextSafe('#location-guarantee-heading', dict.worldwide_guarantee);
    this.setTextSafe('#location-guarantee-desc', dict.worldwide_desc);
    this.setTextSafe('#btn-apply-location', dict.apply_btn);
    this.setTextSafe('#footer-back-to-top', dict.back_to_top);

    // 5. Update Language dropdown in navbar
    const langSelect = document.getElementById('language-selector');
    if (langSelect) {
      langSelect.value = lang;
    }
    const langFlag = document.getElementById('nav-current-lang-flag');
    if (langFlag) {
      langFlag.textContent = dict.flag;
    }

    // 6. Refresh product catalog cards (translates "Add to Cart", "Buy Now", badges)
    if (window.amzSearchFilter) {
      window.amzSearchFilter.refreshCatalog();
    }

    if (announce && window.amzCart) {
      window.amzCart.showToast(`${dict.flag} Language changed to ${dict.name}!`, 'info');
    }
  }

  setTextSafe(selector, text) {
    if (!text) return;
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  setAttrSafe(selector, attr, val) {
    if (!val) return;
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, val);
  }

  bindLanguageSelector() {
    const langSelect = document.getElementById('language-selector');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        this.applyLanguage(e.target.value, true);
      });
    }
  }

  /**
   * Intelligently detects country from city, village name, state, or PIN/ZIP code,
   * returning matching language, currency, and verified delivery partner.
   */
  detectCountryAndDetails(inputStr) {
    if (!inputStr) {
      return { lang: 'hi', currency: 'INR', flag: '🇮🇳', region: 'India (भारत)', carrier: 'India Post Speed Post & Rural Delivery' };
    }

    const s = inputStr.toLowerCase().trim();

    // 1. India Detection (Cities, States, Gram Panchayats, Villages, or 6-digit PIN)
    const isIndia = s.includes('india') || s.includes('bharat') || s.includes('mumbai') || 
                    s.includes('delhi') || s.includes('bangalore') || s.includes('bengaluru') || 
                    s.includes('chennai') || s.includes('kolkata') || s.includes('hyderabad') || 
                    s.includes('pune') || s.includes('jaipur') || s.includes('lucknow') || 
                    s.includes('varanasi') || s.includes('azamgarh') || s.includes('patna') || 
                    s.includes('ahmedabad') || s.includes('surat') || s.includes('kanpur') || 
                    s.includes('nagpur') || s.includes('indore') || s.includes('bhopal') || 
                    s.includes('village') || s.includes('gram') || s.includes('tehsil') ||
                    /\b[1-9][0-9]{5}\b/.test(s);

    if (isIndia) {
      return {
        lang: 'hi',
        currency: 'INR',
        flag: '🇮🇳',
        region: 'India (155,000+ Villages & Cities)',
        carrier: 'India Post Speed Post & Rural Express Van (FREE)'
      };
    }

    // 2. Japan Detection
    if (s.includes('japan') || s.includes('tokyo') || s.includes('osaka') || 
        s.includes('kyoto') || s.includes('yokohama') || /\b[0-9]{3}-?[0-9]{4}\b/.test(s)) {
      return {
        lang: 'ja',
        currency: 'JPY',
        flag: '🇯🇵',
        region: 'Japan (日本全国)',
        carrier: 'Japan Post & Global Express Courier (FREE)'
      };
    }

    // 3. Germany / DACH Detection
    if (s.includes('germany') || s.includes('deutschland') || s.includes('berlin') || 
        s.includes('munich') || s.includes('frankfurt') || s.includes('hamburg') || 
        s.includes('cologne') || s.includes('vienna') || s.includes('austria')) {
      return {
        lang: 'de',
        currency: 'EUR',
        flag: '🇩🇪',
        region: 'Germany / Deutschland',
        carrier: 'DHL Express & Deutsche Post (FREE)'
      };
    }

    // 4. France / Francophone Detection
    if (s.includes('france') || s.includes('paris') || s.includes('lyon') || 
        s.includes('marseille') || s.includes('bordeaux') || s.includes('nice') || s.includes('monaco')) {
      return {
        lang: 'fr',
        currency: 'EUR',
        flag: '🇫🇷',
        region: 'France & Europe',
        carrier: 'La Poste Colissimo & Express Courier (FREE)'
      };
    }

    // 5. Spain & Latin America Detection
    if (s.includes('spain') || s.includes('españa') || s.includes('madrid') || 
        s.includes('barcelona') || s.includes('valencia') || s.includes('seville') || 
        s.includes('mexico') || s.includes('bogota') || s.includes('buenos aires')) {
      return {
        lang: 'es',
        currency: 'EUR',
        flag: '🇪🇸',
        region: 'Spain & Latin America',
        carrier: 'Correos Express & Global Courier (FREE)'
      };
    }

    // 6. UAE & Middle East Detection
    if (s.includes('uae') || s.includes('dubai') || s.includes('abu dhabi') || 
        s.includes('saudi') || s.includes('riyadh') || s.includes('jeddah') || 
        s.includes('qatar') || s.includes('doha') || s.includes('kuwait') || s.includes('oman')) {
      return {
        lang: 'ar',
        currency: 'USD',
        flag: '🇦🇪',
        region: 'Middle East & Gulf',
        carrier: 'Aramex & Emirates Express Air Delivery (FREE)'
      };
    }

    // 7. United Kingdom Detection
    if (s.includes('uk') || s.includes('united kingdom') || s.includes('london') || 
        s.includes('manchester') || s.includes('birmingham') || s.includes('scotland') || 
        s.includes('glasgow') || s.includes('edinburgh') || s.includes('england')) {
      return {
        lang: 'en',
        currency: 'GBP',
        flag: '🇬🇧',
        region: 'United Kingdom',
        carrier: 'Royal Mail Special Delivery & DPD Express (FREE)'
      };
    }

    // 8. Canada Detection
    if (s.includes('canada') || s.includes('toronto') || s.includes('vancouver') || 
        s.includes('montreal') || s.includes('ottawa') || s.includes('calgary')) {
      return {
        lang: 'en',
        currency: 'CAD',
        flag: '🇨🇦',
        region: 'Canada',
        carrier: 'Canada Post Xpresspost & FedEx Express (FREE)'
      };
    }

    // 9. Australia Detection
    if (s.includes('australia') || s.includes('sydney') || s.includes('melbourne') || 
        s.includes('brisbane') || s.includes('perth')) {
      return {
        lang: 'en',
        currency: 'USD',
        flag: '🇦🇺',
        region: 'Australia',
        carrier: 'Australia Post Express & DHL Global (FREE)'
      };
    }

    // 10. Default / Universal Global Delivery (USA, Europe, Worldwide)
    return {
      lang: 'en',
      currency: 'USD',
      flag: '🌐',
      region: 'Worldwide Doorstep Delivery',
      carrier: 'FedEx Global Priority & Postal Air Delivery (FREE)'
    };
  }
}

// Instantiate globally
window.udaanI18n = new UdaanI18nEngine();
