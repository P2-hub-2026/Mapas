// Dicionário com MIDs individuais para o Google Maps
const MAPS_MID_DICT = {
  "jrdTer01": "143nsIAW7T0eb1rwMMv3T1YPxIMU86tg", "jrdTer02": "15JZ9M3fb8LNgFdO1AjaRDYQ0doXd6FY",
  "jrdTer03": "1jfiXS77PODUD7XaKpq9vUeIVw8Z-L5Q", "jrdTer04": "1erRNl2DxpFMP33znePN0mAO8oKM1rHA",
  "jrdTer05": "1ToCioJ9TLlom_T-745ammSnI8yKoZjU", "jrdTer06": "1wdc2dhsY9qhUSVLv_Op7MxyEoW-MhH8",
  "jrdTer07": "13XmMkARz2y7d1Qiy_2Dy_G8SdHx9_kU", "jrdTer08": "1tARgl3P4l5qObQHQ97fL521qcYfJRjU",
  "jrdTer09": "1Q6T9OgOxHi37ZAPhYT55HyAbrtqjE2o", "jrdTer10": "1rCekVn7klm2erLF50_K10Iv7O4UhVGg",
  "jrdTer11": "19wd9Gb_19cmJIj8YaC7sqQSeku92J2s", "jrdTer12": "1gLzBbKSozn2PZoDLtPRpz_h3Ih--MGI",
  "jrdTer13": "1TSWmznQlzfdH0opKBwKoWQOEtJhArx8", "jrdTer14": "1JuBw3uXWjHYAhp3kvtXgr9mFSVFTrYc",
  "jrdTer15": "1pT4XRVGVD0H-xQlsJZbab7T8N7Wpg1A", "jrdTer16": "14cmuKoN8iLaaOTLTA-0C5DrCGz5enrs",
  "jrdTer17": "134yRyFuPkDMh8GHWqQhMDKolVDjpJOk", "jrdTer18": "16TEv1rGFUPP56I0thzkcKNdq-XPW-Ig",
  "jrdTer19": "15PtrFGOg1-0ELeXj4Cws95FWYaAkkjg", "jrdTer20": "1dAuHzaipAg8qPOzuzKCQ8lB3FWW_MiI",
  "jrdTer21": "1Ki37Xpv8H-HKv3P-HDNL6kYKkqHMa5A", "jrdTer22": "1PpQDpI-UVuwJYG-MxjqpHzPbQud6iss",
  "jrdTer23": "1Q9H0L_Y2Sum_w-5X1ZAYnAlJ6SuSQcU", "jrdTer24": "1aYBfbgkGwxVnDN4uZFT2rfDxIarG7HI",
  "jrdTer25": "1cwo-aBUBHuLDQaDNfbY2NpH0p9plYWI", "jrdTer26": "1kuvvqDTtzRjwOgDCiCvB87JAjHZqVok",
  "jrdTer27": "10T9SotT80SzxVDxAIPWmYbt8JjtlHYU", "jrdTer28": "17xzdeMXC9yhDtf0G8leu6AOL02lZds8",
  "jrdTer29": "18i8-WclYyy48MpCfmoKXxJxqjEDPxZs", "jrdTer30": "17WCykHpEhAkdBxWSn66fp6tZfoHT7Ls",
  "jrdTer31": "1T2ROTIZI5poj7rLeD5VU3tvze2DRGDc", "jrdTer32": "1j5ejjQ1529ZNQjwKCZHZ84eB3oQKDE4",
  "jrdTer33": "1a88-7z4qbb4VKPu1I36xUR3ogYbTNYg", "jrdTer34": "1kJONRS83u971SojunjpcH-jkMHa4828",
  "jrdTer35": "13LZ7LWlKEDRLoi1qC8gXDEo1_l5zvrE", "jrdTer36": "1QJSkfKx5sUbksJe4GQY7oTCMkqxI65A",
  "jrdTer37": "1TDaGSKmLn9YHYU1Vk8CnMkdWrQIyJd8", "jrdTer38": "1tTEb5q4MshCR_pp_sTDe3oiIMDe79ZU",
  "jrdTer39": "1BNOdfhWVZW0e0NRO58sszdpcE-lWwZ4", "jrdTer40": "1VROx8EouqOdmkMN6LnI4kwuFfMYXbyM",
  "jrdTer41": "1zTxeZyorfLLvUypkdCfcOHa6z-mNhGI", "jrdTer42": "1iI_KKq_bfmOkXray3vLAnaRyr5ogRzk",
  "jrdTer43": "1kBJ756zfQZtitwxWGKqEHO_49AWEMHc", "jrdTer44": "1qBoCKh5hVXOow2Qr2uWRELhn_0uLjt4",
  "jrdTer45": "17iGF-ozgwQNC_6qf4bGoRMh84IgnDgE", "jrdTer46": "11ygCPhXsfz8nl4ZF3WsAJQKEkNExstE",
  "jrdTer47": "1d3kyL1qX0PgHFUxewTCS8bdFdlVaVIw", "jrdTer48": "1ndhxKy38yutXjabo9yzEkFyue83kTHk",
  "jrdTer49": "1VP1B_6L-3fR57ihsLm9mms1TR422eis", "jrdTer50": "1f4JeFs7sRtnxRuxu42jXTuqx4MOL2ik",
  "jrdTer51": "1tPxG3iGyihwk_WOnik1X7AQAzgyQ1zI", "jrdTer52": "1Y-RoSuax18a0b4GKdYgWQiP3yaM4t7M",
  "jrdTer53": "1X9nKd6ClR34zR-rAtUl2vCARAHWGOEM", "jrdTer54": "10rgBiaxOK8Bk9wVN_zmPtMll9GyH5UE",
  "jrdTer55": "13TTbP390BVNcX3AIq29fw7e8CR94vJI", "jrdTer56": "10YYYlwEhZvkrzTfFxnanpY68BXe_FjA",
  "jrdTer57": "1_BF9AC9eFNlOZ1J8xUCER9g0rYOp7L8", "jrdTer58": "1HVlYVZ_InYSMw98d25ERM0hxELY42hc"
};

