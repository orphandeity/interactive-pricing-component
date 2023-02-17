import * as Slider from '@radix-ui/react-slider'
import * as Switch from '@radix-ui/react-switch'
import styles from './radix-styles.module.css'

function App() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-16'>
      <header className='flex flex-col items-center gap-2'>
        <h1 className='text-xl font-semibold'>Simple, traffic-based pricing</h1>
        <p className='text-center text-sm leading-6 text-_grayish-blue'>
          Sign-up for our 30-day trial.
          <br />
          No credit card required.
        </p>
      </header>

      <form className='flex max-w-xs flex-col items-center gap-8 rounded-lg bg-white'>
        <div>
          <p>Pageviews</p>

          <Slider.Root
            defaultValue={[50]}
            max={100}
            step={1}
            aria-label='Price'
            className={styles.SliderRoot}
          >
            <Slider.Track className={styles.SliderTrack}>
              <Slider.Range className={styles.SliderRange} />
            </Slider.Track>
            <Slider.Thumb className={styles.SliderThumb} />
          </Slider.Root>
          <div>$ /month</div>
        </div>

        <div className='flex gap-4'>
          <div>Monthly Billing</div>
          <Switch.Root className='relative h-6 w-12 rounded-full shadow-inner ring-offset-2 focus:ring-2 focus:ring-_strong-cyan data-[state=checked]:bg-_toggle-background data-[state=unchecked]:bg-_toggle-background'>
            <Switch.Thumb className='block h-4 w-4 translate-x-1 rounded-full bg-white shadow transition-transform data-[state=checked]:translate-x-7' />
          </Switch.Root>
          <div>
            Yearly Billing <span>-25%</span>
          </div>
        </div>
        <hr />
        <div>
          <p>Unlimited websites</p>
          <p>100% data ownership</p>
          <p>Email reports</p>
        </div>

        <button>Start my trial</button>
      </form>
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
