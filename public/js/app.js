const app = angular.module("TravelApp",[])

app.controller("MainController",["$http",function ($http) {
  this.hello="Hello World";
  this.trips=[];
  this.trip={};
  this.count=0;
  this.countryTrips=[];
  this.countries=[];
  this.formData = {};
  this.newTrip={};
  this.click=false;


  //get trips
  this.getTrips= () => {
    $http({
      url:"/travel",
      method:"get"
    })
    .then((response) => {
      console.log("trips: "+response.data);
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
  this.showCountryTrips = (country) => {
    $http({
      url:"/travel/byCountry/"+country,
      method:"GET"
    })
    .then((response) => {
      console.log(response.data);
      this.countryTrips=response.data;
      this.click=true;
    },(errx) => {
      console.log("Error X: "+errx);
    })
    .catch((err) => {
      console.log("Error: "+err);
    });
  };
  // end getByCountry
  this.getCountries =() => {
    $http({
      url:"/travel/countries/",
      method:"GET"
    })
    .then((response) => {
      console.log("Countries: "+response.data);
      this.countries = response.data;
    },(errx) => {
      console.log("Error X: "+errx);
    })
    .catch((err) => {
      console.log("Error: "+err);
    });
  };
  this.getCountries();
// end getCountries
  this.getCount = () => {
    $http({
      url:"/travel/count/",
      method:"GET"
    })
    .then((response) => {
      console.log("Count: "+response.data);
      this.count = response.data;
    },(errx) => {
      console.log("Error X: "+errx);
    })
    .catch((err) => {
      console.log("Error: "+err);
    });
  };
  this.getCount();
// end getCount
  this.processForm = () => {
    $http({
      url:"/travel/",
      method:"POST",
      data:this.formData
    })
    .then((response) => {
      console.log("New Trip: "+response.data);
      this.trip = response.data;
      this.newTrip=response.data;
      this.countries.push(this.newTrip.country);
      this.formData={};
      console.log(this.newTrip);
    },(errx) => {
      console.log("Error X: "+errx);
    })
    .catch((err) => {
      console.log("Error: "+err);
    });
  };
// end postNewTrip
  this.updateTrip= (trip) => {
    this.trip = trip;
    $http({
      url:"/travel/"+this.trip._id,
      method:"PUT",
      data:trip
    })
    .then((response) => {
      console.log("Updated Trip: "+response.data);
      this.trip = response.data;
      this.newTrip=response.data;
    },(errx) => {
      console.log("Error X: "+errx);
    })
    .catch((err) => {
      console.log("Error: "+err);
    });
  };
  //end update trip
  this.deleteTrip= (trip) => {
    this.trip = trip;
    $http({
      url:"/travel/"+this.trip._id,
      method:"DELETE",
      data:this.trip
    })
    .then((response) => {
      console.log("Trip Deleted: "+response.data);
    },(errx) => {
      console.log("Error X: "+errx);
    })
    .catch((err) => {
      console.log("Error: "+err);
    });
  };

  //show edit form
  this.showEdit = (trip) => {
    this.edit = true;
    this.editTrip = trip;
  }
  // end main controller
  //
}]);
