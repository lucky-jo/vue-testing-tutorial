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
