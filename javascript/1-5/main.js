/*function japanese() {
    console.log('おはよう')
    console.log('こんにちは')
    console.log('こんばんは')
    console.log('日本語は時間帯によってあいさつが変わります')
    console.log('ひらがな')
    console.log('カタカナ')
    console.log('漢字')
    console.log('3種類も文字があります')
}
//関数を呼び出す
japanese();
*/

function createJuice(fruits) {
    console.log( fruits + 'を受け取りました。ジュースにして返します' )
    return fruits + 'ジュースが届きました'   
}

console.log( createJuice('みかん'));

/*
//①関数名を適切なものに変えてください
//②仮引数を適切なものに変えてください
function ジュース工場(果物) {
    //③「〇〇を受け取りました。ジュースにして返します」と出力

    //④受け取った果物にジュースという文字列を結合して、呼び出し元に返す    
}
//⑤関数の実行：「みかん」を渡して、結果を受け取れるように適当な変数（orangeJuice）を用意
//⑥返ってきた変数を利用して「〇〇が届きました」と出力する
*/