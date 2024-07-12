// Including a moons array in our Planet constructor

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );
var planet2 = new Planet( "Mars", 4, "Air" );

planet.addMoon("Io");
planet.addMoon("Europa");
planet2.addMoon("sec");
planet.showPlanet();

Planet.prototype.removeMoon = function() {
    if (this.moons.length > 0) {
      this.moons.pop();
    } else {
      console.log("No moons to remove.");
    }
  };

  planet2.removeMoon();
  planet2.showPlanet();

/* Further Adventures
 *
 * 1) Create a second planet.
 *    Make one up if you like.
 *
 * 2) Add three moons to the second planet.
 *
 * 3) Call the showPlanet method
 *    on the second planet.
 *
 * 4) Add a removeMoon method
 *    that removes the last moon
 *    from the moons array.
 *
 */