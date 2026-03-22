import { useState } from 'react'
import 'grannyshot-ui/styles.css'
import {
  ThemeProvider,
  useTheme,
  Button,
  Input,
  Badge,
  Card,
  Textarea,
  Label,
  Checkbox,
  Switch,
  Select,
  createListCollection,
  Field,
} from 'grannyshot-ui'

const containerStyle: React.CSSProperties = {
  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  minHeight: '100vh',
  padding: '48px 24px',
  maxWidth: 960,
  margin: '0 auto',
}

const sectionStyle: React.CSSProperties = {
  marginBottom: 48,
}

const sectionTitle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  opacity: 0.5,
  marginBottom: 16,
}

const row: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 12,
  marginBottom: 16,
}

const rowLabel: React.CSSProperties = {
  fontSize: 12,
  opacity: 0.4,
  minWidth: 72,
  flexShrink: 0,
}

const frameworks = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Solid', value: 'solid' },
    { label: 'Svelte', value: 'svelte' },
  ],
})

const roles = createListCollection({
  items: [
    { label: 'Admin', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Viewer', value: 'viewer' },
  ],
})

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const themes = ['light', 'dark', 'system'] as const

  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          style={{
            padding: '6px 14px',
            fontSize: 13,
            fontWeight: 500,
            border: '1px solid',
            borderColor: theme === t ? 'var(--gs-colors-accent)' : 'var(--gs-colors-border)',
            borderRadius: 6,
            background: theme === t ? 'var(--gs-colors-accent)' : 'transparent',
            color: theme === t ? 'var(--gs-colors-accent-fg)' : 'inherit',
            cursor: 'pointer',
            transition: 'all 150ms',
            fontFamily: 'inherit',
          }}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  )
}

function Playground() {
  const [checked, setChecked] = useState(false)

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 56 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>grannyshot-ui</h1>
          <p style={{ fontSize: 14, opacity: 0.5, margin: '4px 0 0' }}>Component playground</p>
        </div>
        <ThemeToggle />
      </div>

      {/* Button */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Button</h2>
        <div style={row}>
          <span style={rowLabel}>Variant</span>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
        <div style={row}>
          <span style={rowLabel}>Size</span>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div style={row}>
          <span style={rowLabel}>Disabled</span>
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>Disabled</Button>
        </div>
      </section>

      {/* Input */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Input</h2>
        <div style={row}>
          <span style={rowLabel}>Size</span>
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
        <div style={row}>
          <span style={rowLabel}>State</span>
          <Input placeholder="Default" />
          <Input state="error" placeholder="Error" />
          <Input state="success" placeholder="Success" />
        </div>
      </section>

      {/* Textarea */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Textarea</h2>
        <div style={row}>
          <span style={rowLabel}>Size</span>
          <Textarea size="sm" placeholder="Small textarea" />
          <Textarea size="md" placeholder="Medium textarea" />
          <Textarea size="lg" placeholder="Large textarea" />
        </div>
        <div style={row}>
          <span style={rowLabel}>Resize</span>
          <Textarea placeholder="Vertical (default)" resize="vertical" />
          <Textarea placeholder="None" resize="none" />
        </div>
      </section>

      {/* Label */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Label</h2>
        <div style={row}>
          <Label>Default label</Label>
          <Label required>Required label</Label>
          <Label disabled>Disabled label</Label>
        </div>
      </section>

      {/* Checkbox */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Checkbox</h2>
        <div style={row}>
          <span style={rowLabel}>Size</span>
          <Checkbox size="sm" label="Small" />
          <Checkbox size="md" label="Medium" />
          <Checkbox size="lg" label="Large" />
        </div>
        <div style={row}>
          <span style={rowLabel}>State</span>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" checked="indeterminate" />
          <Checkbox label="Disabled" disabled />
        </div>
      </section>

      {/* Switch */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Switch</h2>
        <div style={row}>
          <span style={rowLabel}>Size</span>
          <Switch size="sm" label="Small" />
          <Switch size="md" label="Medium" />
          <Switch size="lg" label="Large" />
        </div>
        <div style={row}>
          <span style={rowLabel}>State</span>
          <Switch label="Off" />
          <Switch label="On" defaultChecked />
          <Switch label="Disabled" disabled />
        </div>
      </section>

      {/* Select */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Select</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          <Select collection={frameworks} size="sm" placeholder="Small select" />
          <Select collection={frameworks} size="md" placeholder="Medium select" />
          <Select collection={frameworks} size="lg" placeholder="Large select" />
        </div>
      </section>

      {/* Badge */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Badge</h2>
        <div style={row}>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>
      </section>

      {/* Card */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Card</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          <Card padding="sm">
            <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600 }}>Small</h3>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>Compact spacing.</p>
          </Card>
          <Card padding="md" hoverable>
            <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600 }}>Hoverable</h3>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>Hover to see effect.</p>
          </Card>
          <Card padding="lg">
            <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600 }}>Large</h3>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>Spacious layout.</p>
          </Card>
        </div>
      </section>

      {/* Field (Combined) */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Field</h2>
        <Card padding="lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
            <Field label="Name" hint="Enter your full name" required>
              <Input placeholder="John Doe" />
            </Field>
            <Field label="Email" error="Invalid email address" required>
              <Input placeholder="john@example.com" state="error" />
            </Field>
            <Field label="Role">
              <Select collection={roles} placeholder="Select role" />
            </Field>
            <Field label="Bio" hint="Brief description">
              <Textarea placeholder="Tell us about yourself..." />
            </Field>
            <Field label="Notifications">
              <Checkbox label="Receive email updates" />
            </Field>
            <Button variant="primary">Submit</Button>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Playground />
    </ThemeProvider>
  )
}
