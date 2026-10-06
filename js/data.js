/* ===== Knihovna cviků, vzory pohybu, šablony programů, testy ===== */
const MUSCLES = {
  chest:'Hrudník', back:'Záda', shoulders:'Ramena', biceps:'Biceps', triceps:'Triceps', forearms:'Předloktí',
  quads:'Kvadricepsy', hams:'Hamstringy', glutes:'Hýždě', calves:'Lýtka', core:'Střed těla', hips:'Kyčle'
};
const FOCUS = { sila:'Síla & objem', vybus:'Výbušnost', golf:'Golf', mob:'Mobilita & prevence' };
const TYPES = {
  wr:'kg × opakování', bw:'Opakování (± kg)', time:'Čas (s)', dist:'Vzdálenost (cm)', speed:'Rychlost (mph) × švihy'
};

const EX = [];
function E(id, n, m, s, eq, f, t, p, steps, cues, mist, o) {
  EX.push(Object.assign({ id, n, m, s, eq, f, t, p, st: steps.split('|'), cu: cues.split('|'), mi: mist.split('|') }, o || {}));
}

/* ---------- HRUDNÍK ---------- */
E('bench','Bench press s velkou činkou',['chest'],['triceps','shoulders'],'Velká činka',['sila'],'wr','bench',
 'Lehni si na lavici, oči pod osou, chodidla pevně na zemi.|Uchop osu o něco šířeji než ramena, stáhni lopatky k sobě a dolů.|Spusť osu kontrolovaně na spodní část hrudníku, lokty asi 45° od těla.|Vytlač osu nahoru a mírně dozadu nad ramena.',
 'Lopatky celou dobu stažené|Zápěstí rovně nad lokty|Nohy tlačí do země',
 'Odrážení osy od hrudníku|Lokty roztažené do 90°|Zvedání hýždí z lavice',{r:150});
E('incline_db','Tlaky s jednoručkami na šikmé lavici',['chest'],['shoulders','triceps'],'Jednoruční činky',['sila'],'wr','bench',
 'Nastav lavici na 30–45°.|Jednoručky drž nad horní částí hrudníku, dlaně směrem k nohám.|Spouštěj je do strany hrudníku, dokud neucítíš protažení.|Vytlač nahoru a lehce k sobě.',
 'Hrudník vypnutý|Kontrolovaný spust 2–3 s',
 'Příliš strmá lavice (pak pracují hlavně ramena)|Ťukání činek nahoře',{r:120,pr:'db'});
E('db_bench','Tlaky s jednoručkami na rovné lavici',['chest'],['triceps','shoulders'],'Jednoruční činky',['sila','golf'],'wr','bench',
 'Lehni si s jednoručkami na stehnech, kopnutím je dostaň nahoru.|Lopatky stáhni, činky nad hrudníkem.|Spouštěj do úrovně hrudníku, lokty šikmo od těla.|Vytlač zpět nahoru.',
 'Každá ruka pracuje sama, hlídej symetrii|Plný rozsah',
 'Moc rychlý spust|Ztráta napětí v lopatkách',{r:120,pr:'db'});
E('incline_bench','Bench press na šikmé lavici',['chest'],['shoulders','triceps'],'Velká činka',['sila'],'wr','bench',
 'Lavice 30°, osa nad horní částí hrudníku.|Spouštěj pod klíční kosti.|Vytlač kolmo nahoru.',
 'Lopatky stažené|Lokty pod osou',
 'Odraz od hrudníku|Prohnutí v bedrech do mostu',{r:150});
E('chest_fly','Rozpažky na kladce',['chest'],['shoulders'],'Kladka',['sila'],'wr','fly',
 'Postav se mezi kladky, madla ve výšce ramen, mírný výpad.|Lokty lehce pokrčené a zamčené v úhlu.|Přiveď ruce obloukem před hrudník.|Pomalu vrať do protažení.',
 'Pohyb jde z ramen, ne z loktů|Na konci stiskni hrudník',
 'Měnění úhlu v loktech (z toho je tlak)|Moc velká váha a krátký rozsah',{r:90,pr:'cable'});
E('dips','Kliky na bradlech',['chest','triceps'],['shoulders'],'Vlastní váha',['sila'],'bw','dip',
 'Vzepři se na bradlech, ruce propnuté.|Mírně se nakloň dopředu a spouštěj se, dokud nejsou ramena pod lokty.|Vytlač se zpět nahoru.',
 'Ramena dolů od uší|Pro hrudník více předklon',
 'Moc hluboko při bolesti ramen|Houpání nohama',{r:120});
E('pushup','Kliky',['chest'],['triceps','shoulders','core'],'Vlastní váha',['sila'],'bw','pushup',
 'Dlaně o něco šířeji než ramena, tělo v rovině od hlavy po paty.|Spusť hrudník k zemi, lokty asi 45°.|Odtlač se zpět.',
 'Zpevněné hýždě a břicho|Hlava v prodloužení páteře',
 'Propadlá bedra|Lokty do T',{r:60});
E('mb_chest_pass','Výbušný hod medicinbalem od hrudníku',['chest'],['triceps','shoulders'],'Medicinbal',['vybus','golf'],'wr','chestpass',
 'Postav se čelem ke zdi na 2–3 m, míč u hrudníku.|Mírně podřepni a nadechni se.|Vystřel míč co nejrychleji do zdi, celé tělo se natáhne.|Chyť odraz a opakuj až po plném resetu.',
 'Každé opakování 100% rychlost|Lehký míč 2–4 kg',
 'Pomalé, unavené hody|Hod jen rukama bez nohou',{r:120,pr:'ball'});

/* ---------- ZÁDA ---------- */
E('deadlift','Mrtvý tah',['back','hams','glutes'],['forearms','core'],'Velká činka',['sila'],'wr','hinge',
 'Postav se, osa nad středem chodidel, šířka pánve.|Předkloň se v kyčlích, chyť osu, holeně se dotknou osy.|Nadechni se do břicha, napni záda („vytáhni" vůli z osy).|Tlač nohama do země a postav se, osa jede po nohou.|Spusť stejnou cestou zpět.',
 'Neutrální páteř|Osa blízko těla celou dobu|Na konci zatni hýždě, nezakláněj se',
 'Kulatá záda|Trhnutí osou ze země|Zaklánění nahoře',{r:180});
E('trapbar_dl','Mrtvý tah s trap barem',['quads','glutes','back'],['hams','forearms'],'Trap bar',['sila','golf','vybus'],'wr','hinge',
 'Stoupni si doprostřed trap baru.|Podřepni, chyť vysoká nebo nízká madla, hrudník nahoru.|Zapři se do země a postav se.|Kontrolovaně spusť zpět.',
 'Šetrnější pro záda než klasický mrtvý tah|Ideální cvik pro golfisty na sílu nohou',
 'Kolena padají dovnitř|Kulatá záda dole',{r:180,pr:'trap'});
E('pullup','Shyby',['back'],['biceps','forearms'],'Vlastní váha',['sila','golf'],'bw','pullup',
 'Chyť hrazdu nadhmatem o něco šířeji než ramena.|Stáhni lopatky dolů a přitáhni se, dokud není brada nad hrazdou.|Kontrolovaně se spusť do plného natažení.',
 'Hrudník k hrazdě|Bez houpání',
 'Poloviční opakování|Švihání nohama',{r:150});
E('chinup','Shyby podhmatem',['back','biceps'],['forearms'],'Vlastní váha',['sila'],'bw','pullup',
 'Chyť hrazdu podhmatem na šířku ramen.|Přitáhni se bradou nad hrazdu.|Spusť se do plného natažení.',
 'Lokty k žebrům|Plný rozsah',
 'Trhání|Visení jen napůl',{r:150});
