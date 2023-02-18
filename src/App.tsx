import { useState, useEffect } from 'react'
import * as Slider from '@radix-ui/react-slider'
import * as Switch from '@radix-ui/react-switch'
import { ReactComponent as IconSlider } from './assets/icon-slider.svg'
import { ReactComponent as IconCheck } from './assets/icon-check.svg'
import { ReactComponent as PatternCircles } from './assets/pattern-circles.svg'

function App() {
  const [plan, setPlan] = useState<1 | 2 | 3>(2)
  const [traffic, setTraffic] = useState<number>(100)
  const [finalPrice, setFinalPrice] = useState<number>(16)
  const [yearlyBilling, setYearlyBilling] = useState<boolean>(false)

  // Choose pricing plan
  function handlePriceSlider(value: number[]) {
    let [selection] = value
    if (selection === 0) setPlan(1)
    if (selection === 50) setPlan(2)
    if (selection === 100) setPlan(3)
  }

  // Choose monthly or yearly billing
  function handleBillingPlan(checked: boolean) {
    setYearlyBilling(checked)
  }

  // Render Final Price
  useEffect(() => {
    let price
    switch (plan) {
      case 1:
        price = 10
        setTraffic(50)
        break
      case 2:
        price = 16
        setTraffic(100)
        break
      case 3:
        price = 32
        setTraffic(250)
        break
      default:
        price = 16
        break
    }
    setFinalPrice(yearlyBilling ? price * 0.75 : price)
  }, [plan, finalPrice, yearlyBilling])

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8'>
      <header className='relative flex flex-col items-center gap-2 py-8 desktop:py-16'>
        <h1 className='text-xl font-semibold desktop:text-3xl'>
          Simple, traffic-based pricing
        </h1>
        <p className='text-center text-sm leading-6 text-_grayish-blue desktop:text-base'>
          Sign-up for our 30-day trial. <br className='desktop:hidden' />
          No credit card required.
        </p>
        <PatternCircles className='absolute inset-0 left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2' />
      </header>

      <form className='flex w-[340px] flex-col items-center gap-8 rounded-lg bg-white py-8 shadow-2xl desktop:w-[600px] desktop:px-12'>
        {/* Pricing Slider */}
        <div className='flex grid-cols-2 flex-col items-center justify-items-center gap-10 desktop:grid desktop:gap-0'>
          <p className='justify-self-start text-sm font-semibold uppercase tracking-widest text-_grayish-blue'>
            {traffic}k Pageviews
          </p>

          <Slider.Root
            defaultValue={[50]}
            max={100}
            step={50}
            aria-label='Price'
            onValueCommit={value => handlePriceSlider(value)}
            className='relative col-span-2 row-start-2 flex h-4 w-72 touch-none select-none items-center desktop:mt-8 desktop:w-[450px] desktop:py-8'
          >
            <Slider.Track className='relative h-2 flex-1 rounded-full bg-_empty-slider-bar'>
              <Slider.Range className='absolute h-full rounded-full bg-_soft-cyan' />
            </Slider.Track>
            <Slider.Thumb className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-_strong-cyan shadow-[0_15px_30px_rgba(42,239,219,0.8)] ring-_strong-cyan/50 ring-offset-2 focus:outline-none focus:ring-2 active:cursor-grabbing'>
              <IconSlider />
            </Slider.Thumb>
          </Slider.Root>

          <div className='flex items-center gap-2'>
            <span className='text-4xl font-bold desktop:text-5xl'>
              ${finalPrice.toFixed(2)}
            </span>{' '}
            <span className='text-_grayish-blue'>/ month</span>
          </div>
        </div>

        {/* Billing Plan Switch */}
        <div className='relative flex items-center justify-center gap-2 text-xs text-_grayish-blue'>
          <div className='absolute -left-[95px] desktop:left-[-99px]'>
            Monthly Billing
          </div>
          <Switch.Root
            onCheckedChange={checked => handleBillingPlan(checked)}
            className='relative h-6 w-12 rounded-full shadow-inner ring-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-_strong-cyan/50 data-[state=checked]:bg-_toggle-background data-[state=unchecked]:bg-_toggle-background hover:data-[state=unchecked]:bg-_soft-cyan hover:data-[state=checked]:bg-_soft-cyan'
          >
            <Switch.Thumb className='block h-4 w-4 translate-x-1 rounded-full bg-white shadow transition-transform will-change-transform data-[state=checked]:translate-x-7' />
          </Switch.Root>
          {/* mobile version */}
          <div className='absolute -right-[136px] desktop:hidden'>
            Yearly Billing{' '}
            <span className='ml-1 rounded-full bg-_light-grayish-red px-2 py-0.5 font-semibold text-_light-red'>
              -25%
            </span>
          </div>
          {/* desktop version */}
          <div className='absolute -right-[194px] hidden items-center desktop:flex'>
            Yearly Billing{' '}
            <span className='ml-1 rounded-full bg-_light-grayish-red px-2 py-0.5 font-semibold text-_light-red'>
              -25% discount
            </span>
          </div>
        </div>
        <div className='flex w-full flex-col items-center gap-8 border-t-2 border-_empty-slider-bar desktop:flex-row desktop:justify-between desktop:border-t-[1px] desktop:pt-8'>
          <div className='flex flex-col items-center justify-center gap-2 text-sm text-_grayish-blue desktop:items-start'>
            <div className='mt-8 flex items-center gap-4 desktop:mt-0'>
              <IconCheck />
              Unlimited websites
            </div>
            <div className='flex items-center gap-4'>
              <IconCheck />
              100% data ownership
            </div>
            <div className='flex items-center gap-4'>
              <IconCheck />
              Email reports
            </div>
          </div>

          <button className='w-fit rounded-full bg-_dark-desaturated-blue py-3 px-12 text-sm font-semibold text-_pale-blue transition-colors hover:text-white'>
            Start my trial
          </button>
        </div>
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
