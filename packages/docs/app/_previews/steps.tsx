'use client'

import { Steps } from '@grannyshot/ui'

export function StepsPreview() {
  return (
    <Steps.Root count={3} defaultStep={1}>
      <Steps.List>
        <Steps.Item index={0} title="Account" />
        <Steps.Item index={1} title="Profile" />
        <Steps.Item index={2} title="Complete" />
      </Steps.List>
      <Steps.Content index={0}>Set up your account details.</Steps.Content>
      <Steps.Content index={1}>Fill in your profile information.</Steps.Content>
      <Steps.Content index={2}>Review and confirm.</Steps.Content>
      <Steps.CompletedContent>All steps completed!</Steps.CompletedContent>
    </Steps.Root>
  )
}
