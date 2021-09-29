$(document).ready(() => {

    $("#imageCollapse").click(() => {
        $("#imageCollapse").toggleClass("flip");
        $(".mainQuestion").toggleClass("mainText");
        });

        $(".firstQuestion").click(() => {
            $("#imageCollapse").toggleClass("flip");
            $(".mainQuestion").toggleClass("mainText");
            });

    $("#imageCollapse2").click(() => {
        $("#imageCollapse2").toggleClass("flip");
         $(".mainQuestion2").toggleClass("mainText");
         });

         $(".secondQuestion").click(() => {
            $("#imageCollapse2").toggleClass("flip");
             $(".mainQuestion2").toggleClass("mainText");
             });

        $("#imageCollapse3").click(() => {
             $("#imageCollapse3").toggleClass("flip");
             $(".mainQuestion3").toggleClass("mainText");
             });

             $(".thridQuestion").click(() => {
                $("#imageCollapse3").toggleClass("flip");
                $(".mainQuestion3").toggleClass("mainText");
                });
   

             $("#imageCollapse4").click(() => {
                 $("#imageCollapse4").toggleClass("flip");
                $(".mainQuestion4").toggleClass("mainText");
                });

                $(".fourthQuestion").click(() => {
                    $("#imageCollapse4").toggleClass("flip");
                   $(".mainQuestion4").toggleClass("mainText");
                   });

                $("#imageCollapse5").click(() => {
                    $("#imageCollapse5").toggleClass("flip");
                   $(".mainQuestion5").toggleClass("mainText");
                   });

                   $(".fifthQuestion").click(() => {
                    $("#imageCollapse5").toggleClass("flip");
                   $(".mainQuestion5").toggleClass("mainText");
                   });
});