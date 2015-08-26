angular.module("app", ["ui.router"])
				.config(function config($stateProvider){
					$stateProvider.state("index", {
						url: "",
						controller: "FirstCtrl as first",
						templateUrl: "templates/first.html"
					})
					$stateProvider.state("second", {
						url: "/second",
						controller: "SecondCtrl as second",
						templateUrl: "templates/second.html"
					})
					$stateProvider.state("third", {
						url: "/third",
						controller: "ThirdCtrl as third",
						templateUrl: "templates/third.html"
					})
					$stateProvider.state("superman", {
						url: "/superman",
						controller: "SupermanCtrl as super",
						templateUrl: "templates/superman.html"
					})
					$stateProvider.state("mouse", {
						url: "/mouse",
						templateUrl: "templates/mouse.html"
					})
					$stateProvider.state("isolate", {
						url: "/isolate",
						templateUrl: "templates/isolate.html"
					})
					$stateProvider.state("zippy", {
						url: "/zippy",
						templateUrl: "templates/zippy.html"
					})
				})

				.filter("reverse", function (){
					return function(text){
						return text.split("").reverse().join("");
					}
				})

				.service("greeting", function Greeting(){
					var greeting = this;

					greeting.message = "Default";
				})

				.controller("FirstCtrl", function FirstCtrl(greeting){
					var first = this;

					first.greeting = greeting
				})

				.controller("SecondCtrl", function SecondCtrl(greeting){
					var second = this;

					second.greeting = greeting
				})

				.factory('Avengers', function() {
    			var Avengers = {};
    			Avengers.cast = [
			      {
			        name: "Robert Downey Jr.",
			        character: "Tony Stark / Iron Man"
			      },
			      {
			        name: "Chris Evans",
			        character: "Steve Rogers / Captain America"
			      },
			      {
			        name: "Mark Ruffalo",
			        character: "Bruce Banner / The Hulk"
			      },
			      {
			        name: "Chris Hemsworth",
			        character: "Thor"
			      },
			      {
			        name: "Scarlett Johansson",
			        character: "Natasha Romanoff / Black Widow"
			      },
			      {
			        name: "Jeremy Renner",
			        character: "Clint Barton / Hawkeye"
			      },
			      {
			        name: "Tom Hiddleston",
			        character: "Loki"
			      },
			      {
			        name: "Clark Gregg",
			        character: "Agent Phil Coulson"
			      },
			      {
			        name: "Cobie Smulders",
			        character: "Agent Maria Hill"
			      },
			      {
			        name: "Stellan Skarsgard",
			        character: "Selvig"
			      },
			      {
			        name: "Samuel L. Jackson",
			        character: "Nick Fury"
			      },
			      {
			        name: "Gwyneth Paltrow",
			        character: "Pepper Potts"
			      },
			      {
			        name: "Paul Bettany",
			        character: "Jarvis (voice)"
			      },
			      {
			        name: "Alexis Denisof",
			        character: "The Other"
			      },
			      {
			        name: "Tina Benko",
			        character: "NASA Scientist"
			      }
    			];
    		return Avengers;
    		})

				.controller("ThirdCtrl", function ThirdCtrl($scope, Avengers){
					$scope.avengers = Avengers;
				})

				.controller("SupermanCtrl", function SupermanCtrl(){
					var data = this;
					data.message = "Bleep";
				})

				.controller("ChoreCtrl", function ChoreCtrl($scope){
					$scope.logChore = function (chore) {
						alert(chore + "is done!");
					}
				})

				.directive("notherDirective", function (){
					return function (scope, element, attrs) {
						element.text(scope.super.message + " " + attrs.message);
					}
				})


				.directive("superman", function (){
					return {
						restrict: "E",
						template: "<div>Here I am to save the day!</div>"
					}
				})

				.directive("enter", function(){
					return function (scope, element) {
						element.bind("mouseenter", function(){
							element.css({"background-color": "red"});
						})
					}
				})
				.directive("leave", function(){
					return function (scope, element) {
						element.bind("mouseleave", function(){
							element.css({"background-color": "white"});
						})
					}
				})

				.directive("isolate", function(){
					return {
						restrict: "E",
						scope: {
							done:"&"
						},
						template: "<input type='text' ng-model='chore'> <div>{{chore}}</div> <div ng-click='done({chore:chore})'> I am done</div>"
					}
				})

				.directive("zippy", function(){
					return {
						restrict: "E",
						transclude: true,
						scope: {
							title:"@"
						},
						templateUrl: "zippytemp.html",
						link: function(scope) {
							scope.isContentVisible = false;
							scope.toggleContent = function (){
								scope.isContentVisible = !scope.isContentVisible;
							}
						}
					}
				})
