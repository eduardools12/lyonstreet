'use strict';

const WHATSAPP_NUMBER = '5511999999999';

const produtos = [
  {
    id: 1, codigo: 'VLR-F001',
    nome: 'Blusa Linho Suave',
    categoria: 'camisetas', genero: 'masculino',
    preco: 189, precoOriginal: null,
    imagem: 'img/polo.jpg',
    descricao: 'Blusa em linho com caimento fluido, perfeita para dias quentes. Tecido respirável e textura natural que proporciona máximo conforto ao longo do dia.',
    tamanhos: ['PP', 'P', 'M', 'G', 'GG'],
    novo: true, promocao: false,
  },
  {
    id: 2, codigo: 'VLR-F002',
    nome: 'Camisa Milan',
    categoria: 'camisetas', genero: 'masculino' ,
    preco: 180, precoOriginal: 250,
    imagem: 'img/milan.avif',
    descricao: 'Uma blusa muito popular de um dos times mais conhecidos do futebol.',
    tamanhos: ['PP', 'P', 'M', 'G'],
    novo: false, promocao: true,
  },
  {
    id: 3, codigo: 'VLR-F003',
    nome: 'Calça Cargo Preta',
    categoria: 'calças', genero: 'feminino',
    preco: 229, precoOriginal: null,
    imagem: 'img/cargo.jpg',
    descricao: 'Calça wide leg de alfaiataria com tecido de alta qualidade. Versatilidade e elegância para o ambiente corporativo e look casual de luxo.',
    tamanhos: ['36', '38', '40', '42', '44'],
    novo: false, promocao: false,
  },
  {
    id: 4, codigo: 'VLR-F004',
    nome: 'Calça estona Feminina',
    categoria: 'calças', genero: 'feminino',
    preco: 349, precoOriginal: 490,
    imagem: 'img/estona.jpg',
    descricao: 'Casaco oversized em tweed com botões dourados e forro interno. Uma peça atemporal que eleva qualquer look com sofisticação.',
    tamanhos: ['P', 'M', 'G'],
    novo: false, promocao: true,
  },
  {
    id: 5, codigo: 'VLR-F005',
    nome: 'Top Cropped Cetim',
    categoria: 'camisetas', genero: 'feminino',
    preco: 149, precoOriginal: null,
    imagem: 'images/top-cropped-cetim.jpg',
    descricao: 'Top cropped em cetim com alças finas e detalhe franzido na frente. Ideal para composições fashion com calça de alfaiataria ou saia midi.',
    tamanhos: ['PP', 'P', 'M', 'G'],
    novo: true, promocao: false,
  },
  {
    id: 6, codigo: 'VLR-F006',
    nome: 'Saia Plissada Midi',
    categoria: 'vestidos', genero: 'feminino',
    preco: 199, precoOriginal: 280,
    imagem: 'images/saia-plissada-midi.jpg',
    descricao: 'Saia plissada com movimento fluido e cintura elástica confortável. Disponível em várias cores, perfeita para ocasiões do dia e da noite.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    novo: false, promocao: true,
  },

  {
    id: 7, codigo: 'VLR-M001',
    nome: 'Camiseta Pima Cotton',
    categoria: 'camisetas', genero: 'masculino',
    preco: 129, precoOriginal: null,
    imagem: 'images/camiseta-pima-cotton.jpg',
    descricao: 'Camiseta de algodão Pima com corte slim e costura reforçada. Tecido macio ao toque com durabilidade superior e toque premium.',
    tamanhos: ['P', 'M', 'G', 'GG', 'XG'],
    novo: true, promocao: false,
  },
  {
    id: 8, codigo: 'VLR-M002',
    nome: 'Calça Chino Slim Fit',
    categoria: 'calças', genero: 'masculino',
    preco: 219, precoOriginal: 310,
    imagem: 'images/calca-chino-slim-fit.jpg',
    descricao: 'Calça chino slim fit com acabamento refinado e tecido stretch para maior mobilidade. Versátil para ambientes formais e looks casuais.',
    tamanhos: ['38', '40', '42', '44', '46'],
    novo: false, promocao: true,
  },
  {
    id: 9, codigo: 'VLR-M003',
    nome: 'Camisa Linho Oxford',
    categoria: 'camisetas', genero: 'masculino',
    preco: 189, precoOriginal: null,
    imagem: 'images/camisa-linho-oxford.jpg',
    descricao: 'Camisa de linho no estilo oxford com botões perolados e acabamento impecável. Leveza e frescor garantidos para o dia a dia.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    novo: false, promocao: false,
  },
  {
    id: 10, codigo: 'VLR-M004',
    nome: 'Jaqueta Jeans Vintage',
    categoria: 'casacos', genero: 'masculino',
    preco: 299, precoOriginal: 420,
    imagem: 'images/jaqueta-jeans-vintage.jpg',
    descricao: 'Jaqueta jeans lavagem vintage com detalhes desgastados autênticos. Um clássico reinventado para o guarda-roupa masculino moderno.',
    tamanhos: ['P', 'M', 'G', 'GG'],
    novo: false, promocao: true,
  },
  {
    id: 11, codigo: 'VLR-M005',
    nome: 'Bermuda Linho Italiano',
    categoria: 'calças', genero: 'masculino',
    preco: 169, precoOriginal: null,
    imagem: 'images/bermuda-linho-italiano.jpg',
    descricao: 'Bermuda em linho italiano com bolsos funcionais e cintura ajustável. Conforto máximo e estilo para os dias de calor.',
    tamanhos: ['38', '40', '42', '44', '46'],
    novo: true, promocao: false,
  },
  {
    id: 12, codigo: 'VLR-M006',
    nome: 'Moletom Fleece Premium',
    categoria: 'casacos', genero: 'masculino',
    preco: 239, precoOriginal: 320,
    imagem: 'images/moletom-fleece-premium.jpg',
    descricao: 'Moletom oversized em fleece premium com capuz e bolso canguru. Máximo conforto e estilo para os dias mais frios do ano.',
    tamanhos: ['M', 'G', 'GG', 'XG'],
    novo: false, promocao: true,
  },

  {
    id: 13, codigo: 'VLR-A001',
    nome: 'Cinto Couro Artesanal',
    categoria: 'acessórios', genero: 'acessorios',
    preco: 139, precoOriginal: null,
    imagem: 'images/cinto-couro-artesanal.jpg',
    descricao: 'Cinto em couro legítimo artesanal com fivela dourada. Cada peça é feita à mão pelos melhores artesãos, garantindo unicidade e qualidade.',
    tamanhos: ['Único'],
    novo: false, promocao: false,
  },
  {
    id: 14, codigo: 'VLR-A002',
    nome: 'Bolsa Tote Canvas',
    categoria: 'acessórios', genero: 'acessorios',
    preco: 179, precoOriginal: 250,
    imagem: 'images/bolsa-tote-canvas.jpg',
    descricao: 'Bolsa tote em canvas resistente com alças reforçadas de couro. Espaçosa e elegante para o uso diário, com bolso interno organizado.',
    tamanhos: ['Único'],
    novo: false, promocao: true,
  },
  {
    id: 15, codigo: 'VLR-A003',
    nome: 'Boné Aba Curva',
    categoria: 'acessórios', genero: 'acessorios',
    preco: 89, precoOriginal: null,
    imagem: 'images/bone-aba-curva.jpg',
    descricao: 'Boné de aba curva em algodão premium com bordado frontal exclusivo. Ajustável e extremamente confortável para o uso diário.',
    tamanhos: ['Único'],
    novo: true, promocao: false,
  },
  {
    id: 16, codigo: 'VLR-A004',
    nome: 'Lenço Seda Italiana',
    categoria: 'acessórios', genero: 'acessorios',
    preco: 119, precoOriginal: 180,
    imagem: 'images/lenco-seda-italiana.jpg',
    descricao: 'Lenço em seda italiana com estampa exclusiva e borda trabalhada. Extremamente versátil: use no pescoço, como lenço de bolso ou nos cabelos.',
    tamanhos: ['Único'],
    novo: false, promocao: true,
  },
];

