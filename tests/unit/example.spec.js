// Test Structure
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
    expect(wrapper.text()).toMatch(msg);
  }); // Test Block end
}); // Tests Block end
