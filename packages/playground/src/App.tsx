import 'grannyshot-ui/styles.css'
import {
  ThemeProvider,
  useTheme,
  Button,
  Input,
  Badge,
  Card,
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

const label: React.CSSProperties = {
  fontSize: 12,
  opacity: 0.4,
  minWidth: 72,
  flexShrink: 0,
}

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
            borderColor: theme === t ? 'var(--gs-emerald-9, #10b981)' : 'var(--gs-neutral-6, #525252)',
            borderRadius: 6,
            background: theme === t ? 'var(--gs-emerald-9, #10b981)' : 'transparent',
            color: theme === t ? '#fff' : 'inherit',
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
  const { resolvedTheme } = useTheme()

  const bg = resolvedTheme === 'dark' ? '#0a0a0a' : '#fafafa'
  const fg = resolvedTheme === 'dark' ? '#e5e5e5' : '#171717'

  return (
    <div style={{ ...containerStyle, background: bg, color: fg }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 56,
        }}
      >
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>
            grannyshot-ui
          </h1>
          <p style={{ fontSize: 14, opacity: 0.5, margin: '4px 0 0' }}>
            Component playground
          </p>
        </div>
        <ThemeToggle />
      </div>

      {/* Button Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Button</h2>

        <div style={row}>
          <span style={label}>Variant</span>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>

        <div style={row}>
          <span style={label}>Size</span>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>

        <div style={row}>
          <span style={label}>Full width</span>
          <div style={{ flex: 1 }}>
            <Button variant="primary" fullWidth>Full Width Button</Button>
          </div>
        </div>

        <div style={row}>
          <span style={label}>Disabled</span>
          <Button variant="primary" disabled>Disabled Primary</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </div>
      </section>

      {/* Input Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Input</h2>

        <div style={row}>
          <span style={label}>Size</span>
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
        </div>

        <div style={row}>
          <span style={label}>State</span>
          <Input placeholder="Default" />
          <Input state="error" placeholder="Error state" />
          <Input state="success" placeholder="Success state" />
        </div>

        <div style={row}>
          <span style={label}>Disabled</span>
          <Input placeholder="Disabled input" disabled />
        </div>
      </section>

      {/* Badge Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Badge</h2>

        <div style={row}>
          <span style={label}>Variant</span>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </div>

        <div style={row}>
          <span style={label}>Size</span>
          <Badge variant="success" size="sm">Small</Badge>
          <Badge variant="success" size="md">Medium</Badge>
        </div>
      </section>

      {/* Card Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Card</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          <Card padding="sm">
            <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600 }}>Small padding</h3>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>
              A card with compact spacing for dense layouts.
            </p>
          </Card>

          <Card padding="md">
            <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600 }}>Medium padding</h3>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>
              Default card size, suitable for most use cases.
            </p>
          </Card>

          <Card padding="lg">
            <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600 }}>Large padding</h3>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>
              Spacious card for featured or hero content.
            </p>
          </Card>

          <Card padding="md" hoverable>
            <h3 style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 600 }}>Hoverable</h3>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.6 }}>
              Hover over this card to see the interaction effect.
            </p>
          </Card>
        </div>
      </section>

      {/* Combined Example */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Combined Example</h2>

        <Card padding="lg">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>Create Account</h3>
            <Badge variant="info" size="sm">New</Badge>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Input size="md" placeholder="Full name" />
            <Input size="md" placeholder="Email address" type="email" />
            <Input size="md" placeholder="Password" type="password" />
            <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
              <Button variant="primary">Sign Up</Button>
              <Button variant="ghost">Cancel</Button>
            </div>
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