/* ==========================================
   TRYO APPLICATION ENGINE
   Mature E-Commerce, Indian Botanicals & Product Reviews
   ========================================== */

// 1. PRODUCT DATABASE (Real Indian Botanicals, Affordably Priced in INR)
let products = [
  {
    id: 'p1',
    name: 'Saffron Glow Face Serum',
    category: 'skincare',
    desc: 'Enriched with authentic Kashmiri saffron and organic Kumkumadi oil extract. Clinically proven to improve skin radiance and reduce spots.',
    priceFull: 599,
    priceMini: 149,
    image: 'assets/saffron_serum.jpg',
    ingredients: 'Pure Kashmiri Saffron Stigma Extract, Kumkumadi Oil, Sandalwood Extract, Licorice Root, Orange Peel Hydrosol, Hyaluronic Acid (2%).',
    instructions: '1. Cleanse face thoroughly. 2. Apply 3-4 drops of serum onto face and neck. 3. Massage gently in upward circular motions. 4. Use twice daily, morning and night, for optimal clinical glow.',
    benefits: 'Active brightening, fades hyperpigmentation, smooths uneven skin textures, boosts collagen formulation naturally.',
    clinicalTag: 'Radiance +92%',
    color: '#f9dcc4',
    type: 'dropper',
    rating: 4.8,
    reviews: [
      { user: 'Sneha Sharma', rating: 5, text: 'This saffron serum is absolute magic. My dark spots faded within 3 weeks of patch testing!' },
      { user: 'Aditi Rao', rating: 4, text: 'Extremely lightweight, does not feel sticky. Skin has a noticeable healthy luster.' },
      { user: 'Priya Patel', rating: 5, text: 'Using the mini package for travel. Very premium, highly recommend for organic radiance.' }
    ]
  },
  {
    id: 'p2',
    name: 'Neem & Tea Tree Spot Gel',
    category: 'skincare',
    desc: 'Lightweight clinical gel with organic neem leaves and tea tree oil. Founder-tested to control active acne breakouts and pimple marks.',
    priceFull: 399,
    priceMini: 99,
    image: 'assets/neem_gel.jpg',
    ingredients: 'Organic Neem Leaf Extract, Tea Tree Essential Oil (1.5%), Salicylic Acid (1%), Aloe Vera Leaf Juice, Tulsi (Holy Basil) Extract.',
    instructions: '1. Cleanse face. 2. Apply a thin layer directly onto acne breakouts or spots. 3. Let it absorb. 4. Apply sunscreen during daytime. Use daily.',
    benefits: 'Calms inflammatory redness, fights acne-causing bacteria, unclogs skin pores, controls excess sebum.',
    clinicalTag: 'Acne Control',
    color: '#d8f3dc',
    type: 'tube',
    rating: 4.6,
    reviews: [
      { user: 'Rohan Mehta', rating: 5, text: 'Instantly reduced redness overnight. Best tea tree spot treatment.' },
      { user: 'Kriti Sen', rating: 4, text: 'Works well for active pimples, does not dry out the skin around the breakout.' }
    ]
  },
  {
    id: 'p3',
    name: 'Sandalwood & Rose Hydration Mist',
    category: 'skincare',
    desc: 'Steam-distilled pure organic Rosewater infused with cooling Sandalwood essence. Refreshes pores and restores natural moisture.',
    priceFull: 449,
    priceMini: 119,
    image: 'assets/sandalwood_mist.jpg',
    ingredients: 'Steam-Distilled Rose Hydrosol, Mysore Sandalwood Oil Extract, Witch Hazel Hydrosol (Alcohol-Free), Aloe Barbadensis Leaf Juice.',
    instructions: '1. Hold bottle 6 inches away from face. 2. Close eyes and spray evenly. 3. Pat gently to absorb. 4. Apply before moisturizer or throughout the day for hydration.',
    benefits: 'Cools sun-stressed skin, balances epidermal pH, tightens pores, instant refreshing hydration boost.',
    clinicalTag: 'Pore Refining',
    color: '#ffcad4',
    type: 'liquid',
    rating: 4.7,
    reviews: [
      { user: 'Meera Nair', rating: 5, text: 'The fragrance of sandalwood is so authentic and calming. Extremely hydrating.' },
      { user: 'Vikram Singh', rating: 4, text: 'Very soothing after shaving. Replaced my chemical toners.' }
    ]
  },
  {
    id: 'p4',
    name: 'Pink Clay & Hibiscus Face Mask',
    category: 'skincare',
    desc: 'Natural French pink clay mixed with organic hibiscus powder. Gently exfoliates dead skin cells for a velvet-smooth face.',
    priceFull: 499,
    priceMini: 129,
    image: 'assets/pink_clay_mask.jpg',
    ingredients: 'French Pink Clay, Organic Hibiscus Flower Powder, Sweet Almond Oil, Kaolin, Vegetable Glycerin, Rose Essential Oil.',
    instructions: '1. Mix 1 tablespoon with water/rosewater to form a paste. 2. Apply evenly on clean face, avoiding eyes. 3. Leave for 10-12 minutes until semi-dry. 4. Rinse with lukewarm water.',
    benefits: 'Pulls out sebum impurities, naturally exfoliates micro-dermal layers, tightens skin, boosts cell renewal.',
    clinicalTag: 'Velvet Skin',
    color: '#ffb3c6',
    type: 'mask',
    rating: 4.5,
    reviews: [
      { user: 'Diya Kapoor', rating: 5, text: 'Leaves my skin baby soft and glowing! Best mask for weekend self-care.' },
      { user: 'Sanya Malhotra', rating: 4, text: 'A bit messy to mix but the results are completely worth it. Very organic feel.' }
    ]
  },
  {
    id: 'p5',
    name: 'Aloe Vera & Calendula Sunscreen',
    category: 'skincare',
    desc: 'Non-greasy mineral sunscreen with SPF 50. Made with organic aloe vera and calendula. Leaves zero white cast and protects skin.',
    priceFull: 549,
    priceMini: 139,
    image: 'assets/aloe_sunscreen.jpg',
    ingredients: 'Non-Nano Zinc Oxide (18%), Organic Aloe Vera Extract, Calendula Flower Oil, Wheatgerm Oil, Green Tea Leaf Extract, Coconut Alkanes.',
    instructions: '1. Take a nickel-sized amount. 2. Dot all over face, neck, and exposed skin. 3. Blend gently until fully absorbed. 4. Reapply every 3-4 hours if in direct sun.',
    benefits: 'Broad-spectrum UVA/UVB shield, reef-safe biodegradable composition, zero skin clogging, rich in soothing antioxidants.',
    clinicalTag: 'SPF 50 PA+++',
    color: '#ffe5ec',
    type: 'tube',
    rating: 4.7,
    reviews: [
      { user: 'Rahul Verma', rating: 5, text: 'Finally a mineral sunscreen that does not leave a ghostly white cast. Love it!' },
      { user: 'Neha Gupta', rating: 4, text: 'Hydrating sunscreen, works like a charm under light makeup.' }
    ]
  },
  {
    id: 'p6',
    name: 'Rosemary & Amla Hair Growth Oil',
    category: 'haircare',
    desc: 'Traditional hair oil packed with organic rosemary sprigs and fresh amla. Stimulates follicles and prevents premature hair fall.',
    priceFull: 499,
    priceMini: 129,
    image: 'assets/rosemary_oil.jpg',
    ingredients: 'Organic Rosemary Leaf Oil, Amla (Indian Gooseberry) Fruit Oil, Sesame Seed Oil, Cold-Pressed Virgin Coconut Oil, Fenugreek Seed Oil.',
    instructions: '1. Part hair into sections. 2. Warm a few drops between palms and massage gently into scalp. 3. Leave overnight or for 2 hours before washing. 4. Use 3 times a week.',
    benefits: 'Activates hair growth hormones, strengthens root structures, controls hair breakage, delays graying.',
    clinicalTag: 'Anti-Hair Fall',
    color: '#f7d6c8',
    type: 'dropper',
    rating: 4.9,
    reviews: [
      { user: 'Arjun Das', rating: 5, text: 'My hair fall stopped significantly in just two weeks. Highly recommend massage routine!' },
      { user: 'Tanvi Sen', rating: 5, text: 'Excellent botanical smell, hair feels thick and glossy.' }
    ]
  },
  {
    id: 'p7',
    name: 'Bhringraj & Shikakai Shampoo',
    category: 'haircare',
    desc: 'Mild biodegradable hair cleanser with wild Bhringraj herbs and Shikakai shells. Strengthens roots and adds deep natural shine.',
    priceFull: 449,
    priceMini: 119,
    image: 'assets/bhringraj_shampoo.jpg',
    ingredients: 'Wild Bhringraj Extract, Shikakai Shell Powder, Reetha (Soapnut) Extract, Coconut Glucoside, Keratin Protein, Rosemary Extract.',
    instructions: '1. Apply to wet scalp. 2. Massage gently to build mild, chemical-free lather. 3. Rinse thoroughly. 4. Follow with hair mask if needed.',
    benefits: 'Cleanses scalp scale residue, prevents follicle weakening, retains natural hair pigment, deep conditioning.',
    clinicalTag: 'Root Strength',
    color: '#e2d4c9',
    type: 'shampoo',
    rating: 4.4,
    reviews: [
      { user: 'Manish Iyer', rating: 4, text: 'Lathers less because it has no SLS, but cleanses scalp thoroughly. Great results!' },
      { user: 'Pooja Bhat', rating: 5, text: 'Traditional hair care recipe that actually works. Hair has a natural bounce.' }
    ]
  },
  {
    id: 'p8',
    name: 'Coconut Milk & Argan Hair Mask',
    category: 'haircare',
    desc: 'Ultra-creamy spa mask using organic coconut milk cream. Smoothens dry hair cuticles and eliminates frizz in one use.',
    priceFull: 599,
    priceMini: 149,
    image: 'assets/coconut_hair_mask.jpg',
    ingredients: 'Organic Coconut Milk Extract, Cold-Pressed Argan Kernel Oil, Shea Butter, Sweet Almond Oil, Aloe Juice, Jasmine Extract.',
    instructions: '1. Shampoo hair. 2. Squeeze out excess water. 3. Apply mask from mid-lengths to hair tips. 4. Leave for 10 minutes. 5. Rinse with cold water.',
    benefits: 'Instantly tames dry frizz, deep conditions core cuticles, repairs color-damaged strands, maximum silk gloss.',
    clinicalTag: 'Frizz-Free Silk',
    color: '#faf0e6',
    type: 'jar',
    rating: 4.8,
    reviews: [
      { user: 'Riya Sen', rating: 5, text: 'The texture is like whipped butter. Absolute salon finish at home for dry hair!' },
      { user: 'Devika Dutt', rating: 4, text: 'Very nourishing. Smells like jasmine and coconuts.' }
    ]
  },
  {
    id: 'p9',
    name: 'Onion & Ginger Scalp Serum',
    category: 'haircare',
    desc: 'Concentrated serum with organic red onion juices and ginger oil. Refreshes the scalp biome, fighting dandruff and itching.',
    priceFull: 549,
    priceMini: 139,
    image: 'assets/onion_serum.jpg',
    ingredients: 'Red Onion Bulb Extract, Ginger Root Oil, Tea Tree Oil, Aloe Vera Extract, Ginseng Extract, Vegetable Glycerin.',
    instructions: '1. Take 2-3 pumps. 2. Massage gently onto clean, dry scalp with fingertips. 3. Do not rinse out. 4. Leave on scalp overnight.',
    benefits: 'Purifies scalp micro-biome, targets dandruff scaling, relieves itching, nourishes dormant root cells.',
    clinicalTag: 'Dandruff Control',
    color: '#ffd5c2',
    type: 'dropper',
    rating: 4.5,
    reviews: [
      { user: 'Karan Johar', rating: 4, text: 'Very effective against dry scalp dandruff. No heavy onion smell at all.' },
      { user: 'Meghna Roy', rating: 5, text: 'Super light water-like serum, scalp itching stopped completely.' }
    ]
  },
  {
    id: 'p10',
    name: 'Rosewater Hibiscus Leave-In Mist',
    category: 'haircare',
    desc: 'Lightweight detangling mist with rose hydrosol and organic hibiscus. Spray daily to lock in moisture and natural hair gloss.',
    priceFull: 399,
    priceMini: 99,
    image: 'assets/rosewater_mist.jpg',
    ingredients: 'Pure Rosewater Hydrosol, Organic Hibiscus Extract, Hydrolyzed Rice Protein, Panthenol (Provitamin B5), Aloe Juice.',
    instructions: '1. Spray on damp or dry hair length. 2. Comb through to detangle. 3. Do not rinse out. 4. Style as usual.',
    benefits: 'Locks in hydration, seals hair cuticles, instant detangler, shields hair from pollution damage.',
    clinicalTag: 'Instant Detangle',
    color: '#ffc2d1',
    type: 'liquid',
    rating: 4.6,
    reviews: [
      { user: 'Swati Sen', rating: 5, text: 'Super convenient leave-in spray. Keeps my hair smelling like fresh roses!' },
      { user: 'Aisha Malik', rating: 4, text: 'Reduces morning tangles. Safe for daily use.' }
    ]
  }
];

