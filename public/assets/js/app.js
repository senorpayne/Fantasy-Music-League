console.log("CONNECTED!!!");


$(function() {
    $("#update-plays").on("click", function(event) {
		event.preventDefault();
        var key ="0de943ff4d40b8d5a3e3f72ccfc13dd5"
        var url = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=" + key + "&format=json"
      // Send the GET request.

        var artists = {};
        
        $.ajax({
			type: "GET",
			url: url,
            dataType: 'json',
            contentType: 'json',
            headers: { 'api-key': key },
        }).then(function(response) {
    
            console.log(response);
        // console.log(response.artists.artist[0].name);
        // console.log(response.artists.artist[0].playcount);
        // console.log(response.artists.artist[0].listeners);
        // console.log(response.artists.artist[0].url);
            var results = response.artists.artist;
    
            for (var i = 0; i < results.length; i++){ 
    
                artists[results[i].name] = results[i].playcount;
            // console.log(artists);
            
                // console.log(playcount);
                var listeners = results[i].listeners;
            // console.log(listeners);
                var url = results[i].image[2];
             //console.log(url.#text);
                var links = results[i].url;
    
                var img1;
                for (var key in url) {
    
                    if (`url.${key}` ==="url.#text"){
     //console.log(`img1 = ${url[key]}`);
                        img1 = url[key];
    
                    }
     // console.log(`url.${key} = ${url[key]}`);
                }
    
                var image = $("<img>").attr("src", img1);

       }
        

        $.ajax({
            type: "POST",
            url: "/api/artistPlayCount",
            dataType: 'json',
            data: artists
        }).then(function(response) {
            
        });

        $.ajax({
            type: "PUT",
            url: "/api/artistPlayCount",
            dataType: 'json',
            data: artists
        }).then(function(response) {
            
        });
      });

     	
        
	});
});