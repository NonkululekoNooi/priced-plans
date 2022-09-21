CREATE table price_plans(
     id serial primary key,
      plan_names VARCHAR(25) NOT NULL,
      sms_price float NOT NULL,
      call_price float NOT NULL
);

CREATE TABLE user_price(
    id SERIAL PRIMARY KEY,
    name_of_user VARCHAR(20) NOT NULL,
    user_plan INTEGER NOT NULL,
    FOREIGN KEY (user_plan) REFERENCES price_plans(id)
);

insert into price_plans values('sms_price','0.50'),('call_price','1.50');