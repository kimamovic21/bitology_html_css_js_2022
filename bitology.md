Bitology 13.09.2022.
 
-www i internet
html -> struktura web stranice
-index.html –> pocetna stranice neke web stranice
-<!DOCTYPE html>
-meta elementi
-elementi sa samozatvarajucim tagom
-otvarajuci tag i zatvarajuci tag
-html element
-head element
-title element
-body element
-p element
-span element
-css -> izgled tih elemenata
-element moze imati atribude
-css unutar samog elementa
-javascript sluzi za funkcionalnost elemenata na web stranici
-3 nacina pisanja css koda
-kreirano css fajl
-povezivanje html fajla sa css fajlom
-link element
-selektori u css fajlu
-dodavanje klasa html elementima
-selektovanje klasa u css fajlu
-selektovanje id-eva u css fajlu
-svaki element mora imati jedinstven id
-kod za stiliziranje elemenata iskljucivo pisati u css fajlu




Bitology 15.09.2022.

-ponavljanje gradiva iz prethodnog casa
-div element
-znacenje {} -> opseg koda
-dodavanje margine elementima
-developer tools google chrome
-inline vs block elementi
-border 
-padding (margina sa unutrasnja strane sadrzaja)
-border box
-margin:auto znaci raspolozivi prostor sa strana rasporediti jednako
-width
-SEO -> search engine optimization
-h1 element -> naslov nivoa 1
-samo jedan h1 element moze biti na stranici
-https://developers.google.com/style/headings




Bitology 20.09.2022.

-vrste lista u HTML-u : uredene i neuredene
-odredena lista -> ol
-neodredena lista -> ul
-element u listi -> li
-https://stackoverflow.com/questions/23610151/can-you-style-ordered-list-numbers
-https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
-https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
-a element
-a:hover
-https://stackoverflow.com/questions/9612758/add-a-css-border-on-hover-without-moving-the-element
-button element
-button:hover




Bitology 22.09.2022.

-Sistem boja u CSS-u
-heksadecimalni, rgb, hsl
-https://www.rapidtables.com/web/color/RGB_Color.html
-https://www.w3schools.com/html/html_tables.asp
-Elementi tabele:
1. tabela -  element <table>
2. zaglavlje tabele - element <thead>
3. celija unutar <thead> elementa - element <ht>
4. tijelo - body element <tbody>
5. redovi - row element <tr>
6. podaci - podatkovni element <td>
-stiliziranje elemenata unutar tabele
-kreiranje script.js fajla
-definisanje funkcije
-parametri i argumenti funkcije
-tijelo funkcije 
-programske instrukcije




Bitology - 27.09.2022.

-sintaksa javascript funkcije
-kljucna / rezervisana rijec function
-deskriptivni naziv funkcije koji opisuje sta funkcija radi
-male zagrade ()  - unutar kojih se nalaze neki parametri (neobavezno)
-{} - skup nekih programskih naredbi
-vrste varijabli 
-varijabla -> ime za memorijsku lokaciju u RAM-u
-u varijabli se moze smjestiti samo jedan tip vrijednosti
-neki od tipovi podataka u javascriptu:
1. number - broj
2. string - tekst (niz slova)
3. boolean - tacno ili netacno
-neke od rezervisanih rijeci u javascriptu: let, var, const
-ne mozemo imati varijablu koja nosi ime po rezervisanoj rijeci
-deklarisanje varijabli
-dodjeljivanje vrijednosti varijabli 
-ispisati vrijednost novodobijene varijable 
-razlika izmedu parametra i argumenta
-manipulacija dokumenta sa javascriptom
-postoje 3 nacina ispisivanja rezultata u javascriptu:
1. ispisivanje u konzolu - console.log()
2. otvaranje dialog boxa u pretrazivacu sa funkcijom alert
3. ispisivanje u samom dokumentu - u samom pretrazivacu
-atribut defer u script elementu na pocetku HTML fajla
-defer - odgoditi ocitavanje skripte sve dok se ne ocitaju svi HTML elementi na stranici
-getElementById -> javascript funkcija koja uzima kao parametar id nekog elementa iz HTML fajla
-izvrsavanje koda na serverskoj i klijentskoj strani 
-https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
-dodavanje innerHTML-a varijabli 
-https://www.w3schools.com/jsref/prop_html_innerhtml.asp




Bitology - 29.09.2022.

-dogadaji u javascript-u
-addEventListener -> javascript funkcija koja uzima dva parametra 
-addEventListener ('dogadaj', funkcija)
-https://www.w3schools.com/jsref/met_document_addeventlistener.asp
-deklarisanje varijable koristenjem dokument objekt modela
-dodavanje dogadaja toj varijabli
-funkcija koja objasnjava sta treba da se desi
-mouseover dogadaj -> kada se prede misem preko nekog elementa
-dodavanje button elementu klase preko javascripta
-mouseleave dogadaj koji uklanja klasu
-sa classList vrsimo manipulaciju liste klasa elemenata
-.add() i .remove() su funkcije koje uzimaju kao parametar ime klase




Bitology - 04.10.2022.

-Anonimna fukcija i klasicna funkcija
-pohranjivanje funkcije unutar neke varijable
-nizovi u javascriptu
-push metoda -> dodati novi item na kraj postojeceg niza
-https://www.w3schools.com/jsref/jsref_push.asp
-pop metoda -> brisati item sa zadnjeg mjesta postojeceg niza
-https://www.w3schools.com/jsref/jsref_pop.asp
-map metoda -> poziva callback funkciju
-toUpperCase metoda 
-pohraniti metodu map u neku novu varijablu
-https://www.w3schools.com/jsref/jsref_map.asp




Bitology - 06.10.2022.

-filter metoda
-https://www.w3schools.com/jsref/jsref_filter.asp
-if uslov u javascriptu
-https://www.w3schools.com/jsref/jsref_object_constructor.asp
-objekti u javascriptu
-objekti su skup primitivnih vrijednosti
-objekt -> par {kljuc + vrijednost}
-dot notation (tacka notacija) - pristupamo nekom podatku
-prikazivanje objekta liste zaposlenih u javascript na web stranici
-uvrstavanje stringova
-dinamicko ubacivanje podataka u tabelu
-bootstrap biblioteka za uredivanje tabele u css-u
-https://getbootstrap.com/


-sort metoda
-https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
