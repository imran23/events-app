CREATE TABLE event
(
    id        VARCHAR(255) NOT NULL,
    date_time TIMESTAMP,
    guests    INTEGER      NOT NULL,
    location  VARCHAR(255),
    title     VARCHAR(255),
    coordinator VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO event (date_time, guests, location, title, coordinator, id)
VALUES ('2023-04-19T12:00', 30, 'Ice Skating Rink', 'Michael Scott''s Birthday', 'Ryan', 'a04228f1-368b-4692-a97a-2573c7ac735f');
INSERT INTO event (date_time, guests, location, title, coordinator, id)
VALUES ('2023-04-22T18:00', 20, 'Chilis', 'The 5th Annual Dundies', 'Adam', 'b39379ac-f240-368b-87e1-76400643b25b');
INSERT INTO event (date_time, guests, location, title, coordinator, id)
VALUES ('2023-04-19T18:00', 3, 'Chicago', 'Movie', 'Vipul', 'c39379ac-f240-4a4c-87e1-96400643b25b');
INSERT INTO event (date_time, guests, location, title, coordinator, id)
VALUES ('2023-04-22T18:00', 8, 'Vegas', 'Party', 'Scott', 'd39379ac-368b-4a4c-f240-86400643b25b');
INSERT INTO event (date_time, guests, location, title, coordinator, id)
VALUES ('2023-04-22T18:00', 25, 'Dallas', 'Reunion', 'Imran', 'e39379ac-f240-4a4c-87e1-66400643b25b');