// 2. STATE OBJECTS
let state = {
  currentUser: null,
  cart: [],
  wishlist: [],
  orders: [],
  scanMode: 'face',
  scanResult: null,
  comboVersion: 'mini',
  comboSlots: [null, null, null, null, null],
  isRealCamActive: false,
  webcamStream: null,
  activeDetailProductId: null
};

// Write Review Interactive State
let activeReviewRating = 5;

// Scanner progression week tracker
let evolutionWeek = 1;

// Toast notification helper
function showCartAddSuccessToast(itemName) {
  // Remove any existing toast
  const existing = document.getElementById('tryo-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'tryo-toast';
  toast.innerText = `✓  "${itemName}" added!`;
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #b07077;
    color: #fff;
    padding: 12px 22px;
    border-radius: 50px;
    font-family: var(--font-body, sans-serif);
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0 4px 20px rgba(176,112,119,0.35);
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(toast);

  // Fade in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { toast.style.opacity = '1'; });
  });

  // Fade out and remove after 2.5 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// 3. APP INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  generateDynamicScanResults();
  loadStateFromLocalStorage();
  renderProducts();
  renderComboCatalog();
  updateHeaderBadges();
  setupStarHoverEffects();
  lucide.createIcons();

  const currentHash = window.location.hash.substring(1);
  if (currentHash && ['home', 'shop', 'combo', 'scanner', 'wishlist', 'cart', 'history', 'checkout'].includes(currentHash)) {
    navigateTo(currentHash);
  }
});

