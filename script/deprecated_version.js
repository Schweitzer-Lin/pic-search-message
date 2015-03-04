(function() {
    google.load("search", "1");
    google.setOnLoadCallback(OnLoad);


    function searchComplete() {

        if (imageSearch.results && imageSearch.results.length > 0) {
            var contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '';
            var results = imageSearch.results;
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                var imgContainer = document.createElement('div');
                var title = document.createElement('div');

                title.innerHTML = result.titleNoFormatting;
                var newImg = document.createElement('img');
                newImg.src = result.url;
                imgContainer.appendChild(title);
                imgContainer.appendChild(newImg);
                contentDiv.appendChild(imgContainer);
            }
            addPaginationLinks(imageSearch);
        }
    }


    function OnLoad() {
        imageSearch = new google.search.ImageSearch();
        imageSearch.setSearchCompleteCallback(this, searchComplete, null);
        imageSearch.execute("");
    }

