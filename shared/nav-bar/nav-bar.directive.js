totemikaSiteApp.directive("tsNavBar", function(){
   return {
       replace: true,
       templateUrl: function(elem, attr) { return "shared/nav-bar/nav-bar.template.html"; }
   } 
});
