------------------------------
------- BASE DE DATOS --------
------------------------------

DROP TABLE IF EXISTS lectores CASCADE;

CREATE TABLE lectores
(
    id       bigserial    PRIMARY KEY,
    nombre   varchar(255) NOT NULL,
    telefono numeric(9)   NOT NULL
);

DROP TABLE IF EXISTS libros CASCADE;

CREATE TABLE libros
(
    id       bigserial    PRIMARY KEY,
    isbn     varchar(13)  NOT NULL UNIQUE,
    titulo   varchar(255) NOT NULL
);

DROP TABLE IF EXISTS prestamos CASCADE;

CREATE TABLE prestamos
(
    id          bigserial PRIMARY KEY,
    libro_id    bigint    NOT NULL REFERENCES libro (id),
    lector_id   bigint    NOT NULL REFERENCES lectores (id),
    creado_en   timestamp NOT NULL,
    devuelto_en timestamp NOT NULL
)

INSERT INTO lectores (nombre, telefono)
VALUES ('Alonso', 678954678),
       ('Cristian', 635246345),
       ('Enrique', 678900921),
       ('Gustavo', 612352678);

INSERT INTO libros (isbn, titulo)
VALUES ('123456789012X', 'La Celestina')
       ('347573498579D', 'El Lazarillo de Tormes')
       ('947482928383A', 'Don Quijote de la Mancha')
       ('938763728453J', 'Cantar de mio Cid')
       ('156293743824L', 'Luces de bohemia')
       ('930293840938U', 'La sombra del viento');