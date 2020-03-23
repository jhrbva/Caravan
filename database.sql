-- drop database if already exists
DROP DATABASE IF EXISTS carvan;
-- create database
CREATE DATABASE carvan;

-- emergencyContact TABLE
CREATE TABLE emergencyContact(
  ECid SERIAL PRIMARY KEY NOT NULL,
  address VARCHAR(255),
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255) NOT NULL,
  relationship VARCHAR(255)
);

-- Users Table
CREATE TABLE userTable(
  userID SERIAL PRIMARY KEY, -- SERIAL is the equivalent to Auto Increment
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(254) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(100) NOT NULL,
  ECid INT UNIQUE,
  FOREIGN KEY (ECid) REFERENCES emergencyContact(ECid)
);

-- Invitations table
CREATE TABLE invitations(
  hostID INT,
  userID INT,
  tripID INT,
  accepted BOOLEAN
);

-- trips table
CREATE TABLE trips(
  tripID SERIAL PRIMARY KEY,
  hostID INT NOT NULL,
  startLocation VARCHAR(255) NOT NULL,
  start_long VARCHAR(265) NOT NULL,
  start_lat VARCHAR(265) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  des_long VARCHAR(265) NOT NULL,
  des_lat VARCHAR(265) NOT NULL,
  tripDate TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
  trip_description VARCHAR(500),
  trip_title VARCHAR(255),
  FOREIGN KEY (hostID) REFERENCES userTable(userID)
);

-- members table
CREATE TABLE members(
  tripID INT,
  userID INT,
  FOREIGN KEY (tripID) REFERENCES trips(tripID),
  FOREIGN KEY (userID) REFERENCES userTable(userID)
);

-- rest stop table
CREATE TABLE restStop(
  tripID INT,
  location VARCHAR(255) NOT NULL,
  loc_long VARCHAR(255) NOT NULL,
  loc_lat VARCHAR(255) NOT NULL,
  FOREIGN KEY (tripID) REFERENCES trips(tripID)
);

-- Request type table
CREATE TABLE requestType(
  typeID SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(255)
);

-- itinerary Table
CREATE TABLE itineraryRequest(
  tripID INT,
  typeID INT,
  value VARCHAR(255), -- input for the request
  accept BOOLEAN,
  FOREIGN KEY (tripID) REFERENCES trips(tripID),
  FOREIGN KEY (typeID) REFERENCES requestType(typeID)
);

-- Mock Data

INSERT INTO emergencyContact(address, firstName, lastName, phoneNumber, relationship)
VALUES ('123 Wood Avenue', 'Tiffany', 'Sliver', '0585628942', 'Friend'),
  ('145 Main Street', 'Crystal', 'Drawers', '1278981880', 'Cousin'),
  ('56 Canal Avenue', 'Alex', 'Clear', '7284782001', 'Brother'),
  ('22 Orange Street', 'Chris', 'Lamp', '8288019421', 'Sister'),
  ('100 Convent Avenue', 'Andrew', 'Smith', '7280981748', 'Partner');

INSERT INTO userTable(firstName, lastName, username, email, phoneNumber, ECid)
VALUES
  ('Connie', 'Pink', 'Connie', 'connie@gmail.com', '1234567890', 2),
  ('Khristian', 'Rose Gold', 'khristian@gmail.com', '2345678901', 1),
  ('Chantelle', 'Blue', 'chantelle@gmail.com', '3456789012', 3),
  ('Julia', 'Red', 'julia@gmail.com', '4567890123', 5),
  ('Quetourah', 'Purple', 'quetourah@gmail.com', '5678901234', 4);

INSERT INTO trips(hostID, startLocation, destination, tripDate)
VALUES
  (1, '1307 Florence Avenue, Plainfield, NJ 07060', '45 Rockefeller Plaza, New York, NY, 10111', '2020-06-01 09:55:06'),
  (3, '1385 Hancock Street, Quincy, MA 02169', '1600 Pennsylvania Avenue NW, Washington, DC 20500', '2020-03-27 12:05:06');

INSERT INTO members(tripID, userID)
VALUES
  (1, 3),
  (1, 4),
  (1, 2),
  (2, 1),
  (2, 4);

INSERT INTO restStop(tripID, location)
VALUES
  (1, '20 W 34th Street, New York, NY 10001'),
  (2, '132 Christiana Mall, Newark, DE 19702');

INSERT INTO requestType(type)
VALUES
  ('starting location'),
  ('destination'),
  ('Start Time'),
  ('Add Rest Stop'),
  ('Delete Rest Stop');

INSERT INTO itineraryRequest(tripID, typeID, value, accept)
VALUES
  (2, 4, '5861 High Line, New York, NY 10001'),
  (1, 1, '651 Kapkowski Rd, Elizabeth, NJ 07201');
