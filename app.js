/**
 * SISTEMA DE GESTÃO TERRITORIAL - VERSÃO ESTÁVEL
 * com logs e garantia de exibição do painel
 */

// ============================================================
// 1. DICIONÁRIO DOS MIDs
// ============================================================
const MAPS_MID_DICT = {
  "jrdTer01": "143nsIAW7T0eb1rwMMv3T1YPxIMU86tg",
  "jrdTer02": "15JZ9M3fb8LNgFdO1AjaRDYQ0doXd6FY",
  "jrdTer03": "1jfiXS77PODUD7XaKpq9vUeIVw8Z-L5Q",
  "jrdTer04": "1erRNl2DxpFMP33znePN0mAO8oKM1rHA",
  "jrdTer05": "1ToCioJ9TLlom_T-745ammSnI8yKoZjU",
  "jrdTer06": "1wdc2dhsY9qhUSVLv_Op7MxyEoW-MhH8",
  "jrdTer07": "13XmMkARz2y7d1Qiy_2Dy_G8SdHx9_kU",
  "jrdTer08": "1tARgl3P4l5qObQHQ97fL521qcYfJRjU",
  "jrdTer09": "1Q6T9OgOxHi37ZAPhYT55HyAbrtqjE2o",
  "jrdTer10": "1rCekVn7klm2erLF50_K10Iv7O4UhVGg",
  "jrdTer11": "19wd9Gb_19cmJIj8YaC7sqQSeku92J2s",
  "jrdTer12": "1gLzBbKSozn2PZoDLtPRpz_h3Ih--MGI",
  "jrdTer13": "1TSWmznQlzfdH0opKBwKoWQOEtJhArx8",
  "jrdTer14": "1JuBw3uXWjHYAhp3kvtXgr9mFSVFTrYc",
  "jrdTer15": "1pT4XRVGVD0H-xQlsJZbab7T8N7Wpg1A",
  "jrdTer16": "14cmuKoN8iLaaOTLTA-0C5DrCGz5enrs",
  "jrdTer17": "134yRyFuPkDMh8GHWqQhMDKolVDjpJOk",
  "jrdTer18": "16TEv1rGFUPP56I0thzkcKNdq-XPW-Ig",
  "jrdTer19": "15PtrFGOg1-0ELeXj4Cws95FWYaAkkjg",
  "jrdTer20": "1dAuHzaipAg8qPOzuzKCQ8lB3FWW_MiI",
  "jrdTer21": "1Ki37Xpv8H-HKv3P-HDNL6kYKkqHMa5A",
  "jrdTer22": "1PpQDpI-UVuwJYG-MxjqpHzPbQud6iss",
  "jrdTer23": "1Q9H0L_Y2Sum_w-5X1ZAYnAlJ6SuSQcU",
  "jrdTer24": "1aYBfbgkGwxVnDN4uZFT2rfDxIarG7HI",
  "jrdTer25": "1cwo-aBUBHuLDQaDNfbY2NpH0p9plYWI",
  "jrdTer26": "1kuvvqDTtzRjwOgDCiCvB87JAjHZqVok",
  "jrdTer27": "10T9SotT80SzxVDxAIPWmYbt8JjtlHYU",
  "jrdTer28": "17xzdeMXC9yhDtf0G8leu6AOL02lZds8",
  "jrdTer29": "18i8-WclYyy48MpCfmoKXxJxqjEDPxZs",
  "jrdTer30": "17WCykHpEhAkdBxWSn66fp6tZfoHT7Ls",
  "jrdTer31": "1T2ROTIZI5poj7rLeD5VU3tvze2DRGDc",
  "jrdTer32": "1j5ejjQ1529ZNQjwKCZHZ84eB3oQKDE4",
  "jrdTer33": "1a88-7z4qbb4VKPu1I36xUR3ogYbTNYg",
  "jrdTer34": "1kJONRS83u971SojunjpcH-jkMHa4828",
  "jrdTer35": "13LZ7LWlKEDRLoi1qC8gXDEo1_l5zvrE",
  "jrdTer36": "1QJSkfKx5sUbksJe4GQY7oTCMkqxI65A",
  "jrdTer37": "1TDaGSKmLn9YHYU1Vk8CnMkdWrQIyJd8",
  "jrdTer38": "1tTEb5q4MshCR_pp_sTDe3oiIMDe79ZU",
  "jrdTer39": "1BNOdfhWVZW0e0NRO58sszdpcE-lWwZ4",
  "jrdTer40": "1VROx8EouqOdmkMN6LnI4kwuFfMYXbyM",
  "jrdTer41": "1zTxeZyorfLLvUypkdCfcOHa6z-mNhGI",
  "jrdTer42": "1iI_KKq_bfmOkXray3vLAnaRyr5ogRzk",
  "jrdTer43": "1kBJ756zfQZtitwxWGKqEHO_49AWEMHc",
  "jrdTer44": "1qBoCKh5hVXOow2Qr2uWRELhn_0uLjt4",
  "jrdTer45": "17iGF-ozgwQNC_6qf4bGoRMh84IgnDgE",
  "jrdTer46": "11ygCPhXsfz8nl4ZF3WsAJQKEkNExstE",
  "jrdTer47": "1d3kyL1qX0PgHFUxewTCS8bdFdlVaVIw",
  "jrdTer48": "1ndhxKy38yutXjabo9yzEkFyue83kTHk",
  "jrdTer49": "1VP1B_6L-3fR57ihsLm9mms1TR422eis",
  "jrdTer50": "1f4JeFs7sRtnxRuxu42jXTuqx4MOL2ik",
  "jrdTer51": "1tPxG3iGyihwk_WOnik1X7AQAzgyQ1zI",
  "jrdTer52": "1Y-RoSuax18a0b4GKdYgWQiP3yaM4t7M",
  "jrdTer53": "1X9nKd6ClR34zR-rAtUl2vCARAHWGOEM",
  "jrdTer54": "10rgBiaxOK8Bk9wVN_zmPtMll9GyH5UE",
  "jrdTer55": "13TTbP390BVNcX3AIq29fw7e8CR94vJI",
  "jrdTer56": "10YYYlwEhZvkrzTfFxnanpY68BXe_FjA",
  "jrdTer57": "1_BF9AC9eFNlOZ1J8xUCER9g0rYOp7L8",
  "jrdTer58": "1HVlYVZ_InYSMw98d25ERM0hxELY42hc"
};

