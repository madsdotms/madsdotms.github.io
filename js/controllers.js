'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MapCtrl', ['$scope', function ($scope) {
    
    var mapStyle = turquoise;

    $scope.myMarkers = [];

    

    $scope.mapOptions = {
      center: new google.maps.LatLng(55.678725, 12.552899),
      zoom: 14,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      styles: mapStyle      
    };

    setTimeout(function(){

    	$scope.myMarkers.push(new google.maps.Marker({
        map: $scope.myMap,
        position: new google.maps.LatLng(55.678725, 12.552899),
        icon: {
	        path: fontawesome.markers.MAP_MARKER,
	        scale: 0.5,
	        strokeWeight: 0.2,
	        strokeColor: 'white',
	        strokeOpacity: 1,
	        fillColor: 'black',
	        fillOpacity: 0.7,
    	}
    }));

    },3000);
    

    $scope.addMarker = function ($event, $params) {
      console.log( $params[0].latLng );
      console.log( new google.maps.LatLng(55.678725, 12.552899) );
      $scope.myMarkers.push(new google.maps.Marker({
        map: $scope.myMap,
        position: $params[0].latLng,
        icon: {
	        path: fontawesome.markers.MAP_MARKER,
	        scale: 0.5,
	        strokeWeight: 0.2,
	        strokeColor: 'white',
	        strokeOpacity: 1,
	        fillColor: 'black',
	        fillOpacity: 0.7,
    	}
      }));
    };


    $scope.setZoomMessage = function (zoom) {
      $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
      console.log(zoom, 'zoomed');
    };

    $scope.openMarkerInfo = function (marker) {
      $scope.currentMarker = marker;
      $scope.currentMarkerLat = marker.getPosition().lat();
      $scope.currentMarkerLng = marker.getPosition().lng();
      $scope.myInfoWindow.open($scope.myMap, marker);
    };

    $scope.setMarkerPosition = function (marker, lat, lng) {
      marker.setPosition(new google.maps.LatLng(lat, lng));
    };

    $scope.centerMe = function () {
      marker.setPosition(new google.maps.LatLng(55.678725, 12.552899));
    };

    
  }])
  .controller('MyCtrl2', [function() {

  }]);


