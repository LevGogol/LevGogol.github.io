import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ItemCard from '../ItemCard.vue';

describe('ItemCard', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test description',
  };

  it('renders title and description', () => {
    const wrapper = mount(ItemCard, {
      props: mockProps,
    });

    expect(wrapper.find('.item-title').text()).toBe('Test Title');
    expect(wrapper.find('.desc').text()).toBe('Test description');
  });

  it('renders as div when no link provided', () => {
    const wrapper = mount(ItemCard, {
      props: mockProps,
    });

    const content = wrapper.find('.card-content');
    expect(content.exists()).toBe(true);
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('renders as link when link provided', () => {
    const wrapper = mount(ItemCard, {
      props: {
        ...mockProps,
        link: 'https://example.com',
      },
    });

    const link = wrapper.find('a.card-link');
    expect(link.exists()).toBe(true);
    expect(link.attributes('href')).toBe('https://example.com');
    expect(link.attributes('target')).toBe('_blank');
    expect(link.attributes('rel')).toBe('noopener');
  });

  it('adds clickable class to title when link provided', () => {
    const wrapper = mount(ItemCard, {
      props: {
        ...mockProps,
        link: 'https://example.com',
      },
    });

    const title = wrapper.find('.item-title');
    expect(title.classes()).toContain('clickable');
  });

  it('does not add clickable class when no link', () => {
    const wrapper = mount(ItemCard, {
      props: mockProps,
    });

    const title = wrapper.find('.item-title');
    expect(title.classes()).not.toContain('clickable');
  });

  it('renders tags when provided', () => {
    const wrapper = mount(ItemCard, {
      props: {
        ...mockProps,
        tags: ['JavaScript', 'Vue.js', 'TypeScript'],
      },
    });

    const tagsContainer = wrapper.find('.tags');
    expect(tagsContainer.exists()).toBe(true);

    const tags = wrapper.findAll('.tag');
    expect(tags).toHaveLength(3);
    expect(tags[0]?.text()).toBe('JavaScript');
    expect(tags[1]?.text()).toBe('Vue.js');
    expect(tags[2]?.text()).toBe('TypeScript');
  });

  it('does not render tags when not provided', () => {
    const wrapper = mount(ItemCard, {
      props: mockProps,
    });

    const tagsContainer = wrapper.find('.tags');
    expect(tagsContainer.exists()).toBe(false);
  });

  it('does not render tags when empty array provided', () => {
    const wrapper = mount(ItemCard, {
      props: {
        ...mockProps,
        tags: [],
      },
    });

    const tagsContainer = wrapper.find('.tags');
    expect(tagsContainer.exists()).toBe(false);
  });

  it('renders HTML in description', () => {
    const wrapper = mount(ItemCard, {
      props: {
        ...mockProps,
        description: 'Test with <strong>bold</strong> text',
      },
    });

    const desc = wrapper.find('.desc');
    expect(desc.html()).toContain('<strong>bold</strong>');
  });

  it('has correct structure', () => {
    const wrapper = mount(ItemCard, {
      props: mockProps,
    });

    expect(wrapper.find('.item-card').exists()).toBe(true);
    expect(wrapper.find('.item-content').exists()).toBe(true);
  });

  it('passes linkText prop (testing prop interface)', () => {
    const wrapper = mount(ItemCard, {
      props: {
        ...mockProps,
        linkText: 'Custom Link Text',
      },
    });

    // linkText is defined in interface but not used in template
    // This test ensures the prop is accepted without errors
    expect(wrapper.exists()).toBe(true);
  });

  it('renders list item element', () => {
    const wrapper = mount(ItemCard, {
      props: mockProps,
    });

    expect(wrapper.element.tagName).toBe('LI');
  });
});
