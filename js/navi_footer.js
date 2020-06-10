// navigation und footer erzeugen/anzeigen
var naviDaten=null;
$(document).ready(function() {

     naviDaten = localStorage.getItem('navigationsDaten'); //Try to get the item!

    if (naviDaten == undefined || naviDaten == null) {
        console.log("Navigationsdaten fehlen");
        $.ajax({
            url: "http://localhost:8000/api/produktkategorie/alle",
            method: "get",
            dataType: "json"
        }).done(function(response) {
            console.log('Navigationsdaten vom Service erhalten');
            naviDaten = response.daten;
            // daten erhalten - diese merken
            localStorage.setItem('navigationsDaten', JSON.stringify(response.daten));
            // navigation erzeugen
            navigationAusgeben(response.daten);
        }).fail(function(jqXHR, statusText, error) {
            console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
            alert("Ein Fehler ist aufgetreten");
        });
    } else {
        console.log("Navigationsdaten geladen");
        navigationAusgeben(JSON.parse(naviDaten));
    }

    // immer ausgeben
    footerAusgeben();
 });


 function navigationAusgeben(daten) {
     console.log("Gebe Navigation aus");
     console.log(daten);

    var node = $('<div>', { class: 'pointer' })
                    .append(
                        $('<div>', { class: 'logo' })
                            .attr('onClick', 'window.location.href=\'start.html\'')
                            .append($('<img>').attr('src', '../img/DeluxeCar.png'))
                    );

    var nodeNav = $('<nav>');

        var nodeUl = $('<ul>');

                var nodeLi = $('<li>').append($('<a>', { class: 'navi' }).attr('href', 'start.html').text('Startseite'));
                nodeUl.append(nodeLi);
                // TODO produktkategorien als node link objekte
                for(i = 0; i < daten.length; i++){
                  nodeLi = $('<li>').append($('<a>', { class: 'navi' }).attr('href', 'produktliste.html?kategorie=' + daten[i].id).text(daten[i].bezeichnung));
                  nodeUl.append(nodeLi);
                }

                nodeLi = $('<li>').append($('<a>', { class: 'navi' }).attr('href', 'Warenkorb.html').text('Warenkorb'));
                nodeUl.append(nodeLi);

        nodeNav.append(nodeUl);


    $('body').prepend(nodeNav);
    $('body').prepend(node);

    /* beispiele
    $('<b>', { class: 'abx def' })
            .html('Hallo <i>du schöne</i> Welt')

    $('<b>', { class: 'abx def' })
        .append('Hallo')
        .append($('<i>').text('du schöne'))
        .append('Welt')
    ;



    <b class="abx def">
        Hallo
        <i>du schöne</i>
        Welt
    </b>
*/

 }


 function footerAusgeben() {
     var tmp = '<div class="footer-basic"><footer><p>Marcus, Fabian, Leon, Caspar © 2020 Webanwendung2 <br> <a href="Impressum.html">Impressum</a> | <a href="Kontakt.html">Kontakt</a> </p></footer></div>';
     $('body').append(tmp);
 }
