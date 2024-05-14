-- CARTS TABLE INSERTION
INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES ('a48ea7c5-0076-40a3-8201-def6b1f013fa','508d402c-4bdc-41c6-a5bf-a89101893eba', '2020-01-10', '2024-01-10', 'ORDERED');
INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES ('33f5a32b-3997-489e-a5e9-e72cf4221d0c','a55920f8-a79e-4555-893a-730b0f3e3c44', '2020-02-11', '2024-02-11', 'OPEN');
INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES ('0e3ce676-d6c3-4bb6-aa16-4103e7ae4e5e','4afab92f-12cd-44f9-a4ba-c2a9290aa15c', '2020-03-12', '2024-03-12', 'ORDERED');
INSERT INTO carts (id, user_id, created_at, updated_at, status) VALUES ('0ce953f2-356a-4da3-9203-8915a9a95f60','2e7bd467-c5f0-48ac-8ac1-351703dc89ad', '2020-04-13', '2024-04-13', 'OPEN');

--CART_ITEM INSERTION
INSERT INTO cart_items (cart_id, product_id, count) VALUES ('a48ea7c5-0076-40a3-8201-def6b1f013fa', '99a110e8-67b8-4bac-a58a-3477563d42ba', 1);
INSERT INTO cart_items (cart_id, product_id, count) VALUES ('33f5a32b-3997-489e-a5e9-e72cf4221d0c', 'a63349f6-6d02-4916-90d9-68b3ca45ab3c', 2);
INSERT INTO cart_items (cart_id, product_id, count) VALUES ('0e3ce676-d6c3-4bb6-aa16-4103e7ae4e5e', '39227283-256d-4c6b-80b6-4b329969459c', 3);
INSERT INTO cart_items (cart_id, product_id, count) VALUES ('0ce953f2-356a-4da3-9203-8915a9a95f60', '3688c40c-1e21-476a-9904-824447cb812e', 4);