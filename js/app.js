/* ===================== Utility ===================== */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
const clone = o => JSON.parse(JSON.stringify(o));
const DAY = 864e5;
const pad2 = n => String(n).padStart(2, '0');
const isoDay = t => { const d = new Date(t); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); };
const monthKey = t => { const d = new Date(t); return d.getFullYear() + '-' + pad2(d.getMonth() + 1); };
const fmtNum = (n, d = 1) => { if (n == null || n === '' || isNaN(n)) return '–'; const r = Math.round(n * 10 ** d) / 10 ** d; return String(r).replace('.', ','); };
const fmtDur = s => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), ss = s % 60; return h ? `${h}:${pad2(m)}:${pad2(ss)}` : `${m}:${pad2(ss)}`; };
const fmtMin = s => { const m = Math.round(s / 60); return m >= 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : `${m} min`; };
const DNY = ['ne','po','út','st','čt','pá','so'];
const MES = ['ledna','února','března','dubna','května','června','července','srpna','září','října','listopadu','prosince'];
const fmtDate = t => { const d = new Date(t); return `${d.getDate()}. ${MES[d.getMonth()]}`; };
const fmtDateShort = t => { const d = new Date(t); return `${d.getDate()}. ${d.getMonth() + 1}.`; };
const fmtDateDay = t => { const d = new Date(t); return `${DNY[d.getDay()]} ${d.getDate()}. ${d.getMonth() + 1}.`; };
const plural = (n, a, b, c) => n === 1 ? a : (n >= 2 && n <= 4 ? b : c);
const e1rm = (kg, reps) => (!kg || !reps) ? 0 : reps === 1 ? kg : kg * (1 + Math.min(reps, 12) / 30);

const ICON = {
  dumbbell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 7v10M3 9.5v5M18 7v10M21 9.5v5M6 12h12"/></svg>',
  plans:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 7h6"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V4M4 20h16"/><path d="m7 15 4-5 3 3 5-6"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7"/></svg>',
  dots:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  chev:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg>',
  play:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>',
  pause:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
  up:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 15 6-6 6 6"/></svg>',
  down:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  trash:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  plus:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>'
};

/* ===================== Data a úložiště ===================== */
const DEFAULT_SETTINGS = { unit:'kg', inc:2.5, rest:120, autoRest:true, vib:true, sound:true, weekGoal:4, theme:'system', weekStart:1, bar:20, rpe:false, asym:15, deload:4 };
const LS_KEY = 'svih.v1';
let DB = {
  state: { _u:0, settings:{...DEFAULT_SETTINGS}, programs:[], activeProgramId:null, custom:[], tests:[], bw:[], meta:{ onboarded:false, lastBackup:0 } },
  active: { _u:0, w:null, restEnd:0, restTotal:0 },
  months: {}
};
const lsGet = () => { try { return JSON.parse(localStorage.getItem(LS_KEY) || 'null'); } catch { return null; } };
let lsTimer = null;
const lsWrite = () => { clearTimeout(lsTimer); lsTimer = setTimeout(() => { try { localStorage.setItem(LS_KEY, JSON.stringify(DB)); } catch {} }, 120); };
const lsFlush = () => { clearTimeout(lsTimer); try { localStorage.setItem(LS_KEY, JSON.stringify(DB)); } catch {} };
window.addEventListener('pagehide', lsFlush);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') { lsFlush(); if (sync.queue && sync.queue.size) flushRemote(); } });

function normalize(d) {
  const out = { state: Object.assign({}, DB.state, d?.state || {}), active: Object.assign({ _u:0, w:null, restEnd:0, restTotal:0 }, d?.active || {}), months: d?.months || {} };
  out.state.settings = Object.assign({}, DEFAULT_SETTINGS, out.state.settings || {});
  out.state.meta = Object.assign({ onboarded:false, lastBackup:0 }, out.state.meta || {});
  for (const k of ['programs','custom','tests','bw']) if (!Array.isArray(out.state[k])) out.state[k] = [];
  return out;
}
const S = () => DB.state;
const SET = () => DB.state.settings;

/* --- Synchronizace na účet (db capability) --- */
const sync = { db:null, col:null, uid:null, status:'local', queue:new Map(), timer:null, writing:false, unsub:null };
function docKeys() { return ['state', 'active', ...Object.keys(DB.months).map(m => 'm-' + m)]; }
function getDoc(key) { if (key === 'state') return DB.state; if (key === 'active') return DB.active; return DB.months[key.slice(2)]; }
function setDoc(key, val) { if (key === 'state') DB.state = normalize({ state: val }).state; else if (key === 'active') DB.active = Object.assign({ w:null, restEnd:0, restTotal:0 }, val); else DB.months[key.slice(2)] = val; }

function touch(key) {
  const d = getDoc(key); if (!d) return;
  d._u = Date.now();
  lsWrite();
  if (sync.col) { sync.queue.set(key, true); clearTimeout(sync.timer); sync.timer = setTimeout(flushRemote, 900); setSync('sync'); }
}
const saveState = () => touch('state');
const saveActive = () => touch('active');
const saveMonth = m => touch('m-' + m);

async function flushRemote() {
  if (!sync.col || sync.writing) return;
  sync.writing = true;
  try {
    while (sync.queue.size) {
      const [key] = sync.queue.keys(); sync.queue.delete(key);
      const d = getDoc(key);
      try {
        if (d) await sync.col.doc(key).set(clone(d)); else await sync.col.doc(key).delete();
      } catch (e) {
        if (e && e.code === 'unavailable') { await new Promise(r => setTimeout(r, 800 + Math.random() * 800)); try { await sync.col.doc(key).set(clone(d)); } catch { sync.queue.set(key, true); throw e; } }
        else throw e;
      }
    }
    setSync('ok');
  } catch (e) {
    setSync('err', e && e.code === 'quota_exceeded' ? 'Úložiště na účtu je plné – exportuj a smaž starší data.' : null);
  } finally { sync.writing = false; if (sync.queue.size) { clearTimeout(sync.timer); sync.timer = setTimeout(flushRemote, 3000); } }
}
let syncMsg = null;
function setSync(st, msg) { sync.status = st; if (msg) syncMsg = msg; const el = document.querySelectorAll('[data-sync]'); el.forEach(e => { e.className = 'sync ' + st; e.innerHTML = '<i></i>' + syncLabel(); }); }
function syncLabel() { return ({ ok:'Uloženo na účtu', sync:'Ukládám…', err:'Uloženo v zařízení', local:'Uloženo v zařízení' })[sync.status]; }

async function initSync() {
  if (!window.claude || !window.claude.use) return;
  try {
    const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
    if (!db || !user) return;
    const id = await user.id(); if (!id) return;
    sync.db = db; sync.uid = id; sync.col = db.collection('data/users/' + id);
    let first = true;
    sync.unsub = sync.col.onSnapshot(snap => {
      let changed = false; const seen = new Set();
      for (const doc of snap.docs) {
        seen.add(doc.id); const rem = doc.data(); if (!rem) continue;
        const loc = getDoc(doc.id);
        if (!loc || (rem._u || 0) > (loc._u || 0)) { setDoc(doc.id, clone(rem)); changed = true; }
        else if ((loc._u || 0) > (rem._u || 0)) sync.queue.set(doc.id, true);
      }
      if (first) { for (const k of docKeys()) { const d = getDoc(k); if (!seen.has(k) && d && d._u) sync.queue.set(k, true); } first = false; }
      if (changed) { lsFlush(); if (!keypadOpen()) render(); }
      if (sync.queue.size) flushRemote(); else setSync('ok');
    }, () => setSync('err'));
  } catch { setSync('local'); }
}

/* ===================== Cviky ===================== */
let EXMAP = {};
function rebuildExMap() { EXMAP = {}; for (const e of EX) EXMAP[e.id] = e; for (const e of S().custom) EXMAP[e.id] = Object.assign({ st:[], cu:[], mi:[], s:[], f:['sila'], p:null, custom:true }, e); }
const exById = id => EXMAP[id] || { id, n:'Neznámý cvik', m:[], s:[], eq:'', f:[], t:'wr', st:[], cu:[], mi:[] };
const allEx = () => Object.values(EXMAP);
const isExplosive = ex => ex.f && (ex.f.includes('vybus')) && ex.t !== 'time';

/* Jednotky */
const U = () => SET().unit;
const kgTo = v => v == null || v === '' ? '' : (U() === 'lb' ? Math.round(v * 2.20462 * 10) / 10 : v);
const toKg = v => v == null || v === '' ? null : (U() === 'lb' ? v / 2.20462 : v);
const COLS = { wr:['kg','reps'], bw:['kg','reps'], time:['kg','sec'], dist:['cm'], speed:['mph','reps'] };
function colLabel(t, c) {
  if (c === 'kg') return t === 'bw' || t === 'time' ? '+' + U() : U();
  return ({ reps: t === 'speed' ? 'švihy' : 'opak.', sec:'s', cm:'cm', mph:'mph' })[c];
}
function setText(ex, s) {
  const t = ex.t, k = s.kg != null && s.kg !== '' && s.kg !== 0 ? fmtNum(kgTo(s.kg)) : '';
  if (t === 'wr') return (k || '0') + '×' + (s.reps ?? '–');
  if (t === 'bw') return (k ? '+' + k + '×' : '') + (s.reps ?? '–');
  if (t === 'time') return (k ? k + ' · ' : '') + (s.sec ?? '–') + ' s';
  if (t === 'dist') return (s.cm ?? '–') + ' cm';
  if (t === 'speed') return fmtNum(s.mph) + ' mph' + (s.reps ? ' ×' + s.reps : '');
  return '';
}
/* Hlavní metrika série pro PR a grafy */
function setScore(ex, s) {
  if (s.k === 'w') return 0;
  switch (ex.t) {
    case 'wr': return e1rm(+s.kg || 0, +s.reps || 0);
    case 'bw': return (+s.reps || 0) * (1 + (+s.kg || 0) / 100);
    case 'time': return +s.sec || 0;
    case 'dist': return +s.cm || 0;
    case 'speed': return +s.mph || 0;
  }
  return 0;
}
const scoreLabel = ex => ({ wr:'Odhad max. na 1 opakování (' + U() + ')', bw:'Nejlepší série (opakování)', time:'Nejdelší čas (s)', dist:'Nejlepší vzdálenost (cm)', speed:'Nejvyšší rychlost (mph)' })[ex.t];
const scoreFmt = (ex, v) => ex.t === 'wr' ? fmtNum(kgTo(v)) : fmtNum(v);

/* ===================== Historie ===================== */
function allWorkouts() { const out = []; for (const m of Object.keys(DB.months)) for (const w of (DB.months[m].list || [])) out.push(w); return out.sort((a, b) => b.start - a.start); }
let _hist = null, _histStamp = -1;
function histIndex() {
  const stamp = Object.values(DB.months).reduce((a, m) => a + (m._u || 0), 0);
  if (_hist && stamp === _histStamp) return _hist;
  const byEx = {};
  for (const w of allWorkouts()) for (const it of w.ex) {
    (byEx[it.ex] ||= []).push({ w, it });
  }
  _hist = { byEx }; _histStamp = stamp; return _hist;
}
const lastSession = exId => (histIndex().byEx[exId] || [])[0] || null;
function bestScore(exId, exceptWid) {
  const ex = exById(exId); let b = 0;
  for (const { w, it } of histIndex().byEx[exId] || []) { if (w.id === exceptWid) continue; for (const s of it.sets) if (s.done) b = Math.max(b, setScore(ex, s)); }
  return b;
}
function addWorkoutToHistory(w) {
  const m = monthKey(w.start);
  DB.months[m] ||= { _u:0, list:[] };
  DB.months[m].list = DB.months[m].list.filter(x => x.id !== w.id);
  DB.months[m].list.push(w);
  saveMonth(m);
}
function removeWorkout(w) { const m = monthKey(w.start); if (!DB.months[m]) return; DB.months[m].list = DB.months[m].list.filter(x => x.id !== w.id); saveMonth(m); }

/* ===================== Programy ===================== */
function programFromTemplate(t) {
  return { id: uid(), tid: t.tid, name: t.name, desc: t.desc, tag: t.tag, blocks: t.blocks ? clone(t.blocks) : null, start: isoDay(Date.now()), comp: '', next: 0,
    days: t.days.map(d => ({ id: uid(), name: d.name, items: d.items.map(i => ({ ...i })) })) };
}
const activeProgram = () => S().programs.find(p => p.id === S().activeProgramId) || null;
function programWeek(p) {
  if (!p || !p.start) return null;
  const w = Math.floor((Date.now() - new Date(p.start + 'T00:00').getTime()) / (7 * DAY)) + 1;
  return Math.max(1, w);
}
function programPhase(p) {
  const wk = programWeek(p); if (!wk) return null;
  const dl = SET().deload || 0;
  const res = { week: wk, deload: dl > 0 && wk % dl === 0 };
  if (p.blocks && p.blocks.length) {
    let acc = 0; const total = p.blocks.reduce((a, b) => a + b.w, 0);
    const wInCycle = ((wk - 1) % total) + 1;
    for (const b of p.blocks) { if (wInCycle <= acc + b.w) { res.block = b.n; res.bw = wInCycle - acc; res.bTot = b.w; break; } acc += b.w; }
    res.total = total; res.cycleWeek = wInCycle;
  }
  if (p.comp) { const dd = Math.ceil((new Date(p.comp + 'T00:00').getTime() - new Date(isoDay(Date.now()) + 'T00:00').getTime()) / DAY); if (dd >= 0) res.comp = dd; }
  return res;
}
/* ===================== UI jádro ===================== */
let TAB = 'train';
const A = {}; // akce podle data-a
const ovStack = [];
function render() {
  rebuildExMap();
  applyTheme();
  const app = $('#app');
  const inWk = TAB === 'train' && !!DB.active.w;
  app.classList.toggle('in-workout', inWk);
  const y = window.scrollY;
  app.innerHTML = ({ train: inWk ? viewWorkout : viewHome, plans: viewPlans, lib: viewLib, stats: viewStats })[TAB]();
  document.querySelectorAll('.nav button').forEach(b => b.setAttribute('aria-current', b.dataset.tab === TAB ? 'page' : 'false'));
  if (renderKeepScroll) window.scrollTo(0, y); renderKeepScroll = false;
  renderRestBar();
  afterRender.splice(0).forEach(f => f());
}
let renderKeepScroll = false;
const afterRender = [];
const rerender = () => { renderKeepScroll = true; render(); };
function applyTheme() { const t = SET().theme; if (t === 'system') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', t);
  document.querySelectorAll('meta[name="theme-color"]').forEach(m => { m.dataset.orig ||= m.content; m.content = t === 'system' ? m.dataset.orig : (t === 'dark' ? '#0D100E' : '#EDF0EB'); }); }
function header(title, sub, extra = '') {
  return `<header class="top"><div class="grow"><h1>${title}</h1>${sub ? `<div class="sub">${sub}</div>` : ''}</div>${extra}
  <button class="iconbtn" data-a="settings" aria-label="Nastavení">${ICON.gear}</button></header>`;
}
function setTab(t) { TAB = t; window.scrollTo(0, 0); render(); }

/* Sheety */
function openSheet(build, opts = {}) {
  const scrim = document.createElement('div'); scrim.className = 'scrim';
  const sh = document.createElement('div'); sh.className = 'sheet' + (opts.full ? ' full' : ''); sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-modal', 'true');
  scrim.appendChild(sh); document.body.appendChild(scrim);
  const o = { scrim, sh, build, opts, refresh() { const st = sh.scrollTop; sh.innerHTML = (opts.full ? '' : '<div class="grab"></div>') + build(o); sh.scrollTop = st; opts.after && opts.after(o); } };
  scrim.addEventListener('click', e => { if (e.target === scrim && !opts.modal) closeSheet(o); });
  ovStack.push(o); o.refresh();
  document.body.style.overflow = 'hidden';
  const f = sh.querySelector('[autofocus]'); if (f) setTimeout(() => f.focus(), 50);
  return o;
}
function closeSheet(o) {
  o = o || ovStack[ovStack.length - 1]; if (!o) return;
  const i = ovStack.indexOf(o); if (i >= 0) ovStack.splice(i, 1);
  o.scrim.remove(); o.opts.onClose && o.opts.onClose();
  if (!ovStack.length) document.body.style.overflow = '';
}
const topSheet = () => ovStack[ovStack.length - 1];
function sheetHead(title, opts = {}) {
  return `<header class="top">${opts.back !== false ? `<button class="iconbtn" data-a="closeSheet" aria-label="Zpět">${opts.close ? ICON.close : ICON.back}</button>` : ''}<div class="grow"><h1 style="font-size:24px">${title}</h1>${opts.sub ? `<div class="sub">${opts.sub}</div>` : ''}</div>${opts.right || ''}</header>`;
}
function confirmSheet(title, text, buttons) {
  const o = openSheet(() => `<div class="stack" style="padding-top:4px"><h2 class="h2">${title}</h2>${text ? `<p class="muted" style="margin:0">${text}</p>` : ''}
    ${buttons.map((b, i) => `<button class="btn block ${b.cls || ''}" data-a="cfm" data-i="${i}">${b.label}</button>`).join('')}
    <button class="btn block ghost" data-a="closeSheet">Zpět</button></div>`);
  o.buttons = buttons; return o;
}
A.cfm = el => { const o = topSheet(); const b = o.buttons[+el.dataset.i]; closeSheet(o); b.fn && b.fn(); };
A.closeSheet = () => closeSheet();

