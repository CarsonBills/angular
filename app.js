angular.module("app", ["ui.router"])
				.controller("FirstCtrl", function FirstCtrl(){
					var first = this;

					first.greeting = "First"
				})