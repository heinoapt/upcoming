(function() {
'use strict';

angular.module('shared.ucBackground', [])
  .directive('ucBackground', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        attrs.$observe('ucBackground', function(value) {
          element.css({
            'background-image': 'url(' + value +')',
          });
        });
      }
    }
  });
})();