/* Toast s undo */
let toastT = null;
function toast(msg, undo, cls = '', label = 'Zpět') {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div'); t.className = 'toast ' + cls; t.setAttribute('role', 'status');
  t.innerHTML = `<span>${msg}</span>${undo ? `<button type="button">${label}</button>` : ''}`;
  if (undo) t.querySelector('button').onclick = () => { t.remove(); undo(); };
  $('#app').after(t);
  clearTimeout(toastT); toastT = setTimeout(() => t.remove(), label !== 'Zpět' ? 20000 : undo ? 6000 : 2800);
}

/* Zvuk a vibrace */
let actx = null;
function beep() {
  if (!SET().sound) return;
  try { actx ||= new (window.AudioContext || window.webkitAudioContext)(); const t = actx.currentTime;
    [0, .22, .44].forEach((d, i) => { const o = actx.createOscillator(), g = actx.createGain(); o.frequency.value = i === 2 ? 1175 : 880; g.gain.setValueAtTime(.0001, t + d); g.gain.exponentialRampToValueAtTime(.25, t + d + .02); g.gain.exponentialRampToValueAtTime(.0001, t + d + .18); o.connect(g).connect(actx.destination); o.start(t + d); o.stop(t + d + .2); });
  } catch {}
}
const vib = p => { if (SET().vib) try { navigator.vibrate && navigator.vibrate(p); } catch {} };

/* Wake lock během tréninku */
let wakeLock = null;
async function keepAwake(on) {
  try { if (on && !wakeLock && navigator.wakeLock && document.visibilityState === 'visible') { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => wakeLock = null); }
    if (!on && wakeLock) { await wakeLock.release(); wakeLock = null; } } catch { wakeLock = null; }
}
document.addEventListener('visibilitychange', () => { if (DB.active.w) keepAwake(true); });

/* ===================== DOMŮ ===================== */
function weekStart(t) { const d = new Date(t); d.setHours(0, 0, 0, 0); const ws = SET().weekStart; const diff = (d.getDay() - ws + 7) % 7; return d.getTime() - diff * DAY; }
function weekStreak() {
  const ws = allWorkouts(); if (!ws.length) return 0;
  const goal = SET().weekGoal; const cnt = {};
  for (const w of ws) { const k = weekStart(w.start); cnt[k] = (cnt[k] || 0) + 1; }
  let k = weekStart(Date.now()); let streak = 0;
  if ((cnt[k] || 0) >= goal) streak++;
  k = weekStart(k - 3 * DAY);
  while ((cnt[k] || 0) >= goal && streak < 520) { streak++; k = weekStart(k - 3 * DAY); }
  return streak;
}
function viewHome() {
  const p = activeProgram(); const ws = allWorkouts();
  const thisWeek = ws.filter(w => w.start >= weekStart(Date.now())).length;
  const goal = SET().weekGoal; const streak = weekStreak();
  let hero = '';
  if (p && p.days.length) {
    const di = (p.next || 0) % p.days.length; const d = p.days[di]; const ph = programPhase(p);
    let phase = '';
    if (ph) {
      const bits = [];
      if (ph.block) bits.push(`Týden ${ph.cycleWeek}/${ph.total} · ${esc(ph.block)}`);
      if (ph.deload) bits.push('Odlehčovací týden');
      if (ph.comp != null) bits.push(ph.comp === 0 ? 'Turnaj dnes' : `Turnaj za ${ph.comp} ${plural(ph.comp, 'den', 'dny', 'dní')}`);
      phase = bits.map(b => `<span class="phase">${b}</span>`).join(' ');
    }
    hero = `<section class="hero">
      <div class="eyebrow">Další na řadě · ${esc(p.name)}</div>
      <div class="day">${esc(d.name)}</div>${phase}
      <div class="exlist" style="margin-top:8px">${d.items.map(i => esc(exById(i.ex).n)).join(' · ')}</div>
      ${ph && ph.deload ? '<div class="small" style="margin-top:8px;opacity:.9">Odlehčení: dnes ber o ~40 % nižší váhy a o třetinu méně sérií.</div>' : ''}
      ${ph && ph.comp != null && ph.comp <= 2 ? '<div class="small" style="margin-top:8px;opacity:.9">Před turnajem: žádné série do selhání, krátký trénink.</div>' : ''}
      <button class="btn big block" data-a="startDay" data-p="${p.id}" data-d="${di}">Začít trénink</button>
    </section>
    ${p.days.length > 1 ? `<div class="section"><span class="eyebrow">Nebo jiný den</span><div class="chips">${p.days.map((d, i) => `<button class="chip" data-a="startDay" data-p="${p.id}" data-d="${i}">${esc(d.name)}</button>`).join('')}</div></div>` : ''}`;
  } else {
    hero = `<section class="card stack"><h2 class="h2">Začni prvním tréninkem</h2><p class="muted" style="margin:0">Vyber si hotový program, nebo začni prázdný trénink a cviky přidávej průběžně.</p>
      <button class="btn primary big block" data-a="onboarding">Vybrat program</button></section>`;
  }
  const recent = ws.slice(0, 3);
  const backupDue = ws.length >= 5 && Date.now() - (S().meta.lastBackup || 0) > 30 * DAY;
  return header('Trénink', fmtDateDay(Date.now()), `<span class="sync ${sync.status}" data-sync><i></i>${syncLabel()}</span>`) + `
  <div class="stack">
    ${hero}
    <button class="btn block" data-a="startEmpty">${ICON.plus} Prázdný trénink</button>
    <div class="card weekline">
      <div class="grow"><div class="h3">Tento týden ${thisWeek}/${goal}</div><div class="small muted">${streak ? `${streak} ${plural(streak, 'týden', 'týdny', 'týdnů')} v řadě se splněným cílem` : 'Splň týdenní cíl a začni sérii týdnů'}</div></div>
      <div class="dots" aria-hidden="true">${Array.from({ length: goal }, (_, i) => `<i class="${i < thisWeek ? 'on' : ''}"></i>`).join('')}</div>
    </div>
    ${backupDue ? `<div class="banner"><span class="grow">Poslední záloha dat je starší než měsíc.</span><button class="btn sm" data-a="exportJson">Zálohovat</button></div>` : ''}
  </div>
  ${recent.length ? `<div class="section"><div class="row between"><span class="eyebrow">Poslední tréninky</span><button class="linkbtn small" data-a="goHistory">Celá historie</button></div>
    <div class="list" style="margin-top:8px">${recent.map(workoutLi).join('')}</div></div>` : ''}`;
}
function workoutLi(w) {
  const sets = w.ex.reduce((a, e) => a + e.sets.filter(s => s.done).length, 0);
  const prs = w.ex.reduce((a, e) => a + e.sets.filter(s => s.pr).length, 0);
  return `<button class="li" data-a="openWorkout" data-id="${w.id}"><div class="grow"><div class="h3 ellipsis">${esc(w.name)}</div>
    <div class="small muted">${fmtDateDay(w.start)} · ${fmtMin((w.end - w.start) / 1000)} · ${sets} ${plural(sets, 'série', 'série', 'sérií')}</div></div>
    ${prs ? `<span class="tag pr">${prs}× rekord</span>` : ''}<span class="chev">${ICON.chev}</span></button>`;
}

/* ===================== Start tréninku ===================== */
function buildSets(exId, item, n) {
  const ex = exById(exId); const last = lastSession(exId);
  const lastWork = last ? last.it.sets.filter(s => s.done && s.k !== 'w') : [];
  const sides = ex.sd ? ['L', 'P'] : [''];
  let up = false;
  if (lastWork.length && (ex.t === 'wr') && item && item.hi) {
    const all = lastWork.every(s => (+s.reps || 0) >= item.hi);
    if (all && lastWork.length >= Math.min(item.sets || 1, lastWork.length)) up = true;
  }
  const out = [];
  for (let i = 0; i < n; i++) for (const side of sides) {
    const ls = lastWork.filter(s => (s.side || '') === side);
    const src = ls[i] || ls[ls.length - 1];
    const s = { k:'n', side, done:false };
    if (ex.t === 'wr' || ex.t === 'bw' || ex.t === 'time') s.kg = src ? src.kg ?? null : null;
    if (ex.t === 'wr' || ex.t === 'bw' || ex.t === 'speed') s.reps = src && ex.t !== 'speed' ? src.reps : (item ? item.lo : null);
    if (ex.t === 'time') s.sec = src ? src.sec : (item ? item.lo : 30);
    if (ex.t === 'dist') s.cm = null;
    if (ex.t === 'speed') s.mph = null;
    if (up && s.kg != null) { s.kg = Math.round((+s.kg + toKg(SET().inc)) * 100) / 100; s.reps = item.lo; s.up = 1; }
    out.push(s);
  }
  return out;
}
function startWorkout({ name, programId = null, dayIdx = null, items = [] }) {
  const w = { id: uid(), start: Date.now(), name, programId, dayIdx, note:'', ex: items.map(i => ({ id: uid(), ex: i.ex, ss: i.ss || 0, rest: i.rest || null, lo: i.lo, hi: i.hi, note:'', sets: Array.isArray(i.sets) ? i.sets : buildSets(i.ex, i, i.n || i.sets || 3) })) };
  DB.active.w = w; DB.active.restEnd = 0; saveActive();
  TAB = 'train'; keepAwake(true); window.scrollTo(0, 0); render();
}
A.startDay = el => {
  const go = () => { const p = S().programs.find(x => x.id === el.dataset.p); const di = +el.dataset.d; const d = p.days[di];
    startWorkout({ name: d.name, programId: p.id, dayIdx: di, items: d.items.map(i => ({ ...i, n: i.sets })) }); };
  if (DB.active.w) return confirmSheet('Rozpracovaný trénink', 'Už máš spuštěný trénink. Chceš ho zahodit a začít nový?', [{ label:'Zahodit a začít nový', cls:'danger', fn: () => { DB.active.w = null; go(); } }]);
  go();
};
A.startEmpty = () => startWorkout({ name: 'Trénink ' + fmtDateShort(Date.now()) });
A.onboarding = () => openOnboarding();
A.goHistory = () => { statsTab = 'hist'; setTab('stats'); };
A.settings = () => openSettings();

function openOnboarding() {
  const picks = ['ppl', 'fb', 'golf_off'];
  openSheet(() => `<div class="stack"><div><h2 class="h2">Vyber si program</h2><p class="muted small" style="margin:4px 0 0">Kdykoliv ho upravíš nebo vyměníš v záložce Plány.</p></div>
    ${picks.map(id => { const t = TEMPLATES.find(x => x.tid === id); return `<button class="onb-card" data-a="pickTemplate" data-t="${id}"><div class="grow"><div class="h3">${esc(t.name)}</div><div class="small muted">${esc(t.desc)}</div></div><span class="chev">${ICON.chev}</span></button>`; }).join('')}
    <button class="btn block" data-a="moreTemplates">Další programy (výbušnost, overspeed, mobilita…)</button>
    <button class="btn ghost block" data-a="skipOnb">Přeskočit, začnu prázdným tréninkem</button></div>`, { modal: false, onClose: () => { if (!S().meta.onboarded) { S().meta.onboarded = true; saveState(); } } });
}
A.pickTemplate = el => {
  const t = TEMPLATES.find(x => x.tid === el.dataset.t); const p = programFromTemplate(t);
  S().programs.push(p); S().activeProgramId = p.id; S().meta.onboarded = true; saveState();
  while (ovStack.length) closeSheet();
  render(); toast(`Program „${esc(p.name)}“ je aktivní`);
};
A.moreTemplates = () => { closeSheet(); openTemplates(); };
A.skipOnb = () => { S().meta.onboarded = true; saveState(); closeSheet(); };

/* ===================== AKTIVNÍ TRÉNINK ===================== */
function viewWorkout() {
  const w = DB.active.w;
  const done = w.ex.reduce((a, e) => a + e.sets.filter(s => s.done).length, 0);
  const total = w.ex.reduce((a, e) => a + e.sets.length, 0);
  return `<header class="top" style="flex-wrap:wrap;row-gap:4px"><input class="wk-title grow" id="wkname" value="${esc(w.name)}" aria-label="Název tréninku" data-in="wkname">
      <button class="btn primary" data-a="finish">Dokončit</button>
      <div class="row tiny muted" style="width:100%;white-space:nowrap"><span class="timer" data-elapsed>${fmtDur((Date.now() - w.start) / 1000)}</span><span>· ${done}/${total} sérií</span><span class="grow"></span><span class="sync ${sync.status}" data-sync><i></i>${syncLabel()}</span></div></header>
    <div class="stack">${w.ex.length ? w.ex.map((it, i) => exCard(it, i, w)).join('') : `<div class="card empty"><div class="h3">Prázdný trénink</div>Přidej první cvik z knihovny.</div>`}
    <button class="btn block big" data-a="addExercise">${ICON.plus} Přidat cvik</button>
    <button class="btn ghost block" data-a="cancelWorkout" style="color:var(--warn)">Zrušit trénink</button></div>`;
}
function exCard(it, i, w) {
  const ex = exById(it.ex); const cols = COLS[ex.t];
  const prevItem = i > 0 ? w.ex[i - 1] : null;
  const inSS = it.ss || (prevItem && prevItem.ss);
  const ssLabel = inSS ? ssName(w, i) : '';
  const last = lastSession(it.ex);
  const lastWork = last ? last.it.sets.filter(s => s.done && s.k !== 'w') : [];
  const sideIdx = { L:0, P:0, '':0 };
  const rows = it.sets.map((s, si) => {
    const side = s.side || ''; const n = s.k === 'w' ? null : (++sideIdx[side]);
    const ls = lastWork.filter(x => (x.side || '') === side); const pv = n ? ls[n - 1] : null;
    const lab = s.k === 'w' ? 'Z' : s.k === 'f' ? 'S' : s.k === 'd' ? 'D' : (side || '') + n;
    const cells = cols.map(c => {
      let v = s[c]; let shown = v == null || v === '' ? '' : (c === 'kg' ? fmtNum(kgTo(v)) : fmtNum(v));
      const ph = !shown; if (ph) shown = c === 'kg' && (ex.t === 'bw' || ex.t === 'time') ? '0' : '–';
      return `<button class="val ${ph ? 'ph' : ''} ${s.up && c === 'kg' ? 'up' : ''}" data-a="pad" data-i="${i}" data-s="${si}" data-f="${c}" aria-label="${colLabel(ex.t, c)} série ${lab}">${shown}</button>`;
    }).join('');
    return `<div class="setrow ${s.done ? 'done' : ''} ${s.pr ? 'pr' : ''}">
      <button class="setno ${s.k}" data-a="setMenu" data-i="${i}" data-s="${si}" aria-label="Typ série ${lab}">${lab}</button>
      <div class="prev">${pv ? setText(ex, pv) : '<span class="faint">–</span>'}${s.up ? ' <b>↑</b>' : ''}</div>
      ${cells}
      <button class="chk" data-a="tick" data-i="${i}" data-s="${si}" aria-label="Série hotová" aria-pressed="${s.done}">${ICON.check}</button></div>`;
  }).join('');
  const target = it.lo ? `${it.lo === it.hi ? it.lo : it.lo + '–' + it.hi} ${ex.t === 'time' ? 's' : ex.t === 'speed' ? 'švihů' : 'opak.'}` : '';
  return `<article class="excard ${inSS ? 'ssA' : ''}">
    <div class="exhead"><button class="exname" data-a="exInfo" data-ex="${ex.id}">${ssLabel ? `<span class="ssmark">${ssLabel} </span>` : ''}${esc(ex.n)}</button>
      <button class="iconbtn" data-a="exMenu" data-i="${i}" aria-label="Možnosti cviku">${ICON.dots}</button></div>
    ${target || it.note ? `<div class="exnote">${target ? 'Cíl: ' + target : ''}${it.up ? '' : ''}${it.note ? (target ? ' · ' : '') + esc(it.note) : ''}</div>` : ''}
    <div class="sets ${cols.length === 1 ? 'c1' : ''}"><div class="hd">Série</div><div class="hd l">Minule</div>${cols.map(c => `<div class="hd">${colLabel(ex.t, c)}</div>`).join('')}<div class="hd">Hotovo</div>${rows}</div>
    <div class="exfoot"><button class="btn sm" data-a="addSet" data-i="${i}">${ICON.plus} Série</button><button class="btn sm" data-a="exInfo" data-ex="${ex.id}">Ukázka</button></div>
  </article>`;
}
function ssName(w, i) { let start = i; while (start > 0 && w.ex[start - 1].ss) start--; let g = 0; for (let k = 0; k < start; k++) { if (!(k > 0 && w.ex[k - 1].ss)) g++; } const letter = String.fromCharCode(65 + g % 26); return letter + (i - start + 1); }

