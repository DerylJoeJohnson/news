$(document).ready(function(){
    $("#1").click(function(){
        $.ajax({
            type:"GET",
            url:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=450a05fe7424410196a07e021d36ac77",
            success:function(data){

                //console.log(data);
                //var output= "  ID </th><th> Name </th><th> Username </th><th> street </th><th> suite </th><th> city </th><th> zipcode </th><th> phone </th><th> website </th><th> company name </th></tr> </thead> ";
                var output=" ";
                for(var i in data['articles'])               {
                    
                    output+="<div class='col col-sm-4 col-4 d-flex align-items-stretch'><div class='card'> <div class='card-header'>"+  data['articles'][i].title+"</div>";
                    output+="<div class='card-body'><img src='"+ data['articles'][i].urlToImage +"'width=''height=''class='card-img-top'><br>";
                    output+="Published on : "+data['articles'][i].publishedAt+"<br>";
                    output+="Description : <br>"+  data['articles'][i].description   +"<br>";
                    output+="<a href='"+data['articles'][i].url+"'>Read More</a><br></div></div></div>";
                    
                }
                
                $("#News").html(output);


            }
        });
    });
});