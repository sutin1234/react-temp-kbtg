import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './design-tokens.css'
import Login from './Login'

function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [notification, setNotification] = useState('')

  const showNotification = (message: string) => {
    setNotification(message)
    setTimeout(() => setNotification(''), 3000)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-gray-50)' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        boxShadow: 'var(--shadow-sm)',
        borderBottom: '1px solid var(--color-gray-200)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'var(--space-4) var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-primary-600)',
            margin: 0
          }}>
            Design System
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
            <nav style={{ display: 'flex', gap: 'var(--space-6)' }}>
              {['overview', 'components', 'tokens'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: activeTab === tab ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
                    color: activeTab === tab ? 'var(--color-primary-600)' : 'var(--color-gray-600)',
                    cursor: 'pointer',
                    padding: 'var(--space-2) var(--space-3)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'var(--transition-fast)',
                    textTransform: 'capitalize'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab) {
                      e.currentTarget.style.backgroundColor = 'var(--color-gray-100)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  {tab}
                </button>
              ))}
            </nav>
            <Link
              to="/login"
              style={{
                backgroundColor: 'var(--color-primary-600)',
                color: 'white',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-700)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: 'var(--space-4)',
          right: 'var(--space-4)',
          backgroundColor: 'var(--color-success-50)',
          color: 'var(--color-success-600)',
          padding: 'var(--space-3) var(--space-4)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--color-success-500)',
          zIndex: 'var(--z-tooltip)'
        }}>
          {notification}
        </div>
      )}

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'var(--space-8) var(--space-6)'
      }}>
        {activeTab === 'overview' && (
          <div>
            {/* Hero Section */}
            <section style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{
                fontSize: 'var(--font-size-5xl)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-gray-900)',
                marginBottom: 'var(--space-6)',
                lineHeight: 'var(--line-height-tight)'
              }}>
                Modern Design System
              </h2>
              <p style={{
                fontSize: 'var(--font-size-xl)',
                color: 'var(--color-gray-600)',
                marginBottom: 'var(--space-8)',
                maxWidth: '600px',
                margin: '0 auto var(--space-8) auto',
                lineHeight: 'var(--line-height-normal)'
              }}>
                A comprehensive design system built with design tokens for consistent, scalable, and maintainable user interfaces.
              </p>
              <button
                onClick={() => showNotification('Welcome to our Design System!')}
                style={{
                  backgroundColor: 'var(--color-primary-600)',
                  color: 'white',
                  border: 'none',
                  padding: 'var(--space-3) var(--space-6)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  borderRadius: 'var(--radius-lg)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-base)',
                  transition: 'var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary-700)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-base)'
                }}
              >
                Get Started
              </button>
            </section>

            {/* Features Grid */}
            <section style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-16)'
            }}>
              {[
                { title: 'Design Tokens', desc: 'Centralized design decisions for colors, typography, and spacing', icon: '🎨' },
                { title: 'Components', desc: 'Reusable UI components built with consistent patterns', icon: '🧩' },
                { title: 'Accessibility', desc: 'Built with accessibility and inclusive design principles', icon: '♿' },
                { title: 'Responsive', desc: 'Mobile-first design that works on all screen sizes', icon: '📱' }
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'white',
                    padding: 'var(--space-6)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-base)',
                    border: '1px solid var(--color-gray-200)',
                    transition: 'var(--transition-base)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-base)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  onClick={() => showNotification(`Learn more about ${feature.title}`)}
                >
                  <div style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-4)' }}>
                    {feature.icon}
                  </div>
                  <h3 style={{
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-gray-900)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--color-gray-600)',
                    lineHeight: 'var(--line-height-normal)',
                    margin: 0
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </section>
          </div>
        )}

        {activeTab === 'components' && (
          <div>
            <h2 style={{
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-gray-900)',
              marginBottom: 'var(--space-8)'
            }}>
              UI Components
            </h2>

            {/* Buttons Section */}
            <section style={{ marginBottom: 'var(--space-12)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-gray-900)',
                marginBottom: 'var(--space-4)'
              }}>
                Buttons
              </h3>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                {[
                  { variant: 'primary', bg: 'var(--color-primary-600)', hoverBg: 'var(--color-primary-700)' },
                  { variant: 'success', bg: 'var(--color-success-500)', hoverBg: 'var(--color-success-600)' },
                  { variant: 'warning', bg: 'var(--color-warning-500)', hoverBg: 'var(--color-warning-600)' },
                  { variant: 'error', bg: 'var(--color-error-500)', hoverBg: 'var(--color-error-600)' }
                ].map((btn) => (
                  <button
                    key={btn.variant}
                    onClick={() => showNotification(`${btn.variant} button clicked!`)}
                    style={{
                      backgroundColor: btn.bg,
                      color: 'white',
                      border: 'none',
                      padding: 'var(--space-2) var(--space-4)',
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 'var(--font-weight-medium)',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                      textTransform: 'capitalize'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = btn.hoverBg
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = btn.bg
                    }}
                  >
                    {btn.variant}
                  </button>
                ))}
              </div>
            </section>

            {/* Cards Section */}
            <section style={{ marginBottom: 'var(--space-12)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-gray-900)',
                marginBottom: 'var(--space-4)'
              }}>
                Cards
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-4)'
              }}>
                {['Small', 'Medium', 'Large'].map((size, index) => (
                  <div
                    key={size}
                    style={{
                      backgroundColor: 'white',
                      padding: 'var(--space-4)',
                      borderRadius: 'var(--radius-lg)',
                      boxShadow: index === 0 ? 'var(--shadow-sm)' : index === 1 ? 'var(--shadow-base)' : 'var(--shadow-lg)',
                      border: '1px solid var(--color-gray-200)'
                    }}
                  >
                    <h4 style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-gray-900)',
                      marginBottom: 'var(--space-2)'
                    }}>
                      {size} Card
                    </h4>
                    <p style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-gray-600)',
                      margin: 0,
                      lineHeight: 'var(--line-height-normal)'
                    }}>
                      This is a {size.toLowerCase()} card with {index === 0 ? 'subtle' : index === 1 ? 'medium' : 'prominent'} shadow.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'tokens' && (
          <div>
            <h2 style={{
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-gray-900)',
              marginBottom: 'var(--space-8)'
            }}>
              Design Tokens
            </h2>

            {/* Colors */}
            <section style={{ marginBottom: 'var(--space-12)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-gray-900)',
                marginBottom: 'var(--space-4)'
              }}>
                Color Palette
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                {[
                  { name: 'Primary', colors: ['50', '100', '500', '600', '700', '900'] },
                  { name: 'Gray', colors: ['50', '100', '500', '600', '700', '900'] },
                  { name: 'Success', colors: ['50', '500', '600'] },
                  { name: 'Warning', colors: ['50', '500', '600'] },
                  { name: 'Error', colors: ['50', '500', '600'] }
                ].map((palette) => (
                  <div key={palette.name}>
                    <h4 style={{
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-gray-900)',
                      marginBottom: 'var(--space-2)'
                    }}>
                      {palette.name}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                      {palette.colors.map((shade) => (
                        <div
                          key={shade}
                          style={{
                            backgroundColor: `var(--color-${palette.name.toLowerCase()}-${shade})`,
                            height: 'var(--space-8)',
                            borderRadius: 'var(--radius-sm)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 'var(--font-size-xs)',
                            fontWeight: 'var(--font-weight-medium)',
                            color: parseInt(shade) > 400 ? 'white' : 'var(--color-gray-900)'
                          }}
                        >
                          {shade}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Typography */}
            <section style={{ marginBottom: 'var(--space-12)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-gray-900)',
                marginBottom: 'var(--space-4)'
              }}>
                Typography
              </h3>
              <div style={{
                backgroundColor: 'white',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-base)'
              }}>
                {[
                  { size: '5xl', label: 'Heading 1' },
                  { size: '3xl', label: 'Heading 2' },
                  { size: '2xl', label: 'Heading 3' },
                  { size: 'xl', label: 'Heading 4' },
                  { size: 'lg', label: 'Large Text' },
                  { size: 'base', label: 'Body Text' },
                  { size: 'sm', label: 'Small Text' },
                  { size: 'xs', label: 'Caption' }
                ].map((type) => (
                  <div key={type.size} style={{ marginBottom: 'var(--space-3)' }}>
                    <span style={{
                      fontSize: `var(--font-size-${type.size})`,
                      color: 'var(--color-gray-900)',
                      fontWeight: type.size.includes('xl') ? 'var(--font-weight-bold)' : 'var(--font-weight-normal)'
                    }}>
                      {type.label} - The quick brown fox jumps over the lazy dog
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Spacing */}
            <section>
              <h3 style={{
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-gray-900)',
                marginBottom: 'var(--space-4)'
              }}>
                Spacing Scale
              </h3>
              <div style={{
                backgroundColor: 'white',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-base)'
              }}>
                {['1', '2', '3', '4', '6', '8', '10', '12', '16'].map((space) => (
                  <div key={space} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--space-2)'
                  }}>
                    <span style={{
                      width: '60px',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--color-gray-600)',
                      fontFamily: 'var(--font-family-mono)'
                    }}>
                      {space}
                    </span>
                    <div style={{
                      backgroundColor: 'var(--color-primary-200)',
                      height: 'var(--space-4)',
                      width: `var(--space-${space})`,
                      borderRadius: 'var(--radius-sm)'
                    }} />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--color-gray-900)',
        color: 'var(--color-gray-300)',
        textAlign: 'center',
        padding: 'var(--space-8) var(--space-6)',
        marginTop: 'var(--space-16)'
      }}>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          margin: 0
        }}>
          Built with design tokens for consistent, scalable design systems.
        </p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DesignSystemPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
