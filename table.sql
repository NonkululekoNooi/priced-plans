CREATE table price_plans(
     id serial primary key,
      plan_names text not null,
      sms_price int not null,
      call_price int not null
);




