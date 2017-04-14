totemikaSiteApp.directive("tsContent", function(){
    return {
        bindToController: {
            selectedTab: '='
        },
        controller: 'contentController',
        replace: true,
        templateUrl: function(elem, attr) { return "components/content/content.template.html"; }
    }
});