E('lat_pulldown','Stahování kladky k hrudníku',['back'],['biceps'],'Kladka',['sila'],'wr','pulldown',
 'Sedni si, zafixuj stehna pod válci.|Chyť tyč šířeji než ramena.|Stáhni tyč k horní části hrudníku, lokty dolů a dozadu.|Pomalu povol do natažení.',
 'Mírný záklon, hrudník nahoru|Táhni lokty, ne ruce',
 'Velký záklon a cukání|Stahování za hlavu',{r:120,pr:'cable'});
E('bb_row','Přítahy velké činky v předklonu',['back'],['biceps','hams','core'],'Velká činka',['sila'],'wr','row',
 'Chyť osu nadhmatem, předkloň se asi o 45°, kolena lehce pokrčená.|Přitáhni osu k pupku.|Na vrcholu stiskni lopatky.|Spusť do natažení rukou.',
 'Trup stabilní, nehoupe se|Lokty podél těla',
 'Zvedání trupu při každém opakování|Kulatá záda',{r:120});
E('db_row','Přítah jednoručky na lavici',['back'],['biceps'],'Jednoruční činky',['sila','golf'],'wr','row',
 'Opři koleno a ruku o lavici, záda rovně.|Druhou rukou drž činku visící pod ramenem.|Přitáhni ji k boku, loket jde dozadu.|Pomalu spusť.',
 'Bez rotace trupu|Pauza nahoře',
 'Kroucení trupem|Tahání ke hrudníku místo k boku',{r:90,sd:1,pr:'db'});
E('cable_row','Přítahy kladky vsedě',['back'],['biceps'],'Kladka',['sila'],'wr','seatedrow',
 'Sedni si, chodidla na opěrkách, kolena mírně pokrčená.|Chyť úzké madlo, záda rovně.|Přitáhni madlo k břichu, lopatky k sobě.|Kontrolovaně povol vpřed.',
 'Trup vzpřímený|Lopatky se pohybují',
 'Houpání trupem|Kulatá záda vpředu',{r:90,pr:'cable'});
E('face_pull','Face pull na kladce',['shoulders','back'],[],'Kladka',['sila','golf','mob'],'wr','facepull',
 'Kladku nastav nad úroveň očí, lano.|Táhni lano k obličeji a roztahuj konce od sebe.|Na konci vytoč ruce ven (palce dozadu).|Pomalu vrať.',
 'Lokty vysoko|Lehká váha, kvalita',
 'Těžká váha a záklon|Tahání ke krku',{r:60,pr:'cable'});
E('inverted_row','Přítahy ve visu ležmo',['back'],['biceps','core'],'Vlastní váha',['sila'],'bw','seatedrow',
 'Lehni pod osu v rámu nebo TRX, chyť ji a tělo zpevni.|Přitáhni hrudník k ose.|Spusť do natažení.',
 'Tělo jako prkno|Lopatky k sobě',
 'Propadlé boky|Krátký rozsah',{r:90});
E('back_ext','Hyperextenze',['back','glutes'],['hams'],'Stroj',['sila','golf'],'bw','hinge',
 'Nastav opěrku pod kyčle.|Předkloň se v kyčlích s rovnými zády.|Zvedni trup do roviny s nohama.',
 'Pohyb z kyčlí|Nahoře nepřeháněj záklon',
 'Hyperextenze bederní páteře|Švihání',{r:90});

/* ---------- RAMENA ---------- */
E('ohp','Tlak velké činky nad hlavu vestoje',['shoulders'],['triceps','core'],'Velká činka',['sila'],'wr','ohp',
 'Osa na horní části hrudníku, úchop na šířku ramen.|Zatni hýždě a břicho.|Vytlač osu nad hlavu, hlavu protáhni pod osou dopředu.|Spusť zpět na hrudník.',
 'Osa jede svisle|Žebra dolů',
 'Velký záklon v bedrech|Tlačení před obličej',{r:150});
E('db_ohp','Tlak jednoruček nad hlavu vsedě',['shoulders'],['triceps'],'Jednoruční činky',['sila'],'wr','ohp',
 'Sedni si na lavici s opěrou.|Jednoručky ve výšce uší.|Vytlač nad hlavu, nespojuj je.|Spusť do úrovně uší.',
 'Lokty mírně vpředu|Plný rozsah',
 'Krátký rozsah|Odlepování zad',{r:120,pr:'db'});
E('lateral_raise','Upažování s jednoručkami',['shoulders'],[],'Jednoruční činky',['sila'],'wr','raise',
 'Stůj vzpřímeně, jednoručky u boků.|Zvedni ruce do strany do výšky ramen, lokty mírně pokrčené.|Pomalu spusť.',
 'Veď pohyb lokty|Malá váha, pomalé tempo',
 'Švihání trupem|Zvedání ramen k uším',{r:60,pr:'db'});
E('rear_delt','Zadní ramena v předklonu',['shoulders'],['back'],'Jednoruční činky',['sila','golf'],'wr','row',
 'Předkloň se téměř do vodorovné polohy.|Ruce visí pod rameny.|Rozpaž do strany, lokty mírně pokrčené.|Spusť pomalu.',
 'Lopatky se nestahují naplno|Myslí na lokty',
 'Švih|Moc velká váha',{r:60,pr:'db'});
E('landmine_press','Landmine tlak jednoruč',['shoulders','chest'],['triceps','core'],'Landmine',['sila','golf'],'wr','ohp',
 'Konec osy v landmine, druhý konec drž u ramene.|Postav se do rozkročného postoje.|Vytlač osu šikmo nahoru a dopředu.|Spusť zpět k rameni.',
 'Šetrné k ramenům|Zpevněný trup proti rotaci',
 'Rotace trupu|Záklon',{r:90,sd:1,pr:'landmine'});

/* ---------- BICEPS / TRICEPS / PŘEDLOKTÍ ---------- */
E('bb_curl','Bicepsový zdvih s velkou činkou',['biceps'],['forearms'],'Velká činka',['sila'],'wr','curl',
 'Stůj, osa v podhmatu na šířku ramen.|Lokty u těla, zvedni osu k ramenům.|Pomalu spusť do natažení.',
 'Lokty se nehýbou|Spust 2–3 s',
 'Švih trupem|Poloviční rozsah',{r:75});
E('db_curl','Bicepsový zdvih s jednoručkami',['biceps'],['forearms'],'Jednoruční činky',['sila'],'wr','curl',
 'Jednoručky u boků, dlaně k tělu.|Zvedej a vytáčej dlaň nahoru (supinace).|Spusť pomalu.',
 'Plná supinace nahoře|Lokty u těla',
 'Houpání|Rychlé spouštění',{r:75,pr:'db'});
E('hammer_curl','Kladivový zdvih',['biceps','forearms'],[],'Jednoruční činky',['sila','golf'],'wr','curl',
 'Jednoručky v neutrálním úchopu (palce nahoru).|Zvedni k ramenům, lokty u těla.|Pomalu spusť.',
 'Silné zápěstí – užitečné pro golf|Kontrola',
 'Švih|Lokty ujíždějí dopředu',{r:75,pr:'db'});
E('pushdown','Stahování kladky na triceps',['triceps'],[],'Kladka',['sila'],'wr','pushdown',
 'Stůj u horní kladky, lano nebo tyč.|Lokty přitisknuté k bokům.|Propni lokty dolů, na laně roztáhni konce.|Pomalu vrať.',
 'Pohyb jen v loktech|Plné propnutí',
 'Lokty jezdí dopředu|Opírání vahou těla',{r:60,pr:'cable'});