// 4. ROUTING SYSTEM
function navigateTo(viewId) {
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  const targetPanel = document.getElementById(`${viewId}-view`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
  });
  const navLink = document.querySelector(`.nav-links a[href="#${viewId}"]`);
  if (navLink) {
    navLink.classList.add('active');
  }

  if (viewId === 'cart') {
    renderCart();
  } else if (viewId === 'wishlist') {
    renderWishlist();
  } else if (viewId === 'history') {
    renderHistory();
  } else if (viewId === 'checkout') {
    renderCheckoutSummary();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. ACCOUNT SYSTEM
function openProfileOrLogin() {
  if (state.currentUser) {
    navigateTo('history');
  } else {
    document.getElementById('auth-modal').classList.remove('hidden');
  }
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById('tab-login');
  const tabSignup = document.getElementById('tab-signup');
  const formLogin = document.getElementById('login-form');
  const formSignup = document.getElementById('signup-form');

  if (tab === 'login') {
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
    formLogin.classList.remove('hidden');
    formSignup.classList.add('hidden');
  } else {
    tabLogin.classList.remove('active');
    tabSignup.classList.add('active');
    formLogin.classList.add('hidden');
    formSignup.classList.remove('hidden');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const password = document.getElementById('login-password').value;
  
  const users = JSON.parse(localStorage.getItem('tryo_all_users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    alert('Incorrect email or password. Please try again or switch to Sign Up.');
    return;
  }
  
  state.currentUser = { name: capitalize(user.name.split(' ')[0]), email: user.email, fullName: user.name };
  saveStateToLocalStorage();
  updateUserUI();
  closeAuthModal();
  navigateTo('history');
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const password = document.getElementById('signup-password').value;
  
  const users = JSON.parse(localStorage.getItem('tryo_all_users') || '[]');
  if (users.find(u => u.email === email)) {
    alert('An account with this email already exists. Please Log In.');
    return;
  }
  
  users.push({ name, email, password });
  localStorage.setItem('tryo_all_users', JSON.stringify(users));
  
  state.currentUser = { name: capitalize(name.split(' ')[0]), email, fullName: name };
  saveStateToLocalStorage();
  updateUserUI();
  closeAuthModal();
  navigateTo('shop');
}

function simulateGoogleLogin() {
  const name = prompt("Google Sign-In Simulation\n\nEnter your Full Name:");
  if (!name) return;
  
  let email = prompt("Enter your Gmail Address:");
  if (!email) return;
  email = email.trim().toLowerCase();
  
  if (!email.includes('@')) {
    email = email + '@gmail.com';
  }
  
  const users = JSON.parse(localStorage.getItem('tryo_all_users') || '[]');
  if (!users.find(u => u.email === email)) {
    users.push({ name: name, email: email, password: 'google_oauth_user' });
    localStorage.setItem('tryo_all_users', JSON.stringify(users));
  }
  
  const firstName = name.split(' ')[0];
  state.currentUser = { 
    name: capitalize(firstName), 
    email: email, 
    fullName: name, 
    picture: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random` 
  };
  
  saveStateToLocalStorage();
  updateUserUI();
  closeAuthModal();
  navigateTo('shop');
}

function userLogout() {
  state.currentUser = null;
  state.orders = [];
  state.wishlist = [];
  state.cart = [];
  saveStateToLocalStorage();
  updateUserUI();
  updateHeaderBadges();
  navigateTo('home');
}

function updateUserUI() {
  const profileBtnText = document.getElementById('user-display-name');
  const profileName = document.getElementById('profile-user-name');
  const profileEmail = document.getElementById('profile-user-email');
  const profileAvatar = document.getElementById('profile-avatar');

  if (state.currentUser) {
    profileBtnText.innerText = state.currentUser.name;
    profileName.innerText = state.currentUser.fullName || state.currentUser.name;
    profileEmail.innerText = state.currentUser.email;
    
    if (state.currentUser.picture && profileAvatar) {
      profileAvatar.innerHTML = `<img src="${state.currentUser.picture}" alt="Profile" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
    } else if (profileAvatar) {
      profileAvatar.innerHTML = `<i data-lucide="user"></i>`;
      lucide.createIcons();
    }
  } else {
    profileBtnText.innerText = 'Login';
    profileName.innerText = 'Guest User';
    profileEmail.innerText = 'Sign in to save purchase logs forever!';
    if (profileAvatar) {
      profileAvatar.innerHTML = `<i data-lucide="user"></i>`;
      lucide.createIcons();
    }
  }
}

// 6. ADORABLE SVG PRODUCT ILLUSTRATION GENERATION
function getProductSVG(type, color) {
  if (type === 'liquid') {
    return `<svg class="prod-svg-graphic" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${color.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#b07077"/>
        </linearGradient>
      </defs>
      <rect x="35" y="10" width="30" height="15" rx="2" fill="#332527"/>
      <rect x="44" y="25" width="12" height="10" fill="#f0dbdd"/>
      <rect x="25" y="35" width="50" height="75" rx="8" fill="url(#grad-${color.replace('#','')})"/>
      <rect x="29" y="55" width="42" height="30" fill="rgba(255,255,255,0.8)" rx="2"/>
      <circle cx="50" cy="70" r="5" fill="#b07077" opacity="0.8"/>
      <path d="M47 70 H53 M50 67 V73" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;
  } else if (type === 'dropper') {
    return `<svg class="prod-svg-graphic" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${color.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#b07077"/>
        </linearGradient>
      </defs>
      <path d="M42 22 C42 16, 58 16, 58 22 Z" fill="#b07077"/>
      <rect x="38" y="22" width="24" height="8" rx="1" fill="#332527"/>
      <rect x="28" y="30" width="44" height="78" rx="12" fill="url(#grad-${color.replace('#','')})"/>
      <rect x="32" y="52" width="36" height="28" fill="rgba(255,255,255,0.85)" rx="2"/>
      <path d="M44 66 Q50 60 56 66" stroke="#b07077" stroke-width="1.5" fill="none"/>
    </svg>`;
  } else if (type === 'jar') {
    return `<svg class="prod-svg-graphic" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${color.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#b07077"/>
        </linearGradient>
      </defs>
      <rect x="20" y="45" width="60" height="10" rx="2" fill="#332527"/>
      <path d="M22 55 C22 55, 22 95, 50 95 C78 95, 78 55, 78 55 Z" fill="url(#grad-${color.replace('#','')})"/>
      <rect x="30" y="65" width="40" height="18" fill="rgba(255,255,255,0.85)" rx="2"/>
      <circle cx="50" cy="74" r="3" fill="#b07077"/>
    </svg>`;
  } else if (type === 'mask') {
    return `<svg class="prod-svg-graphic" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${color.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#b07077"/>
        </linearGradient>
      </defs>
      <rect x="18" y="48" width="64" height="12" rx="2" fill="#332527"/>
      <path d="M22 60 L28 102 C29 106, 71 106, 72 102 L78 60 Z" fill="url(#grad-${color.replace('#','')})"/>
      <rect x="32" y="70" width="36" height="20" fill="rgba(255,255,255,0.8)" rx="2"/>
      <path d="M46 80 L54 80" stroke="#b07077" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  } else if (type === 'shampoo') {
    return `<svg class="prod-svg-graphic" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${color.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#b07077"/>
        </linearGradient>
      </defs>
      <rect x="44" y="8" width="12" height="8" rx="1" fill="#e5b3b8"/>
      <rect x="40" y="16" width="20" height="8" rx="1" fill="#332527"/>
      <path d="M32 24 C32 24, 22 75, 26 108 L74 108 C78 75, 68 24, 68 24 Z" fill="url(#grad-${color.replace('#','')})"/>
      <rect x="34" y="46" width="32" height="32" fill="rgba(255,255,255,0.8)" rx="4"/>
      <circle cx="50" cy="62" r="4" fill="#b07077"/>
    </svg>`;
  } else {
    return `<svg class="prod-svg-graphic" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${color.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="${color}"/>
          <stop offset="100%" stop-color="#b07077"/>
        </linearGradient>
      </defs>
      <polygon points="28,12 72,12 64,95 36,95" fill="url(#grad-${color.replace('#','')})"/>
      <rect x="25" y="6" width="50" height="6" rx="1" fill="#332527"/>
      <rect x="38" y="95" width="24" height="12" rx="2" fill="#b07077"/>
      <rect x="36" y="40" width="28" height="25" fill="rgba(255,255,255,0.8)" rx="2"/>
      <path d="M44 52.5 L50 45 L56 52.5 Z" fill="#b07077"/>
    </svg>`;
  }
}

// 7. SHOP PRODUCTS LISTINGS
function renderProducts() {
  const container = document.getElementById('products-container');
  if (!container) return;
  container.innerHTML = '';

  const selectedSizeFilter = document.getElementById('size-filter-select').value;

  const filtered = products.filter(p => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  filtered.forEach(p => {
    const isWishlisted = state.wishlist.includes(p.id);
    const heartClass = isWishlisted ? 'wishlist-heart-btn wishlisted' : 'wishlist-heart-btn';

    const card = document.createElement('div');
    card.className = 'product-card';
    card.id = `prod-${p.id}`;

    const showFull = (selectedSizeFilter === 'all' || selectedSizeFilter === 'full');
    const showMini = (selectedSizeFilter === 'all' || selectedSizeFilter === 'mini');

    if (!showFull && !showMini) return;

    const defaultSize = showFull ? 'full' : 'mini';
    const activePrice = defaultSize === 'full' ? p.priceFull : p.priceMini;

    const imageHTML = p.image 
      ? `<img class="prod-svg-graphic" src="${p.image}" alt="${p.name}" style="border-radius:var(--border-radius-sm); object-fit:cover;">`
      : getProductSVG(p.type, p.color);

    card.innerHTML = `
      <div class="product-img-wrapper">
        ${imageHTML}
        <button class="${heartClass}" onclick="toggleWishlist('${p.id}', event)">
          <i data-lucide="heart"></i>
        </button>
        <span class="badge-pill-clinical">
          <i data-lucide="shield-check"></i> ${p.clinicalTag}
        </span>
      </div>
      
      <div class="product-details">
        <div class="prod-meta">
          <span class="cat-badge">${capitalize(p.category)}</span>
          <button class="card-details-btn" onclick="openProductDetailModal('${p.id}')">View Details</button>
        </div>
        <h3 class="prod-title">${p.name}</h3>
        <p class="prod-desc">${p.desc}</p>
        
        <div class="prod-options-selector ${(!showFull || !showMini) ? 'hidden' : ''}">
          <button class="size-option-btn active" onclick="setProductCardSize('${p.id}', 'full', ${p.priceFull})">Full Pack</button>
          <button class="size-option-btn" onclick="setProductCardSize('${p.id}', 'mini', ${p.priceMini})">Mini Size (1-Wk)</button>
        </div>

        <div class="prod-price-area">
          <div class="price-display">
            <span class="price-val" id="price-val-${p.id}">₹${activePrice}</span>
            <span class="size-label" id="size-label-${p.id}">${defaultSize === 'full' ? 'Full Pack' : '1-Week Tester'}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="addProductToCart('${p.id}')">
            <i data-lucide="shopping-cart"></i> Add
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  lucide.createIcons();
}

function filterCategory(category, buttonEl) {
  activeCategory = category;
  document.querySelectorAll('.category-toggles .filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  buttonEl.classList.add('active');
  renderProducts();
}

function applyFilters() {
  renderProducts();
}

function setProductCardSize(productId, size, price) {
  const card = document.getElementById(`prod-${productId}`);
  if (!card) return;

  const buttons = card.querySelectorAll('.size-option-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  if (size === 'full') {
    buttons[0].classList.add('active');
    document.getElementById(`price-val-${productId}`).innerText = `₹${price}`;
    document.getElementById(`size-label-${productId}`).innerText = 'Full Pack';
  } else {
    buttons[1].classList.add('active');
    document.getElementById(`price-val-${productId}`).innerText = `₹${price}`;
    document.getElementById(`size-label-${productId}`).innerText = '1-Week Tester';
  }
}

// 8. PRODUCT DETAILS & REVIEWS DIALOG LOGIC
function openProductDetailModal(id) {
  const p = products.find(prod => prod.id === id);
  if (!p) return;

  state.activeDetailProductId = id;

  // Render photo
  const imgBox = document.getElementById('detail-modal-img');
  imgBox.src = p.image || '';

  document.getElementById('detail-modal-title').innerText = p.name;
  document.getElementById('detail-modal-category').innerText = p.category.toUpperCase();
  document.getElementById('detail-modal-desc').innerText = p.desc;
  document.getElementById('detail-modal-rating-count').innerText = `${p.rating} (${p.reviews.length} reviews)`;

  // Tab defaults
  switchDetailTab('ingredients');

  // Render Star Display (Gold)
  updateModalAverageStarsDisplay(p.rating);

  // Render Reviews List
  renderModalReviewsList(p.reviews);

  // Reset Write Review form
  document.getElementById('write-review-form').reset();
  setWriteReviewRating(5); // Default to 5 stars

  document.getElementById('product-detail-modal').classList.remove('hidden');
}

function updateModalAverageStarsDisplay(rating) {
  const rounded = Math.round(rating);
  let starsHtml = '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
  document.getElementById('detail-modal-stars').innerText = starsHtml;
}

function renderModalReviewsList(reviews) {
  const reviewsContainer = document.getElementById('detail-modal-reviews-list');
  reviewsContainer.innerHTML = '';
  
  reviews.forEach(rev => {
    const revCard = document.createElement('div');
    revCard.className = 'reviewer-card';
    
    let starString = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);

    revCard.innerHTML = `
      <div class="reviewer-header">
        <span class="reviewer-name">${rev.user}</span>
        <span class="reviewer-stars">${starString}</span>
      </div>
      <p class="reviewer-comment">"${rev.text}"</p>
    `;
    reviewsContainer.appendChild(revCard);
  });
}

function closeProductDetailModal() {
  document.getElementById('product-detail-modal').classList.add('hidden');
  state.activeDetailProductId = null;
}

function switchDetailTab(tabName) {
  const p = products.find(prod => prod.id === state.activeDetailProductId);
  if (!p) return;

  document.getElementById('btn-tab-ingredients').classList.toggle('active', tabName === 'ingredients');
  document.getElementById('btn-tab-instructions').classList.toggle('active', tabName === 'instructions');
  document.getElementById('btn-tab-benefits').classList.toggle('active', tabName === 'benefits');

  const contentBox = document.getElementById('detail-tab-content');
  if (tabName === 'ingredients') {
    contentBox.innerHTML = `<strong>Contains:</strong> ${p.ingredients}`;
  } else if (tabName === 'instructions') {
    contentBox.innerHTML = `<strong>Directions for Use:</strong><br>${p.instructions}`;
  } else {
    contentBox.innerHTML = `<strong>Clinical Benefits:</strong><br>&bull; ${p.benefits.split(', ').join('<br>&bull; ')}`;
  }
}

// Write Review Star Selector Actions
function setWriteReviewRating(rating) {
  activeReviewRating = rating;
  const starsSpans = document.querySelectorAll('#review-rating-stars .star-interactive');
  
  starsSpans.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}

function setupStarHoverEffects() {
  const starsSpans = document.querySelectorAll('#review-rating-stars .star-interactive');
  starsSpans.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
      starsSpans.forEach((s, idx) => {
        if (idx <= index) {
          s.classList.add('hovered');
        } else {
          s.classList.remove('hovered');
        }
      });
    });
    star.addEventListener('mouseout', () => {
      starsSpans.forEach(s => s.classList.remove('hovered'));
    });
  });
}

function submitProductReview(e) {
  e.preventDefault();
  
  const productId = state.activeDetailProductId;
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  const username = document.getElementById('review-username').value.trim();
  const comment = document.getElementById('review-comment').value.trim();

  if (!username || !comment) return;

  // Append review
  p.reviews.push({
    user: username,
    rating: activeReviewRating,
    text: comment
  });

  // Calculate new average
  const totalStarsSum = p.reviews.reduce((sum, r) => sum + r.rating, 0);
  p.rating = Number((totalStarsSum / p.reviews.length).toFixed(1));

  // Save database to local storage
  saveStateToLocalStorage();

  // Re-render UI
  document.getElementById('detail-modal-rating-count').innerText = `${p.rating} (${p.reviews.length} reviews)`;
  updateModalAverageStarsDisplay(p.rating);
  renderModalReviewsList(p.reviews);
  renderProducts(); // Refresh catalog ratings

  // Reset form
  document.getElementById('write-review-form').reset();
  setWriteReviewRating(5);
  
  showCartAddSuccessToast("Review submitted successfully");
}

// 9. WISHLIST MANAGEMENT
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();

  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
  } else {
    state.wishlist.push(productId);
  }

  saveStateToLocalStorage();
  updateHeaderBadges();
  renderProducts();
  renderWishlist();
}

function renderWishlist() {
  const container = document.getElementById('wishlist-items-container');
  if (!container) return;
  container.innerHTML = '';

  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-box" style="grid-column: 1 / -1;">
        <i data-lucide="heart" class="empty-icon" style="font-size: 32px; display: block; margin: 0 auto 12px auto;"></i>
        <h3>Your Wishlist is Empty</h3>
        <p>Save your favorite items here while building your organic Indian routine.</p>
        <br>
        <button class="btn btn-primary" onclick="navigateTo('shop')">Explore Shop</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  state.wishlist.forEach(id => {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    const card = document.createElement('div');
    card.className = 'product-card';
    const imageHTML = p.image 
      ? `<img class="prod-svg-graphic" src="${p.image}" alt="${p.name}" style="border-radius:var(--border-radius-sm); object-fit:cover;">`
      : getProductSVG(p.type, p.color);

    card.innerHTML = `
      <div class="product-img-wrapper">
        ${imageHTML}
        <button class="wishlist-heart-btn wishlisted" onclick="toggleWishlist('${p.id}', event)">
          <i data-lucide="heart"></i>
        </button>
      </div>
      <div class="product-details">
        <div class="prod-meta">
          <span class="cat-badge">${capitalize(p.category)}</span>
        </div>
        <h3 class="prod-title">${p.name}</h3>
        <div class="prod-price-area">
          <span class="price-val" style="font-size:16px; color:var(--text-dark); font-weight:600;">₹${p.priceFull}</span>
          <button class="btn btn-primary btn-sm" onclick="addWishlistItemToCart('${p.id}')">Add to Cart</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
}

function addWishlistItemToCart(id) {
  addProductToCart(id, 'full');
}

// 10. CART SYSTEM
function addProductToCart(productId, size = null) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  let chosenSize = size;
  if (!chosenSize) {
    const card = document.getElementById(`prod-${productId}`);
    if (card) {
      const isMiniActive = card.querySelectorAll('.size-option-btn')[1].classList.contains('active');
      chosenSize = isMiniActive ? 'mini' : 'full';
    } else {
      chosenSize = 'full';
    }
  }

  const price = chosenSize === 'full' ? p.priceFull : p.priceMini;

  const existing = state.cart.find(item => item.id === productId && item.size === chosenSize && !item.isCombo);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: p.id,
      name: p.name,
      size: chosenSize,
      price: price,
      quantity: 1,
      type: p.type,
      color: p.color,
      isCombo: false,
      image: p.image
    });
  }

  saveStateToLocalStorage();
  updateHeaderBadges();
  showCartAddSuccessToast(p.name);
}

function updateHeaderBadges() {
  const cartBadge = document.getElementById('cart-badge');
  const wishlistBadge = document.getElementById('wishlist-badge');

  if (cartBadge) {
    const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.innerText = totalQty;
  }
  if (wishlistBadge) {
    wishlistBadge.innerText = state.wishlist.length;
  }
}

function changeCartQty(index, amount) {
  const item = state.cart[index];
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    state.cart.splice(index, 1);
  }

  saveStateToLocalStorage();
  updateHeaderBadges();
  renderCart();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  saveStateToLocalStorage();
  updateHeaderBadges();
  renderCart();
}

// 11. CUSTOM COMBO BOX BUILDER
function renderComboCatalog() {
  const container = document.getElementById('builder-products-container');
  if (!container) return;
  container.innerHTML = '';

  products.forEach(p => {
    const activePrice = state.comboVersion === 'mini' ? p.priceMini : p.priceFull;

    const card = document.createElement('div');
    card.className = 'builder-prod-card';
    
    const imageHTML = p.image 
      ? `<img class="builder-svg" src="${p.image}" alt="${p.name}" style="border-radius:4px; object-fit:cover;">`
      : getProductSVG(p.type, p.color);

    card.innerHTML = `
      <div class="builder-svg">
        ${imageHTML}
      </div>
      <h4>${p.name}</h4>
      <span class="builder-price">₹${activePrice}</span>
      <button class="btn btn-secondary btn-sm" onclick="addComboSlot('${p.id}')">
        <i data-lucide="plus"></i> Add
      </button>
    `;
    container.appendChild(card);
  });

  lucide.createIcons();
}

function setBuilderVersion(version) {
  state.comboVersion = version;
  document.getElementById('btn-select-mini').classList.toggle('active', version === 'mini');
  document.getElementById('btn-select-full').classList.toggle('active', version === 'full');
  state.comboSlots = [null, null, null, null, null];
  renderComboCatalog();
  updateComboSlotsUI();
}

function addComboSlot(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  const emptyIndex = state.comboSlots.findIndex(slot => slot === null);
  if (emptyIndex > -1) {
    state.comboSlots[emptyIndex] = {
      id: p.id,
      name: p.name,
      price: state.comboVersion === 'mini' ? p.priceMini : p.priceFull,
      type: p.type,
      color: p.color,
      image: p.image
    };
    updateComboSlotsUI();
  } else {
    alert("Your Combo Box is full! Remove an item to add another.");
  }
}

function removeComboSlot(index) {
  state.comboSlots[index] = null;
  updateComboSlotsUI();
}

function updateComboSlotsUI() {
  const slotsContainer = document.getElementById('combo-slots');
  if (!slotsContainer) return;
  slotsContainer.innerHTML = '';

  let filledCount = 0;
  let subtotal = 0;

  state.comboSlots.forEach((slot, index) => {
    const slotEl = document.createElement('div');
    
    if (slot) {
      filledCount++;
      subtotal += slot.price;
      slotEl.className = 'slot filled';
      
      const imgHTML = slot.image 
        ? `<img class="slot-img" src="${slot.image}" alt="${slot.name}" style="border-radius:4px; object-fit:cover;">`
        : `<div class="slot-img">${getProductSVG(slot.type, slot.color)}</div>`;

      slotEl.innerHTML = `
        ${imgHTML}
        <button class="btn-remove-slot" onclick="removeComboSlot(${index})">×</button>
      `;
    } else {
      slotEl.className = 'slot';
      slotEl.innerHTML = `<i data-lucide="plus" style="color: var(--light-rose); width:14px;"></i>`;
    }

    slotsContainer.appendChild(slotEl);
  });

  const discountRate = state.comboVersion === 'mini' ? 0.20 : 0.15;
  const isComplete = (filledCount === 5);
  const discountVal = isComplete ? Math.round(subtotal * discountRate) : 0;
  const totalVal = subtotal - discountVal;

  document.getElementById('combo-count-label').innerText = `${filledCount} / 5`;
  document.getElementById('combo-subtotal').innerText = `₹${subtotal}`;
  document.getElementById('combo-discount').innerText = `-₹${discountVal}`;
  document.getElementById('combo-total').innerText = `₹${totalVal}`;

  const btnAdd = document.getElementById('btn-add-combo-to-cart');
  const tipMsg = document.getElementById('combo-tip-msg');

  if (isComplete) {
    btnAdd.removeAttribute('disabled');
    tipMsg.innerText = `Elegant choice! Unlocked ${discountRate * 100}% combo discount!`;
    tipMsg.style.color = 'var(--success-green)';
  } else {
    btnAdd.setAttribute('disabled', 'true');
    tipMsg.innerText = `Add ${5 - filledCount} more product(s) to unlock the combo discount!`;
    tipMsg.style.color = 'var(--text-muted)';
  }

  lucide.createIcons();
}

function addComboToCart() {
  const filledSlots = state.comboSlots.filter(s => s !== null);
  if (filledSlots.length !== 5) return;

  const subtotal = filledSlots.reduce((sum, s) => sum + s.price, 0);
  const discountRate = state.comboVersion === 'mini' ? 0.20 : 0.15;
  const discount = Math.round(subtotal * discountRate);
  const finalPrice = subtotal - discount;

  state.cart.push({
    id: `combo-${Date.now()}`,
    name: `Tryo Combo Box (${state.comboVersion === 'mini' ? 'Mini Trials' : 'Full Size'})`,
    size: state.comboVersion,
    price: finalPrice,
    quantity: 1,
    isCombo: true,
    comboItems: filledSlots.map(s => s.name),
    color: '#e5b3b8',
    type: 'jar',
    image: ''
  });

  state.comboSlots = [null, null, null, null, null];
  updateComboSlotsUI();
  saveStateToLocalStorage();
  updateHeaderBadges();
  
  showCartAddSuccessToast("Tryo Combo Box");
  navigateTo('cart');
}

// 12. CART VIEW RENDERER
function renderCart() {
  const itemsContainer = document.getElementById('cart-items-container');
  if (!itemsContainer) return;
  itemsContainer.innerHTML = '';

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-box">
        <i data-lucide="shopping-cart" class="empty-icon" style="font-size: 32px; display: block; margin: 0 auto 12px auto;"></i>
        <h3>Your Cart is Empty</h3>
        <p>Explore our catalog to start building your eco-friendly, clinical routine.</p>
        <br>
        <button class="btn btn-primary" onclick="navigateTo('shop')">Start Shopping</button>
      </div>
    `;
    document.getElementById('cart-subtotal').innerText = '₹0';
    document.getElementById('cart-combo-discount-row').classList.add('hidden');
    document.getElementById('cart-total').innerText = '₹0';
    lucide.createIcons();
    return;
  }

  let cartSubtotal = 0;

  state.cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    cartSubtotal += itemTotal;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    
    const graphicSVG = item.image 
      ? `<img class="cart-item-svg" src="${item.image}" alt="${item.name}" style="border-radius:4px; object-fit:cover;">`
      : getProductSVG(item.type || 'jar', item.color || '#b07077');

    let itemMetaLabel = '';
    if (item.isCombo) {
      itemMetaLabel = `Contains: ${item.comboItems.join(', ')}`;
    } else {
      itemMetaLabel = item.size === 'full' ? 'Full Size' : '1-Week Trial Tester';
    }

    itemEl.innerHTML = `
      <div class="cart-item-svg">${graphicSVG}</div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span class="item-meta">${itemMetaLabel}</span>
      </div>
      <div class="cart-item-controls">
        <button class="cart-qty-btn" onclick="changeCartQty(${index}, -1)">-</button>
        <span class="cart-qty-val">${item.quantity}</span>
        <button class="cart-qty-btn" onclick="changeCartQty(${index}, 1)">+</button>
      </div>
      <div class="cart-item-price">₹${itemTotal}</div>
      <button class="cart-item-remove" onclick="removeCartItem(${index})"><i data-lucide="trash-2"></i></button>
    `;

    itemsContainer.appendChild(itemEl);
  });

  document.getElementById('cart-subtotal').innerText = `₹${cartSubtotal}`;
  document.getElementById('cart-total').innerText = `₹${cartSubtotal}`;
  
  lucide.createIcons();
}

// 13. CHECKOUT VIEW RENDERER & SIMULATED PAYMENTS
function checkoutCart() {
  if (state.cart.length === 0) {
    alert("Your cart is empty! Add products before checking out.");
    return;
  }
  
  if (!state.currentUser) {
    openProfileOrLogin();
    return;
  }

  navigateTo('checkout');
}

function renderCheckoutSummary() {
  const basket = document.getElementById('checkout-basket-items');
  if (!basket) return;
  basket.innerHTML = '';
  let subtotal = 0;

  state.cart.forEach(item => {
    const cost = item.price * item.quantity;
    subtotal += cost;

    const row = document.createElement('div');
    row.className = 'checkout-basket-item';
    row.innerHTML = `
      <span>${item.name} (${item.quantity}x)</span>
      <span>₹${cost}</span>
    `;
    basket.appendChild(row);
  });

  document.getElementById('checkout-subtotal').innerText = `₹${subtotal}`;
  document.getElementById('checkout-total').innerText = `₹${subtotal}`;
  document.getElementById('checkout-pay-total').innerText = subtotal;

  // Generate real dynamic UPI QR code
  const upiString = `upi://pay?pa=tryo@ybl&pn=Tryo%20Skincare&am=${subtotal}&cu=INR`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(upiString)}&color=b07077`;
  const qrImage = document.getElementById('upi-qr-image');
  if (qrImage) qrImage.src = qrUrl;

  // Reset to card method on each new checkout visit
  selectPaymentMethod('card');
}

// Payment method tab switcher
let activePaymentMethod = 'card';
function selectPaymentMethod(method) {
  activePaymentMethod = method;

  // Toggle tab button active states
  ['card', 'upi', 'cod'].forEach(m => {
    document.getElementById(`pm-${m}`).classList.toggle('active', m === method);
    document.getElementById(`panel-${m}`).classList.toggle('hidden', m !== method);
  });

  // Update pay button label
  const label = document.getElementById('pay-btn-label');
  if (method === 'cod') {
    label.innerText = 'Place Order (Pay on Delivery)';
  } else if (method === 'upi') {
    label.innerText = 'Confirm UPI Payment';
  } else {
    label.innerText = 'Authorize & Pay';
  }

  lucide.createIcons();
}

function processPayment(e) {
  e.preventDefault();

  const customerName = document.getElementById('shipping-name').value.trim();
  const customerEmail = state.currentUser ? state.currentUser.email : 'guest@example.com';
  const totalAmount = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // No local UI validation needed for prototype.

  const finalizeOrder = () => {
    const loadingOverlay = document.getElementById('payment-loading-screen');
    loadingOverlay.classList.remove('hidden');

    setTimeout(() => {
      loadingOverlay.classList.add('hidden');
      renderSuccessReceipt();

      const orderData = {
        orderId: 'TR-' + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
        timestamp: Date.now(),
        paymentMethod: activePaymentMethod === 'card' ? '💳 Card (Razorpay)' : activePaymentMethod === 'upi' ? '📱 UPI (Razorpay)' : '🏠 Cash on Delivery',
        customerName: customerName,
        customerEmail: customerEmail,
        address: `${document.getElementById('shipping-address').value.trim()}, ${document.getElementById('shipping-city').value.trim()}`,
        items: state.cart.map(item => ({ name: item.name, quantity: item.quantity, size: item.size, price: item.price })),
        total: totalAmount,
        status: activePaymentMethod === 'cod' ? 'Pending (COD)' : 'Paid'
      };

      state.orders.unshift(orderData);
      saveStateToLocalStorage();

      if (typeof cloudSaveOrder === 'function') {
        cloudSaveOrder(orderData);
      }
      localStorage.setItem('tryo_orders', JSON.stringify(state.orders));

      state.cart = [];
      saveStateToLocalStorage();
      updateHeaderBadges();

      document.getElementById('payment-success-screen').classList.remove('hidden');
      document.getElementById('payment-form').reset();
      
      // Trigger Order Confirmation Email!
      sendOrderEmail(orderData, 'confirmation');
    }, 1000);
  };

  // Trigger Razorpay ONLY for Card payments
  if (activePaymentMethod === 'card') {
    // Check if Razorpay is loaded
    if (typeof Razorpay !== 'undefined') {
      var options = {
        "key": "rzp_test_Tdz3T845NCiob7", // Razorpay Test Key
        "amount": totalAmount * 100, // Amount in paise
        "currency": "INR",
        "name": "Tryo Organic",
        "description": "Eco-friendly Skincare",
        "image": "https://ui-avatars.com/api/?name=Tryo&background=b07077&color=fff",
        "handler": function (response) {
          console.log("Razorpay Success:", response);
          finalizeOrder();
        },
        "prefill": {
          "name": customerName,
          "email": customerEmail,
          "contact": "9999999999"
        },
        "theme": {
          "color": "#b07077"
        }
      };

      try {
        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response){
          alert("Payment Failed: " + response.error.description);
        });
        rzp1.open();

      } catch (e) {
        console.error("Razorpay Error:", e);
        alert("Razorpay failed to initialize. Check console for details.");
      }
    } else {
      alert("Razorpay is not loaded correctly. Please check your internet connection.");
    }
  } else {
    // UPI and Cash on Delivery (Manual/Simulated flows)
    finalizeOrder();
  }
}

// Function to send emails (Confirmation or Status Alerts) using EmailJS
function sendOrderEmail(orderData, type) {
  const emailParams = {
    email: orderData.customerEmail, // Sent just in case they use {{email}}
    name: orderData.customerName,
    title: `Order ${orderData.orderId} Confirmed`,
    time: new Date().toLocaleString(),
    message: type === 'confirmation' 
      ? `Thank you for your order! Your payment method: ${orderData.paymentMethod}. Total: ₹${orderData.total}.`
      : `Your order status has been updated to: ${orderData.status}.`
  };

  if (typeof emailjs !== 'undefined') {
    // Requires setting up a Service ID and Template ID in EmailJS
    emailjs.send("service_d5w4qrw", "template_5n9hbcw", emailParams)
      .then(() => {
        console.log(`Email sent successfully to ${orderData.customerEmail}`);
      })
      .catch(err => {
        console.error("EmailJS Error:", err);
        alert("EmailJS Failed: " + (err.text || err.message || JSON.stringify(err)) + "\n\nPlease check your EmailJS dashboard settings (e.g., ensure Gmail is connected).");
      });
  } else {
    // Fallback simulation for prototype
    console.log("Simulating Email Sending:", emailParams);
    setTimeout(() => {
      console.log(`[Simulated Email] Sent to ${orderData.customerEmail}`);
    }, 1500);
  }
}

function renderSuccessReceipt() {

  const box = document.getElementById('receipt-bill-box');
  if (!box) return;

  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemsRows = state.cart.map(item => `
    <div class="receipt-item-row">
      <span>${item.name} (${item.quantity}x)</span>
      <span>₹${item.price * item.quantity}</span>
    </div>
  `).join('');

  const methodLabel = activePaymentMethod === 'card' ? '💳 Card' : activePaymentMethod === 'upi' ? '📱 UPI' : '🏠 Cash on Delivery';
  const statusLabel = activePaymentMethod === 'cod' ? '⏳ Pay on delivery' : '✅ Paid';
  const totalLabel = activePaymentMethod === 'cod' ? 'Amount to Pay on Delivery:' : 'Total Paid:';

  box.innerHTML = `
    <div class="receipt-header">
      <h3 class="receipt-title">Tryo Invoice</h3>
      <p style="font-size: 11px; color: var(--text-muted);">Tryo Organic Wellness &bull; Biodegradable packaging</p>
    </div>
    ${itemsRows}
    <hr style="margin: 12px 0; border: none; border-top: 1px dashed var(--pale-rose);">
    <div class="receipt-item-row" style="font-weight: 600; font-size: 14px; color: var(--text-dark);">
      <span>${totalLabel}</span>
      <span>₹${total}</span>
    </div>
    <div class="receipt-item-row" style="font-size: 12px; margin-top: 6px;">
      <span style="color:var(--text-muted);">Payment Method:</span>
      <span style="font-weight:600;">${methodLabel}</span>
    </div>
    <div class="receipt-item-row" style="font-size: 12px;">
      <span style="color:var(--text-muted);">Status:</span>
      <span style="font-weight:600; color: var(--success-green);">${statusLabel}</span>
    </div>
    <p style="font-size: 11px; color: var(--success-green); text-align: center; margin-top: 15px; font-weight: 600;">
      🍃 Eco-friendly packaging dispatching soon!
    </p>
  `;
}

// 14. WEEK-BY-WEEK CAMERA SCANNER SIMULATOR ENGINE
let activeCategory = 'all';
let weeklyFaceRemarks = {};
let weeklyHairRemarks = {};

function generateDynamicScanResults() {
  const baseRedness = Math.floor(Math.random() * 30) + 60; // 60-90
  const baseMoisture = Math.floor(Math.random() * 20) + 20; // 20-40
  const baseElasticity = Math.floor(Math.random() * 20) + 40; // 40-60

  weeklyFaceRemarks = {
    1: {
      remark: `Week 1: Imbalances detected. Redness scale ${baseRedness}% (High). Skin elasticity moderate. Recommended routine: Saffron Glow Face Serum.`,
      moisture: baseMoisture, redness: baseRedness, elasticity: baseElasticity,
      filter: "sepia(0.2) saturate(1.1) contrast(0.9) brightness(0.95)"
    },
    2: {
      remark: `Week 2: Active cells rebuilding. Redness scales down to ${Math.floor(baseRedness*0.7)}%. Skin elasticity improving.`,
      moisture: Math.floor(baseMoisture + 15), redness: Math.floor(baseRedness*0.7), elasticity: Math.floor(baseElasticity + 10),
      filter: "sepia(0.1) saturate(1.05) contrast(0.95) brightness(0.98)"
    },
    3: {
      remark: `Week 3: Epidermal elasticity restored. Skin hydration peaks at ${Math.floor(baseMoisture + 35)}% for a supple texture.`,
      moisture: Math.floor(baseMoisture + 35), redness: Math.floor(baseRedness*0.3), elasticity: Math.floor(baseElasticity + 20),
      filter: "saturate(1.0) contrast(1.0) brightness(1.0)"
    },
    4: {
      remark: "Week 4: Radiance peaks! Skin barrier completely healed and plump. Glow locked in.",
      moisture: Math.min(99, baseMoisture + 55), redness: Math.max(2, Math.floor(baseRedness*0.1)), elasticity: Math.min(99, baseElasticity + 35),
      filter: "brightness(1.03) saturate(1.03) contrast(1.02)"
    }
  };

  const hairFrizz = Math.floor(Math.random() * 30) + 60;
  const hairMoist = Math.floor(Math.random() * 20) + 30;

  weeklyHairRemarks = {
    1: {
      remark: `Week 1: Scalp cuticle friction high. Frizz scale ${hairFrizz}%. Recommended routine: Bhringraj Shampoo & Rosemary Oil.`,
      moisture: hairMoist, redness: hairFrizz, elasticity: 40,
      filter: "saturate(0.85) contrast(0.9) sepia(0.05)"
    },
    2: {
      remark: `Week 2: Cuticle scale cohesion improving. Frizz reduced to ${Math.floor(hairFrizz*0.6)}%.`,
      moisture: Math.floor(hairMoist + 15), redness: Math.floor(hairFrizz*0.6), elasticity: 58,
      filter: "saturate(0.95) contrast(0.95)"
    },
    3: {
      remark: `Week 3: Frizz dramatically reduced. Structural moisture content scales up to ${Math.floor(hairMoist + 35)}%.`,
      moisture: Math.floor(hairMoist + 35), redness: Math.floor(hairFrizz*0.3), elasticity: 74,
      filter: "saturate(1.0) brightness(1.01)"
    },
    4: {
      remark: "Week 4: Silk radiance peaked! Scalp sebum pH balance perfectly organic.",
      moisture: Math.min(99, hairMoist + 55), redness: Math.max(2, Math.floor(hairFrizz*0.1)), elasticity: 92,
      filter: "brightness(1.03) saturate(1.05)"
    }
  };
}

function setScanMode(mode) {
  state.scanMode = mode;
  document.getElementById('btn-scan-face').classList.toggle('active', mode === 'face');
  document.getElementById('btn-scan-hair').classList.toggle('active', mode === 'hair');
  document.getElementById('hud-mode-text').innerText = `MODE: ${mode.toUpperCase()}`;

  // Reset custom image on mode switch
  state.customUploadedImage = null;
  const fallbackImg = document.getElementById('fallback-img');
  fallbackImg.src = mode === 'face' ? 'assets/scan_face.jpg' : 'assets/scan_hair.jpg';
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      state.customUploadedImage = e.target.result;
      document.getElementById('fallback-img').src = e.target.result;
      // Also stop webcam if active
      if (state.isRealCamActive) toggleRealCamera();
    };
    reader.readAsDataURL(file);
  }
}

