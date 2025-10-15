/* frontend.test.jsx */
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // adds custom matchers like toBeInTheDocument
import Candy from '../Candy'
import App from '../App' 

describe('local dummy test', () => {
  test('2', () => {
    expect(2).toBe(2)
  })
})

describe('Candy', () => {
  test('renders candy details', () => {
    render(<Candy name="TestCandy" mass="100g" origin="HU" />)
    expect(screen.getByText(/TestCandy/i)).toBeInTheDocument()
    expect(screen.getByText(/100g/i)).toBeInTheDocument()
    expect(screen.getByText(/HU/i)).toBeInTheDocument()
  })
})

describe('App', () => {
  test('renders App heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /Candies/i, level: 1 })
    expect(heading).toBeInTheDocument()
  })
})