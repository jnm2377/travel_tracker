const app = angular.module("TravelApp",[])

app.controller("MainController",["$http",function ($http) {
  this.hello="Hello World";
  this.trips=[];
  this.trip={};

  //get trips
  this.getTrips= () => {
    $http({
      url:"/travel",
      method:"get"
    })
    .then((response) => {
      this.trips=response.data;
    },(errx) => {
      console.log("ErrorX:"+errx);
    })
    .catch((err) => {
      console.log("Error:"+err);
    });

  };
  this.getTrips();
  // end get trips


  //
}]);
