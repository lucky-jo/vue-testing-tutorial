import { shallowMount } from "@vue/test-utils";
import Parent from "@/components/Parent";

describe("Parent.vue", () => {
  it("", async () => {
    const wrapper = shallowMount(Parent);

    expect(wrapper.text()).toContain("Parent");
    // expect(wrapper.text()).toContain("Child");
  });
});
