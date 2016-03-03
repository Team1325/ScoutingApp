angular.module('starter.controllers', [])

// Control Code for the Splash (1st) Webpage

.controller('SplashCtrl', ['$scope', '$state', function($scope, $state) {

  // Go to Confirm Webpage
  $scope.next = function () {
    $state.go('confirm'); // Sets state to 'confirm'
  };

}])

// Control Code for the Confirm (2nd) Webpage

.controller('ConfirmCtrl', ['$scope', '$state', function($scope, $state) {

  // Go to NewMatch Webpage
  $scope.next = function () {
    $state.go('newmatch'); // Sets state to 'newmatch'
  };

}])

// Control Code for the NewMatch (3rd) Webpage

.controller('NewMatchCtrl', ['$scope', '$state', '$rootScope', '$ionicPopup', function($scope, $state, $rootScope, $ionicPopup) {

  // Defining Match Variables
  // $rootScope.match = {defenseOne: "Low Bar", defenseTwo: "", defenseThree: "", defenseFour: "", defenseFive: "",
  //                     scouter: "", quadrant: "", team: null, number: null,
  //                     autoNotes: "", teleopNotes: "", defensiveBot: false, offensiveBot: false};

  // Test Match Variables

  if (!$rootScope.match)
  {
  $rootScope.match = {defenseOne: "Low Bar", defenseTwo: "", defenseThree: "",
                      defenseFour: "", defenseFive: "",
                      scouter: "", quadrant: "", team: null, number: null,
                      autoNotes: "", teleopNotes: "", botType: ""};
                    }


  // Go to Auto Webpage
  $scope.auto = function() {

    // Check if any of the fields are empty
    if ($rootScope.match.defenseOne == "" || $rootScope.match.defenseOne == null ||
        $rootScope.match.defenseTwo == "" || $rootScope.match.defenseTwo == null ||
        $rootScope.match.defenseThree == "" || $rootScope.match.defenseThree == null ||
        $rootScope.match.defenseFour == "" || $rootScope.match.defenseFour == null ||
        $rootScope.match.defenseFive == "" || $rootScope.match.defenseFive == null ||
        $rootScope.match.scouter == "" || $rootScope.match.quadrant == "" ||
        $rootScope.match.team == "" || $rootScope.match.number == "" ||
        $rootScope.match.scouter == null || $rootScope.match.quadrant == null ||
        $rootScope.match.team == null || $rootScope.match.number == null)
    {
      // If empty, stop the user from proceeding
      var confirmPopup = $ionicPopup.alert({
         title: 'Error',
         template: 'Fill out ALL of the fields to proceed.'
       });
    }
    else {
      // If all fields are filled, proceed to auto
      $state.go('auto'); // Sets state to 'auto'
    }
  }

}])

// Control Code for Auto (4th) Webpage

