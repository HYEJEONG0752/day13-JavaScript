// 1. 변수 선언과 할당1
var name = "Jeon Hyejeong";
let age = 31;
const residence = "Changwon";


// 4. 데이터 타입 확인
console.log(typeof name);
console.log(typeof age);
console.log(typeof residence);

// 2. 변수 선언과 할당2
const person = {
    name : "Hyejeong Jeon",
    age : 31
};

// 3. 변수 선언과 할당3
console.log(person.name)
console.log(person.age)

// 4. 데이터 타입 확인
// 1번항목에 

// 5. 산술 연산
let num1 = 37; 
let num2 = 5; 

console.log(num1 + num2); //덧셈
console.log(num1 - num2); //뺼셈
console.log(num1 * num2); //곱셈
console.log(num1 / num2); //나눗셈
console.log(num1 % num2); //나머지

// 6. 문자열 연결
let firstName = "Hyejeong";
let lastName = "Jeon";

console.log(firstName + lastName);

// 4. 조건문
const person2 = {
    age : 38
};
const person3 = {
    age : 5
};

person2.age >= 18 ? console.log("성인입니다.") : console.log("성인이 아닙니다.")
person3.age >= 18 ? console.log("성인입니다.") : console.log("성인이 아닙니다.")

// 8. 삼항 연산자
let ageStatus = (age >= 18) ? "성인" : "미성년자";
console.log(ageStatus);

// 9. 배열 선언과 사용
const colors = ["Sky", "puple", "White"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// 10. 배열 반복과 합계 계산
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(
    numbers[0] +
    numbers[1] +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] 
);

// 11. 논리 연산자1
let boolean1 = true;
let boolean2 = false;

console.log(boolean1 && boolean2); //AND연산 false
console.log(boolean1 || boolean2); //OR연산 true
console.log(!boolean2); //NOT연산 true