function triggerScanningSequence() {
  const streamContainer = document.querySelector('.scanner-stream-container');
  const progressBox = document.getElementById('scan-progress-box');
  const statusText = document.getElementById('hud-status-text');
  const emptyState = document.getElementById('scanner-empty-state');
  const resultsBox = document.getElementById('scanner-results-box');
  
  streamContainer.classList.add('scanning');
  progressBox.classList.remove('hidden');
  statusText.innerText = 'SCANNING...';

  const steps = [
    "Aligning tracking markers...",
    "Scanning hydration sensors...",
    "Verifying scalp follicles...",
    "Calibrating organic clinical data...",
    "Finalizing bio-mapping ledger..."
  ];

  let currentStep = 0;
  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      document.getElementById('analysis-step-text').innerText = steps[currentStep];
      currentStep++;
    }
  }, 600);

  // Generate unique randomized results for this specific scan!
  generateDynamicScanResults();

  setTimeout(() => {
    clearInterval(interval);
    streamContainer.classList.remove('scanning');
    progressBox.classList.add('hidden');
    statusText.innerText = 'SYS_LOCKED';

    emptyState.classList.add('hidden');
    resultsBox.classList.remove('hidden');

    state.scanResult = { mode: state.scanMode, scanned: true };
    
    evolutionWeek = 1;
    document.getElementById('week-range-slider').value = 1;
    changeEvolutionWeek(1);
  }, 3500);
}

