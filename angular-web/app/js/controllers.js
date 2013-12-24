'use strict';

/* Controllers */

var visualMgmtControllers = angular.module('visualMgmt.controllers', []).

    controller('BoardController', ['$scope', function($scope) {

        $scope.list1 = {
              title: 'AngularJS - Drag Me',
              backlogDate:new Date(),
              toDoDate:null,
              wipDate:null,
              toDeployDate:null,
              testDate:null,
              doneDate:null
        };
        $scope.list2 = {};
        $scope.fromBackLogToToDo=function(item){
            console.log("goes through here");
            $scope.list2=$scope.list1;
            $scope.list1={};
        }
        $scope.fromToDoToBackLog=function(item){
            $scope.list1=$scope.list2;
            $scope.list2={};
        }
    }]);