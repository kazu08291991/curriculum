/*

let scores = [50, 60, 70, 80, 90];

//3番目の「70」にアクセスする例
let scores = [50, 60, 70, 80, 90];
console.log(scores[2]);

let scores = [50, 60, 70, 80, 90];
console.log(scores.length);

let scores = [50, 60, 70, 80, 90];
for (let i = 0; i < 5; i++) {
    console.log("得点は" + scores[i] + "点です");
}

let scores = [50, 60, 70, 80, 90];
//scores.length で「5」が取得されるので、i < 5 と同じ意味になります。
for (let i = 0; i < scores.length; i++) {
    console.log("得点は" + scores[i] + "点です");
}

let human = {
    name: 'yamada',
    height: 170,
    weight: 60,
    gender: "男",
    age: 30,
};

console.log(human.name);
//以下の書き方もあります。
console.log(human['name']);

*/

let scores = [10, 15, 20, 25];
for (let i = 0; i < scores.length; ++i){
    if (scores[i] % 2 === 0){
        console.log(scores[i] + "は偶数です");
    }
}

let car = {
    gass: 20.5,
    num: 1234
};

console.log("ガソリンは" + car.gass + "です");
console.log("ナンバーは"+ car.num + "です");