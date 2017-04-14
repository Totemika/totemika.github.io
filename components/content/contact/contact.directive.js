totemikaSiteApp.directive("tsContact", function(){
    return {
        replace: true,
        templateUrl: function(elem, attr) { return "components/content/contact/contact.template.html"; }
    }
});
