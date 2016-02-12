
angular.module('myapp', ['firebase'])
    .controller('TodoCtrl', ['$scope', '$firebase',
        function($scope, $firebase) {

            $scope.hidden = false;
            var ref = new Firebase("https://onaclovtech-apps.firebaseio.com/CS_7637/");
            var sync = $firebase(ref);
            $scope.todos = sync.$asObject();
            $scope.leaders = sync.$asArray();
        }
    ]).filter("textFilter", function() {
    return function(input,text) {
      var sorted = [];
      
      if (input) {
        if (!input.$getIndex || typeof input.$getIndex != "function") {
          // input is not an angularFire instance
          if (angular.isArray(input)) {
            // If input is an array, copy it
            sorted = input.slice(0);
          } else if (angular.isObject(input)) {
            // If input is an object, map it to an array
            angular.forEach(input, function(prop) {
              if( text && text.length > 0){
                 if (prop['user'].indexOf(text) > -1){
                    sorted.push(prop);
               }
              }
              else{
                 sorted.push(prop);
              }
            });
          }
        } else {
          // input is an angularFire instance
          var index = input.$getIndex();
          if (index.length > 0) {
            for (var i = 0; i < index.length; i++) {
              var val = input[index[i]];
              if (val) {
                val.$id = index[i];
                
              if( text && text.length > 0 && val.body.indexOf(text) > -1){
                 sorted.push(val);
              }else{
               
                if(!text || text.length === 0 ){
                   sorted.push(val);
                 }
              }
                //
              }
            }
          }
        }
      }
      
      return sorted;
    };
  }).filter("dateFilter", function() {
    return function(input) {
      var sorted = [];
      var obj = {};
      if (input) {
        if (!input.$getIndex || typeof input.$getIndex != "function") {
          // input is not an angularFire instance
          if (angular.isArray(input)) {
            // If input is an array, copy it
            //sorted = input.slice(0);
            
            angular.forEach(input, function(prop) {
              if (prop['user'] in obj){
                 if (obj[prop['user']]['time'] > prop['user']['time']){
                    obj[prop['user']] = prop
                 }
              }
              else
              {
                 obj[prop['user']] = prop
              }
              
            });
            angular.forEach(obj, function(prop) {
              sorted.push(prop);
              
            });
          }
        }
      }
      
      return sorted;
    };
  }).filter("scoreFilter", function() {
    return function(input) {
      var sorted = [];
      var obj = {};
      if (input) {
        if (!input.$getIndex || typeof input.$getIndex != "function") {
          // input is not an angularFire instance
          if (angular.isArray(input)) {
            // If input is an array, copy it
            sorted = input.slice(0);
            
            
            angular.forEach(input, function(prop) {
               console.log(prop);
  //            if (prop['user'] in obj){
    //             if (obj[prop['user']]['time'] > prop['user']['time']){
      //              obj[prop['user']] = prop
        //         }
          //    }
            //  else
            //  {
             //    obj[prop['user']] = prop
             // }
              //console.log(obj);
              
            });
            //angular.forEach(obj, function(prop) {
         //     sorted.push(prop);
          //
          //  });
          }
        }
      }
      
      return sorted;
    };
  });
