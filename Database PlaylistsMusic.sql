CREATE DATABASE PlaylistsMusic;

USE DATABASE playlistsMusic;

CREATE TABLE Track (
    id INT PRIMARY KEY AUTO_INCREMENT,
    playlist_id INT(11) NOT NULL,
    title VARCHAR(128) NOT NULL,
    artist VARCHAR(128) NOT NULL,
    album_picture VARCHAR(256),
    youtube_url VARCHAR(128));

    CREATE TABLE Playlist ( 
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(128) NOT NULL, 
        genre VARCHAR(128));
    

    -- accord des droits utilisateurs :

    GRANT ALL PRIVILIGES ON playlistMusic.* TO 'user@localhost';
    FLUSH PRIVILEGES;

    -- accord droits specifiques : 
    GRANT CREATE, SELECT, INSERT, UPDATE, DELETE, DROP ON playlistMusic TO 'user@localhost'; 