function changeEvolutionWeek(week) {
  evolutionWeek = parseInt(week);
  document.getElementById('week-badge-text').innerText = evolutionWeek;

  const mode = state.scanMode;
  const data = mode === 'face' ? weeklyFaceRemarks[evolutionWeek] : weeklyHairRemarks[evolutionWeek];
  
  document.getElementById('remark-text-content').innerText = data.remark;

  const evoImg = document.getElementById('evolution-img');
  evoImg.src = state.customUploadedImage || (mode === 'face' ? 'assets/scan_face.jpg' : 'assets/scan_hair.jpg');
  evoImg.style.filter = data.filter;

  const glowOverlay = document.getElementById('evolution-glow');
  if (evolutionWeek === 4) {
    glowOverlay.style.boxShadow = "inset 0 0 30px rgba(176, 112, 119, 0.25)";
    glowOverlay.style.background = "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(176,112,119,0.08) 100%)";
  } else {
    glowOverlay.style.boxShadow = "none";
    glowOverlay.style.background = "none";
  }

  document.getElementById('stat-moisture').style.width = `${data.moisture}%`;
  document.getElementById('val-moisture').innerText = `${data.moisture}%`;

  document.getElementById('stat-redness').style.width = `${data.redness}%`;
  document.getElementById('val-redness').innerText = `${data.redness}%`;
  
  const labelRedness = document.querySelectorAll('.biome-stat')[1].querySelector('.stat-name');
  labelRedness.innerText = mode === 'face' ? 'Redness Level' : 'Frizz Factor';

  document.getElementById('stat-elasticity').style.width = `${data.elasticity}%`;
  document.getElementById('val-elasticity').innerText = `${data.elasticity}%`;

  renderScannerRecommendations();
}

