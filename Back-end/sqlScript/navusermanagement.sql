CREATE DATABASE navusermanagement();

CREATE TABLE profile (
  id_profile int NOT NULL AUTOINCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id_profile)
);

CREATE TABLE user (
  id int NOT NULL AUTOINCREMENT,
  name varchar(20) NOT NULL,
  surname varchar(20) NOT NULL,
  email varchar(255) NOT NULL,
  cpf varchar(14) NOT NULL,
  password_hash varchar(255) NOT NULL,
  salt varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY unique_email (email),
  UNIQUE KEY unique_cpf (cpf)
);

CREATE TABLE profile_permissions (
  id int NOT NULL AUTOINCREMENT,
  id_profile int DEFAULT NULL,
  id_permission int DEFAULT NULL,
  PRIMARY KEY (id),
  KEY id_profile (id_profile),
  KEY id_permission (id_permission),
  CONSTRAINT profile_permissions_ibfk_1 FOREIGN KEY (id_profile) REFERENCES profile (id_profile),
  CONSTRAINT profile_permissions_ibfk_2 FOREIGN KEY (id_permission) REFERENCES permissions (id_permissions)
);

CREATE TABLE permissions (
  id_permissions int NOT NULL AUTOINCREMENT,
  name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id_permissions)
);

CREATE TABLE user_contract (
  id int NOT NULL AUTOINCREMENT,
  
<<<<<<< Updated upstream
)
=======
)

>>>>>>> Stashed changes
