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
/*
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

*/

//Human クラスを作成

/*

class Human {
    //コンストラクタ(yamadaと25という値を受け取るための処理をこれから書いていきます)
    constructor(name, height, weight, gender, age) {
        //受け取った値をこのクラスで使えるようにしています
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.age = age;
    }
    //歩くメソッド（関数）作成
    walk() {
        console.log(`身長${this.height}cm、体重${this.weight}kg、${this.name}という${this.gender}が歩きました`);
    }

}
//「山田」オブジェクト作成
let yamada = new Human('yamada', 170, 60, '男' , 30);
yamada.walk();

//「鈴木」オブジェクト作成
//let suzuki = new Human('suzuki', 180, 70, '男', 35);

*/

/*
問1：以下の要件を満たすように「たい焼きクラス」を作成してください。

【要件】
・クラス名：Taiyaki
・インスタンス化する度に「あんこ」「クリーム」「チーズ」等と中身を変えられるように実装してください。
（コンストラクタで渡ってきた引数をセットする）
・「中身は〇〇です」と中身を出力する関数を作成してください。
*/

class taiyaki {
    constructor(contents) {
        this.contents = contents
    }
    sale() {
        console.log(`中身は${this.contents}です`);
    }
}

let anko = new taiyaki('あんこ');
let cream = new taiyaki('クリーム');
let cheese = new taiyaki('チーズ');
anko.sale();
cream.sale();
cheese.sale();