A.addSet = el => {
  const it = DB.active.w.ex[+el.dataset.i]; const ex = exById(it.ex);
  const lastS = it.sets[it.sets.length - 1];
  const add = side => { const s = lastS ? { ...lastS, k: lastS.k === 'w' ? 'n' : lastS.k, done:false, pr:0, up:0, side } : buildSets(it.ex, it, 1)[0]; s.side = side; it.sets.push(s); };
  if (ex.sd) { add('L'); add('P'); } else add('');
  saveActive(); rerender();
};
A.tick = el => {
  const i = +el.dataset.i, si = +el.dataset.s; const it = DB.active.w.ex[i]; const s = it.sets[si]; const ex = exById(it.ex);
  if (s.done) { s.done = false; s.pr = 0; saveActive(); rerender(); return; }
  const need = COLS[ex.t].filter(c => !(c === 'kg' && (ex.t === 'bw' || ex.t === 'time')));
  const missing = need.find(c => s[c] == null || s[c] === '' || (c !== 'kg' && +s[c] <= 0));
  if (missing) { openPad(i, si, missing); return; }
  completeSet(i, si);
};
function completeSet(i, si) {
  const w = DB.active.w; const it = w.ex[i]; const s = it.sets[si]; const ex = exById(it.ex);
  s.done = true; s.at = Date.now(); vib(15);
  const sc = setScore(ex, s);
  if (s.k !== 'w' && sc > 0) {
    const best = Math.max(bestScore(it.ex, w.id), ...w.ex.filter(e => e.ex === it.ex).flatMap(e => e.sets.filter(x => x !== s && x.done && x.pr).map(x => setScore(ex, x))));
    const hadHistory = (histIndex().byEx[it.ex] || []).length > 0;
    if (hadHistory && sc > best + 1e-9) { s.pr = 1; toast(`Nový osobní rekord: ${esc(ex.n)} · ${setText(ex, s)}`, null, 'gold'); vib([30, 60, 30]); }
  }
  // pauza
  const nextIt = w.ex[i + 1];
  if (it.ss && nextIt) { toast(`Superset: pokračuj cvikem ${esc(exById(nextIt.ex).n)}`); }
  else if (SET().autoRest) {
    const secs = s.k === 'w' ? 60 : (it.rest || ex.r || SET().rest);
    startRest(secs);
  }
  saveActive(); rerender();
}
A.setMenu = el => {
  const i = +el.dataset.i, si = +el.dataset.s; const it = DB.active.w.ex[i]; const s = it.sets[si]; const ex = exById(it.ex);
  const types = [['n', 'Normální série'], ['w', 'Zahřívací (Z)'], ...(isExplosive(ex) ? [] : [['f', 'Do selhání (S)']]), ['d', 'Drop série (D)']];
  openSheet(() => `<div class="stack"><h2 class="h2">Série</h2>
    <div class="seg">${types.map(([k, l]) => `<button aria-pressed="${s.k === k}" data-a="setType" data-k="${k}">${l.split(' (')[0]}</button>`).join('')}</div>
    ${ex.sd ? `<span class="lbl">Strana</span><div class="seg"><button aria-pressed="${s.side === 'L'}" data-a="setSide" data-v="L">Levá (L)</button><button aria-pressed="${s.side === 'P'}" data-a="setSide" data-v="P">Pravá (P)</button></div>` : ''}
    ${SET().rpe ? `<span class="lbl">Náročnost RPE <span class="faint">(10 = nic v rezervě)</span></span><div class="seg">${[6, 7, 8, 9, 10].map(r => `<button aria-pressed="${s.rpe === r}" data-a="setRpe" data-v="${r}">${r}</button>`).join('')}</div>` : ''}
    <button class="btn danger block" data-a="delSet">${ICON.trash} Smazat sérii</button></div>`, {});
  const o = topSheet(); o.ctx = { i, si };
};
A.setType = el => { const { i, si } = topSheet().ctx; DB.active.w.ex[i].sets[si].k = el.dataset.k; saveActive(); closeSheet(); rerender(); };
A.setSide = el => { const { i, si } = topSheet().ctx; DB.active.w.ex[i].sets[si].side = el.dataset.v; saveActive(); closeSheet(); rerender(); };
A.setRpe = el => { const { i, si } = topSheet().ctx; DB.active.w.ex[i].sets[si].rpe = +el.dataset.v; saveActive(); closeSheet(); rerender(); };
A.delSet = () => {
  const { i, si } = topSheet().ctx; const it = DB.active.w.ex[i]; const [rm] = it.sets.splice(si, 1); saveActive(); closeSheet(); rerender();
  toast('Série smazána', () => { it.sets.splice(si, 0, rm); saveActive(); rerender(); });
};
A.exMenu = el => {
  const i = +el.dataset.i; const w = DB.active.w; const it = w.ex[i]; const ex = exById(it.ex);
  openSheet(() => `<div class="stack"><h2 class="h2">${esc(ex.n)}</h2><div class="list">
    <button class="li" data-a="exNote">Poznámka ke cviku</button>
    <button class="li" data-a="exRest">Pauza po sérii: ${fmtDur(it.rest || ex.r || SET().rest)}</button>
    <button class="li" data-a="exSwap">Vyměnit za jiný cvik</button>
    ${i > 0 ? `<button class="li" data-a="exMove" data-d="-1">Posunout nahoru</button>` : ''}
    ${i < w.ex.length - 1 ? `<button class="li" data-a="exMove" data-d="1">Posunout dolů</button>` : ''}
    ${i < w.ex.length - 1 ? `<button class="li" data-a="exSS">${it.ss ? 'Zrušit superset s dalším cvikem' : 'Spojit s dalším cvikem do supersetu'}</button>` : ''}
    ${ex.t === 'wr' ? `<button class="li" data-a="plateCalc">Kalkulačka kotoučů</button>` : ''}
    <button class="li" data-a="exRemove" style="color:var(--warn)">Odebrat cvik z tréninku</button></div></div>`);
  topSheet().ctx = { i };
};
A.exNote = () => { const { i } = topSheet().ctx; const it = DB.active.w.ex[i]; closeSheet();
  openSheet(() => `<div class="stack"><h2 class="h2">Poznámka</h2><textarea class="input" id="exnote" autofocus placeholder="Např. nastavení sedačky 4, úchop široký">${esc(it.note)}</textarea><button class="btn primary block" data-a="exNoteSave">Uložit</button></div>`); topSheet().ctx = { i }; };
A.exNoteSave = () => { const { i } = topSheet().ctx; DB.active.w.ex[i].note = $('#exnote').value.trim(); saveActive(); closeSheet(); rerender(); };
A.exRest = () => { const { i } = topSheet().ctx; closeSheet(); const opts = [30, 45, 60, 90, 120, 150, 180, 240, 300];
  openSheet(() => `<div class="stack"><h2 class="h2">Pauza po sérii</h2><div class="keys">${opts.map(s => `<button data-a="exRestSet" data-v="${s}">${fmtDur(s)}</button>`).join('')}</div></div>`); topSheet().ctx = { i }; };
A.exRestSet = el => { const { i } = topSheet().ctx; DB.active.w.ex[i].rest = +el.dataset.v; saveActive(); closeSheet(); rerender(); };
A.exSwap = () => { const { i } = topSheet().ctx; closeSheet(); openPicker(id => { const it = DB.active.w.ex[i]; it.ex = id; it.sets = buildSets(id, it, Math.max(1, Math.ceil(it.sets.length / (exById(id).sd ? 2 : 1)))); saveActive(); rerender(); }, { single: true }); };
A.exMove = el => { const { i } = topSheet().ctx; const d = +el.dataset.d; const a = DB.active.w.ex; [a[i], a[i + d]] = [a[i + d], a[i]]; saveActive(); closeSheet(); rerender(); };
A.exSS = () => { const { i } = topSheet().ctx; const it = DB.active.w.ex[i]; it.ss = it.ss ? 0 : 1; saveActive(); closeSheet(); rerender(); };
A.exRemove = () => { const { i } = topSheet().ctx; const a = DB.active.w.ex; const [rm] = a.splice(i, 1); saveActive(); closeSheet(); rerender();
  toast(`${esc(exById(rm.ex).n)} odebrán`, () => { a.splice(i, 0, rm); saveActive(); rerender(); }); };
A.addExercise = () => openPicker(ids => { for (const id of ids) DB.active.w.ex.push({ id: uid(), ex: id, ss:0, rest:null, note:'', sets: buildSets(id, null, 3) }); saveActive(); rerender(); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 50); });
A.cancelWorkout = () => confirmSheet('Zrušit trénink?', 'Zapsané série se neuloží.', [{ label:'Zrušit trénink', cls:'danger', fn: () => {
  const w = DB.active.w; DB.active.w = null; DB.active.restEnd = 0; saveActive(); keepAwake(false); render();
  toast('Trénink zrušen', () => { DB.active.w = w; saveActive(); TAB = 'train'; render(); }); } }]);

/* Vstupy */
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset.in === 'wkname' && DB.active.w) { DB.active.w.name = t.value; saveActive(); }
});

/* ===================== Klávesnice pro váhy a opakování ===================== */
let kp = null;
const keypadOpen = () => !!kp;
function openPad(i, si, field) {
  kp = { i, si, field, buf: null };
  const o = openSheet(o => padHtml(), { onClose: () => { kp = null; rerender(); } });
  kp.o = o;
}
A.pad = el => openPad(+el.dataset.i, +el.dataset.s, el.dataset.f);
function padCur() { const it = DB.active.w.ex[kp.i]; return { it, s: it.sets[kp.si], ex: exById(it.ex) }; }
function padValStr() {
  const { s } = padCur(); if (kp.buf != null) return kp.buf;
  const v = s[kp.field]; if (v == null || v === '') return '';
  return String(kp.field === 'kg' ? kgTo(v) : v).replace('.', ',');
}
function padStep(f) { if (f === 'kg') return SET().unit === 'lb' ? (SET().inc >= 5 ? SET().inc : 5) : SET().inc; return ({ reps:1, sec:5, cm:5, mph:.5 })[f]; }
function padHtml() {
  const { s, ex, it } = padCur(); const cols = COLS[ex.t];
  const lab = s.k === 'w' ? 'zahřívací' : `${s.side ? s.side + ' ' : ''}${it.sets.filter(x => x.k !== 'w' && (x.side || '') === (s.side || '')).indexOf(s) + 1}`;
  const st = padStep(kp.field); const stS = String(st).replace('.', ',');
  return `<div class="stack" style="gap:10px">
    <div class="row between"><div class="grow"><div class="h3 ellipsis">${esc(ex.n)}</div><div class="small muted">Série ${lab}</div></div><button class="iconbtn" data-a="closeSheet" aria-label="Zavřít">${ICON.close}</button></div>
    ${cols.length > 1 ? `<div class="pad-tabs">${cols.map(c => `<button data-a="padField" data-f="${c}" aria-pressed="${kp.field === c}">${colLabel(ex.t, c)}: <span class="num">${c === kp.field ? '' : (s[c] == null || s[c] === '' ? '–' : fmtNum(c === 'kg' ? kgTo(s[c]) : s[c]))}</span></button>`).join('')}</div>` : ''}
    <div class="pad-val" aria-live="polite">${padValStr() || '<span class="faint">0</span>'} <span class="faint" style="font-size:24px">${colLabel(ex.t, kp.field)}</span></div>
    <div class="pad-step"><button data-a="padStep" data-v="-${st * 2}">−${String(st * 2).replace('.', ',')}</button><button data-a="padStep" data-v="-${st}">−${stS}</button><button data-a="padStep" data-v="${st}">+${stS}</button><button data-a="padStep" data-v="${st * 2}">+${String(st * 2).replace('.', ',')}</button></div>
    <div class="keys">${['1','2','3','4','5','6','7','8','9', kp.field === 'kg' || kp.field === 'mph' ? ',' : '', '0', '⌫'].map(k => k ? `<button data-a="padKey" data-k="${k}" aria-label="${k === '⌫' ? 'Smazat' : k}">${k}</button>` : '<span></span>').join('')}</div>
    <div class="row">${cols.length > 1 && cols.indexOf(kp.field) < cols.length - 1 ? `<button class="btn grow" data-a="padNext">Další: ${colLabel(ex.t, cols[cols.indexOf(kp.field) + 1])}</button>` : `<button class="btn grow" data-a="padSave">Uložit</button>`}
      <button class="btn primary grow" data-a="padDone">${ICON.check} Série hotová</button></div></div>`;
}
function padCommit() {
  if (kp.buf == null) return; const { s } = padCur();
  const n = kp.buf === '' ? null : parseFloat(kp.buf.replace(',', '.'));
  s[kp.field] = n == null || isNaN(n) ? null : (kp.field === 'kg' ? Math.round(toKg(n) * 1000) / 1000 : n);
  if (kp.field === 'kg') s.up = 0;
  kp.buf = null; saveActive();
}
A.padKey = el => {
  const k = el.dataset.k; let b = kp.buf == null ? '' : kp.buf;
  if (k === '⌫') b = (kp.buf == null ? padValStr() : b).slice(0, -1);
  else if (k === ',') { if (!b.includes(',')) b = (b || '0') + ','; }
  else { if (b.length >= 6) return; b = b === '0' ? k : b + k; }
  kp.buf = b; kp.o.refresh();
};
A.padStep = el => {
  const { s } = padCur(); padCommit();
  const cur = s[kp.field] == null ? 0 : (kp.field === 'kg' ? kgTo(s[kp.field]) : +s[kp.field]);
  let v = Math.max(0, Math.round((cur + parseFloat(el.dataset.v)) * 100) / 100);
  if (kp.field === 'reps' || kp.field === 'sec' || kp.field === 'cm') v = Math.round(v);
  s[kp.field] = kp.field === 'kg' ? Math.round(toKg(v) * 1000) / 1000 : v; if (kp.field === 'kg') s.up = 0;
  saveActive(); kp.o.refresh();
};
A.padField = el => { padCommit(); kp.field = el.dataset.f; kp.o.refresh(); };
A.padNext = () => { padCommit(); const { ex } = padCur(); const c = COLS[ex.t]; kp.field = c[c.indexOf(kp.field) + 1]; kp.o.refresh(); };
A.padSave = () => { padCommit(); closeSheet(); };
A.padDone = () => {
  padCommit(); const { s, ex } = padCur(); const { i, si } = kp;
  const need = COLS[ex.t].filter(c => !(c === 'kg' && (ex.t === 'bw' || ex.t === 'time')));
  const missing = need.find(c => s[c] == null || s[c] === '' || (c !== 'kg' && +s[c] <= 0));
  if (missing) { kp.field = missing; kp.o.refresh(); toast('Doplň ' + colLabel(ex.t, missing)); return; }
  closeSheet(); if (!s.done) completeSet(i, si);
};
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && ovStack.length) { closeSheet(); return; }
  if (!kp || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (/^[0-9]$/.test(e.key)) { A.padKey({ dataset: { k: e.key } }); e.preventDefault(); }
  else if (e.key === ',' || e.key === '.') { A.padKey({ dataset: { k: ',' } }); e.preventDefault(); }
  else if (e.key === 'Backspace') { A.padKey({ dataset: { k: '⌫' } }); e.preventDefault(); }
  else if (e.key === 'Enter') { A.padDone(); e.preventDefault(); }
  else if (e.key === 'Tab') { const { ex } = padCur(); const c = COLS[ex.t]; if (c.length > 1) { padCommit(); kp.field = c[(c.indexOf(kp.field) + 1) % c.length]; kp.o.refresh(); e.preventDefault(); } }
});

/* Kalkulačka kotoučů */
A.plateCalc = () => {
  const { i } = topSheet().ctx; closeSheet(); const it = DB.active.w.ex[i];
  const last = [...it.sets].reverse().find(s => s.kg); let target = last ? kgTo(last.kg) : 60;
  const o = openSheet(() => {
    const bar = kgTo(SET().bar); const plates = U() === 'lb' ? [45, 35, 25, 10, 5, 2.5] : [25, 20, 15, 10, 5, 2.5, 1.25];
    let side = (target - bar) / 2; const use = [];
    for (const p of plates) while (side >= p - 1e-9) { use.push(p); side -= p; }
    return `<div class="stack"><h2 class="h2">Kalkulačka kotoučů</h2>
      <div class="field"><label for="pcT">Cílová váha (${U()})</label><input class="input num" id="pcT" inputmode="decimal" value="${fmtNum(target)}" data-in="pc" style="font-size:24px"></div>
      <div class="small muted">Osa ${fmtNum(bar)} ${U()} (změníš v Nastavení)</div>
      <div class="card"><div class="lbl">Na každou stranu</div><div class="h2" style="margin-top:4px">${target <= bar ? 'Jen osa' : use.length ? use.map(p => fmtNum(p, 2)).join(' + ') : '–'}</div>
      ${side > 0.01 && target > bar ? `<div class="small" style="color:var(--warn)">Zbývá ${fmtNum(side * 2, 2)} ${U()}, nejde složit přesně.</div>` : ''}</div></div>`;
  });
  o.sh.addEventListener('change', e => { if (e.target.id === 'pcT') { target = parseFloat(e.target.value.replace(',', '.')) || 0; o.refresh(); } });
};

