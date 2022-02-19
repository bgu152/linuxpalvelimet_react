import React from 'react';
import '../Ratkaisut.css';


const Ratkaisu4g = () => {
  return (
    <div className='body'>
      <h1>Tehtävä 4g - Rosvot porteilla. Etsi lokeistasi merkkejä murtautumisyrityksistä ja analysoi ne.</h1>
      <p><b>14.2.2022</b></p> <br />

      <p> Alla on muutama rivi joka tulostui komennolla <b>erik@server:/var/log$ cat auth.log</b></p><br />

      <p>
        <ol style={{marginLeft:20}}>
          <li>Feb 14 02:04:16 server sshd[28478]: Invalid user qihang from 160.251.55.50 port 39798</li>
          <li>Feb 14 02:04:16 server sshd[28478]: Received disconnect from 160.251.55.50 port 39798:11: Bye Bye [preauth]</li>
          <li>Feb 14 02:04:16 server sshd[28478]: Disconnected from invalid user qihang 160.251.55.50 port 39798 [preauth]</li>
          <li>Feb 14 02:04:17 server sshd[28480]: Invalid user User from 193.3.19.149 port 55861</li>
          <li>Feb 14 02:04:17 server sshd[28480]: Received disconnect from 193.3.19.149 port 55861:11: Client disconnecting normally [preauth]</li>
          <li>Feb 14 02:04:17 server sshd[28480]: Disconnected from invalid user User 193.3.19.149 port 55861 [preauth]</li>
          <li>Feb 14 02:05:26 server sshd[2633]: Received disconnect from 88.112.135.9 port 34846:11: disconnected by user</li>
        </ol>
      </p>
      <br />

      <p>Oli vaikea tulkita näitä merkintöjä. Kokeilin itse kirjautua käyttäjänä root väärällä salasanalla omalta koneelta:
        <ul>
          <li>ssh root@139.59.138.114<br />
            root@139.59.138.114: Permission denied (publickey)</li>
        </ul>
      </p>
      <p>Tämä kirjautumisyritys generoi serverin auth.log tiedostoon seuraavan rivin:</p>
      <ul>
        <li>
          Feb 14 02:11:53 server sshd[28680]: Connection closed by authenticating user root 88.112.135.9 port 34896 [preauth]
        </li>
      </ul>

      <p>Oma yritykseni kirjautua näytti hieman erilaiselta kun yllä olevat rivit.</p>

      <p>On kuitenkin selvää että osa kirjautumisyrityksistä eivät ole legitiimejä, kuten esimerkiksi yritys rivillä 4 yllä. Siellä joku on yrittänyt kirjautua käyttäjänä "User". Tämä viittaisi siihen, että joku kokeilee kirjautumista tavallisella käyttäjänimellä.</p>

      <p>Olin hieman yllättynyt että näitä kirjautumisyrityksiä oli edes olemassa, sillä olin kieltänyt (tai luullut kieltäväni) kaikki kirjautumiset paitsi rsa avaimen avulla.</p>



    </div>
  )
}

export default Ratkaisu4g