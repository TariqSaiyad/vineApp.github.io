
var app = angular.module('vinesApp', []);

//functions
app.controller('mainController',function($scope, $http, $timeout){
	//create variables here
	$scope.currentUser = "";
	$scope.userType = "";
	//ng show variables
	$scope.index=true;
	$scope.menuPage=false;
	$scope.vinePage =false;

	
	$scope.getAll = function(){
		//Get the vine list
		$scope.vineList = 'https://api.myjson.com/bins/d71la';
		$http.get($scope.vineList)
		.then(function successCall(response){
			//Create array of vine objects
			$scope.vineData = response.data.vines;
			//$scope.feedBack = "Vines - ";
		}, 	function errorCall(){
			//$scope.feedBack = "not working";
		}	
				);
	}
	
	
	$scope.getAll();
	//Login function
	$scope.loginFunction=function(){
		//$scope.vinePage=true; 
		$scope.menuPage=true;
		$scope.login=false;
	
	};

	
	
	
	//used to populate a list of assignments for a specific course
	//Used in the dropdown menu when selecting an assignment
	$scope.populateAssignments=function(){
		$scope.populatedAssignmentList=[];
		for(var i=0;i < $scope.assignmentData.length;i++){
			if($scope.courseForAssignment.ID == $scope.assignmentData[i].CourseID){
				$scope.populatedAssignmentList.push($scope.assignmentData[i]);
			}
		}
		$timeout(function () {
			$('select').formSelect();
		});

	};
	

	//Cancel all login input
	$scope.cancelLogin=function(){
		//$scope.currentUserID = null;
		$scope.userName =null;
		$scope.password =null;
		$scope.type=null;
	};
	
	
	//Sets everything to null to logout
	$scope.logout=function(){
		$scope.cancelLogin();
		$scope.cancelCreateAssignment();
		$scope.cancelCreateCourse();
		$scope.cancelCreateAssignment();
		$scope.coursesToAdd = [];
		$scope.populatedAssignmentList=[];
		$scope.studentCourseList = [];
		$scope.lecturerCourseList = [];
		$scope.currentUserID = null;
		$scope.currentUserLoginName = null;
		$scope.currentUserType = null;
		$scope.menuPage=false;
		$scope.vinePage=false;
		$scope.index=true;
	};

	
	
});
