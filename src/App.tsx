function App() {
  return (
    <main>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>

      <p>Pageviews</p>
      <div>$ /month</div>

      <div>Monthly Billing</div>
      <div>Yearly Billing 25% discount</div>

      <p>Unlimited websites</p>
      <p>100% data ownership</p>
      <p>Email reports</p>

      <button>Start my trial</button>
    </main>
  )
}

const Attribution = () => {
  return (
    <div>
      Challenge by{' '}
      <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href='https://www.frontendmentor.io/profile/orphandeity'>
        Jeff R Williams
      </a>
      .
    </div>
  )
}

export default App
