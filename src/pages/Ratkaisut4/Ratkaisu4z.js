import React from 'react'
import '../Ratkaisut.css';


const Ratkaisu4z = () => {
    return (
        <div className='body'>
            <h1>Tehtävä 4z: Tiivistelmä kahdesta artikkelista</h1>
            <p>Ensimmäinen osio on tiivistelmä artikkelista {" "}
                <a href="https://terokarvinen.com/2017/first-steps-on-a-new-virtual-private-server-an-example-on-digitalocean/?fromSearch=first%20steps"
                >First Steps on a New Virtual Private Server – an Example on DigitalOcean and Ubuntu 16.04 LTS.</a>
            </p>
            <p>Toinen osio on tiivistelmä artikkelista  <a href="https://terokarvinen.com/2018/name-based-virtual-hosts-on-apache-multiple-websites-to-single-ip-address/?fromSearch=name%20based%20virtual">Name Based Virtual Hosts on Apache – Multiple Websites to Single IP Address</a></p>
            <h2>First Steps on a New Virtual Private Server – an Example on DigitalOcean and Ubuntu 16.04 LTS</h2>
            <ul>
                <li>Luo uusi virtuaaliserveri DigitalOceanissa
                    <ul>
                        <li>Luo käyttäjätunnus</li>
                        <li>Valitse Linux distro</li>
                        <li>Anna SSH avain jos sinulla jo on. Muuten käytä salasanaa</li>
                        <li>Tarkista serverin IP osoite</li>
                        <li>Kirjaudu sisään käyttäjänä root</li>
                        <li>Anna hyvä salasana kun pyydetään</li>
                        <li>Tee SSH reikä ensin, ennen palomuuria</li>
                        <ul>
                            <li>sudo ufw allow 22/tcp</li>
                            <li>sudo ufw enable</li>
                        </ul>
                        <li>Luo käyttäjä
                            <ul>
                                <li>sudo adduser tero</li>
                                <li>sudo adduser tero adm</li>
                                <li>sudo adduser tero admin</li>
                            </ul>
                        </li>
                        <li>Kokeile ssh yhteyttä
                            <ul>
                                <li>ssh tero@tero.example.com</li>
                            </ul>
                        </li>
                        <li>Sulje root käyttäjä
                            <ul>
                                <li>sudo usermod --lock root</li>
                            </ul>
                        </li>
                        <li>Poista SSH login
                            <ul>
                                <li>sudoedit /etc/ssh/sshd_config
                                    <ul>
                                        <li>PermitRootLogin no</li>
                                    </ul>
                                </li>
                                <li>sudo service ssh restart</li>
                            </ul>
                        </li>
                        <li>Päivitä softa
                            <ul>
                                <li>sudo apt-get update</li>
                                <li>sudo apt-get upgrade</li>
                            </ul>
                        </li>
                        <li>Aloita käyttö
                            <ul>
                                <li>Tee reikä palomuuriin: sudo ufw allow 80/tcp </li>
                            </ul>
                        </li>
                        <li>Hanki domain-nimi
                            <ul>
                                <li>NameCheap ja Gandi hyviä vaihtoehtoja</li>
                                <li>GitHub Education Packagen omistaja saa ilmaiseksi .me nimen</li>
                                <li>Tarkista NameCheap dokumentaatio: <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/">linkki</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

            <h2>Name Based Virtual Hosts on Apache – Multiple Websites to Single IP Address</h2>

            <ul>
                <li>Teksti koostuu muutamasta muistiinpanosta</li>
                <li>Samalla IP osoitteella voi olla Apachella olla monta nettisaittia
                </li>
                <li>Esitiedot: Komentotulkki ja Apachen alkeet
                </li>
                <li>Asenna apache

                    <ul>
                        <li>sudo apt-get -y install apache2</li>
                    </ul>
                </li>
                <li>Resetoi oletussivu
                    <ul>
                        <li>echo "Default"|sudo tee /var/www/html/index.html</li>
                    </ul>
                </li>
                <li>Lisää nimiperusteinen verkkopalvelin

                    <ul>
                        <li>sudoedit /etc/apache2/sites-available/pyora.example.com.conf</li>
                        <li>
                            cat /etc/apache2/sites-available/pyora.example.com.conf <br />
                           
                            &lt;VirtualHost *:80&gt;<br />
                            ServerName pyora.example.com<br />
                            ServerAlias www.pyora.example.com<br />
                            DocumentRoot /home/xubuntu/publicsites/pyora.example.com<br />
                            &lt;Directory /home/xubuntu/publicsites/pyora.example.com&gt;<br />
                            Require all granted<br />
                            &lt;/Directory&gt;<br />
                            &lt;/VirtualHost&gt;<br />
                        </li>
                        <li>sudo a2ensite pyora.example.com</li>
                        <li>sudo systemctl restart apache2</li>
                    </ul>
                </li>
                <li>Laadi verkkosivu tavallisena käyttäjänä

                    <ul>
                        <li>mkdir -p /home/xubuntu/publicsites/pyora.example.com/</li>
                        <li>echo pyora &gt; /home/xubuntu/publicsites/pyora.example.com/index</li>
                    </ul>
                </li>
                <li>Testaa
                    <ul>
                        <li>curl -H 'Host: pyora.example.com' localhost</li>
                        <li>curl localhost</li>
                    </ul>
                </li>
                <li>Oikeasti nimi vuokrataan NameCheap:ista tai Gandi:sta. Tässä simuloidaan nimipalvelua
                    <ul>
                        <li>sudoedit /etc/hosts</li>
                        <li>cat /etc/hosts <br/>
                        127.0.0.1 localhost<br/>
                        127.0.1.1 xubuntu<br/>
                        127.0.0.1 pyora.example.com<br/>
                        # …
                        </li>
                    </ul>
                </li>
                <li>Kokeile Firefoxilla
                    <ul>
                        <li>http://localhost</li>
                        <li>http://pyora.example.com</li>
                    </ul>
                </li>
                <li>Jos sait esille eri sivut niin hyvä, virtuaalihostaaminen onnistui</li>
                <li>Lisää uusia sivuja</li>

            </ul>

            <h2>Lähteet</h2>
            <ul>
                <li>“First Steps on a New Virtual Private Server – an Example on DigitalOcean and Ubuntu 16.04 LTS.” https://terokarvinen.com/, Tero Karvinen, 19 9 2017, https://terokarvinen.com/2017/first-steps-on-a-new-virtual-private-server-an-example-on-digitalocean/?fromSearch=first%20steps. Accessed 10 2 2022.</li>
                <li>“How can I set up an A (address) record for my domain? - Domains.” Namecheap, 14 7 2021, https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/. Accessed 10 February 2022.</li>
                <li>Karvinen, Tero. “Name Based Virtual Hosts on Apache – Multiple Websites to Single IP Address.” 10 4 2018, https://terokarvinen.com/2018/name-based-virtual-hosts-on-apache-multiple-websites-to-single-ip-address/?fromSearch=name%20based%20virtual. Accessed 15 2 2022.</li>
            </ul>


        </div>
    )
}

export default Ratkaisu4z