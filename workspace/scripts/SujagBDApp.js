var app = angular.module("SujagBDApp",[])

app.controller('mainController', function($scope){
	
	//list of all the donors
	donors = [];	
	
	//a datastructure for each newDonor
	newDonor = {donorName:'',donorDivision:'',donationDate:''};
	
	//function to add the new donor
	addDonor = function(){
		newDonor.donationDate = Date.now();
		donors.push(newDonor);
		
		//Reinitialization of donor
		newDonor = {donorName: '', donorDivision: '',donationDate:''};
	};
	
});