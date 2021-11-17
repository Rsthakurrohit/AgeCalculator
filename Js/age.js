function age() {  
    var d1 = document.getElementById('date').value;  
    var m1 = document.getElementById('month').value;  
    var y1 = document.getElementById('year').value;  
    var date = new Date();  
    var d2 = date.getDate();  
    var m2 = 1 + date.getMonth();  
    var y2 = date.getFullYear();  
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  
    if(d1 > d2){  
     d2 = d2 + month[m2 - 1];  
     m2 = m2 - 1;  
    }  
    if(m1 > m2){  
     m2 = m2 + 12;  
     y2 = y2 - 1;  
    }  
    var d = d2 - d1;  
    var m = m2 - m1;  
    var y = y2 - y1;
      
    if (d1 > 1 && d1 < 32 && m1 > 1 && m1 < 13 && y1 > 0001 && y1 <= y2) {
    
        if (d == 0 && m == 0) {
            document.getElementById("age").innerHTML =
            "Happy Birthday you are " + y + " year old";
        } else {
            document.getElementById("age").innerHTML =
            "Your Age is " + y + " Years " + m + " Months " + d + " Days";
        }
    }
    else {
        alert("Please enter correct date");
    }
  } 
