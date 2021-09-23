# Setup

```
vue add unit-jest
```

vue cli 로 설치시 자동으로 설치 되어 있거나, 수동으로 추가할 수 있습니다.

# Test Structure

```
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

// Tests Block
describe("HelloWorld.vue", () => {
  // Test Block
  it("renders props.msg when passed", () => {
    const msg = "new message";
    // Test Component
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    // Assertion
    expect(wrapper.text()).toMatch(msg);
  }); // Test Block end
}); // Tests Block end
```

decribe 로 테스트 그룹을 묶을 수 있으며, 내부에 테스트 단위 혹은 테스트 그룹을 가질 수 있습니다.
it 내부에 테스트 할 컴포넌트를 마운트 시킨 후, expect 메서드로 Assertion 을 진행 합니다.

# Props

```
const wrapper = mount(Message, {
  // props 전달
  propsData: {
    msg: "Hello world",
  },
});
```

props 를 전달받아 표현하는 컴포넌트의 경우, propsData 속성으로 값을 전달 할 수 있으며, toConrain() 메서드를 이용해 마운트 된 텍스트 값이 존재 하는지 확인 할 수 있었다.
주의 : props 로 할 경우, 전달되지 않아, 해결 방법을 찾아보니, propsData 로 전달 할 수 있었다.

# Finding Elements

```
// 컴포넌트에 data-test="todo" 값을 주어 find 또는 fildAll 을 사용하여 찾을 수 있다.
const todo = wrapper.findAll('[data-test="todo"]');
// 찾은 elements 의 갯수 확인
expect(todo).toHaveLength(1);
```

컴포넌트에 data-test="todo" 값을 주어 find 또는 fildAll 을 사용하여 찾을 수 있다.

```
wrapper.get('[data-test="new-todo"]').setValue("New Todo")
```

setValue 메서드를 사용하여 값을 초기화 할 수 있다.

```
// trigger 메서드를 사용하여. submit 동작을 실행할 수 있다.
await wrapper.get('[data-test="form"]').trigger("submit");
expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
```

trigger 메서드를 사용하여. submit 동작을 실행할 수 있으며, 실행 된 값을 확인 할 수 있다.

# Triggering Events

```
// check 박스 체크
await wrapper.get('[data-test="todo-ckeckbox"]').setChecked(true);
// classes() 이용해, 클래스 존재 유무 확인
expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
```

setChecked() 를 이용하여, 체크박스 값을 토글 할 수 있으며, classes() 를 이용하여, 클래스 유무를 확인 할 수 있다.

# Running Code Before Each Test

```
let wrapper;
beforeEach(() => {
  wrapper = mount(TodoApp);
});
```

beforeEach afterEach 는 매 테스트마다 실행되며, beforeAll, afterAll 은 블록 실행 전, 후 1번만 실행된다.

# Finding Elements - Nav.vue

```

```

# Shallow Rendering -

```

```

# testing-tutorial

```

```

## Project setup

```

```

# 회고

toContain 의 비교 방식 정확히 일치 하는지 보다 정규식 방식으로 작동하는 것 같다.

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
