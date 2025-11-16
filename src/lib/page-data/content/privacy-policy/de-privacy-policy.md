---
title: 'Datenschutzrichtlinie'
description: 'Datenschutzrichtlinie von Glitch Text Generator - Erfahren Sie, wie wir Ihre Privatsphäre schützen und wie wir Daten sammeln und verwenden'
date: '2025-11-16'
author: 'Admin'
tags: ['Datenschutzrichtlinie', 'Datenschutz', 'Benutzerprivatsphäre']
language: 'de'
---

**Gültigkeitsdatum: 16. November 2025**

Willkommen bei Glitch Text Generator (im Folgenden als "die Website" oder "wir" bezeichnet). Wir nehmen den Schutz Ihrer Privatsphäre sehr ernst. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Informationen sammeln, verwenden, speichern und schützen.

## 1. Übersicht über die Informationssammlung

### 1.1 Informationen, die wir NICHT sammeln

**Die Website verpflichtet sich:**

- ❌ **Keine Speicherung von Textinhalten, die Sie eingeben**: Alle Inhalte, die Sie in den Textgenerator eingeben, werden ausschließlich lokal in Ihrem Browser verarbeitet und niemals auf unsere Server hochgeladen
- ❌ **Keine Registrierung oder Anmeldung erforderlich**: Sie können alle Funktionen ohne Erstellung eines Kontos nutzen
- ❌ **Keine Erfassung persönlicher Identifikationsinformationen**: Wir sammeln weder Ihren Namen, E-Mail, Telefonnummer noch andere persönliche Informationen
- ❌ **Keine Verwendung von Cookies zur Speicherung persönlicher Daten**: Wir speichern keine personenbezogenen Informationen über Cookies

### 1.2 Anonyme Daten, die wir sammeln

Um die Servicequalität und Benutzererfahrung zu verbessern, sammeln wir folgende anonyme statistische Informationen über Drittanbieter-Analysetools:

**Über Google Analytics gesammelt:**

- Seitenaufrufe und Navigationspfade
- Verwendete Gerätetypen (Desktop, Mobil, Tablet usw.)
- Browsertyp und -version
- Betriebssysteminformationen
- Geografischer Standort (Land/Region und Stadtebene)
- Verkehrsquellen (Suchmaschinen, direkter Zugriff, externe Links usw.)
- Verweildauer auf Seiten
- Verwendete Generatortypen (Zalgo, Cursed, Flip usw.)

**Über Microsoft Clarity gesammelt:**

- Anonyme Sitzungswiederholungen (zur Analyse von Benutzerinteraktionsmustern)
- Heatmap-Daten (Klicks, Scrollverhalten)
- Seitenleistungsmetriken
- JavaScript-Fehlerprotokolle

**Wichtiger Hinweis:** Alle diese Daten sind anonym und nicht mit Ihrer persönlichen Identität verknüpft. Wir können keine spezifischen einzelnen Benutzer anhand dieser Daten identifizieren.

## 2. Datenverarbeitungsmethoden

### 2.1 Lokale Verarbeitung

Alle Textkonvertierungsfunktionen werden lokal in Ihrem Browser ausgeführt:

- **Unicode-Zeichenkonvertierung**: Implementiert mit reinem Frontend-JavaScript, keine Serverbeteiligung erforderlich
- **Echtzeitvorschau**: Alle Vorschaueffekte werden clientseitig gerendert
- **Textkopie**: Die Kopierfunktion verwendet die native Zwischenablage-API des Browsers

**Technische Implementierung:**

- Verwendet die Bibliothek `unicode-text-decorator` für die Konvertierung mathematischer alphanumerischer Symbole
- Verwendet die Bibliothek `confusables` für Zeichenverschleierung
- Benutzerdefinierte Zeichenzuordnungswörterbücher für Spezialeffekte (Zalgo, Cursed, Glitch usw.)

Dies bedeutet, dass Ihre Textinhalte niemals Ihr Gerät verlassen; wir können nicht sehen oder speichern, was Sie eingeben.

