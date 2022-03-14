import React from 'react'
import '../Ratkaisut.css';
import Kuva6e1 from './Kuvat6e/6e1.png';
import Kuva6e2 from './Kuvat6e/6e2.png';
import Kuva6e3 from './Kuvat6e/6e3.png';
import Kuva6e4 from './Kuvat6e/6e4.png';
import Kuva6e5 from './Kuvat6e/6e5.png';
import Kuva6e6 from './Kuvat6e/6e6.png';
import Kuva6e7 from './Kuvat6e/6e7.png';
import Kuva6e8 from './Kuvat6e/6e8.png';
import Kuva6e9 from './Kuvat6e/6e9.png';
import Kuva6e10 from './Kuvat6e/6e10.png';
import Kuva6e11 from './Kuvat6e/6e11.png';
import Kuva6e12 from './Kuvat6e/6e12.png';
import Kuva6e13 from './Kuvat6e/6e13.png';
import Kuva6e14 from './Kuvat6e/6e14.png';
import Kuva6e15 from './Kuvat6e/6e15.png';
import Kuva6e16 from './Kuvat6e/6e16.png';
import Kuva6e17 from './Kuvat6e/6e17.png';
import Kuva6e18 from './Kuvat6e/6e18.png';
import Kuva6e19 from './Kuvat6e/6e19.png';
import Kuva6e20 from './Kuvat6e/6e20.png';
import Kuva6e21 from './Kuvat6e/6e21.png';
import Kuva6e22 from './Kuvat6e/6e22.png';
import Kuva6e23 from './Kuvat6e/6e23.png';
import Kuva6e24 from './Kuvat6e/6e24.png';
import Kuva6e25 from './Kuvat6e/6e25.png';
import Kuva6e26 from './Kuvat6e/6e26.png';