// Inicializa Mapa
const map = L.map('map').setView([-4.236661, -56.006867], 14);
L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { maxZoom: 20 }).addTo(map);

let geojsonLayer = null;
let geojsonData = null;
let territorioAtivo = null;
let camadaDestacada = null;
let modoMarcacaoAtivo = false;
let camadaMarcadores = L.layerGroup().addTo(map);
let coordenadasGPS = null;

// Persistência de Dados (Multi-Congregação)
let dadosTerritorios = JSON.parse(localStorage.getItem('hourglass_db')) || [];

// Carregamento de Polígonos
fetch('territorios.geojson')
  .then(res => res.json())
  .then(geojson => {
    geojsonData = geojson;

    const codigosExistentes = new Set(dadosTerritorios.map(d => d.codigo));
    geojson.features.forEach(feat => {
      const nome = feat.properties.name;
      if (nome && !codigosExistentes.has(nome)) {
        // Lógica de distribuição provisória para visualização multi-congregação
        let cong = "jardins";
        const num = parseInt(nome.replace(/\D/g, ''), 10) || 0;
        if (num > 20 && num <= 40) cong = "Central";
        else if (num > 40) cong = "Alvorada";

        dadosTerritorios.push({
          codigo: nome, congregacao: cong, status: 'Livre',
          publicador: '', dataSaida: '', dataConclusao: '', pontos: []
        });
      }
    });

    salvarDados();
    renderizarMapa(true); // true indica carregamento inicial para o fitBounds
  })
  .catch(err => alert("Erro ao carregar territorios.geojson. Verifique a pasta."));

function salvarDados() {
  localStorage.setItem('hourglass_db', JSON.stringify(dadosTerritorios));
}

