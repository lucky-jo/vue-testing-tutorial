# 회고

```
해당 테스트는
https://www.youtube.com/watch?v=QIDhzBg5eWY&list=RDCMUCyLNhHSiEVkVwPSFKxJAfSA&start_radio=1&rv=QIDhzBg5eWY&t=4741
를 참고하여 학습하였습니다.

테스트를 진행하며, 테스트 설치 방법, 테스트 구조와 방식, 엘리먼트 찾는 방법,
자식에게 Props 데이터 전달, 이벤트 트리거 방법 등을 학습하였으며, 아래와 같이 정리했습니다.
인상 깊었던 점은, 테스트 진행 중, 엘리먼트에 접근 하는 방식이, get 과 find 가 있어,
둘의 차이를 학습하기 위해, 공식문서를 방문하여 둘의 차이를 학습하고, 앞으로 해당 메서드는 앞으로 사라질 예정이며,
getComponent 과 findComponent 를 권장 한다는 소식이었습니다. 또한 mound 와 shallowMount 의 차이를 학습하여,
목적에 맞는 정확한 테스트를 진행 할 수 있었습니다.
```

# Next Step

```
Vuetify.js Component Test && Nuxt.js Test
```

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
const profileLink = wrapper.get("#profile");
const profileLink = wrapper.find("#profile");

```

````
get - https://vue-test-utils.vuejs.org/api/wrapper/get.html
find - https://vue-test-utils.vuejs.org/api/wrapper/find.html
getComponent - https://vue-test-utils.vuejs.org/api/wrapper/getComponent.html
findComponent - https://vue-test-utils.vuejs.org/api/wrapper/find.html```
테스트를 학습하며, get 과 find 를 사용하여 element 에 접근 할 수 있어, 둘의 차이를 알아보기 위해, Vue Jest 공식문서를 확인하면서 get 과 find는 앞으로 사라질 예정 이라고 한다. 대신 getComponent 와 findComponent 를 사용하라는 안내가 있다.

getComponent 는 findComponent처럼 작동하지만 주어진 선택기와 일치하는 것이 없으면 오류가 발생합니다. 존재하지 않을 수 있는 요소를 검색할 때 findComponent를 사용해야 합니다. 존재해야 하는 요소를 가져올 때 이 방법을 사용해야 하며 그렇지 않은 경우 좋은 오류 메시지를 제공합니다.
테스트 시 findComponent 를 사용하는 것이 편리해보인다.

# Shallow Rendering - Parrent.vue

````

const wrapper = shallowMount(Parent);

expect(wrapper.text()).toContain("Parent");
expect(wrapper.text()).toContain("Child");

```

테스트를 해보며, mound 와 shallowMount 의 차이는, 자식 요소의 유무로 파악되었다. 만약에, mound 를 사용하여 렌더 후, 테스트 할 경우, Child 컴포넌트의 Child 는 통과 하지만, shallowMount 쓸 경우, Child 를 통과하지 못 한다. 그 이유는 Parent 컴포넌트만 렌더링 되었기 때문으로 추측된다. 해당 테스트는 Parent 컴포넌트의 테스트 이므로, shallowMount 를 써야지 정확한 테스트를 진행할 수 있다.

```

# async await

```
  it("should add new todo ", async () => {
    const todo = wrapper.findAll('[data-test="todo"]');
    expect(todo).toHaveLength(1);
    // mount 후 수정 및 event trigger
    await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
    await wrapper.get('[data-test="form"]').trigger("submit");
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });
```

element 의 수정 혹은 이벤트 트리거는 비동기로 작동하기 떄문에, async awiat 구분을 사용해야 한다.

### npm install

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
```