/* ===================== Pauza ===================== */
let restFired = false;
function startRest(secs) { DB.active.restEnd = Date.now() + secs * 1000; DB.active.restTotal = secs; restFired = false; saveActive(); renderRestBar(); }
A.restAdj = el => { DB.active.restEnd += +el.dataset.v * 1000; DB.active.restTotal += +el.dataset.v; if (DB.active.restEnd > Date.now()) restFired = false; saveActive(); renderRestBar(); };
A.restSkip = () => { DB.active.restEnd = 0; saveActive(); renderRestBar(); };
function renderRestBar() {
  let bar = $('#restbar');
  const show = DB.active.w && TAB === 'train' && DB.active.restEnd && Date.now() < DB.active.restEnd + 4000;
  if (!show) { if (bar) bar.remove(); return; }
  if (!bar) { bar = document.createElement('div'); bar.id = 'restbar'; bar.className = 'restbar'; bar.setAttribute('role', 'timer');
    bar.innerHTML = `<div class="restbar-in"><div class="grow"><div class="tiny muted" style="font-weight:700;text-transform:uppercase;letter-spacing:.06em">Pauza</div><div class="rest-time" data-rt></div><div class="rest-prog"><i data-rp></i></div></div>
      <button class="btn sm" data-a="restAdj" data-v="-15">−15 s</button><button class="btn sm" data-a="restAdj" data-v="15">+15 s</button><button class="btn sm primary" data-a="restSkip">Přeskočit</button></div>`;
    document.body.appendChild(bar); }
  tickRest();
}
function tickRest() {
  const bar = $('#restbar'); if (!bar) return;
  const left = (DB.active.restEnd - Date.now()) / 1000;
  bar.classList.toggle('done', left <= 0);
  bar.querySelector('[data-rt]').textContent = left > 0 ? fmtDur(Math.ceil(left)) : 'Jdeme!';
  bar.querySelector('[data-rp]').style.width = Math.max(0, Math.min(100, 100 * (1 - left / (DB.active.restTotal || 1)))) + '%';
}
setInterval(() => {
  if (!DB.active.w) return;
  document.querySelectorAll('[data-elapsed]').forEach(e => e.textContent = fmtDur((Date.now() - DB.active.w.start) / 1000));
  if (DB.active.restEnd) {
    const left = DB.active.restEnd - Date.now();
    if (left <= 0 && !restFired) { restFired = true; vib([200, 100, 200]); beep(); }
    if (left < -4000) { DB.active.restEnd = 0; }
    renderRestBar();
  }
}, 250);

/* ===================== Dokončení ===================== */
A.finish = () => {
  const w = DB.active.w; const pending = w.ex.flatMap(e => e.sets.filter(s => !s.done));
  const doneCount = w.ex.reduce((a, e) => a + e.sets.filter(s => s.done).length, 0);
  if (!doneCount) return confirmSheet('Žádná hotová série', 'Odškrtni alespoň jednu sérii, nebo trénink zruš.', [{ label:'Zrušit trénink', cls:'danger', fn: A.cancelWorkout }]);
  if (pending.length) return confirmSheet(`${pending.length} ${plural(pending.length, 'série není odškrtnutá', 'série nejsou odškrtnuté', 'sérií není odškrtnutých')}`, 'Neodškrtnuté série se do historie neuloží.', [{ label:'Dokončit bez nich', cls:'primary', fn: finishNow }]);
  finishNow();
};
function finishNow() {
  const w = clone(DB.active.w); w.end = Date.now();
  w.ex = w.ex.map(e => ({ ...e, sets: e.sets.filter(s => s.done).map(s => { const o = { ...s }; delete o.up; return o; }) })).filter(e => e.sets.length);
  addWorkoutToHistory(w);
  const p = w.programId ? S().programs.find(x => x.id === w.programId) : null;
  if (p && w.dayIdx != null && p.days.length) { p.next = (w.dayIdx + 1) % p.days.length; saveState(); }
  DB.active.w = null; DB.active.restEnd = 0; saveActive(); keepAwake(false);
  render(); showSummary(w);
}
function workoutStats(w) {
  let vol = 0, sets = 0; const prs = [];
  for (const e of w.ex) { const ex = exById(e.ex); for (const s of e.sets) { sets++; if (ex.t === 'wr' && s.k !== 'w') vol += (+s.kg || 0) * (+s.reps || 0); if (s.pr) prs.push({ ex, s }); } }
  return { vol, sets, prs, dur: (w.end - w.start) / 1000 };
}
function showSummary(w) {
  const st = workoutStats(w);
  const p = w.programId ? S().programs.find(x => x.id === w.programId) : null;
  const day = p && w.dayIdx != null ? p.days[w.dayIdx] : null;
  const planEx = day ? day.items.map(i => i.ex) : []; const wEx = w.ex.map(e => e.ex);
  const changed = day && (wEx.some(id => !planEx.includes(id)) || wEx.filter(id => planEx.includes(id)).join() !== planEx.filter(id => wEx.includes(id)).join() || day.items.some(i => { const e = w.ex.find(x => x.ex === i.ex); return e && Math.ceil(e.sets.filter(s => s.k !== 'w').length / (exById(i.ex).sd ? 2 : 1)) > i.sets; }));
  const o = openSheet(() => `<div class="stack"><div class="eyebrow">Hotovo</div><h2 class="h2" style="font-size:30px">${esc(w.name)}</h2>
    <div class="kpis"><div class="kpi"><div class="v">${fmtMin(st.dur)}</div><div class="l">Délka</div></div><div class="kpi"><div class="v">${st.sets}</div><div class="l">Sérií</div></div>
    <div class="kpi"><div class="v">${fmtNum(kgTo(st.vol) / 1000, 1)} t</div><div class="l">Zvednuto celkem</div></div><div class="kpi"><div class="v">${st.prs.length}</div><div class="l">Osobních rekordů</div></div></div>
    ${st.prs.length ? `<div class="card"><div class="lbl">Nové rekordy</div>${st.prs.map(x => `<div class="row between" style="margin-top:6px"><span>${esc(x.ex.n)}</span><span class="tag pr">${setText(x.ex, x.s)}</span></div>`).join('')}</div>` : ''}
    ${changed ? `<div class="card stack" style="gap:8px"><div class="small">Dnešní trénink se liší od plánu „${esc(day.name)}“.</div><button class="btn block" data-a="updatePlanFromW" data-id="${w.id}">Uložit změny do plánu</button></div>` : ''}
    <button class="btn primary block big" data-a="closeSheet">Hotovo</button></div>`);
  o.ctx = { w };
}
A.updatePlanFromW = () => {
  const { w } = topSheet().ctx; const p = S().programs.find(x => x.id === w.programId); const day = p.days[w.dayIdx];
  const old = day.items;
  const extra = old.filter(i => !w.ex.some(e => e.ex === i.ex));
  day.items = w.ex.map(e => { const ex = exById(e.ex); const prev = old.find(i => i.ex === e.ex) || {}; const work = e.sets.filter(s => s.k !== 'w');
    return { ex: e.ex, sets: Math.max(prev.sets || 1, Math.ceil(work.length / (ex.sd ? 2 : 1))), lo: prev.lo || (ex.t === 'time' ? 30 : 8), hi: prev.hi || (ex.t === 'time' ? 45 : 12), ss: e.ss || 0, rest: e.rest || prev.rest || null }; }).concat(extra);
  saveState(); closeSheet(); toast('Plán aktualizován', () => { day.items = old; saveState(); });
};
/* ===================== Výběr cviků ===================== */
let libFilter = { q:'', f:'', m:'' };
try { Object.assign(libFilter, JSON.parse(localStorage.getItem('svih.lib') || '{}'), { q:'' }); } catch {}
const saveLibFilter = () => { try { localStorage.setItem('svih.lib', JSON.stringify({ f: libFilter.f, m: libFilter.m })); } catch {} };
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
function filterEx(fl) {
  const q = norm(fl.q || '');
  return allEx().filter(e => (!fl.f || (e.f || []).includes(fl.f)) && (!fl.m || e.m.includes(fl.m) || (fl.m && (e.s || []).includes(fl.m) && false)) &&
    (!q || norm(e.n + ' ' + e.eq + ' ' + e.m.map(m => MUSCLES[m]).join(' ')).includes(q))).sort((a, b) => a.n.localeCompare(b.n, 'cs'));
}
function filterChips(fl, act) {
  return `<div class="chips" role="group" aria-label="Zaměření"><button class="chip" data-a="${act}" data-k="f" data-v="" aria-pressed="${!fl.f}">Vše</button>${Object.entries(FOCUS).map(([k, v]) => `<button class="chip" data-a="${act}" data-k="f" data-v="${k}" aria-pressed="${fl.f === k}">${v}</button>`).join('')}</div>
  <div class="chips" role="group" aria-label="Partie" style="margin-top:6px"><button class="chip" data-a="${act}" data-k="m" data-v="" aria-pressed="${!fl.m}">Všechny partie</button>${Object.entries(MUSCLES).map(([k, v]) => `<button class="chip" data-a="${act}" data-k="m" data-v="${k}" aria-pressed="${fl.m === k}">${v}</button>`).join('')}</div>`;
}
function exLi(e, act, extra = '') {
  return `<button class="li" data-a="${act}" data-ex="${e.id}"><div class="grow"><div class="h3" style="font-size:16px">${esc(e.n)}</div>
    <div class="small muted ellipsis">${e.m.map(m => MUSCLES[m]).join(', ')} · ${esc(e.eq)}</div></div>
    ${(e.f || []).includes('golf') ? '<span class="tag golf">Golf</span>' : (e.f || []).includes('vybus') ? '<span class="tag vybus">Výbušnost</span>' : ''}${e.custom ? '<span class="tag">Vlastní</span>' : ''}${extra}</button>`;
}
function openPicker(cb, opts = {}) {
  const fl = { q:'', f:'', m:'' }; const sel = [];
  const o = openSheet(() => {
    const list = filterEx(fl);
    const recentIds = [...new Set(allWorkouts().slice(0, 10).flatMap(w => w.ex.map(e => e.ex)))].slice(0, 8);
    const showRecent = !fl.q && !fl.f && !fl.m && recentIds.length;
    const li = e => `<button class="li" data-a="pickEx" data-ex="${e.id}" aria-pressed="${sel.includes(e.id)}"><div class="grow"><div class="h3" style="font-size:16px">${esc(e.n)}</div><div class="small muted ellipsis">${e.m.map(m => MUSCLES[m]).join(', ')} · ${esc(e.eq)}</div></div>
      <span class="chk" style="width:36px;height:36px;${sel.includes(e.id) ? 'background:var(--accent);border-color:var(--accent);color:var(--accent-ink)' : ''}">${sel.includes(e.id) ? ICON.check : ''}</span></button>`;
    return sheetHead(opts.single ? 'Vyber cvik' : 'Přidat cviky', { close: true }) + `
      <div class="search"><span>${ICON.search}</span><input class="input" id="pkq" placeholder="Hledat cvik, partii, vybavení" value="${esc(fl.q)}" data-in="pkq" autocomplete="off"></div>
      <div style="margin-top:10px">${filterChips(fl, 'pkFilter')}</div>
      ${showRecent ? `<div class="section"><span class="eyebrow">Naposledy použité</span><div class="list">${recentIds.map(id => li(exById(id))).join('')}</div></div>` : ''}
      <div class="section"><span class="eyebrow">${list.length} ${plural(list.length, 'cvik', 'cviky', 'cviků')}</span><div class="list">${list.map(li).join('') || '<div class="empty">Nic nenalezeno. Zkus jiné slovo, nebo si vytvoř vlastní cvik.</div>'}</div></div>
      <button class="btn block" data-a="newCustom" style="margin-top:12px">${ICON.plus} Vytvořit vlastní cvik</button>
      ${!opts.single ? `<div style="position:sticky;bottom:0;padding:12px 0 4px;background:var(--bg)"><button class="btn primary block big" data-a="pickDone" ${sel.length ? '' : 'disabled'}>Přidat ${sel.length || ''} ${sel.length ? plural(sel.length, 'cvik', 'cviky', 'cviků') : ''}</button></div>` : ''}`;
  }, { full: true });
  o.ctx = { fl, sel, cb, opts };
  o.sh.addEventListener('input', e => { if (e.target.id === 'pkq') { fl.q = e.target.value; const pos = e.target.selectionStart; o.refresh(); const inp = o.sh.querySelector('#pkq'); inp.focus(); inp.setSelectionRange(pos, pos); } });
}
A.pkFilter = el => { const { fl } = topSheet().ctx; fl[el.dataset.k] = el.dataset.v; topSheet().refresh(); };
A.pickEx = el => { const o = topSheet(); const { sel, cb, opts } = o.ctx; const id = el.dataset.ex;
  if (opts.single) { closeSheet(o); cb(id); return; }
  const i = sel.indexOf(id); if (i >= 0) sel.splice(i, 1); else sel.push(id); o.refresh(); };
A.pickDone = () => { const o = topSheet(); const { sel, cb } = o.ctx; closeSheet(o); cb(sel.slice()); };

/* ===================== Knihovna ===================== */
function viewLib() {
  const list = filterEx(libFilter);
  return header('Cviky', `${allEx().length} cviků s ukázkou a postupem`) + `
    <div class="search"><span>${ICON.search}</span><input class="input" id="libq" placeholder="Hledat cvik, partii, vybavení" value="${esc(libFilter.q)}" autocomplete="off"></div>
    <div style="margin-top:10px">${filterChips(libFilter, 'libFilter')}</div>
    <div class="section"><div class="row between"><span class="eyebrow">${list.length} ${plural(list.length, 'cvik', 'cviky', 'cviků')}</span><button class="linkbtn small" data-a="newCustom">+ Vlastní cvik</button></div>
    <div class="list" style="margin-top:8px">${list.map(e => exLi(e, 'exInfo')).join('') || '<div class="empty"><div class="h3">Nic nenalezeno</div>Zkus jiné slovo nebo zruš filtr.</div>'}</div></div>`;
}
A.libFilter = el => { libFilter[el.dataset.k] = el.dataset.v; saveLibFilter(); rerender(); };
document.addEventListener('input', e => { if (e.target.id === 'libq') { libFilter.q = e.target.value; const pos = e.target.selectionStart; rerender(); const i = $('#libq'); i.focus(); i.setSelectionRange(pos, pos); } });

