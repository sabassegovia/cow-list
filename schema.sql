DROP DATABASE IF EXISTS cowlist;

CREATE DATABASE cowlist;

USE cowlist

CREATE TABLE cows (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO cows VALUES('Buttercup', 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.');
INSERT INTO cows VALUES('Daisy', 'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.');
INSERT INTO cows VALUES('Milkshake', 'a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.');
INSERT INTO cows VALUES('Bessie', 'a persons best friend');
INSERT INTO cows VALUES('MooDonna', 'archaic : lady -- used as a form of respectful address.');
INSERT INTO cows VALUES('MooLawn', 'a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.');