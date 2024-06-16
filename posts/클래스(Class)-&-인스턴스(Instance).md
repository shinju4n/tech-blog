---
title: '클래스(Class) & 인스턴스(Instance)'
date: '2024-06-16'
category: 'CS'
tags: ['CS 강의']
summary: '객체 지향 프로그래밍의 핵심 요소 : 클래스와 인스턴스'
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/fc1aab2a-380d-4933-ae1d-767aa9f50aa4/image.png
---

![](https://velog.velcdn.com/images/shinju4n/post/fc1aab2a-380d-4933-ae1d-767aa9f50aa4/image.png)

## 클래스와 인스턴스의 기본 개념

클래스와 인스턴스는 **객체 지향 프로그래밍의 핵심 요소**이다.

클래스(Class)란 객체(Object)를 만들어 내기 위한 틀이며 만들어낼 객체의 속성과 메서드의 집합을 담아놓은 것이다.
객체의 설계도로, **객체가 가져야 할 상태(속성)와 행동(메소드)을 정의**한다.

인스턴스(Instance)는 **클래스에 의해 생성된 실체**로, 클래스의 정의를 바탕으로 **실제 메모리 상에 할당된 객체**를 의미한다.

## 클래스와 인스턴스 예시

Car라는 클래스를 정의 해보았다.

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    return `${this.make} ${this.model} is starting.`;
  }

  drive() {
    return `${this.make} ${this.model} is driving.`;
  }
}
```

클래스를 정의한 후에 인스턴스를 생성할 수 있다.

```js
const myCar = new Car('Kia', 'Sorento', 2021);

console.log(myCar.make); // 출력: Kia
console.log(myCar.model); // 출력: Sorento
console.log(myCar.year); // 출력: 2021
console.log(myCar.start()); // 출력: Kia Sorento is starting.
console.log(myCar.drive()); // 출력: Kia Sorento is driving.
```

다른 인스턴스를 사용하여 재사용할 수 있다.

```js
const anotherCar = new Car('Honda', 'Civic', 2022);

console.log(anotherCar.make); // 출력: Honda
console.log(anotherCar.model); // 출력: Civic
console.log(anotherCar.year); // 출력: 2022
console.log(anotherCar.start()); // 출력: Honda Civic is starting.
console.log(anotherCar.drive()); // 출력: Honda Civic is driving.
```

## 클래스와 인스턴스의 중요성

클래스를 통해 객체의 구조와 행동을 정의하고, 인스턴스를 통해 이러한 정의를 실제로 구현함으로써, **프로그램의 구조를 명확하게 하고 코드의 재사용성을 높일 수 있다.**

클래스를 잘 설계하면 비슷한 유형의 객체를 쉽게 생성하고 관리할 수 있으며, 인스턴스를 통해 각 객체의 독립적인 상태를 유지하면서도 동일한 행동을 수행할 수 있기 때문이다.

또한, 클래스와 인스턴스를 활용하면 **코드 유지보수가 쉬워진다**. 클래스의 정의를 변경하면 해당 클래스를 바탕으로 생성된 모든 인스턴스에 대한 변경이 자동으로 적용되기 때문이다.

참고 : [f-lab](https://f-lab.kr/insight/understanding-class-and-instance?gad_source=1&gclid=CjwKCAjwmrqzBhAoEiwAXVpgogouQcINpYiRpyM9EPUm8k28MTL0C49eXQpqZZ6H78dqGPN2tVKQUhoCEEcQAvD_BwE)
