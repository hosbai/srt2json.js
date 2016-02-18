function convertSrt2Json(srtTxt) {

		var lines = srtTxt.split("\n");
		var arr = [];
		var tempObj = {
        	content: ""
    };

		lines.forEach(function(line) {
	        if(!tempObj.id)
	            tempObj.id = line;
	        else if(!tempObj.start) {
	            var timing = line.split(' --> ');
	            tempObj.start = timing[0];
	            tempObj.end = timing[1];
	        } else if(line !== '') {
	        	if (tempObj.content == "") {
	        		tempObj.content = line;
	        	} else{
	        		tempObj.content += "\n" + line;
	        	}
	        } else {
	            arr.push(tempObj);
	            tempObj = {
	                content: ""
	            };
	        }
	    });

	    return JSON.stringify(arr);
	}
	function convertJson2Srt(srtJson){
		var str = "";
		var arr = JSON.parse(srtJson);

		arr.forEach(function(arr){
			str += arr.id + "\n";
			str += arr.start + " --> " + arr.end + "\n";
			str += arr.content + "\n\n";
		});
		return str;
	}