// ============================================================
// 2. INICIALIZAÇÃO DO MAPA
// ============================================================
const map = L.map('map').setView([-4.236661, -56.006867], 14);
L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  attribution: 'Google'
}).addTo(map);

// ============================================================
// 3. ESTADO GLOBAL
// ============================================================
let geojsonLayer = null;
let territorioAtivo = null;
let camadaDestacada = null;
let dadosTerritorios = [];
let todosGrupos = new Set();
let marcadorUsuario = null;
let circuloPrecisao = null;

// ============================================================
// 4. CARREGAR DADOS INICIAIS (localStorage ou dados.json)
// ============================================================
async function carregarDadosIniciais() {
  const local = localStorage.getItem('banco_territorios');
  if (local) {
    dadosTerritorios = JSON.parse(local);
    return;
  }
  try {
    const resp = await fetch('dados.json');
    if (!resp.ok) throw new Error('dados.json não encontrado');
    dadosTerritorios = await resp.json();
    localStorage.setItem('banco_territorios', JSON.stringify(dadosTerritorios));
  } catch (err) {
    console.warn('Erro ao carregar dados.json, iniciando vazio.', err);
    dadosTerritorios = [];
  }
}

// ============================================================
// 5. ESTILO DOS POLÍGONOS
// ============================================================
function obterEstiloPoligono(codigo) {
  const item = dadosTerritorios.find(t => t.codigo === codigo);
  const status = item ? item.status : 'Livre';
  if (status === 'Iniciado') {
    return { color: '#F4B400', weight: 2, fillColor: '#F4B400', fillOpacity: 0.45 };
  } else if (status === 'Concluído') {
    return { color: '#007bff', weight: 2, fillColor: '#007bff', fillOpacity: 0.45 };
  }
  return { color: '#0F9D58', weight: 2, fillColor: 'transparent', fillOpacity: 0 };
}

