import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the Get started heading', () => {
    render(<App />)
    expect(screen.getByText('Get started')).toBeInTheDocument()
  })

  it('increments the counter when the button is clicked', async () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Count is 0/i })
    await userEvent.click(button)
    expect(screen.getByRole('button', { name: /Count is 2/i })).toBeInTheDocument()
  })
})