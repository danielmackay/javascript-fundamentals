var batwing = {
    status: "Ready",
    rescueBatman: function () {
        document.write("Locating his transponder...initiating launch...")
    }
}

//if (batwing.status === "Ready") {
//    batwing.rescueBatman();
//}

var utilities = {
    PrintAllMembers: function (targetObj) {
        for (i in targetObj) {
            document.write("<br />" + targetObj[i]);
        }
    },
    PrintAllMembersValues: function(targetObj){
        for (member in targetObj) {
            document.write("<br />" + member + " => " + targetObj[member]);
        }
    }
}

batwing.NewProperty = "MyNewProperty";

//utilities.PrintAllMembers(batwing);

var planet = {
    id: 34,
    Name: "Mars",
    faction: {
        factionId: 2,
        Name: "Nex",
        notification: function () {
            document.write("Nex Alliance...Unite!");
        }
    },
    cities: [
        { locationId: 1, name: "name1" },
        { locationId: 2, name: "name2" },
        { locationId: 3, name: "name3" }
    ]
};

//planet.faction.notification();
//document.write(planet.cities[1].name);

//planet.defense = "Death Ray";

if (!planet.defense) {
    planet.defense = "Ion Cannon";
}

//document.write(planet.defense);



function car(make, model) {
    this.make = make;
    this.model = model
}

function owner(name, age) {
    this.ownername = name;
    this.owerage = age;
}

var myCar = new car("Honda", "Integra");
myCar.owner("Dan", 32);

utilities.PrintAllMembersValues(myCar);
