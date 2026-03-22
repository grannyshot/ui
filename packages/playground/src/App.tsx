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
  Dialog,
  ToastProvider,
  toaster,
  Tooltip,
  Popover,
  Tabs,
  Accordion,
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
  const [dialogOpen, setDialogOpen] = useState(false)

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

      {/* Dialog */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Dialog</h2>
        <div style={row}>
          <Dialog.Root open={dialogOpen} onOpenChange={(e) => setDialogOpen(e.open)}>
            <Dialog.Trigger asChild>
              <Button variant="primary">Open Dialog</Button>
            </Dialog.Trigger>
            <Dialog.Content size="sm">
              <Dialog.CloseTrigger />
              <Dialog.Title>Confirm Action</Dialog.Title>
              <Dialog.Description>
                Are you sure you want to proceed? This action cannot be undone.
              </Dialog.Description>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setDialogOpen(false)}>Confirm</Button>
              </div>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </section>

      {/* Toast */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Toast</h2>
        <div style={row}>
          <Button variant="outline" onClick={() => toaster.create({ title: 'Default toast', description: 'This is a notification.' })}>
            Default
          </Button>
          <Button variant="outline" onClick={() => toaster.create({ title: 'Success!', description: 'Operation completed.', type: 'success' })}>
            Success
          </Button>
          <Button variant="outline" onClick={() => toaster.create({ title: 'Error', description: 'Something went wrong.', type: 'error' })}>
            Error
          </Button>
          <Button variant="outline" onClick={() => toaster.create({ title: 'Warning', description: 'Please be careful.', type: 'warning' })}>
            Warning
          </Button>
          <Button variant="outline" onClick={() => toaster.create({ title: 'Info', description: 'Here is some info.', type: 'info' })}>
            Info
          </Button>
        </div>
      </section>

      {/* Tooltip */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Tooltip</h2>
        <div style={row}>
          <Tooltip content="This is a tooltip">
            <Button variant="outline">Hover me</Button>
          </Tooltip>
          <Tooltip content="Another tooltip with longer text that wraps nicely">
            <Badge variant="info">Info badge</Badge>
          </Tooltip>
        </div>
      </section>

      {/* Popover */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Popover</h2>
        <div style={row}>
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button variant="outline">Open Popover</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Arrow />
              <Popover.CloseTrigger />
              <Popover.Title>Popover Title</Popover.Title>
              <Popover.Description>
                This is a popover with some content inside it.
              </Popover.Description>
            </Popover.Content>
          </Popover.Root>
        </div>
      </section>

      {/* Tabs */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Tabs</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div>
            <span style={rowLabel}>Line</span>
            <Tabs.Root defaultValue="tab1" variant="line">
              <Tabs.List>
                <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
                <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
                <Tabs.Trigger value="tab3" disabled>Settings</Tabs.Trigger>
                <Tabs.Indicator />
              </Tabs.List>
              <Tabs.Content value="tab1">
                <p style={{ fontSize: 14 }}>Manage your account settings and preferences.</p>
              </Tabs.Content>
              <Tabs.Content value="tab2">
                <p style={{ fontSize: 14 }}>Change your password and security settings.</p>
              </Tabs.Content>
            </Tabs.Root>
          </div>
          <div>
            <span style={rowLabel}>Pill</span>
            <Tabs.Root defaultValue="tab1" variant="pill">
              <Tabs.List>
                <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
                <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
                <Tabs.Trigger value="tab3" disabled>Settings</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab1">
                <p style={{ fontSize: 14 }}>Manage your account settings and preferences.</p>
              </Tabs.Content>
              <Tabs.Content value="tab2">
                <p style={{ fontSize: 14 }}>Change your password and security settings.</p>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Accordion</h2>
        <Accordion.Root collapsible defaultValue={['item-1']}>
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>What is grannyshot-ui?</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              A Panda CSS-based design system with Ark UI for accessibility and interactions.
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.ItemTrigger>How do I install it?</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              Install via npm: <code>npm install grannyshot-ui</code>, then import styles and components.
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.ItemTrigger>Does it support dark mode?</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              Yes! Use ThemeProvider with light, dark, or system mode.
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Playground />
      <ToastProvider />
    </ThemeProvider>
  )
}
