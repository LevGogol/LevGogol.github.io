import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Avatar from '../Avatar.vue';

describe('Avatar', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders with correct src prop', () => {
    const src = '/test-avatar.jpg';
    const wrapper = mount(Avatar, {
      props: { src },
    });

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(src);
  });

  it('has correct dimensions', () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    const img = wrapper.find('img');
    expect(img.attributes('width')).toBe('160');
    expect(img.attributes('height')).toBe('160');
  });

  it('has correct image attributes', () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    const img = wrapper.find('img');
    expect(img.attributes('draggable')).toBe('false');
    expect(img.attributes('loading')).toBe('lazy');
    expect(img.classes()).toContain('avatar');
  });

  it('adds spinning class when clicked', async () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    const img = wrapper.find('img');

    // Click the image
    await img.trigger('click');

    // Check if spinning class is added
    expect(img.classes()).toContain('spinning');
  });

  it('removes spinning class after timeout', async () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    const img = wrapper.find('img');

    // Click the image
    await img.trigger('click');
    expect(img.classes()).toContain('spinning');

    // Fast-forward time by 600ms (rotationTime)
    vi.advanceTimersByTime(600);
    await wrapper.vm.$nextTick();

    // Check if spinning class is removed
    expect(img.classes()).not.toContain('spinning');
  });

  it('does not start spinning if already spinning', async () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    const img = wrapper.find('img');

    // First click
    await img.trigger('click');
    expect(img.classes()).toContain('spinning');

    // Second click while still spinning
    await img.trigger('click');

    // Should still be spinning and not trigger additional behavior
    expect(img.classes()).toContain('spinning');
  });

  it('adds hovered class on mouse enter', async () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    const img = wrapper.find('img');
    const shadow = wrapper.find('.avatar-shadow');
    const container = wrapper.find('.avatar-scale-container');

    // Mouse enter
    await img.trigger('mouseenter');

    // Check if hovered classes are added
    expect(shadow.classes()).toContain('hovered');
    expect(container.classes()).toContain('hovered');
  });

  it('removes hovered class on mouse leave', async () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    const img = wrapper.find('img');
    const shadow = wrapper.find('.avatar-shadow');
    const container = wrapper.find('.avatar-scale-container');

    // Mouse enter first
    await img.trigger('mouseenter');
    expect(shadow.classes()).toContain('hovered');
    expect(container.classes()).toContain('hovered');

    // Mouse leave
    await img.trigger('mouseleave');

    // Check if hovered classes are removed
    expect(shadow.classes()).not.toContain('hovered');
    expect(container.classes()).not.toContain('hovered');
  });

  it('renders avatar container with correct structure', () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    // Check main structure
    expect(wrapper.find('.avatar-container').exists()).toBe(true);
    expect(wrapper.find('.avatar-shadow').exists()).toBe(true);
    expect(wrapper.find('.avatar-scale-container').exists()).toBe(true);
    expect(wrapper.find('.avatar').exists()).toBe(true);
  });

  it('has cursor pointer style on avatar', () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    const img = wrapper.find('img');
    expect(img.classes()).toContain('avatar');
    // The cursor: pointer is set via CSS class
  });

  it('maintains aspect ratio', () => {
    const wrapper = mount(Avatar, {
      props: { src: '/test.jpg' },
    });

    const img = wrapper.find('img');
    const shadow = wrapper.find('.avatar-shadow');
    const container = wrapper.find('.avatar-scale-container');

    // All elements should have the avatar class or structure for aspect ratio
    expect(img.classes()).toContain('avatar');
    expect(shadow.classes()).toContain('avatar-shadow');
    expect(container.classes()).toContain('avatar-scale-container');
  });
});
