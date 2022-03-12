import React from 'react'
import '../Ratkaisut.css';

const Ratkaisu6c = () => {
    return (
        <div className='body'>
            <h1>Tehtävä 6c - Uusi komento Linuxiin</h1>
            <h3>Uuden kommennon tarkoitus</h3>
            <p>Tarkoituksena on tehdä komento joka tulostaa asennetut ohjelmat. Löysin komennon <a href="https://itsfoss.com/list-installed-packages-ubuntu/">netistä</a> (Prakash) joka tekee sen. Itse komento, <b>grep " install " /var/log/apt/history.log</b>, on hieman monimutkainen joten siitä oli tarkoitus tehdä yksisanainen komento.</p>
            <p><b>12.3.2022 Klo 11.20</b></p>
            <p>Loin nanolla tiedoston desktopill jonka nimi on commands ja jonka tekstisisältö on komento on <b>grep " install " /var/log/apt/history.log</b></p>
            <p>erik@virtualbox:~/Desktop$ nano installed <br />
                erik@virtualbox:~/Desktop$ cat installed<br />
                grep " install " /var/log/apt/history.log</p>
            <p>Kirjoitin seuraavan komennon että tiedostoa voitaisiin ajaa ohjelmana<br />
                erik@virtualbox:~/Desktop$ chmod +x installed</p>
            <p>Kokeilin ohjelmaa komennolla bash installed <br />
                erik@virtualbox:~/Desktop$ bash installed<br />
                Commandline: apt-get -q -y install eatmydata<br />
                Commandline: apt-get -q -y install initramfs-tools live-boot....<br />
                ...
                <br />
                Commandline: apt-get -y install ufw<br />
                Commandline: apt-get -y install apache2<br />
                Commandline: apt-get -y install virtualenv<br />
                Commandline: apt-get -y install libapache2-mod-wsgi-py3<br />
                Commandline: apt-get install pwgen<br /></p>

            <p>Komento tulosti ainakin joitakin tietokoneelle asennetuista ohjelmista. Minulla ei ole kattava lista kaikista ohjelmista, mutta olin tyytyväinen tulokseen</p>
            <p>Siirsin ohjelman kansioon /usr/bin<br />
                erik@virtualbox:~/Desktop$ sudo cp installed /usr/bin</p>
            <p>Kokeilin komentoa installed (ilman bash-etuliitettä)</p>
            <p>erik@virtualbox:~/Desktop$ installed<br />
                Commandline: apt-get -q -y install eatmydata ….</p>
            <p>Sain saman tulosteen kuten aiemmin, joten kaikki hyvin.</p>
            <p><b>Klo 12.45</b></p>
            <p>Kokeilin ohjelmaa toisessa kansiossa
            </p>
            <p>erik@virtualbox:~/Downloads$ installed<br />
                Commandline: apt-get -q -y install eatmydata ….</p>
            <p>Komento toimi edelleen</p>
            <p>Loin uuden käyttäjän</p>
            <p>Loin uuden käyttäjän "janne" ja kirjaudun sisään käyttäjänä janne</p>
            <p>
                erik@virtualbox:~/Downloads$ sudo useradd janne<br />
                erik@virtualbox:~/Downloads$ sudo useradd janne<br />
                erik@virtualbox:~/Downloads$ sudo passwd janne<br />
                New password:<br />
                Retype new password:<br />
                passwd: password updated successfully<br />
                erik@virtualbox:~/Downloads$ su janne<br />
                Password:<br />
                $<br />
            </p>
            <p>Kokeilin komentoa käyttäjänä janne</p>
            <p>
            $ installed<br />
            Commandline: apt-get -q -y install eatmydata....<br />
            </p>
            <p>Sain saman tulosteen, joten komento toimii möys muilla käyttäjillä.</p>
            <h3>Work Cited</h3>
            <p>
                Prakash, Abhishek. “How to List Installed Packages on Ubuntu and Debian-based Linux Distributions.” It's FOSS, 23 August 2021, https://itsfoss.com/list-installed-packages-ubuntu/. Accessed 12 March 2022.
            </p>
        </div>
    )
}

export default Ratkaisu6c