function renderScannerRecommendations() {
  const container = document.getElementById('rec-products-container');
  if (!container) return;
  container.innerHTML = '';
  
  // Get all products matching the scan mode
  let candidates = products.filter(p => p.category === state.scanMode);
  if (candidates.length === 0) candidates = products; // fallback
  
  // Shuffle array and pick 3
  candidates.sort(() => 0.5 - Math.random());
  const recItems = candidates.slice(0, 3);

  recItems.forEach(p => {
    const itemEl = document.createElement('div');
    itemEl.className = 'rec-prod-item';
    itemEl.onclick = () => {
      navigateTo('shop');
      const target = document.getElementById(`prod-${p.id}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.outline = '2px solid var(--primary-rose)';
        setTimeout(() => target.style.outline = 'none', 3000);
      }
    };

    const imageHTML = p.image 
      ? `<img src="${p.image}" alt="${p.name}" style="width:40px; height:40px; border-radius:4px; object-fit:cover; margin-bottom:4px;">`
      : getProductSVG(p.type, p.color);

    itemEl.innerHTML = `
      ${imageHTML}
      <h5>${p.name}</h5>
    `;
    container.appendChild(itemEl);
  });
}

// 15. REAL WEBCAM SOURCE TOGGLE
function toggleRealCamera() {
  const video = document.getElementById('webcam-video');
  const fallback = document.getElementById('camera-fallback');
  const btnToggle = document.getElementById('btn-toggle-camera-source');

  if (state.isRealCamActive) {
    if (state.webcamStream) {
      state.webcamStream.getTracks().forEach(track => track.stop());
    }
    state.isRealCamActive = false;
    state.webcamStream = null;

    video.classList.add('hidden');
    fallback.classList.remove('hidden');
    btnToggle.innerHTML = `<i data-lucide="video"></i> Use Real Webcam`;
  } else {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
      .then(stream => {
        state.isRealCamActive = true;
        state.webcamStream = stream;
        video.srcObject = stream;

        video.classList.remove('hidden');
        fallback.classList.add('hidden');
        btnToggle.innerHTML = `<i data-lucide="video-off"></i> Use Graphic Fallback`;
      })
      .catch(err => {
        alert("Camera permission denied or camera not found. Showing gorgeous graphic fallback mode instead!");
        console.warn("Camera error:", err);
      });
  }
  lucide.createIcons();
}

function renderHistory() {
  const list = document.getElementById('purchase-history-list');
  if (!list) return;

  if (!state.currentUser) {
    list.innerHTML = `
      <div class="cart-empty-box" style="border-style: solid; text-align: center; padding: 40px 20px;">
        <i data-lucide="lock" class="empty-icon" style="margin-bottom: 10px;"></i>
        <h4>Sign In Required</h4>
        <p>Please log in to view your cross-device purchase history and live delivery tracking.</p>
        <br>
        <button class="btn btn-primary" onclick="openProfileOrLogin()">Log In / Sign Up</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  list.innerHTML = '<p style="text-align:center; padding: 30px; color: var(--text-muted);">Fetching latest order updates...</p>';

  if (typeof cloudLoadOrders === 'function') {
    cloudLoadOrders(allCloudOrders => {
      // 1. Sync any local orders with cloud updates
      state.orders.forEach(localOrder => {
        const match = allCloudOrders.find(co => co.orderId === localOrder.orderId);
        if (match) Object.assign(localOrder, match);
      });
      saveStateToLocalStorage();

      // 2. Filter for display based on email (allow older orders without email so they aren't lost)
      const userEmail = state.currentUser.email;
      const displayOrders = allCloudOrders.filter(o => o.customerEmail === userEmail || !o.customerEmail);
      
      renderHistoryList(displayOrders, list);
    });
  } else {
    // Fallback to local
    renderHistoryList(state.orders, list);
  }
}

function renderHistoryList(ordersToDisplay, listElement) {
  if (ordersToDisplay.length === 0) {
    listElement.innerHTML = `
      <div class="cart-empty-box" style="border-style: solid; text-align: center; padding: 40px 20px;">
        <i data-lucide="receipt" class="empty-icon" style="margin-bottom: 10px;"></i>
        <h4>No Orders Found</h4>
        <p>Your past orders will appear here after checkout. Try adding products to cart and placing an order!</p>
        <br>
        <button class="btn btn-primary" onclick="navigateTo('shop')">Start Shopping</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  listElement.innerHTML = '';
  ordersToDisplay.forEach(order => {
    const card = document.createElement('div');
    card.className = 'history-card';
    
    const itemsLines = order.items.map(item => `
      <div class="receipt-item-row" style="margin-bottom: 4px;">
        <span>${item.name} (${item.quantity}x) &mdash; ${item.size === 'mini' ? 'Mini Trial' : 'Full Size'}</span>
        <span>₹${item.price * item.quantity}</span>
      </div>
    `).join('');

    const method = order.paymentMethod || '💳 Card';
    const status = order.status || 'Paid';
    const statusColor = status.includes('COD') || status.includes('Pending') ? '#e07b3a' : 'var(--success-green)';
    const statusIcon = status.includes('COD') || status.includes('Pending') ? '⏳' : '✅';

    const trackingHtml = order.trackingLocation ? `
      <div style="background: var(--champagne); padding: 10px; border-radius: var(--border-radius-sm); margin-top: 10px; font-size: 11px;">
        <strong style="display:block; color:var(--text-dark); margin-bottom:4px;">📍 ${order.trackingLocation}</strong>
        ${order.courier ? `<span style="color:var(--text-muted);">📦 ${order.courier} &nbsp;|&nbsp; AWB: ${order.trackingId || '—'}</span><br>` : ''}
        ${order.deliveryDate ? `<span style="color:var(--text-muted);">🗓 Est. Delivery: ${order.deliveryDate}</span>` : ''}
      </div>
    ` : '';

    const noteHtml = order.retailerNote ? `
      <div style="background: #fff8e1; border: 1px solid #ffe082; border-radius: var(--border-radius-sm); padding: 8px 10px; font-size: 11px; color: #5d4037; margin-top: 8px; font-style: italic;">
        💬 <strong>Message from Tryo:</strong> ${order.retailerNote}
      </div>
    ` : '';

    card.innerHTML = `
      <div class="history-card-header">
        <div>
          <h4>Order #${order.orderId}</h4>
          <span class="history-date">${order.date}</span>
        </div>
        <span class="order-status-badge" style="background: ${statusColor}22; color: ${statusColor}; border: 1px solid ${statusColor}44;">
          ${statusIcon} ${status}
        </span>
      </div>
      <div class="history-card-items">
        ${itemsLines}
      </div>
      ${trackingHtml}
      ${noteHtml}
      <hr style="border: none; border-top: 1px dashed var(--pale-rose); margin: 12px 0 8px;">
      <div class="history-card-footer">
        <span style="font-size:12px; color:var(--text-muted);">📦 Free Eco Shipping &nbsp;|&nbsp; ${method}</span>
        <span style="color: var(--text-dark); font-size:14px; font-weight: 600;">₹${order.total}</span>
      </div>
    `;
    listElement.appendChild(card);
  });

  lucide.createIcons();
}

// 17. LOCAL STORAGE HELPERS
function saveStateToLocalStorage() {
  localStorage.setItem('tryo_currentUser', JSON.stringify(state.currentUser));
  localStorage.setItem('tryo_cart', JSON.stringify(state.cart));
  localStorage.setItem('tryo_wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('tryo_orders', JSON.stringify(state.orders));
  localStorage.setItem('tryo_products', JSON.stringify(products));
}

function loadStateFromLocalStorage() {
  try {
    const user = localStorage.getItem('tryo_currentUser');
    const cart = localStorage.getItem('tryo_cart');
    const wishlist = localStorage.getItem('tryo_wishlist');
    const orders = localStorage.getItem('tryo_orders');
    const savedProducts = localStorage.getItem('tryo_products');

    if (user) state.currentUser = JSON.parse(user);
    if (cart) state.cart = JSON.parse(cart);
    if (wishlist) state.wishlist = JSON.parse(wishlist);
    if (orders) state.orders = JSON.parse(orders);
    if (savedProducts) products = JSON.parse(savedProducts);

    updateUserUI();
  } catch (e) {
    console.warn("Local storage read warning:", e);
  }
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
