
// 足し算のみ

// イベントリスナーの書き方は
// 要素.addEventListener('イベント名',関数);

document.getElementById('input2').addEventListener('keyup', ()=>{
const input1 = Number(document.getElementById('input1').value);
const input2 = Number(document.getElementById('input2').value);
document.getElementById('equals').value = input1 + input2;     
});

// 以下はうまく行かなかった。多分イベントリスナーが最後にあるために、
// 頁を読み込んだ時の情報に固定されてしまって、入力した値を読んでくれない
// ことが原因と思われる。
// const calc = () => {
  // const input1 = document.getElementById('input1');
  // const input2 = document.getElementById('input2');
  // const value1 = Number(input1.value);
  // const value2 = Number(input2.value);

  // const input1 = Number(document.getElementById('input1').value);
  // const input2 = Number(document.getElementById('input2').value);
  
  // console.log(value1);
  // console.log(input1);
  // document.getElementById('equals').value = input1 + input2;     
// }
// document.getElementById('input2').addEventListener('keyup', calc());


// 四則演算：onclickで計算

function add() {
  let num1 = Number(document.getElementById('firstNumber').value);
  let num2 = Number(document.getElementById('secondNumber').value);   
  console.log(num1 + num2);
  document.getElementById('result').innerHTML = num1 + num2;
}

function subtract() {
  let num1 = Number(document.getElementById('firstNumber').value);
  let num2 = Number(document.getElementById('secondNumber').value);   
  console.log(num1 - num2);
  document.getElementById('result').innerHTML = num1 - num2;
}

function multiply() {
  const num1 = Number(document.getElementById('firstNumber').value);
  const num2 = Number(document.getElementById('secondNumber').value);   
  console.log(num1 * num2);
  document.getElementById('result').innerHTML = num1 * num2;
}
  
function divide() {
  let num1 = Number(document.getElementById('firstNumber').value);
  let num2 = Number(document.getElementById('secondNumber').value);   
  console.log(num1 / num2);
  document.getElementById('result').innerHTML = num1 / num2;
}


function mod() {
  let num1 = Number(document.getElementById('firstNumber').value);
  let num2 = Number(document.getElementById('secondNumber').value);  
  console.log(num1 % num2);
  document.getElementById('result').innerHTML = num1 % num2;
}


// 質問！
// letをconstにしてもよいか→modはconstにしてみた
// letやconstをfunctionの外に出しても大丈夫か
// %がNaNになることがある


// let num1 = document.getElementById('firstNumber').value;
// let num2 = document.getElementById('secondNumber').value;

// const multiply = num1 * num2;
// console.log(multiply);

// function multiply() {
  // return num1 * num2;
// }
// console.log(num1);


// function add() {
  // num1 = document.getElementById('firstNumber').value;
  // num2 = document.getElementById('secondNumber').value;
  // document.getElementById('result').innerHTML = num1 + num2;
// }

  // document.getElementById('result').innerHTML = num1 * num2;
