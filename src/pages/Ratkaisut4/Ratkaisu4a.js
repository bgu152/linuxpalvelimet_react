import React from 'react';
import '../Ratkaisut.css';

const Ratkaisu4a = () => {
    return (
        <div className='body'>
            <h1>Tehtävä 4a - Vuokraa pilvi</h1>
            <p><b>Ensimmäiset askeleet tunnilla 9.2.2022: </b></p> <br/>
            <p>
                Hain githubista GitHub Education pakettia onnistuneesti. En muista tarkkoja askelia mutta meni suurin piirtein näin:
                <ul>
                    <li>Googlasin GitHub Education ja lopulta päädyin sivulle missä voi anoa kyseistä pakettia.</li>
                    <li>  Menin Haaga-Helian MyNet palveluun ja pyysin sieltä opiskelutodistuksen englanniksi.</li>
                    <li>Liitin todistuksen hakemukseen ja n. 10 minuutin kuluttua sain viestin että se oli hyväksytty.</li>
                    <li>Sain GitHub Education sivustolta kampanjakoodin DigitalOceaniin.</li>
                    <li>Menin DigitalOceaniin. Maksoin 5 dollaria PayPalin kautta. Lunastin kampanjakoodin (100$ credittia).</li>
                </ul>
            </p>
            <br/>
            <p><b>12.2.2022</b></p> <br />
            <ul>
                <li>Avasin Tero Karvisen ohjeet First Steps on a New Virtual Private Server – an Example on DigitalOcean and Ubuntu 16.04 LTS</li>
                <li>Minulla oli project "my-first-project". En muistanut että olinko jo luonut sen tunnilla.</li>
                <li>Valitsin Create → Droplets. Sitten tein seuraavat valinnat
                    <ul>
                        <li>Valitsin: Ubuntu 20.04 LTS</li>
                        <li>Plan: Basic</li>
                        <li>CPU Options: Regular Intel with SSD</li>
                        <li>Choose a datacenter region: Frankfurt</li>
                        <li>Authentication: Password</li>
                        <li>Select additional options: ei mitään</li>
                        <li>hostname:ubuntu2</li>
                        <li>Password: …xxx</li>
                        <li>Create droplet</li>
                    </ul>
                </li>
                <li>Omalla tietokoneen komentotulkissa

                    <ul>
                        <li>erik@linux:~$ ssh root@139.59.138.114</li>
                        <li>Annoin salasanan ja pääsin sisään</li>
                        <li>root@ubuntu2:~#</li>
                        <li>Loin uuden käyttäjän</li>
                        <li>root@ubuntu2:~# sudo adduser erik</li>
                        <li>Annoin admin oikeudet uudelle käyttäjälle (kaksi komentoa)
                            <ul>
                                <li>root@ubuntu2:~# sudo adduser erik adm</li>
                                <li>root@ubuntu2:~# sudo adduser erik admin</li>
                            </ul>

                        </li>

                        <li>Kirjauduin ulos</li>
                        <li>Kirjauduin uudestaan dropletiin
                            <ul>
                                <li>erik@linux:~$ ssh erik@139.59.138.114</li>
                                <li>erik@ubuntu2:~$ </li>
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>



        </div>
    )
}

export default Ratkaisu4a