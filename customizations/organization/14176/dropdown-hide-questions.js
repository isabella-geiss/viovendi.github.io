console.log('dropdown');
function handler(){
  console.log("im Handler")
     //Hide Position im Unternehmen and Funktion im Unternehmen
     
     $('.customization2_attendee_further-data_custom-question-5').css("display","none") //position
     $('.customization2_attendee_further-data_custom-question-7').css("display","none") //Funkton

    
     var ddPosition = $('.customization2_attendee_further-data_custom-question-4 .customization2_attendee_further-data_custom-question_dropdown')
    
     ddPosition.change(function(){
       	var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
         console.log("andere")
            $('.customization2_attendee_further-data_custom-question-5').css("display","block");
        }
        else {    
                  console.log("else")

            $('.customization2_attendee_further-data_custom-question-5').css("display","none");
        }
     }
                      )
         
                       
     var ddFunktion = $('.customization2_attendee_further-data_custom-question-6 .customization2_attendee_further-data_custom-question_dropdown')

                       
     ddFunktion.change(function(){
       	var state = ddPosition.val().replace(/^\s+|\s+$/g, "")
        if ( state == "andere") {
                  console.log("andere")
            $('.customization2_attendee_further-data_custom-question-7').css("display","block")
        }
        else {  
                  console.log("else")

            $('.customization2_attendee_further-data_custom-question-7').css("display","none")
        }
     }
                      )
      */
 }
  handler();
  document.addEventListener("animationstart", insertionListener, false); // standard + firefox
  document.addEventListener("MSAnimationStart", insertionListener, false); // IE
  document.addEventListener("webkitAnimationStart", insertionListener, false); // 

  