// ============================================================
// 6. FUNÇÃO PARA ABRIR O PAINEL (com logs)
// ============================================================
function abrirPainel(codigo, layer) {
  console.log('🔵 abrirPainel chamado para:', codigo);
  const item = dadosTerritorios.find(t => t.codigo === codigo);
  if (!item) {
    console.warn('⚠️ Território não encontrado no banco:', codigo);
    return;
  }

  // Remove destaque anterior
  if (camadaDestacada && geojsonLayer) {
    geojsonLayer.resetStyle(camadaDestacada);
  }

  territorioAtivo = { info: item, layer: layer };
  camadaDestacada = layer;

  // Destaque
  layer.setStyle({
    weight: 4,
    color: '#FFFFFF',
    fillOpacity: item.status === 'Livre' ? 0.2 : 0.7
  });
  layer.bringToFront();
  map.fitBounds(layer.getBounds(), { padding: [50, 50], maxZoom: 17 });

  // Preenche os campos do painel
  const elCodigo = document.getElementById('detalhe-codigo');
  const elNumero = document.getElementById('detalhe-numero');
  const elGrupo = document.getElementById('detalhe-grupo');
  const elStatus = document.getElementById('detalhe-status');
  const elResponsavel = document.getElementById('detalhe-responsavel');
  const elInicio = document.getElementById('detalhe-inicio');
  const elConclusao = document.getElementById('detalhe-conclusao');

  if (elCodigo) elCodigo.innerText = item.codigo;
  if (elNumero) elNumero.innerText = item.numero || '---';
  if (elGrupo) {
    elGrupo.innerText = item.grupo || 'Sem Grupo';
    elGrupo.style.color = item.corGrupo || '#888';
  }
  if (elStatus) elStatus.innerText = item.status;
  if (elResponsavel) elResponsavel.innerText = item.responsavel || 'Ninguém';
  if (elInicio) elInicio.innerText = item.dataInicio ? formatarData(item.dataInicio) : '---';
  if (elConclusao) elConclusao.innerText = item.dataConclusao ? formatarData(item.dataConclusao) : '---';

  // EXIBE O PAINEL
  const painel = document.getElementById('painel-detalhes');
  if (painel) {
    painel.classList.remove('oculto');
    console.log('✅ Painel exibido com sucesso.');
  } else {
    console.error('❌ Elemento #painel-detalhes não encontrado no DOM.');
  }
}

// ============================================================
// 7. FECHAR PAINEL
// ============================================================
function fecharPainel() {
  const painel = document.getElementById('painel-detalhes');
  if (painel) painel.classList.add('oculto');
  if (camadaDestacada && geojsonLayer) {
    geojsonLayer.resetStyle(camadaDestacada);
    camadaDestacada = null;
  }
  territorioAtivo = null;
}

