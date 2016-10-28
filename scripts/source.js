(function (angular) {
    'use strict';
    angular.module('controllerToDoList', [])
        .controller('SettingsController', ['$scope', SettingsController]);

    function SettingsController($scope) {
        var localTasks = JSON.parse(localStorage.getItem("LuzzedroToDoListTasks"));
        this.tasks = localTasks === null ? [] : localTasks;
        this.newContent = SettingsController.newContent;
        console.log(this.tasks);
    }
    SettingsController.prototype.isTasks = function () {
        return this.tasks.length > 0 ? true : false;
    }
    SettingsController.prototype.synchronizeData = function () {
        localStorage.setItem("LuzzedroToDoListTasks", JSON.stringify(this.tasks));
    }

    SettingsController.prototype.addTask = function () {
        this.tasks.push({ content: this.newContent, label: '', status: '' });
        this.synchronizeData();
    };

    SettingsController.prototype.removeTask = function (taskToRemove) {
        var index = this.tasks.indexOf(taskToRemove);
        this.tasks.splice(index, 1);
        this.synchronizeData();
    };

    SettingsController.prototype.clearTask = function (task) {
        task.label = '';
        task.disabled = true;
        task.isDone = true;
        this.synchronizeData();
    };
})(window.angular);