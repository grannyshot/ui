import { useState } from 'react'
import '@grannyshot/ui/styles.css'
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
  Avatar,
  Table,
  Separator,
  Skeleton,
  Combobox,
  Menu,
  DatePicker,
  Slider,
  Progress,
  Drawer,
  toast,
  dialog,
  DialogProvider,
  drawer,
  DrawerProvider,
} from '@grannyshot/ui'

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

const languages = createListCollection({
  items: [
    { label: 'TypeScript', value: 'typescript' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Python', value: 'python' },
    { label: 'Rust', value: 'rust' },
    { label: 'Go', value: 'go' },
    { label: 'Java', value: 'java' },
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
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [progressValue, setProgressValue] = useState(45)

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
          <span style={rowLabel}>Declarative</span>
          <Dialog.Root open={dialogOpen} onOpenChange={(e) => setDialogOpen(e.open)}>
            <Dialog.Trigger asChild>
              <Button variant="outline">Open Dialog</Button>
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
        <div style={row}>
          <span style={rowLabel}>Imperative</span>
          <Button variant="outline" onClick={async () => {
            const ok = await dialog.confirm({ title: 'Delete item', description: 'This cannot be undone.', confirmText: 'Delete', cancelText: 'Cancel' })
            toast[ok ? 'success' : 'info'](ok ? 'Deleted!' : 'Cancelled')
          }}>
            dialog.confirm
          </Button>
          <Button variant="outline" onClick={() => dialog.alert({ title: 'Done', description: 'Operation completed successfully.', confirmText: 'OK' })}>
            dialog.alert
          </Button>
          <Button variant="outline" onClick={() => dialog.open({
            size: 'md',
            content: (close) => (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Custom Modal</h3>
                <p style={{ margin: 0, fontSize: 14, opacity: 0.7 }}>This is a fully custom modal content.</p>
                <Field label="Your feedback">
                  <Textarea placeholder="Write something..." />
                </Field>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                  <Button variant="outline" onClick={close}>Cancel</Button>
                  <Button variant="primary" onClick={() => { toast.success('Submitted!'); close() }}>Submit</Button>
                </div>
              </div>
            ),
          })}>
            dialog.open (custom)
          </Button>
        </div>
      </section>

      {/* Toast */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Toast</h2>
        <div style={row}>
          <span style={rowLabel}>Shorthand</span>
          <Button variant="outline" onClick={() => toast.success('Saved successfully')}>Success</Button>
          <Button variant="outline" onClick={() => toast.error('Something went wrong')}>Error</Button>
          <Button variant="outline" onClick={() => toast.warning('Be careful')}>Warning</Button>
          <Button variant="outline" onClick={() => toast.info('Here is some info')}>Info</Button>
        </div>
        <div style={row}>
          <span style={rowLabel}>Advanced</span>
          <Button variant="outline" onClick={() => toast.promise(
            new Promise((r) => setTimeout(r, 2000)),
            { loading: 'Uploading...', success: 'Upload complete!', error: 'Upload failed' }
          )}>
            toast.promise
          </Button>
          <Button variant="outline" onClick={() => toast.custom((dismiss) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar size="sm" name="Bot" />
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Custom Toast</p>
                <p style={{ margin: 0, fontSize: 13, opacity: 0.7 }}>With any content you want</p>
              </div>
              <Button variant="ghost" size="sm" onClick={dismiss}>Dismiss</Button>
            </div>
          ))}>
            toast.custom
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
              A Tailwind CSS-based design system with Ark UI for accessibility and interactions.
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

      {/* Avatar */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Avatar</h2>
        <div style={row}>
          <span style={rowLabel}>Size</span>
          <Avatar size="sm" name="John Doe" />
          <Avatar size="md" name="Jane Smith" />
          <Avatar size="lg" name="Alex" />
          <Avatar size="xl" src="https://i.pravatar.cc/128" alt="User" />
        </div>
      </section>

      {/* Table */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Table</h2>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Alice Kim</Table.Cell>
              <Table.Cell>Engineer</Table.Cell>
              <Table.Cell><Badge variant="success">Active</Badge></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Bob Park</Table.Cell>
              <Table.Cell>Designer</Table.Cell>
              <Table.Cell><Badge variant="warning">Away</Badge></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Charlie Lee</Table.Cell>
              <Table.Cell>PM</Table.Cell>
              <Table.Cell><Badge variant="neutral">Offline</Badge></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </section>

      {/* Separator */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Separator</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ fontSize: 14 }}>Content above</p>
          <Separator />
          <p style={{ fontSize: 14 }}>Content below</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16, height: 40 }}>
          <span style={{ fontSize: 14 }}>Left</span>
          <Separator orientation="vertical" />
          <span style={{ fontSize: 14 }}>Right</span>
        </div>
      </section>

      {/* Skeleton */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Skeleton</h2>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <Skeleton variant="circular" width={48} height={48} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 16 }}>
          <Skeleton variant="rectangular" height={120} />
          <Skeleton variant="rectangular" height={120} />
          <Skeleton variant="rectangular" height={120} />
        </div>
      </section>

      {/* Combobox */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Combobox</h2>
        <div style={{ maxWidth: 300 }}>
          <Combobox collection={languages} placeholder="Search language..." />
        </div>
      </section>

      {/* Menu */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Menu</h2>
        <div style={row}>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline">Open Menu</Button>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.Item value="edit">Edit</Menu.Item>
              <Menu.Item value="duplicate">Duplicate</Menu.Item>
              <Menu.Separator />
              <Menu.Item value="delete">Delete</Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </div>
      </section>

      {/* DatePicker */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>DatePicker</h2>
        <div style={{ maxWidth: 300 }}>
          <DatePicker />
        </div>
      </section>

      {/* Slider */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Slider</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
          <Slider size="sm" label="Volume" defaultValue={[30]} />
          <Slider size="md" label="Brightness" defaultValue={[60]} showValue />
          <Slider size="lg" label="Opacity" defaultValue={[80]} showValue />
        </div>
      </section>

      {/* Progress */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Progress</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
          <Progress size="sm" value={25} label="Upload" showValue />
          <Progress size="md" value={progressValue} label="Processing" showValue />
          <Progress size="lg" value={80} label="Complete" showValue />
          <Button variant="outline" size="sm" onClick={() => setProgressValue((v) => Math.min(100, v + 10))}>
            +10%
          </Button>
        </div>
      </section>

      {/* Drawer */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Drawer</h2>
        <div style={row}>
          <span style={rowLabel}>Declarative</span>
          <Drawer.Root open={drawerOpen} onOpenChange={(e) => setDrawerOpen(e.open)}>
            <Drawer.Trigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Settings</Drawer.Title>
                <Drawer.Description>Configure your preferences</Drawer.Description>
                <Drawer.CloseTrigger />
              </Drawer.Header>
              <Drawer.Body>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <Field label="Display Name">
                    <Input placeholder="Your name" />
                  </Field>
                  <Field label="Bio">
                    <Textarea placeholder="Tell us about yourself" />
                  </Field>
                </div>
              </Drawer.Body>
              <Drawer.Footer>
                <Button variant="outline" onClick={() => setDrawerOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setDrawerOpen(false)}>Save</Button>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Root>
        </div>
        <div style={row}>
          <span style={rowLabel}>Imperative</span>
          <Button variant="outline" onClick={() => drawer.open({
            title: 'Notifications',
            description: 'Manage your notification settings',
            content: (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Switch label="Email notifications" defaultChecked />
                <Switch label="Push notifications" />
                <Switch label="SMS notifications" />
                <Separator />
                <Switch label="Marketing emails" />
              </div>
            ),
          })}>
            drawer.open
          </Button>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Playground />
      <ToastProvider />
      <DialogProvider />
      <DrawerProvider />
    </ThemeProvider>
  )
}
