// 2.    Importeer de js file in index.html voor de </body> tag en maak 6 string variables met elk de naam van een teamlid
var kim: string = "Kim";
var niels: string = "Niels";
var koen: string = "Koen";
var coen: string = "Coen";
var karen: string = "Karen";
var bram: string = "Bram";

// 3.    Schrijf de eerste naam naar de ID "typescript-output" en schrijf de rest van de namen direct naar de pagina
// TIP: Gebruik "<br />" om de namen onder elkaar te krijgen, concatinate dit aan de naam.
document.getElementById("typescript-output").innerHTML = kim;
document.write(niels + "<br />");
document.write(koen + "<br />");
document.write(coen + "<br />");
document.write(karen + "<br />");
document.write(bram + "<br />");

// 4.    Maak 6 integer variables met de leeftijden van ieder teamlid
var leeftijd_kim: number = 25;
var leeftijd_niels: number = 21;
var leeftijd_koen: number = 23;
var leeftijd_coen: number = 22;
var leeftijd_karen: number = 21;
var leeftijd_bram: number = 20;

// 5.    Schrijf iedere naam + de leeftijd naar de pagina als "[naam] is [leeftijd] jaar oud"
document.write(kim + " is " + leeftijd_kim + " jaar oud. <br />");
document.write(niels + " is " + leeftijd_niels + " jaar oud. <br />");
document.write(koen + " is " + leeftijd_koen + " jaar oud. <br />");
document.write(coen + " is " + leeftijd_coen + " jaar oud. <br />");
document.write(karen + " is " + leeftijd_karen + " jaar oud. <br />");
document.write(bram + " is " + leeftijd_bram + " jaar oud. <br />");

// 6.    Maak een namen array met de namen erin van ieder teamlid
var teamArray = ["kim", "niels", "koen", "coen", "karen", "bram"];

// 7.    Maak een for-loop die door de namen loopt en alle namen naar de pagina uitpoept
for (let teamlid of teamArray) {
   document.write(teamlid + "<br />");
}

// 8.    Maak een interface Teamleden met een string voornaam, string achternaam en een integer leeftijd
interface Teamleden {
   voornaam: String;
   achternaam: String;
   leeftijd: Number;
}

// 9.    Maak 6 instance variables van de Teamleden interface en zet hierin de voornaam, achternaam en leeftijd
var teamlid_kim: Teamleden = { voornaam: "Kim", achternaam: "Bilstra", leeftijd: 25 }
var teamlid_niels: Teamleden = { voornaam: "Niels", achternaam: "Ettema", leeftijd: 21 }
var teamlid_koen: Teamleden = { voornaam: "Koen", achternaam: "Van Der Baan", leeftijd: 23 }
var teamlid_coen: Teamleden = { voornaam: "Coen", achternaam: "Slot", leeftijd: 22 }
var teamlid_karen: Teamleden = { voornaam: "Karen", achternaam: "Wiersma", leeftijd: 21 }
var teamlid_bram: Teamleden = { voornaam: "Bram", achternaam: "Honingh", leeftijd: 20 }

// 10.   Schrijf de namen en leeftijden naar de pagina
document.write(teamlid_kim.voornaam + " " + teamlid_kim.achternaam + " is " + teamlid_kim.leeftijd + "<br />");
document.write(teamlid_niels.voornaam + " " + teamlid_niels.achternaam + " is " + teamlid_niels.leeftijd + "<br />");
document.write(teamlid_koen.voornaam + " " + teamlid_koen.achternaam + " is " + teamlid_koen.leeftijd + "<br />");
document.write(teamlid_coen.voornaam + " " + teamlid_coen.achternaam + " is " + teamlid_coen.leeftijd + "<br />");
document.write(teamlid_karen.voornaam + " " + teamlid_karen.achternaam + " is " + teamlid_karen.leeftijd + "<br />");
document.write(teamlid_bram.voornaam + " " + teamlid_bram.achternaam + " is " + teamlid_bram.leeftijd + "<br />");

// 11.   Maak een class Persoon aan en maak hierin een constructor aan die de voornaam, achternaam, leeftijd en een boolean isTeamlid opmeent
class Persoon {

   constructor(private voornaam: string, private achternaam: string, private leeftijd: number, private isTeamlid: boolean) {

   }

   toPage() {
      document.write(this.voornaam + " " + this.achternaam + " " + this.leeftijd + " " + this.isTeamlid + "<br />");
   }

   checkIfTeamlid() {
      if (this.isTeamlid) {
         document.write(this.voornaam + " is een teamlid. <br />");
      } else {
         document.write(this.voornaam + " is geen teamlid. <br />");
      }
   }
}

// 12.   Maak een functie aan in de class Persoon die de voornaam, achternaam, leeftijd en isTeamlid naar de pagina schrijft
// ZIE CLASS PERSOON -> toPage()

// 12.   Maak 2 variables aan die een nieuwe instance zijn van de class Persoon, geef hierin de namen, leeftijd aan en maak er eentje een teamlid en  de andere niet
var teamlid = new Persoon("Niels", "Ettema", 21, true);
var geenTeamlid = new Persoon("Henk", "Boer", 45, false);

// 13.   Roep voor beide variables de functie aan die de voornaam, achternaam, leeftijd en isTeamlid naar de pagina schrijft
teamlid.toPage();
geenTeamlid.toPage();

// 14.   Maak een functie aan in Persoon die met een if-statement kijkt of een persoon een teamlid is en schrijft die naar de pagina
// ZIE CLASS PERSOON -> checkIfTeamlid()

// 15.   Roep voor beide varaibles de functie met de if-statement aan
teamlid.checkIfTeamlid();
geenTeamlid.checkIfTeamlid();

// 16.   Maak een class aan van jezelf die de class Persoon extends met een constructor die de voornaam, achternaam, leeftijd en isTeamlid opneemt
class Programmeur extends Persoon {
   constructor(voornaam: string, achternaam: string, leeftijd: number, isTeamlid: boolean) {
      super(voornaam, achternaam, leeftijd, isTeamlid); // Antwoord voor vraag 17
   }
}

// 17.   Stuur deze variables door naar de Persoon class
// ZIE CLASS PROGRAMMEUR -> super.(voornaam, achternaam, leeftijd, isTeamlid)

// 18.   Check of jij een teamlid bent
var backender = new Programmeur("TypeScript", "Lover", 1, true);
backender.checkIfTeamlid();

// 19.   Schrijf jou gegevens naar de pagina
backender.toPage();
