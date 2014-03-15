'use strict';

/* Controllers */

var visualMgmtControllers = angular.module('visualMgmt.controllers', []).

    controller('BoardController', ['$scope' , '$http', function($scope, $http) {
        $scope.moveItemFromAColumnToAnother = function(item,destinationColumnId){
            item._events.push({ "_destination":destinationColumnId,
                                "timestamp":new Date()});
            item._currentColumn = destinationColumnId;
            console.log(item);
        };
        $scope.taskList = null;
        $http.get('js/data/tasks/defaulttasks.json')
            .success(function(data,status,header,config) {
                $scope.taskList = data;
            })
            .error(function(data,status,header,config) {
               console.log(status);
            })  ;
        $scope.columnList = null;
        $http.get('js/data/columns/defaultcolumns.json')
            .success(function(data) {
                $scope.columnList = data;
            });
        $scope.isInColumn = function(task,column){
            return task._currentColumn === column._id;
        }
    }]);

