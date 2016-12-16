(function() {
  'use strict';

  angular.module('upcomingStops.event')
    .filter('distance', eventDistanceFilterFactory);

  eventDistanceFilterFactory.$inject = [];

  function eventDistanceFilterFactory() {

    function distanceFilter(distance, fromUnit, toUnit) {
      distance = Number(distance);
      if (isNaN(distance) || distance < 0) {
        console.log("Distance is not a positive number.");
        return;
      }

      var coef = {
       'm': {
         'm' : 1,
         'km': 0.001
        },
       'km': {
         'm' : 1000,
         'km': 1
        }
      };

      if (!(fromUnit in coef)) {
        fromUnit = 'km';
      }
      if (!(toUnit in coef)) {
        toUnit = 'km';
      }

      distance *= coef[fromUnit][toUnit];

      if (toUnit == 'm') {
        distance = roundTo(5, distance);
      } else {
        distance = distance.toFixed(2);
      }

      return distance + toUnit;
    }

    function roundTo(mod, number) {
      var remainder = number % mod;
      if (remainder >= 0 && remainder < mod/2 ) {
        number -= remainder;
      } else {
        number += mod - remainder;
      }
      return number;
    }

    return distanceFilter;
  }

})();
