const text = await Deno.readTextFile("input.txt");

const spl = text.split(/\n/);
const spl2 = spl.map(num => num.split("   "));
let left=[];
let right=[];

for(let i=0;i<spl.length-1;i++){
    left.push(spl2[i][0]);
    right.push(spl2[i][1]);
}

left.sort();
right.sort();

let result=[];

for(let i=0;i<spl.length-1;i++){
    result.push(Math.abs(left[i]-right[i]));
}

const total = result.reduce((sum, num) => sum + num,0);

console.log(total);