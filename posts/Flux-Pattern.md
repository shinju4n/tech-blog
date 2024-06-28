---
title: 'Flux Pattern'
date: '2024-06-28'
category: 'FE'
tags: [디자인패턴]
summary: 'Flux Pattern = 단향성 데이터 흐름 '
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/85077b95-7e0c-4d45-9f03-b09cd9b19802/image.png
---

## Flux란?

Flux 패턴은 Facebook에서 제안한 애플리케이션 아키텍처로, **단방향 데이터 흐름** 을 기반으로 한다.

애플리케이션이 복잡해질수록 View와 Model의 상태 관리가 복잡해지는 양방향 데이터 흐름 구조인 MVC 패턴의 한계를 극복하기 위해 만들어졌으며, 주로 React와 함꼐 사용된다.

Flux는 다음과 같은 주요 컴포넌트로 구성된다.

1. **Action (액션)** : 상태 변화를 유발하는 이벤트. 액션은 일반적으로 사용자 입력이나 네트워크 응답에 의해 생성된다.
2. **Dispatcher (디스패처)** : 액션을 스토어로 전달하는 역할을 한다. 모든 액션은 디스패처를 통해 전달되므로, 중앙에서 관리할 수 있다.
3. **Store (스토어)** : 애플리케이션의 상태와 로직을 관리한다. 스토어는 여러 개 있을 수 있으며, 각각의 스토어는 독립적인 상태를 가지고 있다.
4. **View (뷰)** : 사용자 인터페이스를 담당한다. 스토어의 상태가 변경되면 뷰가 업데이트된다.

## Flux의 단방향 데이터 흐름

Flux의 핵심은 단방향 데이터 흐름이다. 데이터가 한 방향으로만 흐르기 때문에 상태변화와 데이터 흐름을 추적하기 쉬워진다.

![](https://velog.velcdn.com/images/shinju4n/post/85077b95-7e0c-4d45-9f03-b09cd9b19802/image.png)

사용자 입력 → 액션 생성 → 디스패처 → 스토어 업데이트 → 뷰 업데이트

## Flux를 사용하는 이유

### 1. 상태 관리의 일관성

Flux를 사용하면 모든 상태 변화가 액션을 통해 이루어지므로, 상태 변화의 원일을 쉽게 추적할 수 있다. 디버깅에 매우 큰 도움이 된다.

### 2. 단방향 데이터 흐름

단방향 데이터 흐름은 데이터의 흐름을 명확히 하고, 예측 가능하게 한다. 이는 복잡한 애플리케이션에 특히 유용하다.

### 3. 독립성

액션, 디스패처, 스토어, 뷰가 명확하게 분리되므로, 각 컴포넌트를 독립적으로 개발하고 테스트하기 용이하다.

## Recoil로 해보는 예시

간단한 To-Do 예제를 통해서 살펴보자

### 스토어 Store

```jsx
// store.js
import { atom, selector } from 'recoil';

// To-Do 목록을 관리하는 atom
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});
```

### 디스패처 Dispatcher

Recoil은 Dispatcher를 별도로 사용하지 않는다. 대신, 상태를 직접 변경하는 함수가 디스패처 역할을 한다. 이는 Recoil의 `useSetRecoilState` 훅을 사용하여 구현된다.

### 액션

상태를 직접 변경하는 함수가 액션 역할을 한다.

```jsx
// actions.js
import { todoListState } from './store';
import { useSetRecoilState } from 'recoil';

export const useAddTodo = () => {
  const setTodoList = useSetRecoilState(todoListState);
  return text => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text,
        isComplete: false,
      },
    ]);
  };
};

// 고유 ID를 생성하는 헬퍼 함수
let id = 0;
function getId() {
  return id++;
}
```

### 뷰 View

뷰는 사용자 인터페이스를 담당한다. React 컴포넌트가 View 역할을 한다.

```jsx
// App.js
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './store';
import { useAddTodo } from './actions';

function App() {
  const [input, setInput] = useState('');
  const todos = useRecoilValue(todoListState);
  const addTodo = useAddTodo();

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add To-Do</button>
    </div>
  );
}

export default App;
```