E('oh_tri_ext','Tricepsové protažení nad hlavou na kladce',['triceps'],[],'Kladka',['sila'],'wr','ohext',
 'Otoč se zády ke kladce, lano za hlavou.|Lokty míří dopředu nahoru.|Propni ruce nad hlavu/dopředu.|Vrať do hlubokého protažení.',
 'Dlouhá hlava tricepsu v protažení|Žebra dolů',
 'Rozjíždějící se lokty|Prohnutá bedra',{r:60,pr:'cable'});
E('skullcrusher','Francouzský tlak vleže',['triceps'],[],'Velká činka',['sila'],'wr','skull',
 'Lehni si, EZ osa nad čelem v propnutých rukou.|Pokrč lokty a spusť osu za hlavu/k čelu.|Propni zpět.',
 'Lokty míří ke stropu|Kontrolovaný spust',
 'Lokty do stran|Moc velká váha',{r:75});
E('wrist_roller','Navíjení závaží (zápěstí)',['forearms'],[],'Ostatní',['golf','sila'],'wr','curl',
 'Drž váleček v předpažení.|Střídavě otáčej zápěstími a navíjej závaží nahoru.|Pomalu odvíjej dolů.',
 'Silný úchop = stabilní hůl|Ramena dolů',
 'Spouštění rukou|Pohyb z ramen',{r:60});
E('farmer','Farmářská chůze',['forearms','core'],['back','glutes'],'Jednoruční činky',['sila','golf'],'time','carry',
 'Zvedni těžké jednoručky nebo farmářské držáky.|Jdi vzpřímeně krátkými kroky.|Drž čas nebo vzdálenost.',
 'Ramena dolů a dozadu|Břicho zpevněné',
 'Kolébání do stran|Shrbená záda',{r:90,pr:'db'});
E('suitcase_carry','Kufříková chůze (jednoruč)',['core','forearms'],['glutes'],'Jednoruční činky',['golf','sila'],'time','carry',
 'Jednu těžkou činku drž v jedné ruce.|Jdi rovně, nenakláněj se do strany.|Po čase vyměň ruce.',
 'Anti-laterální flexe – stabilita pro švih|Pomalé kroky',
 'Úklon k čince|Zvednuté rameno',{r:60,sd:1,pr:'db'});

/* ---------- NOHY ---------- */
E('squat','Dřep s velkou činkou',['quads','glutes'],['hams','core','back'],'Velká činka',['sila'],'wr','squat',
 'Osa na trapézech, chodidla na šíři ramen, špičky lehce ven.|Nadechni se do břicha a zpevni trup.|Jdi do dřepu, kolena míří nad špičky.|Alespoň stehna do vodorovné polohy.|Vytlač se nahoru přes celé chodidlo.',
 'Hrudník nahoru|Kolena ven|Pata na zemi',
 'Kolena padají dovnitř|Zvedání pat|Kulacení beder dole',{r:180});
E('front_squat','Přední dřep',['quads'],['glutes','core'],'Velká činka',['sila','golf'],'wr','squat',
 'Osa na předních ramenou, lokty vysoko.|Jdi rovně dolů, trup vzpřímený.|Vytlač nahoru.',
 'Lokty nahoru|Vzpřímený trup',
 'Padající lokty|Předklon',{r:180});
E('goblet_squat','Goblet dřep',['quads','glutes'],['core'],'Kettlebell',['sila','mob'],'wr','squat',
 'Drž kettlebell nebo jednoručku u hrudníku.|Jdi hluboko do dřepu, lokty mezi kolena.|Vytlač nahoru.',
 'Skvělý na nácvik a mobilitu|Hrudník nahoru',
 'Kulacení zad|Paty od země',{r:90,pr:'kb'});
E('leg_press','Leg press',['quads','glutes'],['hams'],'Stroj',['sila'],'wr','legpress',
 'Sedni si, chodidla na plošinu na šířku ramen.|Odjisti a pokrč kolena k hrudníku.|Vytlač, ale kolena úplně nezamykej.',
 'Bedra zůstávají na opěrce|Plný rozsah',
 'Zamčená kolena|Odlepování pánve',{r:120});
E('bss','Bulharský dřep',['quads','glutes'],['hams','core'],'Jednoruční činky',['sila','golf'],'wr','lunge',
 'Zadní nohu polož nártem na lavici.|Přední noha asi metr před lavicí.|Spusť se dolů, zadní koleno k zemi.|Vytlač se přední nohou.',
 'Jednostranná síla – hlídej rozdíl L/P|Mírný předklon = víc hýždě',
 'Krátký krok|Koleno padá dovnitř',{r:90,sd:1,pr:'db'});
E('lunge','Výpady v chůzi',['quads','glutes'],['hams'],'Jednoruční činky',['sila'],'wr','lunge',
 'Udělej dlouhý krok vpřed.|Spusť zadní koleno těsně nad zem.|Odraz se a pokračuj druhou nohou.',
 'Trup vzpřímený|Kontrola kolena',
 'Krátké kroky|Ztráta rovnováhy',{r:90,sd:1,pr:'db'});
E('step_up','Výstupy na bednu',['quads','glutes'],[],'Jednoruční činky',['sila','golf'],'wr','stepup',
 'Celé chodidlo na bednu ve výšce kolena.|Vystup jen silou přední nohy.|Pomalu sestup.',
 'Neodrážej se zadní nohou|Koleno nad špičkou',
 'Odraz zadní nohou|Moc vysoká bedna',{r:90,sd:1,pr:'db'});
E('rdl','Rumunský mrtvý tah',['hams','glutes'],['back','forearms'],'Velká činka',['sila','golf'],'wr','hinge',
 'Stůj s osou v rukou, kolena lehce pokrčená.|Tlač pánev dozadu, osa jede po stehnech.|Spouštěj, dokud cítíš protažení hamstringů.|Vrať se zatnutím hýždí.',
 'Záda rovně|Kolena se už nekrčí víc',
 'Dřepování|Kulacení',{r:120});
E('sl_rdl','Rumunský mrtvý tah na jedné noze',['hams','glutes'],['core'],'Jednoruční činky',['golf','sila','mob'],'wr','slrdl',
 'Stůj na jedné noze, činka v opačné ruce.|Předkloň se, zadní noha jde dozadu v linii se zády.|Pánev zůstává rovně (nevytáčí se).|Vrať se nahoru.',
 'Rovnováha a stabilita kyčle – klíčové pro golf|Pomalu',
 'Otevírání pánve|Kulacení',{r:75,sd:1,pr:'db'});
E('hip_thrust','Hip thrust',['glutes'],['hams'],'Velká činka',['sila','golf'],'wr','hipthrust',
 'Lopatky opři o lavici, osa přes pánev (s podložkou).|Chodidla na šíři pánve.|Vytlač pánev nahoru, až je tělo rovné od ramen po kolena.|Spusť.',
 'Brada ke hrudníku|Zatni hýždě nahoře 1 s',
 'Záklon v bedrech|Tlak přes špičky',{r:120});
E('leg_curl','Zakopávání na stroji',['hams'],[],'Stroj',['sila'],'wr','legcurl',
 'Nastav stroj, válec nad patami.|Pokrč kolena co nejvíc.|Pomalu povol.',
 'Pomalý spust|Pánev na sedadle',
 'Švih|Zvedání pánve',{r:75});
E('leg_ext','Předkopávání na stroji',['quads'],[],'Stroj',['sila'],'wr','legext',
 'Sedni si, válec nad kotníky.|Propni kolena.|Pomalu spusť.',
 'Pauza nahoře|Kontrola',
 'Kopání|Moc velká váha',{r:75});
