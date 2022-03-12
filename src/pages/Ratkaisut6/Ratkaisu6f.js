import React from 'react';
import '../Ratkaisut.css';
import Picture1 from './Kuvat6f/6f1.jpg';
import Picture2 from './Kuvat6f/6f2.jpg';
import Picture3 from './Kuvat6f/6f3.jpg';
import Picture4 from './Kuvat6f/6f4.jpg';
import Picture5 from './Kuvat6f/6f5.jpg';

const Ratkaisu6f = () => {
    return (
        <div className='body'>
            <h1>Tehtävä 6f - Tee uusi tyhjä virtuaalikone</h1>
            <p><b>12.3.2022<br />
                klo 15.46<br />
                Isäntäkoneen käyttis: Ubuntu 20.04
            </b>

                <ul>
                    <li>Menin Tero Karvisen kotisivuille katosomaan ohjeita.
                        Latasin debian ison osoitteesta debian-live-11.2.0-amd64-xfce+nonfree.iso.
                        Lataus vei muutaman minuutin.</li>
                    <li>Avasin Ubuntukoneella Virtualboxin</li>
                    <li>Valitsin New</li>
                    <li>Annoin sille nimen "koekone</li>
                    <li>Annoin sill 4096 MB muistia</li>
                    <li>Valitsin "Create a virtual hard disk now"</li>
                    <li>Valitsin VDI (VirtualBox Disk Image</li>
                    <li>Valitsin Dynamically allocated</li>
                    <li>Annoin sille koon 30GB </li>
                    <li>Painoin "Create"</li>
                    <li>Valitsin Virtualboxissa koneen ja menin asetuksiin: Settings → Storage
                Storage Devices:n ja Controlle: IDE:n alla klikkasin kohtaa jossa luki "Empty".</li>

                </ul>

            </p>
            <p><b>klo 15.55</b></p>

            <br />
            <br />
                

            <cite>Alla on kuvat tähänastisesta edistymiestä</cite>

            <img src={Picture1}></img>

            <ul>
                <li>Klikkasin Attributs:in ja Optical Driven vieressä olevaa levy ikonia</li>
                <li>    Valitsin "choose/create virtual optical disk</li>
                <li>Seuraavaksi valitsin "Add"</li>
                <li>Navigoin Downloads kansioon ja valitsin sieltä lataamani iso:n ja painoi "Open".</li>
                <li> Seuraavaksi iso oli valittuna ja painoin "Choose".</li>
                <li>Tämän jälkeen painoin "OK".</li>
                <li>Virtuaalikone "koekone" valittuna painoin "Start"</li>
                <li>Valitsin Graphical Debian Installer</li>
            </ul>
            <br />
            <br />
            <p><cite>Alla on kuvat edistymiestä</cite></p>
            <img src={Picture2}></img>

            <p>Tämän jälkeen tein seuraavat valinnat. En pystynyt ottamaan kuvankaappauksia sillä virtuaalikone kaappasi kursurin asennuksen loppuajaksi enkä voinut käyttää istäntäkonetta.</p><br />

            <ul>
                <li>Hostname: koekone</li>
                <li>Domain name: jätin tyhjäksi</li>
                <li>Password: ***</li>
                <li>Full name: Erik Ramm-Schmidt</li>
                <li>username: erik</li> 
                <li>Password for new user: ***</li>
                <li>Partition method: Guided - Entire disk</li>
                <li>Select disk to patition: ACSL1 (ainoa valinta)</li>
                <li>Partitioning scheme: All files in one partition</li>
                <li>Finish partition and write changes to disk: Yes </li>
            </ul>
            <p>Tämän jälkeen installaatio alkoi. Se kesti yllättävän kauan ja kursori oli edelleen kaapattuna. </p>
            <p>Asennusprosessi jatkui uusilla kysymyksillä:</p>
            <ul>
                <li>Use a network mirron? No</li>
                <li>Install bootlader to primary drive? Yes</li>
                <li>Device for boot loader installation: /dev/sda</li>
                <li>Installation complete: Continue</li>
            </ul>
            <p>Nyt asennuksen piti olla valmis. Virtuaalikone lähti käynnistymään uudelleen. </p>
            <p>Mutta tuli pelkkä musta näyttö, johon pystyin kirjoittamaan. Se ei kuitenkaan reagoinut komentoihin (yritin käynnistää uudelleen kirjoittamalla reboot).</p>
            <p>Suljin virtuaalikoneen.</p>
            <br />
            <br />
            <p><cite>Alla näkyy että virtuaalikone ei käynnistynyt ja että suljin sen.</cite></p>

            <img src={Picture3}/>
            <p><b>Klo 16.20</b></p>
            <p>Avasin Virtualboxin uudelleen, avasin virtuaalikoneen mutta pääsin taas mustalle näytölle.</p>
            <p>Virtualboxissa oikeaklikkasin koekone-konetta ja poistin sen (remove all files).</p>
            <p>Tein uuden virtuaalikoneen Virtualboxissa samoilla asetuksilla kuten aikaisemmin: <br/>
            New → Name:koekone, Type:Linux → Memory size:4096 → Create a virtual hard disk now → Hard disk file type:VDI →Storage on physical hard disk: Dynamically allocated → Kovalevy suuruus: 30GB → Create            
            </p>

            <p>Asensin iso-kuvan virtuaaliseksi cd-levyksi koneelle kuten aikaisemmin:<br/>
            Virtualboxissa virtuaalikone valittuna  → Settings → Storage → Klikkasin Controller IDEn alla olevaa levykuvaa missä luki "Empty" → Optical Drive:n vieressä oleva levyikoni → Choose/Create Virtual… → Valitsin lataamani ison - Suljin settings ikkunan
            </p>
            <p><b>Klo 16.33</b></p>
            <ul>
                <li>Käynnistin koekone virtuaalikoneen</li>
                <li>Valitsin Debian GNU/Linux Live</li>
                <li>Kone käynnistyi</li>
                <li>Klikkasin Install Debian</li>
                <li>Asennusohjelma näytti erilaiselta kuin edellisellä yrittämällä, kieleksi jätin American English ja klikkasin next</li>
                <li>Valitsin aikavyöhykkeen</li>
                <li>Keyboard Finnish</li>
                <li>Erase disk</li>
                <li>Annoin nimen, annoin tietokoneen nimen ja kirjoitin salasanan</li>
                <li>Valitsin Install (Tämä nappi ei ollut näkyvissä, piti siirtää installaatioikkunaa)</li>
                <li>Installaatio alkoi</li>
                <li>Tuli ilmoitus että asennus oli valmis</li>
                <li>Starttasin koneen uudelleen</li>
                <li>Pääsin taas mustalle näytölle eikä mitään tapahtunut</li>
            </ul>
            <br/>
            <p><cite>Alla on kuvat asennusprosessista kun aloitetaan käynnistämällä Debianin livenä.</cite></p>
            <img src={Picture4}/>
            <p><b>Klo 16.45</b></p>
            <ul>
                <li>Suljin virtuaalikoneen ja käynnistin sen tas. </li>
                <li>Nyt pääsin kirjautumaan.</li>
                <li>Kaikki näytti hyvältä. </li>
                <li>Tarkistin että netti ja ääni tomi katsomalla youtubevideon. Kaikki toimi.</li>
                <li>Avasin komentotulkin ja kirjoitin: sudo apt-get update</li>
                <li>Kirjoitin sudo apt-get upgrade ja annoin päivitysten tapahtua.</li>
                <li>Asensin palomuurin ja käynnistin sen:
                    <li>sudo apt-get -y install ufw</li>
                    <li>sudo ufw enable</li>
                </li>
                <li>Sammutin koneen</li>
            </ul>
            <br/>
            <p><cite>Alla kirjautuminen ja Youtube.</cite></p>
            <img src={Picture5}/>
            <p><b>Klo 16.55</b></p>
            <p>Käynnistin koneen vielä kerran ja kaikki toimi.</p>
            <h3>Lähteet</h3>
            <cite>Karvinen, Tero. “Install Debian on Virtualbox.” 22 January 2021, <br/> https://terokarvinen.com/2021/install-debian-on-virtualbox/. Accessed 12 March 2022.</cite>

        </div>
    )
}

export default Ratkaisu6f