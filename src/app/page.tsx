import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <div className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'green.50' })}>
      <div
        className={css({display: 'inline-block', fontSize: "2xl", fontWeight: 'bold' })}
      >
        Spiritual-blog Home Page
      </div>
    </div>
  )
}
