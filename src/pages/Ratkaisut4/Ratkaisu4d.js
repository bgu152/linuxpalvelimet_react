import React from 'react';
import '../Ratkaisut.css';


const Ratkaisu4d = () => {
    return (
        <div className='body'>
            <h1>Tehtävä 4d - Suojaa palvelin palomuurilla</h1>
            <p><b>12.2.2022</b></p> <br />
            <p>Kun olin kirjautuneena käyttäjänä erik (katso a-kohta) tein päivityksen seuraavasti:</p>
            <p>Tein aukon palomuuriin
                <ul>
                    <li>erik@ubuntu2:~$ sudo ufw allow 22/tcp<br />
                        Rules updated<br />
                        Rules updated (v6)
                    </li>
                    <li>sudo apt upgrade</li>
                </ul>
            </p>
            <p>
                Käynnistin palomuurin
                <u>
                    <li>sudo ufw enable<br />
                        Command may disrupt existing ssh connections. Proceed with operation (y|n)? y<br />
                        Firewall is active and enabled on system startup<br />
                    </li>
                </u>
            </p>
            <p>
                Käynnistin palvelimen uudestaan
                <ul>
                    <li>erik@ubuntu2:~$ sudo reboot</li>
                    <li>erik@ubuntu2:~$ Connection to 139.59.138.114 closed by remote host.
                        <br />
                        Connection to 139.59.138.114 closed.
                    </li>
                </ul>
            </p>
            <p>
                Kirjauduin uudestaan
                <ul>
                    <li>erik@linux:~$ ssh erik@139.59.138.114</li>
                </ul>
            </p>
            <p>Tarkistin että palomuuri on päällä
                <ul>
                <li>
                    erik@ubuntu2:~$ sudo ufw status<br />
                    [sudo] password for erik:<br />
                    Status: active<br/>
                    <table>
                        <tbody>
                            <tr><td>To</td><td>Action</td><td>From</td></tr>
                            <tr><td>22/tcp </td><td>ALLOW</td><td>Anywhere</td></tr>
                            <tr><td>22/tcp (v6)  </td><td>ALLOW</td><td>Anywhere (v6)</td></tr>
                        </tbody>
                    </table>

                </li>
                </ul>
            </p >
        </div >
    )
}

export default Ratkaisu4d