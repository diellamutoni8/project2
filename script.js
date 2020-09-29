


    function getName(){
      var dd = document.forms["ghanianForm"]["days"].value;
      var mm = document.forms["ghanianForm"]["months"].value;
      var y = document.forms["ghanianForm"]["years"].value;
      var cc =parseInt(y.slice(0,2));
      var yy = parseInt(y.slice(2,4));
      var g = document.forms["ghanianForm"]["gender"].value;
      var d = Math.floor(Math.abs( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7));
      var maleArray=[ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
      var femaleArray=[" Akosua"," Adwoa","Abenaa","Akua","Yaa","Afua"," Ama"];
          for (i = 0; i < maleArray.length; i++) {
              if(d==i && g=="male"){
                  return (document.getElementById("number").innerHTML="Your Ghanian name is " +maleArray[d]+"!");
              }
          }
          for (i = 0; i < femaleArray.length; i++){
              if(d==i && g=="female"){
                  return (document.getElementById("number").innerHTML="Your Ghanian name is " +femaleArray[d]+"!");
              }
          }
        }
    
  