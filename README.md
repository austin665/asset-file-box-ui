# Asset Browser UI

Simple implementation of an asset browser file box UI based on the design(mockup.jpg) into a webpage using HTML, CSS and JavaScript. 

The JSON file(data.json) contains the data and is used to display its contents in the DOM based on:  
	1. when the page loads, an Ajax request is made to get the contents from data.json  
    2. only displays items where "is_published” = true  
	  3. the first letter of each word for the title should be capitalized  
  4. Clicking the "AZ" font icon should toggle between sorting in ascending and descending order by title.  


Mockup:
![Mockup](https://github.com/austin665/asset-file-box-ui/blob/master/mockup.jpg "Mockup")
