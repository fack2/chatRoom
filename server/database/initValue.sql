BEGIN;

    INSERT INTO users
        (name, email,password,color,img)
    VALUES
        ('yousef qwasmeh', '151037@ppu.edu.ps', '0', '#ccc', 'https://www.morpht.com/sites/morpht/files/styles/landscape/public/dalibor-matura_1.jpg?itok=gxCAhwAV'),
        ('munir', '121050@ppu.edu.ps', '123456', '#ff0', 'http://i.imgur.com/9UDFck1.jpg');


    INSERT INTO messages
        (user_id,description)
    VALUES
        (1, '0'),
        (2, '1'),
        (1, '0000000')
    ;

    COMMIT;