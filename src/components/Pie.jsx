import React from 'react'
import { COMPETITION_LIST } from '../utils/helper'

const Pie = () => {
  return (
    <div className='flex items-center justify-center bg-navy-blue min-h-screen max-lg:py-[60px] max-md:py-12'>
      <div className='max-w-[1202px] mx-auto px-4 overflow-auto'>
        <div className='flex flex-wrap gap-[78px] max-lg:gap-10 max-md:gap-8'>
          <div className='text-white '>
            <h2 className='text-[46px] max-md:text-4xl'>Competition</h2>
            <p className='pt-[50px] max-lg:pt-5 lg:max-w-[481px]'>
              Given our best in class offering, we need to cut through by opting
              for penetration pricing.Given our best in class offering, we need
              to cut through by opting for penetration pricing.
            </p>
            <p className='pt-2 lg:max-w-[481px]'>
              This will allow us to disrupt an established market by introducing
              our product and service at a lower price to entice new customers
              to purchase or subscribe. This strategy will help us capture the
              attention of this very large audience in need of a good solution.
            </p>
            <p className='pt-2 lg:max-w-[481px]'>
              The current return and refund process centres around either
              traditional advice or software. By combining both together for an
              aggressively affordable fee, we think we can capture much of the
              demand for those people that feel competent in managing their own
              refunds / returns.
            </p>
            <p className='pt-2 lg:max-w-[481px]'>
              As well as being the cheapest in market, our product offers
              everything a sole trader needs in one place, whilst pricing
              innovation of zero commission rather than a commission, will drive
              customers that are particularly price sensitive.
            </p>
          </div>

          <div className='bg-sky-blue rounded-xl py-[52px] px-4 max-w-[580px] mx-auto flex overflow-auto'>
            <div>
              <div className='min-h-[64px] '>
                <p className='text-sm leading-4 text-white opacity-0 pl-2'></p>
              </div>
              <div className='border-t-[0.75px] border-black min-w-[140px] '>
                <p className='text-sm leading-4 text-white max-w-[92px] pl-2 min-h-[54.61px] pt-[18.8px]'>
                  Mobile App
                </p>
              </div>
              <div className='border-t-[0.75px] border-black '>
                <p className='text-sm leading-4 text-white max-w-[92px] pl-2 min-h-[54.61px] pt-[18.8px]'>
                  Invoicing
                </p>
              </div>
              <div className='border-t-[0.75px] border-black'>
                <p className='text-sm leading-4 text-white max-w-[92px] pl-2 min-h-[54.61px] pt-[18.8px]'>
                  Bookkeeping
                </p>
              </div>
              <div className='border-t-[0.75px] border-black'>
                <p className='text-sm leading-4 text-white max-w-[92px] pl-2 min-h-[71.61px] pt-[18.8px]'>
                  Accountancy Support
                </p>
              </div>
              <div className='border-t-[0.75px] border-black'>
                <p className='text-sm leading-4 text-white max-w-[92px] pl-2 min-h-[54.61px] pt-[18.8px]'>
                  Tax Filing
                </p>
              </div>
              <div className='border-t-[0.75px] border-black'>
                <p className='text-sm leading-4 text-white max-w-[92px] pl-2 min-h-[54.61px] pt-[18.8px]'>
                  Fee
                </p>
              </div>
            </div>
            <div className='flex items-center justify-center '>
              {COMPETITION_LIST.map((obj, i) => (
                <div key={i}>
                  <div
                    className={`bg-white min-h-[64px] flex justify-center items-center rounded-t-md mr-2  ${
                      i === 3 ? '!bg-aqua-blue' : 'bg-white'
                    }`}
                  >
                    <p className='text-[12px] font-semibold leading-4'>{obj.title}</p>
                  </div>
                  <div className='border-t-[0.75px] border-black pr-2'>
                    <div
                      className={`min-w-[94px] flex justify-center items-center min-h-[54.61px] ${
                        i === 3 ? '!bg-aqua-blue' : 'bg-white'
                      }`}
                    >
                      <p>{obj.iconOne}</p>
                    </div>
                  </div>
                  <div className='border-t-[0.75px] border-black pr-2'>
                    <div
                      className={`min-w-[94px] flex justify-center items-center min-h-[54.61px] ${
                        i === 3 ? '!bg-aqua-blue' : 'bg-white'
                      }`}
                    >
                      <p>{obj.iconTwo}</p>
                    </div>
                  </div>
                  <div className='border-t-[0.75px] border-black pr-2'>
                    <div
                      className={`min-w-[94px] flex justify-center items-center min-h-[54.61px] ${
                        i === 3 ? '!bg-aqua-blue' : 'bg-white'
                      }`}
                    >
                      <p>{obj.iconThree}</p>
                    </div>
                  </div>
                  <div className='border-t-[0.75px] border-black pr-2'>
                    <div
                      className={`min-w-[94px] flex justify-center items-center bg-white min-h-[71px] ${
                        i === 3 ? '!bg-aqua-blue' : 'bg-white'
                      }`}
                    >
                      <p>{obj.iconFour}</p>
                    </div>
                  </div>
                  <div className='border-t-[0.75px] border-black pr-2'>
                    <div
                      className={`min-w-[94px] flex justify-center items-center min-h-[54.61px] ${
                        i === 3 ? '!bg-aqua-blue' : 'bg-white'
                      }`}
                    >
                      <p>{obj.iconFive}</p>
                    </div>
                  </div>
                  <div className='pr-2 border-t-[0.75px] border-black'>
                    <div
                      className={`flex justify-center items-center bg-white min-h-[71px] rounded-b-md ${
                        i === 3 ? '!bg-aqua-blue' : 'bg-white'
                      }`}
                    >
                      <p className='text-[8px] leading-[9.6px] max-w-[64px] text-center'>
                        {obj.info}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pie
