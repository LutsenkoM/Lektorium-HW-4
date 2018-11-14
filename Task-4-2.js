// Создать тамагочи, у которого должно быть минимум 6 методов, минимум 6 переменных,
// от которых зависит его жизнь. Например: создается инстанс тамагочи и дается имя питомцу,
// он может кушать, гулять, спать, пить, умереть или сбежать и т.д. За эти или иные действия
// отвечают переменные самого инстанса, например health, happiness и так далее...﻿ (constructor)



function Tamagochi(name) {
    alert("HI, " + name + "! You was born!")

    var energy = 100,
        food = 100,
        health = 100,
        fun = 100,
        comfort = 100;

      function peetsParameters () {
        console.log(name +"'s" + " Energy " + energy);
        console.log(name +"'s" + " Food " + food);
        console.log(name +"'s" + " Fun " + fun );
        console.log(name +"'s" + " Health " + health );
        console.log(name +"'s" + " Comfort " + comfort );
      }

  var liveStart = setInterval(function() {
         energy -= 1;
         food -= 2;
         fun -= 10;
         peetsParameters ();

         if ( energy === 50 ) {
             alert("I'm tired and want sleep!");
         } else if ( energy === 0) {
             alert("Your pet die because it was very tired!=(");
           clearInterval(liveStart);
         }

         if ( food === 80) {
           alert("I want to drink!");
         } else if ( food === 50 ) {
           alert("I want to eat!");
         } else if ( food === 10 ){
           health = 50;
           alert("I want to eat!");
         } else if ( food === 0 ) {
           alert("Your pet die because it was very hungry!=(");
           clearInterval(liveStart);
         }

          if ( fun === 80) {
            alert("I want to play with you!");
          } else if ( fun === 50 ) {
            alert("I am very bored!");
          } else if ( fun === 10 ){
            alert("Play with me or I'll run away");
          } else if ( fun === 0 ) {
            alert("Your pet run away from you!=(");
            clearInterval(liveStart);
          }

    }, 60000);

    setInterval(function () {
         var event = Math.floor(Math.random() * 5) + 1;

         if (event === 1) {
             health = 10;
             alert("Your pet is sick! Cure him! Health " + health);
         } else if (event === 2) {
             comfort = 10;
             alert("Your pet poop! Clean up after him! Comfort " + comfort);
         } else if ( event === 3 ) {
             alert("I love you!");
         }

    }, 120000)

    return {
        play: function () {
            energy--;
            food--;
            fun = 100;
            peetsParameters ();
        },
        sleep: function () {
            energy = 100;
            food--;
            fun--;
            peetsParameters ();
        },
        eat: function () {
            energy--;
            food = 100;
            fun--;
            peetsParameters ();
        },
        cure: function () {
            health = 100;
            peetsParameters ();
        },
        clean: function () {
            comfort = 100;
            peetsParameters ();
        },
        checkStatus: function () {
            peetsParameters ();
        }
    };


}

var myPet = new Tamagochi("Sharik");

//Actions for pet

myPet.play();
myPet.sleep();
myPet.eat();
myPet.cure();
myPet.clean();
myPet.checkStatus();
