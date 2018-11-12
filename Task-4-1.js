//__________myForEach - тот же самый forEach_____________

var arrForEach = ["Яблоко", "Апельсин", "Груша"];

Array.prototype.myForEach = function () {
    this.forEach(function(item, i, arr) {
        alert( i + ": " + item + " (массив:" + arr + ")" );
    });
};

arrForEach.myForEach();
//__________myMap - тот же самый map_____________

var namesMap = ['HTML', 'CSS', 'JavaScript'];

Array.prototype.myMap =function () {
    var nameLengths = this.map(function(name) {
        return name.length;
    });
    alert( nameLengths );
};

namesMap.myMap();

//__________mySort - тот же самый sort_____________

var arrSort = [ 1, 2, 15 ];

Array.prototype.mySort = function () {
    // this.sort();
    // alert( this );
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    this.sort(compareNumeric);

    alert(this);
};

arrSort.mySort();

//__________myFilter - тот же самый filter_____________

var arrFilter = [1, -1, 2, -2, 3];

Array.prototype.myFilter = function () {
    var positiveArr = this.filter(function(number) {
        return number > 0;
    });
    alert( positiveArr );
};

arrFilter.myFilter();

// ________________________________________________________________________________________________________________________________________________

// Closure - Create a constructor function which will use closure for working with private data. It should have 2
// private methods and 2 private props which we can change only with that private methods.


function Closure() {
  this.change = function (x, y, z) {

    function module1 () {

      function changeCore (newLogin, password, email) {
        var login;

        function names () {
          var oldLogin = login;
              login = newLogin;
          return [ oldLogin, login ]
        }

        var loginsArray = names();

        if (password === 111 && email === 'example@gmail.com') {
          console.log("Login changed from " + loginsArray[0] + " to " + loginsArray[1]);
        } else {
          console.log("Login not changed");
        }

      }

      changeLogin(changeCore);

    }

    function changeLogin (qqq) {
      qqq(x, y, z);
    }

    module1 ();

  }
}

var start = new Closure();

start.change("NewLogin", 111, "example@gmail.com"); // For change Login
start.change("NewLogin", 1111, "wrongemail@gmail.com"); // False case, wrong pass and email









