import React from 'react'
import Picture1 from './Kuvat1a/Picture1.png';
import Picture2 from './Kuvat1a/Picture2.png';
import Picture3 from './Kuvat1a/Picture3.png';
import Picture4 from './Kuvat1a/Picture4.png';
import Picture5 from './Kuvat1a/Picture5.png';
import Picture6 from './Kuvat1a/Picture6.png';
import Picture7 from './Kuvat1a/Picture7.png';
import Picture8 from './Kuvat1a/Picture8.png';
import Picture9 from './Kuvat1a/Picture9.png';
import Picture10 from './Kuvat1a/Picture10.png';
import Picture11 from './Kuvat1a/Picture11.png';
import Picture12 from './Kuvat1a/Picture12.png';
import Picture13 from './Kuvat1a/Picture13.png';
import '../Ratkaisut.css';

const Ratkaisu1z = () => {
    return (
        <div className='body'>
        <h1>Tehtävä 1a - Linuxin asennusraportti</h1>
        <p>Päivämäärä: 22.1.2022 <br/>
        Opiskelija: Erik Ramm-Schmidt</p>
        <p>
            Minun koneella (Windows 10) oli jo asennettu VirtualBox versio 6.1.
        </p>
        <p>
            Tämän installaation tukena käytettiin Tero Karvisen ohjeet
            <cite>(https://terokarvinen.com/2021/install-debian-on-virtualbox/).</cite>.
        </p>
        <p>
            Latasin koneelle debianin ISO kuvan Tero Karvisen ohjeissa löytyneestä linkistä
            https://cdimage.debian.org/images/unofficial/non-free/images-including-firmware/current-live/amd64/iso-hybrid/debian-live-11.2.0-amd64-xfce+nonfree.iso
        </p>
        <p>
            Avasin Virtualboxin ja loin uuden Virtuaalikoneen painamalla "New"
        </p>
        <p>
            Avasin virtualbox ohjelman. Klikkasin "New" ikonia.
        </p>
        <p>
            Valitsin seuraavat asetukset: Name: "debian", Type:Linux, Version: Debian (64-bit)
        </p>
        <p>
            Valitsin muistin suuruudeksi 8192 MB
        </p>
        <p>
            Valitsin seuraavaksi "Create a virtual hard disk now" ja klikkasin "Create"
        </p>
        <p>
            Valitsin kovalevyn tyypiksi VDI
        </p>
        <p>
            Seuraavaksi valitsin että kovalevyn suuruus on "Dynamically allocated"
        </p>
        <p>
            Nyt minulla oli debian niminen Virtuaalikone
        </p>
        <p>
            <img src={Picture1}/>
        </p>
        <p>
            Menin debian virtuaalikoneen järjestelmäasetuksiin painamalla "Settings" ja tein seuraavat asetukset
            prosessorille ja näytönohjaajalle
        </p>
        <p>
        <img src={Picture2}/>
        </p>
        <p>
        <img src={Picture3}/>
        </p>
        <p>Menin Storageen ja lisäsin debian ISO kuvan kuten ohjeissa (Settings → Storage → Controller IDE Empty → IDE
            Secondary Device → Valitse debian ISO kuva)</p>
            <img src={Picture4}/>
        <p>Starttasin debian Virtuaalikoneen tuplaklikkaamalla</p>
        <p>Valitsin ensin "Live Kernel" vaihtoehdon</p>
        <p>Pääsin toimivaan Debianiin</p>
        <img src={Picture5}/>
        <p>Avasin Firefoxin ja katsoin Youtubevideon ja totesin että netti ja ääni toimii.</p>
        <p>Tuplaklikkasin "Install Debian" ikonia.</p>
        <p>Tuli ilmoitus että tietokoneella ei ole tarpeeksi levytilaa.</p>
        <p>Painoin "Cancel" ja suljin virtuaalikoneen.</p>
        <p>Menin debian-virtuaalikoneen asetuksiin VirtualBoxissa: Settings → Storage</p>
        <p>En löytänyt sieltä tapaa laajentaa tallennustilaa, mutta pystyin poistaamaan virtuaalisen kovalevyn, ja tein sen.
        </p>
        <img src={Picture6}/>
        <p>Tämän jälkeen lisäsin uuden virtuaalisen levyaseman</p>
        <img src={Picture7}/>
        <p>Valitsin "Create"</p>
        <img src={Picture8}/>
        <p>Ja hieman isomman kovalevyn (edellinen oli 8GB)</p>
        <img src={Picture9}/>
        <p>Nyt näytti tältä</p>
        <img src={Picture10}/>
        <p>Starttasin taas debian virtuaalikoneen</p>
        <p>Tuli ilmoitus että bootable media puuttuu</p>
        <p>Lisäsin bootable median kuten olin tehnyt jo aiemmin</p>
        <img src={Picture11}/>
        <p>Käynnistin virtuaalikoneen</p>
        <p>Valitsin live version</p>
        <p>Tarkistin taas että ääni ja netti toimii menemällä youtubeen.
        </p>
        <p>Tuplaklikkasin "Install Debian" ikonia
        </p>
        <p>Ei virheilmoitusta tällä kertaa, valitsin kieleksi "American English" ja "Next"
        </p>
        <p>Valitsin Region = Europe ja Zone = Helsinki ja painoin "Next"
        </p>
        <p>Valitsin Keyboard model = Finnish Default ja painoin "Next"
        </p>
        <p>Valitsin "Erase Disk" ja painoin "Next"
        </p>
        <p>Annoin nimitietoni ja valitsin salasanan ja painoin "Next".
        </p>
        <p>Painoin vielä kerran "Next" ja installaatio alkoi
        </p>
        <p>Pienen odottelun jälkeen asennus oli valmis. Kaikki tuntui toimivan, mutta resoluutio ei ollut ihan oikea,
            virtuaalikoneen näyttö oli liian pieni.
        </p>
        <img src={Picture12}/>
        <p>Kirjoitin "sudo apt-get update" komentotulkissa ja painoin Enter. Kone näytti päivittävän itsensä.</p>
        <p>Palasin Tero Karvisen tekstiin missä oli osio resoluutio-ongelmasta (Install Guest Additions for Good
            Resolution).
        </p>
        <p>Seurasin ohjeet: <br/>
            Devices → Insert Gurest Addtions CD Image
        </p>
        <p>Klikkasin ikonia:</p>
        <img src={Picture13}/>
        <p>Avasin komentotulkin ja kirjoitin <br/>
            cd /media/*/VBox* <br/>
            ls <br/>
            sudo bash VBoxLinuxAdditions.run
        </p>
        <p>Tämän jälkeen käynnistin koneen uudelleen, ja nyt kuva täyttää koko näytön.
        </p>
        <p>Sain myös toisen näytön näkyviin: View → Virtual Screen 2 → Enable
        </p>
        <p>Kaikki toimi nyt, paitsi että Windows 10 tehtäväpalkki oli näkyvissä myös Full Screen Mode:issa. Googlasin ongelman ja se hoitui uudelleenkäynnistämällä Windows Explorerin (Task Managerissa).</p>
        <h2>Lähteet</h2>
            <p> “Raportin kirjoittaminen.” <cite>Tero Karvinen,</cite> 4.6.2006, https://terokarvinen.com/2006/raportin-kirjoittaminen-4/. Luettu 20.1.2022.
                </p>
        </div>
    )
}

export default Ratkaisu1z