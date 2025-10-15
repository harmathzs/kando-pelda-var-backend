/* frontend.test.jsx */
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // adds custom matchers like toBeInTheDocument
import userEvent from '@testing-library/user-event'
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

  test('allows user to add a new candy', async () => {
    render(<App />)
    await userEvent.type(screen.getByPlaceholderText(/Candy name/i), 'New Candy')
    await userEvent.type(screen.getByPlaceholderText(/e.g. 100g/i), '150g')
    await userEvent.type(screen.getByPlaceholderText(/Country code/i), 'US')
    await userEvent.click(screen.getByRole('button', {name: /Add Candy/i}))

    // Add assertions for expected behavior after form submit
  })  
})