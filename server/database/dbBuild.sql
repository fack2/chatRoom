BEGIN;

drop table if exists users,messages CASCADE;

create table users
(
user_id serial primary key,
name varchar(100) not null,
email text not null,
password text not null,
img text,
color text 

);

create table messages
(
message_id serial primary key,
time timestamp  not null DEFAULT CURRENT_TIMESTAMP,
descreption text not null,
 user_id INTEGER,
FOREIGN KEY
(user_id) REFERENCES users (user_id)

);



COMMIT;