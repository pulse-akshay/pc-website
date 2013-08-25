//This file is to manage the activit on the navigation bar
var activeNavLink = "home";
var activate = {
    
    
    turnActive: function(){

        return function(){
        
        //based on the event type set active or inactive
        if (arguments[0].type == "click" || arguments[0].type == "mouseenter") {
            //First find out which is active and deactivate it
            $(this).parents().find(".active").removeClass("active");
        
            //Now set the caller to active
            $(this).parent().addClass("active");
            
            if (arguments[0].type == "click") {

                    activeNavLink = $(this).attr("id");
                }
            
            }
            
        if (arguments[0].type == "mouseout" ) {

            if (activeNavLink != $(this).attr("id") ){
                
                $("a[id="+ activeNavLink + "    ]").parent().addClass("active");
                
                //Now set the caller to inactive
                $(this).parent().removeClass("active");
                
            }
        
        }
        
        };
    },
};

//bind the function
$("#home,#benefits,#solutions,#works,#about,#contact").on("click mouseenter mouseout",activate.turnActive());