function obterEstilo(codigo) {
  const item = dadosTerritorios.find(t => t.codigo === codigo);
  const status = item ? item.status : 'Livre';

  switch (status) {
    case 'Designado': return { color: '#f57c00', weight: 2, fillColor: '#f57c00', fillOpacity: 0.4 };
    case 'Trabalhando': return { color: '#fbc02d', weight: 2, fillColor: '#fbc02d', fillOpacity: 0.5 };
    case 'Concluído': return { color: '#1976d2', weight: 2, fillColor: '#1976d2', fillOpacity: 0.4 };
    default: return { color: '#2e7d32', weight: 2, fillColor: 'transparent', fillOpacity: 0 };
  }
}

// -----------------------------------------------------
// RENDERIZAÇÃO & FILTROS (DEBUGADO)
// -----------------------------------------------------
function renderizarMapa(autoZoom = true) {
  if (geojsonLayer) map.removeLayer(geojsonLayer);
  fecharPainel(); // Oculta o painel ao trocar de filtro

  const congSelecionada = document.getElementById('filtro-congregacao').value;
  const statusSelecionado = document.getElementById('filtro-status').value;

  geojsonLayer = L.geoJSON(geojsonData, {
    filter: (feature) => {
      const item = dadosTerritorios.find(t => t.codigo === feature.properties.name);
      if (!item) return false;
      const filtroCong = item.congregacao === congSelecionada;
      const filtroStat = (statusSelecionado === 'TODOS' || item.status === statusSelecionado);
      return filtroCong && filtroStat;
    },
    style: (feature) => obterEstilo(feature.properties.name),
    onEachFeature: (feature, layer) => {
      layer.bindTooltip(feature.properties.name, { permanent: false, direction: 'center', className: 'label-territorio' });
      layer.on('click', () => abrirPainel(feature.properties.name, layer));
    }
  }).addTo(map);

  // DEBUG: Auto-zoom focado nos territórios da congregação atual
  if (autoZoom && geojsonLayer.getLayers().length > 0) {
    map.fitBounds(geojsonLayer.getBounds(), { padding: [30, 30] });
  }

  renderizarMarcadores();
}

// -----------------------------------------------------
// GESTÃO DE PAINEL & STATUS (DEBUGADO)
// -----------------------------------------------------
function abrirPainel(codigo, layer) {
  if (modoMarcacaoAtivo) return; // Bloqueia abertura se estiver no modo de marcação

  const item = dadosTerritorios.find(t => t.codigo === codigo);
  if (!item) return;

  if (camadaDestacada && geojsonLayer) geojsonLayer.resetStyle(camadaDestacada);

  territorioAtivo = { info: item, layer: layer };
  camadaDestacada = layer;
  
  layer.setStyle({ weight: 4, color: '#FFFFFF', fillOpacity: item.status === 'Livre' ? 0.2 : 0.7 });
  layer.bringToFront();
  map.fitBounds(layer.getBounds(), { padding: [50, 50], maxZoom: 17 });

  document.getElementById('detalhe-codigo').innerText = item.codigo;
  document.getElementById('detalhe-congregacao').innerText = item.congregacao;
  document.getElementById('detalhe-publicador').innerText = item.publicador || 'Ninguém designado';
  document.getElementById('detalhe-saida').innerText = item.dataSaida || '--/--/----';
  document.getElementById('detalhe-conclusao').innerText = item.dataConclusao || '--/--/----';
  document.getElementById('detalhe-qtd-pontos').innerText = (item.pontos || []).length;

  const tag = document.getElementById('detalhe-tag-status');
  tag.innerText = item.status;
  tag.className = `badge badge-${item.status.toLowerCase()}`;

  atualizarListaPontosDOM();
  document.getElementById('painel-detalhes').classList.remove('oculto');
}

function fecharPainel() {
  document.getElementById('painel-detalhes').classList.add('oculto');
  if (camadaDestacada && geojsonLayer) geojsonLayer.resetStyle(camadaDestacada);
  desativarModoMarcacao();
}

