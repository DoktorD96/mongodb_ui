function ytexecute(key, param) {
    var api_key = 'AIzaSyBNvnwbmCpzr4Y_bqdz8MgpfBeHxn0xfj4';
    if (key == "user") {
        var params = `https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${param}&key=${api_key}`;
    } else if (key == "channel") {
        var params = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${param}&key=${api_key}`;
    }

    return new Promise(function (resolve) {

        $.ajax({
            type: "GET",
            url: params,
            dataType: "json",
            success: function (data) {
                try{
                    if(data!= null && data.items != null
                    && data.items.length != null
                    ){}else{
                        resolve([false, "Couldn't find profile"]);
                        return false;
                    }
                    if (parseInt(data.items.length) == 0){
                        resolve([false, "Couldn't find profile"]);
                        return false;
                    }else if(!(data.items[0] != null && data.items[0].snippet != null
                    && data.items[0].snippet.thumbnails != null
                    && data.items[0].snippet.thumbnails.default != null
                    && data.items[0].snippet.thumbnails.default.url != null
                    && data.items[0].snippet.thumbnails.default.url != ""
                    && data.items[0].snippet.thumbnails.default.url.trim() != "")){
                        resolve([false, "Couldn't find profile"]);
                        return false;
                    }else{
                        var imgurl = data.items[0].snippet.thumbnails.default.url;
                        resolve([true, imgurl]);
                        return false;
                }
                }catch(e){
                    resolve([false, "Couldn't find profile"]);
                    return false;
                }
            },
            error: function (err){
                resolve([false, "Execute error:" + err]);
            }
        });
    });

}
