<style type="text/css">
@keyframes nodeInserted { 
 from { opacity: 0.99; }
 to { opacity: 1; } 
}
  
  .customization2_booker-state_edit{
 animation-duration: 0.001s;
 animation-name: nodeInserted;
}
</style>



 function handler(){
     //Hide Position im Unternehmen and Funktion im Unternehmen
     $('.customization2_attendee_further-data_custom-question-5').css("display","none")
     $('.customization2_attendee_further-data_custom-question-7').css("display","none")

    
     var ddPosition = $('.customization2_attendee_further-data_custom-question-4 .customization2_attendee_further-data_custom-question_dropdown')
    
     ddPosition.change(function(){
       	var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-5').css("display","block")
        }
        else {                
            $('.customization2_attendee_further-data_custom-question-5').css("display","none")
        }
     }
         
                       
     var ddFunktion = $('.customization2_attendee_further-data_custom-question-6 .customization2_attendee_further-data_custom-question_dropdown')

                       
     ddFunktion.change(function(){
       	var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
            $('.customization2_attendee_further-data_custom-question-7').css("display","block")
        }
        else {                
            $('.customization2_attendee_further-data_custom-question-7').css("display","none")
        }
     }
      
 }
  handler();

//document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari

  
