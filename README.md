-> project inventory application in progress

Potential database (work in progress):

-- create
CREATE TABLE category (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT NOT NULL,
price_unit int NOT NULL
);

CREATE TABLE color (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT NOT NULL
);

CREATE TABLE arrangement (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT NOT NULL,
price_markup DECIMAL NOT NULL,
quantity int NOT NULL
);

CREATE TABLE flowers (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT NOT NULL,
color_id int NOT NULL references color(id),
category_id int NOT NULL references category(id),
arrangement_id int NOT NULL references arrangement(id),
price int NOT NULL select (category.price_unit _ arrangement.quantity) _ arrangement.price_markup as price from flowers
left join arrangement
on arrangement_id = arrangement.id
left join category
on category_id = category.id
where category_id = 2 and arrangement_id = 1;
);

-- insert
insert into category (name, price_unit) values('Rose', 6);
insert into category (name, price_unit) values('Lilies', 7);
insert into category (name, price_unit) values('Peonies', 9);

insert into color (name) values('Yellow');
insert into color (name) values('Blue');
insert into color (name) values('Pink');
insert into color (name) values('White');
insert into color (name) values('Red');

insert into arrangement (name, price_markup, quantity) values('Valentines', 2, 6);
insert into arrangement (name, price_markup, quantity) values('Bouquet', 1.3, 10);
insert into arrangement (name, price_markup, quantity) values('Individual', 1, 1);
insert into arrangement (name, price_markup, quantity) values('Funeral', 2.3, 20);
insert into arrangement (name, price_markup, quantity) values('Birthday', 1.2, 4);
insert into arrangement (name, price_markup, quantity) values('Christmas', 1.7, 8);
insert into arrangement (name, price_markup, quantity) values('Womans Day', 1.6, 5);

insert into flowers (name, color_id, category_id, arrangement_id, price) values('Asian Lily', 4, 2, 1, 12);
insert into flowers (name, color_id, category_id, arrangement_id, price) values('European Lily', 3, 2, 4, 12);
insert into flowers (name, color_id, category_id, arrangement_id, price) values('African Lily', 1, 2, 6, 12);

-- fetch
select _ from flowers;
select _ from color;
select _ from category;
select _ from arrangement;
select (category.price_unit _ arrangement.quantity) _ arrangement.price_markup as price from flowers
left join arrangement
on arrangement_id = arrangement.id
left join category
on category_id = category.id
where category_id = 2 and arrangement_id = 1;