let state = {
  section:      'all',
  category:     'all',
  maxPrice:     600,
  sort:         'default',
  selectedId:   null,
  cartCount:    0,
};

// UTILITÁRIOS
/**
 * Calcula o percentual de desconto de um produto.
 * @param {number} price
 * @param {number} originalPrice
 * @returns {number}
 */
function discountPct(price, originalPrice) {
  return Math.round((1 - price / originalPrice) * 100);
}

/**
 * Formata valor para BRL sem casas decimais quando inteiro.
 * @param {number} value
 * @returns {string}
 */
function formatBRL(value) {
  return `R$ ${value.toLocaleString('pt-BR')}`;
}

/**
 * Filtra a lista de produtos conforme o estado global.
 * @param {Function} sectionFilter
 * @returns {Array}
 */
function getFiltered(sectionFilter) {
  let list = produtos.filter(p => {
    const catOk   = state.category === 'all' || p.categoria === state.category;
    const priceOk = p.preco <= state.maxPrice;
    return sectionFilter(p) && catOk && priceOk;
  });

  if (state.sort === 'price-asc')  list.sort((a, b) => a.preco - b.preco);
  if (state.sort === 'price-desc') list.sort((a, b) => b.preco - a.preco);
  if (state.sort === 'discount')   list.sort((a, b) => {
    const da = a.precoOriginal ? discountPct(a.preco, a.precoOriginal) : 0;
    const db = b.precoOriginal ? discountPct(b.preco, b.precoOriginal) : 0;
    return db - da;
  });

  return list;
}