E('nordic','Nordický zakopávání',['hams'],['glutes'],'Vlastní váha',['golf','mob','sila'],'bw','nordic',
 'Klekni si, paty zafixuj (partner nebo opěrka).|Pomalu padej dopředu s rovným tělem.|Brzdi hamstringy co nejdéle, zachyť se rukama.|Odraz se a vrať.',
 'Prevence zranění hamstringů|Excentrika 3–5 s',
 'Lámání v kyčlích|Rychlý pád',{r:120});
E('calf_raise','Výpony vestoje',['calves'],[],'Stroj',['sila'],'wr','calf',
 'Špičky na vyvýšeném okraji.|Spusť paty co nejníž.|Vytlač se na špičky a zastav nahoře.',
 'Pauza dole i nahoře|Plný rozsah',
 'Pérování|Krátký rozsah',{r:60});
E('copenhagen','Kodaňský plank',['hips','core'],[],'Vlastní váha',['golf','mob'],'time','sideplank',
 'Lehni si na bok, horní nohu polož na lavici (koleno nebo kotník).|Zvedni boky, spodní noha visí nebo se zvedne k lavici.|Drž.',
 'Síla přitahovačů – stabilita při švihu|Boky v rovině',
 'Propadlé boky|Přetočení dopředu',{r:60,sd:1});

/* ---------- STŘED TĚLA ---------- */
E('plank','Plank',['core'],['shoulders'],'Vlastní váha',['sila','golf'],'time','plank',
 'Opři se o předloktí a špičky.|Tělo rovně, hýždě a břicho zatnuté.|Drž čas.',
 'Pánev podsazená|Dýchej',
 'Propadlá bedra|Zadek nahoru',{r:60});
E('side_plank','Boční plank',['core'],['hips'],'Vlastní váha',['golf','sila'],'time','sideplank',
 'Opři se o předloktí na boku.|Zvedni boky do roviny.|Drž.',
 'Tělo v jedné linii|Rameno nad loktem',
 'Padající boky|Rotace',{r:45,sd:1});
E('pallof','Pallof press (anti-rotace)',['core'],['shoulders'],'Kladka',['golf','sila'],'wr','pallof',
 'Postav se bokem ke kladce, madlo u hrudníku.|Vytlač ruce před sebe a odolávej tahu do strany.|Podrž 2 s, vrať.',
 'Trup se nesmí natočit|Pánev rovně',
 'Rotace|Moc velká váha',{r:60,sd:1,pr:'cable'});
E('dead_bug','Dead bug',['core'],[],'Vlastní váha',['golf','mob'],'bw','deadbug',
 'Lehni na záda, ruce ke stropu, kolena 90°.|Bedra přitlač k zemi.|Natáhni protilehlou ruku a nohu, vrať, vyměň.',
 'Bedra stále u země|Pomalu s výdechem',
 'Prohnutí|Rychlost',{r:45});
E('hanging_leg_raise','Zvedání nohou ve visu',['core'],['forearms'],'Vlastní váha',['sila'],'bw','legraise',
 'Vis na hrazdě.|Zvedni nohy (pokrčené nebo propnuté) nahoru, podsaď pánev.|Pomalu spusť bez houpání.',
 'Pánev se podsazuje|Kontrola',
 'Houpání|Jen kyčelní flexory',{r:75});
E('ab_wheel','Kolečko na břicho',['core'],['shoulders'],'Ostatní',['sila','golf'],'bw','rollout',
 'Klekni, kolečko pod rameny.|Jeď dopředu, dokud udržíš rovná bedra.|Vrať se zatnutím břicha.',
 'Žebra dolů|Krátce, ale kvalitně',
 'Propadlá bedra|Moc dlouhý rozsah',{r:75});
E('cable_chop','Sekání na kladce shora dolů',['core'],['shoulders','hips'],'Kladka',['golf','vybus'],'wr','chop',
 'Horní kladka, postav se bokem, chyť madlo oběma rukama.|Táhni diagonálně dolů přes tělo k opačnému koleni.|Rotace jde z boků a hrudní páteře, ne z beder.|Kontrolovaně vrať.',
 'Pánev a hrudník rotují spolu|Ruce dlouhé',
 'Ohýbání rukou|Rotace jen v bedrech',{r:60,sd:1,pr:'cable'});
E('cable_lift','Zvedání na kladce zdola nahoru',['core'],['shoulders','glutes'],'Kladka',['golf','vybus'],'wr','lift',
 'Spodní kladka, bokem, madlo oběma rukama u vnějšího kotníku.|Rotuj a táhni diagonálně nahoru přes tělo.|Váha se přenáší na přední nohu jako při švihu.|Vrať.',
 'Sekvence nohy → boky → hrudník → ruce|Rychle nahoru, pomalu dolů',
 'Rotace jen rukama|Kulatá záda dole',{r:60,sd:1,pr:'cable'});
E('landmine_rot','Landmine rotace',['core'],['shoulders','hips'],'Landmine',['golf','vybus'],'wr','landmine_rot',
 'Konec osy drž oběma rukama před hrudníkem v natažených pažích.|Rotuj osu obloukem k jednomu boku, pivotuj zadní nohou.|Přenes ji obloukem na druhou stranu.',
 'Pivot zadní nohy jako ve švihu|Ruce natažené',
 'Ohýbání loktů|Přepadání vpřed',{r:75,pr:'landmine'});
E('russian_twist','Ruské twisty s medicinbalem',['core'],[],'Medicinbal',['sila'],'wr','twist',
 'Sedni si, nakloň trup dozadu, nohy na zemi nebo ve vzduchu.|Rotuj míč z boku na bok.',
 'Rotace z hrudníku|Rovná záda',
 'Kulacení|Jen pohyb rukou',{r:60,pr:'ball'});

/* ---------- VÝBUŠNOST ---------- */
E('box_jump','Výskoky na bednu',['quads','glutes'],['calves'],'Vlastní váha',['vybus','golf'],'bw','jump',
 'Postav se před bednu.|Rychlý podřep se švihem paží.|Výbušně vyskoč a dopadni měkce na bednu.|Sestup dolů (neskákej).',
 'Kvalita > počet, 3–5 opak.|Měkký dopad do podřepu',
 'Moc vysoká bedna a zvedání kolen|Únava – každý skok musí být rychlý',{r:120,box:1});
E('cmj','Výskok z místa (CMJ)',['quads','glutes'],['calves'],'Vlastní váha',['vybus','golf'],'bw','jump',
 'Stůj na šíři pánve.|Rychlý protipohyb do čtvrtdřepu.|Vyskoč maximálně vysoko se švihem paží.|Měkce dopadni a resetuj se.',
 'Maximální úsilí|Plný reset mezi skoky',
 'Pomalý protipohyb|Tvrdý dopad',{r:90});
E('broad_jump','Skok z místa do dálky',['glutes','quads','hams'],['calves'],'Vlastní váha',['vybus','golf'],'dist','broad',
 'Stůj u čáry.|Švihni pažemi dozadu, podřep.|Vystřel dopředu co nejdál.|Dopadni do podřepu a udrž se. Zapiš vzdálenost v cm.',
 'Výbušná extenze kyčlí|Stabilní dopad',
 'Pád dozadu při dopadu|Bez švihu paží',{r:120});
E('trapbar_jump','Výskoky s trap barem',['quads','glutes'],['calves'],'Trap bar',['vybus','golf'],'wr','jump',
 'Lehký trap bar (20–30 % max).|Rychlý podřep a výskok.|Dopadni měkce, resetuj.',
 'Rychlost je cíl, ne váha|3–5 opak.',
 'Moc těžké|Tvrdé dopady',{r:150,pr:'trap'});
