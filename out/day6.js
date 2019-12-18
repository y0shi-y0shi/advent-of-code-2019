"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Construct a general tree
const fs = require("fs");
fs.readFile('day6Input.txt', 'utf8', (err, data) => {
    if (err)
        throw err;
    const inputs = [...data.split('\r\n')];
    const planets = [];
    inputs.forEach(line => {
        let pair = line.split(')');
        let centerPlanet;
        let orbitingPlanet;
        centerPlanet = planets.find(p => p.name === pair[0]);
        if (typeof centerPlanet === 'undefined') {
            centerPlanet = {
                name: pair[0],
                children: []
            };
            planets.push(centerPlanet);
        }
        orbitingPlanet = planets.find(p => p.name === pair[1]);
        if (typeof orbitingPlanet === 'undefined') {
            orbitingPlanet = {
                name: pair[1],
                parent: centerPlanet,
                children: []
            };
            planets.push(orbitingPlanet);
        }
        centerPlanet.children.push(orbitingPlanet);
    });
    attributeDepth(planets.find(p => p.name === 'COM'), 0);
    const orbits = addAllPlanetsDepth(planets);
    console.log(orbits);
});
const attributeDepth = (planet, depth) => {
    planet.depth = depth;
    planet.children.forEach(children => attributeDepth(children, depth + 1));
};
const addAllPlanetsDepth = (planets) => planets.map(p => p.depth).reduce((acc, value) => acc + value);
//# sourceMappingURL=day6.js.map