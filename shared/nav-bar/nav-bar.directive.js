totemikaSiteApp.directive("tsNavBar", function(){
   return {
       controller: 'navBarController',
       bindToController: {
         activeTab: '='
       },
       replace: true,
       templateUrl: function(elem, attr) { return "shared/nav-bar/nav-bar.template.html"; }
   } 
});
