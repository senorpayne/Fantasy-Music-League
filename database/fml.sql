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
    taken BOOLEAN default false,
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
    taken BOOLEAN default false,
    labelName VARCHAR (30),
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
        ),
        (
        "Big K.R.I.T",
        "Hip Hop",
        "https://media.pitchfork.com/photos/59ef522bb3222c6c648bfe47/1:1/w_320/4eva%20is%20a%20mighty%20long%20time_big%20krit.jpg",
        25, 44,
        "4eva Is a Mighty Long Time is the third studio album by American rapper Big K.R.I.T., released on October 27, 2017, by Multi Alumni and BMG Rights Management. A double album, it is his first full-length release since his departure from Def Jam in 2016."
        ),
        (
        "Post Malone",
        "Contemporary R&B",
        "http://musichubng.com/wp-content/uploads/2017/08/IFWT_PostMalone.jpg",
        25, 13,
        "Stoney is the debut studio album by American rapper Post Malone. It was released on December 9, 2016, by Republic Records. The album features guest appearances from Justin Bieber, Kehlani, Quavo and 2 Chainz."
        ),
        (
        "Maroon 5",
        "Soft Rock",
        "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/e5/23/c0/e523c07b-7bf5-4fa6-e504-b2afe1d20544/UMG_cvrart_00602557631333_01_RGB72_3000x3000_17UM1IM31407.jpg/268x0w.jpg",
        50, 13,
        "Red Pill Blues is the sixth studio album by American pop rock band Maroon 5. It was released on November 3, 2017, by 222 and Interscope Records."
        ),
        (
        "Camila Cabello",
        "Pop",
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Camila_%28Official_Album_Cover%29_by_Camila_Cabello.png/220px-Camila_%28Official_Album_Cover%29_by_Camila_Cabello.png",
        75, 14,
        "Camila is the eponymous debut studio album by Cuban-American singer Camila Cabello. It was released on January 12, 2018, through Epic Records, Syco and Sony Music. Work on the album began in January 2017, following Cabello's departure from Fifth Harmony, with whom she had released two studio albums."
        ),
        ("Selena Gomez",
        "Pop",
        "http://radiocms-images.us1.eldarioncloud.com/resize/750/https://storage.googleapis.com/media.mwcradio.com/mimesis/2017-12/07/tmpZbLtcp.jpg",
        25, 15,
        "Revival is the second studio album by American singer Selena Gomez. It was released on October 9, 2015, by Interscope and Polydor Records. Preparation for the album began in 2014, when Gomez left her previous label Hollywood Records."
        )
        

	   
