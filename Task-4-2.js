// Создать тамагочи, у которого должно быть минимум 6 методов, минимум 6 переменных,
// от которых зависит его жизнь. Например: создается инстанс тамагочи и дается имя питомцу,
// он может кушать, гулять, спать, пить, умереть или сбежать и т.д. За эти или иные действия
// отвечают переменные самого инстанса, например health, happiness и так далее...﻿ (constructor)



function Tamagochi() {
    var energy = 10,
        food = 100,
        health = 100,
        fun = 100;



    for (var i = 0; i < 1000, energy >=0; i++) {
        // (function() {
            setTimeout(function() {
                energy --;
                console.log("Energy " + energy);
                console.log("Food " + food);
                console.log("Fun " + fun );

                if ( energy === 5 ) {
                    alert("I'm tired and want sleep!");
                } else if ( energy === 1) {
                    alert("Your pet die because it was very tired!=(");
                    return energy;
                }

            }, i *1000);
        // })(i);
    }


    return {
        walk: function () {
            energy--;
            food--;
            fun = 10;
            console.log("Energy " + energy);
            console.log("Food " + food);
            console.log("Fun " + fun );
        },
        sleep: function () {
            energy = 10;
            food--;
            fun--;
            console.log("Energy " + energy);
            console.log("Food " + food);
            console.log("Fun " + fun );
        },
        eat: function () {
            energy--;
            food = 10;
            fun--;
            console.log("Energy " + energy);
            console.log("Food " + food);
            console.log("Fun " + fun );
        },
        checkStatus: function () {
            console.log("Energy " + energy);
            console.log("Food " + food);
            console.log("Fun " + fun );
        }
    };


}

var tuzik = new Tamagochi();

tuzik.walk();
tuzik.sleep();
tuzik.eat();
tuzik.checkStatus();
