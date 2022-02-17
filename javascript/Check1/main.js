//問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。

let numbers = [2, 5, 12, 13, 15, 18, 22];

function iseven() {
    for (let num = 0; num < numbers.length; num++) {
        if (numbers[num] % 2 === 0) {
            console.log(numbers[num] + 'は偶数です');
        }
    }
}

iseven();

/*
問2:以下の要件を満たすように実装してください。
【要件】
・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する
・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する
*/

class Car {
    constructor(gas, num){
        this.gas = gas;
        this.num = num;
    }
    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.num}です`);
    }
}

let impreza = new Car(2000, 1111);
let prius = new Car(1500, 2222);

impreza.getNumGas();
prius.getNumGas();