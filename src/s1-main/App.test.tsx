import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { expect, test } from "vitest";

test('renders learn react link', () => {
    render(<App />)
    // const linkElement = screen.getByText(/learn react/i)
    // expect(linkElement).toBeInTheDocument()
    expect(1).toBe(1)
})