.controller('AutoCtrl', ['$scope', '$state', '$rootScope', '$ionicPopup', '$timeout', function($scope, $state, $rootScope, $ionicPopup, $timeout) {


  if (!$rootScope.auto)
  {
  $rootScope.auto = {lowBall: 0, lowShots: 0, highBall: 0, highShots: 0, definedDefensesAuto: null};
  }

  if (!$rootScope.auto.definedDefensesAuto)
  {
  $rootScope.auto.definedDefensesAuto = {firstDefenseState: "button-calm", firstDefenseLabel: "Failed",
                                secondDefenseState: "button-calm", secondDefenseLabel: "Failed",
                                thirdDefenseState: "button-calm", thirdDefenseLabel: "Failed",
                                fourthDefenseState: "button-calm", fourthDefenseLabel: "Failed",
                                fifthDefenseState: "button-calm", fifthDefenseLabel: "Failed"};
                              }

  console.log($rootScope.auto.definedDefensesAuto);

  $scope.switchDefense = function(defenseNo) {

    var defenseState = "";

    if (defenseNo == 1){defenseState = $rootScope.auto.definedDefensesAuto.firstDefenseState;
                        defenseLabel = $rootScope.auto.definedDefensesAuto.firstDefenseLabel;}
    if (defenseNo == 2){defenseState = $rootScope.auto.definedDefensesAuto.secondDefenseState;
                        defenseLabel = $rootScope.auto.definedDefensesAuto.secondDefenseLabel;}
    if (defenseNo == 3){defenseState = $rootScope.auto.definedDefensesAuto.thirdDefenseState;
                        defenseLabel = $rootScope.auto.definedDefensesAuto.thirdDefenseLabel;}
    if (defenseNo == 4){defenseState = $rootScope.auto.definedDefensesAuto.fourthDefenseState;
                        defenseLabel = $rootScope.auto.definedDefensesAuto.fourthDefenseLabel;}
    if (defenseNo == 5){defenseState = $rootScope.auto.definedDefensesAuto.fifthDefenseState;
                        defenseLabel = $rootScope.auto.definedDefensesAuto.fifthDefenseLabel;}


    if (defenseState == "button-calm"){
      defenseState = "button-royal";
      defenseLabel = "Reached";
    }
    else if (defenseState == "button-royal"){
      defenseState = "button-dark";
      defenseLabel = "Crossed";
    }
    else if (defenseState == "button-dark"){
      defenseState = "button-calm";
      defenseLabel = "Failed";
    }

    if (defenseNo == 1){$rootScope.auto.definedDefensesAuto.firstDefenseState = defenseState;
                        $rootScope.auto.definedDefensesAuto.firstDefenseLabel = defenseLabel;}
    if (defenseNo == 2){$rootScope.auto.definedDefensesAuto.secondDefenseState = defenseState;
                        $rootScope.auto.definedDefensesAuto.secondDefenseLabel = defenseLabel;}
    if (defenseNo == 3){$rootScope.auto.definedDefensesAuto.thirdDefenseState = defenseState;
                        $rootScope.auto.definedDefensesAuto.thirdDefenseLabel = defenseLabel;}
    if (defenseNo == 4){$rootScope.auto.definedDefensesAuto.fourthDefenseState = defenseState;
                        $rootScope.auto.definedDefensesAuto.fourthDefenseLabel = defenseLabel;}
    if (defenseNo == 5){$rootScope.auto.definedDefensesAuto.fifthDefenseState = defenseState;
                        $rootScope.auto.definedDefensesAuto.fifthDefenseLabel = defenseLabel;}

  }


  // Proceed to Teleop Webpage
  $scope.teleop = function() {
    $state.go('teleop'); // Sets state to 'teleop'
  }
  // Return to Newmatch Webpage
  $scope.autoBack = function() {
    $state.go('newmatch') // Sets state to 'newmatch'
  }

  // Defining auto variables


  // Increases the amount of boulders scored in the low goals in auto
  $scope.incAutoLowBall = function() {
    $rootScope.auto.lowBall++;
    if ($rootScope.auto.lowBall>$rootScope.auto.lowShots)
    {
      $rootScope.auto.lowShots = $rootScope.auto.lowBall;
    }
  }
  // Decreases the amount of boulders scored in the low goals in auto
  $scope.decAutoLowBall = function() {
    // Checks to ensure that the value is >0, to avoid negative values
    if ($rootScope.auto.lowBall>0)
    {
    $rootScope.auto.lowBall--;
    }
  }

  // Increases the amount of shots taken on the low goal in auto
  $scope.incAutoLowShots = function() {
    $rootScope.auto.lowShots++;
  }
  // Decreases the amount of shots taken in the low goals in auto
  $scope.decAutoLowShots = function() {
    // Checks to ensure that the value is >0, to avoid negative values
    if ($rootScope.auto.lowShots>0 && $rootScope.auto.lowBall<$rootScope.auto.lowShots)
    {
    $rootScope.auto.lowShots--;
    }
  }

  // Increases the amount of boulders scored in the high goals in auto
  $scope.incAutoHighBall = function() {
    $rootScope.auto.highBall++;
    if ($rootScope.auto.highBall>$rootScope.auto.highShots)
    {
      $rootScope.auto.highShots = $rootScope.auto.highBall;
    }
  }
  // Decreases the amount of boulders scored in the high goals in auto
  $scope.decAutoHighBall = function() {
    // Checks to ensure that the value is >0, to avoid negative values
    if ($rootScope.auto.highBall>0)
    {
    $rootScope.auto.highBall--;
    }
  }

  // Increases the amount of shots taken in the high goals in auto
  $scope.incAutoHighShots = function() {
    $rootScope.auto.highShots++;
  }
  // Decreases the amount of shots taken in the high goals in auto
  $scope.decAutoHighShots = function() {
    // Checks to ensure that the value is >0, to avoid negative values
    if ($rootScope.auto.highShots>0 && $rootScope.auto.highBall<$rootScope.auto.highShots)
    {
    $rootScope.auto.highShots--;
    }
  }

}])

