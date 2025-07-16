import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState('')

  const showNotification = (message: string) => {
    setNotification(message)
    setTimeout(() => setNotification(''), 3000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      showNotification('Please fill in all fields')
      return
    }
    showNotification(`Login attempt for ${email}`)
    // Here you would typically handle the login logic
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-gray-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-4)'
    }}>
      {/* Notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: 'var(--space-4)',
          right: 'var(--space-4)',
          backgroundColor: notification.includes('Please') ? 'var(--color-error-50)' : 'var(--color-success-50)',
          color: notification.includes('Please') ? 'var(--color-error-600)' : 'var(--color-success-600)',
          padding: 'var(--space-3) var(--space-4)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          border: `1px solid ${notification.includes('Please') ? 'var(--color-error-500)' : 'var(--color-success-500)'}`,
          zIndex: 'var(--z-tooltip)'
        }}>
          {notification}
        </div>
      )}

      <div style={{
        backgroundColor: 'white',
        padding: 'var(--space-8)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-xl)',
        border: '1px solid var(--color-gray-200)',
        width: '100%',
        maxWidth: '400px'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <h1 style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-gray-900)',
            marginBottom: 'var(--space-2)'
          }}>
            Welcome Back
          </h1>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--color-gray-600)',
            margin: 0
          }}>
            Sign in to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-gray-700)',
                marginBottom: 'var(--space-2)'
              }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: 'var(--space-3)',
                fontSize: 'var(--font-size-base)',
                border: '1px solid var(--color-gray-300)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'white',
                color: 'var(--color-gray-900)',
                transition: 'var(--transition-fast)',
                fontFamily: 'var(--font-family-primary)',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary-500)'
                e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-primary-100)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gray-300)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--color-gray-700)',
                marginBottom: 'var(--space-2)'
              }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: 'var(--space-3)',
                fontSize: 'var(--font-size-base)',
                border: '1px solid var(--color-gray-300)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'white',
                color: 'var(--color-gray-900)',
                transition: 'var(--transition-fast)',
                fontFamily: 'var(--font-family-primary)',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary-500)'
                e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-primary-100)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gray-300)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-6)'
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-gray-600)',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                style={{
                  marginRight: 'var(--space-2)',
                  accentColor: 'var(--color-primary-600)'
                }}
              />
              Remember me
            </label>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                showNotification('Forgot password feature coming soon!')
              }}
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-primary-600)',
                textDecoration: 'none',
                fontWeight: 'var(--font-weight-medium)'
              }}
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: 'var(--color-primary-600)',
              color: 'white',
              border: 'none',
              padding: 'var(--space-3)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-semibold)',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-base)',
              transition: 'var(--transition-base)',
              fontFamily: 'var(--font-family-primary)',
              marginBottom: 'var(--space-6)'
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
            Sign In
          </button>

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 'var(--space-6)'
          }}>
            <div style={{
              flex: 1,
              height: '1px',
              backgroundColor: 'var(--color-gray-300)'
            }} />
            <span style={{
              padding: '0 var(--space-4)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-gray-500)'
            }}>
              or
            </span>
            <div style={{
              flex: 1,
              height: '1px',
              backgroundColor: 'var(--color-gray-300)'
            }} />
          </div>

          {/* Back to Home */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/"
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--color-gray-600)',
                textDecoration: 'none'
              }}
            >
              ← Back to Design System
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