E('power_clean','Přemístění (power clean)',['back','quads','glutes'],['shoulders','hams'],'Velká činka',['vybus'],'wr','clean',
 'Start jako mrtvý tah.|Zvedni osu nad kolena, pak výbušně natáhni kyčle.|Pokrč ramena, podsedni pod osu a chyť ji na ramena.|Postav se.',
 'Výbušnost z kyčlí|Lokty rychle dopředu',
 'Tahání rukama|Pomalý druhý tah',{r:180});
E('kb_swing','Kettlebell swing',['glutes','hams'],['core','back'],'Kettlebell',['vybus','golf'],'wr','swing',
 'Kettlebell mezi nohama, předklon v kyčlích.|Švihni ho dozadu jako přihrávku.|Výbušně zatni hýždě a vystřel kyčle dopředu.|Nech kettlebell vyletět do výšky hrudníku.',
 'Pohyb z kyčlí, ne dřep|Ruce jsou jen lano',
 'Zvedání rukama|Záklon nahoře',{r:90,pr:'kb'});
E('mb_slam','Hod medicinbalem o zem',['core','back'],['shoulders'],'Medicinbal',['vybus'],'wr','slam',
 'Zvedni míč nad hlavu, vytáhni se na špičky.|Výbušně ho hoď o zem před sebe.|Chyť a opakuj.',
 'Celé tělo|Rychlost',
 'Pomalé hody|Kulatá záda',{r:75,pr:'ball'});
E('sprint','Sprint 20 m',['quads','hams','glutes'],['calves'],'Vlastní váha',['vybus'],'time','carry',
 'Rozcvič se.|Sprintuj maximálně 20 m.|Odpočívej plně (2–3 min). Zapiš čas v sekundách.',
 'Plná regenerace mezi úseky|Kvalita',
 'Krátké pauzy|Bez rozcvičení',{r:150});
E('lateral_bound','Boční odrazy',['glutes','quads'],['hips','calves'],'Vlastní váha',['vybus','golf'],'bw','broad',
 'Stůj na jedné noze.|Odraz se do strany co nejdál.|Dopadni na druhou nohu a udrž se 2 s.',
 'Přenos síly do strany jako ve švihu|Stabilní dopad',
 'Koleno dovnitř|Nekontrolovaný dopad',{r:90,sd:1});

/* ---------- GOLF – rotační síla a rychlost ---------- */
E('mb_scoop','Rotační hod medicinbalem odspodu (scoop toss)',['core','glutes'],['shoulders','hips'],'Medicinbal',['golf','vybus'],'wr','rotate',
 'Postav se bokem ke zdi ve vzdálenosti 1–2 m, míč u zadního boku.|Přenes váhu na zadní nohu, rotuj.|Výbušně rotuj boky k zdi a vystřel míč odspodu do zdi.|Hodnoť kvalitu: každé opakování maximálně rychle.',
 'Lehký míč 2–4 kg|Sekvence: nohy → boky → hrudník → ruce|Obě strany, stejný počet',
 'Hod rukama|Těžký míč a pomalé hody',{r:90,sd:1,pr:'ball'});
E('mb_shotput','Rotační hod medicinbalem „vrh koulí"',['core','shoulders'],['chest','triceps','hips'],'Medicinbal',['golf','vybus'],'wr','rotate',
 'Bokem ke zdi, míč u ramene zadní ruky.|Nadechni se a rotuj od zdi.|Výbušně rotuj a vystřel míč do zdi jako koulař.',
 'Pevná přední strana, která zachytí sílu|Loket za míčem',
 'Hod jen paží|Otevřený přední bok',{r:90,sd:1,pr:'ball'});
E('mb_step_scoop','Rotační hod s nákrokem',['core','glutes'],['hips','quads'],'Medicinbal',['golf','vybus'],'wr','rotate',
 'Bokem ke zdi, míč u zadního boku.|Udělej rychlý nákrok k zdi a v tom pohybu hoď.|Pokročilá varianta s předpětím.',
 'Krátký kontakt se zemí|Rychlost přenosu',
 'Pomalý nákrok|Ztráta sekvence',{r:120,sd:1,pr:'ball'});
E('mb_sl_tap','Rotační ťuky medicinbalem na jedné noze',['core','hips'],[],'Medicinbal',['golf','mob'],'bw','rotate',
 'Stůj na jedné noze, míč před tělem.|Rotuj trup a ťukni míčem vedle boku.|Rotuj na druhou stranu, noha se nehýbe.',
 'Statická rovnováha a kontrola|Rotace hrudníku nad stabilní pánví',
 'Ztráta rovnováhy|Rotace pánve',{r:45,sd:1,pr:'ball'});
E('mb_split_scoop','Hod z rozkročného postoje (anti-rotace)',['core'],['hips'],'Medicinbal',['golf'],'wr','rotate',
 'Rozkročný postoj, přední noha pevná.|Rotuj hrudník, pánev drž čelem vpřed.|Hoď míč do zdi.',
 'Separace boků a hrudníku|Pevná přední strana',
 'Rotace z beder|Uvolněná přední noha',{r:75,sd:1,pr:'ball'});
E('os_light','Overspeed – lehká hůl',['core'],['shoulders','hips'],'Golfová hůl/overspeed',['golf','vybus'],'speed','golf',
 'Rozcvič se (10–15 cvičných švihů).|Proveď maximálně rychlé švihy lehkou overspeed holí.|Zapiš nejvyšší rychlost (mph) a počet švihů.|Strana: P = dominantní (normální švih), L = nedominantní (opačný).',
 'Rychlost, ne technika|Plné úsilí, 3–5 švihů v sérii',
 'Švihy v únavě|Bez rozcvičení',{r:45,sd:1,pr:'club'});
E('os_med','Overspeed – střední hůl',['core'],['shoulders','hips'],'Golfová hůl/overspeed',['golf','vybus'],'speed','golf',
 'Stejný protokol se střední vahou.|Zapiš nejvyšší rychlost a počet švihů.',
 'Maximální rychlost|Strany: P dominantní, L nedominantní',
 'Zpomalení kvůli technice',{r:45,sd:1,pr:'club'});
E('os_heavy','Overspeed – těžká hůl',['core'],['shoulders','hips'],'Golfová hůl/overspeed',['golf','vybus'],'speed','golf',
 'Těžší hůl buduje sílu ve švihu.|Zapiš nejvyšší rychlost a počet švihů.',
 'Kontrola a stabilita|Plné úsilí',
 'Ztráta rovnováhy',{r:60,sd:1,pr:'club'});
E('chs_driver','Měření rychlosti hole – driver',['core'],['shoulders','hips'],'Golfová hůl/overspeed',['golf'],'speed','golf',
 'Plné švihy driverem s radarem (např. launch monitor).|Zapiš nejvyšší rychlost hlavy hole v mph.|Tohle je hlavní ukazatel golfové výbušnosti.',
 'Stejný radar a podmínky pro srovnatelnost|Po rozcvičení',
 'Měření unavený|Různé radary',{r:60,pr:'club'});
E('band_rot','Rotace s gumou v golfovém postoji',['core'],['hips','shoulders'],'Guma',['golf'],'bw','rotate',
 'Guma ukotvená bokem ve výšce pasu.|Postav se do golfového postoje.|Rotuj jako do downswingu, rychle a kontrolovaně.',
 'Specifický pohyb švihu|Rychlá rotace boků',
 'Ztráta postoje|Ohýbání rukou',{r:45,sd:1});

