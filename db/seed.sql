USE cms;

-- 1
INSERT into department (name) VALUES ("Sales");
-- 2
INSERT into department (name) VALUES ("Engineering");
-- 3
INSERT into department (name) VALUES ("Finance");
-- 4
INSERT into department (name) VALUES ("Legal");


-- 1
INSERT into roles (title, salary, department_id) VALUES ("Sales Lead", 100000, 1);
-- 2
INSERT into roles (title, salary, department_id) VALUES ("Salesperson", 50000, 1);
-- 3
INSERT into roles (title, salary, department_id) VALUES ("Lead Engineer", 100000, 2);
-- 4
INSERT into roles (title, salary, department_id) VALUES ("Software Engineer", 900000, 2);
-- 5
INSERT into roles (title, salary, department_id) VALUES ("Accountant", 100000, 3);
-- 6
INSERT into roles (title, salary, department_id) VALUES ("Legal Team Lead", 30000, 4);
-- 7
INSERT into roles (title, salary, department_id) VALUES ("Lawyer", 30000, 4);


-- Employees

-- SALES
-- Sales Lead 
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("Billy", "Preston", 1, null);
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("Dolly", "Parton", 2, 3);
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("David", "Bowie", 2, 3);
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("Robert", "Smith", 2, 3);


-- Engineering
-- Lead Engineer
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("Paul", "McCartney", 3, null);
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("John", "Lennon", 4, 3);
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("George", "Harrison", 4, 3);


-- Finance
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("Action", "Bronson", 5, null);
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("Mac", "Miller", 5, 3);


-- Legal
-- Legal Team Lead
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("Al", "Green", 6, null);
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("David", "Bowie", 7, 3);
INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("Robert", "Smith", 7, 3);