// ============================================================
// 8. CARREGAR GEOJSON
// ============================================================
async function carregarGeoJSON() {
  try {
    const resp = await fetch('territorios.geojson');
    if (!resp.ok) throw new Error('territorios.geojson não encontrado');
    const geojson = await resp.json();

    // Sincroniza banco
    const codigosExistentes = new Set(dadosTerritorios.map(d => d.codigo));
    geojson.features.forEach(feat => {
      const nome = feat.properties.name;
      if (nome && !codigosExistentes.has(nome)) {
        dadosTerritorios.push({
          codigo: nome,
          numero: nome.replace('jrdTer', ''),
          grupo: 'Sem Grupo',
          corGrupo: '#888888',
          status: 'Livre',
          responsavel: '',
          dataInicio: '',
          dataConclusao: ''
        });
        codigosExistentes.add(nome);
      }
    });
    localStorage.setItem('banco_territorios', JSON.stringify(dadosTerritorios));

    // Extrai grupos para o filtro
    dadosTerritorios.forEach(d => {
      if (d.grupo && d.grupo !== 'Sem Grupo') todosGrupos.add(d.grupo);
    });
    popularFiltro();

    // Cria camada GeoJSON
    geojsonLayer = L.geoJSON(geojson, {
      style: (feature) => obterEstiloPoligono(feature.properties.name),
      onEachFeature: (feature, layer) => {
        layer.bindTooltip(feature.properties.name, {
          permanent: false,
          direction: 'center',
          className: 'label-territorio'
        });
        // Evento de clique
        layer.on('click', function (e) {
          console.log('🖱️ Clique no polígono:', feature.properties.name);
          abrirPainel(feature.properties.name, this);
        });
      }
    }).addTo(map);

    map.fitBounds(geojsonLayer.getBounds(), { padding: [30, 30] });
    console.log('✅ GeoJSON carregado com sucesso.');
  } catch (err) {
    alert('Erro ao carregar territorios.geojson: ' + err.message);
  }
}

// ============================================================
// 9. FILTRO DE GRUPOS
// ============================================================
function popularFiltro() {
  const select = document.getElementById('filtro-grupo');
  if (!select) return;
  select.innerHTML = '<option value="TODOS">Todos os Territórios</option>';
  const gruposOrdenados = Array.from(todosGrupos).sort();
  gruposOrdenados.forEach(grupo => {
    const opt = document.createElement('option');
    opt.value = grupo;
    opt.textContent = grupo;
    select.appendChild(opt);
  });
}

function aplicarFiltro() {
  const grupoSelecionado = document.getElementById('filtro-grupo').value;
  if (!geojsonLayer) return;
  geojsonLayer.eachLayer(layer => {
    const codigo = layer.feature.properties.name;
    const registro = dadosTerritorios.find(d => d.codigo === codigo);
    const grupo = registro ? registro.grupo : 'Sem Grupo';
    const visivel = grupoSelecionado === 'TODOS' || grupo === grupoSelecionado;
    layer.setStyle({
      opacity: visivel ? 1 : 0.1,
      fillOpacity: visivel ? (obterEstiloPoligono(codigo).fillOpacity || 0) : 0,
      interactive: visivel
    });
  });
}

// ============================================================
// 10. ALTERAR STATUS
// ============================================================
function alterarStatus(novoStatus) {
  if (!territorioAtivo) return alert('Selecione um território primeiro.');
  const info = territorioAtivo.info;
  const hoje = new Date().toISOString().slice(0, 10);

  if (novoStatus === 'Iniciado') {
    const resp = prompt('Nome do responsável:', info.responsavel || '');
    if (resp === null) return; // cancelou
    info.responsavel = resp.trim() || '';
    info.dataInicio = hoje;
    info.dataConclusao = '';
  } else if (novoStatus === 'Concluído') {
    info.dataConclusao = hoje;
    if (!info.dataInicio) info.dataInicio = hoje;
  } else if (novoStatus === 'Livre') {
    info.responsavel = '';
    info.dataInicio = '';
    info.dataConclusao = '';
  }
  info.status = novoStatus;
  localStorage.setItem('banco_territorios', JSON.stringify(dadosTerritorios));
  geojsonLayer.setStyle(f => obterEstiloPoligono(f.properties.name));
  abrirPainel(info.codigo, territorioAtivo.layer);
}

