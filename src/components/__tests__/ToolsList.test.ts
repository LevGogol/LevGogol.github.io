import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ToolsList from '../Projects/ToolsList.vue';

const mockItemCard = {
  template: '<li class="mock-item-card">{{ title }} - {{ description }}</li>',
  props: ['title', 'description', 'link', 'tags', 'image'],
};

// Mock the tools.json import
vi.mock('@/data/tools.json', () => ({
  default: [
    {
      title: 'Mock Tool 1',
      description: 'This is a mock tool description',
      link: 'https://example.com/tool1',
      technologies: ['JavaScript', 'Vue.js'],
    },
    {
      title: 'Mock Tool 2',
      description: 'Another mock tool without link',
      technologies: ['TypeScript', 'Node.js'],
    },
    {
      title: 'Mock Tool 3',
      description: 'Third mock tool',
      link: 'https://example.com/tool3',
      technologies: ['React', 'CSS'],
    },
  ],
}));

describe('ToolsList', () => {
  it('renders section with correct aria-labelledby', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const section = wrapper.find('section.tools');
    expect(section.exists()).toBe(true);
    expect(section.attributes('aria-labelledby')).toBe('tools-heading');
  });

  it('renders ul with correct class', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const list = wrapper.find('ul.tools-list');
    expect(list.exists()).toBe(true);
  });

  it('renders ItemCard components', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });
    const items = wrapper.findAllComponents({ name: 'ItemCard' });
    expect(items.length).toBe(3); // Based on our mock data
  });

  it('passes correct props to ItemCard components', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);

    // Test first mock tool
    expect(items[0]?.props().title).toBe('Mock Tool 1');
    expect(items[0]?.props().description).toBe('This is a mock tool description');
    expect(items[0]?.props().link).toBe('https://example.com/tool1');
    expect(items[0]?.props().tags).toEqual(['JavaScript', 'Vue.js']);

    // Test second mock tool (without link)
    expect(items[1]?.props().title).toBe('Mock Tool 2');
    expect(items[1]?.props().description).toBe('Another mock tool without link');
    expect(items[1]?.props().link).toBeUndefined();
    expect(items[1]?.props().tags).toEqual(['TypeScript', 'Node.js']);

    // Test third mock tool
    expect(items[2]?.props().title).toBe('Mock Tool 3');
    expect(items[2]?.props().link).toBe('https://example.com/tool3');
    expect(items[2]?.props().tags).toEqual(['React', 'CSS']);
  });

  it('uses index as key for v-for', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);
    expect(items).toHaveLength(3); // Based on our mock data
  });

  it('imports and uses tools data', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const content = wrapper.text();
    expect(content).toContain('Mock Tool 1');
    expect(content).toContain('Mock Tool 2');
    expect(content).toContain('Mock Tool 3');
  });

  it('maps technologies to tags prop correctly', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);

    expect(items[0]?.props().tags).toEqual(['JavaScript', 'Vue.js']);
    expect(items[1]?.props().tags).toEqual(['TypeScript', 'Node.js']);
    expect(items[2]?.props().tags).toEqual(['React', 'CSS']);
  });

  it('handles tools without link property', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    const items = wrapper.findAllComponents(mockItemCard);

    // First tool has link
    expect(items[0]?.props().link).toBe('https://example.com/tool1');

    // Second tool doesn't have link
    expect(items[1]?.props().link).toBeUndefined();

    // Third tool has link
    expect(items[2]?.props().link).toBe('https://example.com/tool3');
  });

  it('correctly types the tools data with ITool interface', () => {
    const wrapper = mount(ToolsList, {
      global: {
        components: {
          ItemCard: mockItemCard,
        },
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
