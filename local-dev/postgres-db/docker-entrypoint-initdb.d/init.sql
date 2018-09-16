CREATE DATABASE "bga";

\connect bga;

CREATE SCHEMA bgachievements;

SET search_path TO bgachievements;

CREATE TABLE hello (
  id SERIAL PRIMARY KEY,
  message VARCHAR(255)
);

INSERT INTO hello(message) VALUES ('Message number one'), ('Message number two'), ('Message number three');

CREATE USER "bga";
GRANT ALL PRIVILEGES ON DATABASE "bga" TO "bga";
GRANT ALL PRIVILEGES ON SCHEMA "bgachievements" TO "bga";
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA "bgachievements" TO "bga";
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA "bgachievements" TO "bga";

REVOKE CONNECT ON DATABASE "bga" FROM PUBLIC;
GRANT CONNECT ON DATABASE "bga" TO "bga";
