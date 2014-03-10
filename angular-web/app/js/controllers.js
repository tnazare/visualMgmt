'use strict';

/* Controllers */

var visualMgmtControllers = angular.module('visualMgmt.controllers', []).

    controller('BoardController', ['$scope', function($scope) {
        $scope. moveItemFromAColumnToAnother = function(item,taskList,destinationColumnId){
            if(item !== undefined && taskList.length > 0){
                if(destinationColumnId === 2){
                    item._toDoDate = new Date();
                }
                else if(destinationColumnId === 3){
                    item._wipDate= new Date();
                }
                else{
                    item._backlogDate = new Date();
                }
                item._currentColumn = destinationColumnId;
            }
        };
        $scope.taskList = [{ _id: 1,
                            _title: "Task0001",
                            _currentColumn: 1,
                            _isInColumn: function(columnId){
                                return this._currentColumn === columnId;
                            }
                         },
                         {   _id: 2,
                             _title: "Task0002",
                             _currentColumn: 2,
                             _isInColumn: function(columnId){
                                 return this._currentColumn === columnId;
                             }
                         }];
        $scope.columnList = [{_id: 1,
                              _title: "Backlog",
                              _prev: null,
                              _next: 2},
                             {_id: 2,
                               _title: "To Do",
                               _prev: 1,
                               _next: 3},
                              {_id: 3,
                               _title: "Work In Progress",
                               _prev: 2,
                               _next: 4},
                              {_id: 4,
                               _title: "Test",
                               _prev: 3,
                               _next: 5},
                              {_id: 5,
                               _title: "Done",
                               _prev: 4,
                               _next: null},]
    }]);