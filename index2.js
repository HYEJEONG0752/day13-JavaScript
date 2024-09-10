// 1.	var, let, const를 사용하여 각각 변수를 선언하고 값을 할당하세요.
var i1 = 10;
let i = 10;
const i3 = 10;

console.log(i);

// 2.	다음 변수들의 데이터 타입을 콘솔에 출력하세요.

let a = 42; //number
let b = "hello"; //string
let c = true; //boolean
let d = null; //object
let e; //undefined

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);


// 3.	두 개의 숫자를 더하고, 뺄셈, 곱셈, 나눗셈을 하는 코드를 작성하세요.

let num2 = 10;
let num3 = 5;

console.log(num2 + num3); //덧셈
console.log(num2 - num3); //뺄셈
console.log(num2 * num3); //곱셈
console.log(num2 / num3); //나눗셈


// 4.	두 개의 숫자를 비교하고 결과를 콘솔에 출력하세요.

let num4 = 10;
let num5 = 5;

console.log(num4 == num5);  //동등
console.log(num4 === num5);  //엄격한 동등
console.log(num4 != num5);  //부등
console.log(num4 !== num5);  //엄격한 부등
console.log(num4 > num5);  //크다
console.log(num4 < num5);  //작다
console.log(num4 >= num5);  //크거나 같다
console.log(num4 <= num5);  //작거나 같다

// 5.	논리 연산자를 사용하여 두 개의 불리언 변수를 조합하세요.

let f = true;
let g = false;

console.log(f && g); //false
console.log(f || g); //true
console.log(f && !g); //true

// 6.	할당 연산자를 사용하여 변수에 값을 더하고 빼세요.
let h = 10;

a += 5;   // 더한 값을 항당
console.log(h);  
a -= 5;   //뺀 값을 할당
console.log(h);
a *= 5;  //곱한 값을 할당
console.log(h);
a /= 5;  //나눈 값을 할당
console.log(h);
a %= 5;  //나머지 값을 할당

console.log(h)

// 7. 두 개의 문자열을 연결하고 결과를 출력하세요.

let str1 = "Hello";
let str2 = "World";

let result = str1 + " " + str2; //Hello World

console.log(result
);

// 8.	템플릿 리터럴을 사용하여 변수를 문자열에 포함하세요.

const name = "Alice";
const age = 25;
const message = "Hi Alice";

console.log('안녕, 내이름은 ${name}이고, 나이는 ${age}이야.');
console.log(`${message}`);

// 9.	배열을 선언하고 요소에 접근하여 출력하세요.
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]);  //Apple
console.log(fruits[1]);  //Banana
console.log(fruits[2]);  //Cherry

// 10.	객체를 선언하고 속성에 접근하여 출력하세요.
const person = {
name: "John",
age: 30,
city: "New York"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

// 11.	두 수를 더하는 함수를 선언하고 호출하여 결과를 출력하세요.

function add(a, b) {
  return a + b;
}

console.log(add(4, 4)); // 8
console.log(add(20, 4)); // 24

// 12. 주어진 수가 짝수인지 홀수인지 판단하는 조건문을 작성하세요.
let num = 7;

num % 2 === 0 ? true : false; // treu이면 짝수 false이면 홀수


// 13. 1부터 10까지의 숫자를 출력하는 for 반복문을 작성하세요.
for (let z = 1; z < 11; z++) {
  console.log(z);
}

// 14. 1부터 10까지의 숫자를 출력하는 while 반복문을 작성하세요.
let zz = 0;

while (zz < 11) {
  zz++;
  console.log(zz);
}

// 15. 배열의 각 요소를 출력하는 forEach 반복문을 작성하세요.
const fruits2 = ["Apple", "Banana", "Cherry"];

fruits2.forEach((element) => {
  console.log(element); //Apple, Banana, Cherry ->순서대로 출력하게됨
});

// 16. 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 코드를 작성하세요.
const numbers = [1, 2, 3, 4];
const mapped = numbers.map((number) => {
    return number * 2;
});

// 17. 배열에서 짝수만 필터링하는 코드를 작성하세요.

const numbers2 = [1, 2, 3, 4, 5, 6];
numbers2.filter((number2) => {
    return number2 % 2 === 0;
});

// 18. 문자열을 대문자로 변환하고 출력하는 코드를 작성하세요.
const str = "hello world".toUpperCase();
console.log(str);

// 19. 현재 날짜와 시간을 출력하는 코드를 작성하세요.
console.log(new Date());

// 20. Math 객체를 사용하여 주어진 수의 제곱근을 구하는 코드를 작성하세요.
let num100 = 16;
console.log(Math.sqrt(num100));
