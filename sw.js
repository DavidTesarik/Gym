/* Service worker: aplikace funguje offline (i v posilovně bez signálu).
   Při každé změně souborů zvyš číslo verze, aby si telefon stáhl novou verzi. */
const VERSION = 'svih-v8';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/app.css',
  './css/fonts.css',
  './js/data.js',
  './js/app.js',
  './js/media.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './fonts/barlow-condensed-latin-500-normal.woff2',
  './fonts/barlow-condensed-latin-600-normal.woff2',
  './fonts/barlow-condensed-latin-700-normal.woff2',
  './fonts/barlow-condensed-latin-ext-500-normal.woff2',
  './fonts/barlow-condensed-latin-ext-600-normal.woff2',
  './fonts/barlow-condensed-latin-ext-700-normal.woff2',
  './fonts/barlow-latin-400-normal.woff2',
  './fonts/barlow-latin-500-normal.woff2',
  './fonts/barlow-latin-600-normal.woff2',
  './fonts/barlow-latin-700-normal.woff2',
  './fonts/barlow-latin-ext-400-normal.woff2',
  './fonts/barlow-latin-ext-500-normal.woff2',
  './fonts/barlow-latin-ext-600-normal.woff2',
  './fonts/barlow-latin-ext-700-normal.woff2',
];
// Ilustrace cviků se stáhnou při instalaci, ať jsou ukázky dostupné i bez signálu (chyba jednoho obrázku instalaci nezastaví).
const ILL = ["ab_wheel_0.webp", "ab_wheel_1.webp", "air_squat_0.webp", "air_squat_1.webp", "air_squat_2.webp", "back_ext_0.webp", "back_ext_1.webp", "back_ext_2.webp", "band_er_0.webp", "band_er_1.webp", "band_rot_0.webp", "band_rot_1.webp", "bb_curl_0.webp", "bb_curl_1.webp", "bb_row_0.webp", "bb_row_1.webp", "bench_0.webp", "bench_1.webp", "box_jump_0.webp", "box_jump_1.webp", "box_jump_2.webp", "box_jump_3.webp", "broad_jump_0.webp", "broad_jump_1.webp", "broad_jump_2.webp", "broad_jump_3.webp", "bss_0.webp", "bss_1.webp", "bss_2.webp", "burpee_0.webp", "burpee_1.webp", "cable_chop_0.webp", "cable_chop_1.webp", "cable_chop_2.webp", "cable_lift_0.webp", "cable_lift_1.webp", "cable_row_0.webp", "cable_row_1.webp", "calf_raise_0.webp", "calf_raise_1.webp", "calf_raise_2.webp", "chest_fly_0.webp", "chest_fly_1.webp", "chinup_0.webp", "chinup_1.webp", "cmj_0.webp", "cmj_1.webp", "cmj_2.webp", "copenhagen_0.webp", "copenhagen_1.webp", "copenhagen_2.webp", "db_bench_0.webp", "db_bench_1.webp", "db_curl_0.webp", "db_curl_1.webp", "db_curl_2.webp", "db_ohp_0.webp", "db_row_0.webp", "db_row_1.webp", "db_row_2.webp", "dead_bug_0.webp", "dead_bug_1.webp", "dead_bug_2.webp", "deadlift_0.webp", "deadlift_1.webp", "dips_0.webp", "dips_1.webp", "dips_2.webp", "face_pull_0.webp", "face_pull_1.webp", "face_pull_2.webp", "farmer_0.webp", "farmer_1.webp", "front_squat_0.webp", "front_squat_1.webp", "goblet_squat_0.webp", "goblet_squat_1.webp", "goblet_squat_2.webp", "golf_swing_0.webp", "golf_swing_1.webp", "golf_swing_2.webp", "golf_swing_3.webp", "hammer_curl_0.webp", "hammer_curl_1.webp", "hammer_curl_2.webp", "hanging_leg_raise_0.webp", "hanging_leg_raise_1.webp", "hanging_leg_raise_2.webp", "hip_9090_0.webp", "hip_9090_1.webp", "hip_9090_2.webp", "hip_cars_0.webp", "hip_cars_1.webp", "hip_cars_2.webp", "hip_thrust_0.webp", "hip_thrust_1.webp", "hip_thrust_2.webp", "incline_bench_0.webp", "incline_bench_1.webp", "incline_db_0.webp", "incline_db_1.webp", "inverted_row_0.webp", "inverted_row_1.webp", "jumping_jack_0.webp", "jumping_jack_1.webp", "jumping_jack_2.webp", "kb_swing_0.webp", "kb_swing_1.webp", "kb_swing_2.webp", "landmine_press_0.webp", "landmine_press_1.webp", "landmine_press_2.webp", "landmine_rot_0.webp", "landmine_rot_1.webp", "landmine_rot_2.webp", "lat_pulldown_0.webp", "lat_pulldown_1.webp", "lateral_bound_0.webp", "lateral_bound_1.webp", "lateral_bound_2.webp", "lateral_raise_0.webp", "lateral_raise_1.webp", "leg_curl_0.webp", "leg_curl_1.webp", "leg_curl_2.webp", "leg_ext_0.webp", "leg_ext_1.webp", "leg_ext_2.webp", "leg_press_0.webp", "leg_press_1.webp", "leg_press_2.webp", "lunge_0.webp", "lunge_1.webp", "mb_chest_pass_0.webp", "mb_chest_pass_1.webp", "mb_scoop_0.webp", "mb_scoop_1.webp", "mb_scoop_2.webp", "mb_shotput_0.webp", "mb_shotput_1.webp", "mb_shotput_2.webp", "mb_sl_tap_0.webp", "mb_sl_tap_1.webp", "mb_sl_tap_2.webp", "mb_slam_0.webp", "mb_slam_1.webp", "mb_split_scoop_0.webp", "mb_split_scoop_1.webp", "mb_split_scoop_2.webp", "mb_step_scoop_0.webp", "mb_step_scoop_1.webp", "mb_step_scoop_2.webp", "mountain_climber_0.webp", "mountain_climber_1.webp", "mountain_climber_2.webp", "nordic_0.webp", "nordic_1.webp", "oh_tri_ext_0.webp", "oh_tri_ext_1.webp", "oh_tri_ext_2.webp", "ohp_0.webp", "ohp_1.webp", "pallof_0.webp", "pallof_1.webp", "pallof_2.webp", "pigeon_0.webp", "pigeon_1.webp", "plank_0.webp", "plank_1.webp", "plank_2.webp", "plank_circuit_0.webp", "plank_circuit_1.webp", "plank_circuit_2.webp", "plank_circuit_3.webp", "power_clean_0.webp", "power_clean_1.webp", "power_clean_2.webp", "pullup_0.webp", "pullup_1.webp", "pushdown_0.webp", "pushdown_1.webp", "pushup_0.webp", "pushup_1.webp", "rdl_0.webp", "rdl_1.webp", "rear_delt_0.webp", "rear_delt_1.webp", "rear_delt_2.webp", "russian_twist_0.webp", "russian_twist_1.webp", "russian_twist_2.webp", "side_plank_0.webp", "side_plank_1.webp", "side_plank_2.webp", "skullcrusher_0.webp", "skullcrusher_1.webp", "sl_rdl_0.webp", "sl_rdl_1.webp", "sprint_0.webp", "sprint_1.webp", "squat_0.webp", "squat_1.webp", "step_up_0.webp", "step_up_1.webp", "suitcase_carry_0.webp", "suitcase_carry_1.webp", "thoracic_ext_0.webp", "thoracic_ext_1.webp", "trapbar_dl_0.webp", "trapbar_dl_1.webp", "trapbar_jump_0.webp", "trapbar_jump_1.webp", "tspine_rot_0.webp", "tspine_rot_1.webp", "tspine_rot_2.webp", "worlds_greatest_0.webp", "worlds_greatest_1.webp", "worlds_greatest_2.webp", "wrist_mob_0.webp", "wrist_mob_1.webp", "wrist_mob_2.webp", "wrist_mob_3.webp", "wrist_roller_0.webp", "wrist_roller_1.webp"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: 'reload' })))
    .then(() => Promise.allSettled(ILL.map(f => c.add(new Request('./img/ill/' + f, { cache: 'reload' }))))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // Stránka: nejdřív síť (ať máš vždy nejnovější verzi), bez signálu z mezipaměti.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return res; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Ostatní soubory: z mezipaměti hned, na pozadí se obnoví.
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
