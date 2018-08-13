CREATE DEFINER=`root`@`localhost` PROCEDURE `employeeAddOrEdit`(
	in _id int,
    in _name varchar(45),
    in _salary int
)
BEGIN
	IF _id = 0 then
		insert into employees (name, salary)
        values (_name, _salary);
		set _id = LAST_INSERT_ID();
    ELSE
		update employees
        set
		name = _name,
		salary = _salary
		where id = _id;
	END IF;
    
    select _id as id;
END