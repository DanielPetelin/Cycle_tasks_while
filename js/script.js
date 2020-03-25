for (let i = 0; i < 6; i++) {
    console.log(i);
};

let k = 0;
while (k < 5) {
    k++;
    console.log('k: ' + k); 
};

// 0 + ... + 10
let sum = 0;
let p = 0;

while (p <= 10) {
    sum = sum + p;
    p++
}

console.log('sum = ' + sum);

// ****
// ****
// ****
let out = document.querySelector('#out');
p = 0;
let outStr = '';

while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        outStr += '*';
        p1++;
    }
    outStr += '<br>';
    p++;
}

out.innerHTML = outStr;