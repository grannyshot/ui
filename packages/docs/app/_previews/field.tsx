'use client'

import { Field, Input } from '@grannyshot/ui'

export function FieldPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
      <Field label="Email" required hint="We'll never share your email.">
        <Input type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Password" error="Password must be at least 8 characters.">
        <Input type="password" placeholder="••••••••" />
      </Field>
    </div>
  )
}
