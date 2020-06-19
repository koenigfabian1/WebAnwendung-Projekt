function NotAvail()
{
  if (document.getElementById("userInput").value === '') { //If the client entered something else then a number
    alert('Unzulässige Eingabe!');
  }else{
      alert("-Das Produkt wurde nicht zum Warenkorb hinzugefügt! - Produkt nicht auf Lager.");
  }
  window.location.reload(true);
}
