# Švih – tréninkový deník

Webová aplikace do posilovny, kterou si nainstaluješ na plochu telefonu. Funguje offline a data ukládá přímo v telefonu.

- Rychlý zápis sérií, váhy a opakování, předvyplněné hodnoty z minula a automatická pauza
- Programy Push/Pull/Legs, Upper/Lower, Full body, Golf (mimo sezónu i v sezóně), Overspeed, Výbušnost, Mobilita – vše upravitelné
- Knihovna 85 cviků s animovanou ukázkou, postupem a častými chybami
- Statistiky progresu, osobní rekordy, golfové testy a rozdíl levá/pravá

## 1. Nahrání na GitHub

1. Na [github.com](https://github.com) klikni na **New repository**, pojmenuj ho třeba `svih` a nastav **Public** (GitHub Pages zdarma funguje u veřejných repozitářů).
2. V novém repozitáři klikni na **uploading an existing file** a přetáhni do okna **obsah** této složky (soubory `index.html`, `sw.js`, `manifest.webmanifest` a složky `css`, `js`, `fonts`, `icons`). Potvrď tlačítkem **Commit changes**.

   Nebo přes příkazovou řádku:
   ```bash
   cd svih
   git init
   git add .
   git commit -m "Švih – první verze"
   git branch -M main
   git remote add origin https://github.com/TVUJ-UCET/svih.git
   git push -u origin main
   ```

## 2. Zapnutí webu (GitHub Pages)

1. V repozitáři otevři **Settings → Pages**.
2. U **Source** vyber **Deploy from a branch**, větev **main** a složku **/ (root)**. Ulož.
3. Za 1–2 minuty bude aplikace na adrese `https://TVUJ-UCET.github.io/svih/` (adresa se ukáže nahoře na stránce Pages).

## 3. Přidání na plochu telefonu

**iPhone (Safari)** – otevři adresu v Safari → tlačítko **Sdílet** (čtvereček se šipkou) → **Přidat na plochu** → **Přidat**.

**Android (Chrome)** – otevři adresu v Chrome → menu **⋮** → **Instalovat aplikaci** (nebo **Přidat na plochu**).

Aplikace se pak spouští přes celou obrazovku jako normální appka a funguje i bez signálu.

## Data a zálohy

- Tréninky se ukládají jen v telefonu, v aplikaci na ploše. Na iPhonu má aplikace na ploše vlastní úložiště, oddělené od Safari.
- Jednou za čas udělej zálohu: **Nastavení (ozubené kolo) → Zálohovat data (JSON)**. Obnovíš ji přes **Obnovit ze zálohy**.
- Pokud už máš tréninky ve verzi z Claude: tam dej *Zálohovat data*, soubor si pošli do telefonu a v nové aplikaci ho načti přes *Obnovit ze zálohy*.

## Aktualizace aplikace

Když změníš jakýkoli soubor, v `sw.js` zvyš číslo verze (`svih-v1` → `svih-v2`) a nahraj změny na GitHub. Při dalším otevření aplikace se ukáže lišta **Je dostupná nová verze → Načíst**. Data zůstanou zachovaná.

## Struktura

```
index.html             stránka aplikace
manifest.webmanifest   název, ikona a barvy pro instalaci na plochu
sw.js                  offline režim (service worker)
css/                   vzhled a písma
js/data.js             knihovna cviků, programy, testy, animace
js/app.js              logika aplikace
fonts/                 písmo Barlow (licence SIL OFL)
icons/                 ikony aplikace
```

Aplikace nepotřebuje žádný server ani sestavování – stačí statické soubory.
