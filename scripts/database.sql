create extension if not exists "uuid-ossp";
create extension if not exists "postgis";

create table dealers (
  id uuid primary key not null default uuid_generate_v4(),
  email varchar(255) not null unique,
  password char(60) not null,
  token varchar(255) null,
  name varchar(255) not null,
  description text not null,
  picture varchar(255),
  address varchar(255),
  geolocation geography(point, 4326),
  phone varchar(12) not null,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  deleted_at timestamp with time zone
);

create table users (
  id uuid primary key not null default uuid_generate_v4(),
  firstname varchar(100),
  lastname varchar(100),
  email varchar(255) not null unique,
  password char(60) not null,
  token varchar(255) null,
  geolocation geography(point, 4326),
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  deleted_at timestamp with time zone
);

-- create type categories as enum ();
create table preferences (
  id uuid primary key not null default uuid_generate_v4(),
  radiusMeter integer,
  -- categories categories[] not null,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  deleted_at timestamp with time zone,
  user_id uuid references users(id) not null
);

create table deals (
  id uuid primary key not null default uuid_generate_v4(),
  title varchar(100),
  description varchar(255),
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null,
  full_price float(4),
  promotion float(4),
  quantity integer not null,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  deleted_at timestamp with time zone,
  dealer_id uuid references dealers(id) not null
);

create table ratings (
  id uuid primary key not null default uuid_generate_v4(),
  note integer not null,
  comment text not null,
  user_id uuid references users(id) not null,
  dealer_id uuid references dealers(id) not null,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  deleted_at timestamp with time zone
);
