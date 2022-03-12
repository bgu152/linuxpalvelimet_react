import React from 'react';
import '../Ratkaisut.css';
import Picture1 from './Kuvat6d/6d1.png';
import Picture2 from './Kuvat6d/6d2.png';
import Picture3 from './Kuvat6d/6d3.png';
import Picture4 from './Kuvat6d/6d4.png';
import Picture5 from './Kuvat6d/6d5.png';
import Picture6 from './Kuvat6d/6d6.png';

const Ratkaisu6d = () => {
    return (
        <div className='body'>
            <h1>Tehtävä 6d - Tee skripti, joka ottaa komentoriviparametreja</h1>
            <h3>Tehtävän idea</h3>
            <p>Ideanani oli tehdä skripti joka näyttää käyttäjälle Fibonacci lukuja. Ohjelman tulisi kysyä käyttäjältä kuinka monta numeroa hän haluaa nähdä ja tämän jälkeen tulostaa sen lukumäärän Fibonaccinumeroita.</p>
            <h3>Valimistelut</h3>
            <p><b>12.3.2022</b></p>
            <p><b>Klo 12.30 - 13.20</b></p>

            <p>Alustuvia testejä. Loin teksititiedoston nimeltä input Desktopille. Oikeaklikkasin sitä  → Properties → Permissions → Allow this file to be run as a program</p>
            <img src={Picture1} width="300px" />
            <p>Tämän jälkeen aloin kirjoittaa skriptiä. Parhaimmat ohjeet löysin sivulta. Parhaimmat ohjeet löysin <a href="https://linuxhint.com/bash_if_else_examples/">tältä sivulta</a>(Buzdar).</p>
            <p>Itse skriptin kirjoittaminen kesti jonkin aikaa, mutta sain sen lopulta yrityksen ja erehdyksen kautta toimimaan. </p>
            <img src={Picture2} />
            <p>Työpäydällä olevan tideoston "input" sisältö oli nyt tämän näköinen:</p>
            <img src={Picture3} />

            <h3>Skriptin siirtäminen</h3>
            <p><b>kl 13.25</b></p>
            <p>Loin nanolla uuden tekstitiedoston työpöydälle:</p>
            <img src={Picture4} />
            <p><b>kl 13.35</b></p>
            <p>Siirsin tiedoston /usr/bin kansioon</p>
            <p>erik@virtualbox:~/Desktop$ sudo cp fibonacci /usr/bin<br />
                [sudo] password for erik:
            </p>
            <p>Kokeilin että komento toimi</p>
            <img src={Picture5} />
            <p>Ohjelma ei toiminut, koska en tehnyt muistanut antaa oikeude ajaa sitä ohjelmana!
            </p>
            <p>Yritin korjata ongelman chmod komennolla<br />
                erik@virtualbox:~/Desktop$ sudo chmod +x /usr/bin/fibonacci
            </p>
            <p>Kokeilin uudestaan ja se toimi!</p>
            <img src={Picture6} />  
            <h3>Lähteet</h3>  
            <p>Buzdar, Karim. “Bash: If, Else If, Else Examples.” Linux Hint, <br />
                https://linuxhint.com/bash_if_else_examples/. Accessed 12 March 2022.</p>    
            </div>
    )
}

export default Ratkaisu6d