// Fetch request
(function() {
	var url = "http://starlord.hackerearth.com/hackernews";
	
	fetch(url).then(function(response) {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return(response.json());
	}).then(function(response) {
		updateUISuccess(response);
	}).catch(function() {
		updateUIError();
	});

	// handle XHR success
	function updateUISuccess(response) {
		//var response1 = JSON.parse(response);
		var i;
	
		for(i = 1; i < response.length; i++){
			var ul=document.createElement('div');
		ul.setAttribute("style", "padding:30px;color:blue;");
			var title = response[i].title;
			var li=document.createElement('h1');
			li.setAttribute("style", "color: red")
				li.innerHTML= title;
                ul.appendChild(li);
			var	id = response[i].id;
			 var li=document.createElement('p');
				li.innerHTML= id;
                ul.appendChild(li);
			 
			var url =  response[i].url;
			var li=document.createElement('a');
				li.innerHTML= url;
                ul.appendChild(li); 
			var num_points = response[i].num_points;
			var li=document.createElement('p');
				li.innerHTML= num_points;
                ul.appendChild(li); 
			var author = response[i].author;
			var li=document.createElement('p');
				li.innerHTML= author;
                ul.appendChild(li); 
			var created_at = response[i].created_at;
			var li=document.createElement('p');
				li.innerHTML= created_at;
                ul.appendChild(li); 
			var element = document.getElementById("div1");
			element.appendChild(ul);
		
			
		
		}
	
  
	}

	// handle XHR error
	function updateUIError() {
	
		console.log('error is there');
	}
})();
