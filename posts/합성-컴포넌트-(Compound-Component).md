---
title: '합성 컴포넌트 (Compound Component)'
date: '2024-05-12'
category: "FE"
tags: ['디자인 패턴']
summary: "항상 컴포넌트를 만들때마다 어떻게 하면 재사용성 좋은 컴포넌트로 만들지 에 대한 고민이 항상 존재했다.
이러한 고민을 해소하기 위해 여러 자료를 찾다가 발견한것이 바로 합성 컴포넌트.
완벽하게는 아니어도 잘 활용하기 위해 포스팅을 써본다."
pinned: false
thumbnailUrl: https://velog.velcdn.com/images/shinju4n/post/3724fe27-1854-4668-a7e7-513778087658/image.png
---

항상 컴포넌트를 만들때마다 **"어떻게 하면 재사용성 좋은 컴포넌트로 만들지"** 에 대한 고민이 항상 존재했다.
이러한 고민을 해소하기 위해 여러 자료를 찾다가 발견한것이 바로 합성 컴포넌트.
완벽하게는 아니어도 잘 활용하기 위해 포스팅을 써본다.

## 합성컴포넌트?

`합성 컴포넌트 패턴`은 하나의 컴포넌트를 여러가지 집합체로 분리한 뒤, 분리된 . 각 컴포넌트를 사용하는 쪽에서 조합해 사용하는 컴포넌트 패턴을 의미한다.

html의 `<select>`와 `<option>` 태그가 좋은 예시가 된다. `<select>`와 `<option>`은 독립적으로 사용하면 큰 의미가 없지만 사용하는 곳에서 이를 조합해 사용하면 화면에 의미있는 요소가 된다.

```html
// 이 태그들은 독립적으로 쓰면 아무 의미가 없다.
<select>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

이처럼 사용하는 곳에서 컴포넌트이 조합을 잘 활용할 수 있다면, 높은 재사용성을 만족하면서 다양한 상황에 사용할 수 있을 것이다.

## 만들어보기

![](https://velog.velcdn.com/images/shinju4n/post/3724fe27-1854-4668-a7e7-513778087658/image.png)
만약 위의 사진처럼 더보기 옵션을 띄우는 모달 컴포넌트를 구현해야하면 어떻게 해야할까?
더보기 옵션에는 위의 사진처럼 3가지 옵션이 있을수도 있고, 앨범에서 사진 선택, 라이트 모드 & 다크모드를 선택해야 할 수도 있다. 이를 한번 재사용성 있는 컴포넌트로 만들기 위해 합성 컴포넌트를 사용해보자.

### 서브 컴포넌트 구현

모달 컴포넌트안에 들어가기 위한 서브 컴포넌트들을 구현했다.

```tsx
function Background({ children }: PropsWithChildren) {
  const optionContext = useContext(OptionContext);
  return (
    <SafeAreaView style={styles.optionBackground} onTouchEnd={optionContext?.onClickOutside}>
      {children}
    </SafeAreaView>
  );
}

function Container({ children }: PropsWithChildren) {
  return <View style={styles.optionContainer}>{children}</View>;
}

interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  isDanger?: boolean;
}

function Button({ children, isDanger = false, ...props }: ButtonProps) {
  return (
    <Pressable style={({ pressed }) => [pressed && styles.optionButtonPressed, styles.optionButton]} {...props}>
      <Text style={[styles.optionText, isDanger && styles.dangerText]}>{children}</Text>
    </Pressable>
  );
}

function Title({ children }: PropsWithChildren) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
}

function Divider() {
  return <View style={styles.border} />;
}

const styles = StyleSheet.create({
  optionBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0 0 0 / 0.5)',
  },
  optionContainer: {
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: colors.GRAY_100,
    overflow: 'hidden',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    gap: 5,
  },
  optionButtonPressed: {
    backgroundColor: colors.GRAY_200,
  },
  optionText: {
    fontSize: 17,
    color: colors.BLUE_500,
    fontWeight: '500',
  },
  dangerText: {
    color: colors.RED_500,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 15,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.BLACK,
  },
  border: {
    borderBottomColor: colors.GRAY_200,
    borderBottomWidth: 1,
  },
});
```

### 메인 컴포넌트 구현

메인 컴포넌트의 경우 RN의 Modal을 가져와서 타입을 확장 시켜 컴포넌트를 구현하였다.

이처럼 작성하면 children으로 들어오는 서브 컴포넌트들은 순서에 따라 배치된다.

```tsx
interface OptionMainProps extends ModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  animateType?: ModalProps['animationType'];
  hideOption: () => void;
}

function OptionMain({ children, isVisible, animateType = 'slide', hideOption, ...props }: OptionMainProps) {
  const onClickOutside = (event: GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      hideOption();
    }
  };
  return (
    <Modal visible={isVisible} transparent={true} animationType={animateType} onRequestClose={hideOption} {...props}>
      <OptionContext.Provider value={{ onClickOutside }}>{children}</OptionContext.Provider>
    </Modal>
  );
}
```

### 메인과 서브를 묶어서 export 하기

밑에 코드와 같이 구현된 컴포넌트들을 묶어서 export 해준다.

```tsx
export const CompoundOption = Object.assign(OptionMain, {
  Container,
  Background,
  Button,
  Title,
  Divider,
});
```

### 실제 사용 예시

합성 컴포넌트를 통해 훨씬 직관적으로 모달이 어떻게 생겼을지 추측하기가 쉽다. 또한 다른 요구사항이 생겨도 바로 반영하기가 쉽다!

```tsx
import React from 'react';
import { CompoundOption } from '../common/CompoundOption';

interface FeedDetailOptionProps {
  isVisible: boolean;
  hideOption: () => void;
}

function FeedDetailOption({ hideOption, isVisible }: FeedDetailOptionProps) {
  return (
    <CompoundOption isVisible={isVisible} hideOption={hideOption}>
      <CompoundOption.Background>
        <CompoundOption.Container>
          <CompoundOption.Button isDanger>삭제하기</CompoundOption.Button>
          <CompoundOption.Divider />
          <CompoundOption.Button>수정하기</CompoundOption.Button>
        </CompoundOption.Container>
        <CompoundOption.Container>
          <CompoundOption.Button onPress={hideOption}>취소하기</CompoundOption.Button>
        </CompoundOption.Container>
      </CompoundOption.Background>
    </CompoundOption>
  );
}

export default FeedDetailOption;
```

## 참고

- [카카오 FE 기술 블로그](https://fe-developers.kakaoent.com/2022/220731-composition-component/)
- [인프런 강의](https://www.inflearn.com/course/%EB%A7%9B%EC%A7%91-%EC%A7%80%EB%8F%84%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0-reactnative-nestjs/dashboard)
