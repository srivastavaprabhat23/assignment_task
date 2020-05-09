
  $(function() {
 
   $("#a").click(function(){
      
	  showlollipop();
	 document.getElementById("demo1").style.color = "#2980b9";
         });
     $("#b").click(function(){
      document.getElementById("demo2").style.color = "#2980b9";
	  showicecandy();
	
         });	
      $("#c").click(function(){
      document.getElementById("demo3").style.color = "#2980b9";
	  showsaving();
	
         });

    });
      function  showlollipop()
     {
	 
        $("#div1").show();
     }    
	  function  showicecandy()
     {
        $("#div2").show();
     }   
       function  showsaving()
     {
        $("#div3").show();
     } 
        
		
  
/*------------Monthly Billing for Lollipop------------*/
 $("li").click(function ()
{   
    var a = $(this).attr("value");  
   $("#LMonthly").click(function ()
{       
   
   var b = 1*100*1;
   var c = a*b;
   alert("Your monthly billing for Lollipop"+c);
  
});
});
/*------------Annually Billing for Lollipop------------*/
$("li").click(function ()
{   
   var a = $(this).attr("value");    
   $("#LAnnually").click(function ()
{       
   
   var b = 100*12*0.5*0.5;
   var c = a*b;
   alert("Your annually Billing for Lollipop"+c);
  
});
});

/*---------IceCandy billing for Monthly-----------*/

$("li").click(function ()
{   
   var a = $(this).attr("value");  
   $("#IMonthly").click(function ()
{       
   
   var b = 200*2*1;
   var c = a*b;
   alert("Your Monthly Billing for IceCandy"+c);
  
});
});
/*---------IceCandy billing for Annually-----------*/
$("li").click(function ()
{   
    var a = $(this).attr("value");   
   $("#IAnnually").click(function ()
{       
  
   var b = 200*1*12*0.5;
   var c = a*b;
   alert("Your Annually Billing for IceCandy"+c);
  
});
});

/*----------Your Savinng with Lollipop--------------*/
/* difference b/w icecandy and lollipop for Annually*/
$("li").click(function ()
{   
    var a = $(this).attr("value");   
   $("#SAnnually").click(function ()
{       
  
   var b = 200*1*12*0.5;
   var c = a*b;
   var z = 100*0.5*0.5*12;
   var y = a*z;
   var x = c-y;
   alert("Your Saving with Lollipop Annually"+x);
});
   
});


/*----------Your Savinng with Lollipop--------------*/
/* difference b/w icecandy and lollipop for monthly*/
$("li").click(function ()
{   
    var a = $(this).attr("value");   
   $("#SMonthly").click(function ()
{       
  
   var b = 200*2*1;
   var c = a*b;
   var z = 100*1*1;
   var y = a*z;
   var x = c-y;
   alert("Your saving with Lollipop Monthly"+x);
});
   
});