/* ---------- Animace (schematická postava) ---------- */
const LEN = { T:46, UA:27, FA:25, TH:36, SH:36 };
const vec = (a, l) => [l * Math.sin(a * Math.PI / 180), l * Math.cos(a * Math.PI / 180)];
const add2 = (p, q) => [p[0] + q[0], p[1] + q[1]];
const sub2 = (p, q) => [p[0] - q[0], p[1] - q[1]];
const GY = 158;
function solve(k) {
  let hip;
  if (k.a === 'h') hip = [k.hx, k.hy];
  else if (k.a === 'k') hip = sub2([k.kx, GY - 5], vec(k.TH, LEN.TH));
  else { const foot = [k.fx, k.fy || GY]; hip = sub2(sub2(foot, vec(k.SH, LEN.SH)), vec(k.TH, LEN.TH)); hip[1] += (k.dy || 0); }
  const knee = add2(hip, vec(k.TH, LEN.TH)), ank = add2(knee, vec(k.SH, LEN.SH));
  const th2 = k.TH2 ?? k.TH, sh2 = k.SH2 ?? k.SH;
  const knee2 = add2(hip, vec(th2, LEN.TH)), ank2 = add2(knee2, vec(sh2, LEN.SH));
  const sh = add2(hip, vec(k.T, LEN.T)), head = add2(sh, vec(k.T, 15));
  const el = add2(sh, vec(k.UA, LEN.UA)), hand = add2(el, vec(k.FA, LEN.FA));
  const el2 = add2(sh, vec(k.UA2 ?? k.UA, LEN.UA)), hand2 = add2(el2, vec(k.FA2 ?? k.FA, LEN.FA));
  const toeDir = Math.abs(k.T) > 120 && Math.abs(k.T) < 240 ? 1 : 1;
  return { hip, knee, ank, toe: add2(ank, [8 * toeDir, 0]), knee2, ank2, toe2: add2(ank2, [8, 0]), sh, head, el, hand, el2, hand2, CL: k.CL ?? k.FA };
}
const lerp = (a, b, t) => a + (b - a) * t;
function lerpKey(a, b, t) { const o = { ...a }; for (const k in a) if (typeof a[k] === 'number' && typeof b[k] === 'number') o[k] = lerp(a[k], b[k], t); for (const k in b) if (!(k in a)) o[k] = b[k]; return o; }
function fillKey(k) { const o = { ...k }; for (const x of ['TH2','SH2','UA2','FA2']) if (o[x] == null) o[x] = o[x.slice(0, 2)]; if (o.dy == null) o.dy = 0; return o; }
const P = p => p.map(n => n.toFixed(1)).join(',');
function demoSvg(ex) {
  const pat = PAT[ex.p]; if (!pat) return '';
  const prop = ex.pr || pat.prop || '';
  const ks = pat.k.map(fillKey); const s0 = solve(ks[0]);
  let gear = '';
  if (pat.bench === 1) gear += `<rect class="gear" x="62" y="${ks[0].hy + 8}" width="110" height="9" rx="3"/><path class="ground" d="M75 ${ks[0].hy + 17}V${GY}M160 ${ks[0].hy + 17}V${GY}"/>`;
  if (pat.bench === 2) { const sb = solve(ks[1]).sh; gear += `<rect class="gear" x="${sb[0] - 30}" y="${sb[1] + 6}" width="40" height="${GY - sb[1] - 6}" rx="3"/>`; }
  if (pat.seat) gear += `<rect class="gear" x="${s0.hip[0] - 22}" y="${s0.hip[1] + 6}" width="36" height="8" rx="3"/><path class="ground" d="M${s0.hip[0] - 4} ${s0.hip[1] + 14}V${GY}"/>`;
  if (pat.box) gear += `<rect class="gear" x="${pat.box[0]}" y="${pat.box[1]}" width="${pat.box[2]}" height="${pat.box[3]}" rx="3"/>`;
  if (ex.box) gear += `<rect class="gear" x="160" y="118" width="46" height="40" rx="3"/>`;
  if (pat.pullbar) { const hy = Math.min(...ks.map(k => solve(k).hand[1])); gear += `<path class="prop" d="M60 ${hy - 3}H160" style="stroke:var(--ink3)"/>`; }
  return `<svg viewBox="0 -30 220 200" role="img" aria-label="Schematická ukázka pohybu: ${esc(ex.n)}" data-demo="${ex.id}">
    <line class="ground" x1="8" y1="${GY + 1}" x2="212" y2="${GY + 1}"/>${gear}
    <polyline class="fig far" data-j="leg2"/><polyline class="fig far" data-j="arm2"/>
    <g data-j="propback"></g>
    <polyline class="fig" data-j="body"/><circle class="fig-head" r="9" data-j="head"/><polyline class="fig" data-j="arm"/>
    <g data-j="prop" data-prop="${prop}"></g></svg>`;
}
let anim = null;
function startDemo(root, ex) {
  stopDemo();
  const svg = root.querySelector('svg[data-demo]'); if (!svg) return;
  const pat = PAT[ex.p]; const ks = pat.k.map(fillKey); const prop = ex.pr || pat.prop || '';
  const J = n => svg.querySelector(`[data-j="${n}"]`);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const seg = 1100, hold = 350, n = ks.length; const cyc = n === 2 ? 2 : n; const total = cyc * (seg + hold);
  function draw(k) {
    const s = solve(k);
    J('leg2').setAttribute('points', P([s.hip, s.knee2, s.ank2, s.toe2].flat()));
    J('arm2').setAttribute('points', P([s.sh, s.el2, s.hand2].flat()));
    J('body').setAttribute('points', P([s.sh, s.hip, s.knee, s.ank, s.toe].flat()));
    J('arm').setAttribute('points', P([s.sh, s.el, s.hand].flat()));
    J('head').setAttribute('cx', s.head[0].toFixed(1)); J('head').setAttribute('cy', s.head[1].toFixed(1));
    const at = pat.at === 'shoulder' ? [s.sh[0] - 9, s.sh[1] + 2] : pat.at === 'hip' ? [s.hip[0] + 4, s.hip[1] - 12] : s.hand;
    const [x, y] = at; let h = '';
    if (prop === 'bar' || prop === 'trap') h = `<circle class="prop" cx="${x}" cy="${y}" r="13"/><circle class="prop-fill" cx="${x}" cy="${y}" r="3"/>`;
    else if (prop === 'db') h = `<rect class="prop-fill" x="${x - 9}" y="${y - 4}" width="18" height="8" rx="3"/>`;
    else if (prop === 'kb') h = `<circle class="prop-fill" cx="${x}" cy="${y + 8}" r="8"/><path class="prop" d="M${x - 5} ${y + 2}Q${x} ${y - 6} ${x + 5} ${y + 2}"/>`;
    else if (prop === 'ball' || prop === 'wheel') h = `<circle class="prop-fill" cx="${x}" cy="${y}" r="${prop === 'ball' ? 10 : 9}"/>`;
    else if (prop === 'club') { const e = add2(s.hand, vec(s.CL, 68)); h = `<line class="prop" x1="${x}" y1="${y}" x2="${e[0]}" y2="${e[1]}" style="stroke-width:3"/><rect class="prop-fill" x="${e[0] - 6}" y="${e[1] - 3}" width="12" height="6" rx="2" transform="rotate(${-s.CL + 90} ${e[0]} ${e[1]})"/>`; }
    else if (prop === 'cable') h = `<line class="prop" x1="${x}" y1="${y}" x2="${pat.cab[0]}" y2="${pat.cab[1]}" style="stroke-width:2;opacity:.8"/><circle class="prop-fill" cx="${pat.cab[0]}" cy="${pat.cab[1]}" r="5"/><rect class="prop-fill" x="${x - 6}" y="${y - 3}" width="12" height="6" rx="2"/>`;
    else if (prop === 'lm') h = `<line class="prop" x1="${x}" y1="${y}" x2="${pat.lm[0]}" y2="${pat.lm[1]}"/><circle class="prop" cx="${lerp(x, pat.lm[0], .12)}" cy="${lerp(y, pat.lm[1], .12)}" r="9"/>`;
    if (pat.bars) h += `<path class="prop" style="stroke:var(--ink3)" d="M${x - 16} ${y + 2}H${x + 16}"/>`;
    if (pat.sled) { const t = s.toe; h += `<path class="prop" style="stroke:var(--ink3);stroke-width:6" d="M${t[0] - 10} ${t[1] + 12}L${t[0] + 6} ${t[1] - 14}"/>`; }
    J('prop').innerHTML = h;
  }
  if (reduce) { draw(ks[n - 1]); anim = { stop() {}, toggle() { this.i = ((this.i || 0) + 1) % n; draw(ks[this.i]); } }; return; }
  let t0 = performance.now(), raf = 0, paused = false, pausedAt = 0;
  const ease = t => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  function frame(now) {
    if (!svg.isConnected) return;
    const t = (((now - t0) % total) + total) % total; const idx = Math.floor(t / (seg + hold)); const lt = t - idx * (seg + hold);
    let a, b;
    if (n === 2) { a = ks[idx % 2]; b = ks[(idx + 1) % 2]; } else { a = ks[idx]; b = ks[(idx + 1) % n]; }
    const f = lt < hold ? 0 : ease((lt - hold) / seg);
    draw(lerpKey(a, b, f));
    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);
  anim = { stop() { cancelAnimationFrame(raf); }, toggle() { if (paused) { t0 += performance.now() - pausedAt; paused = false; raf = requestAnimationFrame(frame); } else { paused = true; pausedAt = performance.now(); cancelAnimationFrame(raf); } return paused; } };
}
function stopDemo() { if (anim) anim.stop(); anim = null; }
A.demoToggle = el => { if (!anim) return; const p = anim.toggle(); if (p !== undefined) el.innerHTML = p ? ICON.play : ICON.pause; };

