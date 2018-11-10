// Создать тамагочи, у которого должно быть минимум 6 методов, минимум 6 переменных,
// от которых зависит его жизнь. Например: создается инстанс тамагочи и дается имя питомцу,
// он может кушать, гулять, спать, пить, умереть или сбежать и т.д. За эти или иные действия
// отвечают переменные самого инстанса, например health, happiness и так далее...﻿ (constructor)



function Tamagochi() {
    var energy = 10,
        food = 10,
        fun = 10;
    
    return {
        walk: function () {
            var newEnergy = energy--;
            food--;
            fun = 10;
            if (newEnergy == 0) {
                console.log("Your pet is dead");
            }

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
        }
    };


};

var tuzik = new Tamagochi();

tuzik.walk();
tuzik.sleep();
tuzik.eat();
tuzik.checkStatus();