// ============================================================
// 11. ABRIR GOOGLE MAPS
// ============================================================
function abrirGoogleMaps() {
  if (!territorioAtivo || !territorioAtivo.layer) {
    alert('Selecione um território primeiro.');
    return;
  }
  const codigo = territorioAtivo.info.codigo;
  const mid = MAPS_MID_DICT[codigo];
  if (!mid) {
    alert(`Link do mapa não cadastrado para ${codigo}.`);
    return;
  }
  const bounds = territorioAtivo.layer.getBounds();
  const centro = bounds.getCenter();
  const lat = centro.lat.toFixed(14);
  const lng = centro.lng.toFixed(14);
  const url = `https://www.google.com/maps/d/u/0/viewer?mid=${mid}&ll=${lat}%2C${lng}&z=16`;
  window.open(url, '_blank');
}

// ============================================================
// 12. GPS
// ============================================================
function ativarGPS() {
  if (!navigator.geolocation) return alert('GPS não suportado.');
  const btn = document.getElementById('btn-gps');
  btn.innerText = '⏳ Buscando...';
  btn.disabled = true;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      btn.innerText = '📍 Onde Estou?';
      btn.disabled = false;
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const precisao = pos.coords.accuracy;

      if (marcadorUsuario) {
        marcadorUsuario.setLatLng([lat, lng]);
      } else {
        marcadorUsuario = L.marker([lat, lng], {
          icon: L.divIcon({ className: 'gps-marker', html: '📍', iconSize: [24, 24], iconAnchor: [12, 24] })
        }).addTo(map);
      }
      if (circuloPrecisao) {
        circuloPrecisao.setLatLng([lat, lng]);
        circuloPrecisao.setRadius(precisao);
      } else {
        circuloPrecisao = L.circle([lat, lng], {
          radius: precisao,
          color: '#1a73e8',
          fillColor: '#1a73e8',
          fillOpacity: 0.15,
          weight: 1
        }).addTo(map);
      }

      const ponto = turf.point([lng, lat]);
      let encontrado = false;
      geojsonLayer.eachLayer(layer => {
        if (turf.booleanPointInPolygon(ponto, layer.feature)) {
          abrirPainel(layer.feature.properties.name, layer);
          encontrado = true;
        }
      });
      if (!encontrado) alert('Você não está dentro de nenhum território.');
    },
    (erro) => {
      btn.innerText = '📍 Onde Estou?';
      btn.disabled = false;
      alert('Erro GPS: ' + erro.message);
    },
    { enableHighAccuracy: true, timeout: 15000 }
  );
}

// ============================================================
// 13. UTILITÁRIOS
// ============================================================
function formatarData(dataISO) {
  if (!dataISO) return '---';
  const partes = dataISO.split('-');
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// ============================================================
// 14. INICIALIZAÇÃO (executa ao carregar)
// ============================================================
(async function init() {
  await carregarDadosIniciais();
  await carregarGeoJSON();

  // Eventos dos botões (usando addEventListener)
  document.getElementById('btn-gps')?.addEventListener('click', ativarGPS);
  document.getElementById('btn-fechar-painel')?.addEventListener('click', fecharPainel);
  document.getElementById('btn-rota')?.addEventListener('click', abrirGoogleMaps);
  document.getElementById('btn-iniciar')?.addEventListener('click', () => alterarStatus('Iniciado'));
  document.getElementById('btn-concluir')?.addEventListener('click', () => alterarStatus('Concluído'));
  document.getElementById('btn-livre')?.addEventListener('click', () => alterarStatus('Livre'));
  document.getElementById('filtro-grupo')?.addEventListener('change', aplicarFiltro);

  // Fecha o painel ao clicar no mapa (opcional)
  map.on('click', () => {
    if (!document.getElementById('painel-detalhes')?.classList.contains('oculto')) {
      fecharPainel();
    }
  });

  console.log('🚀 Sistema inicializado com sucesso!');
})();