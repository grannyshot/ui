'use client'

import { Tabs } from '@grannyshot/ui'

export function TabsPreview() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Overview</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Features</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="tab1">Overview content goes here.</Tabs.Content>
      <Tabs.Content value="tab2">Features content goes here.</Tabs.Content>
      <Tabs.Content value="tab3">Settings content goes here.</Tabs.Content>
    </Tabs.Root>
  )
}
