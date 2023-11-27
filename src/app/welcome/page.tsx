import React from 'react'
import { css } from '../../../styled-system/css';

export default function Welcome() {
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'green.50' })}>
      <p>お問合わせいただき、ありがとうございます。</p>
      <p>追って、ご相談日時を調整させていただきますので、</p>
      <p>今しばらくお待ちください。</p>
    </div>
  )
}

