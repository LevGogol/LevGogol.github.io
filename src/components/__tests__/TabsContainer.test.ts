import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TabsContainer from '../TabsContainer.vue';

describe('TabsContainer', () => {
  it('renders tab navigation', () => {
    const wrapper = mount(TabsContainer);

    const nav = wrapper.find('.tabs-nav');
    expect(nav.exists()).toBe(true);
  });

  it('renders all tab buttons', () => {
    const wrapper = mount(TabsContainer);

    const buttons = wrapper.findAll('.tab-button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]?.text()).toBe('Tools');
    expect(buttons[1]?.text()).toBe('Playable Ads');
  });

  it('has tools tab active by default', () => {
    const wrapper = mount(TabsContainer);

    const toolsButton = wrapper.findAll('.tab-button')[0];
    expect(toolsButton?.classes()).toContain('active');
  });

  it('shows tools content by default', () => {
    const wrapper = mount(TabsContainer);

    // Check that tools tab panel is visible
    const toolsPanel = wrapper.find('.tab-panel');
    expect(toolsPanel.exists()).toBe(true);

    // Check that ToolsList component is rendered
    const toolsList = wrapper.findComponent({ name: 'ToolsList' });
    expect(toolsList.exists()).toBe(true);
  });

  it('switches to playables tab when clicked', async () => {
    const wrapper = mount(TabsContainer);

    const playablesButton = wrapper.findAll('.tab-button')[1];
    await playablesButton?.trigger('click');

    expect(playablesButton?.classes()).toContain('active');
  });

  it('shows playables content when playables tab is active', async () => {
    const wrapper = mount(TabsContainer);

    const playablesButton = wrapper.findAll('.tab-button')[1];
    await playablesButton?.trigger('click');

    // Check that PlayableAdsList component is rendered
    const playablesList = wrapper.findComponent({ name: 'PlayableAdsList' });
    expect(playablesList.exists()).toBe(true);
  });

  it('removes active class from previous tab', async () => {
    const wrapper = mount(TabsContainer);

    const buttons = wrapper.findAll('.tab-button');
    const toolsButton = buttons[0];
    const playablesButton = buttons[1];

    // Initially tools should be active
    expect(toolsButton?.classes()).toContain('active');
    expect(playablesButton?.classes()).not.toContain('active');

    // Click playables tab
    await playablesButton?.trigger('click');

    // Now playables should be active and tools inactive
    expect(toolsButton?.classes()).not.toContain('active');
    expect(playablesButton?.classes()).toContain('active');
  });

  it('can switch back to tools tab', async () => {
    const wrapper = mount(TabsContainer);

    const buttons = wrapper.findAll('.tab-button');
    const toolsButton = buttons[0];
    const playablesButton = buttons[1];

    // Switch to playables
    await playablesButton?.trigger('click');
    expect(playablesButton?.classes()).toContain('active');

    // Switch back to tools
    await toolsButton?.trigger('click');
    expect(toolsButton?.classes()).toContain('active');
    expect(playablesButton?.classes()).not.toContain('active');

    // Check that ToolsList component is rendered again
    const toolsList = wrapper.findComponent({ name: 'ToolsList' });
    expect(toolsList.exists()).toBe(true);
  });

  it('renders tab content container', () => {
    const wrapper = mount(TabsContainer);

    const tabContent = wrapper.find('.tab-content');
    expect(tabContent.exists()).toBe(true);
  });

  it('has correct tab panel structure', () => {
    const wrapper = mount(TabsContainer);

    const tabPanel = wrapper.find('.tab-panel');
    expect(tabPanel.exists()).toBe(true);
  });
});