### 2.2 Keine Serverspeicherung

Die Website wird auf Cloudflare mit Static Site Generation (SSG) bereitgestellt:

- Die Website besteht aus vorgerenderten statischen HTML-Seiten
- Kein Backend-Server oder Datenbank
- Keine Möglichkeit, Benutzerdaten zu speichern

## 3. Drittanbieterdienste

### 3.1 Google Analytics

**Zweck:** Website-Traffic-Analyse und Benutzerverhaltensstatistiken

**Gesammelte Datentypen:**

- Anonyme Besuchsstatistiken
- Seitenleistungsmetriken
- Benutzergerät- und Browserinformationen
- Geografischer Standort (Land-/Stadtebene)

**Datenspeicherfrist:** Gemäß den Standardeinstellungen von Google Analytics werden Daten 26 Monate lang aufbewahrt

**Datenschutzkontrollen:** Sie können das Google Analytics-Tracking deaktivieren durch:

- Installation des [Google Analytics Opt-out Browser-Add-ons](https://tools.google.com/dlpage/gaoptout)
- Aktivierung von "Do Not Track" in Ihrem Browser
- Verwendung des Datenschutz-/Inkognito-Modus Ihres Browsers

**Weitere Informationen:** [Google Analytics Datenschutzrichtlinie](https://policies.google.com/privacy)

### 3.2 Microsoft Clarity

**Zweck:** Benutzererfahrungsanalyse und Website-Optimierung

**Gesammelte Datentypen:**

- Anonyme Sitzungswiederholungen
- Heatmaps und Scroll-Maps
- Klickmusteranalyse
- Seitenleistungsdaten

**Datenverarbeitung:** Microsoft Clarity sammelt keine personenbezogenen Informationen (PII); alle Daten sind anonym

**Datenschutz:** Clarity maskiert automatisch sensible Informationen (wie Passwort-Eingabefeldinhalt)

**Weitere Informationen:** [Microsoft Clarity Datenschutzrichtlinie](https://privacy.microsoft.com/privacystatement)

### 3.3 Cloudflare

**Zweck:** Website-Hosting und Content Delivery Network (CDN)

**Daten, die Cloudflare sammeln kann:**

- IP-Adressen (für Sicherheitsschutz und Traffic-Analyse)
- Browsertyp und -version
- Zugriffszeitstempel
- Angeforderte Seiten-URLs

**Sicherheitsfunktionen:**

- DDoS-Schutz
- SSL/TLS-Verschlüsselung
- Web Application Firewall (WAF)

**Weitere Informationen:** [Cloudflare Datenschutzrichtlinie](https://www.cloudflare.com/privacypolicy/)

## 4. Cookie-Verwendung

### 4.1 Von uns verwendete Cookies

Die Website verwendet minimale Cookies zur Bereitstellung grundlegender Funktionen:

**Erforderliche Cookies (können nicht deaktiviert werden):**

- Themen-Präferenzeinstellungen (Hell-/Dunkelmodus)
- Sprachauswahlpräferenz (10 Sprachoptionen: en, zh, es, fr, de, ja, ko, ru, pt, id)
- Sitzungsstatusverwaltung

**Analyse-Cookies (optional):**

- Google Analytics Cookies (\_ga, \_gid, \_gat)
- Microsoft Clarity Cookies (\_clck, \_clsk)

### 4.2 Verwaltung von Cookies

Sie können Cookies über Browsereinstellungen verwalten oder löschen:

- **Chrome:** Einstellungen > Datenschutz und Sicherheit > Cookies und andere Website-Daten
- **Firefox:** Optionen > Datenschutz & Sicherheit > Cookies und Website-Daten
- **Safari:** Einstellungen > Datenschutz > Website-Daten verwalten
- **Edge:** Einstellungen > Datenschutz, Suche und Dienste > Cookie- und Websiteberechtigungen

**Hinweis:** Das Deaktivieren von Cookies kann bestimmte Website-Funktionen beeinträchtigen, wie z.B. Themeneinstellungen und Sprachpräferenzen.

## 5. Datensicherheit

### 5.1 Technische Schutzmaßnahmen

Wir implementieren die folgenden Sicherheitsmaßnahmen zum Schutz Ihrer Informationen:

- **HTTPS-Verschlüsselung:** Alle Datenübertragungen werden über SSL/TLS verschlüsselt
- **Cloudflare CDN:** Bietet DDoS-Schutz und Web Application Firewall
- **Statische Website-Architektur:** Keine Datenbank oder Backend, reduziert Datenschutzverletzungsrisiken
- **Lokale Verarbeitung:** Textkonvertierung wird vollständig in Ihrem Browser durchgeführt; Daten verlassen niemals Ihr Gerät

### 5.2 Sicherheit von Drittanbieterdiensten

Die von uns verwendeten Drittanbieterdienste (Google Analytics, Microsoft Clarity, Cloudflare) sind alle branchenführende Anbieter mit strengen Sicherheitsstandards und Datenschutzmaßnahmen.

## 6. Kinderschutz

Die Website sammelt wissentlich keine persönlichen Informationen von Kindern unter 13 Jahren. Wenn Sie Elternteil oder Erziehungsberechtigter sind und feststellen, dass Ihr Kind uns persönliche Informationen zur Verfügung gestellt hat, kontaktieren Sie uns bitte, und wir werden die relevanten Informationen umgehend löschen.

## 7. Internationale Datenübertragungen

Die Website wird über das globale CDN-Netzwerk von Cloudflare bereitgestellt, und Ihre Daten können zwischen Servern in verschiedenen Ländern/Regionen übertragen werden. Wir stellen sicher, dass alle Datenübertragungen den geltenden Datenschutzgesetzen entsprechen.

**Anwendbare Regionen:**

- EU-Nutzer: Wir halten uns an die Datenschutz-Grundverordnung (DSGVO)
- US-Nutzer: Wir halten uns an den California Consumer Privacy Act (CCPA)
- Andere Regionen: Wir halten uns an die geltenden lokalen Datenschutzgesetze

## 8. Ihre Rechte

### 8.1 Datenzugriff und -kontrolle

Da wir Ihre persönlichen Daten nicht sammeln oder speichern:

- ✅ **Recht auf Zugang:** Wir haben keine persönlichen Daten über Sie, auf die zugegriffen werden kann
- ✅ **Recht auf Löschung:** Von Ihnen eingegebener Text wird niemals gespeichert und erfordert keine Löschung
- ✅ **Recht auf Datenübertragbarkeit:** Aller generierter Text kann frei kopiert und verwendet werden
- ✅ **Widerspruchsrecht:** Sie können Analyse-Cookies über Browsereinstellungen deaktivieren

### 8.2 Kontrolle von Analysedaten

Sie können die Erfassung von Analysedaten kontrollieren durch:

1. **Google Analytics deaktivieren:**
   - Installation der Google Analytics Opt-out-Browsererweiterung
   - Aktivierung der "Do Not Track"-Funktion Ihres Browsers

2. **Microsoft Clarity deaktivieren:**
   - Blockierung der Domain clarity.ms in Ihrem Browser
   - Verwendung des Datenschutz-/Inkognito-Modus zum Browsen

3. **Cookies löschen:**
   - Regelmäßiges Löschen von Browser-Cookies
   - Verwendung der Datenschutzverbesserungsfunktionen Ihres Browsers

## 9. Aktualisierungen der Datenschutzrichtlinie

Wir können diese Datenschutzrichtlinie regelmäßig aktualisieren. Wesentliche Änderungen werden kommuniziert durch:

- Prominente Ankündigungen auf der Website-Startseite
- Aktualisierung des "Gültigkeitsdatums" oben auf dieser Seite
- Erinnerungen über das Website-Benachrichtigungssystem

**Empfehlung:** Bitte überprüfen Sie diese Datenschutzrichtlinie regelmäßig, um zu verstehen, wie wir Ihre Informationen schützen.

## 10. Benachrichtigung über Datenschutzverletzungen

Obwohl wir keine Benutzerdaten speichern, werden wir im Falle eines Sicherheitsvorfalls mit Drittanbieterdiensten:

1. Sofort den Umfang und die Auswirkungen des Vorfalls untersuchen
2. Eine Ankündigung auf der Website veröffentlichen, um Benutzer zu informieren
3. Mit relevanten Dienstanbietern zusammenarbeiten, um Abhilfemaßnahmen umzusetzen
4. An Aufsichtsbehörden gemäß gesetzlichen Anforderungen berichten

## 11. Plattformspezifische Nutzungshinweise

### 11.1 Discord-Benutzer

Wenn Sie von dieser Website generierten Text auf Discord verwenden:

- Generierter Text unterliegt der Datenschutzrichtlinie von Discord
- Discord kann Ihre Nachrichteninhalte speichern
- Bitte befolgen Sie die Community-Richtlinien und Nutzungsbedingungen von Discord

### 11.2 Roblox-Benutzer

Wenn Sie von dieser Website generierten Text auf Roblox verwenden:

- Generierter Text unterliegt der Datenschutzrichtlinie von Roblox
- Roblox kann Chat-Inhalte filtern oder protokollieren
- Bitte befolgen Sie die Inhaltsrichtlinie und Nutzungsbedingungen von Roblox

### 11.3 Minecraft-Benutzer

Wenn Sie von dieser Website generierten Text in Minecraft verwenden:

- Server können Chat-Verläufe protokollieren
- Verschiedene Server können unterschiedliche Datenschutzrichtlinien haben
- Bitte befolgen Sie Serverregeln und Minecraft EULA

## 12. Kontaktieren Sie uns

Wenn Sie Fragen, Kommentare oder Beschwerden zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte über:

- Besuchen Sie unsere [Über-Seite](/about) für Kontaktinformationen
- Senden Sie eine Nachricht über das auf der Website bereitgestellte Kontaktformular

**Antwortzeit:** Wir werden innerhalb von 7 Werktagen nach Erhalt Ihrer Anfrage antworten.

## 13. Rechtliche Konformität

### 13.1 Anwendbare Gesetze

Diese Datenschutzrichtlinie unterliegt folgenden Gesetzen und Vorschriften:

- Datenschutz-Grundverordnung (DSGVO) - anwendbar auf EU-Nutzer
- California Consumer Privacy Act (CCPA) - anwendbar auf Einwohner Kaliforniens
- Andere anwendbare internationale und regionale Datenschutzgesetze

### 13.2 Streitbeilegung

Alle Streitigkeiten aus dieser Datenschutzrichtlinie sollten zunächst durch freundliche Verhandlungen beigelegt werden. Wenn Verhandlungen scheitern, sollten Streitigkeiten einem zuständigen Gericht vorgelegt werden.

## 14. Zusammenfassung

**Unsere Datenschutzverpflichtungen:**

✅ **Vollständig lokale Verarbeitung**: Ihre Textinhalte verlassen niemals Ihren Browser  
✅ **Keine Registrierung erforderlich**: Nutzung ohne Angabe persönlicher Informationen  
✅ **Anonyme Analyse**: Nur anonyme statistische Daten zur Serviceverbesserung gesammelt  
✅ **Transparenz**: Klare Erklärung, welche Daten wir sammeln und wie wir sie verwenden  
✅ **Benutzerkontrolle**: Sie können Analysefunktionen jederzeit deaktivieren  
✅ **Datensicherheit**: Datenübertragung geschützt über HTTPS und Cloudflare

**Einfach ausgedrückt:** Wir wissen nicht, welchen Text Sie eingeben, und wir speichern keine Ihrer persönlichen Informationen. Wir sammeln nur anonyme Website-Nutzungsstatistiken zur Verbesserung der Benutzererfahrung.

---

**Letzte Aktualisierung: 16. November 2025**

Vielen Dank, dass Sie Glitch Text Generator verwenden! Wir sind verpflichtet, Ihre Privatsphäre zu schützen und Ihnen gleichzeitig die beste Textgenerierungserfahrung zu bieten.
