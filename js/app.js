/**
 * Mona Kake / MK Bakings - Client Landing Page JS
 * WhatsApp Redirection Engine & Interactive Menu
 */

const WHATSAPP_PHONE = '919080934681';
const BAKERY_NAME = 'Mona Kake (MK Bakings)';

// Full Menu Catalog extracted from official Menu PDF
const MENU_ITEMS = [
  // --- BROWNIES (Premium Chocolate Brownies) ---
  {
    id: 'classic-brownie',
    category: 'brownies',
    title: 'Classic Brownie',
    desc: 'Rich, fudgy chocolate brownie baked with genuine chocolate for that timeless melt-in-mouth texture.',
    badge: 'Bestseller',
    image: 'assets/images/classic_brownie.jpg',
    customNote: 'Customise your toppings',
    portions: [
      { label: '250g', price: 200, default: true },
      { label: '1/2 kg', price: 400 },
      { label: '1 kg', price: 800 }
    ]
  },
  {
    id: 'triple-choco-brownie',
    category: 'brownies',
    title: 'Triple Choco Brownie',
    desc: 'An ultimate chocoholic dream loaded with milk, dark, and white chocolate goodness in every decadent bite.',
    badge: 'Popular',
    image: 'assets/images/triple_choco_brownie.jpg',
    customNote: 'Customise your toppings',
    portions: [
      { label: '250g', price: 250, default: true },
      { label: '1/2 kg', price: 450 },
      { label: '1 kg', price: 850 }
    ]
  },
  {
    id: 'double-choco-brownie',
    category: 'brownies',
    title: 'Double Choco Brownie',
    desc: 'Generously packed with double chocolate chunks inside a dense, chewy, and gooey brownie base.',
    badge: '',
    image: 'assets/images/triple_choco_brownie.jpg',
    customNote: 'Customise your toppings',
    portions: [
      { label: '250g', price: 230, default: true },
      { label: '1/2 kg', price: 430 },
      { label: '1 kg', price: 830 }
    ]
  },
  {
    id: 'almond-choco-brownie',
    category: 'brownies',
    title: 'Almond Choco Brownie',
    desc: 'Crunchy roasted almonds folded into rich cocoa batter for a delightful nutty chocolate crunch.',
    badge: 'Chef Special',
    image: 'assets/images/brownies_display.png',
    customNote: 'Customise your toppings',
    portions: [
      { label: '250g', price: 230, default: true },
      { label: '1/2 kg', price: 430 },
      { label: '1 kg', price: 850 }
    ]
  },
  {
    id: 'choco-dip-brownie',
    category: 'brownies',
    title: 'Choco Dip Brownie',
    desc: 'Silky warm chocolate dip glaze layered over fresh baked brownies for that velvety smooth finish.',
    badge: '',
    image: 'assets/images/classic_brownie.jpg',
    customNote: 'Customise your toppings',
    portions: [
      { label: '250g', price: 250, default: true },
      { label: '1/2 kg', price: 450 },
      { label: '1 kg', price: 900 }
    ]
  },
  {
    id: 'double-choco-dip-brownie',
    category: 'brownies',
    title: 'Double Choco Dip Brownie',
    desc: 'Intense indulgence drenched in double layers of chocolate ganache and chocolate topping.',
    badge: 'Luxury Indulgence',
    image: 'assets/images/triple_choco_brownie.jpg',
    customNote: 'Customise your toppings',
    portions: [
      { label: '250g', price: 280, default: true },
      { label: '1/2 kg', price: 500 },
      { label: '1 kg', price: 950 }
    ]
  },

  // --- BROWNIE SLAB CAKES ---
  {
    id: 'brownie-slab-cake',
    category: 'slabs',
    title: 'Brownie Slab Cake',
    desc: 'Large artisanal brownie slab cake perfect for birthdays, celebrations, and personalized message designs.',
    badge: 'Celebration Favorite',
    image: 'assets/images/brownie_slab.png',
    customNote: 'Customise toppings & designs',
    portions: [
      { label: '250g', price: 250, default: true },
      { label: '1/2 kg', price: 450 },
      { label: '1 kg', price: 800 }
    ]
  },

  // --- JAR CAKES (Mini / Regular) ---
  {
    id: 'brownie-jar',
    category: 'jars',
    title: 'Brownie Jar Cake',
    desc: 'Layers of moist chocolate brownie crumbled with smooth cream and silky chocolate drizzle inside a cute jar.',
    badge: 'Top Pick',
    image: 'assets/images/jar_cakes_stack.png',
    customNote: 'Available in Mini & Regular',
    portions: [
      { label: 'Mini Jar', price: 110, default: true },
      { label: 'Regular', price: 210 }
    ]
  },
  {
    id: 'red-velvet-jar',
    category: 'jars',
    title: 'Red Velvet Jar Cake',
    desc: 'Striking ruby red velvet sponge layered between luscious creamy frosting and white chocolate curls.',
    badge: 'Customer Choice',
    image: 'assets/images/red_velvet_jar.jpg',
    customNote: 'Available in Mini & Regular',
    portions: [
      { label: 'Mini Jar', price: 99, default: true },
      { label: 'Regular', price: 199 }
    ]
  },
  {
    id: 'choco-truffle-jar',
    category: 'jars',
    title: 'Choco Truffle Jar Cake',
    desc: 'Decadent dark chocolate truffle cake layers drenched in glossy ganache. Rich, heavenly, and satisfying.',
    badge: '',
    image: 'assets/images/jar_cakes_stack.png',
    customNote: 'Available in Mini & Regular',
    portions: [
      { label: 'Mini Jar', price: 99, default: true },
      { label: 'Regular', price: 199 }
    ]
  },
  {
    id: 'white-forest-jar',
    category: 'jars',
    title: 'White Forest Jar Cake',
    desc: 'Light and airy vanilla sponge layered with whipped fresh cream, cherries, and white chocolate shavings.',
    badge: '',
    image: 'assets/images/jar_cake_top.png',
    customNote: 'Available in Mini & Regular',
    portions: [
      { label: 'Mini Jar', price: 99, default: true },
      { label: 'Regular', price: 199 }
    ]
  },
  {
    id: 'black-forest-jar',
    category: 'jars',
    title: 'Black Forest Jar Cake',
    desc: 'Classic combination of chocolate sponge, delicate whipped cream, and tangy cherry compote in a jar.',
    badge: '',
    image: 'assets/images/jar_cake_single.png',
    customNote: 'Available in Mini & Regular',
    portions: [
      { label: 'Mini Jar', price: 99, default: true },
      { label: 'Regular', price: 199 }
    ]
  },
  {
    id: 'double-layer-choco-jar',
    category: 'jars',
    title: 'Double Layer Choco Jar',
    desc: 'Two contrasting layers of milk and dark chocolate cream alternating with delicate sponge.',
    badge: '',
    image: 'assets/images/jar_cake_single.png',
    customNote: 'Available in Mini & Regular',
    portions: [
      { label: 'Mini Jar', price: 99, default: true },
      { label: 'Regular', price: 199 }
    ]
  },
  {
    id: 'triple-layer-choco-jar',
    category: 'jars',
    title: 'Triple Layer Choco Jar',
    desc: 'Three sumptuous layers of dark, milk, and white chocolate creams crafted for true cocoa lovers.',
    badge: 'Decadent',
    image: 'assets/images/jar_cakes_stack.png',
    customNote: 'Available in Mini & Regular',
    portions: [
      { label: 'Mini Jar', price: 110, default: true },
      { label: 'Regular', price: 210 }
    ]
  },
  {
    id: 'nutella-jar',
    category: 'jars',
    title: 'Nutella Jar Cake',
    desc: 'Authentic hazelnut Nutella spread swirled between chocolate cake layers and velvety cream.',
    badge: 'Must Try',
    image: 'assets/images/jar_cake_top.png',
    customNote: 'Available in Mini & Regular',
    portions: [
      { label: 'Mini Jar', price: 110, default: true },
      { label: 'Regular', price: 210 }
    ]
  },

  // --- DREAM CAKES (5-in-1 Tins) ---
  {
    id: 'brownie-dream-cake',
    category: 'dreams',
    title: 'Brownie Dream Cake',
    desc: 'Signature multi-layer sensation featuring gooey brownie foundation, mousse, molten ganache, and crisp chocolate shell.',
    badge: 'Trending Star',
    image: 'assets/images/chocolate_dream_cake.jpg',
    customNote: 'Crackable Chocolate Shell',
    portions: [
      { label: '250g', price: 350, default: true },
      { label: '1/2 kg', price: 600 },
      { label: '1 kg', price: 1200 }
    ]
  },
  {
    id: 'chocolate-dream-cake',
    category: 'dreams',
    title: 'Chocolate Dream Cake',
    desc: 'Classic 5-in-1 chocolate dream cake with cake base, smooth cream, melted center, and hard cracking chocolate top.',
    badge: 'Bestseller',
    image: 'assets/images/chocolate_dream_cake.jpg',
    customNote: 'Crackable Chocolate Shell',
    portions: [
      { label: '250g', price: 350, default: true },
      { label: '1/2 kg', price: 600 },
      { label: '1 kg', price: 1200 }
    ]
  },
  {
    id: 'white-chocolate-dream-cake',
    category: 'dreams',
    title: 'White Chocolate Dream Cake',
    desc: 'Creamy white chocolate dream cake loaded with delicate vanilla sponge, white truffle cream, and ivory chocolate disk.',
    badge: '',
    image: 'assets/images/dream_cake.png',
    customNote: 'Crackable White Choco Shell',
    portions: [
      { label: '250g', price: 350, default: true },
      { label: '1/2 kg', price: 600 },
      { label: '1 kg', price: 1200 }
    ]
  },
  {
    id: 'rasamali-dream-cake',
    category: 'dreams',
    title: 'Rasamalai Dream Cake',
    desc: 'Fusion royalty! Saffron milk-soaked cake infused with soft rasamalai chunks, cardamom cream, and pistachio garnishing.',
    badge: 'Fusion Special',
    image: 'assets/images/rasamalai_dream_cake.jpg',
    customNote: 'Traditional Sweet Infused',
    portions: [
      { label: '250g', price: 450, default: true },
      { label: '1/2 kg', price: 800 },
      { label: '1 kg', price: 1500 }
    ]
  },
  {
    id: 'gulab-jamun-dream-cake',
    category: 'dreams',
    title: 'Gulab Jamun Dream Cake',
    desc: 'Festive delicacy layered with juicy soft gulab jamuns, rose-infused sponge, and decadent rabri cream.',
    badge: 'Festive Favorite',
    image: 'assets/images/rasamalai_dream_cake.jpg',
    customNote: 'Traditional Sweet Infused',
    portions: [
      { label: '250g', price: 450, default: true },
      { label: '1/2 kg', price: 800 },
      { label: '1 kg', price: 1500 }
    ]
  },
  {
    id: 'multi-chocolate-dream-cake',
    category: 'dreams',
    title: 'Multi Chocolate Dream Cake',
    desc: 'A grand symphony of dark, milk, and white chocolates layered together for the grandest chocolate experience.',
    badge: 'Premium Indulgence',
    image: 'assets/images/chocolate_dream_cake.jpg',
    customNote: 'Multi-layer Chocolate Symphony',
    portions: [
      { label: '250g', price: 400, default: true },
      { label: '1/2 kg', price: 650 },
      { label: '1 kg', price: 1300 }
    ]
  },

  // --- CUSTOM ORDERS / CELEBRATION CAKES ---
  {
    id: 'custom-event-cakes',
    category: 'custom',
    title: 'Customized Celebration Cakes',
    desc: 'Tailor-made theme cakes for Birthdays, Anniversaries, Corporate events, Baby showers, and special milestones in Chennai.',
    badge: 'Custom Order',
    image: 'assets/images/contact_sticker.png',
    customNote: 'Designs made to order',
    portions: [
      { label: '1/2 kg', price: 550, default: true },
      { label: '1 kg', price: 950 },
      { label: '2 kg+', price: 1800 }
    ]
  },
  {
    id: 'event-bulk-orders',
    category: 'custom',
    title: 'Event Orders & Return Gifts',
    desc: 'Bulk party boxes, mini jar gift sets, custom cookies, and brownie packs curated for wedding return gifts and celebrations.',
    badge: 'Bulk Savings',
    image: 'assets/images/jar_cakes_stack.png',
    customNote: 'Bulk packaging available',
    portions: [
      { label: 'Box of 6', price: 540, default: true },
      { label: 'Box of 12', price: 1050 },
      { label: 'Party Pack (25+)', price: 2100 }
    ]
  }
];