/* ---------- MOBILITA & PREVENCE ---------- */
E('tspine_rot','Rotace hrudní páteře v kleku na boku (open book)',['back'],['shoulders'],'Vlastní váha',['mob','golf'],'bw','openbook',
 'Lehni si na bok, kolena pokrčená 90°, ruce před sebou.|Horní ruku otevři obloukem na druhou stranu, oči ji sledují.|Kolena zůstávají spojená a na zemi.|Vrať a opakuj.',
 'Rotace z hrudní páteře, ne beder|Výdech při otevírání',
 'Zvedání kolen|Rychlost',{r:30,sd:1});
E('hip_9090','90/90 přechody kyčlí',['hips'],['glutes'],'Vlastní váha',['mob','golf'],'bw','sit',
 'Sedni si, obě kolena pokrčená 90° (přední a zadní noha).|Přetoč kolena na druhou stranu bez pomoci rukou.|Vzpřimuj trup nad přední nohou.',
 'Vnitřní i vnější rotace kyčle|Pomalu',
 'Kulacení zad|Pomoc rukama',{r:30});
E('hip_cars','Kyčelní CARs (řízené krouživé pohyby)',['hips'],[],'Vlastní váha',['mob','golf'],'bw','cars',
 'Opři se o zeď, stůj na jedné noze.|Pokrč druhou nohu a opiš co největší kruh kyčlí.|Trup se nehýbe.',
 'Maximální rozsah s kontrolou|Pomalu 10–20 s na kruh',
 'Kompenzace trupem|Rychlost',{r:30,sd:1});
E('worlds_greatest','Nejlepší protažení světa (výpad s rotací)',['hips','back'],['hams'],'Vlastní váha',['mob','golf'],'bw','lunge',
 'Udělej hluboký výpad, opačnou ruku polož na zem.|Druhý loket stáhni k zemi u kotníku.|Rotuj a ruku natáhni ke stropu.|Přejdi do protažení hamstringů.',
 'Komplexní rozcvička před hrou|Dýchej',
 'Spěch|Krátký výpad',{r:30,sd:1});
E('thoracic_ext','Extenze hrudní páteře na válci',['back'],[],'Ostatní',['mob','golf'],'bw','deadbug',
 'Válec pod lopatkami, ruce za hlavou.|Zakloň se přes válec, pánev na zemi.|Posuň válec o kus a opakuj.',
 'Pohyb v hrudní části|Bedra neprohýbat',
 'Válcování beder|Zadržený dech',{r:30});
E('band_er','Zevní rotace ramene s gumou',['shoulders'],[],'Guma',['mob','golf'],'bw','facepull',
 'Loket u boku pokrčený 90°.|Vytoč předloktí ven proti gumě.|Pomalu vrať.',
 'Prevence ramene (rotátorová manžeta)|Loket u těla',
 'Odtahování lokte|Rychlost',{r:30,sd:1});
E('pigeon','Holubí pozice',['hips','glutes'],[],'Vlastní váha',['mob','golf'],'time','sit',
 'Přední nohu pokrč před sebe, zadní natáhni dozadu.|Pánev drž rovně a předkloň se.|Drž 30–60 s.',
 'Uvolnění vnější rotace kyčle|Dýchej do protažení',
 'Přetáčení pánve|Bolest kolena – uprav polohu',{r:15,sd:1});
E('wrist_mob','Mobilita zápěstí a předloktí',['forearms'],[],'Vlastní váha',['mob','golf'],'bw','curl',
 'Na všech čtyřech polož dlaně na zem, prsty k sobě i od sebe.|Pomalu přenášej váhu a krouž.|Pak protáhni flexory a extenzory.',
 'Prevence golfového lokte|Jemně',
 'Bolest = stop',{r:15});