/* ---------- Detail cviku ---------- */
function exHistory(exId) { return (histIndex().byEx[exId] || []).map(({ w, it }) => ({ w, it, best: Math.max(0, ...it.sets.map(s => setScore(exById(exId), s))) })); }
A.exInfo = el => openExDetail(el.dataset.ex);
function openExDetail(id) {
  const o = openSheet(() => {
    const ex = exById(id); const hist = exHistory(id); const best = hist.reduce((a, h) => Math.max(a, h.best), 0);
    const yt = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(ex.n + ' technika');
    const pts = hist.slice().reverse().map(h => ({ x: h.w.start, y: ex.t === 'wr' ? kgTo(h.best) : h.best }));
    return sheetHead(esc(ex.n), { right: ex.custom ? `<button class="iconbtn" data-a="editCustom" data-ex="${ex.id}" aria-label="Upravit vlastní cvik">${ICON.gear}</button>` : '' }) + `
    <div class="stack">
      ${PAT[ex.p] ? `<div class="demo"><span class="cap">Schematická ukázka pohybu</span><button class="iconbtn play" data-a="demoToggle" aria-label="Pozastavit / spustit">${ICON.pause}</button>${demoSvg(ex)}</div>` : ''}
      <a class="btn block" href="${yt}" target="_blank" rel="noopener">${ICON.play} Video ukázka na YouTube ↗</a>
      <div class="mini">${ex.m.map(m => `<span class="tag golf">${MUSCLES[m]}</span>`).join('')}${(ex.s || []).map(m => `<span class="tag">${MUSCLES[m]}</span>`).join('')}<span class="tag">${esc(ex.eq)}</span>${ex.sd ? '<span class="tag">Po stranách L/P</span>' : ''}<span class="tag">${TYPES[ex.t]}</span></div>
      ${ex.st && ex.st.length && ex.st[0] ? `<div class="card"><h3 class="h3" style="margin-bottom:10px">Jak na to</h3><ol class="steps">${ex.st.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div>` : ''}
      ${ex.cu && ex.cu[0] ? `<div class="card"><h3 class="h3" style="margin-bottom:8px">Na co myslet</h3><ul class="bul">${ex.cu.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
      ${ex.mi && ex.mi[0] ? `<div class="card"><h3 class="h3" style="margin-bottom:8px">Časté chyby</h3><ul class="bul">${ex.mi.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
      <div class="card stack" style="gap:8px"><h3 class="h3">Můj progres</h3>
        ${hist.length ? `<div class="row between"><span class="small muted">${scoreLabel(ex)}</span><span class="tag pr">Rekord ${scoreFmt(ex, best)}</span></div>
        ${pts.length >= 2 ? lineChart([pts]) : '<div class="small muted">Graf se ukáže po 2 trénincích s tímto cvikem.</div>'}
        <div class="list" style="box-shadow:none;background:var(--surface2)">${hist.slice(0, 6).map(h => `<div class="li" style="min-height:0"><div class="grow small"><b>${fmtDateDay(h.w.start)}</b> · ${h.it.sets.map(s => setText(ex, s)).join(', ')}</div></div>`).join('')}</div>`
        : '<div class="small muted">Zatím žádný záznam. Po prvním tréninku tu uvidíš historii a rekordy.</div>'}</div>
      ${DB.active.w ? `<button class="btn primary block big" data-a="addToActive" data-ex="${ex.id}">${ICON.plus} Přidat do tréninku</button>` : ''}
      <button class="btn block" data-a="addToPlan" data-ex="${ex.id}">Přidat do plánu</button>
    </div>`;
  }, { full: true, after: o => { const ex = exById(id); startDemo(o.sh, ex); }, onClose: stopDemo });
}
A.addToActive = el => { DB.active.w.ex.push({ id: uid(), ex: el.dataset.ex, ss:0, rest:null, note:'', sets: buildSets(el.dataset.ex, null, 3) }); saveActive(); closeSheet(); TAB = 'train'; rerender(); toast('Cvik přidán do tréninku'); };
A.addToPlan = el => {
  const exId = el.dataset.ex; const progs = S().programs;
  if (!progs.length) return toast('Nejdřív si vytvoř program v záložce Plány');
  openSheet(() => `<div class="stack"><h2 class="h2">Do kterého dne?</h2>${progs.map(p => `<div><span class="eyebrow">${esc(p.name)}</span><div class="list" style="margin-top:6px">${p.days.map((d, i) => `<button class="li" data-a="addToPlanDay" data-p="${p.id}" data-d="${i}">${esc(d.name)}</button>`).join('')}</div></div>`).join('')}</div>`);
  topSheet().ctx = { exId };
};
A.addToPlanDay = el => { const { exId } = topSheet().ctx; const p = S().programs.find(x => x.id === el.dataset.p); const d = p.days[+el.dataset.d]; const ex = exById(exId);
  d.items.push({ ex: exId, sets: 3, lo: ex.t === 'time' ? 30 : 8, hi: ex.t === 'time' ? 45 : 12, ss: 0 }); saveState(); closeSheet(); toast(`Přidáno do „${esc(d.name)}“`); };

/* ---------- Vlastní cvik ---------- */
A.newCustom = () => openCustomEditor(null);
A.editCustom = el => openCustomEditor(el.dataset.ex);
function openCustomEditor(id) {
  const cur = id ? S().custom.find(c => c.id === id) : null;
  const d = cur ? clone(cur) : { id: 'c_' + uid(), n:'', m:['chest'], s:[], eq:'Velká činka', f:['sila'], t:'wr', sd:0, st:[], cu:[], mi:[], r:90 };
  const o = openSheet(() => sheetHead(cur ? 'Upravit cvik' : 'Vlastní cvik', { close: true }) + `<div class="stack">
    <div class="field"><label for="cn">Název</label><input class="input" id="cn" value="${esc(d.n)}" placeholder="Např. Tlaky na stroji Hammer"></div>
    <div class="field"><span class="lbl">Hlavní partie</span><div class="mini">${Object.entries(MUSCLES).map(([k, v]) => `<button class="chip" data-a="cuM" data-v="${k}" aria-pressed="${d.m.includes(k)}">${v}</button>`).join('')}</div></div>
    <div class="field"><span class="lbl">Zaměření</span><div class="mini">${Object.entries(FOCUS).map(([k, v]) => `<button class="chip" data-a="cuF" data-v="${k}" aria-pressed="${d.f.includes(k)}">${v}</button>`).join('')}</div></div>
    <div class="field"><label for="ct">Co zapisovat</label><select class="input" id="ct">${Object.entries(TYPES).map(([k, v]) => `<option value="${k}" ${d.t === k ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
    <div class="field"><label for="ceq">Vybavení</label><input class="input" id="ceq" value="${esc(d.eq)}"></div>
    <div class="row between card"><span>Cvičí se po stranách (L/P)</span><button class="toggle" role="switch" aria-checked="${!!d.sd}" data-a="cuSd" aria-label="Po stranách"></button></div>
    <div class="field"><label for="cst">Postup (každý krok na nový řádek)</label><textarea class="input" id="cst">${esc(d.st.join('\n'))}</textarea></div>
    <div class="field"><label for="ccu">Na co myslet (řádky)</label><textarea class="input" id="ccu">${esc(d.cu.join('\n'))}</textarea></div>
    <button class="btn primary block big" data-a="cuSave">Uložit cvik</button>
    ${cur ? `<button class="btn danger block" data-a="cuDel">Smazat cvik</button>` : ''}</div>`, { full: true });
  const grab = () => { d.n = $('#cn', o.sh).value.trim(); d.t = $('#ct', o.sh).value; d.eq = $('#ceq', o.sh).value.trim(); d.st = $('#cst', o.sh).value.split('\n').map(s => s.trim()).filter(Boolean); d.cu = $('#ccu', o.sh).value.split('\n').map(s => s.trim()).filter(Boolean); };
  o.ctx = { d, cur, grab };
}
A.cuM = el => { const { d, grab } = topSheet().ctx; grab(); const v = el.dataset.v; d.m = d.m.includes(v) ? d.m.filter(x => x !== v) : [...d.m, v]; topSheet().refresh(); };
A.cuF = el => { const { d, grab } = topSheet().ctx; grab(); const v = el.dataset.v; d.f = d.f.includes(v) ? d.f.filter(x => x !== v) : [...d.f, v]; topSheet().refresh(); };
A.cuSd = () => { const { d, grab } = topSheet().ctx; grab(); d.sd = d.sd ? 0 : 1; topSheet().refresh(); };
A.cuSave = () => { const { d, cur, grab } = topSheet().ctx; grab();
  if (!d.n) { toast('Vyplň název cviku'); return; } if (!d.m.length) d.m = ['core'];
  if (cur) Object.assign(cur, d); else S().custom.push(d); saveState(); rebuildExMap(); closeSheet(); rerender(); ovStack.forEach(o => o.refresh()); toast(cur ? 'Cvik upraven' : 'Cvik vytvořen'); };
A.cuDel = () => { const { cur } = topSheet().ctx; const arr = S().custom; const i = arr.indexOf(cur); arr.splice(i, 1); saveState(); while (ovStack.length) closeSheet(); rerender();
  toast('Cvik smazán', () => { arr.splice(i, 0, cur); saveState(); rerender(); }); };

/* ===================== PLÁNY ===================== */
function viewPlans() {
  const ps = S().programs; const act = activeProgram();
  return header('Plány', 'Programy a tréninkové dny') + `
  ${ps.length ? `<div class="list">${ps.map(p => `<button class="li" data-a="editProgram" data-p="${p.id}"><div class="grow"><div class="row" style="gap:8px"><span class="h3">${esc(p.name)}</span>${p.id === S().activeProgramId ? '<span class="tag golf">Aktivní</span>' : ''}</div>
    <div class="small muted ellipsis">${p.days.length} ${plural(p.days.length, 'den', 'dny', 'dní')}: ${p.days.map(d => esc(d.name)).join(', ')}</div></div><span class="chev">${ICON.chev}</span></button>`).join('')}</div>`
    : `<div class="card empty"><div class="h3">Zatím žádný program</div>Přidej hotový program a uprav si ho, nebo si sestav vlastní.</div>`}
  <div class="stack section"><button class="btn primary block" data-a="templates">Přidat hotový program</button><button class="btn block" data-a="newProgram">${ICON.plus} Vlastní program</button></div>
  ${!act && ps.length ? '<p class="small muted">Tip: otevři program a nastav ho jako aktivní. Na úvodní obrazovce pak uvidíš, který den je na řadě.</p>' : ''}`;
}
A.templates = () => openTemplates();
function openTemplates() {
  openSheet(() => sheetHead('Hotové programy', { close: true }) + `<div class="stack">${TEMPLATES.map(t => `<button class="onb-card" data-a="addTemplate" data-t="${t.tid}"><div class="grow">
    <div class="row" style="gap:8px"><span class="h3">${esc(t.name)}</span><span class="tag ${t.tag}">${FOCUS[t.tag]}</span></div><div class="small muted" style="margin-top:4px">${esc(t.desc)}</div>
    <div class="tiny faint" style="margin-top:4px">${t.days.map(d => esc(d.name)).join(' · ')}</div></div><span class="chev">${ICON.chev}</span></button>`).join('')}</div>`, { full: true });
}
A.addTemplate = el => {
  const t = TEMPLATES.find(x => x.tid === el.dataset.t); const p = programFromTemplate(t); S().programs.push(p);
  const wasActive = S().activeProgramId; if (!activeProgram()) S().activeProgramId = p.id; S().meta.onboarded = true; saveState();
  while (ovStack.length) closeSheet(); TAB = 'plans'; render(); openProgramEditor(p.id);
  toast(`Program „${esc(p.name)}“ přidán`, () => { S().programs = S().programs.filter(x => x !== p); S().activeProgramId = wasActive; saveState(); while (ovStack.length) closeSheet(); render(); });
};
A.newProgram = () => { const p = { id: uid(), name:'Můj program', desc:'', tag:'sila', blocks:null, start: isoDay(Date.now()), comp:'', next:0, days:[{ id: uid(), name:'Den A', items:[] }] }; S().programs.push(p); if (!activeProgram()) S().activeProgramId = p.id; saveState(); rerender(); openProgramEditor(p.id); };
A.editProgram = el => openProgramEditor(el.dataset.p);
function openProgramEditor(pid) {
  const o = openSheet(() => {
    const p = S().programs.find(x => x.id === pid); if (!p) return sheetHead('Program smazán');
    const ph = programPhase(p); const isAct = S().activeProgramId === p.id;
    return sheetHead('Program', { right: '' }) + `<div class="stack">
      <div class="field"><label for="pn">Název</label><input class="input" id="pn" value="${esc(p.name)}" data-pf="name"></div>
      ${p.desc ? `<p class="small muted" style="margin:0">${esc(p.desc)}</p>` : ''}
      ${isAct ? '<div class="banner" style="background:var(--accent-soft)">Tento program je aktivní – na úvodní obrazovce vidíš další den.</div>' : `<button class="btn primary block" data-a="setActive" data-p="${p.id}">Nastavit jako aktivní</button>`}
      <div><span class="eyebrow">Tréninkové dny</span><div class="list" style="margin-top:8px">${p.days.map((d, i) => `<button class="li" data-a="editDay" data-p="${p.id}" data-d="${i}"><div class="grow"><div class="row" style="gap:8px"><span class="h3">${esc(d.name)}</span>${isAct && (p.next || 0) % p.days.length === i ? '<span class="tag golf">Další na řadě</span>' : ''}</div>
        <div class="small muted ellipsis">${d.items.length ? d.items.map(it => esc(exById(it.ex).n)).join(', ') : 'Zatím bez cviků'}</div></div><span class="chev">${ICON.chev}</span></button>`).join('')}</div>
        <button class="btn block" style="margin-top:8px" data-a="addDay" data-p="${p.id}">${ICON.plus} Přidat den</button></div>
      <div class="card stack" style="gap:10px"><h3 class="h3">Období a sezóna</h3>
        <div class="field"><label for="pst">Začátek programu (pro počítání týdnů)</label><input class="input" type="date" id="pst" value="${esc(p.start || '')}" data-pf="start"></div>
        ${p.blocks ? `<div class="small"><b>Bloky:</b> ${p.blocks.map(b => `${esc(b.n)} (${b.w} t.)`).join(' → ')}</div>` : ''}
        ${ph ? `<div class="small muted">Teď: týden ${ph.week}${ph.block ? ` · ${esc(ph.block)} (${ph.bw}/${ph.bTot})` : ''}${ph.deload ? ' · odlehčovací týden' : ''}</div>` : ''}
        <div class="field"><label for="pcomp">Datum turnaje / soutěže (volitelné)</label><input class="input" type="date" id="pcomp" value="${esc(p.comp || '')}" data-pf="comp"></div>
        <div class="tiny faint">Odlehčovací týden: každý ${SET().deload || '–'}. týden (změníš v Nastavení).</div></div>
      <button class="btn block" data-a="dupProgram" data-p="${p.id}">Duplikovat program</button>
      <button class="btn danger block" data-a="delProgram" data-p="${p.id}">Smazat program</button></div>`;
  }, { full: true });
  o.sh.addEventListener('change', e => { const f = e.target.dataset.pf; if (!f) return; const p = S().programs.find(x => x.id === pid); p[f] = e.target.value.trim(); if (f === 'name' && !p.name) p.name = 'Program'; saveState(); rerender(); o.refresh(); });
}
A.setActive = el => { S().activeProgramId = el.dataset.p; saveState(); rerender(); topSheet().refresh(); toast('Program je aktivní'); };
A.addDay = el => { const p = S().programs.find(x => x.id === el.dataset.p); p.days.push({ id: uid(), name: 'Den ' + String.fromCharCode(65 + p.days.length), items:[] }); saveState(); topSheet().refresh(); openDayEditor(p.id, p.days.length - 1); };
A.dupProgram = el => { const p = S().programs.find(x => x.id === el.dataset.p); const c = clone(p); c.id = uid(); c.name = p.name + ' (kopie)'; c.days.forEach(d => d.id = uid()); S().programs.push(c); saveState(); closeSheet(); rerender(); openProgramEditor(c.id); toast('Program zkopírován'); };
A.delProgram = el => { const ps = S().programs; const i = ps.findIndex(x => x.id === el.dataset.p); const [rm] = ps.splice(i, 1); const wasAct = S().activeProgramId === rm.id; if (wasAct) S().activeProgramId = ps[0]?.id || null; saveState(); closeSheet(); rerender();
  toast('Program smazán', () => { ps.splice(i, 0, rm); if (wasAct) S().activeProgramId = rm.id; saveState(); rerender(); }); };
A.editDay = el => openDayEditor(el.dataset.p, +el.dataset.d);
function openDayEditor(pid, di) {
  const o = openSheet(() => {
    const p = S().programs.find(x => x.id === pid); const d = p && p.days[di]; if (!d) return sheetHead('Den smazán');
    return sheetHead('Tréninkový den', { sub: esc(p.name) }) + `<div class="stack">
      <div class="field"><label for="dn">Název dne</label><input class="input" id="dn" value="${esc(d.name)}" data-df="name"></div>
      <div class="list">${d.items.map((it, i) => { const ex = exById(it.ex); const prevSS = i > 0 && d.items[i - 1].ss; const unit = ex.t === 'time' ? 's' : ex.t === 'speed' ? 'švihů' : ex.t === 'dist' ? 'pokusů' : 'opak.';
        return `<div class="plan-item" ${it.ss || prevSS ? 'style="box-shadow:inset 3px 0 0 var(--gold)"' : ''}><div style="min-width:0"><button class="h3 ellipsis" style="font-size:16px;display:block;max-width:100%;text-align:left" data-a="exInfo" data-ex="${ex.id}">${esc(ex.n)}</button>
          <div class="mini" style="margin-top:6px"><input inputmode="numeric" aria-label="Počet sérií" value="${it.sets}" data-it="${i}" data-k="sets"><span class="small muted">${ex.sd ? 'sérií/str. ×' : 'sérií ×'}</span><input inputmode="numeric" aria-label="Od" value="${it.lo ?? ''}" data-it="${i}" data-k="lo"><span class="muted">–</span><input inputmode="numeric" aria-label="Do" value="${it.hi ?? ''}" data-it="${i}" data-k="hi"><span class="small muted">${unit}</span></div>
          ${i < d.items.length - 1 ? `<button class="linkbtn tiny" style="margin-top:6px" data-a="dSS" data-i="${i}">${it.ss ? '✓ Superset s dalším (zrušit)' : 'Spojit s dalším do supersetu'}</button>` : ''}</div>
          <div class="row" style="gap:0;flex-direction:column"><button class="iconbtn" data-a="dMove" data-i="${i}" data-d="-1" aria-label="Nahoru" ${i === 0 ? 'disabled style="opacity:.3"' : ''}>${ICON.up}</button><button class="iconbtn" data-a="dDel" data-i="${i}" aria-label="Odebrat" style="color:var(--warn)">${ICON.trash}</button><button class="iconbtn" data-a="dMove" data-i="${i}" data-d="1" aria-label="Dolů" ${i === d.items.length - 1 ? 'disabled style="opacity:.3"' : ''}>${ICON.down}</button></div></div>`; }).join('') || '<div class="empty">Přidej cviky do tohoto dne.</div>'}</div>
      <button class="btn block big" data-a="dAdd">${ICON.plus} Přidat cviky</button>
      <p class="tiny faint" style="margin:0">Rozsah opakování řídí automatickou progresi: když ve všech sérií dáš horní hranici, příště ti appka navrhne +${fmtNum(SET().inc)} ${U()}.</p>
      ${d.items.length ? `<button class="btn primary block" data-a="startDay" data-p="${p.id}" data-d="${di}">Začít tento trénink</button>` : ''}
      <div class="row"><button class="btn grow" data-a="dDup">Duplikovat den</button><button class="btn danger grow" data-a="dRemove">Smazat den</button></div></div>`;
  }, { full: true, onClose: () => { ovStack.forEach(x => x.refresh()); } });
  o.ctx = { pid, di };
  const day = () => S().programs.find(x => x.id === pid).days[di];
  o.sh.addEventListener('change', e => {
    if (e.target.dataset.df === 'name') { day().name = e.target.value.trim() || 'Den'; saveState(); return; }
    const i = e.target.dataset.it; if (i == null) return; const it = day().items[+i]; const v = parseInt(e.target.value, 10);
    it[e.target.dataset.k] = isNaN(v) ? (e.target.dataset.k === 'sets' ? 1 : null) : Math.max(e.target.dataset.k === 'sets' ? 1 : 0, v);
    if (it.lo != null && it.hi != null && it.hi < it.lo) it.hi = it.lo; saveState();
  });
}
const dayCtx = () => { const { pid, di } = topSheet().ctx; const p = S().programs.find(x => x.id === pid); return { p, d: p.days[di], di }; };
A.dSS = el => { const { d } = dayCtx(); const it = d.items[+el.dataset.i]; it.ss = it.ss ? 0 : 1; saveState(); topSheet().refresh(); };
A.dMove = el => { const { d } = dayCtx(); const i = +el.dataset.i, k = i + +el.dataset.d; if (k < 0 || k >= d.items.length) return; [d.items[i], d.items[k]] = [d.items[k], d.items[i]]; saveState(); topSheet().refresh(); };
A.dDel = el => { const { d } = dayCtx(); const i = +el.dataset.i; const [rm] = d.items.splice(i, 1); saveState(); topSheet().refresh(); toast(`${esc(exById(rm.ex).n)} odebrán`, () => { d.items.splice(i, 0, rm); saveState(); ovStack.forEach(o => o.refresh()); }); };
A.dAdd = () => { const { d } = dayCtx(); const o = topSheet(); openPicker(ids => { for (const id of ids) { const ex = exById(id); d.items.push({ ex: id, sets: ex.f.includes('vybus') ? 4 : 3, lo: ex.t === 'time' ? 30 : ex.f.includes('vybus') ? 3 : 8, hi: ex.t === 'time' ? 45 : ex.f.includes('vybus') ? 5 : 12, ss: 0 }); } saveState(); o.refresh(); }); };
A.dDup = () => { const { p, d } = dayCtx(); const c = clone(d); c.id = uid(); c.name = d.name + ' (kopie)'; p.days.push(c); saveState(); closeSheet(); topSheet() && topSheet().refresh(); toast('Den zkopírován'); };
A.dRemove = () => { const { p, di } = dayCtx(); const [rm] = p.days.splice(di, 1); if ((p.next || 0) >= p.days.length) p.next = 0; saveState(); closeSheet(); ovStack.forEach(o => o.refresh()); rerender();
  toast('Den smazán', () => { p.days.splice(di, 0, rm); saveState(); ovStack.forEach(o => o.refresh()); rerender(); }); };
/* ===================== Grafy ===================== */
function niceTicks(lo, hi, n = 3) {
  if (hi === lo) { hi = lo + 1; lo = lo - 1; }
  const step0 = (hi - lo) / n; const mag = 10 ** Math.floor(Math.log10(step0)); const step = [1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= step0) || step0;
  const a = Math.floor(lo / step) * step, b = Math.ceil(hi / step) * step; const t = []; for (let v = a; v <= b + 1e-9; v += step) t.push(Math.round(v * 1000) / 1000); return t;
}
function lineChart(series, opts = {}) {
  const W = 340, H = opts.h || 170, L = 36, R = 16, T = 14, B = 24;
  const all = series.flat(); if (!all.length) return '';
  let x0 = Math.min(...all.map(p => p.x)), x1 = Math.max(...all.map(p => p.x)); if (x0 === x1) { x0 -= DAY; x1 += DAY; }
  const ys = all.map(p => p.y); const ticks = niceTicks(Math.min(...ys), Math.max(...ys));
  const y0 = ticks[0], y1 = ticks[ticks.length - 1];
  const X = x => L + (x - x0) / (x1 - x0) * (W - L - R), Y = y => T + (1 - (y - y0) / (y1 - y0 || 1)) * (H - T - B);
  let s = `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(opts.label || 'Graf vývoje')}">`;
  for (const t of ticks) s += `<line class="grid" x1="${L}" x2="${W - R}" y1="${Y(t)}" y2="${Y(t)}"/><text x="${L - 6}" y="${Y(t) + 4}" text-anchor="end">${fmtNum(t)}</text>`;
  s += `<text x="${L}" y="${H - 6}">${fmtDateShort(x0)}</text><text x="${W - R}" y="${H - 6}" text-anchor="end">${fmtDateShort(x1)}</text>`;
  series.forEach((pts, si) => {
    if (!pts.length) return; pts = pts.slice().sort((a, b) => a.x - b.x);
    const d = pts.map((p, i) => (i ? 'L' : 'M') + X(p.x).toFixed(1) + ' ' + Y(p.y).toFixed(1)).join('');
    if (si === 0 && pts.length > 1) s += `<path class="area" d="${d}L${X(pts[pts.length - 1].x).toFixed(1)} ${H - B}L${X(pts[0].x).toFixed(1)} ${H - B}Z"/>`;
    s += `<path class="${si === 0 ? 'ln' : 'ln2'}" d="${d}" ${si > 1 ? 'stroke-dasharray="5 4"' : ''}/>`;
    if (pts.length <= 24) for (const p of pts) s += `<circle class="${si === 0 ? 'pt' : 'pt2'}" cx="${X(p.x)}" cy="${Y(p.y)}" r="2.6"/>`;
    const lp = pts[pts.length - 1]; s += `<circle class="${si === 0 ? 'pt' : 'pt2'}" cx="${X(lp.x)}" cy="${Y(lp.y)}" r="4.5"/><text class="lbl" x="${Math.min(X(lp.x), W - R - 2)}" y="${Y(lp.y) - 9}" text-anchor="end">${fmtNum(lp.y)}</text>`;
  });
  return s + '</svg>';
}
function barChart(bars, goal) {
  const W = 340, H = 150, L = 24, R = 8, T = 12, B = 22; const mx = Math.max(goal || 0, ...bars.map(b => b.v), 1);
  const bw = (W - L - R) / bars.length; const Y = v => T + (1 - v / mx) * (H - T - B);
  let s = `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Počet tréninků po týdnech">`;
  for (const t of [0, Math.ceil(mx / 2), mx]) s += `<line class="grid" x1="${L}" x2="${W - R}" y1="${Y(t)}" y2="${Y(t)}"/><text x="${L - 5}" y="${Y(t) + 4}" text-anchor="end">${t}</text>`;
  bars.forEach((b, i) => { const h = H - B - Y(b.v); s += `<rect class="bar ${goal && b.v < goal ? 'dim' : ''}" x="${L + i * bw + bw * .18}" y="${Y(b.v)}" width="${bw * .64}" height="${Math.max(h, b.v ? 2 : 0)}" rx="2"/>`;
    if (i === 0 || i === bars.length - 1 || (bars.length <= 12 && i % 2 === 0)) s += `<text x="${L + i * bw + bw / 2}" y="${H - 6}" text-anchor="middle">${b.label}</text>`; });
  if (goal) s += `<line class="goal" x1="${L}" x2="${W - R}" y1="${Y(goal)}" y2="${Y(goal)}"/>`;
  return s + '</svg>';
}
const spark = pts => pts.length < 2 ? '' : lineChart([pts], { h: 90 });

/* ===================== STATISTIKY ===================== */
let statsTab = 'over', statsPeriod = 90, statsEx = null, histQ = '';
function viewStats() {
  const tabs = [['over', 'Přehled'], ['ex', 'Cviky'], ['golf', 'Golf & testy'], ['hist', 'Historie']];
  const body = ({ over: statsOverview, ex: statsExercise, golf: statsGolf, hist: statsHistory })[statsTab]();
  return header('Statistiky', '') + `<div class="seg" role="tablist">${tabs.map(([k, l]) => `<button role="tab" aria-selected="${statsTab === k}" aria-pressed="${statsTab === k}" data-a="statsTab" data-v="${k}">${l}</button>`).join('')}</div><div class="section">${body}</div>`;
}
A.statsTab = el => { statsTab = el.dataset.v; rerender(); };
A.statsPeriod = el => { statsPeriod = +el.dataset.v; rerender(); };
function periodRange() { const now = Date.now(); if (!statsPeriod) { const ws = allWorkouts(); const first = ws.length ? ws[ws.length - 1].start : now; return [first - 1, now, null]; } return [now - statsPeriod * DAY, now, now - 2 * statsPeriod * DAY]; }
function delta(cur, prev) { if (prev == null || !prev) return ''; const d = (cur - prev) / prev * 100; if (Math.abs(d) < 1) return '<span class="d faint">beze změny</span>'; return `<span class="d ${d > 0 ? 'up' : 'down'}">${d > 0 ? '▲' : '▼'} ${Math.abs(Math.round(d))} % proti min. období</span>`; }
function sumStats(ws) { let sets = 0, vol = 0; for (const w of ws) for (const e of w.ex) { const ex = exById(e.ex); for (const s of e.sets) { if (s.k === 'w') continue; sets++; if (ex.t === 'wr') vol += (+s.kg || 0) * (+s.reps || 0); } } return { n: ws.length, sets, vol }; }
function statsOverview() {
  const ws = allWorkouts();
  if (!ws.length) return `<div class="card empty"><div class="h3">Statistiky se ukážou po prvním tréninku</div>Uvidíš tu frekvenci tréninků, série na partie, rekordy a kalendář.<div style="margin-top:14px"><button class="btn primary" data-a="goTrain">Začít trénink</button></div></div>` + bodyweightCard();
  const [a, b, pa] = periodRange();
  const cur = ws.filter(w => w.start >= a), prev = pa ? ws.filter(w => w.start >= pa && w.start < a) : null;
  const sc = sumStats(cur), sp = prev ? sumStats(prev) : null;
  const firstW = ws[ws.length - 1].start; const effA = Math.max(a, weekStart(firstW));
  const weeks = Math.max(1, Math.ceil((b - effA) / (7 * DAY)));
  // týdny graf
  const nW = Math.min(52, Math.max(8, statsPeriod ? Math.round(statsPeriod / 7) : weeks)); const bars = []; let k = weekStart(Date.now());
  const cnt = {}; for (const w of ws) { const wk = weekStart(w.start); cnt[wk] = (cnt[wk] || 0) + 1; }
  for (let i = 0; i < nW; i++) { bars.unshift({ label: fmtDateShort(k), v: cnt[k] || 0 }); k = weekStart(k - 3 * DAY); }
  // série na partii
  const mus = {}; for (const w of cur) for (const e of w.ex) { const ex = exById(e.ex); const n = e.sets.filter(s => s.k !== 'w').length; for (const m of ex.m) mus[m] = (mus[m] || 0) + n; for (const m of ex.s || []) mus[m] = (mus[m] || 0) + n * .5; }
  const mrows = Object.keys(MUSCLES).map(m => ({ m, v: (mus[m] || 0) / weeks })).sort((x, y) => y.v - x.v);
  const mx = Math.max(24, ...mrows.map(r => r.v));
  // rekordy
  const prs = []; for (const w of cur) for (const e of w.ex) for (const s of e.sets) if (s.pr) prs.push({ w, ex: exById(e.ex), s });
  // heatmapa 18 týdnů
  const days = {}; for (const w of ws) { const d = isoDay(w.start); days[d] = (days[d] || 0) + 1; }
  const start = weekStart(Date.now()) - 17 * 7 * DAY; let heat = '';
  for (let i = 0; i < 18 * 7; i++) { const t = start + i * DAY + 3 * 3600e3; const c = days[isoDay(t)] || 0; heat += `<i class="${t > Date.now() ? '' : c > 1 ? 'l2' : c ? 'l2' : ''}" title="${fmtDate(t)}${c ? ': trénink' : ''}"></i>`; }
  return `<div class="seg" style="margin-bottom:12px">${[[28, '4 týdny'], [90, '3 měsíce'], [365, 'Rok'], [0, 'Vše']].map(([v, l]) => `<button aria-pressed="${statsPeriod === v}" data-a="statsPeriod" data-v="${v}">${l}</button>`).join('')}</div>
  <div class="kpis">
    <div class="kpi"><div class="v">${sc.n}</div><div class="l">Tréninků</div>${delta(sc.n, sp && sp.n)}</div>
    <div class="kpi"><div class="v">${fmtNum(sc.n / weeks, 1)}</div><div class="l">Tréninků týdně · cíl ${SET().weekGoal}</div></div>
    <div class="kpi"><div class="v">${sc.sets}</div><div class="l">Pracovních sérií</div>${delta(sc.sets, sp && sp.sets)}</div>
    <div class="kpi"><div class="v">${fmtNum(kgTo(sc.vol) / 1000, 1)} t</div><div class="l">Zvednuto celkem</div>${delta(sc.vol, sp && sp.vol)}</div>
  </div>
  <div class="card section"><div class="row between"><h3 class="h3">Tréninky po týdnech</h3><span class="tiny faint">čárkovaně = cíl</span></div>${barChart(bars, SET().weekGoal)}</div>
  <div class="card section"><h3 class="h3">Série na partii za týden <button class="info" data-a="infoSets" aria-label="Vysvětlení">i</button></h3>
    <p class="tiny faint" style="margin:2px 0 12px">Zelené pásmo 10–20 sérií týdně je běžné doporučení pro růst. Pomocné svaly se počítají napůl.</p>
    <div class="mbars">${mrows.map(r => `<div class="mbar"><span class="ellipsis">${MUSCLES[r.m]}</span><div class="track"><div class="band" style="left:${10 / mx * 100}%;width:${10 / mx * 100}%"></div><div class="fill ${r.v < 10 ? 'lo' : r.v > 20 ? 'hi' : ''}" style="width:${Math.min(100, r.v / mx * 100)}%"></div></div><span class="num" style="text-align:right">${fmtNum(r.v, 0)}</span></div>`).join('')}</div></div>
  <div class="card section"><h3 class="h3" style="margin-bottom:10px">Kalendář (18 týdnů)</h3><div class="heat" aria-label="Kalendář tréninků">${heat}</div></div>
  <div class="section"><span class="eyebrow">Osobní rekordy v období</span>${prs.length ? `<div class="list">${prs.slice(0, 12).map(p => `<button class="li" data-a="exInfo" data-ex="${p.ex.id}"><div class="grow"><div class="h3" style="font-size:16px">${esc(p.ex.n)}</div><div class="small muted">${fmtDateDay(p.w.start)}</div></div><span class="tag pr">${setText(p.ex, p.s)}</span></button>`).join('')}</div>` : '<div class="card small muted">V tomto období zatím žádný nový rekord.</div>'}</div>
  ${bodyweightCard()}`;
}
A.goTrain = () => setTab('train');
A.infoSets = () => openSheet(() => `<div class="stack"><h2 class="h2">Série na partii</h2><p style="margin:0">Počítá pracovní série (bez zahřívacích) za průměrný týden ve zvoleném období. Hlavní sval cviku dostane celou sérii, pomocné svaly polovinu.</p><p class="muted" style="margin:0">Šedá = pod 10 sérií (málo na růst), zelená = 10–20, zlatá = nad 20 (hlídej regeneraci). Pro golfistu je v pořádku mít nižší objem a víc výbušných cviků.</p><button class="btn block" data-a="closeSheet">Rozumím</button></div>`);
function bodyweightCard() {
  const bw = S().bw.slice().sort((a, b) => a.d.localeCompare(b.d)); const last = bw[bw.length - 1];
  return `<div class="card section stack" style="gap:8px"><div class="row between"><h3 class="h3">Tělesná váha</h3><button class="btn sm" data-a="addBw">${ICON.plus} Zapsat</button></div>
    ${last ? `<div class="row" style="gap:8px;align-items:baseline"><span class="num" style="font-size:30px;font-weight:700">${fmtNum(kgTo(last.v))}</span><span class="muted">${U()} · ${fmtDate(new Date(last.d + 'T12:00'))}</span></div>${bw.length >= 2 ? spark(bw.map(x => ({ x: new Date(x.d + 'T12:00').getTime(), y: kgTo(x.v) }))) : ''}` : '<div class="small muted">Zapisuj váhu jednou týdně ráno, ať vidíš trend.</div>'}</div>`;
}
A.addBw = () => {
  const o = openSheet(() => `<div class="stack"><h2 class="h2">Tělesná váha</h2><div class="field"><label for="bwv">Váha (${U()})</label><input class="input num" id="bwv" inputmode="decimal" autofocus style="font-size:26px"></div>
    <div class="field"><label for="bwd">Datum</label><input class="input" type="date" id="bwd" value="${isoDay(Date.now())}"></div><button class="btn primary block" data-a="saveBw">Uložit</button></div>`);
};
A.saveBw = () => { const v = parseFloat($('#bwv').value.replace(',', '.')); if (!v) { toast('Zadej váhu'); return; } const d = $('#bwd').value || isoDay(Date.now());
  S().bw = S().bw.filter(x => x.d !== d); S().bw.push({ d, v: toKg(v) }); saveState(); closeSheet(); rerender(); toast('Váha uložena'); };

function statsExercise() {
  const idx = histIndex().byEx; const ids = Object.keys(idx).sort((a, b) => idx[b].length - idx[a].length);
  if (!ids.length) return `<div class="card empty"><div class="h3">Zatím žádné cviky</div>Po prvním tréninku tu uvidíš progres každého cviku.</div>`;
  if (!statsEx || !idx[statsEx]) statsEx = ids[0];
  const ex = exById(statsEx); const hist = exHistory(statsEx); const best = hist.reduce((a, h) => Math.max(a, h.best), 0);
  const pts = hist.slice().reverse().map(h => ({ x: h.w.start, y: ex.t === 'wr' ? kgTo(h.best) : h.best }));
  let maxKg = 0, maxReps = 0, bestSet = null, bestVol = 0;
  for (const h of hist) for (const s of h.it.sets) { if (s.k === 'w') continue; maxKg = Math.max(maxKg, +s.kg || 0); maxReps = Math.max(maxReps, +s.reps || 0); const v = (+s.kg || 0) * (+s.reps || 0); if (v > bestVol) { bestVol = v; bestSet = s; } }
  let asym = '';
  if (ex.sd) { const since = Date.now() - 56 * DAY; let l = 0, p = 0; for (const h of hist) if (h.w.start >= since) for (const s of h.it.sets) { const v = setScore(ex, s); if (s.side === 'L') l = Math.max(l, v); if (s.side === 'P') p = Math.max(p, v); }
    if (l && p) { const d = Math.abs(l - p) / Math.max(l, p) * 100; asym = `<div class="card section"><h3 class="h3">Levá vs. pravá (8 týdnů)</h3><div class="lp" style="margin-top:6px"><span>L: <b>${scoreFmt(ex, l)}</b></span><span>P: <b>${scoreFmt(ex, p)}</b></span><span class="tag ${d > SET().asym ? 'warn' : 'golf'}">rozdíl ${Math.round(d)} %</span></div>${d > SET().asym ? `<p class="small" style="margin:6px 0 0">Rozdíl je nad ${SET().asym} %. Začínej slabší stranou a dorovnej počet opakování.</p>` : ''}</div>`; } }
  return `<div class="field"><label for="sex">Cvik</label><select class="input" id="sex" data-a2="statsEx">${ids.map(id => `<option value="${id}" ${id === statsEx ? 'selected' : ''}>${esc(exById(id).n)} (${idx[id].length}×)</option>`).join('')}</select></div>
    <div class="kpis section"><div class="kpi"><div class="v">${scoreFmt(ex, best)}</div><div class="l">${ex.t === 'wr' ? 'Odhad max. 1 opak. (' + U() + ')' : 'Rekord'}</div></div>
    ${ex.t === 'wr' ? `<div class="kpi"><div class="v">${fmtNum(kgTo(maxKg))}</div><div class="l">Nejvyšší váha (${U()})</div></div><div class="kpi"><div class="v">${bestSet ? setText(ex, bestSet) : '–'}</div><div class="l">Nejlepší série (objem)</div></div>` : `<div class="kpi"><div class="v">${maxReps || '–'}</div><div class="l">Max. opakování</div></div>`}
    <div class="kpi"><div class="v">${hist.length}</div><div class="l">Tréninků s cvikem</div></div></div>
    <div class="card section"><h3 class="h3">${scoreLabel(ex)} <button class="info" data-a="infoE1rm" aria-label="Vysvětlení">i</button></h3>${pts.length >= 2 ? lineChart([pts], { label: scoreLabel(ex) }) : '<p class="small muted">Graf se ukáže po 2 trénincích s tímto cvikem.</p>'}</div>
    ${asym}
    <div class="section"><span class="eyebrow">Poslední tréninky</span><div class="list">${hist.slice(0, 10).map(h => `<button class="li" data-a="openWorkout" data-id="${h.w.id}"><div class="grow"><div class="h3" style="font-size:15px">${fmtDateDay(h.w.start)}</div><div class="small muted">${h.it.sets.map(s => setText(ex, s)).join(', ')}</div></div></button>`).join('')}</div></div>
    <button class="btn block section" data-a="exInfo" data-ex="${ex.id}">Ukázka a postup cviku</button>`;
}
A.infoE1rm = () => openSheet(() => `<div class="stack"><h2 class="h2">Odhad maxima na 1 opakování</h2><p style="margin:0">Z každé série (váha × opakování) appka odhadne, kolik bys zvedl na jedno opakování. Díky tomu se dá porovnat série 80 kg × 8 se sérií 90 kg × 4. Graf ukazuje nejlepší sérii z každého tréninku.</p><p class="muted small" style="margin:0">Nejpřesnější je do 10 opakování. Zahřívací série se nepočítají.</p><button class="btn block" data-a="closeSheet">Rozumím</button></div>`);
document.addEventListener('change', e => { if (e.target.dataset.a2 === 'statsEx') { statsEx = e.target.value; rerender(); } });

function statsGolf() {
  const T = S().tests;
  const chsTests = T.filter(t => t.t === 'chs' && t.v).map(t => ({ x: new Date(t.d + 'T12:00').getTime(), y: +t.v }));
  const chsSets = exHistory('chs_driver').map(h => ({ x: h.w.start, y: h.best })).filter(p => p.y);
  const chs = [...chsTests, ...chsSets].sort((a, b) => a.x - b.x);
  const osSeries = ['os_light', 'os_med', 'os_heavy'].map(id => exHistory(id).map(h => ({ x: h.w.start, y: Math.max(0, ...h.it.sets.filter(s => s.side !== 'L').map(s => +s.mph || 0)) })).filter(p => p.y));
  const chsLast = chs[chs.length - 1], chsFirst = chs[0];
  const cards = TESTS.map(td => {
    const rows = T.filter(t => t.t === td.id).sort((a, b) => a.d.localeCompare(b.d)); const last = rows[rows.length - 1], prev = rows[rows.length - 2];
    const val = r => td.sd ? Math.max(+r.L || 0, +r.P || 0) : +r.v;
    let body = '<span class="small faint">Zatím neměřeno</span>';
    if (last) {
      const ch = prev && val(prev) ? (val(last) - val(prev)) / val(prev) * 100 : null;
      if (td.sd) { const l = +last.L || 0, p = +last.P || 0; const d = l && p ? Math.abs(l - p) / Math.max(l, p) * 100 : 0;
        body = `<div class="lp"><span>L <b class="num" style="font-size:20px">${fmtNum(l)}</b></span><span>P <b class="num" style="font-size:20px">${fmtNum(p)}</b></span><span class="faint">${td.u}</span>${d > SET().asym ? `<span class="tag warn">rozdíl ${Math.round(d)} %</span>` : ''}</div>`; }
      else body = `<div><b class="num" style="font-size:26px">${fmtNum(+last.v)}</b> <span class="faint">${td.u}</span></div>`;
      body += `<div class="tiny faint">${fmtDate(new Date(last.d + 'T12:00'))}${ch != null ? ` · <span class="${ch >= 0 ? 'up' : 'down'}" style="font-weight:700">${ch >= 0 ? '▲' : '▼'} ${fmtNum(Math.abs(ch), 1)} %</span>` : ''}</div>`;
    }
    return `<div class="li testcard" style="display:grid"><div style="min-width:0"><div class="h3" style="font-size:15px">${esc(td.n)}</div>${body}</div>${rows.length >= 2 ? `<div style="width:110px">${spark(rows.map(r => ({ x: new Date(r.d + 'T12:00').getTime(), y: val(r) })))}</div>` : '<span></span>'}</div>`;
  }).join('');
  const sided = allEx().filter(e => e.sd && histIndex().byEx[e.id]); const since = Date.now() - 56 * DAY; const asymRows = [];
  for (const ex of sided) { let l = 0, p = 0; for (const h of exHistory(ex.id)) if (h.w.start >= since) for (const s of h.it.sets) { const v = setScore(ex, s); if (s.side === 'L') l = Math.max(l, v); if (s.side === 'P') p = Math.max(p, v); } if (l && p) asymRows.push({ ex, l, p, d: Math.abs(l - p) / Math.max(l, p) * 100 }); }
  asymRows.sort((a, b) => b.d - a.d);
  return `<div class="card stack" style="gap:6px"><div class="eyebrow">Rychlost hlavy hole – driver</div>
      ${chsLast ? `<div class="row" style="align-items:baseline;gap:8px"><span class="num" style="font-size:44px;font-weight:700;line-height:1">${fmtNum(chsLast.y)}</span><span class="muted">mph</span>${chs.length > 1 ? `<span class="${chsLast.y >= chsFirst.y ? 'up' : 'down'}" style="font-weight:700">${chsLast.y >= chsFirst.y ? '+' : ''}${fmtNum(chsLast.y - chsFirst.y)} mph od ${fmtDateShort(chsFirst.x)}</span>` : ''}</div>${chs.length >= 2 ? lineChart([chs], { label: 'Rychlost hlavy hole' }) : ''}`
      : '<p class="small muted" style="margin:0">Zapiš měření nebo cvik „Měření rychlosti hole – driver“ v tréninku. Je to hlavní ukazatel golfové výbušnosti.</p>'}
      <button class="btn primary block" data-a="addTests">Zapsat měření (testy)</button></div>
    ${osSeries.some(s => s.length) ? `<div class="card section"><h3 class="h3">Overspeed – nejvyšší rychlost (dominantní strana)</h3><div class="row tiny" style="gap:12px;margin:4px 0"><span style="color:var(--accent);font-weight:700">● lehká</span><span style="color:var(--gold);font-weight:700">● střední</span><span class="faint" style="font-weight:700">– – těžká</span></div>${lineChart(osSeries.map(s => s.length ? s : []), { label:'Overspeed' })}</div>` : ''}
    <div class="section"><div class="row between"><span class="eyebrow">Testovací baterie</span><span class="tiny faint">měř každých 4–6 týdnů</span></div><div class="list" style="margin-top:8px">${cards}</div></div>
    <div class="section"><span class="eyebrow">Rozdíl levá / pravá u cviků (8 týdnů)</span>${asymRows.length ? `<div class="list">${asymRows.map(r => `<button class="li" data-a="exStats" data-ex="${r.ex.id}"><div class="grow"><div class="h3" style="font-size:15px">${esc(r.ex.n)}</div><div class="small muted">L ${scoreFmt(r.ex, r.l)} · P ${scoreFmt(r.ex, r.p)}</div></div><span class="tag ${r.d > SET().asym ? 'warn' : 'golf'}">${Math.round(r.d)} %</span></button>`).join('')}</div>` : '<div class="card small muted">Až budeš zapisovat jednostranné cviky (bulharský dřep, rotační hody, overspeed…) po stranách, uvidíš tu rozdíly mezi levou a pravou.</div>'}</div>`;
}
A.exStats = el => { statsEx = el.dataset.ex; statsTab = 'ex'; rerender(); window.scrollTo(0, 0); };
A.addTests = () => {
  const o = openSheet(() => sheetHead('Zapsat měření', { close: true }) + `<div class="stack"><div class="field"><label for="tdt">Datum</label><input class="input" type="date" id="tdt" value="${isoDay(Date.now())}"></div>
    <p class="small muted" style="margin:0">Vyplň jen to, co jsi dnes měřil.</p>
    ${TESTS.map(t => `<div class="card stack" style="gap:6px"><div class="h3" style="font-size:16px">${esc(t.n)} <span class="faint" style="font-weight:500">(${t.u})</span></div><div class="tiny faint">${esc(t.hint)}</div>
      <div class="row">${t.sd ? `<input class="input num" inputmode="decimal" placeholder="Levá" aria-label="${esc(t.n)} levá" data-t="${t.id}" data-s="L"><input class="input num" inputmode="decimal" placeholder="Pravá" aria-label="${esc(t.n)} pravá" data-t="${t.id}" data-s="P">` : `<input class="input num" inputmode="decimal" placeholder="Hodnota" aria-label="${esc(t.n)}" data-t="${t.id}" data-s="v">`}</div></div>`).join('')}
    <button class="btn primary block big" data-a="saveTests">Uložit měření</button></div>`, { full: true });
};
A.saveTests = () => {
  const o = topSheet(); const d = $('#tdt', o.sh).value || isoDay(Date.now()); const rec = {};
  o.sh.querySelectorAll('input[data-t]').forEach(i => { const v = parseFloat(i.value.replace(',', '.')); if (!isNaN(v)) { (rec[i.dataset.t] ||= { id: uid(), t: i.dataset.t, d })[i.dataset.s] = v; } });
  const n = Object.keys(rec).length; if (!n) { toast('Vyplň alespoň jedno měření'); return; }
  for (const r of Object.values(rec)) { S().tests = S().tests.filter(x => !(x.t === r.t && x.d === r.d)); S().tests.push(r); }
  saveState(); closeSheet(); rerender(); toast(`Uloženo ${n} ${plural(n, 'měření', 'měření', 'měření')}`);
};

function statsHistory() {
  const q = norm(histQ); const ws = allWorkouts().filter(w => !q || norm(w.name + ' ' + w.ex.map(e => exById(e.ex).n).join(' ')).includes(q));
  if (!allWorkouts().length) return `<div class="card empty"><div class="h3">Historie je prázdná</div>Dokončené tréninky se uloží sem.</div>`;
  const groups = {}; for (const w of ws) (groups[monthKey(w.start)] ||= []).push(w);
  const MN = ['Leden','Únor','Březen','Duben','Květen','Červen','Červenec','Srpen','Září','Říjen','Listopad','Prosinec'];
  return `<div class="search"><span>${ICON.search}</span><input class="input" id="hq" placeholder="Hledat podle cviku nebo názvu" value="${esc(histQ)}" autocomplete="off"></div>
    ${Object.entries(groups).map(([m, list]) => `<div class="section"><span class="eyebrow">${MN[+m.slice(5) - 1]} ${m.slice(0, 4)} · ${list.length}×</span><div class="list">${list.map(workoutLi).join('')}</div></div>`).join('') || '<div class="card empty section">Nic nenalezeno.</div>'}`;
}
document.addEventListener('input', e => { if (e.target.id === 'hq') { histQ = e.target.value; const pos = e.target.selectionStart; rerender(); const i = $('#hq'); i.focus(); i.setSelectionRange(pos, pos); } });

/* Detail tréninku z historie */
A.openWorkout = el => {
  const id = el.dataset.id;
  openSheet(() => {
    const w = allWorkouts().find(x => x.id === id); if (!w) return sheetHead('Trénink smazán');
    const st = workoutStats(w);
    return sheetHead(esc(w.name), { sub: `${fmtDateDay(w.start)} · ${fmtMin(st.dur)} · ${st.sets} sérií · ${fmtNum(kgTo(st.vol) / 1000, 1)} t` }) + `<div class="stack">
      ${w.ex.map(e => { const ex = exById(e.ex); return `<div class="card"><button class="h3" data-a="exInfo" data-ex="${ex.id}" style="text-align:left">${esc(ex.n)}</button>
        <div class="small" style="margin-top:6px;display:flex;flex-direction:column;gap:3px">${e.sets.map((s, i) => `<div class="row" style="gap:8px"><span class="faint num" style="width:28px">${s.k === 'w' ? 'Z' : (s.side || '') + (i + 1)}</span><span class="num" style="font-size:17px;font-weight:600">${setText(ex, s)}</span>${s.rpe ? `<span class="faint">RPE ${s.rpe}</span>` : ''}${s.pr ? '<span class="tag pr">rekord</span>' : ''}</div>`).join('')}</div>
        ${e.note ? `<div class="tiny muted" style="margin-top:6px">${esc(e.note)}</div>` : ''}</div>`; }).join('')}
      <button class="btn primary block" data-a="repeatW" data-id="${w.id}">Zopakovat tento trénink</button>
      <button class="btn danger block" data-a="delW" data-id="${w.id}">Smazat trénink</button></div>`;
  }, { full: true });
};
A.repeatW = el => {
  const w = allWorkouts().find(x => x.id === el.dataset.id); const run = () => { while (ovStack.length) closeSheet();
    startWorkout({ name: w.name, programId: w.programId, dayIdx: w.dayIdx, items: w.ex.map(e => ({ ex: e.ex, ss: e.ss, rest: e.rest, lo: e.lo, hi: e.hi, sets: e.sets.map(s => ({ ...s, done:false, pr:0, at:undefined })) })) }); };
  if (DB.active.w) return confirmSheet('Rozpracovaný trénink', 'Zahodit rozpracovaný trénink a začít tento?', [{ label:'Zahodit a začít', cls:'danger', fn: run }]);
  run();
};
A.delW = el => { const w = allWorkouts().find(x => x.id === el.dataset.id); removeWorkout(w); closeSheet(); rerender(); toast('Trénink smazán', () => { addWorkoutToHistory(w); rerender(); }); };

/* ===================== NASTAVENÍ ===================== */
function openSettings() {
  const o = openSheet(() => {
    const s = SET(); const tg = (k, l, d) => `<div class="li" style="min-height:60px"><div class="grow"><div style="font-weight:600">${l}</div>${d ? `<div class="tiny faint">${d}</div>` : ''}</div><button class="toggle" role="switch" aria-checked="${!!s[k]}" aria-label="${l}" data-a="setTg" data-k="${k}"></button></div>`;
    const sg = (k, l, opts) => `<div class="li" style="flex-direction:column;align-items:stretch;gap:8px"><div style="font-weight:600">${l}</div><div class="seg">${opts.map(([v, t]) => `<button aria-pressed="${s[k] === v}" data-a="setSeg" data-k="${k}" data-v="${v}">${t}</button>`).join('')}</div></div>`;
    return sheetHead('Nastavení', { close: true }) + `<div class="stack">
      <span class="eyebrow">Trénink</span><div class="list">
        ${sg('unit', 'Jednotky', [['kg', 'kg'], ['lb', 'lb']])}
        ${sg('inc', 'Krok váhy (± a automatická progrese)', [[1, '1'], [1.25, '1,25'], [2.5, '2,5'], [5, '5']])}
        ${sg('rest', 'Výchozí pauza (cviky mají i vlastní)', [[60, '1:00'], [90, '1:30'], [120, '2:00'], [180, '3:00']])}
        ${tg('autoRest', 'Spustit pauzu po odškrtnutí série')}
        ${tg('vib', 'Vibrace na konci pauzy', 'Funguje jen na telefonech, které to podporují')}
        ${tg('sound', 'Zvuk na konci pauzy')}
        ${tg('rpe', 'Zapisovat náročnost (RPE)', 'Nastavíš ji klepnutím na číslo série')}
        ${sg('weekGoal', 'Týdenní cíl tréninků', [[2, '2'], [3, '3'], [4, '4'], [5, '5'], [6, '6']])}
        ${sg('bar', 'Váha osy (kalkulačka kotoučů)', [[20, '20 kg'], [15, '15 kg'], [10, '10 kg']])}
      </div>
      <span class="eyebrow">Golf a periodizace</span><div class="list">
        ${sg('deload', 'Odlehčovací týden', [[0, 'Vypnuto'], [4, 'Každý 4.'], [5, 'Každý 5.'], [6, 'Každý 6.']])}
        ${sg('asym', 'Upozornit na rozdíl levá / pravá nad', [[10, '10 %'], [15, '15 %'], [20, '20 %']])}
      </div>
      <span class="eyebrow">Vzhled</span><div class="list">
        ${sg('theme', 'Motiv', [['system', 'Podle systému'], ['light', 'Světlý'], ['dark', 'Tmavý']])}
        ${sg('weekStart', 'Týden začíná', [[1, 'Pondělí'], [0, 'Neděle']])}
      </div>
      <span class="eyebrow">Data</span><div class="list">
        <div class="li"><div class="grow"><div style="font-weight:600">Ukládání</div><div class="tiny faint">${sync.col ? 'Data se ukládají na tvůj účet (soukromě) a synchronizují mezi zařízeními. Kopie zůstává i v tomto zařízení pro trénink bez signálu.' : 'Data se ukládají jen v tomto zařízení (v aplikaci na ploše). Jednou za čas je zálohuj – při smazání aplikace nebo dat prohlížeče by zmizela.'}</div>${syncMsg ? `<div class="tiny" style="color:var(--warn)">${esc(syncMsg)}</div>` : ''}</div><span class="sync ${sync.status}" data-sync><i></i>${syncLabel()}</span></div>
        <button class="li" data-a="exportJson"><div class="grow"><div style="font-weight:600">Zálohovat data (JSON)</div><div class="tiny faint">${S().meta.lastBackup ? 'Poslední záloha ' + fmtDate(S().meta.lastBackup) : 'Zatím nezálohováno'}</div></div></button>
        <button class="li" data-a="exportCsv"><div class="grow" style="font-weight:600">Export sérií do tabulky (CSV)</div></button>
        <label class="li" style="cursor:pointer"><div class="grow" style="font-weight:600">Obnovit ze zálohy</div><input type="file" accept="application/json,.json" id="impf" class="sr" aria-label="Soubor zálohy"></label>
        <button class="li" data-a="wipe" style="color:var(--warn);font-weight:600">Smazat všechna data</button>
      </div>
      <p class="tiny faint" style="margin:0">Animace cviků jsou schematické, pro přesnou techniku použij odkaz na video. Rekordy počítá appka z odhadu maxima na 1 opakování, u výbušných a golfových cviků z rychlosti nebo vzdálenosti.</p></div>`;
  }, { full: true });
  o.sh.addEventListener('change', e => { if (e.target.id === 'impf' && e.target.files[0]) importFile(e.target.files[0]); });
}
A.setTg = el => { const k = el.dataset.k; SET()[k] = !SET()[k]; saveState(); topSheet().refresh(); rerender(); };
A.setSeg = el => { const k = el.dataset.k; let v = el.dataset.v; if (!isNaN(+v)) v = +v; SET()[k] = v; if (k === 'unit') SET().inc = v === 'lb' ? 5 : 2.5; saveState(); applyTheme(); topSheet().refresh(); rerender(); };

async function offerFile(name, mime, text) {
  let ok = false;
  try { const dl = window.claude && window.claude.use ? await window.claude.use('downloads') : null; if (dl) { await dl.save({ filename: name, data: new Blob([text], { type: mime }) }); ok = true; } } catch (e) { if (e && (e.code === 'cancelled' || e.code === 'declined')) return false; }
  if (ok) return true;
  if (!window.claude) {
    const file = new File([text], name, { type: mime });
    try { if (navigator.canShare && navigator.canShare({ files: [file] }) && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) { await navigator.share({ files: [file], title: name }); return true; } }
    catch (e) { if (e && e.name === 'AbortError') return false; }
    try { const url = URL.createObjectURL(file); const a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 4000); toast('Soubor uložen do Stažených'); return true; } catch {}
  }
  openSheet(() => `<div class="stack"><h2 class="h2">${esc(name)}</h2><p class="small muted" style="margin:0">Stažení souboru tady není k dispozici. Zkopíruj obsah a ulož ho do souboru.</p><textarea class="input" id="cpy" readonly style="min-height:200px;font-family:monospace;font-size:12px">${esc(text)}</textarea><button class="btn primary block" data-a="copyOut">Zkopírovat</button></div>`);
  return true;
}
A.copyOut = () => { const t = $('#cpy'); navigator.clipboard.writeText(t.value).then(() => toast('Zkopírováno'), () => { t.select(); toast('Označeno – zkopíruj ručně'); }); };
A.exportJson = async () => { const data = JSON.stringify({ app:'svih', v:1, exported: new Date().toISOString(), ...DB }, null, 1);
  const ok = await offerFile(`svih-zaloha-${isoDay(Date.now())}.json`, 'application/json', data); if (ok) { S().meta.lastBackup = Date.now(); saveState(); topSheet() && topSheet().refresh(); if (TAB === 'train') rerender(); } };
A.exportCsv = () => {
  const rows = [['datum','trénink','cvik','série','typ','strana','kg','opakování','sekundy','cm','mph','rpe']];
  for (const w of allWorkouts().slice().reverse()) for (const e of w.ex) { const ex = exById(e.ex); e.sets.forEach((s, i) => rows.push([isoDay(w.start), w.name, ex.n, i + 1, s.k, s.side || '', s.kg ?? '', s.reps ?? '', s.sec ?? '', s.cm ?? '', s.mph ?? '', s.rpe ?? ''])); }
  const csv = rows.map(r => r.map(c => /[",;\n]/.test(String(c)) ? `"${String(c).replace(/"/g, '""')}"` : c).join(';')).join('\n');
  offerFile(`svih-serie-${isoDay(Date.now())}.csv`, 'text/csv', '﻿' + csv);
};
function importFile(f) {
  const r = new FileReader();
  r.onload = () => { try { const d = JSON.parse(r.result); if (!d || !d.state || !d.months) throw 0;
      confirmSheet('Obnovit ze zálohy?', `Současná data se nahradí zálohou (${Object.values(d.months).reduce((a, m) => a + (m.list || []).length, 0)} tréninků).`, [{ label:'Obnovit', cls:'primary', fn: () => {
        const oldMonths = Object.keys(DB.months); DB = normalize(d); for (const m of oldMonths) if (!DB.months[m]) sync.queue.set('m-' + m, true);
        for (const k of docKeys()) touch(k); lsFlush(); while (ovStack.length) closeSheet(); render(); toast('Data obnovena'); } }]);
    } catch { toast('Soubor není platná záloha Švihu'); } };
  r.readAsText(f);
}
A.wipe = () => confirmSheet('Smazat všechna data?', 'Smaže tréninky, plány, testy i nastavení. Nejde vrátit. Doporučujeme nejdřív zálohu.', [
  { label:'Nejdřív zálohovat', fn: A.exportJson },
  { label:'Smazat vše', cls:'danger', fn: () => { const old = docKeys(); DB = normalize({}); for (const k of old) if (!getDoc(k)) sync.queue.set(k, true); touch('state'); touch('active'); lsFlush(); while (ovStack.length) closeSheet(); TAB = 'train'; render(); toast('Data smazána'); } }]);

/* ===================== Start ===================== */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-a]'); if (t && !t.disabled && A[t.dataset.a]) { e.preventDefault(); A[t.dataset.a](t, e); return; }
  const nb = e.target.closest('.nav [data-tab]'); if (nb) setTab(nb.dataset.tab);
});
function boot() {
  try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch {}
  if ('serviceWorker' in navigator && !window.claude && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      reg.addEventListener('updatefound', () => { const nw = reg.installing; nw && nw.addEventListener('statechange', () => {
        if (nw.state === 'installed' && navigator.serviceWorker.controller) toast('Je dostupná nová verze aplikace', () => { lsFlush(); location.reload(); }, '', 'Načíst'); }); });
    }).catch(() => {});
  }
  const nav = document.createElement('nav'); nav.className = 'nav'; nav.setAttribute('aria-label', 'Hlavní navigace');
  nav.innerHTML = '<div class="nav-in">' + [['train', 'Trénink', ICON.dumbbell], ['plans', 'Plány', ICON.plans], ['lib', 'Cviky', ICON.book], ['stats', 'Statistiky', ICON.chart]].map(([k, l, i]) => `<button data-tab="${k}">${i}<span>${l}</span></button>`).join('') + '</div>';
  $('#app').after(nav);
  const saved = lsGet(); if (saved) DB = normalize(saved);
  rebuildExMap();
  if (DB.active.w) { TAB = 'train'; keepAwake(true); }
  render();
  if (!S().meta.onboarded && !S().programs.length && !allWorkouts().length) openOnboarding();
  initSync();
}
boot();