function acaoDesignar() {
  if (!territorioAtivo) return;
  const pub = prompt("Nome do Publicador / Dirigente designado:", territorioAtivo.info.publicador);
  if (pub !== null && pub.trim() !== '') {
    territorioAtivo.info.publicador = pub;
    territorioAtivo.info.status = 'Designado';
    territorioAtivo.info.dataSaida = new Date().toLocaleDateString('pt-BR');
    salvarEAtualizar();
  }
}

function alterarStatus(novoStatus) {
  if (!territorioAtivo) return;

  // DEBUG: Exige publicador se pular direto de Livre para Trabalhando
  if (novoStatus === 'Trabalhando' && !territorioAtivo.info.publicador) {
    const pub = prompt("Quem está trabalhando no território?");
    if (pub) {
      territorioAtivo.info.publicador = pub;
      territorioAtivo.info.dataSaida = new Date().toLocaleDateString('pt-BR');
    } else {
      return; // Cancela se não informar
    }
  }
  
  territorioAtivo.info.status = novoStatus;
  const hoje = new Date().toLocaleDateString('pt-BR');

  if (novoStatus === 'Concluído') {
    territorioAtivo.info.dataConclusao = hoje;
  } else if (novoStatus === 'Livre') {
    territorioAtivo.info.publicador = '';
    territorioAtivo.info.dataSaida = '';
  }

  salvarEAtualizar();
}

function salvarEAtualizar() {
  salvarDados();
  renderizarMapa(false); // Renderiza sem alterar o zoom atual
  abrirPainel(territorioAtivo.info.codigo, territorioAtivo.layer);
}

// -----------------------------------------------------
// MÓDULO DE MARCAÇÃO DE PONTOS
// -----------------------------------------------------
function alternarModoMarcacao() {
  if (!territorioAtivo) return;
  modoMarcacaoAtivo = !modoMarcacaoAtivo;
  
  const btn = document.getElementById('btn-add-ponto');
  const mapDiv = document.getElementById('map');

  if (modoMarcacaoAtivo) {
    btn.innerText = "Toque no Mapa...";
    btn.style.background = "#d32f2f";
    mapDiv.classList.add('modo-marcacao-ativo');
    alert("MODO DE MARCAÇÃO: Toque fisicamente dentro da área do território selecionado para registrar um ponto.");
  } else {
    desativarModoMarcacao();
  }
}

function desativarModoMarcacao() {
  modoMarcacaoAtivo = false;
  document.getElementById('map').classList.remove('modo-marcacao-ativo');
  const btn = document.getElementById('btn-add-ponto');
  if (btn) {
    btn.innerText = "📍 Marcar Ponto";
    btn.style.background = "#673AB7";
  }
}

// Evento global de clique no mapa para pontos
map.on('click', (e) => {
  if (!modoMarcacaoAtivo || !territorioAtivo) return;

  // Extrai as coordenadas corretas para o Turf validar
  const ponto = turf.point([e.latlng.lng, e.latlng.lat]);
  
  // Verifica integridade da feature do território antes de processar
  if (!territorioAtivo.layer || !territorioAtivo.layer.feature) {
      alert("Erro ao validar o limite do território.");
      desativarModoMarcacao();
      return;
  }

  const dentro = turf.booleanPointInPolygon(ponto, territorioAtivo.layer.feature);

  if (!dentro) {
    alert("Fora dos Limites! O ponto deve ser marcado estritamente dentro da área do território ativo.");
    return;
  }

  const descricao = prompt("Descreva o ponto (Ex.: Casa 45 - Não Bater, Revisita João):");
  if (!descricao) {
    desativarModoMarcacao();
    return;
  }

  if (!territorioAtivo.info.pontos) territorioAtivo.info.pontos = [];

  territorioAtivo.info.pontos.push({
    id: Date.now(),
    descricao: descricao,
    lat: e.latlng.lat.toFixed(6),
    lng: e.latlng.lng.toFixed(6)
  });

  salvarDados();
  renderizarMarcadores();
  atualizarListaPontosDOM();
  desativarModoMarcacao();
});

