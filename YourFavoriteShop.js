var quantity1=0;
$('.quantity1-right-plus').click(function(e){
     
     // Stop acting like a button
     e.preventDefault();
     // Get the field name
     var quantity1 = parseInt($('#quantity1').val());
     
     // If is not undefined
         
         $('#quantity1').val(quantity1 + 1);

       
         // Increment
     
 });
 $('.quantity1-left-minus').click(function(e){
     // Stop acting like a button
     e.preventDefault();
     // Get the field name
     var quantity1 = parseInt($('#quantity1').val());
     
     // If is not undefined
   
         // Increment
         if(quantity1>0){
         $('#quantity1').val(quantity1 - 1);
         }
 });
 var quantity2=0;
 $('.quantity2-right-plus').click(function(e){
     
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity2 = parseInt($('#quantity2').val());
    
    // If is not undefined
        
        $('#quantity2').val(quantity2 + 1);

      
        // Increment
    
});

$('.quantity2-left-minus').click(function(e){
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity2 = parseInt($('#quantity2').val());
    
    // If is not undefined
  
        // Increment
        if(quantity2>0){
        $('#quantity2').val(quantity2 - 1);
        }
});
var quantity3=0;
$('.quantity3-right-plus').click(function(e){
     
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity3 = parseInt($('#quantity3').val());
    
    // If is not undefined
        
        $('#quantity3').val(quantity3 + 1);

      
        // Increment
    
});

$('.quantity3-left-minus').click(function(e){
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity3 = parseInt($('#quantity3').val());
    
    // If is not undefined
  
        // Increment
        if(quantity3>0){
        $('#quantity3').val(quantity3 - 1);
        }
});
var quantity4=0;
$('.quantity4-right-plus').click(function(e){
     
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity4 = parseInt($('#quantity4').val());
    
    // If is not undefined
        
        $('#quantity4').val(quantity4 + 1);

      
        // Increment
    
});

$('.quantity4-left-minus').click(function(e){
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity4 = parseInt($('#quantity4').val());
    
    // If is not undefined
  
        // Increment
        if(quantity4>0){
        $('#quantity4').val(quantity4 - 1);
        }
});
var quantity5=0;
$('.quantity5-right-plus').click(function(e){
     
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity5 = parseInt($('#quantity5').val());
    
    // If is not undefined
        
        $('#quantity5').val(quantity5 + 1);

      
        // Increment
    
});

$('.quantity5-left-minus').click(function(e){
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity5 = parseInt($('#quantity5').val());
    
    // If is not undefined
  
        // Increment
        if(quantity5>0){
        $('#quantity5').val(quantity5 - 1);
        }
});