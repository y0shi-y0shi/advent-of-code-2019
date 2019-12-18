// Construct a general tree
import * as fs from 'fs';

interface Planet {
    parent: Planet;
    name: string;
    depth: number;
    children: Planet[];
}

fs.readFile('day6Input.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const inputs = [...data.split('\r\n')];
    const planets: Planet[] = [];

    inputs.forEach(line => {
        let pair = line.split(')');

        let centerPlanet: Planet;
        let orbitingPlanet: Planet;

        centerPlanet = planets.find(p => p.name === pair[0]);
        if (typeof centerPlanet === 'undefined') {
            centerPlanet = {
                name: pair[0],
                children: [] as Planet[]
            } as Planet;

            planets.push(centerPlanet);
        }

        orbitingPlanet = planets.find(p => p.name === pair[1]);
        if (typeof orbitingPlanet === 'undefined') {
            orbitingPlanet = {
                name: pair[1],
                parent: centerPlanet,
                children: [] as Planet[]
            } as Planet;

            planets.push(orbitingPlanet);
        }

        centerPlanet.children.push(orbitingPlanet);
    })

    attributeDepth(planets.find(p => p.name === 'COM'), 0);

    const orbits = addAllPlanetsDepth(planets);
    console.log(orbits);
});

const attributeDepth = (planet: Planet, depth: number) => {
    planet.depth = depth;
    planet.children.forEach(children => attributeDepth(children, depth + 1));
}

const addAllPlanetsDepth = (planets: Planet[]) =>
    planets.map(p => p.depth).reduce((acc, value) => acc + value);

const dfsPlanet = (planet: Planet, name: string, v: boolean) => {
    planet.children.forEach(p => {
        
    })
}