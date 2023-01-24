const pi = Math.PI

// Cylinder
let r_cylinder = 8;
let h_cylinder = 9;

let v_cylinder = h_cylinder * pi * r_cylinder ** 2;

console.log(`The volume of a cylinder with a radius of ${r_cylinder} and a height of ${h_cylinder} is ${v_cylinder.toFixed(2)}`);


// Sphere
let r_sphere = 8

let v_sphere = (4 / 3) * pi * r_sphere ** 3;

console.log(`The volume of a sphere with a radius of ${r_sphere} is ${v_sphere.toFixed(2)}`);


// Point Distance
let x1 = 2;
let y1 = 3;

let x2 = 4;
let y2 = 5;

let d_points = ((x1 - x2) ** 2 + (y2 - y1) ** 2) ** (1 / 2);

console.log(`The distance between the two points (${x1}, ${y1}) and (${x2}, ${y2}) is ${d_points.toFixed(2)}`);