function renderizarMarcadores() {
  camadaMarcadores.clearLayers();
  const congSelecionada = document.getElementById('filtro-congregacao').value;

  dadosTerritorios.filter(t => t.congregacao === congSelecionada).forEach(t => {
    (t.pontos || []).forEach(p => {
      const marker = L.circleMarker([p.lat, p.lng], {
        radius: 6, color: '#D32F2F', fillColor: '#FF5252', fillOpacity: 1
      }).bindPopup(`<b>${t.codigo}</b><br>${p.descricao}`);
      camadaMarcadores.addLayer(marker);
    });
  });
}

function atualizarListaPontosDOM() {
  const ul = document.getElementById('lista-pontos');
  ul.innerHTML = '';
  const pontos = territorioAtivo.info.pontos || [];

  if (pontos.length === 0) {
    ul.innerHTML = '<li style="color: #888; text-align: center;">Nenhum ponto registrado.</li>';
    return;
  }

  pontos.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${p.descricao}</span>
      <div>
        <button onclick="tracarRotaAteCoordenada(${p.lat}, ${p.lng})" title="Rota até aqui" style="background:none;border:none;cursor:pointer;font-size:16px;">🚗</button>
        <button class="btn-del-ponto" onclick="removerPonto(${p.id})">✕</button>
      </div>
    `;
    ul.appendChild(li);
  });
}

function removerPonto(id) {
  if(!confirm("Remover este ponto definitivamente?")) return;
  territorioAtivo.info.pontos = territorioAtivo.info.pontos.filter(p => p.id !== id);
  salvarDados();
  renderizarMarcadores();
  atualizarListaPontosDOM();
  document.getElementById('detalhe-qtd-pontos').innerText = territorioAtivo.info.pontos.length;
}

// -----------------------------------------------------
// GOOGLE MAPS & GPS
// -----------------------------------------------------
function abrirNoGoogleMaps() {
  if (!territorioAtivo) return;
  const codigo = territorioAtivo.info.codigo;
  const mid = MAPS_MID_DICT[codigo];

  const bounds = territorioAtivo.layer.getBounds();
  const centro = bounds.getCenter();
  const lat = centro.lat.toFixed(6);
  const lng = centro.lng.toFixed(6);

  if (mid) {
    window.open(`https://www.google.com/maps/d/u/0/viewer?mid=${mid}&ll=${lat}%2C${lng}&z=16`, '_blank');
  } else {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}+(${codigo})`, '_blank');
  }
}

function tracarRotaAteTerritorio() {
  if (!territorioAtivo) return;
  const centro = territorioAtivo.layer.getBounds().getCenter();
  tracarRotaAteCoordenada(centro.lat.toFixed(6), centro.lng.toFixed(6));
}

// DEBUG: Prevenção de erro caso o GPS ainda não esteja lido
function tracarRotaAteCoordenada(destLat, destLng) {
  let url = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}&travelmode=driving`;
  
  if (coordenadasGPS && coordenadasGPS.lat && coordenadasGPS.lng) {
    url += `&origin=${coordenadasGPS.lat},${coordenadasGPS.lng}`;
  }
  
  window.open(url, '_blank');
}

function ativarGPS() {
  if (!navigator.geolocation) return alert('Geolocalização não suportada.');
  const btn = document.getElementById('btn-gps');
  btn.innerText = "Buscando...";

  navigator.geolocation.watchPosition(pos => {
    coordenadasGPS = { lat: pos.coords.latitude, lng: pos.coords.longitude };
    btn.innerText = "📍 GPS Ativo";

    const pt = turf.point([coordenadasGPS.lng, coordenadasGPS.lat]);
    
    if (geojsonLayer) {
      let emTerritorio = false;
      geojsonLayer.eachLayer(layer => {
        if (turf.booleanPointInPolygon(pt, layer.feature)) {
          emTerritorio = true;
          abrirPainel(layer.feature.properties.name, layer);
        }
      });
      if(!emTerritorio) console.log("Você está fisicamente fora da área mapeada.");
    }
  }, err => {
    btn.innerText = "📍 GPS";
    alert("Erro ao ler GPS: Verifique as permissões de localização do navegador.");
  }, { enableHighAccuracy: true });
}