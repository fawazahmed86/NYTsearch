function createQueryString(){
   
  var searchTerm = $("").val;
  var limits = 5;
  var startYear = 2015;
  var endYear = 2017;
  var term;
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=9e1ca6cd775e49ebac13fb7d8b7e21d2";
  runquery(queryURL)
 }

function runquery(queryURL) {
  //This function is creating an ajax call which calls the New York Times API
  
  $.ajax ({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

      console.log(response);
      console.log(response.response.docs);
      
      //create the code to render to page
      parseInfo(response)
     
  })
}
function parseInfo(details){
//This function is extracing specif headline and information from runquery.

  var results = {
    headline: '',
    articleURL: '',
    author: '',
    section: '',
    date: '',
  }
  var begin = details.response.docs;
  //this variable shortens the specifc path for each element which need to grab from fucntion response.

  for ( var i = 0; i < begin.length; i++) {
    results.headline = begin[i].headline;
    results.articleURL = begin[i].web_url;
    results.section = begin[i].section_name;
    results.date = begin[i].pub_date;
  }
  console.log(results); 
}
function renderHtml(response) {
  //I will iterate through the response and creat the html needed with varibales intereted 
}
createQueryString()