const Ratkaisu6e = () => {
    return (
        <div className='body'>
            <h1>Linuxpalvelimet - Labratyö</h1>
            <h3>Työn kuvaus</h3>
            <p>Valitsin työkseni labran <b> <a href="https://terokarvinen.com/2021/final-lab-for-linux-server-course/?fromSearch=laboratorio">Final Lab for Linux Server Course 2021 Spring</a> </b></p>
            <p>Tehtävän tausta on että kokelas on työntekijä yhtiöllä Leili Oy.<br /> Tarkoituksena oli: </p>
            <br />
            <ol>
                <li>Luoda admin käyttäjä omalla nimellä .</li>
                <li>Luoda tiedosto lab.txt johon joitakin tietoja tallennetaan. Lukuoikeus tiedostoon olisi vain itsellä.</li>
                <li>Suojata tietokone palomuurilla</li>
                <li>Avata SSH yhteys joka mahdollistaisi etäyhteyden.</li>
                <li>Luoda viisi muuta käyttäjää muille työntekijöille ja tallentaa näiden tiedot lab.txt tiedostoon.</li>
                <li>Luoda uusi komento "netsee" joka näyttää tietoa koneen nettiyhteydestä</li>
                <li>Luoda asiakastietokannan ja näyttää se etusivulle osoitteessa localhost. Siinä tulisi näkyä yhtiön nimi, liikevaihto sekä työntekijämäärän.</li>
                <li>Tehdä kuormitustestaus sivulle</li>
            </ol>
            Lisäksi oli kaksi bonustehtävää, mutta jätin ne tekemättä.

            <h3>Labran ympäristö</h3>
            <p>
                Isäntäkone: Ubuntu 20.04, koneen nimi: linux, admin käyttäjänimi: erik
                <br />
                Virtuaalikone: Juuri asennettu Virtualboxissa pyörivä Debian 11, koneen nimi: koekone, admin käyttäjänimi: erik
            </p>
            <h2>Labra alkaa</h2>

            <h3>1. Admin käyttäjä itselle omalle nimelle.</h3>
            <p>Pvm: 13.03.2022</p>
            <p>Klo: 20.00</p>
            <p>Olin jo luonut adminkäyttäjän omalla nimellä (erik) joten loin uuden käyttäjän jolle annoin toisen etunimeni, Ossian.</p>
            <p>Virtuaalikoneen komentotulkissa:</p>
            <p className='code'>
                erik@koekone:~$ sudo adduser ossian<br />
                Adding user `ossian' ...<br />
                erik@koekone:~$ sudo adduser ossian<br />
                Adding new group `ossian' (1001) ...<br />
                Adding new user `ossian' (1001) with group `ossian' ...<br />
                Creating home directory `/home/ossian' ...<br />
                Copying files from `/etc/skel' ...<br />
                New password:<br />
                Retype new password:<br />
                passwd: password updated successfully<br />
                Changing the user information for ossian<br />
                Enter the new value, or press ENTER for the default<br />
                Full Name []: Ossian<br />
                Room Number []: Ramm-Schmidt<br />
                Work Phone []: 12341234<br />
                Home Phone []: 12341234<br />
                Other []:<br />
                Is the information correct? [Y/n] y<br />
            </p>
            <p>Annoin käyttäjälle ossian admin oikeudet</p>
            <p className='code'>erik@koekone:~$ sudo adduser ossian sudo<br />
                Adding user `ossian' to group `sudo' ...<br />
                Adding user ossian to group sudo<br />
                Done.<br />
                erik@koekone:~$ sudo adduser ossian adm<br />
                Adding user `ossian' to group `adm' ...<br />
                Adding user ossian to group adm<br />
                Done.<br />
                erik@koekone:~$ sudo adduser ossian admin<br />
                adduser: The group `admin' does not exist.<br />
            </p>
            <p>
                Viimeinen virheviesti yllätti vähän koska olin tehnyt saman luomillani debianservereillä. Ehkä admin ryhmä on vain olemassa server versiossa?
            </p>
            <p>
                Kirjauduin käyttäjänä ossian
            </p>
            <p className='code'>
                erik@koekone:~$ su ossian<br />
                Password:<br />
                ossian@koekone:/home/erik$<br />

            </p>
            <p>
                Siirryin Ossianin kotihakemistoon
            </p>
            <p className='code'>
                ossian@koekone:/home/erik$ cd<br />
                ossian@koekone:~$
            </p>
            <h3>2. Tiedosto lab.txt</h3>
            <p>Loin tiedoston lab.txt</p>
            <p className='code'>
                ossian@koekone:~$ nano lab.txt
            </p>
            <p>
                Lisäsin oman nimeni tiedostoon sekä linkin harjoituksiin
            </p>
            <p className='code'>
                ossian@koekone:~$ cat lab.txt<br />
                Erik Ramm-Schmidt<br />
                Kolmen ensimmäisen viikon harjoitukset<br />
                https://bgu152.github.io/linuxpalvelimet_h1/<br />
                Loput harjoituksista<br />
                https://linuxpalvelimet.web.app/<br />

            </p>
            <p>
                <b>Klo: 20.14</b>
            </p>
            <p>
                Muutin lab.txt tiedoston oikeuksia siten että vain ossian pystyisi lukemaan sen sisällön
            </p>
            <p className='code'>
                ossian@koekone:~$ chmod 700 lab.txt

            </p>
            <p>
                Testasin että muut eivät pysty lukemaan sitä. Kirjauduin käyttäjänä root.
            </p>
            <p className='code'>
                ossian@koekone:~$ sudo su

            </p>
            <p>
                Kokeilin että pystyykö root lukemaan sen.

            </p>
            <p className='code'>
                root@koekone:/home/ossian# cat lab.txt<br />
                Erik Ramm-Schmidt<br />
                Kolmen ensimmäisen viikon harjoitukset<br />
                https://bgu152.github.io/linuxpalvelimet_h1/<br />
                Loput harjoituksista<br />
                https://linuxpalvelimet.web.app/


            </p>
            <p>
                Selvästi root pystyy lukemaan sen, jotain meni väärin. Ehkä chmod 700 ei ollut oikea tapa antaa oikeudet.

            </p>
            <p>
                Kirjauduin käyttäjänä erik ja kokeilin että pystynkö lukemaan tiedoston lab.txt

            </p>
            <p className='code'>
                root@koekone:/home/ossian# su erik<br />
                erik@koekone:/home/ossian$ cat lab.txt<br />
                cat: lab.txt: Permission denied

            </p>
            <p>Käyttäjä erik ei siis saa lukea lab.txt tiedostoa.</p>
            <p>Kokeilen sudolla käyttäjänä erik.</p>
            <p className='code'>
                erik@koekone:/home/ossian$ sudo cat lab.txt<br />
                [sudo] password for erik:<br />
                Erik Ramm-Schmidt<br />
                Kolmen ensimmäisen viikon harjoitukset<br />
                https://bgu152.github.io/linuxpalvelimet_h1/<br />
                Loput harjoituksista<br />
                https://linuxpalvelimet.web.app/

            </p>
            <p>
                Se onnistui, valitettavasti.
            </p>
            <p>
                Käyttäjä erik ei siis voinut lukea tiedoston lab.txt. Halusin tutkia että voiko erik lukea muita ossianin tiedostoja.<br/>
                Kirjauduin käyttäjänä ossian ja loin tiedoston test.txt, en muuttanut oletusoikeuksia.

            </p>
            <p className='codse'>
                erik@koekone:/home/ossian$ su ossian<br />
                ossian@koekone:~$ cat test.txt<br />
                test

            </p>
            <p>
                Kirjauduin käyttäjänä erik uudelleen ja yritin lukea tiedostoa.
            </p>
            <p className='code'>
                ossian@koekone:~$ su erik<br />
                Password:<br />
                erik@koekone:/home/ossian$ cat test.txt<br />
                test<br />

            </p>
            <p>
                Selvästi käyttäjä erik pystyy lukemaan ossianin luomia tiedostoja, joten onnistuin ainakin osittain tehtävässä koska erik ei pysty lukemaan lab.txt. Mahdollisesti root:ilta ei voi mitenkään kieltää lukeminen.
            </p>
            <p><b>Klo: 20.32
            </b></p>
            <h3>3. Palomuuri</h3>
            <p>
                Olin jo laittanut palomuurin päälle, tein sen heti kun loin virtuaalikoneen jossa teen labran. Tein sen kommennolla sudo ufw enable.
                Tarkistin että palomuuri on päällä

            </p>
            <p className='code'>
                erik@koekone:/home/ossian$ sudo ufw status<br />
                Status: active
            </p>
            <h3>4. SSH yhteys</h3>
            <h4>Reikä palomuuriin SSH yhteyksille</h4>
            <p>Tein reiän palomuurin ssh yhteyksille</p>
            <p className='code'>
                erik@koekone:/home/ossian$ sudo ufw allow 22/tcp<br />
                Rule added<br />
                Rule added (v6)
            </p>
            <p>Käynnistin palomuurin uudestaan</p>
            <p className='code'>
                erik@koekone:/home/ossian$ sudo systemctl restart ufw
            </p>
            <p>
                Tarkistin että portti 22 oli auki
            </p>
            <p className='code'>
                erik@koekone:/home/ossian$ sudo ufw status verbose<br />
                Status: active<br />
                Logging: on (low)<br />
                Default: deny (incoming), allow (outgoing), disabled (routed)<br />
                New profiles: skip<br />

                To                         Action      From<br />
                --                         ------      ----<br />
                22/tcp                     ALLOW IN    Anywhere<br />
                22/tcp (v6)                ALLOW IN    Anywhere (v6)
            </p>
            <p>
                Portti 22 oli selvästi auki.
            </p>
            <h4>SSH:n testaaminen</h4>
            <p>
                Halusin testata SSH yhteyden host koneelta, mutta sitä varten minun piti tehdä muutoksen Virtualboxin asetuksiin. Suljin virtuaalikoneen. Bridged Adapter pitää olla päällä, joten tein seuraavan muutoksen.
            </p>
            <img src={Kuva6e1}></img>
            <p>Käynnistin virtuaalikoneen uudelleen. Kirjauduin käyttäjänä ossian.</p>
            <p>Hain virtuaalikoneen ip osoitteen kotiverkossa komennolla ip addr.</p>
            <img src={Kuva6e2}></img>
            <p>Avasin komentotulkin isäntäkoneella ja yritin ottaa yhteyden ssh:lla, se ei onnistunut.</p>
            <img src={Kuva6e3}></img>
            <p>Pingillä isäntäkoneelta virtuaalikoneeseen sain kuitenkin vastauksen </p>
            <p className='code'>
                erik@linux:~$ ping 192.168.100.13<br />
                PING 192.168.100.13 (192.168.100.13) 56(84) bytes of data.<br />
                64 bytes from 192.168.100.13: icmp_seq=1 ttl=64 time=0.532 ms
            </p>
            <p>Googlasin ongelmaa ja päädyin sivulle <a href="https://linuxhint.com/fix_connection_refused_ubuntu/ ">https://linuxhint.com/fix_connection_refused_ubuntu/ </a>  missä kehotettiin tarkistamaan että ssh serveri on asennettuna. </p>
            <p>Päivitin pakettilistaa</p>
            <p className='code'>
                ossian@koekone:~$ sudo apt-get update
            </p>
            <p>
                Annoin komennon asentaa ssh serverin
            </p>
            <p className='code'>
                ossian@koekone:~$ sudo apt-get install openssh-server
            </p>
            <p>
                Tämän jälkeen tapahtui asennus, joten selvästi se ei ollut asennettuna.
            </p>
            <p>
                Tarkistin että onko ssh päällä, se ei ollut

            </p>
            <p className='code'>
                ossian@koekone:~$ sudo systemctl enable ssh<br />
                Synchronizing state of ssh.service with SysV service script with /lib/systemd/systemd-sysv-install.<br />
                Executing: /lib/systemd/systemd-sysv-install enable ssh

            </p>
            <b>Klo 21.06</b>
            <p>Kokeilin uudestaan ottaa ssh yhteyden isäntäkoneelta</p>
            <p className='code'>
                erik@linux:~$ ssh ossian@192.168.100.13<br />
                ssh: connect to host 192.168.100.13 port 22: Connection refused

            </p>
            <p>
                Taaskaan se ei onnistunut. Käynnistin virtuaalikoneen uudelleen

            </p>
            <p>
                Tutkin ensin että onko ssh päällä
            </p>
            <p className='code'>
                ossian@koekone:~$ ssh status<br />
                ssh: Could not resolve hostname status: Name or service not known
            </p>
            <p>
                Jotain ongelmaa näytti olevan.
            </p>
            <p>
                Kokeilin toisella komennolla
            </p>
            <p className='code'>
                Olin kirjoittanut komennon väärin, yritin uudestaan kirjoittamalla
                ossian@koekone:~$ sudo systemctl status ssh<br />
                ...<br />
                Active: active (running). <br />
                ...<br />
            </p>
            <p>Vaikutti siltä että SSH oli päällä.</p>
            <p>Kokeilin kirjautumista uudelleen isäntäkoneelta:
            </p>
            <p className='code'>
                erik@linux:~$ ssh ossian@192.168.100.13<br />
                The authenticity of host '192.168.100.13 (192.168.100.13)' can't be established.<br />
                ECDSA key fingerprint is SHA256:Vt4v9qNAkaX53eDCjYkRAuQHCknYd/SDEfjLbZa0SMQ.<br />
                Are you sure you want to continue connecting (yes/no/[fingerprint])? yes<br />
                Warning: Permanently added '192.168.100.13' (ECDSA) to the list of known hosts.<br />
                ssh_dispatch_run_fatal: Connection to 192.168.100.13 port 22: Broken pipe
            </p>
            <p>
                Pääsin vähän pidemmälle, näköjään tällä kertaa virtuaalikone ei kieltänyt yhteydenottoa.

            </p>
            <p>
                Yritin uudestaan ja se toimi!

            </p>
            <img src={Kuva6e3}></img>
            <p><b>Klo 21.20</b></p>
            <p>Kirjauduin ulos etäyhteydeltä</p>
            <p className='code'>
                ossian@koekone:~$ logout<br />
                Connection to 192.168.100.13 closed.<br />
                erik@linux:~$
            </p>
            <h3>5. Uusia käyttäjätiliä</h3>
            <p>
                Avasin lab.txt tiedoston ja lisäsin siihen työntekijöiden nimet, tunnukset ja salasanat (en ollut vielä luonut tunnuksia).

            </p>
            <p className='code'>
                ossian@koekone:~$ nano lab.txt
                ossian@koekone:~$ cat lab.txt<br />
                Erik Ramm-Schmidt<br />
                Kolmen ensimmäisen viikon harjoitukset<br />
                https://bgu152.github.io/linuxpalvelimet_h1/<br />
                Loput harjoituksista<br />
                https://linuxpalvelimet.web.app/<br />
                <br />
                Työntekijät<br />
                <br />
                Ossi Otsoma ootso jaCMp7B4vpt7<br />
                Arnold Sjöbrengrörez asjob gEH7wrZT9n<br />
                Einari Vähäkäähkö evaha Gg67kYmvMh<br />
                Erkki Esimerkki eesim FsUWV9rHRg<br />
                Maija Mallihenkilö mmall R3c959Nyei
            </p>
            <p>Käyttäjänimet olin keksinyt itse ja salasanat olin generoinut Keepass ohjelmalla.</p>
            <p>
                Aloin tekemään heille tunnuksia:
                Ensin Ossi Otsomalle
            </p>
            <p className='code'>
                ossian@koekone:~$ sudo adduser ootso<br />
                [sudo] password for ossian:<br />
                Adding user `ootso' ...<br />
                Adding new group `ootso' (1002) ...<br />
                Adding new user `ootso' (1002) with group `ootso' ...<br />
                Creating home directory `/home/ootso' ...<br />
                Copying files from `/etc/skel' ...<br />
                New password:<br />
                Retype new password:<br />
                passwd: password updated successfully<br />
                Changing the user information for ootso<br />
                Enter the new value, or press ENTER for the default<br />
                Full Name []: Ossi<br />
                Room Number []: Otsoma<br />
                Work Phone []:<br />
                Home Phone []:<br />
                Other []:<br />
                Is the information correct? [Y/n] y<br />
            </p>
            <p>
                Tein vastaavat tunnukset myös Arnold Sjöbrengrörezille. Sitten huomasin että olin laittanut huoneennumeroksi sukunimen!
            </p>
            <p>Poistin käyttäjät ootso ja asjob</p>
            <p className='code'>
                ossian@koekone:/home/erik$ sudo userdel asjob<br />
                ossian@koekone:/home/erik$ sudo userdel ootso<br />
            </p>
            <p><b>Klo 21.36</b></p>
            <p>Lisäsin uudestaan Otso Otsaman</p>
            <p className='code'>
                Adding user `ootso' ...:<br />
                Adding new group `ootso' (1002) ...:<br />
                Adding new user `ootso' (1002) with group `ootso' ...:<br />
                The home directory `/home/ootso' already exists.  Not copying from `/etc/skel'.:<br />
                New password::<br />
                Retype new password::<br />
                passwd: password updated successfully:<br />
                Changing the user information for ootso:<br />
                Enter the new value, or press ENTER for the default:<br />
                Full Name []: Ossi Otsoma:<br />
                Room Number []::<br />
                Work Phone []::<br />
                Home Phone []::<br />
                Other []::<br />
                Is the information correct? [Y/n] y:<br />
            </p>
            <p>Lisäsin sitten myös muut samalla tavalla.</p>
            <p>Tarkistin että kotihakemistot löytyy kaikilla</p>
            <img src={Kuva6e5}></img>
            <p><b>Klo 21.47</b></p>

            <h3>6. Komento "netsee"</h3>
            <p>Löysin netistä sivun jossa voi nähdä kaikenlaisia ip osoitteisiin liittyvää tietoa: <a href="https://opensource.com/article/18/5/how-find-ip-address-linux">https://opensource.com/article/18/5/how-find-ip-address-linux</a></p>
            <p>Kyseiseltä sivulta löytämäni komento <b>curl api.ipify.org</b> tulostaa koneen julkisen ip osoitteen</p>
            <p className='code'>
                ossian@koekone:/home$ curl api.ipify.org<br />
                88.112.135.9
            </p>
            <p>Komento <b>nmcli</b> taas antaa yksityisen LAN verkon reititystaulun (tai ainakin luulen niin, en ole varma että mikä on reititystaulu). </p>
            <img src={Kuva6e6}></img>
            <p>Aion yhdistsää komennot curl api.ipify.org ja nmcli komentoon netsee.</p>
            <p>Loin tiedoston netsee ossianin työpöydälle ja kirjoitin ensimmäisen yrityksen netsee komennosta</p>
            <p className='code'>
                ossian@koekone:~/Desktop$ nano netsee<br />
                ossian@koekone:~/Desktop$ cat netsee<br />
                echo "Public ip address:"<br />
                echo curl api.ipify.org<br />
                echo nmcli<br />
            </p>
            <p >
                Kokeilin netsee komentoa
            </p>
            <p className='code'>
                ossian@koekone:~/Desktop$ bash netsee<br />
                Public ip address:<br />
                curl api.ipify.org<br />
                nmcli
            </p>
            <p>
                Se ei toiminut odotetulla tavalla. Yritin muutamaa muuta variaatiota ja päädyin lopulta ratkaisuun joka toimi
            </p>
            <p className='code'>
                ossian@koekone:~/Desktop$ cat netsee
                echo "Public ip address:"<br />
                curl api.ipify.org<br />
                echo " "<br />
                echo "Routing table:"<br />
                nmcli
            </p>
            Tämä komento antoi järkevän tulosteen
            <p>
                <img src={Kuva6e7}></img>
                <p>
                    Siirsin netsee tiedoston
                </p>
                <p className='code'>
                    ossian@koekone:~/Desktop$ sudo cp netsee /usr/bin
                </p>
                <p>
                    Kokeilin komentoa, se ei toiminut
                </p>
                <p className='code'>
                    ossian@koekone:~/Desktop$ netsee<br />
                    bash: /usr/bin/netsee: Permission denied
                </p>
                <p>Annoin oikeudet kaikille ajaa sitä ohjelmana</p>
                <p className='code'>
                    ossian@koekone:~/Desktop$ sudo chmod +x /usr/bin/netsee
                </p>
                <p>
                    Kokeilien uudestaan, ja se toimi
                </p>
                <p className='code'>
                    ossian@koekone:~/Desktop$ netsee<br />
                    Public ip address:<br />
                    88.112.135.9<br />
                    Routing table:<br />
                    …

                </p>
                <p>Kirjauduin käyttäjänä ootso ja kokeilin netsee komentoa</p>
                <p className='code'>
                    ossian@koekone:~/Desktop$ su ootso<br />
                    Password:<br />
                    ootso@koekone:/home/ossian/Desktop$ netsee<br />
                    Public ip address:<br />
                    88.112.135.9<br />
                    Routing table:<br />
                    ...
                </p>
                <p>
                    Kokeilin ajaa komentoa toisesta hakemistosta
                </p>
                <p className='code'>
                    ootso@koekone:/home/ossian/Desktop$ cd<br />
                    ootso@koekone:~$ netsee<br />
                    Public ip address:<br />
                    88.112.135.9<br />
                    Routing table:<br />
                    …
                </p>
                <p><b>Klo 22.35 ja lopetin työt tältä päivältä.</b></p>
            </p>
            <h3>7. Asiakkaiden tiedot näkyviin etusivulle</h3>
            <p><b>Pvm: 13.03.2022<br />
                Klo:10.44</b></p>
            <p>Tämä tehtävä vaikutti vaikealta, koska en alkuunkaan tiennyt miten kurssilla opituilla tiedoilla tekisin kotisivu joka näyttää tietokannasta noudetun tiedon. </p>
            <p>Pilkoin tehtävän mielessäni osiin</p><br />
            <ol type="I">
                <li>Käy läpi vanhan harjoituksen <a href="https://terokarvinen.com/2017/first-steps-on-a-new-virtual-private-server-an-example-on-digitalocean/?fromSearch=first%20steps">missä Djangolla luotiin tietokanta</a>. </li>
                <li>Tee sovellus Django sovellus jossa server on Apache Leili Oy:n asiakkaille seuraten toisen vanhan tehtävän ohjeita: <a href="https://terokarvinen.com/2018/name-based-virtual-hosts-on-apache-multiple-websites-to-single-ip-address/?fromSearch=name%20based%20virtual"></a>.</li>
                <li>Etsi netistä tietoa miten saada kotisivu osoitteeseen localhost ja asiakastiedot sinne.</li>
            </ol>

            <h4>7.I Vanhan tehtävän kertaaminen</h4>
            <p>Installoin virtuaaliympäristön</p>
            <p className='code'>ossian@koekone:~$ sudo apt-get -y install virtualenv</p>
            <p>Kehitin uuden virtuaaliympäristön</p>
            <p className='code'>virtualenv --system-site-packages -p python3 env/</p>
            <p>Aktivoin virtuaaliympäristön</p>
            <p className='code'>
                ossian@koekone:~$ source env/bin/activate
            </p>
            <p>Tein tarkistuksen että pip ajetaan virtuaaliympäristössä</p>
            <p className='code'>
                (env) ossian@koekone:~$ which pip<br />
                /home/ossian/env/bin/pip
            </p>
            <p>
                Installoin micron
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ sudo apt-get install micro
            </p>
            <p>
                Tein requirements tiedoston
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ cat requirements.txt <br />
                django
            </p>
            <p>Pip django asetus</p>
            <p className='code'>
                (env) ossian@koekone:~$ pip install -r requirements.txt
            </p>
            <p>
                Tarkistin djangoversion
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ django-admin --version<br />
                4.0.3
            </p>
            <p>
                Loin projektin teroco
            </p>
            <p className='code'>
                django-admin startproject teroco
            </p>
            <p>
                Käynnistin projektin
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ cd teroco<br />
                (env) ossian@koekone:~/teroco$ ./manage.py runserver<br />
                Watching for file changes with StatReloader<br />
                Performing system checks...<br />
                <br />
                System check identified no issues (0 silenced).<br />
                You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.<br />
                Run 'python manage.py migrate' to apply them.<br />
                March 13, 2022 - 08:56:07<br />
                Django version 4.0.3, using settings 'teroco.settings'<br />
                Starting development server at http://127.0.0.1:8000/<br />
                Quit the server with CONTROL-C.<br />
            </p>
            <p>
                Tarkistin selaimella navigoimalla osoitteeseen  http://127.0.0.1:8000/ että projekti on käynnissä
            </p>
            <img src={Kuva6e9}></img>
            <p>Sammutin serverin Ctrl+C komennolla</p>
            <p>
                Päivitin tietokannat
            </p>
            <p className='code'>
                ossian@koekone:~/teroco$ ./manage.py makemigrations<br />
                No changes detected<br />
                (env) ossian@koekone:~/teroco$ ./manage.py migrate<br />
                Operations to perform:<br />
                Apply all migrations: admin, auth, contenttypes, sessions<br />
                Running migrations:<br />
                Applying contenttypes.0001_initial... OK<br />
                Applying auth.0001_initial... OK<br />
                Applying admin.0001_initial... OK<br />
                ….<br />
            </p>
            <p>
                Loin admin käyttäjän ossian
            </p>
            <p className='code'>
                (env) ossian@koekone:~/teroco$ ./manage.py createsuperuser<br />
                Username (leave blank to use 'ossian'):<br />
                Email address:<br />
                Password:<br />
                Password (again):<br />
                Superuser created successfully.<br />
                (env) ossian@koekone:~/teroco$<br />
            </p>
            <p>
                Käynnistin serverin
            </p>
            <p className='code'>
                (env) ossian@koekone:~/teroco$ ./manage.py runserver
            </p>
            <p>
                Menin selaimella osoitteeseen http://127.0.0.1:8000/admin/
            </p>
            <img src={Kuva6e10}></img>
            <p>Djangon admin sivuilla näkyi mm Users tietokanta</p>
            <img src={Kuva6e11}></img>
            <p>
                Suljin serverin komennolla Ctrl+C
            </p>
            <p>
                Aloin luomaan asiakastietokantaa (vain harjoitteluksi vielä)
            </p>
            <p className='code'>
                ossian@koekone:~/teroco$ ./manage.py startapp crm
            </p>
            <p>
                Lisäsin crm:n INSTALLED_APPS listaan
            </p>
            <p className='code'>
                INSTALLED_APPS = [<br />
                'django.contrib.admin',<br />
                'django.contrib.auth',<br />
                'django.contrib.contenttypes',<br />
                'django.contrib.sessions',<br />
                'django.contrib.messages',<br />
                'django.contrib.staticfiles',<br />
                'crm', #add<br />
                ]<br />
            </p>
            <p>
                Loin asiakastietokannan
            </p>
            <p className='code'>
                (env) ossian@koekone:~/teroco$ micro crm/models.py
            </p>
            <p>
                Lisäsin models:iin seuraavan tekstin
            </p>
            <p className='code'>
                from django.db import models<br />
                <br />
                class Customer(models.Model):<br />
                name = models.CharField(max_length=300)<br />
                <br />
            </p>
            <p>
                Tein tietokantamigraatiot
            </p>
            <p className='code'>
                (env) ossian@koekone:~/teroco$ ./manage.py makemigrations<br />
                Migrations for 'crm':<br />
                crm/migrations/0001_initial.py<br />
            </p>
            <p className='code'>
                (env) ossian@koekone:~/teroco$ ./manage.py migrate<br />
                Operations to perform:<br />
                Apply all migrations: admin, auth, contenttypes, crm, sessions<br />
                Running migrations:<br />
                Applying crm.0001_initial... OK<br />
                (env) ossian@koekone:~/teroco$ ./manage.py migrate<br />
                Operations to perform:<br />
                Apply all migrations: admin, auth, contenttypes, crm, sessions<br />
                Running migrations:<br />
                No migrations to apply.
            </p>
            <p>Rekisteröin tietokannan</p>
            <p className='code'>
                (env) ossian@koekone:~/teroco$ micro crm/admin.py<br />
                <br />
                from django.contrib import admin<br />
                <br />
                # Register your models here.<br />
                from . import models<br />
                <br />
                admin.site.register(models.Customer)
            </p>
            <p>
                Käynnistin serverin
            </p>
            <p className='code'>
                (env) ossian@koekone:~/teroco$ ./manage.py runserver
            </p>
            <p>
                Kirjauduin selaimella osoitteeseen http://127.0.0.1:8000/admin/ .
            </p>
            <p>
                Siellä näkyi nyt Customers tietokanta
            </p>
            <img src={Kuva6e12}></img>
            <p>Lisäsin yhden asiakkaan</p>
            <img src={Kuva6e13}></img>
            <p>Tein muutoksen tietokantaan niin että nimet näkyisivät selaimella Django administrationissa</p>
            <p className='code'>
                (env) ossian@koekone:~/teroco$ micro crm/models.py<br />
                <br />
                from django.db import models<br />
                <br />
                # Create your models here.<br />
                from django.db import models<br />
                <br />
                class Customer(models.Model):<br />
                name = models.CharField(max_length=300)<br />
                def __str__(self):        # new<br />
                return self.name    # new<br />
            </p>
            <p>
                Kirjauduin uudestaan admin sivuille ja nyt näkyi nimi
            </p>
            <img src={Kuva6e14}></img>
            <p><b>Klo 11.31</b></p>
            <h3><h4>7.II Django production install - ensimmäinen yritys</h4></h3>
            <p>Seurasin <a href="https://terokarvinen.com/2022/deploy-django/">tämän kurssitehtävän ohjeita</a> </p>
            <p>
                Aluksi tein Apachen asennuksen
            </p>
            <p className='code'>
                ossian@koekone:~$ sudo apt-get -y install apache2
            </p>
            <p>
                Käynnistin apachen

            </p>
            <p className='code'>
                ossian@koekone:~$ sudo systemctl start apache2            </p>
            <p>
                Kirjoitin localhost selaimen osoitekenttään ja sain apachen aloitussivun
            </p>
            <img src={Kuva6e15}></img>
            <p>Muunsin aloitussivun</p>
            <p className='code'>
                ossian@koekone:~$  echo "See you at Leili Oy"|sudo tee /var/www/html/index.html
            </p>
            <img src={Kuva6e16}></img>
            <p>Loin virtualenvironmentin (vähän vahingossa, ei ollut tarkoitus tehdä se jo tässä vaiheessa)</p>
            <p className='code'>
                ossian@koekone:~$ virtualenv --system-site-packages -p python3 env/
            </p>
            <p>
                Aktivoin virtualenvyn
            </p>
            <p>
                Loin kansion
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ mkdir -p publicwsgi/ossian/static/
            </p>
            <p>
                Ja staattisen sivun
            </p>
            <p className='code'>
                (env) ossian@koekone:~$  echo "Statically see you at leili."|tee publicwsgi/ossian/static/index.html<br />
                Statically see you at leili.
            </p>
            <p>
                Apache asetuksia
            </p>
            <p className='code'>
                (env) ossian@koekone:~$  sudoedit /etc/apache2/sites-available/ossian.conf<br />
                <br />
                &#60;VirtualHost *:80&#62;
                Alias /static/ /home/ossian/publicwsgi/ossian/static/<br />
                &#60;Directory /home/ossian/publicwsgi/ossian/static/&#62;<br />
                Require all granted<br />
                &#60;/Directory&#62;<br />
                &#60;/VirtualHost&#62;<br />

            </p >
            <p>
                Enabling site ossian
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ sudo a2ensite ossian.conf<br />
                Enabling site ossian.<br />
                To activate the new configuration, you need to run:<br />
                systemctl reload apache2
            </p>
            <p>
                Disabling some site
            </p>
            <p className='code'>
                $ sudo a2dissite 000-default.conf
            </p>
            <p>
                Testi

            </p>
            <p className='code'>
                (env) ossian@koekone:~$ /sbin/apache2ctl configtest<br />
                AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 127.0.1.1. Set the 'ServerName' directive globally to suppress this message<br />
                Syntax OK
            </p>
            <p>
                Apachen uudelleenkäynnistäminen
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ sudo systemctl restart apache2
            </p>
            <p>
                Tarkastellaan staattista sivua
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ curl http://localhost/static/<br />
                Statically see you at leili.
            </p>
            <p>
                Uuden virtuaaliympäristön luonti
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ sudo apt-get -y install virtualenv
            </p>
            <p>
                Siirtyminen asetuksiin
            </p>
            <p className='code'>
                (env) ossian@koekone:~$ cd publicwsgi/
            </p>
            <p>
                Pythonin asennus
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ virtualenv -p python3 --system-site-packages env
            </p>
            <p>
                Virtuaaliympäristön asetus? En ole varma miksi tein seuraavan komennon
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ source env/bin/activate
            </p>
            <p>
                Tarkistin että pip on virtuaaliympäristössä
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ which pip<br />
                /home/ossian/publicwsgi/env/bin/pip
            </p>
            <p>
                Recuirements tiedosto
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ micro requirements.txt<br />
                (env) ossian@koekone:~/publicwsgi$ cat requirements.txt<br />
                django
            </p>
            <p>
                Pip install requirementstiedosto
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ pip install -r requirements.txt
            </p>
            <p>
                Django versio
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ django-admin --version<br />
                4.0.3
            </p>
            <p>Luodaan projekti</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ django-admin startproject leili
            </p>
            <p>
                Projektin asetusten luonti
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ sudoedit /etc/apache2/sites-available/leili.conf
            </p>
            <p>
                Alla on config tiedosto joka löytyi Karvisen ohjeista, täällä kansionimet muutettuna.
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ sudoedit /etc/apache2/sites-available/leili.conf <br />
                Define TDIR /home/ossian/publicwsgi/leili<br />
                Define TWSGI /home/ossian/publicwsgi/leili/leili/wsgi.py<br />
                Define TUSER ossian<br />
                Define TVENV /home/ossian/publicwsgi/env/lib/python3.9/site-packages<br />
                <br />
                &#60;VirtualHost *:80&#62;<br />
                Alias /static/ $&#123;TDIR&#125;/static/<br />
                &#60;Directory $&#123;TDIR&#125; /static/&#62;<br />
                Require all granted<br />
                &#60;/Directory&#62;<br />
                <br />
                WSGIDaemonProcess $&#123;TUSER&#125; user=$&#123;TUSER&#125; group=$&#123;TUSER&#125; threads=5 python-path="$&#123;TDIR&#125;:$&#123;TVENV&#125;"<br />
                WSGIScriptAlias / $&#123;TWSGI&#125;<br />
                &#60;Directory $&#123;TDIR&#125;&#62;<br />
                WSGIProcessGroup $&#123;TUSER&#125;<br />
                WSGIApplicationGroup %&#123;GLOBAL&#125;<br />
                WSGIScriptReloading On<br />
                &#60;Files wsgi.py&#62;<br />
                Require all granted<br />
                &#60;/Files&#62;<br />
                &#60;/Directory&#62;<br />
                <br />
                &#60;/VirtualHost &#62;<br />
                <br />
                Undefine TDIR<br />
                Undefine TWSGI<br />
                Undefine TUSER<br />
                Undefine TVENV<br />
            </p >
            <p>
                Apache django modulin asennus
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ sudo apt-get -y install libapache2-mod-wsgi-py3
            </p>
            <p>
                Apachen uudelleenkäynnistäminen
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ sudo systemctl restart apache2
            </p>
            <p>
                Kokeilin komentoa jonka olisi pitänyt näyttää Djangon etusivun tietoa, mutta ei tullut tulostetta
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ curl -s localhost|grep title
            </p>
            <p>
                Jotain oli mennyt väärin
            </p>
            <p>
                Näköjään Apache oli kuitenkin käynnissä
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi$ curl -sI localhost|grep Server<br />
                Server: Apache/2.4.52 (Debian)
            </p>
            <p>
                AArgh, en tiedä mitä meni väärin. Pohdin että pitäisikö labran aloittaa alusta! Minun pitäisi nähdä Djangon etusivun, mutta localhost osoitteessa näkyy vain See you at Leili Oy.
            </p>
            <p>
                Yritin tässä välissä muutamia juttuja. Loin uuden virtuaaliympäristön env2 (ja env3) tein uuden projektin leili2 samoilla askelilla. Tulos edelleen sama.
            </p>
            <p>
                Sain idean navigoida kansioon  /etc/apache2/sites-available ja katselin sisältöä
            </p>
            <p className='code'>
                ossian@koekone:/etc/apache2/sites-available$ ls<br />
                000-default.conf  default-ssl.conf  leili2.conf  leili.conf  ossian.conf
            </p>
            <p>
                Olin mahdollisestin unohtanut activoida leili.conf ja deactivoida 000-default
            </p>
            <p className='code'>
                ossian@koekone:/etc/apache2/sites-available$ sudo a2ensite leili.conf<br />
                [sudo] password for ossian:<br />
                Enabling site leili.<br />
                To activate the new configuration, you need to run:<br />
                systemctl reload apache2<br />
                ossian@koekone:/etc/apache2/sites-available$ sudo a2dissite 000-default.conf<br />
                Site 000-default already disabled<br />
                <br />
                ossian@koekone:/etc/apache2/sites-available$ systemctl reload apache2</p>
            <p>
                Nyt näkyi Djangon etusivu selaimessa!
            </p>
            <img src={Kuva6e17}></img>
            <p>
                Halusin tehdä migraation, mutta se ei onnistunut.
            </p>
            <p className='code'>
                ossian@koekone:~/publicwsgi/leili$ ./manage.py makemigrations<br />
                /usr/bin/env: ‘python’: No such file or directory
            </p>
            <p>
                Syy oli, että en ollut kirjautunut virtualenvyssa, olin luultavasti sulkenut ja avannaut komentotulkin.
            </p>
            <p className='code'>
                ossian@koekone:~/publicwsgi$ source env/bin/activate
            </p>
            <p>Nyt toimi migraatio</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili$ ./manage.py makemigrations<br />
                No changes detected
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili$ ./manage.py migrate<br />
                Operations to perform:<br />
                Apply all migrations: admin, auth, contenttypes, sessions<br />
                Running migrations:<br />
                Applying contenttypes.0001_initial... OK<br />
                Applying auth.0001_initial... OK<br />
                …<br />
            </p>
            <p>Uudelleenkäynnistin Apachen</p>
            <p>
                (env) ossian@koekone:~/publicwsgi/leili$ ./manage.py createsuperuser
            </p>
            <p>
                Loin Django adminin ossian

            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili$ sudo systemctl restart apache2<br />
                (env) ossian@koekone:~/publicwsgi/leili$ ./manage.py createsuperuser<br />
                Username (leave blank to use 'ossian'):<br />
                Email address:<br />
                Password:<br />
                Password (again):<br />
                Superuser created successfully.<br />
                (env) ossian@koekone:~/publicwsgi/leili$<br />
            </p>
            <p>
                Kirjautuminen onnistui!
            </p>
            <img src={Kuva6e18}></img>
            <p className='code'>
            </p>
            <p><b>Klo 14.00 tauko <br />
                Klo 14.34
            </b></p>
            <p>Djangon admin sivulle voi kirjautua, mutta debuggaus on päällä ja css ei ole aktivoitu joten se näyttää rumalta</p>
            <p>Avasin leiliprojektin settings.py tiedoston microlla ja lisäsin import os osan alla</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili/leili$ micro settings.py<br />
                from pathlib import Path<br />
                <br />
                # Build paths inside the project like this: BASE_DIR / 'subdir'.<br />
                BASE_DIR = Path(__file__).resolve().parent.parent<br />
                <br />
                import os<br />
                STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
            </p>
            <p>Staattisten osien lataaminen (aktivoi css:n)</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili$ ./manage.py collectstatic <br />
                128 static files copied to '/home/ossian/publicwsgi/leili/static'.
            </p>
            <p>
                Nyt login ja admin osat näyttävät paremmalta
            </p>
            <img src={Kuva6e19}></img>
            <p>Poistin debuggauksen muokkaamalla settings.py:n riviä</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili/leili$ micro settings.py<br />
                DEBUG = False
            </p>
            <p>Loin asiakastietokannan</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili$ ./manage.py startapp asiakkaat
                (env) ossian@koekone:~/publicwsgi/leili$ micro leili/settings.py<br />
                <br />
                INSTALLED_APPS = [<br />
                'django.contrib.admin',<br />
                'django.contrib.auth',<br />
                'django.contrib.contenttypes',<br />
                'django.contrib.sessions',<br />
                'django.contrib.messages',<br />
                'django.contrib.staticfiles',<br />
                'asiakkaat',<br />
                ]


            </p>
            <p>Loin tietokantaobjektin "Asiakas"</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili/asiakkaat$ micro models.py<br />
                (env) ossian@koekone:~/publicwsgi/leili/asiakkaat$ cat models.py<br />
                from django.db import models<br />
                <br />
                class Customer(models.Model):<br />
                nimi = models.CharField(max_length=300)<br />
                liikevaihto = models.IntegerField(default=0)<br />
                tyontekijoita = models.IntegerField(default=0)
            </p>
            <p>Tein migraatiot</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili$ ./manage.py makemigrations<br />
                Migrations for 'asiakkaat':<br />
                asiakkaat/migrations/0001_initial.py<br />
                - Create model Customer<br />
                (env) ossian@koekone:~/publicwsgi/leili$ ./manage.py migrate<br />
                Operations to perform:<br />
                Apply all migrations: admin, asiakkaat, auth, contenttypes, sessions<br />
                Running migrations:<br />
                Applying asiakkaat.0001_initial... OK
            </p>
            <p>Käynnistin apachen uudelleen</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili$ sudo systemctl restart apache2
            </p>
            <p>
                Olin rikkonut jotain, koska sivu ei latautunut
            </p>
            <img src={Kuva6e20}></img>
            <p><b>Klo 15.08</b></p>
            <p>Yritin katsoa virhelokia</p>
            <p className='code'>
                (env) ossian@koekone:/var/log/apache2$ cat error.log
            </p>
            <p>
                Sieltä ei löytynyt mitään mikä olisi auttanut. Sinne ei esimerkiksi ilmennyt uusia merkintöjä kun päivitin toimimatonta sivua.
            </p>
            <p>
                Jatkoin bugin etsimistä. Poistin asiakkaat leilin settings.py tiedostosta
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili/leili$ micro settings.py<br />
                <br />
                INSTALLED_APPS = [<br />
                'django.contrib.admin',<br />
                'django.contrib.auth',<br />
                'django.contrib.contenttypes',<br />
                'django.contrib.sessions',<br />
                'django.contrib.messages',<br />
                'django.contrib.staticfiles',<br />
                # 'asiakkaat',<br />
                ]
            </p>
            <p>
                Tein migraatiot uudelleen ja uudelleenkäynnistin apachen, mutta silti sama ongelma!
            </p>
            <p>
                Poistin asiakkaat kansion, mutta ongelma jatkui
            </p>
            <h3><h4>7.II Django ja Apache production install - toinen yritys toisella Django applikaatiolla leili2</h4></h3>
            <p>Oletin että olin lopullisesti tuhonnut leili applikaation. Mutta olin luonut leili2 projektin. Siirryin käyttämään sitä </p>
            <p>Poistin leili-projektin ja aktivoin leili2 projektin Apachen sivuasetuksissa</p>
            <p className='code'>
                (env) ossian@koekone:/etc/apache2/sites-available$ sudo a2dissite leili.conf <br />
                (env) ossian@koekone:/etc/apache2/sites-available$ sudo a2ensite leili2.conf<br />
                (env) ossian@koekone:/etc/apache2/sites-available$ sudo systemctl reload apache2<br />
            </p>
            <p>
                Kokeilin selaimella ja Djangon etusivu näkyi osoitteessa localhost.
            </p>
            <p>Toistin pitkälti samoja askelia leili2 applikaatiolla kuin mitä olin jo kerran tehnyt leili applikaatiota tehdessä:</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2$ ./manage.py makemigrations<br />
                (env) ossian@koekone:~/publicwsgi/leili2$ ./manage.py migrate<br />
                (env) ossian@koekone:~/publicwsgi/leili2$ ./manage.py createsuperuser <br />
                (env) ossian@koekone:~/publicwsgi/leili2$ sudo systemctl reload apache2
            </p>
            <p>
                Tarkistin että pystyin kirjautumaan sivulle localhost/admin. Se onnistui!
            </p>
            <p>
                Jatkoin samoilla askelilla kuin leili applikaatiota tehdessä.
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2/leili2$ micro settings.py  <br />
                import os <br />
                STATIC_ROOT = os.path.join(BASE_DIR, 'static/') <br />
                (env) ossian@koekone:~/publicwsgi/leili2/leili2$ sudo systemctl reload apache2 <br />
                (env) ossian@koekone:~/publicwsgi/leili2$ ./manage.py collectstatic
            </p>

            <p>Kokeilin localhost ja localhost/admin sivua. Ne toimi, ja niillä toimi nyt css</p>
            <p>
                Jatkoin taas samoilla askelilla kuin leili applikaatiota tehdessä. Loin asiakkaat apin.
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2$ ./manage.py startapp asiakkaat<br />
                (env) ossian@koekone:~/publicwsgi/leili2$  micro leili2/settings.py<br />
                <br />
                INSTALLED_APPS = [<br />
                'django.contrib.admin',<br />
                'django.contrib.auth',<br />
                'django.contrib.contenttypes',<br />
                'django.contrib.sessions',<br />
                'django.contrib.messages',<br />
                'django.contrib.staticfiles',<br />
                'asiakkaat',<br />
                ]<br />

            </p>
            <p>
                Tein yksinkertaisen mallin missä oli <cite>pelkkä</cite> asiakasnimi.
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2$ micro asiakkaat/models.py<br />
                from django.db import models<br />
                <br />
                class Asiakas(models.Model):<br />
                name = models.CharField(max_length=300)<br />
                <br />
                <br />
                (env) ossian@koekone:~/publicwsgi/leili2$ micro asiakkaat/admin.py<br />
                from django.contrib import admin<br />
                from . import models<br />
                admin.site.register(models.Asiakas)
            </p>
            <p>Nyt löysin todennäköisesti sen virheen minkä olin tehnyt alkuperäistä leili:ä tehdessä! Olin unohtanut vaihtaa luokan nimen kun olin kopioinut pohjan Karvisen ohjeista</p>
            <p>Tein migraatiot</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2$ ./manage.py makemigrations<br />
                Migrations for 'asiakkaat':<br />
                asiakkaat/migrations/0001_initial.py<br />
                - Create model Asiakas<br />
                (env) ossian@koekone:~/publicwsgi/leili2$ ./manage.py migrate<br />
                Operations to perform:<br />
                Apply all migrations: admin, asiakkaat, auth, contenttypes, sessions<br />
                Running migrations:<br />
                Applying asiakkaat.0001_initial... OK<br />
                (env) ossian@koekone:~/publicwsgi/leili2$<br />
                s<br />
            </p>

            <p>Kirjauduin admin Django sivulle, näyttää hyvältä</p>
            <img src={Kuva6e21} />

            <p>Kehitin tietokannan Asiakas objektia luomalla kahta uutta kenttää (liikevaihto ja tyontekijoita)</p>
            <p className='code'>
                from django.db import models<br />
                <br />
                (env) ossian@koekone:~/publicwsgi/leili2$ micro asiakkaat/models.py<br />
                class Asiakas(models.Model):<br />
                name = models.CharField(max_length=300)<br />
                liikevaihto = models.IntegerField(default=0)<br />
                tyontekijoita = models.IntegerField(default=0)
            </p>
            <p>
                Tein migraatiot
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2$ ./manage.py makemigrations<br />
                (env) ossian@koekone:~/publicwsgi/leili2$ ./manage.py migrate<br />
                (env) ossian@koekone:~/publicwsgi/leili2$ sudo systemctl restart apache2
            </p>
            <p>
                Kaikki näytti toimivan
            </p>
            <img src={Kuva6e22} />
            <p>Pystyin lisäämään asiakkaita, lisäsin kolme.</p>
            <img src={Kuva6e23} />

            <h3><h4>7.III Etusivu osoitteeseen localhost ja asiakastiedot näkyviin etusivulle</h4></h3>

            <p>
                Nyt olin jo päässyt niin pitkälle kuin oli itselleni olisi periaatteessa ollut mahdollista päästä pelkästään kurssilla opetetuilla tiedoilla. Lähdin etsimään tietoa netistä.
            </p>
            <p>Löysin lupaavalta vaikuttavat ohjeet sivulta: <a href="https://djangoforbeginners.com/hello-world/">https://djangoforbeginners.com/hello-world/</a></p>
            <br />
            <b>HUOM: jatkossa tein niin monta yritystä ja erehdystä, että ihan kaikkea en ole voinut merkitä yksityiskohtaisesti. Tämä on valitettavaa, mutta ajanpuutteen vuoksi en voinut tämän raportin paisua liian suureksi.</b>
            <br />
            <p>Yritin djangoforbeginners.com sivun ohjeiden mukaan. Alla on näkyy miten olin lisännyt/muokannut tiedostoja.</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2/asiakkaat$ cat urls.py<br />
                from django.urls import path<br />
                from .views import homePageView<br />
                <br />
                urlpatterns = [<br />
                path("", homePageView, name="home"),<br />
                ]</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2/asiakkaat$ cat views.py<br />
                #from django.shortcuts import render<br />
                from django.http import HttpResponse<br />
                # Create your views here.<br />
                <br />
                <br />
                def homePageView(request):<br />
                return HttpResponse("Hello, World!")<br />
                <br />
                <br />
            </p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2/leili2$ cat urls.py<br />
                """leili2 URL Configuration<br />
                <br />
                The `urlpatterns` list routes URLs to views. For more information please see:<br />
                https://docs.djangoproject.com/en/4.0/topics/http/urls/<br />
                Examples:<br />
                Function views<br />
                1. Add an import:  from my_app import views<br />
                2. Add a URL to urlpatterns:  path('', views.home, name='home')<br />
                Class-based views<br />
                1. Add an import:  from other_app.views import Home<br />
                2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')<br />
                Including another URLconf<br />
                1. Import the include() function: from django.urls import include, path<br />
                2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))<br />
                """<br />
                from django.contrib import admin<br />
                from django.urls import path, include<br />
                <br />
                urlpatterns = [<br />
                path('admin/', admin.site.urls),<br />
                path("", include("asiakkaat.urls")),<br />
                ]<br />
            </p>
            <p>
                En muista tarkkaan, että toimiko yllä oleva koodi kunnolla. Yhdessä vaiheessa minulla näkyi "Hello World" osoitteessa localhost. En kuitenkaan keksinyt miten saada asiakastiedot näkyviin tällä metodilla.
            </p>
            <p><b>Klo 17.11 ja tauko <br /><br />
                Klo 20.01 jatkan
            </b></p><br />
            <h4>MS Code ja Youtube tutoriaali apuun</h4>
            <p>
                Django applikaatiossa oli monta tiedostoa mitä piti muokata ja minulle alkoi tulla vaikeuksia hallita kaikkea komentoriviltä. Päätin asentaa MS coden avuksi:
            </p>
            <p className='code'>
                sudo apt update,<br />
                sudo apt install gnupg2 software-properties-common apt-transport-https curl,<br />
                curl -sSL https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -,<br />
                sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main",<br />
                sudo apt update,<br />
                sudo apt install code
            </p>

            <p>Seurasin seuraavaksi youtube tutoriaalisarja <a href="https://www.youtube.com/watch?v=HHx3tTQWUx0&list=PLCC34OHNcOtqW9BJmgQPPzUpJ8hl49AGy">Before You Install Django...Watch This! Django Wednesdays</a> ja käytin Codea apuna. Käytin tästä sarjasta videot 1 ja 5.</p>
            <img src={Kuva6e24} />
            <p>Tein paljon muutoksia ja kokeiluja ja lopulta sain localhost sivun näyttämään toivotun listan asiakkaista. Näytetään ensin projektin struktuuri.</p>
            <img src={Kuva6e25} />
            <p>Seuraavaksi tiedostojen sisältö:</p>
            <p>Alla on views.py joka on kansiossa asiakas. Sinne mm importataan asiakastietokannan sisältö ja lähetetään html sivulle.</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2/asiakkaat$ cat views.py<br />
                from django.shortcuts import render<br />
                from django.http import HttpResponse<br />
                from .models import Asiakas<br />
                # Create your views here.<br />
                def home(request):<br />
                asiakas_lista =Asiakas.objects.all()<br />
                return render(request, 'home.html',<br />
                &#123;'asiakas_lista':asiakas_lista&#125;)<br />
            </p>
            <p>urls.py (asiakkaat kansiossa)</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2/asiakkaat$ cat urls.py<br />
                from django.urls import path<br />
                from asiakkaat import views<br />
                <br />
                urlpatterns = [<br />
                path('',views.home, name="home"),<br />
                ]
            </p>
            <p>Alla html sivu joka näyttää asiakkaiden tiedot. Siinä otetaan haltuun ja näytetään views.py lähettämän asiakaslistan.</p>
            <p className='code'>
                (env) ossian@koekone:~/publicwsgi/leili2/asiakkaat/templates$ cat home.html<br />
                &#60;!DOCTYPE html&#62;<br />
                &#60;html lang="en"&#62;<br />
                &#60;head&#62;<br />
                &#60;meta charset="UTF-8"&#62;<br />
                &#60;meta http-equiv="X-UA-Compatible" content="IE=edge"&#62;<br />
                &#60;meta name="viewport" content="width=device-width, initial-scale=1.0"&#62;<br />
                &#60;title&#62;Asiakkaat&#60;/title&#62;<br />
                &#60;/head&#62;<br />
                &#60;style&#62;<br />
                table, th, td &#123;<br />
                border: 1px solid black;<br />
                border-collapse: collapse;<br />
                &#125;<br />
                &#60;/style&#62;<br />
                &#60;body&#62;<br />
                <br />
                &#60;h1&#62;Leilin Asiakkaat&#60;/h1&#62;<br />
                <br />
                &#60;table&#62;<br />
                &#60;thead&#62;<br />
                &#60;tr&#62;<br />
                &#60;th&#62;Yhtiö&#60;/th&#62;<br />
                &#60;th&#62;Liikevaihto&#60;/th&#62;<br />
                &#60;th&#62;Työntekijöitä&#60;/th&#62;<br />
                &#60;/tr&#62;<br />
                &#60;/thead&#62;<br />
                &#60;tbody&#62;<br />
                &#123;% for asiakas in asiakas_lista%&#125;<br />
                &#60;tr&#62;<br />
                &#60;td&#62;&#123;&#123; asiakas.name &#125;&#125;&#60;/td&#62;<br />
                &#60;td&#62;&#123;&#123; asiakas.liikevaihto &#125;&#125;&#60;/td&#62;<br />
                &#60;td&#62;&#123;&#123; asiakas.tyontekijoita &#125;&#125;&#60;/td&#62;<br />
                &#60;/tr&#62;<br />
                &#123;% endfor %&#125;<br />
                &#60;/tbody&#62;<br />
                &#60;/table&#62;<br />
                <br />
                <br />
                <br />
                &#60;/body&#62;<br />
                &#60;/html&#62;<br />

            </p>
            <p>Lopulta kuva etusivusta</p>

            <img src={Kuva6e26} />
            <h3>8. Kuormitustestaus</h3>
            <p>Löysin sivulta <a href="https://www.petefreitag.com/item/689.cfm">https://www.petefreitag.com/item/689.cfm </a>komennon <b>ab -n [requestien määrä] -c [maksimi yhtäaikainen request määrä] [verkkosivun osoite]</b></p>
            <p>Kokeilin sivua 1000:lla haulla, maksimissaan 100 yhtäaikaista requestia</p>
            <p className='code'>
                (env) ossian@koekone:~$ ab -n 1000 -c 100 http://127.0.0.1/<br />
                This is ApacheBench, Version 2.3 &#60;&#36;Revision: 1879490 $&#62;<br />
                Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/<br />
                Licensed to The Apache Software Foundation, http://www.apache.org/<br />
                <br />
                Benchmarking 127.0.0.1 (be patient)<br />
                Completed 100 requests<br />
                Completed 200 requests<br />
                Completed 300 requests<br />
                Completed 400 requests<br />
                Completed 500 requests<br />
                Completed 600 requests<br />
                Completed 700 requests<br />
                Completed 800 requests<br />
                Completed 900 requests<br />
                Completed 1000 requests<br />
                Finished 1000 requests<br />
                <br />
                <br />
                Server Software:        Apache/2.4.52<br />
                Server Hostname:        127.0.0.1<br />
                Server Port:            80<br />
                <br />
                Document Path:          /<br />
                Document Length:        964 bytes<br />
                <br />
                Concurrency Level:      100<br />
                Time taken for tests:   1.620 seconds<br />
                Complete requests:      1000<br />
                Failed requests:        0<br />
                Total transferred:      1282000 bytes<br />
                HTML transferred:       964000 bytes<br />
                Requests per second:    617.16 [#/sec] (mean)<br />
                Time per request:       162.032 [ms] (mean)<br />
                Time per request:       1.620 [ms] (mean, across all concurrent requests)<br />
                Transfer rate:          772.66 [Kbytes/sec] received<br />
                <br />
                Connection Times (ms)<br />
                min  mean[+/-sd] median   max<br />
                Connect:        0    3   8.4      0      34<br />
                Processing:     4  152  31.0    160     180<br />
                Waiting:        0  146  31.0    154     180<br />
                Total:          4  155  25.1    160     180<br />
                <br />
                Percentage of the requests served within a certain time (ms)<br />
                50%    160<br />
                66%    162<br />
                75%    164<br />
                80%    165<br />
                90%    169<br />
                95%    172<br />
                98%    174<br />
                99%    175<br />
                100%    180 (longest request)

            </p>
            <p>
                Näytti siltä että sivu kesti kuorman melko hyvin, ainakin yhtään failed request ei tullut.
            </p>
            <p><b>Klo 21.35</b></p>

            <h3>Lähteet</h3>
            <cite>Buzdar, Karim. “How to fix: Connection refused by port 22 Debian/Ubuntu.” Linux Hint, https://linuxhint.com/fix_connection_refused_ubuntu/. Accessed 12 March 2022.</cite><br /><br />

            <cite>Elder, John. “Before You Install Django...Watch This! Django Wednesdays.” Youtube.com, Codemy.com, 20 1 2021, https://www.youtube.com/watch?v=HHx3tTQWUx0&list=PLCC34OHNcOtqW9BJmgQPPzUpJ8hl49AGy. Accessed 13 3 2022.</cite><br />
            <cite>Freitag, Pete. “Using Apache Bench for Simple Load Testing.” Pete Freitag, 05 2 2009, https://www.petefreitag.com/item/689.cfm. Accessed 13 March 2022.</cite><br /><br />
            <cite>Kaplarevic, Vladimir. “How to Enable SSH on Debian 9/10 | PhoenixNAP KB.” phoenixNAP, 30 July 2019, https://phoenixnap.com/kb/how-to-enable-ssh-on-debian. Accessed 12 March 2022.</cite><br /><br />
            <cite>Karvinen, Tero. “Deploy Django 4 - Production Install.” Tero Karvinen, 13 February 2022, https://terokarvinen.com/2022/deploy-django/. Accessed 13 March 2022.</cite><br /><br />
            <cite>Karvinen, Tero. “Django 4 Instant Customer Database Tutorial.” Tero Karvinen, 13 February 2022, https://terokarvinen.com/2022/django-instant-crm-tutorial/. Accessed 13 March 2022.</cite><br /><br />
            <cite>Karvinen, Tero. “Final Lab for Linux Server Course 2021 Spring.” 19 March 2021, https://terokarvinen.com/2021/final-lab-for-linux-server-course/. Accessed 12 March 2022.</cite><br /><br />
            <cite>Karvinen, Tero. “First Steps on a New Virtual Private Server – an Example on DigitalOcean and Ubuntu 16.04 LTS.” Tero Karvinen, 19 September 2017, https://terokarvinen.com/2017/first-steps-on-a-new-virtual-private-server-an-example-on-digitalocean/. Accessed 12 March 2022.</cite><br /><br />
            <cite>Modi, Archit. “How to find your IP address in Linux.” Opensource.com, 7 February 2020, https://opensource.com/article/18/5/how-find-ip-address-linux. Accessed 12 March 2022.</cite><br /><br />
            <cite>Vincent, William. “Chapter 2: Hello World app | Django For Beginners.” Django for Beginners, https://djangoforbeginners.com/hello-world/. Accessed 13 March 2022.</cite>


        </div >


    )
}

export default Ratkaisu6e