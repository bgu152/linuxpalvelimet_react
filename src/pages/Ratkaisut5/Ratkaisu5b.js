import React from 'react';
import '../Ratkaisut.css';
import kuva1 from './Kuvat5b/kuva1.png';
import kuva2 from './Kuvat5b/kuva2.png';
import kuva3 from './Kuvat5b/kuva3.png';
const Ratkaisu5b = () => {
    return (
        <div className='body'>
            <h1>Tehtävä 5b - Make a production style Django install</h1>
            <h3>Valmistelut</h3>
            <p>Aloitetaan Debianin clean installista missä ufw asennettu</p>
            <h3>Kirjastoapplikaatio</h3>
            <p>Tarkoituksena oli luoda yksinkertainen kirjastoapplikaatio. Seurasin Tero Karvisen <a href="https://terokarvinen.com/2022/deploy-django/">ohjeita webapplikaation luomisesta</a>.</p>
            <h3>Tehtävän eteneminens</h3>
            <ul>
                <li>Apachen asennus: <br/>
                erik@virtualbox:~$ sudo apt-get -y install apache2</li>
                <li> Virtuaaliympäristönt asennus <br/>
                erik@virtualbox:~$ sudo apt-get -y install virtualenv</li>
                <li>erik@virtualbox:~$ cd publicwsgi/</li>
                <li>erik@virtualbox:~/publicwsgi$ </li>
                <li>erik@virtualbox:~/publicwsgi$ virtualenv -p python3 --system-site-packages env</li>
                <li>erik@virtualbox:~/publicwsgi$ source env/bin/activate</li>
                <li>(env) erik@virtualbox:~/publicwsgi$ </li>
                <li>(env) erik@virtualbox:~/publicwsgi$ nano requirements.txt</li>
                <li>(env) erik@virtualbox:~/publicwsgi$ cat requirements.txt<br />
                    django</li>
                <li>Djangon asennus <br/>
                erik@virtualbox:~/publicwsgi$ pip install -r requirements.txt</li>
                <li>erik@virtualbox:~/publicwsgi$ django-admin --version<br />
                    4.0.2</li>
                <li>Loin yhteyden djangon ja Apachen väliin <br/>
                    (env) erik@virtualbox:~/publicwsgi$ sudoedit /etc/apache2/sites-available/library.conf <br />
                    <img src={kuva1} alt="library.conf asetukset" />
                </li>
                <li>(env) erik@virtualbox:~/publicwsgi$ sudo apt-get -y install libapache2-mod-wsgi-py3</li>
                <li>(env) erik@virtualbox:~/publicwsgi$ sudo systemctl restart apache2</li>
                <li>Tarkistin, että djangon etusivy näkyy<br/>
                    (env) erik@virtualbox:/etc/apache2/sites-available$ curl -s localhost|grep tit <br />
                    &#60;title&#62;The install worked successfully! Congratulations!&#60;/title&#62;
                </li>
                <li>Tarkistin, että djangon etusivy pyörii Apechella<br/>
                    (env) erik@virtualbox:/etc/apache2/sites-available$ curl -sI localhost|grep Server
                    Server: Apache/2.4.52 (Debian)</li>
                <li>sudo service apache2 stop</li>
                <li>Seurasin <a href="https://terokarvinen.com/2022/django-instant-crm-tutorial/">edellisen tehtävän ohjeita</a> ja tein CRUD applikaation jossa on Book ja Customer komponentteja.</li>
                <li>Tarkistin että se toimii development serveriellä (ei apachella).</li>
                <li>Suljin development serverin</li>
                <li>systemctl start apache2.service</li>
                <li>Sivu näytti nyt tällaiselta <br />
                    <img src={kuva2} />
                </li>
                <li>Seuraavaksi poistetaan debuggaus: <br />
                    (env) erik@virtualbox:~/publicwsgi/library/library$ nano settings.py <br />
                    DEBUG = False <br />
                    ALLOWED_HOSTS = ["localhost", '127.0.0.1']
                </li>(env) erik@virtualbox:~/publicwsgi/library/library$ curl -s localhost|grep title <br />
                &#60;title&#62;Not Found&#60;/title&#62;
                <li>Debuggaus oli selväsit poissa koska ei tullut mitään tarkempia virheilmoituksia kun kokeili sivua "localhost/tero123" joka ei ole olemassa. <br /></li>
                <li>(env) erik@virtualbox:~/publicwsgi/library$ nano library/settings.py <br />
                    from pathlib import Path<br />

                    import os<br />
                    STATIC_ROOT = os.path.join(BASE_DIR, 'static/')<br />
                </li>
                <li>(env) erik@virtualbox:~/publicwsgi/library$ ./manage.py collectstatic<br />

                    Virheilmo: <br />
                    STATIC_ROOT = os.path.join(BASE_DIR, 'static/')<br />
                    NameError: name 'BASE_DIR' is not defined
                </li>
                <li>
                    Siirsin tekxtin alemmas<br />
                    from pathlib import Path<br />
                    # Build paths inside the project like this: BASE_DIR / 'subdir'.<br />
                    BASE_DIR = Path(__file__).resolve().parent.parent<br />

                    import os<br />
                    STATIC_ROOT = os.path.join(BASE_DIR, 'static/')

                </li>
                <li>Nyt näytti toimivan: <br/>
                (env) erik@virtualbox:~/publicwsgi/library$ ./manage.py collectstatic <br/>
                128 static files copied to '/home/erik/publicwsgi/library/static'.
                </li>
                <li>
                    Sivu näytti paremmalta: <br/>
                    <img src={kuva3}></img>

                </li>
            </ul>

            <h3>Lähteet</h3>
            <cite>Karvinen, Tero. “Deploy Django 4 - Production Install.” Tero Karvinen, 13 February 2022, https://terokarvinen.com/2022/deploy-django/. Accessed 27 February 2022.</cite>
        </div>
    )
}

export default Ratkaisu5b