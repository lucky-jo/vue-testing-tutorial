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

```

# Triggering Events

```

```

# More Complex Assertions

```

```

# Running Code Before Each Test

```

```

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
