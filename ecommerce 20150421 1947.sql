-- Скрипт сгенерирован Devart dbForge Studio for MySQL, Версия 3.10.227.1
-- Дата: 21.04.2015 19:47:40
-- Версия сервера: 5.5.25
-- Версия клиента: 4.1

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;

SET NAMES 'utf8';
--
-- Описание для ecommerce
--
DROP DATABASE IF EXISTS ecommerce;
CREATE DATABASE IF NOT EXISTS ecommerce
CHARACTER SET utf8
COLLATE utf8_general_ci;

USE ecommerce;

--
-- Описание для таблицы ecommerce.categories
--
CREATE TABLE IF NOT EXISTS ecommerce.categories(
  `назва категорії` VARCHAR (255),
  `кількість товарів в категорії` VARCHAR (255),
  PRIMARY KEY (`назва категорії`)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы ecommerce.complaints
--
CREATE TABLE IF NOT EXISTS ecommerce.complaints(
  `номер скарги покупця` VARCHAR (255),
  `тема скарги` VARCHAR (255),
  `скарга` VARCHAR (255),
  `ПІБ покупця, що скаржився` VARCHAR (255),
  `статус скарги` VARCHAR (255),
  `розглядач скарги` VARCHAR (255),
  PRIMARY KEY (`номер скарги покупця`)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы ecommerce.discounts
--
CREATE TABLE IF NOT EXISTS ecommerce.discounts(
  `номер акції` VARCHAR (255),
  `назва акційного товару` VARCHAR (255),
  `ціна акційного товару` VARCHAR (255),
  `дата оголошення акції` VARCHAR (255),
  `дата закінчення акції` VARCHAR (255)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы ecommerce.managers
--
CREATE TABLE IF NOT EXISTS ecommerce.managers(
  `ПІБ менеджера` VARCHAR (255),
  `стать менеджера` VARCHAR (255),
  `країна менеджера` VARCHAR (255),
  `місто, в якому працює менеджер` VARCHAR (255),
  `стаж менеджера` VARCHAR (255),
  `контактний номер телефону менеджера` VARCHAR (255),
  `вік менеджера` VARCHAR (255),
  `графік роботи менеджера` VARCHAR (255),
  PRIMARY KEY (`ПІБ менеджера`)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы ecommerce.orders
--
CREATE TABLE IF NOT EXISTS ecommerce.orders(
  `номер замовлення` VARCHAR (255),
  `ПІБ покупця, що замовив` VARCHAR (255),
  `замовлений товар` VARCHAR (255),
  `статус замовлення` VARCHAR (255),
  `загальна вартість замовлення` VARCHAR (255),
  `спосіб доставки замовлення` VARCHAR (255),
  `менеджер, який оформляє замовлення` VARCHAR (255),
  PRIMARY KEY (`номер замовлення`)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы ecommerce.products
--
CREATE TABLE IF NOT EXISTS ecommerce.products(
  `код товару` VARCHAR (255),
  `назва товару` VARCHAR (255),
  `розмір товару` VARCHAR (255),
  `вартість товару` VARCHAR (255),
  `колір товару` VARCHAR (255),
  `сезон товару` VARCHAR (255),
  `кількість проданих одиниць товару` VARCHAR (255),
  `категорія товару` VARCHAR (255),
  PRIMARY KEY (`код товару`)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы ecommerce.users
--
CREATE TABLE IF NOT EXISTS ecommerce.users(
  `ПІБ покупця` VARCHAR (255),
  `логін покупця` VARCHAR (255),
  `стать покупця` VARCHAR (255),
  `країна покупця` VARCHAR (255),
  `місто покупця` VARCHAR (255),
  `вік покупця` VARCHAR (255),
  `домашня адреса покупця` VARCHAR (255),
  `контактний номер телефону покупця` VARCHAR (255),
  PRIMARY KEY (`ПІБ покупця`, `логін покупця`)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для таблицы ecommerce.wishes
--
CREATE TABLE IF NOT EXISTS ecommerce.wishes(
  `логін покупця, що додав товар до списку бажань` VARCHAR (255),
  `дата оформлення бажання` VARCHAR (255),
  `назва товару в списку бажань` VARCHAR (255),
  `ціна товару в списку бажань` VARCHAR (255),
  `кількість товарів в списку бажань` VARCHAR (255),
  `менеджер, що розглядає бажання` VARCHAR (255),
  PRIMARY KEY (`логін покупця, що додав товар до списку бажань`, `дата оформлення бажання`)
)
ENGINE = INNODB
CHARACTER SET utf8
COLLATE utf8_general_ci;

--
-- Описание для пользователя ''@'localhost'
--
DROP USER '' @'localhost';
CREATE USER '' @'localhost';

--
-- Описание для пользователя 'root'@'127.0.0.1'
--
DROP USER 'root' @'127.0.0.1';
CREATE USER 'root' @'127.0.0.1';
GRANT USAGE ON *.* TO 'root' @'127.0.0.1' WITH GRANT OPTION;
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, GRANT OPTION, REFERENCES, INDEX, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, EXECUTE, EVENT, TRIGGER ON ecommerce.* TO 'root' @'127.0.0.1';

--
-- Описание для пользователя 'root'@'::1'
--
DROP USER 'root' @'::1';
CREATE USER 'root' @'::1';
GRANT USAGE ON *.* TO 'root' @'::1' WITH GRANT OPTION;

--
-- Описание для пользователя 'root'@'localhost'
--
DROP USER 'root' @'localhost';
CREATE USER 'root' @'localhost';
GRANT USAGE ON *.* TO 'root' @'localhost' WITH GRANT OPTION;

--
-- Описание для пользователя 'wp1'@'localhost'
--
DROP USER 'wp1' @'localhost';
CREATE USER 'wp1' @'localhost';
GRANT USAGE ON *.* TO 'wp1' @'localhost' WITH GRANT OPTION;
SET PASSWORD FOR 'wp1' @'localhost' = PASSWORD ('*E9D057131C22A0D76B4AAD2C61655BDFA706E637');
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, REFERENCES, INDEX, ALTER, CREATE TEMPORARY TABLES, LOCK TABLES, CREATE VIEW, SHOW VIEW, CREATE ROUTINE, ALTER ROUTINE, EXECUTE, EVENT, TRIGGER ON wp1.* TO 'wp1' @'localhost';

-- 
-- Вывод данных для таблицы ecommerce.categories
-- 
INSERT INTO ecommerce.categories VALUES('Джинси', '10');
INSERT INTO ecommerce.categories VALUES('Куртки', '9');
INSERT INTO ecommerce.categories VALUES('Майки', '12');
INSERT INTO ecommerce.categories VALUES('Піджаки', '14');
INSERT INTO ecommerce.categories VALUES('Сорочки', '5');
INSERT INTO ecommerce.categories VALUES('Футболки', '8');
INSERT INTO ecommerce.categories VALUES('Шорти', '4');
INSERT INTO ecommerce.categories VALUES('Штани', '11');


-- 
-- Вывод данных для таблицы ecommerce.complaints
-- 
INSERT INTO ecommerce.complaints VALUES('24245291', 'не підійшов розмір джинсів', 'я Любачевська Роксолана Любомирівна замовляла Джинси Oodji розміру 29-32 а прийшов розмір 26-26,\r\n  прошу повернути кошти, або поміняти на мій розімір', 'Любачевська Роксолана Любомирівна', 'відкликані', 'Клим`юк Олександра Анатоліївна');
INSERT INTO ecommerce.complaints VALUES('6389362', 'погане обслуговування під час покупки', 'до мене погано ставився менеджер, і сказав що, не продасть товар', 'Рижков Микита Кирилович', 'відкликані', 'Федченкова Валентина Тимофіївна');
INSERT INTO ecommerce.complaints VALUES('67545678', 'не був висланий товар', 'не був висланий товар після оплати на сайті також не були повернуті гроші', 'Білевич Ігор Дмитрович', 'задоволені', 'Кенюк Вікторія Володимирівна');
INSERT INTO ecommerce.complaints VALUES('73432391', 'під час проплати товару, було знято більше коштів ніж вказано', 'після покупки Штанів G-Star Raw 78406 M Navy, які коштують 295грн. в мене зняло 395грн., \r\n  прошу повернути мої кошти. З повагою Стівен Гарпер Мартін.', 'Стівен Гарпер Мартін', 'оскаржені', 'Тесла Анна Григоріївна');
INSERT INTO ecommerce.complaints VALUES('7345291', 'низька якість шортів', 'після покупки Шортів Arena Super-Sport 44809-51, вони порвалися прошу повернути гроші', 'Григорів Марина Віталіївна', 'оскаржені', 'Мицканюк Василь Іванович');
INSERT INTO ecommerce.complaints VALUES('93254291', 'синя сорочка після першого прання втратила колір', 'синя сорочка після першого прання втратила колір, я незадоволений, і хочу повернути вртачені кошти', 'Кенюк Вікторія Володимирівна', 'задоволені', 'Семотюк Михайло Миколайович');


-- 
-- Вывод данных для таблицы ecommerce.discounts
-- 
INSERT INTO ecommerce.discounts VALUES('534354', 'Сорочка Piazza Italia 70082', '150', '2015-12-03', '2015-12-04');
INSERT INTO ecommerce.discounts VALUES('742724', 'Шорти Kelme 78406 M Navy', '270', '2015-10-10', '2015-11-23');
INSERT INTO ecommerce.discounts VALUES('245643', 'Футболка Piazza Italia 69597', '367', '2015-10-20', '2016-01-25');
INSERT INTO ecommerce.discounts VALUES('853834', 'Футболка Mexx H5GST022-101', '179', '2015-03-20', '2016-04-14');
INSERT INTO ecommerce.discounts VALUES('325256', 'Сорочка LTB Crowes 1115-49013-7862/976', '699', '2015-05-10', '2016-07-18');
INSERT INTO ecommerce.discounts VALUES('230863', 'Піджак Petrol Industries PI M-FW13-JA108 985', '1100', '2015-01-20', '2015-01-25');
INSERT INTO ecommerce.discounts VALUES('190093', 'Куртка No Excess NX 178', '3700', '2015-07-23', '2015-08-23');
INSERT INTO ecommerce.discounts VALUES('794093', 'Футболка Jack & Jones 12083150', '137', '2015-10-10', '2015-12-15');


-- 
-- Вывод данных для таблицы ecommerce.managers
-- 
INSERT INTO ecommerce.managers VALUES('Кенюк Вікторія Володимирівна', 'жіноча', 'Україна', 'Вінниця', '6', '09782995431', '37', '10:30-18:30');
INSERT INTO ecommerce.managers VALUES('Клим`юк Олександра Анатоліївна', 'жіноча', 'Україна', 'Луцьк', '1', '09628477440', '32', '12:00-18:00');
INSERT INTO ecommerce.managers VALUES('Мицканюк Василь Іванович', 'чоловіча', 'Україна', 'Львів', '4', '09952469901', '31', '08:00-16:00');
INSERT INTO ecommerce.managers VALUES('Семотюк Михайло Миколайович', 'чоловіча', 'Україна', 'Вінниця', '3', '09487542905', '24', '10:00-18:00');
INSERT INTO ecommerce.managers VALUES('Тесла Анна Григоріївна', 'чоловіча', 'Україна', 'Київ', '4', '09955469901', '29', '08:45-16:45');
INSERT INTO ecommerce.managers VALUES('Федченкова Валентина Тимофіївна', 'чоловіча', 'Україна', 'Вінниця', '9', '09483452905', '34', '11:00-19:00');
INSERT INTO ecommerce.managers VALUES('Шевченко Іван Миколайович', 'чоловіча', 'Україна', 'Хмельницький', '12', '09628477440', '42', '13:00-21:45');


-- 
-- Вывод данных для таблицы ecommerce.orders
-- 
INSERT INTO ecommerce.orders VALUES('252335', 'Білевич Ігор Дмитрович', 'Джинси MR520 MR Ken', 'виконане', '999', 'самовивіз', 'Шевченко Іван Миколайович');
INSERT INTO ecommerce.orders VALUES('432536', 'Мицканюк Василь Іванович', 'Джинси Pepe Jeans Colville', 'нове', '999', 'самовивіз', 'Клим`юк Олександра Анатоліївна');
INSERT INTO ecommerce.orders VALUES('674568347', 'Семотюк Михайло Миколайович', 'Штани Arena Lite 45675-52', 'виконане', '452', 'доставка поштою', 'Кенюк Вікторія Володимирівна');
INSERT INTO ecommerce.orders VALUES('675446', 'Григорів Марина Віталіївна', 'Джинси LTB Hollywood 1009-50089-1776/082', 'нове', '1299', 'доставка кур’єром', 'Тесла Анна Григоріївна');
INSERT INTO ecommerce.orders VALUES('685556677', 'Стівен Гарпер Мартін', 'Джинсы LTB Matt F', 'нове', '799', 'доставка поштою', 'Семотюк Михайло Миколайович');
INSERT INTO ecommerce.orders VALUES('786735', 'Рижков Микита Кирилович', 'Джинсы LTB Matt F', 'нове', '799', 'доставка кур’єром', 'Федченкова Валентина Тимофіївна');
INSERT INTO ecommerce.orders VALUES('875656', 'Миколаєв Василь Петрович', 'Джинси Piazza Italia  р Denim', 'не виконане', '899', 'доставка поштою', 'Тесла Анна Григоріївна');
INSERT INTO ecommerce.orders VALUES('89622447', 'Любачевська Роксолана Любомирівна', 'Майка New Balance MRT5119ACG', 'виконане', '599', 'самовивіз', 'Федченкова Валентина Тимофіївна');


-- 
-- Вывод данных для таблицы ecommerce.products
-- 
INSERT INTO ecommerce.products VALUES('10005 0314', 'Куртка MR520 MR 102  ', 'S', '999', 'коричневий', 'літо', '0', 'Куртки');
INSERT INTO ecommerce.products VALUES('1009-50589-1089/782', 'Джинсы LTB Matt F', '32-36', '799', 'синій', 'літо', '4', 'Джинси');
INSERT INTO ecommerce.products VALUES('12060', 'Куртка MONTANA   Rinse Washed ', 'XXL', '5050', 'темно-синій', 'літо', '0', 'Куртки');
INSERT INTO ecommerce.products VALUES('127 10001 1013 120', 'Джинси MR520 MR Ken', '30-34', '999', 'синій', 'літо', '1', 'Джинси');
INSERT INTO ecommerce.products VALUES('13504-17U57', 'Футболка Promin 1005 56', 'M', '907', 'білий', 'осінь', '0', 'Футболки');
INSERT INTO ecommerce.products VALUES('151786-363', 'Майка G-Star Raw 84342E.6608', 'L', '599', 'сірий', 'літо', '0', 'Майки');
INSERT INTO ecommerce.products VALUES('2070082003044', 'Сорочка Piazza Italia 70082', 'M', '309', 'синій', 'весна', '0', 'Сорочки');
INSERT INTO ecommerce.products VALUES('2070716001071', 'Джинси Piazza Italia  р Denim', '54', '899', 'темно-синій', 'літо', '1', 'Джинси');
INSERT INTO ecommerce.products VALUES('226342-4E737', 'Шорти Kelme 78406 M Navy', 'M', '370', 'чорний', 'літо', '0', 'Шорти');
INSERT INTO ecommerce.products VALUES('2671H435624I847', 'Штани Arena Lite 45675-52', 'S', '452', 'коричневий', 'зима', '1', 'Штани');
INSERT INTO ecommerce.products VALUES('2671H83D-71674', 'Шорти Nike Sweeper Wvn Short 644854-010', 'XL', '1161', 'жовтий', 'літо', '0', 'Шорти');
INSERT INTO ecommerce.products VALUES('2671H83D-734847', 'Шорти Arena Lite 40475-52', 'L', '287', 'зелений', 'літо', '0', 'Шорти');
INSERT INTO ecommerce.products VALUES('2U234634E737', 'Штани G-Star Raw 78406 M Navy', 'M', '295', 'чорний', 'весна', '1', 'Штани');
INSERT INTO ecommerce.products VALUES('328HJG3L144', 'Джинси Pepe Jeans Colt', '32-32', '1199', 'синій', 'зима', '1', 'Джинси');
INSERT INTO ecommerce.products VALUES('342069-597U57', 'Футболка Piazza Italia 69597', 'M', '467', 'чорний', 'осінь', '0', 'Футболки');
INSERT INTO ecommerce.products VALUES('346734H-1757', 'Футболка Nike Racer Ss 644396-496', 'L', '877', 'блакитний', 'осінь', '0', 'Футболки');
INSERT INTO ecommerce.products VALUES('3624547', 'Куртка Alpha Industries Cobbs II M Gun Metal', 'M', '5050', 'темно-сірий', 'зима', '0', 'Куртки');
INSERT INTO ecommerce.products VALUES('4511076', 'Джинси Levi''s 511 Slim Fit Jeans', '33-32', '1599', 'синій', 'літо', '1', 'Джинси');
INSERT INTO ecommerce.products VALUES('469-060-09327323', 'Oodji 3L110103M/19370N/1079F', '43', '1059', 'темно-синій', 'весна', '0', 'Сорочки');
INSERT INTO ecommerce.products VALUES('50740.4639.5056', 'Джинси G-Star Raw', '34-34', '1499', 'синій', 'весна', '1', 'Джинси');
INSERT INTO ecommerce.products VALUES('55854-7U57', 'Футболка Mexx H5GST022-101', 'L', '279', 'синій', 'осінь', '0', 'Футболки');
INSERT INTO ecommerce.products VALUES('61235JNVV', 'Піджак Oodji 2L420029M/21822N/7900N', '50', '199', 'темно-сірий', 'весна', '1', 'Піджаки');
INSERT INTO ecommerce.products VALUES('62016510912', 'Джинси Tom Tailor TT 1052', '31-34', '1499', 'коричневий', 'зима', '1', 'Джинси');
INSERT INTO ecommerce.products VALUES('6363K43D-71674', 'Штани Nike Sweeper Wvn', 'XXL', '1761', 'синій', 'весна', '0', 'Штани');
INSERT INTO ecommerce.products VALUES('6576-234HJV', 'Майка Nike Buzzer Beater 589114-100', 'L', '199', 'білий', 'літо', '1', 'Майки');
INSERT INTO ecommerce.products VALUES('657YB89-634737', 'Футболка Jack & Jones 12083150', 'L', '439', 'білий', 'літо', '0', 'Футболки');
INSERT INTO ecommerce.products VALUES('677301-702', 'Двохстороння куртка Nike Winger Jkt-Loi Reversible', 'L', '750', 'темно-зелений', 'літо', '0', 'Куртки');
INSERT INTO ecommerce.products VALUES('6B150003M/34902N/7000W', 'Джинси Oodji', '29-32', '899', 'голубий', 'літо', '1', 'Джинси');
INSERT INTO ecommerce.products VALUES('70630925', 'Куртка No Excess NX 178', 'XXL', '4199', 'синій', 'весна', '0', 'Куртки');
INSERT INTO ecommerce.products VALUES('786786-363', 'Майка New Balance MRT5119ACG', 'L', '599', 'світло-зелений', 'літо', '1', 'Майки');
INSERT INTO ecommerce.products VALUES('84692G-4E737', 'Футболка LTB Midel 1214-84277-6983/200', 'S', '822', 'чорний', 'весна', '0', 'Футболки');
INSERT INTO ecommerce.products VALUES('8680593032217', 'Куртка Colin''s CL1003798BLK', 'L', '3259', 'чорний', 'зима', '0', 'Куртки');
INSERT INTO ecommerce.products VALUES('8680593317673', 'Піджак Colins CL1011158BLK', 'S', '1929', 'чорний', 'літо', '0', 'Піджаки');
INSERT INTO ecommerce.products VALUES('8680593319264', 'Куртка Colin''s CL1012559BRW', 'M', '750', 'коричневий', 'осінь', '0', 'Куртки');
INSERT INTO ecommerce.products VALUES('86805HDN469208', 'Сорочка LTB Crowes 1115-49013-7862/976', 'XXL', '799', 'рожевий', 'літо', '0', 'Сорочки');
INSERT INTO ecommerce.products VALUES('8680890010918', 'Джинси LTB Hollywood 1009-50089-1776/082', '36-34', '1299', 'темно-синій', 'літо', '1', 'Джинси');
INSERT INTO ecommerce.products VALUES('8688-8321-7673', 'Піджак Tom Tailor TT 39218440011', '48', '1059', 'синій', 'осінь', '0', 'Піджаки');
INSERT INTO ecommerce.products VALUES('8718207959015', 'Куртка Garcia U21917 292', 'XL', '5050', 'темно-синій', 'літо', '0', 'Куртки');
INSERT INTO ecommerce.products VALUES('988-5432L20', 'Штани Alpha Industries  341', 'XL', '745', 'синій', 'осінь', '0', 'Штани');
INSERT INTO ecommerce.products VALUES('98I40-3770', 'Шорти Arena Super-Sport 44809-51', 'XL', '424', 'білий', 'літо', '0', 'Шорти');
INSERT INTO ecommerce.products VALUES('F6343845-235', 'Піджак No Excess NX 70910801 178', 'S', '2499', 'синій', 'літо', '0', 'Піджаки');
INSERT INTO ecommerce.products VALUES('J43013T', 'Куртка Nautica 3MY.XL', 'XL', '2399', 'сірий', 'літо', '1', 'Куртки');
INSERT INTO ecommerce.products VALUES('P2426-222-323', 'Сорочка Nautica W41227T.4IS', 'L', '1780', 'темно-синій', 'весна', '0', 'Сорочки');
INSERT INTO ecommerce.products VALUES('PM200983L144', 'Джинси Pepe Jeans Colville', '34-34', '999', 'синій', 'осінь', '1', 'Джинси');
INSERT INTO ecommerce.products VALUES('R1978642', 'Піджак Petrol Industries PI M-FW13-JA108 985', 'S', '1349', 'сірий', 'весна', '0', 'Піджаки');


-- 
-- Вывод данных для таблицы ecommerce.users
-- 
INSERT INTO ecommerce.users VALUES('Білевич Ігор Дмитрович', 'bilevich', 'чоловіча', 'Україна', 'Вінниця', '20', 'Стахурського 54-12', '09688842465');
INSERT INTO ecommerce.users VALUES('Григорів Марина Віталіївна', 'gringo74', 'жіноча', 'Україна', 'Вінниця', '21', 'Театральна 222-52а', '09787542965');
INSERT INTO ecommerce.users VALUES('Кенюк Вікторія Володимирівна', 'kenny33', 'жіноча', 'Україна', 'Вінниця', '23', 'Хмельницьке шосе 63', '09782992931');
INSERT INTO ecommerce.users VALUES('Клим`юк Олександра Анатоліївна', 'krobobaq', 'жіноча', 'Україна', 'Луцьк', '24', 'Хрещатик 124-52в', '09628842440');
INSERT INTO ecommerce.users VALUES('Любачевська Роксолана Любомирівна', 'roksolana342', 'жіноча', 'Україна', 'Черкаси', '26', 'Болотова 21-22а', '09987542961');
INSERT INTO ecommerce.users VALUES('Миколаєв Василь Петрович', 'mykola22', 'чоловіча', 'Україна', 'Львів', '22', 'Робітнича 21-22', '09987542961');
INSERT INTO ecommerce.users VALUES('Мицканюк Василь Іванович', 'romickreg7712', 'чоловіча', 'Україна', 'Вінниця', '25', 'Хмельницьке шосе 312а', '09182599901');
INSERT INTO ecommerce.users VALUES('Рижков Микита Кирилович', 'rizbat', 'чоловіча', 'Україна', 'Київ', '32', 'Шевченка 23-52', '09687542465');
INSERT INTO ecommerce.users VALUES('Семотюк Михайло Миколайович', 'grimik4', 'чоловіча', 'Україна', 'Вінниця', '28', 'Артоболевського 32-12а', '09487542905');
INSERT INTO ecommerce.users VALUES('Стівен Гарпер Мартін', 'steave54', 'чоловіча', 'Канада', 'Квебек', '29', 'Payment str. 93-32b', '02357657657');
INSERT INTO ecommerce.users VALUES('Фурик Таїсія Романівна', 'furyk', 'жіноча', 'Україна', 'Вінниця', '33', 'Чехова 514-12в', '09688842400');


-- 
-- Вывод данных для таблицы ecommerce.wishes
-- 
-- Таблица не содержит данных

/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;

