create TABLE person (
    id Serial PRIMARY KEY,
    name VARCHAR(255),
    surname varchar(255)
);

create table post (
    id serial primary key,
    title varchar(255),
    content varchar(255),
    user_id integer,
    foreign key (user_id) references person (id)
);