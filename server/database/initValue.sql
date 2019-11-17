BEGIN;

    INSERT INTO users
        (name, email,password,color,img)
    VALUES
        ('yousef qwasmeh', '151037@ppu.edu.ps', '0', '#ccc', ''),
        ('munir', '121050@ppu.edu.ps', '123456', '#ff0', 'my address');


    INSERT INTO messages
        (user_id,description)
    VALUES
        (1, '0'),
        (2, '1'),
        (1, '0000000')
    ;

    COMMIT;