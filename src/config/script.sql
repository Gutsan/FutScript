CREATE DATABASE futscript;
\c futscript;

CREATE TABLE equipos (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE posiciones (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE jugadores (id SERIAL PRIMARY KEY, id_equipo INT REFERENCES equipos(id), name VARCHAR(250), position INT REFERENCES posiciones(id), edad INT);

CREATE TABLE administradores (id SERIAL PRIMARY KEY,username VARCHAR(250) NOT NULL, password VARCHAR(250));

INSERT INTO posiciones values
(DEFAULT, 'delantero'),
(DEFAULT, 'centrocampista'),
(DEFAULT, 'defensa'),
(DEFAULT, 'portero');

SELECT * FROM posiciones;

INSERT INTO administradores values(DEFAULT,'admin','1234');

SELECT * FROM administradores ;

SELECT * FROM jugadores;

SELECT * FROM equipos;

SELECT name, position FROM jugadores WHERE id_equipo=1;

SELECT jugadores.name, posiciones.name AS posicion FROM (SELECT name, position FROM jugadores WHERE id_equipo=2) AS jugadores INNER JOIN posiciones ON jugadores.position=posiciones.id;

ALTER TABLE jugadores ADD COLUMN edad INT;

INSERT INTO jugadores VALUES(DEFAULT,1,'Brayan Cortés',4,28),(DEFAULT,1,'Omar Carabali',4,26),(DEFAULT,1,'Eduardo Villanueva',4,19),(DEFAULT,1,'José Ballesteros',4,21),(DEFAULT,1,'Fernando de Paul',4,32),(DEFAULT,1,'Benjamín Morales',4,19),(DEFAULT,1,'Erick Wiemberg',3,29),(DEFAULT,1,'David Tati',3,21),(DEFAULT,1,'Jeyson Rojas',3,22),(DEFAULT,1,'Daniel Gutierrez',3,20),(DEFAULT,1,'Alan Saldivia',3,21),(DEFAULT,1,'Bruno Gutiérrez',3,21),(DEFAULT,1,'Cristian Zavala',3,24),(DEFAULT,1,'Emiliano Amor',3,28),(DEFAULT,1,'Matías Pinto',3,19),(DEFAULT,1,'Ramiro González',3,33),(DEFAULT,1,'Pedro Navarro',3,22),(DEFAULT,1,'Miguel Toledo',3,19),(DEFAULT,1,'Óscar Opazo',3,33),(DEFAULT,1,'Filipe Yanez',3,19),(DEFAULT,1,'Maximiliano Falcón',3,26),(DEFAULT,1,'Darko Fiamengo',3,20),(DEFAULT,1,'Victor Campos',3,18),(DEFAULT,1,'Arturo Vidal',2,36),(DEFAULT,1,'Ethan Espinoza',2,23),(DEFAULT,1,'Cesar Fuentes',2,30),(DEFAULT,1,'Esteban Pavez',2,33),(DEFAULT,1,'Pablo Parra',2,29),(DEFAULT,1,'Bryan Soto',2,22),(DEFAULT,1,'Matías Moya',2,25),(DEFAULT,1,'Lucas Soto',2,20),(DEFAULT,1,'Ignacio Jara',2,27),(DEFAULT,1,'Nicolás Garrido',2,18),(DEFAULT,1,'Vicente Pizarro',2,21),(DEFAULT,1,'Dylan Portilla',2,19),(DEFAULT,1,'Felipe Valdivia',2,18),(DEFAULT,1,'Francisco Marchant',2,17),(DEFAULT,1,'Leonardo Gil',1,32),(DEFAULT,1,'Carlos Palacios',1,23),(DEFAULT,1,'Damián Pizarro',1,18),(DEFAULT,1,'Marco Bolados',1,27),(DEFAULT,1,'Darío Lezcano',1,33),(DEFAULT,1,'Alexander Oroz',1,21),(DEFAULT,1,'Leandro Benegas',1,35),(DEFAULT,1,'Matías Colossi',1,22),(DEFAULT,1,'Francisco Rivera',1,19),(DEFAULT,1,'Benjamín Castro',1,17),(DEFAULT,1,'Leandro Hernández',1,18);
INSERT INTO jugadores VALUES(DEFAULT,2,'Thomas Gillier',4,19),(DEFAULT,2,'Sebastián Pérez',4,33),(DEFAULT,2,'Vicente Bernedo',4,23),(DEFAULT,2,'Sergio Cabello',4,20),(DEFAULT,2,'Guillermo Soto',3,30),(DEFAULT,2,'Joshué Quiñónez',3,22),(DEFAULT,2,'Eugenio Mena',3,35),(DEFAULT,2,'Carlos Salomón',3,23),(DEFAULT,2,'Daniel Gónzalez',3,21),(DEFAULT,2,'Cristian Cuevas',3,28),(DEFAULT,2,'Alfonso Parot',3,34),(DEFAULT,2,'Pablo Pinto',3,19),(DEFAULT,2,'Carlos Arancibia',3,20),(DEFAULT,2,'Patricio Flores',3,22),(DEFAULT,2,'Gary Kagelmacher',3,35),(DEFAULT,2,'Agustín Farías',2,36),(DEFAULT,2,'Lucas Menossi',2,31),(DEFAULT,2,'Alfred Canales',2,23),(DEFAULT,2,'Juan Rossel',2,18),(DEFAULT,2,'David Salazar',2,19),(DEFAULT,2,'Cesar Pinares',2,32),(DEFAULT,2,'Branco Ampuero',2,30),(DEFAULT,2,'Bryan González',2,20),(DEFAULT,2,'Diego Corral',2,18),(DEFAULT,2,'Jorge Ortiz',2,20),(DEFAULT,2,'Sebastián Espinoza',2,19),(DEFAULT,2,'Ian Toro',2,21),(DEFAULT,2,'Luis Muñoz',2,20),(DEFAULT,2,'Nicolás Ignacio Letelier',2,19),(DEFAULT,2,'Leonardo Troncoso',2,18),(DEFAULT,2,'Nicolás Castillo',1,30),(DEFAULT,2,'Ousman Touray',1,24),(DEFAULT,2,'Franco Di Santo',1,34),(DEFAULT,2,'Fernando Zampedri',1,35),(DEFAULT,2,'Clemente Montes',1,22),(DEFAULT,2,'Axel Cerda',1,17),(DEFAULT,2,'Alexander Aravena',1,21),(DEFAULT,2,'Gonzalo Tapia',1,21),(DEFAULT,2,'Diego Ossa',1,19),(DEFAULT,2,'Milan Tudor',1,20),(DEFAULT,2,'Nicolas Sepúlveda',1,21);
INSERT INTO equipos VALUES(DEFAULT,'U de Chile');
                  