import React from 'react';
import kuva1 from './Kuvat5a/kirjautuminen_success.png';
import kuva2 from './Kuvat5a/kijan_lisaaminen.png';
import kuva3 from './Kuvat5a/kirjan_muuttaminen.png';
import kuva4 from './Kuvat5a/kirjan_poistaminen.png';
import '../Ratkaisut.css';



const Ratkaisu5a = () => {
    return (
        <div className='body'>
            <h1>5a - CRUD. Make a simple web program</h1>
            <b>25.2.2020</b>
            <h3>Kirjastoapplikaatio</h3>
            <p>Tarkoituksena on tehdä yksinkertainen tietokanta missä on kirjoja</p>
            <p>Seurasi Tero Karvisen ohjeita (<a href="https://terokarvinen.com/2022/django-instant-crm-tutorial/">linkki</a>)</p>
            <h3>Alustava harjoittelu</h3>
            <p>Tein aluksi customer tietokannan Teron ohjeiden mukaisesti. Tätä aloittaessa olin luonut virtuaalisen ympäristön.</p>
            <h3>Projektin luonti</h3>
            <ul>
                <li>(env) erik@virtualbox:~/library$ django-admin startproject library</li>
                <li>(env) erik@virtualbox:~/library$ cd library</li>
                <li>(env) erik@virtualbox:~/library$ ./manage.py makemigrations</li>
                <li>(env) erik@virtualbox:~/library$ ./manage.py migrate</li>
                <li>(env) erik@virtualbox:~/library$ sudo apt-get install pwgen</li>
                <li>(env) erik@virtualbox:~/library$ ./manage.py createsuperuser</li>
                <li>(env) erik@virtualbox:~/library$ ./manage.py runserver
                    <p>Serveri oli käynnissä, osoite http://127.0.0.1:8000/ näytti Djangon aloitussivun. Pystyin kirjautumaan adminina.</p>
                    <img src={kuva1} style={{maxWidth:'800px'}} alt="Kirjautuminen onnistui"/>
                 </li>
                <li>(env) erik@virtualbox:~/library$ ./manage.py startapp books</li>
                <li>(env) erik@virtualbox:~/library$ micro library/settings.py
                    <p>INSTALLED_APPS = [<br/>
                        'django.contrib.admin',<br/>
                        'django.contrib.auth',<br/>
                        'django.contrib.contenttypes',<br/>
                        'django.contrib.sessions',<br/>
                        'django.contrib.messages',<br/>
                        'django.contrib.staticfiles',<br/>
                        'books', # add this
                        ]
                    </p>
                </li>
                <li>(env) erik@virtualbox:~/library$ micro books/models.py
                    <p>(env) erik@virtualbox:~/library/books$ n <br/>
                        from django.db import models<br/>
                        # Create your models here.<br/>
                        class Book(models.Model):<br/>
                        name = models.CharField(max_length=300)
                    </p>

                </li>
                <li>(env) erik@virtualbox:~/library$ ./manage.py makemigrations</li>
                <li>(env) erik@virtualbox:~/library$ ./manage.py migrate</li>
                <li>(env) erik@virtualbox:~/library$ micro books/admin.py</li>
                <li>(env) erik@virtualbox:~/library$ ./manage.py runserver</li>
                <li>Lisäsin kirjan <br/>
                    <img src={kuva2} style={{maxWidth:'800px'}} alt="idioten"/>
                </li>
                <li>Tarkistin että pystyin muuttamaan ja poistamaan kirjan kirjan nimen
                    <br/>
                    <img src={kuva3} style={{maxWidth:'800px'}} alt="kalakirja"/>
                    <br/>

                </li>
                <li>
                Ja että pystyin poistamaan kirjan
                    <br/>
                    <img src={kuva4} style={{maxWidth:'800px'}} alt="Kirja poistettu"/>
                </li>
                

            </ul>

            <h3>Lähteet</h3>
            <cite>Karvinen, Tero. “Django 4 Instant Customer Database Tutorial.” Tero Karvinen, 13 February 2022, https://terokarvinen.com/2022/django-instant-crm-tutorial/. Accessed 25 February 2022.</cite>
        </div>
    )
}

export default Ratkaisu5a