/* ===== Vzory pohybu pro schematickou animaci (úhly: 0 = dolů, 90 = vpřed, 180 = nahoru, -90 = vzad) ===== */
const ST = {a:'f',fx:110,T:180,UA:0,FA:0,TH:0,SH:0};
const PAT = {
  squat:{prop:'bar',at:'shoulder',k:[{...ST,UA:-35,FA:165},{...ST,T:142,UA:-55,FA:150,TH:82,SH:-28}]},
  gsquat:{k:[{...ST,UA:15,FA:165},{...ST,T:145,UA:45,FA:165,TH:82,SH:-28}]},
  hinge:{prop:'bar',k:[{...ST},{...ST,T:105,TH:22,SH:-8}]},
  slrdl:{k:[{...ST,fx:105},{...ST,fx:105,T:98,TH:4,TH2:-82,SH2:-84}]},
  lunge:{k:[{...ST,fx:135,TH:22,SH:-8,TH2:-24,SH2:-6},{...ST,fx:135,T:174,TH:80,SH:-6,TH2:-12,SH2:-96}]},
  stepup:{box:[100,128,50,30],k:[{...ST,fx:128,fy:128,T:165,TH:75,SH:-12,TH2:-10,SH2:-2},{...ST,fx:128,fy:128,TH:0,SH:0,TH2:-12,SH2:-50}]},
  bench:{prop:'bar',bench:1,k:[{a:'h',hx:140,hy:112,T:-90,UA:180,FA:180,TH:62,SH:0},{a:'h',hx:140,hy:112,T:-90,UA:72,FA:176,TH:62,SH:0}]},
  skull:{prop:'bar',bench:1,k:[{a:'h',hx:140,hy:112,T:-90,UA:168,FA:168,TH:62,SH:0},{a:'h',hx:140,hy:112,T:-90,UA:158,FA:-45,TH:62,SH:0}]},
  fly:{prop:'cable',cab:[205,60],k:[{...ST,fx:105,UA:-65,FA:-55},{...ST,fx:105,UA:88,FA:92}]},
  dip:{bars:1,k:[{a:'h',hx:110,hy:78,T:172,UA:0,FA:0,TH:15,SH:-35},{a:'h',hx:110,hy:100,T:160,UA:-95,FA:8,TH:15,SH:-35}]},
  pushup:{k:[{a:'f',fx:175,T:-114,UA:0,FA:0,TH:66,SH:66},{a:'f',fx:175,T:-102,UA:-82,FA:25,TH:78,SH:78}]},
  ohp:{prop:'bar',k:[{...ST,UA:18,FA:168},{...ST,UA:176,FA:180}]},
  landmine:{prop:'lm',lm:[30,158],k:[{...ST,fx:120,TH:15,SH:-6,TH2:-20,SH2:-4,UA:25,FA:165},{...ST,fx:120,T:170,TH:15,SH:-6,TH2:-20,SH2:-4,UA:135,FA:135}]},
  row:{prop:'bar',k:[{...ST,T:118,TH:16,SH:-10},{...ST,T:118,TH:16,SH:-10,UA:-118,FA:0}]},
  seatedrow:{prop:'cable',cab:[215,128],k:[{a:'h',hx:85,hy:150,T:172,UA:90,FA:90,TH:108,SH:72},{a:'h',hx:85,hy:150,T:180,UA:-42,FA:90,TH:108,SH:72}]},
  pulldown:{prop:'cable',cab:[118,8],seat:1,k:[{a:'h',hx:100,hy:112,T:168,UA:172,FA:180,TH:90,SH:0},{a:'h',hx:100,hy:112,T:166,UA:-8,FA:160,TH:90,SH:0}]},
  pullup:{pullbar:1,k:[{a:'h',hx:110,hy:118,T:180,UA:180,FA:180,TH:8,SH:-20},{a:'h',hx:110,hy:66,T:178,UA:25,FA:172,TH:8,SH:-20}]},
  curl:{prop:'db',k:[{...ST},{...ST,UA:6,FA:148}]},
  pushdown:{prop:'cable',cab:[150,8],k:[{...ST,T:174,UA:4,FA:115},{...ST,T:174,UA:4,FA:2}]},
  ohext:{prop:'cable',cab:[40,30],k:[{...ST,fx:120,T:168,TH:12,SH:-5,TH2:-18,SH2:-4,UA:150,FA:-25},{...ST,fx:120,T:168,TH:12,SH:-5,TH2:-18,SH2:-4,UA:150,FA:148}]},
  raise:{prop:'db',k:[{...ST},{...ST,UA:88,FA:92}]},
  pallof:{prop:'cable',cab:[215,96],k:[{...ST,TH:10,SH:-4,TH2:-10,SH2:-4,UA:12,FA:165},{...ST,TH:10,SH:-4,TH2:-10,SH2:-4,UA:90,FA:90}]},
  facepull:{prop:'cable',cab:[215,52],k:[{...ST,T:176,UA:92,FA:92},{...ST,T:178,UA:-84,FA:168}]},
  carry:{prop:'db',k:[{a:'h',hx:110,hy:86,T:180,UA:0,FA:0,TH:18,SH:-4,TH2:-18,SH2:-14},{a:'h',hx:110,hy:86,T:180,UA:0,FA:0,TH:-18,SH:-14,TH2:18,SH2:-4}]},
  calf:{k:[{...ST},{...ST,dy:-9}]},
  legpress:{sled:1,k:[{a:'h',hx:80,hy:125,T:-140,UA:20,FA:40,TH:142,SH:40},{a:'h',hx:80,hy:125,T:-140,UA:20,FA:40,TH:125,SH:124}]},
  legcurl:{seat:1,k:[{a:'h',hx:100,hy:112,T:175,UA:10,FA:20,TH:90,SH:55},{a:'h',hx:100,hy:112,T:175,UA:10,FA:20,TH:90,SH:-35}]},
  legext:{seat:1,k:[{a:'h',hx:100,hy:112,T:175,UA:10,FA:20,TH:90,SH:0},{a:'h',hx:100,hy:112,T:175,UA:10,FA:20,TH:90,SH:86}]},
  hipthrust:{prop:'bar',at:'hip',bench:2,k:[{a:'f',fx:165,T:-112,UA:120,FA:60,TH:42,SH:12},{a:'f',fx:165,T:-90,UA:120,FA:60,TH:90,SH:0}]},
  nordic:{k:[{a:'k',kx:80,T:180,TH:0,SH:-90,UA:0,FA:0},{a:'k',kx:80,T:122,TH:-58,SH:-90,UA:60,FA:80}]},
  plank:{k:[{a:'f',fx:180,T:-103,UA:0,FA:90,TH:77,SH:77},{a:'f',fx:180,T:-104,UA:0,FA:90,TH:76,SH:76}]},
  sideplank:{k:[{a:'f',fx:180,T:-103,UA:0,FA:90,TH:77,SH:77,UA2:170,FA2:180},{a:'f',fx:180,T:-106,UA:0,FA:90,TH:74,SH:74,UA2:175,FA2:180}]},
  deadbug:{k:[{a:'h',hx:125,hy:150,T:-90,UA:180,FA:180,TH:180,SH:90},{a:'h',hx:125,hy:150,T:-90,UA:-95,FA:-95,TH:100,SH:95,UA2:180,FA2:180,TH2:180,SH2:90}]},
  legraise:{pullbar:1,k:[{a:'h',hx:110,hy:112,T:180,UA:180,FA:180,TH:0,SH:0},{a:'h',hx:110,hy:112,T:178,UA:180,FA:180,TH:92,SH:92}]},
  rollout:{prop:'wheel',k:[{a:'k',kx:80,T:128,TH:-20,SH:-90,UA:12,FA:12},{a:'k',kx:80,T:100,TH:-62,SH:-90,UA:98,FA:100}]},
  chop:{prop:'cable',cab:[200,10],k:[{...ST,TH:12,SH:-6,TH2:-14,SH2:-4,UA:150,FA:155},{...ST,T:168,TH:12,SH:-6,TH2:-14,SH2:-4,UA:25,FA:20}]},
  lift:{prop:'cable',cab:[20,150],k:[{...ST,T:168,TH:12,SH:-6,TH2:-14,SH2:-4,UA:-25,FA:-20},{...ST,T:184,TH:4,SH:-2,TH2:-18,SH2:-10,UA:150,FA:155}]},
  landmine_rot:{prop:'lm',lm:[200,158],k:[{...ST,fx:100,TH:12,SH:-6,TH2:-14,SH2:-4,UA:40,FA:50},{...ST,fx:100,T:176,TH:12,SH:-6,TH2:-14,SH2:-4,UA:125,FA:120}]},
  twist:{prop:'ball',k:[{a:'h',hx:110,hy:150,T:-150,UA:60,FA:95,TH:125,SH:60},{a:'h',hx:110,hy:150,T:-158,UA:105,FA:80,TH:125,SH:60}]},
  jump:{k:[{...ST,T:140,UA:-45,FA:-35,TH:62,SH:-25},{...ST,dy:-30,UA:170,FA:175,TH:4,SH:4}]},
  broad:{k:[{...ST,fx:60,T:135,UA:-50,FA:-40,TH:62,SH:-25},{...ST,fx:140,dy:-22,T:165,UA:140,FA:140,TH:35,SH:10}]},
  clean:{prop:'bar',k:[{...ST,T:122,TH:22,SH:-10},{...ST,T:184,dy:-3,UA:0,FA:0},{...ST,T:176,TH:45,SH:-20,UA:62,FA:172}]},
  swing:{prop:'kb',k:[{...ST,T:110,TH:24,SH:-6,UA:-22,FA:-25},{...ST,T:182,UA:95,FA:95}]},
  slam:{prop:'ball',k:[{...ST,dy:-5,T:184,UA:176,FA:180},{...ST,T:118,TH:42,SH:-16,UA:62,FA:62}]},
  chestpass:{prop:'ball',k:[{...ST,T:172,TH:22,SH:-10,UA:20,FA:160},{...ST,T:166,UA:90,FA:90}]},
  rotate:{prop:'ball',k:[{...ST,fx:115,T:170,TH:20,SH:-8,TH2:-12,SH2:-4,UA:-38,FA:-30},{...ST,fx:115,T:182,TH:-4,SH:-2,TH2:-22,SH2:-12,UA:110,FA:118}]},
  golf:{prop:'club',k:[{...ST,T:148,TH:14,SH:-8,UA:-150,FA:-100,CL:-100},{...ST,T:148,TH:14,SH:-8,UA:8,FA:8,CL:14},{...ST,T:186,TH:2,SH:-2,UA:150,FA:-170,CL:-120}]},
  openbook:{k:[{a:'h',hx:120,hy:150,T:-90,UA:115,FA:115,TH:180,SH:90,UA2:110,FA2:110},{a:'h',hx:120,hy:150,T:-90,UA:240,FA:240,TH:180,SH:90,UA2:110,FA2:110}]},
  sit:{k:[{a:'h',hx:100,hy:150,T:180,UA:40,FA:70,TH:90,SH:90,TH2:-90,SH2:-90},{a:'h',hx:100,hy:150,T:140,UA:80,FA:80,TH:90,SH:90,TH2:-90,SH2:-90}]},
  cars:{k:[{...ST,TH2:90,SH2:0},{...ST,TH2:30,SH2:-60},{...ST,TH2:-40,SH2:-40}]}
};

