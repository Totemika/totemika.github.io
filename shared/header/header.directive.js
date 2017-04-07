totemikaSiteApp.directive("tsHeader", function(){
   return {
       replace: true,
       controller: 'tsHeaderController',
       templateUrl: function(elem, attr) { return "shared/header/header.template.html"; }
   } 
});
