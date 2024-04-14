---
title: 'zod 훑어보기'
date: '2024-04-14'
category: 'FE'
tags: ['zod']
summary: 'zod란? TypeScript와 JavaScript에서 사용할 수 있는 스키마 선언 및 유효성 검증 라이브러리이다. 런타임과 빌드 시점에 데이터의 형식과 구조를 정의하고 검증할 수 있게 도와준다.'
pinned: 'false'
thumbnailUrl: https://zod.dev/logo.svg
---

![](https://zod.dev/logo.svg)

## ❓ zod란?

TypeScript와 JavaScript에서 사용할 수 있는 스키마 선언 및 유효성 검증 라이브러리이다. 런타임과 빌드 시점에 데이터의 형식과 구조를 정의하고 검증할 수 있게 도와준다.

## 👍 zod를 사용하는 장점

1. **런타임 유효성 검사 :** TypeScript는 빌드 시점에서만 타입 검사를 수행한다. 반면 zod는 런타임에도 데이터 유효성 검사를 할 수가 있다. 이를 통해 외부 데이터소스(예: API 응답)에 대한 검증이 가능하다.
2. **데이터 변환 및 정제 :** zod는 데이터를 다른 형식으로 변환하거나 입력 데이터를 정제할 수 있는 기능을 제공한다.
3. **더 나은 객체 형식 정의 :** 객체의 필드를 정의할 때 더 간결하고 명확한 문법을 제공한다. 예를 들어 선택적 필드, 기본값 설정 등등..
4. **더 다양한 타입 지원 :** zod는 기본 타입외에도 리터럴, 유니온, 함수 등 다양한 타입을 지원한다.
5. **조건부 스키마 정의 :** zod를 사용하면 특정조건에 따라 스키마를 동적으로 정의할 수 있다.

## 🔥 zod 기초 문법 예시들

### 스키마 정의

```jsx
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().positive(),
  email: z.string().email(),
});
```

위 코드는 `name`, `age`, `email` 필드를 가진 `User` 객체의 스키마를 정의한다.

### 유효성 검사

```jsx
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  age: z.number().positive('Age must be a positive number'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8).max(20),
  createdAt: z.date().default(() => new Date()),
});

type User = z.infer<typeof UserSchema>;

// 유효성 검사
const user: User = UserSchema.parse({
  name: 'John',
  age: 30,
  email: 'john@example.com',
  password: 'mypassword',
});

console.log(user);
// Output: { name: 'John', age: 30, email: 'john@example.com', password: 'mypassword', createdAt: [현재 날짜] }
```

위 예시에서는 `User` 객체의 스키마를 정의하고 있다. `name`은 최소 2자 이상이어야 하고, `age`는 양수여야 하며, `email`은 유효한 이메일 형식이어야 한다. `parse` 메서드를 사용하여 유효성을 검사하고 있다. 유효하지 않은 데이터가 전달되면 zod가 에러를 던진다.

### 선택적 필드와 기본값

```jsx
const UserSchema = z.object({
  name: z.string(),
  age: z.number().optional(), // 선택적 필드
  email: z.string().email().default('default@example.com'), // 기본값
});
```

`optional()`을 사용하면 필드를 선택적으로 만들 수 있고, `default(값)`을 사용하면 기본값을 설정할 수 있다.

### Union 및 Enum 타입

```jsx
const StatusSchema = z.union([z.literal('active'), z.literal('inactive')]);

const UserSchema = z.object({
  name: z.string(),
  status: StatusSchema,
});
```

`union`을 사용하면 유니온 타입을 정의할 수 있고, `literal`을 사용하면 Enum 타입과 유사한 집합을 정의할 수 있다.

### 타입추론

타입 추론은 `z.infer` 유틸리티 함수를 사용하면 된다.

```jsx
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string(),
  age: z.number().positive(),
  email: z.string().email().optional(),
});

// UserSchema로부터 TypeScript 타입 추출
type User = z.infer<typeof UserSchema>;

// User 타입은 다음과 같이 추론됩니다:
// {
//   name: string;
//   age: number;
//   email?: string | undefined;
// }

// 추론된 타입을 사용할 수 있습니다
const user: User = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};
```

위 예시에서 `z.infer<typeof UserSchema>`는 `UserSchema`로부터 TypeScript 타입 `User`를 추출한다. 이렇게 추론된 `User` 타입은 `name`과 `age` 필드가 필수이고, `email` 필드가 선택적인 객체 타입이다.

타입 추론은 단순한 객체뿐만 아니라 배열, 유니온, 리터럴 등 다양한 zod 스키마에서도 작동한다.

```jsx
const ArraySchema = z.array(z.string());
type ArrayType = z.infer<typeof ArraySchema>; // string[]

const UnionSchema = z.union([z.string(), z.number()]);
type UnionType = z.infer<typeof UnionSchema>; // string | number

const LiteralSchema = z.literal('hello');
type LiteralType = z.infer<typeof LiteralSchema>; // 'hello'
```

이처럼 zod의 타입 추론 기능을 사용하면 별도의 타입 정의 없이도 스키마 정의만으로 TypeScript 타입을 안전하게 추론할 수 있다. 이를 통해 코드의 타입 안전성과 가독성을 높일 수 있다.
