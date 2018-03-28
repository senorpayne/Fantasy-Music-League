DROP DATABASE IF EXISTS fml_db;
CREATE DATABASE fml_db;
USE fml_db;

CREATE TABLE fml_artist (
    artist_id INT(3) auto_increment NOT NULL,
    handle VARCHAR(50) NULL,
    genre VARCHAR(40) NULL,
    image VARCHAR(200) NULL,
    contractCost INT(11) NULL,
    chartPosition INT(40) NULL,
    bio VARCHAR(400) NULL,
    playCount INT(11) NULL,
    listeners INT (11) NULL,
    PRIMARY KEY (artist_id)
);

CREATE TABLE user_artist (
    artist_id INT(3) auto_increment NOT NULL,
    handle VARCHAR(50) NULL,
    genre VARCHAR(40) NULL,
    image VARCHAR(200) NULL,
    contractCost INT(11) NULL,
    chartPosition INT(40) NULL,
    bio VARCHAR(400) NULL,
    playCount INT(11) NULL,
    listeners INT (11) NULL,
    PRIMARY KEY (artist_id)
);

select * from fml_artist;

INSERT INTO 
fml_artist (handle, genre, image, contractCost, chartPosition, bio)

VALUES (
		"Kendrick Lamar", 
		"Hip Hop", 
		"https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2Fcc3160dc13285bbb4e4fc289abf806a4.632x632x1.jpg", 
		100, 7,
		"Damn is the fourth studio album by American rapper Kendrick Lamar. It was released on April 14, 2017, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records."
		),
        (
        "Ed Sheeran",
        "Pop Music",
        "https://images-na.ssl-images-amazon.com/images/I/B1HYJn9MrPS._SY355_.jpg",
        140, 2,
        "÷ is the third studio album by English singer-songwriter Ed Sheeran. It was released on 3 March 2017 through Asylum Records and Atlantic Records. Castle on the Hill and Shape of You were released as the album's lead singles on 6 January 2017."
        ),
        (
        "Coldplay",
        "Alternative/Indie",
        "http://coldplay.com/wp-content/uploads/2017/03/COLDPLAY-HYPNOTISED1000.jpg",
        75, 11,
        "Kaleidoscope EP is the thirteenth EP by British rock band Coldplay. It was released worldwide on 14 July 2017. It serves as a companion piece to Coldplay's seventh studio album, A Head Full of Dreams."
        ),
        (
        "Logic",
        "Hip Hop",
        "https://media.pitchfork.com/photos/5aa6875a8195c0189f134a52/1:1/w_320/Logic:%20Bobby%20Tarantino%20II%20.jpg",
        150, 1,
        "Bobby Tarantino II is the sixth mixtape by American rapper and musician Logic. It was released on March 9, 2018, through Def Jam Recordings and Visionary Music Group."
        ),
         (
        "Drake",
        "Hip Hop",
        "https://t2.genius.com/unsafe/300x0/https%3A%2F%2Fimages.genius.com%2F4672f8523e0fbf7f7848185256e946f4.1000x1000x1.jpg",
        130, 3,
        "More Life is a commercial mixtape by Canadian rapper Drake. The artist describes More Life as a playlist, though some publications have referred to it as a mixtape."
        ),
         (
        "Imagine Dragons",
        "Pop Rock",
        "https://images-na.ssl-images-amazon.com/images/I/41SpDE3PSxL._SY355_.jpg",
        120, 4,
        "Evolve is the third studio album by American rock band Imagine Dragons, released on June 23, 2017 through KIDinaKORNER and Interscope Records. The album is the band's new material follow-up to their second studio album, Smoke + Mirrors."
        ),
         (
        "Bruno Mars",
        "Soul Funk Pop",
        "https://images.genius.com/56d4da82aa62ce39d20e5cc2f3d4fc3f.700x700x1.jpg",
        100, 8,
        "24K Magic is the third studio album by American singer and songwriter Bruno Mars. It was released worldwide on November 18, 2016, by Atlantic Records. The follow-up to Mars's successful second album, Unorthodox Jukebox (2012), it explores genres similar to those of its predecessor, such as soul and funk."
        ),
        (
        "Nipsey Hussle",
        "Hip Hop",
        "http://ihussle.com/images/NIPSEY_DIRTY%20FIN-v1.jpg",
        50, 25,
        "Victory Lap is the debut studio album by American rapper Nipsey Hussle. It was released on February 16, 2018 through All Money In No Money Out and Atlantic Records."
        ),
        (
        "Taylor Swift",
        "Pop",
        "https://store.taylorswift.com/mm5/graphics/00000001/reputation_cd_550x550.jpg",
        50, 4,
        "Reputation is the sixth studio album by American singer-songwriter Taylor Swift. It was released on November 10, 2017, through Big Machine Records."
        )
        

	   
