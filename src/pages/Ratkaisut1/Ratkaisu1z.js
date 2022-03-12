import React from 'react'
import '../Ratkaisut.css';


const Ratkaisu1z = () => {
  return (
    <div className='body'>

                <h1>Tehtävä 1z - Tiivistelmä artikkeleistä</h1>
        <p>Päivämäärä: 22.1.2022 <br/>
            Opiskelija: Erik Ramm-Schmidt</p>
        <h2>Artikkeli 1 - What is Free Software?</h2>
        <p>Tämä on tiivistelmä artikkelista "What is Free Software" <cite>(https://www.gnu.org/philosophy/free-sw.html).</cite> </p>
        <p>Vapaa ohjelmisto (Free Software) täyttää seuraavat kriteerit
            <ul>
                <li>Käyttäjä on vapaa käyttämään sovellusta mihin tarkoitukseen tahansa</li>
                <li>Käyttäjä voi vapaasti tutkia ohjelman toimintoja</li>
                <li>Käyttäjä voi vapaasti levittää kopioita ohjelmasta</li>
                <li>Käyttäjä saa levittää modifioituja kopioita ohjelmasta</li>
            </ul>
        </p>
        <p>Muita pointteja artikkelissa:
            <ul>
                <li>Vapaa ohjelmisto voi olla kaupallistettu. Itse asiassa vapaa ohjelmisto on myös vapaasti käytettävissä kaupallisissa tarkoituksissa.</li>
                <li>Free software on "free" koska siihen liittyy vapauksia. Se ei ole välttämättä "free" siinä mielessä että se olisi maksuton. Itse asiassa monet maksuttomat ohjelmat eivät ole vapaita ohjelmistoja.
                </li>
                <li>Copyleft tarkoittaa, että kun jakaa ohjelman uudestaan (modifoituneena tai ei) niin ei voi asettaa rajoituksia jotka eivät ole sopusoinnussa vapaan ohjelmiston kanssa.
                </li>
                <li>Ohjelmiston levittäjä voi vaatia että uudelleenlevittäjä muuttaa joitain asioita, kuten nimen tai logon.
                </li>
                <li>Pitää olla tarkkana termien kanssa. Esimerkiksi "Open source" on lähellä vapaata ohjelmistoa mutta ei aivan sama asia.
                </li>
                <li>Vapaan ohjelmiston määritelmä on kehittynyt ja siitä on ollut monta eri versiota.</li>
            </ul>
        </p>
        <h2>Artikkeli 2 - Install Debian on Virtualbox</h2>
        <p>Tämä on tiivistelmä artikkelista "Install Debian on Virtualbox." <cite>(https://terokarvinen.com/2021/install-debian-on-virtualbox/).</cite> </p>
        <p>Tämä artikkeli sisältää ohjeet miten Debiania voi asentaa Virtualboxiin. Artikkelissa on seuraavat askeleet
            <ul>
                <li>Lataa Debianin ISO kuva</li>
                <li>Luo uusi virtuaalikone Virtualboxissa
                </li>
                <li>Vie Debian ISO kuva virtuaalikoneeseen Virtual CDROM:ina</li>
                <li>Käynnistä Debian asentamatta sitä ns Live versiona</li>
                <li>Asenna Debian klikkaamalla install debian ikonia</li>
                <li>Tee käyttäjä ja kirjaudu</li>
                <li>Päivitä Debian</li>
                <li>Aseta lisäosia jotta saisit oikean resoluution</li>
            </ul>
        </p>
        <h2>Artikkeli 3 - Raportin kirjoittaminen</h2>
        <p>Tämä on tiivistelmä artikkelista "Raportin kirjoittaminen." <cite>(https://terokarvinen.com/2006/raportin-kirjoittaminen-4/).</cite> </p>
        <p>Tämä artikkeli kertoo miten raportit tulisi kurssissa kirjoittaa.
            <ul>
                <li>Ohjeet on kirjoitettu Tero Karvisen Linux kursseille mutta soveltuvat muihinkin kursseihin</li>
                <li>Kannattaa kirjoittaa raportti samalla kun tekee tehtäviä</li>
                <li>Raportti on kirjoitelma siitä mitä teki ja mikä oli seuraus</li>
                <li>Kannattaa kirjoittaa sähköiseen muotoon heti</li>
                <li>Raportteja kannattaa myös itseä varten kun tekee teknistä työtä</li>
                <li>Toistettavuus - jos toinen ihminen seuraa raporttia samassa ympäristössä pitäisi tulla sama tulos
                </li>
                <li>Ympäristö kuuluu myös raporttiin</li>
                <li>Ole täsmällinen</li>
                <li>Kirjoita imperfektmuodossa</li>
                <li>Tee raportista helppolukuisen: käytä väliotsikoita, kirjoita hyvällä kielellä. Voi lisätä tiivistelmän
                </li>
                <li>Tee viittauksia lähteisiin</li>
                <li>Pysy totuudessa, älä plagioi, älä käytä kuvia luvattomasti</li>
            </ul>
        </p>
        <h2>Lähteet</h2>
        <ol>
            <li>“What is Free Software?” <cite>The Free Software Foundation</cite>, https://www.gnu.org/philosophy/free-sw.html. Luettu 20.1.2022.</li>
            <li>“Install Debian on Virtualbox.” <cite>Tero Karvinen</cite>, 22.1.2021, https://terokarvinen.com/2021/install-debian-on-virtualbox/. Luettu 20.1.2022.</li>
            <li>“Raportin kirjoittaminen.” <cite>Tero Karvinen,</cite> 4.6.2006, https://terokarvinen.com/2006/raportin-kirjoittaminen-4/. Luettu 20.1.2022.
            </li>
        
        
        
        </ol>
    </div>
  )
}

export default Ratkaisu1z