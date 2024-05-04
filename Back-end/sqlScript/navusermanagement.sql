CREATE DATABASE IF NOT EXISTS navusermanagement;

CREATE TABLE IF NOT EXISTS users (
  user_id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  surname varchar(20) NOT NULL,
  email varchar(255) NOT NULL,
  telephone varchar(20) NOT NULL,
  password_hash varchar(255) NOT NULL,
  salt varchar(255) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE KEY unique_email (email),
  profile_id INT,
  FOREIGN KEY (profile_id) REFERENCES profiles(profile_id)
);

CREATE TABLE IF NOT EXISTS profiles (
  profile_id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (profile_id)
);

CREATE TABLE IF NOT EXISTS permissions (
  permission_id int NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  PRIMARY KEY (permission_id)
);

CREATE TABLE IF NOT EXISTS profile_permissions (
  id int NOT NULL AUTO_INCREMENT,
  profile_id int DEFAULT NULL,
  permission_id int DEFAULT NULL,
  PRIMARY KEY (id),
  KEY profile_id (profile_id),
  KEY permission_id (permission_id),
  FOREIGN KEY (profile_id) REFERENCES profiles(profile_id),
  FOREIGN KEY (permission_id) REFERENCES permissions(permission_id)
);

CREATE TABLE IF NOT EXISTS contracts(
	contract_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	package_id INT,
	start_date DATE,
	end_date DATE,
  status ENUM('ativo', 'expirado', 'cancelado'),
  date_creation DATETIME,
  last_update TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (package_id) REFERENCES packages(package_id)
);  

CREATE TABLE IF NOT EXISTS packages  (
    package_id INTEGER NOT NULL AUTO_INCREMENT,
    name_package VARCHAR(255),
    service_type_id INTEGER,
    production_id INTEGER,
    quantidade_fotos INTEGER,
    quantidade_videos INTEGER,
    details JSON,
    -- horas_estudio INT,
    -- maquiagem_incluida BOOLEAN,
    -- fotos_reveladas INT,
    -- reels_inclusos INT,
    -- edicao_inclusa BOOLEAN,
    -- locacao_incluida VARCHAR(50),
    -- ajuste_cor BOOLEAN,
    -- capa_incluida BOOLEAN,
    preco DECIMAL,
    PRIMARY KEY (package_id),
    FOREIGN KEY (service_type_id) REFERENCES service_type(service_type_id),
    FOREIGN KEY (production_id) REFERENCES production(production_id)
);

CREATE TABLE IF NOT EXISTS service_type(
  service_type_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  service_type_name VARCHAR(250)
)

CREATE TABLE IF NOT EXISTS production(
  production_id INT PRIMARY KEY AUTO_INCREMENT,
  production_name VARCHAR(250)
)





