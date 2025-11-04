import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import GreetingSection from '../GreetingSection.vue';

describe('GreetingSection', () => {
  it('renders the main heading correctly', () => {
    const wrapper = mount(GreetingSection);

    const heading = wrapper.find('h1');
    expect(heading.exists()).toBe(true);
    expect(heading.text()).toBe("Hi, I'm Lev Gogol");
  });

  it('renders the lead paragraph with correct content', () => {
    const wrapper = mount(GreetingSection);

    const leadParagraph = wrapper.find('.lead');
    expect(leadParagraph.exists()).toBe(true);
    expect(leadParagraph.text()).toContain('I develop tools and frameworks for Playable Ads');
    expect(leadParagraph.text()).toContain('stability, automation, and clean solutions');
  });

  it('renders the description paragraph', () => {
    const wrapper = mount(GreetingSection);

    const paragraphs = wrapper.findAll('p');
    const descriptionParagraph = paragraphs.find(p =>
      p.text().includes('Below are my most interesting projects')
    );

    expect(descriptionParagraph).toBeDefined();
    expect(descriptionParagraph?.text()).toBe('Below are my most interesting projects');
  });

  it('has correct CSS classes applied', () => {
    const wrapper = mount(GreetingSection);

    expect(wrapper.find('.greeting').exists()).toBe(true);
    expect(wrapper.find('.lead').exists()).toBe(true);
  });

  it('renders all expected elements', () => {
    const wrapper = mount(GreetingSection);

    // Check that we have one h1, and two p elements
    expect(wrapper.findAll('h1')).toHaveLength(1);
    expect(wrapper.findAll('p')).toHaveLength(2);
  });
});
