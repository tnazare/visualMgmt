'use strict';

/* Controllers */

var visualMgmtControllers = angular.module('visualMgmt.controllers', []).

    controller('BoardController', ['$scope', function($scope) {
        $scope. moveItemFromAColumnToAnother = function(item,taskList,destinationColumnName){
            if(item !== undefined && taskList.length > 0){
                if(destinationColumnName === "Todo"){
                    item.toDoDate = new Date();
                }
                else{
                    item.backlogDate = new Date();
                }
                item._currentColumn = destinationColumnName;
            }
        };
        $scope.taskList = [{ _id: 1,
                            _title: "Task0001",
                            _currentColumn: "BackLog",
                            _backlogDate: new Date(),
                            _toDoDate: null,
                            _wipDate: null,
                            _toDeployDate: null,
                            _testDate: null,
                            _doneDate: null,
                            _isInColumn: function(columnName){
                                return this._currentColumn === columnName;
                            }
                         },
                         {   _id: 2,
                             _title: "Task0002",
                             _currentColumn: "ToDo",
                             _backlogDate: new Date(),
                             _toDoDate: null,
                             _wipDate: null,
                             _toDeployDate: null,
                             _testDate: null,
                             _doneDate: null,
                             _isInColumn: function(columnName){
                                 return this._currentColumn === columnName;
                             }
                         }];
    }]);