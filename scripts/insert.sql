insert into dealers(id, email, password, name, description, picture, address, geolocation, phone) values
  ('6400b93e-b568-4fa5-9b72-b9e72d5cd8bc', 'mabaguette@boulangerie.com', '$2a$10$6D.xsEPQbzurGEaJrfOWdOT8Lubsl524SE9u6KqXspHym13qyoNKq', 'Le pain chaud', 'seems cool', 'http://vignette3.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Baguette.png/revision/latest?cb=20121119115824', '2 rue Fénelon, Nantes',  ST_GeographyFromText('SRID=4326;POINT(-1.554045 47.217146)'), '0642243888'),
  ('88f460bc-3938-422d-8202-4796c6445ed5', 'tartoche@gmail.com', '$2a$10$6D.xsEPQbzurGEaJrfOWdOT8Lubsl524SE9u6KqXspHym13qyoNKq', 'La Tartinerie', 'Boulangerie et restauration', 'http://www.justacote.com/photos_entreprises/la-tartinerie-nantes-14171114100.jpg', '12 Place du Pilori, 44000 Nantes, France',  ST_GeographyFromText('SRID=4326;POINT(-1.552998 47.215980)'), '0642243881'),
  ('80ec16f8-e777-49e9-9f6a-1a954311bb1c', 'boucherie@gmail.com', '$2a$10$6D.xsEPQbzurGEaJrfOWdOT8Lubsl524SE9u6KqXspHym13qyoNKq', 'Boucherie du Bouffay', 'Viande et viande', 'http://www.ouest-france.fr/sites/default/files/styles/image-640x360/public/2013/09/30/vendredi-le-voyage-nantes-met-le-couvert-au-bouffay.jpg?itok=GwYvos3H', '3 rue du Bouffay, 44000 Nantes, France',  ST_GeographyFromText('SRID=4326;POINT(-1.554071 47.214814)'), '0642243882');

insert into deals (title, description, start_date, end_date, full_price, promotion, quantity, dealer_id) values
  ('20 pain aux chocolats à 60%', 'bientôt perimé, pas de temps à perdre', '2016-11-16 19:22:11.636125 +01:00', '2016-11-16 23:22:11.636125 +01:00', '2', '0.6', 20, '6400b93e-b568-4fa5-9b72-b9e72d5cd8bc'),
  ('15 big burgers', 'venez vite !', '2016-11-18 17:00:11.636125 +01:00', '2016-11-18 17:00:11.636125 +01:00', '4', '0.3', 15, '88f460bc-3938-422d-8202-4796c6445ed5'),
  ('50 steaks hachés au rabais', 'à voir sur place', '2016-11-19 15:00:11.636125 +01:00', '2016-11-19 20:00:11.636125 +01:00', '1', '0.7', 50, '80ec16f8-e777-49e9-9f6a-1a954311bb1c');

insert into users (id, firstname, lastname, email ,password, geolocation) VALUES
('bd53edd2-0cd4-4c59-aeb7-f6fba8472df6','celya','rousseau', 'crousseau@epsi.fr','$2a$10$6D.xsEPQbzurGEaJrfOWdOT8Lubsl524SE9u6KqXspHym13qyoNKq', ST_GeographyFromText('SRID=4326;POINT(-1.554045 47.217146)'));

insert into ratings(id, note, user_id, dealer_id) VALUES
('ea8914ac-d8b7-4ea5-8e84-8dcc5afd2c11', 4, 'bd53edd2-0cd4-4c59-aeb7-f6fba8472df6','80ec16f8-e777-49e9-9f6a-1a954311bb1c');

