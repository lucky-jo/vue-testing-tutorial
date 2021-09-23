import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

describe("TodoApp", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TodoApp);
  });

  it("should render todo text", () => {
    const todo = wrapper.get('[data-test="todo"]');
    expect(wrapper.text()).toContain("Learn Vue Testing");
  });
  it("should add new todo ", async () => {
    // 컴포넌트에 data-test="todo" 값을 주어 find 또는 fildAll 을 사용하여 찾을 수 있다.
    const todo = wrapper.findAll('[data-test="todo"]');
    // 찾은 elements 의 갯수 확인
    expect(todo).toHaveLength(1);
    // element 에 접근하여 값을 초기화 할 수 있다.
    await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
    // trigger 메서드를 사용하여. submit 동작을 실행할 수 있다.
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });
  it("should be able to complete todo", async () => {
    // check 박스 체크
    await wrapper.get('[data-test="todo-ckeckbox"]').setChecked(true);
    // classes() 이용해, 클래스 존재 유무 확인
    expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
  });
});
