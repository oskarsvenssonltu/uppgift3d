//Funktion för att validera telefonnummer enligt internationellt E.164-format
function giltigTelefon(telefon) {
  return /^\+[1-9]\d{1,14}$/.test(telefon);
}

//Funktion för att validera formuläret, kontrollerar namn, telefon och prioritet
function valideraFormular() {

   //Variabelnamn för de värden som valideras
  const namn = document.getElementById("namn").value.trim();
  const telefon = document.getElementById("telefon").value;
  const prioritet = document.getElementById("prioritet").value;
  const beskrivning = document.getElementById("beskrivning").value.trim();

  document.getElementById("felNamn").textContent = "";
  document.getElementById("felTelefon").textContent = "";

  //Sätter validerad till true
  let validerad = true;

  //Kollar om användaren skrivit in namn
  if (namn === "") {
    document.getElementById("felNamn").textContent =
      "Skriv in ett namn";
    validerad = false;
  }

  //Kollar om användaren skrivit in telefonnummer
  if (telefon === "") {
    document.getElementById("felTelefon").textContent =
      "Skriv in ett telefonnummer";
    validerad = false;

   //Kollar om telefonnummret är tilltigt via funktionen giltigTelefon 
  } else if (!giltigTelefon(telefon)) {
    document.getElementById("felTelefon").textContent =
      "Telefonnummer måste anges med landskod, exempelvis +46701234567";
    validerad = false;
  }

  //Kollar om beskrivningstexten är mindre är 50 teckan
  if (beskrivning.length < 50) {
  document.getElementById("felBeskrivning").textContent =
    "Beskrivningen måste innehålla minst 50 tecken";
  validerad = false;
}

  if (validerad) {

    //Variabelnamn för de värden som inte valideras
    const kategori = document.getElementById("kategori").value;
    const rubrik = document.getElementById("rubrik").value;
    const beskrivning = document.getElementById("beskrivning").value;
    const epost = document.getElementById("epost").value;


    //Kollar vilken radioknapp som är vald, om ingen retuneras en tom sträng
    const valdOrt = document.querySelector('input[name="ort"]:checked');

    //Sätter ort till det valda värdet, annars tom sträng
    const ort = valdOrt ? valdOrt.value : "";

    //Loggar värdena från formuläret
    console.log("Namn:", namn);
    console.log("Telefon:", telefon);
    console.log("E-post:", epost);
    console.log("Prioritet:", prioritet);
    console.log("Ort:", ort);
    console.log("Kategori:", kategori);
    console.log("Rubrik:", rubrik);
    console.log("Beskrivning:", beskrivning);
  }

  //Om validerad är true och prioritet är = 3, skickas formläret
      if (validerad && prioritet === "3"){
        return true;
         }

  //Om prioritet inte är = 3, skickas inte formläret
  return false;
}