// State
let currentCategory = 'all';
let searchQuery = '';
// Store selected portion index for each item
const selectedPortions = {};
MENU_ITEMS.forEach(item => {
  const defIdx = item.portions.findIndex(p => p.default);
  selectedPortions[item.id] = defIdx >= 0 ? defIdx : 0;
});

// Build WhatsApp Direct URL
function buildWhatsAppUrl(item, portion) {
  const message = `Hello Mona Kake / MK Bakings! 👋\n\nI would like to order / inquire about the following item from your menu:\n\n🍰 *Item:* ${item.title}\n⚖️ *Portion / Size:* ${portion.label}\n💰 *Price:* ₹${portion.price}\n\nCould you please confirm availability and 1-day delivery for Chennai?\nThank you!`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

// Format category label
function getCategoryName(cat) {
  switch(cat) {
    case 'brownies': return 'Brownies';
    case 'slabs': return 'Brownie Slab';
    case 'jars': return 'Jar Cake';
    case 'dreams': return 'Dream Cake';
    case 'custom': return 'Custom Order';
    default: return 'Speciality';
  }
}

// Render Menu Cards
function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = currentCategory === 'all' || item.category === currentCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          getCategoryName(item.category).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 20px; border: 1px dashed var(--color-border);">
        <p style="font-size: 1.2rem; color: var(--color-text-main); font-weight: 700; margin-bottom: 8px;">No matching treats found</p>
        <p style="color: var(--color-text-muted); margin-bottom: 20px;">Try searching for another flavor or browse all categories.</p>
        <button class="btn btn-primary btn-sm" onclick="resetFilters()">Reset Filter</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const currentIdx = selectedPortions[item.id] || 0;
    const currentPortion = item.portions[currentIdx] || item.portions[0];
    const waUrl = buildWhatsAppUrl(item, currentPortion);

    return `
      <div class="menu-card" data-id="${item.id}" data-category="${item.category}" onclick="handleCardClick(event, '${item.id}')">
        <div class="menu-card-img-wrap" onclick="event.stopPropagation(); openLightbox('${item.image}', '${escapeHtml(item.title)}', '${escapeHtml(item.desc)}')">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
          <span class="card-category-pill">${getCategoryName(item.category)}</span>
          ${item.badge ? `<span class="card-popular-pill">${item.badge}</span>` : ''}
          <div class="img-zoom-hint" title="Click to view photo">🔍 Enlarge</div>
        </div>
        
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h3 class="menu-card-title">${item.title}</h3>
          </div>
          
          <p class="menu-card-desc">${item.desc}</p>
          ${item.customNote ? `<div><span class="custom-note-tag">✨ ${item.customNote}</span></div>` : ''}
          
          <div style="margin-top: 14px;" onclick="event.stopPropagation();">
            <div class="size-selector-label">Select Weight / Portion:</div>
            <div class="size-selector-group">
              ${item.portions.map((portion, idx) => `
                <button type="button" 
                        class="size-btn ${idx === currentIdx ? 'active' : ''}" 
                        onclick="event.stopPropagation(); selectPortion('${item.id}', ${idx})">
                  ${portion.label}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="menu-card-footer">
            <div class="price-display-block">
              <span class="price-unit-label">${currentPortion.label} Price</span>
              <div class="price-amount">
                <span class="price-currency">₹</span><span id="price-${item.id}">${currentPortion.price}</span>
              </div>
            </div>

            <a href="${waUrl}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="card-order-btn" 
               id="wa-btn-${item.id}"
               onclick="event.stopPropagation();"
               title="Order ${item.title} on WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.5c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.32z"/>
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Card direct click handler (redirect to WhatsApp)
function handleCardClick(event, itemId) {
  // If target is inside button, selector or image, ignore
  if (event.target.closest('.size-btn') || 
      event.target.closest('.menu-card-img-wrap') || 
      event.target.closest('.card-order-btn')) {
    return;
  }
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;
  const currentIdx = selectedPortions[item.id] || 0;
  const currentPortion = item.portions[currentIdx] || item.portions[0];
  const url = buildWhatsAppUrl(item, currentPortion);
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Portion selection handler
function selectPortion(itemId, portionIdx) {
  selectedPortions[itemId] = portionIdx;
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const portion = item.portions[portionIdx];
  
  // Update price in DOM
  const priceEl = document.getElementById(`price-${itemId}`);
  if (priceEl) priceEl.innerText = portion.price;

  // Update button link
  const btnEl = document.getElementById(`wa-btn-${itemId}`);
  if (btnEl) btnEl.href = buildWhatsAppUrl(item, portion);

  // Update active button state
  const card = document.querySelector(`.menu-card[data-id="${itemId}"]`);
  if (card) {
    const buttons = card.querySelectorAll('.size-btn');
    buttons.forEach((b, idx) => {
      if (idx === portionIdx) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }
}

// Helper: Escape HTML strings
function escapeHtml(str) {
  return (str || '').replace(/[&<>"']/g, function(m) {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return m;
    }
  });
}

// Reset filters
function resetFilters() {
  currentCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.value = '';
  
  document.querySelectorAll('.category-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });
  renderMenu();
}

// Lightbox Modal functions
function openLightbox(imgSrc, title, desc) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const waBtn = document.getElementById('lightbox-wa-btn');

  if (!modal || !img) return;

  img.src = imgSrc;
  if (titleEl) titleEl.innerText = title;
  if (descEl) descEl.innerText = desc;
  if (waBtn) {
    const msg = `Hello Mona Kake! 👋 I saw this delicious item (*${title}*) on your website. Could you tell me more about available sizes and delivery to Chennai?`;
    waBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Render initial menu
  renderMenu();

  // Category filter tabs
  document.querySelectorAll('.category-tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      currentCategory = button.dataset.category || 'all';
      renderMenu();
    });
  });

  // Search input
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderMenu();
    });
  }

  // Mobile menu toggle & backdrop
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');

  const hamburgerSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  const closeSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

  function closeMobileNav() {
    if (navLinks) navLinks.classList.remove('open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('active');
    if (mobileToggle) mobileToggle.innerHTML = hamburgerSvg;
    document.body.style.overflow = '';
  }

  function openMobileNav() {
    if (navLinks) navLinks.classList.add('open');
    if (mobileBackdrop) mobileBackdrop.classList.add('active');
    if (mobileToggle) mobileToggle.innerHTML = closeSvg;
    document.body.style.overflow = 'hidden';
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', closeMobileNav);
    }

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all others
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // Lightbox close events
  const closeBtn = document.getElementById('lightbox-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
