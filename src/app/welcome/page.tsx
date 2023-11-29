import React from 'react'
import { css } from '../../../styled-system/css';

export default function Welcome() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'green.50' })}>
      <p>Thank you for your contact.</p>
      <p>We will get back to you as soon as possible.</p>
    </div>
  )
}

