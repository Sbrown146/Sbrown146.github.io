Set search_path TO "Xbox_sales";
SHOW search_path;

DROP TABLE IF EXISTS Xbox_360_sales;
CREATE TABLE Xbox_360_sales (
  Month_Year date NOT NULL,
  Sales float NOT NULL
);
SELECT * FROM Xbox_360_sales;
