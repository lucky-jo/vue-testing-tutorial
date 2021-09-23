import { mount } from "@vue/test-utils";
import Message from "@/components/Message";

describe("Message.vue", () => {
  it("renders props.msg when passed", async () => {
    const wrapper = mount(Message, {
      // props 전달
      propsData: {
        msg: "Hello world",
      },
    });

    expect(wrapper.text()).toContain("Hello world");
  });
});