// RENDERIZAÇÃO
/**
 * Gera o HTML de um card de produto.
 * @param {Object} p - Produto
 * @returns {string}
 */
function cardHTML(p) {
  const pct = p.precoOriginal ? discountPct(p.preco, p.precoOriginal) : 0;

  const badge = p.promocao
    ? `<span class="badge-promo">-${pct}%</span>`
    : p.novo
      ? `<span class="badge-new">Novo</span>`
      : '';

  const pricesHTML = p.precoOriginal
    ? `<span class="price-now">${formatBRL(p.preco)}</span>
      <span class="price-was">${formatBRL(p.precoOriginal)}</span>
      <span class="price-off">-${pct}%</span>`
    : `<span class="price-now">${formatBRL(p.preco)}</span>`;

  return `
    <div class="col-6 col-md-4 col-xl-3">
      <div class="product-card" tabindex="0" role="button"
          aria-label="Ver detalhes de ${p.nome}"
          onclick="openModal(${p.id})"
          onkeydown="if(event.key==='Enter')openModal(${p.id})">
        <div class="product-thumb">
          <img src="${p.imagem}" alt="${p.nome}" class="product-card-img">
          ${badge}
          <div class="badge-wishlist" title="Favoritar" onclick="event.stopPropagation()">
            <i class="bi bi-heart"></i>
          </div>
        </div>
        <div class="product-body">
          <div class="product-cat-tag">${p.categoria}</div>
          <div class="product-name">${p.nome}</div>
          <div class="product-prices">${pricesHTML}</div>
        </div>
      </div>
    </div>`;
}

/**
 * Renderiza um grid de produtos em um container.
 * @param {string} gridId
 * @param {Array} items
 * @param {string} countId
 */