/* ===== Testy (měření) ===== */
const TESTS = [
  {id:'chs',n:'Rychlost hlavy hole – driver',u:'mph',hint:'Nejvyšší z 5 švihů po rozcvičení, stejný radar.'},
  {id:'cmj',n:'Výskok z místa (CMJ)',u:'cm',hint:'Nejlepší ze 3 pokusů.'},
  {id:'broad',n:'Skok do dálky z místa',u:'cm',hint:'Nejlepší ze 3 pokusů, měř k patě.'},
  {id:'mbthrow',n:'Rotační hod medicinbalem',u:'m',sd:1,hint:'Míč 3 kg (vždy stejný), nejlepší ze 3 na stranu.'},
  {id:'tb1rm',n:'Trap bar – max (nebo odhad 1RM)',u:'kg',hint:'Nebo odhad z 3–5 opakování.'},
  {id:'hipir',n:'Vnitřní rotace kyčle',u:'°',sd:1,hint:'Vsedě, bérec vytáčej ven, měř úhel. Cíl ≥ 45°.'},
  {id:'hiper',n:'Vnější rotace kyčle',u:'°',sd:1,hint:'Vsedě, bérec dovnitř. Cíl ≥ 45°.'},
  {id:'tspine',n:'Rotace hrudní páteře vsedě',u:'°',sd:1,hint:'Hůl na ramenou, pánev pevně. Cíl ≥ 45°.'},
  {id:'slbal',n:'Stoj na jedné noze, oči zavřené',u:'s',sd:1,hint:'Max. 30 s.'}
];

/* ===== Šablony programů ===== */
function D(name, items){ return {name, items: items.map(x => ({ex:x[0], sets:x[1], lo:x[2], hi:x[3], ss:x[4]?1:0}))}; }
const TEMPLATES = [
  {tid:'ppl', name:'Push / Pull / Legs', desc:'Klasika na sílu a objem. 3–6 tréninků týdně, dny se střídají dokola.', tag:'sila', days:[
    D('Push',[['bench',4,6,10],['ohp',3,6,10],['incline_db',3,8,12],['lateral_raise',3,12,15],['pushdown',3,10,15],['oh_tri_ext',2,12,15]]),
    D('Pull',[['pullup',4,6,10],['bb_row',3,8,10],['cable_row',3,10,12],['face_pull',3,15,20],['bb_curl',3,8,12],['hammer_curl',2,10,12]]),
    D('Legs',[['squat',4,5,8],['rdl',3,8,10],['leg_press',3,10,12],['leg_curl',3,10,12],['calf_raise',4,10,15],['plank',3,45,60]])
  ]},
  {tid:'ul', name:'Upper / Lower', desc:'4 dny týdně: horní a dolní polovina těla, varianty A a B.', tag:'sila', days:[
    D('Upper A',[['bench',4,5,8],['bb_row',4,6,10],['db_ohp',3,8,12],['lat_pulldown',3,8,12],['db_curl',2,10,12],['pushdown',2,10,12]]),
    D('Lower A',[['squat',4,5,8],['rdl',3,8,10],['bss',3,8,10],['leg_curl',3,10,12],['calf_raise',3,10,15]]),
    D('Upper B',[['incline_bench',4,6,10],['pullup',4,6,10],['dips',3,8,12],['cable_row',3,10,12],['lateral_raise',3,12,15],['face_pull',2,15,20]]),
    D('Lower B',[['deadlift',3,3,5],['front_squat',3,6,8],['hip_thrust',3,8,12],['leg_ext',2,12,15],['hanging_leg_raise',3,8,12]])
  ]},
  {tid:'fb', name:'Full body A / B / C', desc:'3× týdně celé tělo. Ideální, když nestíháš víc tréninků.', tag:'sila', days:[
    D('Full body A',[['squat',3,5,8],['bench',3,6,10],['bb_row',3,8,10],['lateral_raise',2,12,15],['plank',2,45,60]]),
    D('Full body B',[['deadlift',3,3,5],['ohp',3,6,10],['pullup',3,6,10],['bss',2,8,10],['hammer_curl',2,10,12]]),
    D('Full body C',[['front_squat',3,6,8],['incline_db',3,8,12],['cable_row',3,10,12],['rdl',2,8,10],['pushdown',2,10,15],['pallof',2,10,12]])
  ]},
  {tid:'golf_off', name:'Golf – mimo sezónu', desc:'Periodizovaný program pro rychlost švihu: 3 bloky po 4 týdnech (každý 4. týden odlehčení). Síla + rotační výbušnost + jednostranná práce.', tag:'golf',
    blocks:[{n:'Základ – stabilita a objem',w:4},{n:'Maximální síla',w:4},{n:'Síla → rychlost (výkon)',w:4}], days:[
    D('Golf A – nohy & rotace',[['mb_scoop',4,4,5],['box_jump',3,3,5],['trapbar_dl',4,4,6],['bss',3,6,8],['sl_rdl',3,8,10],['pallof',3,10,12],['copenhagen',2,20,30]]),
    D('Golf B – horní tělo & rotace',[['mb_shotput',4,4,5],['landmine_rot',3,6,8],['db_bench',3,6,8],['db_row',3,8,10],['pullup',3,6,8],['cable_chop',3,8,10],['face_pull',2,15,20]]),
    D('Golf C – overspeed & mobilita',[['os_light',2,5,5],['os_med',2,5,5],['os_heavy',2,5,5],['chs_driver',1,5,5],['hip_9090',2,6,8],['tspine_rot',2,8,10],['hip_cars',2,3,5],['band_er',2,12,15]])
  ]},
  {tid:'golf_in', name:'Golf – v sezóně (údržba)', desc:'1–2 krátké tréninky týdně. Udrží sílu a rychlost bez únavy. Žádné série do selhání 48 h před turnajem.', tag:'golf', days:[
    D('Údržba A',[['mb_scoop',3,3,4],['trapbar_dl',3,3,4],['bss',2,6,6],['pallof',2,10,10],['tspine_rot',2,8,8]]),
    D('Údržba B',[['mb_shotput',3,3,4],['db_bench',2,5,6],['db_row',2,6,8],['sl_rdl',2,6,8],['hip_9090',2,6,6]])
  ]},
  {tid:'overspeed', name:'Overspeed protokol', desc:'3× týdně po dobu 6 týdnů, pak 2–4 týdny pauza. Krátký blok na zvýšení rychlosti hlavy hole, ideálně před tréninkem v posilovně.', tag:'golf', days:[
    D('Overspeed',[['os_light',3,5,5],['os_med',3,5,5],['os_heavy',3,5,5],['chs_driver',1,5,5]])
  ]},
  {tid:'power', name:'Atletická výbušnost', desc:'2× týdně. Kontrastní dvojice: těžký cvik + hned poté výbušný (supersety).', tag:'vybus', days:[
    D('Výbušnost A',[['trapbar_dl',4,3,5,1],['cmj',4,3,3],['power_clean',4,2,3],['mb_slam',3,5,5],['broad_jump',3,3,3]]),
    D('Výbušnost B',[['front_squat',4,3,5,1],['box_jump',4,3,3],['kb_swing',3,8,10],['lateral_bound',3,4,4],['mb_chest_pass',3,5,5],['sprint',4,1,1]])
  ]},
  {tid:'mob', name:'Golf mobilita & prevence', desc:'15–20 minut. Před hrou, v den volna nebo jako rozcvička.', tag:'mob', days:[
    D('Mobilita',[['worlds_greatest',2,5,5],['hip_9090',2,6,8],['tspine_rot',2,8,10],['hip_cars',2,3,5],['thoracic_ext',2,8,10],['band_er',2,12,15],['nordic',2,4,6],['wrist_mob',1,10,10]])
  ]}
];
