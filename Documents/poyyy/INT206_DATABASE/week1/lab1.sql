use classicmodels;

show create table customers ;

show table status 
where Name = 'customers' ;

-- 021
select TABLE_NAME , ENGINE
from information_schema.tables
where TABLE_NAME = 'customers' ;

-- 021
show table status like 'customers' ;

-- 021
show create table customers ;

-- 021
show engines;

-- 021
show variables like '%engine%';


-- 021
create table myproductlines 
as select *
from productlines;


-- 021
alter table myproductlines
engine = MyISAM;

-- 021
show table status like 'myproductlines';


