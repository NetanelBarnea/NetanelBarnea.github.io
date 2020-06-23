function usefetch(aurl,func) {  
      
        fetch(aurl)
          .then(function (res) {
              console.log(res);
            return res.json();
          })
            .then(function (data) {
               
                func(data);

          })
        
      }
      function calender(data){
    const resultDiv = document.querySelector(".result");
    var obj = data;

                console.log(obj); 
      }

      usefetch( "https://api.thecatapi.com/v1/images/search",calender);