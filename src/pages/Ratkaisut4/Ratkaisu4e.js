import React from 'react';
import '../Ratkaisut.css';
import Picture1 from './Kuvat4e/Picture1.png';
import Picture2 from './Kuvat4e/Picture2.png';
import Picture3 from './Kuvat4e/Picture3.png';


const Ratkaisu4e = () => {
    return (
        <div className='body'>
            <h1>Tehtävä 4e - Served</h1>
            <p><b>Mitä halutaan tehdä:</b> <br/>
             Tehdä kaksi virtuaaliservereitä jotka näyttävät nettisivun julkisessa internetissä. Olin vuokrannut domainin vaatek.com GoDaddysta. 
            Vuokrasin kyseisen domainin koska minulla on toisessa kurssissa projekti
            jossa teen appia jolla voidaan myydä käytettyjä lastenvaatteita.</p>
            <br/>
            <p>Loin kaksi kansiota
                <ul>
                    <li>erik@server:/var/www$ sudo mkdir www</li>
                    <li>erik@server:/var/www$ sudo mkdir vaatekaappi</li>
                    <li>erik@server:/var/www$ ls -l<br />total 12</li>
                    <li>drwxr-xr-x 2 root root 4096 Feb 13 15:06 html</li>
                    <li>drwxr-xr-x 2 root root 4096 Feb 13 15:07 vaatekaappi</li>
                    <li>drwxr-xr-x 2 root root 4096 Feb 13 15:07 www</li>
                </ul>
            </p>
            <p>Vaihdoin omistajuudet
                <ul>
                    <li>erik@server:/var/www$ sudo chown -R erik:erik www</li>
                    <li>erik@server:/var/www$ sudo chown -R erik:erik vaatekaappi</li>
                </ul>
            </p>
            <p>Lisäsin molempiin index.html tiedostot

                <ul>
                    <li>erik@server:/var/www/www$ cat index.html<br />www.vaatek.com</li>
                    <li>erik@server:/var/www/vaatekaappi$ cat index.html <br />vaatekaappi.vaatek.com</li>
                </ul>
            </p>
            <p>Loin seuraavat tiedostot
                <ul>
                    <li>
                        erik@server:/etc/apache2/sites-available$ cat vaatekaappi.conf<br />
                        &lt;VirtualHost *:80&gt;<br />
                        ServerAdmin bgu152@myy.haaga-helia.fi
                        ServerName vaatekaappi.vaatek.com
                        ServerAlias www.vaatekaappi.com
                        DocumentRoot /var/www/vaatekaappi
                        ErrorLog &#36;&#123;APACHE_LOG_DIR &#125; /vaatekaappi-error.log
                        CustomLog &#36;&#123;APACHE_LOG_DIR &#125; /vaatekaappi-access.log combined
                        &lt;/VirtualHost *:80&gt;<br />

                    </li>
                    <li>
                        erik@server:/etc/apache2/sites-available$ cat vaatekaappi.conf<br />
                        &lt;VirtualHost *:80&gt;<br />
                        ServerAdmin bgu152@myy.haaga-helia.fi
                        ServerName vaatek.com
                        ServerAlias www.vaatekaappi.com
                        DocumentRoot /var/www/www
                        ErrorLog &#36;&#123;APACHE_LOG_DIR &#125; /www-error.log
                        CustomLog &#36;&#123;APACHE_LOG_DIR &#125; /www-access.log combined
                        &lt;/VirtualHost *:80&gt;<br />
                    </li>
                </ul>
            </p>
            <p>
                Enabling sites (luulen että tekee asetuksen joka käynnistää sivut aina kun apache käynnistyy)
                <ul>
                    <li>erik@server:/etc/apache2/sites-available$ sudo a2ensite www.conf</li>
                    <li>erik@server:/etc/apache2/sites-available$ sudo a2ensite vaatekaappi.conf</li>
                </ul>
            </p>
            <p>Nyt generoitui seuraavat tiedostot
                <ul>
                    <li>
                        erik@server:/etc/apache2/sites-enabled$ cat www.conf <br />
                        &#36;VirtualHost *:80&gt;<br />
                        ServerAdmin bgu152@myy.haaga-helia.fi<br />
                        ServerName vaatek.com<br />
                        DocumentRoot /var/www/www<br />
                        &#36;Directory&gt;<br />
                        Options Indexes FollowSymLinks<br />
                        AllowOverride None<br />
                        Require all granted<br />
                        &#36;/Directory&gt;<br />
                        ErrorLog $&#123;APACHE_LOG_DIR&#125;/www-error.log<br />
                        CustomLog $&#123;APACHE_LOG_DIR&#125;/www-access.log combined<br />
                        &#36;/VirtualHost&gt;
                    </li>
                    <li>
                    erik@server:/etc/apache2/sites-enabled$ cat vaatekaappi.conf<br />
                        &#36;VirtualHost *:80&gt;<br />
                        ServerAdmin bgu152@myy.haaga-helia.fi<br />
                        ServerName vaatekaappi.vaatek.com<br />
                        ServerAlias www.vaatekaappi.vaatek.com<br />
                        DocumentRoot /var/www/vaatekaappi<br />
                        &#36;Directory&gt;<br />
                        Options Indexes FollowSymLinks<br />
                        AllowOverride None<br />
                        Require all granted<br />
                        &#36;/Directory&gt;<br />
                        ErrorLog $&#123;APACHE_LOG_DIR&#125;/}/vaatekaappi-error.log<br />
                        CustomLog $&#123;APACHE_LOG_DIR&#125;/vaatekaappi-access.log combined<br />
                        &#36;/VirtualHost&gt;
                    </li>
                </ul>
            </p>

            <p>
                Suljetaan oletussivu 
                <ul>
                    <li>erik@server:/etc/apache2/sites-enabled$ sudo a2dissite  000-default.conf</li>
                </ul>
            </p>
            <h3>Lopputulos</h3>
            <p>Sivuihin voidaan navigoida netin kautta, mutta ne eivät käyttäytynyt aivan toivotulla tavalla. Siellä www.vaatek.com ja vaatek.com näyttivät eri virtuaaliservereitä, mutta vaatekaappi.vaatek.com ei näyttänyt mitään. Olisin toivonut että vaatekaappi.vaatek.com olisi näyttänyt vastaavan virtuaaliserverin.
                
            </p>
            <img src={Picture1} />
            <br/>
            <img src={Picture2} />
            <br/>
            <img src={Picture3} />
            <h3>Lähteet</h3>
            <cite>Verkkotunnukset, verkkosivustot, verkkohotelli ja verkkomarkkinointityökalut – GoDaddy FI, https://fi.godaddy.com/. </cite>

        </div >
    )
}

export default Ratkaisu4e