// Control Code for Teleop Webpage (5th)

.controller('TeleopCtrl', ['$scope', '$state', '$ionicPopup', '$rootScope', '$http', '$interval', function($scope, $state, $ionicPopup, $rootScope, $http, $interval) {

  // Define teleop variables
  if (!$rootScope.teleop)
  {
  $rootScope.teleop = {lowBall: 0, lowShots: 0, highBall: 0, highShots: 0, totalDamage: 0, cycleTime: 0, definedDefensesTeleop: null}
  }

  if (!$rootScope.teleop.towerAttack)
  {
  $rootScope.teleop.towerAttack = {towerState: "button-calm", towerLabel: "Defended"}
  }

  if (!$rootScope.teleop.definedDefensesTeleop)
  {
  $rootScope.teleop.definedDefensesTeleop = {firstDefenseState: "button-calm", firstDefenseLabel: "Failed",
                                      secondDefenseState: "button-calm", secondDefenseLabel: "Failed",
                                      thirdDefenseState: "button-calm", thirdDefenseLabel: "Failed",
                                      fourthDefenseState: "button-calm", fourthDefenseLabel: "Failed",
                                      fifthDefenseState: "button-calm", fifthDefenseLabel: "Failed"}
                                    }

  $scope.incTotalDamage = function() {
    $rootScope.teleop.totalDamage++;
  }

  $scope.decTotalDamage = function(defenseNo) {
    if ($rootScope.teleop.totalDamage>0)
    {
      $rootScope.teleop.totalDamage--;
    }
  }

  $scope.switchDefense = function(defenseNo) {

    var defenseState = "";

    if (defenseNo == 1){defenseState = $rootScope.teleop.definedDefensesTeleop.firstDefenseState;
                        defenseLabel = $rootScope.teleop.definedDefensesTeleop.firstDefenseLabel;}
    if (defenseNo == 2){defenseState = $rootScope.teleop.definedDefensesTeleop.secondDefenseState;
                        defenseLabel = $rootScope.teleop.definedDefensesTeleop.secondDefenseLabel;}
    if (defenseNo == 3){defenseState = $rootScope.teleop.definedDefensesTeleop.thirdDefenseState;
                        defenseLabel = $rootScope.teleop.definedDefensesTeleop.thirdDefenseLabel;}
    if (defenseNo == 4){defenseState = $rootScope.teleop.definedDefensesTeleop.fourthDefenseState;
                        defenseLabel = $rootScope.teleop.definedDefensesTeleop.fourthDefenseLabel;}
    if (defenseNo == 5){defenseState = $rootScope.teleop.definedDefensesTeleop.fifthDefenseState;
                        defenseLabel = $rootScope.teleop.definedDefensesTeleop.fifthDefenseLabel;}


    if (defenseState == "button-calm"){
      defenseState = "button-dark";
      defenseLabel = "Crossed";
    }
    else if (defenseState == "button-dark"){
      defenseState = "button-calm";
      defenseLabel = "Failed";
    }

    if (defenseNo == 1){$rootScope.teleop.definedDefensesTeleop.firstDefenseState = defenseState;
                        $rootScope.teleop.definedDefensesTeleop.firstDefenseLabel = defenseLabel;}
    if (defenseNo == 2){$rootScope.teleop.definedDefensesTeleop.secondDefenseState = defenseState;
                        $rootScope.teleop.definedDefensesTeleop.secondDefenseLabel = defenseLabel;}
    if (defenseNo == 3){$rootScope.teleop.definedDefensesTeleop.thirdDefenseState = defenseState;
                        $rootScope.teleop.definedDefensesTeleop.thirdDefenseLabel = defenseLabel;}
    if (defenseNo == 4){$rootScope.teleop.definedDefensesTeleop.fourthDefenseState = defenseState;
                        $rootScope.teleop.definedDefensesTeleop.fourthDefenseLabel = defenseLabel;}
    if (defenseNo == 5){$rootScope.teleop.definedDefensesTeleop.fifthDefenseState = defenseState;
                        $rootScope.teleop.definedDefensesTeleop.fifthDefenseLabel = defenseLabel;}
  }

  $scope.switchTowerAttack = function() {

    if ($rootScope.teleop.towerAttack.towerState == "button-calm"){
      $rootScope.teleop.towerAttack.towerState = "button-royal";
      $rootScope.teleop.towerAttack.towerLabel = "Challenged";
    }
    else if ($rootScope.teleop.towerAttack.towerState == "button-royal"){
      $rootScope.teleop.towerAttack.towerState = "button-dark";
      $rootScope.teleop.towerAttack.towerLabel = "Scaled";
    }
    else if ($rootScope.teleop.towerAttack.towerState == "button-dark"){
      $rootScope.teleop.towerAttack.towerState = "button-calm";
      $rootScope.teleop.towerAttack.towerLabel = "Defended";
    }

  }

  // Increases the amount of boulders scored in the low goal in teleop
  $scope.incLowBall = function() {
    $rootScope.teleop.lowBall++;
    if ($rootScope.teleop.lowBall>$rootScope.teleop.lowShots)
    {
      $rootScope.teleop.lowShots = $rootScope.teleop.lowBall;
    }
  }
  // Decreases the amount of boulders scored in the low goal in teleop
  $scope.decLowBall = function() {
    // Checks to ensure that the value is >0, to avoid negative
    if ($rootScope.teleop.lowBall>0)
    {
    $rootScope.teleop.lowBall--;
    }
  }

  // Increases the amount of boulders scored in the high goal in teleop
  $scope.incHighBall = function() {
    $rootScope.teleop.highBall++;
    if ($rootScope.teleop.highBall>$rootScope.teleop.highShots)
    {
      $rootScope.teleop.highShots = $rootScope.teleop.highBall;
    }
  }
  // Decreases the amount of boulders scored in the high goal in teleop
  $scope.decHighBall = function() {
    if ($rootScope.teleop.highBall>0)
    {
    $rootScope.teleop.highBall--;
    }
  }

  // Increases the amount of shots taken in the low goal in teleop
  $scope.incLowShots = function() {
    $rootScope.teleop.lowShots++;
  }
  // Decreases the amount of shots taken in the low goal in teleop
  $scope.decLowShots = function() {
    // Checks to ensure that the value is >0, to avoid negative
    if ($rootScope.teleop.lowShots>0 && $rootScope.teleop.lowBall<$rootScope.teleop.lowShots)
    {
    $rootScope.teleop.lowShots--;
    }
  }

  // Increases the amount of shots taken in the high goal in teleop
  $scope.incHighShots = function() {
    $rootScope.teleop.highShots++;
  }
  // Decreases the amount of shots taken in the high goal in teleop
  $scope.decHighShots = function() {
    if ($rootScope.teleop.highShots>0 && $rootScope.teleop.highBall<$rootScope.teleop.highShots)
    {
    $rootScope.teleop.highShots--;
    }
  }

  $rootScope.teleop.cycleTime = 0;
  $rootScope.teleop.cycleTimeInterval = null;
  $rootScope.teleop.cycleTimeToggle = "Start";

  $scope.resetCycleTimer = function() {
    $rootScope.teleop.cycleTime = 0; // Sets the time value to 0
    $interval.cancel($rootScope.teleop.cycleTimeInterval); // Stops the timer
    $rootScope.teleop.cycleTimeToggle = "Start"; // Sets the label to "start"
  }


  $scope.startCycleTimer = function() {
    // Check to see the status of the timer and toggle it accordingly
    if ($rootScope.teleop.cycleTimeToggle == "Stop") { // this means that the timer is ON (label says "Stop")
      $rootScope.teleop.cycleTimeToggle = "Start"; // Set the label to "Start"
      $interval.cancel($rootScope.teleop.cycleTimeInterval); // Stop the timer
    }
    else if ($rootScope.teleop.cycleTimeToggle == "Start") { // this means the timer is OFF (label says "Start")
      $rootScope.teleop.cycleTimeToggle = "Stop"; // Set the label to "Stop"
      $rootScope.teleop.cycleTimeInterval = $interval(function(){$rootScope.teleop.cycleTime++},10,0); // Start the timer
    }
  };

  // Proceed to the Upload Webpage
  $scope.upload = function() {
    // Popup to confirm if the user wants to proceed
    var confirmPopup = $ionicPopup.confirm({
       title: 'Upload',
       template: 'Are you sure you want to upload the match? Double check that all your information is accurate.'
     });
     // Triggered code when popup is confirmed
     confirmPopup.then(function(res) {
       if(res) {

         // Calculating Algothirthm for the Total Score Contribution

         var autoScore = 0;
         autoScore += ($rootScope.auto.lowBall*5) + ($rootScope.auto.highBall*10);
         if ($rootScope.auto.definedDefensesAuto.firstDefenseLabel == "Crossed" ||
             $rootScope.auto.definedDefensesAuto.secondDefenseLabel == "Crossed" ||
             $rootScope.auto.definedDefensesAuto.thirdDefenseLabel == "Crossed" ||
             $rootScope.auto.definedDefensesAuto.fourthDefenseLabel == "Crossed" ||
             $rootScope.auto.definedDefensesAuto.fifthDefenseLabel == "Crossed")
         {
           autoScore += 10;
         }
         else if ($rootScope.auto.definedDefensesAuto.firstDefenseLabel == "Reached" ||
                 $rootScope.auto.definedDefensesAuto.secondDefenseLabel == "Reached" ||
                 $rootScope.auto.definedDefensesAuto.thirdDefenseLabel == "Reached" ||
                 $rootScope.auto.definedDefensesAuto.fourthDefenseLabel == "Reached" ||
                 $rootScope.auto.definedDefensesAuto.fifthDefenseLabel == "Reached")
         {
           autoScore += 2;
         }

         var teleopScore = 0;
         teleopScore += ($rootScope.teleop.lowBall*2) + ($rootScope.teleop.highBall*5);

         if ($rootScope.teleop.scale)
         {
           teleopScore += 15;
         }
         else if ($rootScope.teleop.challenge)
         {
           teleopScore += 5;
         }

         teleopScore += $rootScope.teleop.totalDamage * 5;

         $rootScope.totalScore = autoScore + teleopScore;

         $state.go('upload'); // Change state to 'upload'

         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

   // Return to the Teleop Webpage
   $scope.teleopBack = function() {
     $state.go('auto'); // Change state to 'auto'
   }

}])

// Control Code for the Upload (6th) Webpage

.controller('UploadCtrl', ['$scope', '$state', '$rootScope', '$http', '$window', '$ionicPopup', function($scope, $state, $rootScope, $http, $window, $ionicPopup) {

  // Uploads the information to the scouting server

  $scope.upload = function() {

    var confirmPopup = $ionicPopup.alert({
       title: 'Loading',
       template: 'Please Wait...'
     });

    // Posts information to the scouting URL
    $http.post('http://scoutingserver.herokuapp.com/api/matches/', {scouter: $rootScope.match.scouter,team: $rootScope.match.team,number: $rootScope.match.number,quadrant: $rootScope.match.quadrant,botType: $rootScope.match.botType,autonotes: $rootScope.match.autoNotes,auto: JSON.stringify($rootScope.auto),teleopnotes: $rootScope.match.teleopNotes,teleop: JSON.stringify($rootScope.teleop),totalscore: $rootScope.totalScore, defenseOne: $rootScope.match.defenseOne, defenseTwo: $rootScope.match.defenseTwo, defenseThree: $rootScope.match.defenseThree, defenseFour: $rootScope.match.defenseFour, defenseFive: $rootScope.match.defenseFive})

        // Triggered code when post is a success
        .success(function(data) {
            $rootScope.uploaded = "Previous match was uploaded. Thank you!";
            $rootScope.match.number = $rootScope.match.number + 1; // Increases the current match number by 1
            $rootScope.match.team = null;
            $rootScope.match.botType = "";
            $rootScope.match.autoNotes = "";
            $rootScope.match.teleopNotes = "";
            $rootScope.auto.speed = 0;
            $rootScope.auto.lowBall = 0;
            $rootScope.auto.highBall = 0;
            $rootScope.auto.lowShots = 0;
            $rootScope.auto.highShots = 0;
            $rootScope.auto.definedDefensesAuto = {firstDefenseState: "button-calm", firstDefenseLabel: "Failed",
                                          secondDefenseState: "button-calm", secondDefenseLabel: "Failed",
                                          thirdDefenseState: "button-calm", thirdDefenseLabel: "Failed",
                                          fourthDefenseState: "button-calm", fourthDefenseLabel: "Failed",
                                          fifthDefenseState: "button-calm", fifthDefenseLabel: "Failed"};
            $rootScope.teleop.lowBall = 0;
            $rootScope.teleop.highBall = 0;
            $rootScope.teleop.lowShots = 0;
            $rootScope.teleop.highShots = 0;
            $rootScope.teleop.totalDamage = 0;
            $rootScope.teleop.cycleTime = 0;
            $rootScope.teleop.definedDefensesTeleop = {firstDefenseState: "button-calm", firstDefenseLabel: "Failed",
                                                secondDefenseState: "button-calm", secondDefenseLabel: "Failed",
                                                thirdDefenseState: "button-calm", thirdDefenseLabel: "Failed",
                                                fourthDefenseState: "button-calm", fourthDefenseLabel: "Failed",
                                                fifthDefenseState: "button-calm", fifthDefenseLabel: "Failed"};

            $rootScope.defenseOne = "Low Bar";
            $rootScope.defenseTwo = "";
            $rootScope.defenseThree = "";
            $rootScope.defenseFour = "";
            $rootScope.defenseFive = "";

            $rootScope.totalScore = 0;

            $rootScope.auto.defenseAttack = "Failed";
            $rootScope.teleop.towerAttack = {towerState: "button-calm", towerLabel: "Defended"}

            $state.go('newmatch'); // Set state to 'newmatch'
            console.log('Success!');

            var confirmPopup = $ionicPopup.alert({
               title: 'Thank You!',
               template: 'Match has been successfully uploaded!'
             });
        })

        // Triggered code when post fails
        .error(function(data) {
            $rootScope.uploaded = "Error...!";
            console.log('Error!');
            // Alert user that upload failed
            var confirmPopup = $ionicPopup.alert({
               title: 'Error!',
               template: 'Error! Please try again (Ensure that you have internet access).'
             });

        }
    );



  };

  // Returns to the Teleop Webpage
  $scope.returnTeleop = function() {
    $state.go('teleop');
  }

}])