function renderGrid(gridId, items, countId) {
  const grid  = document.getElementById(gridId);
  const count = document.getElementById(countId);

  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-12">
        <div class="no-results">
          <span class="no-icon">🔍</span>
          <p>Nenhuma peça encontrada com estes filtros.</p>
        </div>
      </div>`;
  } else {
    grid.innerHTML = items.map(cardHTML).join('');
  }

  if (count) {
    count.textContent = items.length > 0
      ? `${items.length} peça${items.length !== 1 ? 's' : ''} encontrada${items.length !== 1 ? 's' : ''}`
      : '';
  }
}

/**
 * Re-renderiza todos os grids com base no estado atual.
 */
function renderAll() {
  renderGrid('all-grid',        getFiltered(() => true),                    'all-count');
  renderGrid('feminino-grid',   getFiltered(p => p.genero === 'feminino'),  'feminino-count');
  renderGrid('masculino-grid',  getFiltered(p => p.genero === 'masculino'), 'masculino-count');
  renderGrid('acessorios-grid', getFiltered(p => p.genero === 'acessorios'),'acessorios-count');
  renderGrid('promo-grid',      getFiltered(p => p.promocao),                'promo-count');
}

// NAVEGAÇÃO POR ABAS
/**
 * Exibe a seção escolhida e atualiza estado.
 * @param {string} section
 */
function showSection(section) {
  state.section = section;

  // Sections
  document.querySelectorAll('.store-section').forEach(el => el.classList.remove('active'));
  const target = document.getElementById(`${section}-section`);
  if (target) target.classList.add('active');

  // Tabs
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === section);
  });

  // Hero só aparece na aba "Tudo"
  const heroArea = document.getElementById('heroArea');
  if (heroArea) heroArea.style.display = section === 'all' ? '' : 'none';

  // Scroll para topo
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// FILTROS
/**
 * Atualiza o filtro de categoria.
 * @param {string} cat
 * @param {HTMLElement} btn
 */
function filterCategory(cat, btn) {
  state.category = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAll();
}

/**
 * Atualiza o filtro de preço.
 * @param {HTMLInputElement} input
 */
function filterPrice(input) {
  state.maxPrice = parseInt(input.value);
  const pct = ((state.maxPrice - 50) / (600 - 50)) * 100;
  input.style.setProperty('--pct', `${pct}%`);
  document.getElementById('priceDisplay').textContent = `até ${formatBRL(state.maxPrice)}`;
  renderAll();
}

/**
 * Atualiza a ordenação.
 * @param {string} value
 */
function sortProdutos(value) {
  state.sort = value;
  renderAll();
}

// MODAL
/**
 * Abre o modal de detalhe de um produto.
 * @param {number} id
 */
function openModal(id) {
  const p = produtos.find(x => x.id === id);
  if (!p) return;
  state.selectedId = id;

  const pct = p.precoOriginal ? discountPct(p.preco, p.precoOriginal) : 0;

  // Imagem / emoji
  const imgEl = document.getElementById('modalImg');
  imgEl.innerHTML = `<img src="${p.imagem}" alt="${p.nome}" class="img-fluid">`;
  if (p.promocao) {
    imgEl.innerHTML += `<span class="badge-promo" style="top:14px;left:14px;position:absolute">-${pct}%</span>`;
  } else if (p.novo) {
    imgEl.innerHTML += `<span class="badge-new" style="top:14px;left:14px;position:absolute">Novo</span>`;
  }

  // Textos
  document.getElementById('modalCat').textContent  = `${p.categoria.toUpperCase()} · ${p.genero.toUpperCase()}`;
  document.getElementById('modalName').textContent = p.nome;
  document.getElementById('modalCode').textContent = p.codigo;
  document.getElementById('modalDesc').textContent = p.descricao;

  // Preços
  const pricesEl = document.getElementById('modalPrices');
  if (p.precoOriginal) {
    pricesEl.innerHTML = `
      <span class="modal-price-now">${formatBRL(p.preco)}</span>
      <span class="modal-price-was">${formatBRL(p.precoOriginal)}</span>
      <span class="price-off">-${pct}%</span>`;
  } else {
    pricesEl.innerHTML = `<span class="modal-price-now">${formatBRL(p.preco)}</span>`;
  }

  // Tamanhos
  const sizesEl = document.getElementById('modalSizes');
  sizesEl.innerHTML = p.tamanhos.map((s, i) => `
    <button class="size-opt${i === 0 ? ' active' : ''}"
            onclick="selectSize(this)">${s}</button>
  `).join('');

  // Link WhatsApp
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no produto:\n*${p.nome}*\nCódigo: ${p.codigo}\nPreço: ${formatBRL(p.preco)}\n\nPoderia me dar mais informações?`
  );
  document.getElementById('whatsappLink').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  // Reset botão copiar
  const copyBtn = document.getElementById('copyCodeBtn');
  copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
  copyBtn.classList.remove('copied');

  // Abrir modal Bootstrap
  const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('productModal'));
  modal.show();
}

/**
 * Seleciona um tamanho no modal.
 * @param {HTMLElement} btn
 */
function selectSize(btn) {
  document.querySelectorAll('.size-opt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/**
 * Copia o código do produto para a área de transferência.
 */
function copyCode() {
  const p = produtos.find(x => x.id === state.selectedId);
  if (!p) return;

  navigator.clipboard.writeText(p.codigo).then(() => {
    const copyBtn = document.getElementById('copyCodeBtn');
    copyBtn.innerHTML = '<i class="bi bi-clipboard-check"></i>';
    copyBtn.classList.add('copied');

    // Toast
    const toastEl = document.getElementById('copyToast');
    const toast   = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2500 });
    toast.show();

    setTimeout(() => {
      copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
      copyBtn.classList.remove('copied');
    }, 3000);
  }).catch(() => {
    // Fallback para browsers sem clipboard API
    const ta = document.createElement('textarea');
    ta.value = p.codigo;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

// ─── ANIMAÇÃO DE ENTRADA ─────────────────────────────────────────────────────

/**
 * Aplica animação de entrada nos elementos com [data-animate].
 */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

// ─── NAVBAR SCROLL ────────────────────────────────────────────────────────────

/**
 * Adiciona classe ao navbar quando a página é rolada.
 */
function initNavbarScroll() {
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(22,18,14,0.35)'
      : 'none';
  }, { passive: true });
}

// ─── INICIALIZAÇÃO ────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Tabs de seção
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  // Filtros de categoria
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => filterCategory(btn.dataset.cat, btn));
  });

  // Slider de preço
  const priceRange = document.getElementById('priceRange');
  priceRange.style.setProperty('--pct', '100%');
  priceRange.addEventListener('input', () => filterPrice(priceRange));

  // Ordenação
  document.getElementById('sortSelect').addEventListener('change', function () {
    sortProdutos(this.value);
  });

  // Botão copiar código
  document.getElementById('copyCodeBtn').addEventListener('click', copyCode);

  // Render inicial
  renderAll();
  initAnimations();
  initNavbarScroll();
});
