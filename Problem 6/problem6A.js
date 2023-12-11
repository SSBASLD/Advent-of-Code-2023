let races = [[45977295, 305106211101695]];

let total = 1;
for (let i = 0; i < races.length; i++) {
    let race = races[i];
    let time = race[0];
    let distance = race[1];

    let a = -1;
    let b = time;
    let c = -distance;

    let sum1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2*a);
    let sum2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2*a);

    let lowerBound = Math.ceil(sum1);
    let upperBound = Math.floor(sum2);

    total *= upperBound - lowerBound + 1;
}

console.log(total);