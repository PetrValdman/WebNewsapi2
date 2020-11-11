const axios = require('axios');

 window.onload = function() {
    axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-11&sortBy=publishedAt&apiKey=ee0765c8e66c460aa120a123860d453c')
        .then((res) => {
            const data = res.data;
            for(let value of data.articles) {
                document.write("<div>" + value.title + "</div>");
            }
        });
} 
// http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-16&sortBy=publishedAt&apiKey=ee0765c8e66c460aa120a123860d453c