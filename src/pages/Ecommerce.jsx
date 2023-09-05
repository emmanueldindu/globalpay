import React from 'react'
import {GoDot} from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components'
import { useStateContext } from '../contexts/ContextProvider';
import { earningData, SparklineAreaData, ecomPieChartData, recentTransactions } from '../data/dummy';
import CopyToClipboard from '../components/CopytoClipboard';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Budget from '../assets/budget.png'
import Transfer from '../assets/transfer.png'

// linense key = ORg4AjUWIQA/Gnt2V1hhQlJAfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5bdURjXn9WcXFUQ2Bf

const walletAddress = '6363577123'
const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center
        ">

<div className="flex justify-between items-center pt-4">
      <div>
        <p className="font-bold text-gray-400 pb-4">Wallet Address</p>
              <p className="text-2xl">{walletAddress}</p>
              <p className="text-[12px] font-semibold ">Micheal Aina</p>
            </div>
      <CopyToClipboard  textToCopy={walletAddress} />
      

    
    </div>
   
        </div>
        <div className=" flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
  
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-3 pt-9 rounded-2xl">
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:dop-shadow-xl'
              >
              {item.icon}
              </button> 
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  {item.amount}

                </span>
                <span className={`text-sm text-${item.pcColor} ml-12`}>{item.percentage}</span>
                
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
            
          ))}
          
          
          
          </div>
      </div>
     
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className='font-semibold'>Revenue Updates</p>

            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-900 hover:drop-shadow-xl">
              <span className='font-extrabold text-xl'>
                  <GoDot />

                </span>
                <span className='font-semibold text-md'>
                  Cashout
                </span>
                
              </p>


              <p className="flex items-center gap-2 text-gray-400 hover:drop-shadow-xl">
                <span className='font-extrabold text-xl'>
                  <GoDot />

                </span>
                <span className='font-semibold text-md'>
                  Transfers
                </span>
                
              </p>


            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            {/* <div className="border-r-1 border-color m-4 pr-10  ">
             
              <div className="relative">
                <div className="h-[79px] w-[150px] rounded-2xl bg-cover bg-center relative drop-shadow-xl"
                   style={{ backgroundImage: `url(${Budget})` }}
                   >
                </div>
                
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-lg pb-4 font-semibold">₦78,000</p>

        <p className="text-white text-md pt-4 font-semibold">cashout</p>
                  
                </div>
                
              </div>
              



              <div className="relative mt-8">
                
                <div
                  
                  className="h-[79px] w-[150px] rounded-2xl bg-cover bg-center relative drop-shadow-xl"
                  
                  style={{ backgroundImage: `url(${Transfer})` }}
                  
      >
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-lg pb-4 font-semibold">₦55,000</p>

        <p className="text-white text-md pt-4 font-semibold">Transfer</p>
                  
      </div>
    </div>

    
            </div> */}
          {/* <div>
              <Stacked width="320px" height="360px" />
              
          </div> */}
            <div className="mb-10">
              <p className="text-2xl font-semibold tracking-tight">
                Pie Chart

              </p>

            </div>
            <p className="text-center text-xl mb-2 mt-3">
              Transaction Breakdown
              
            </p>

          </div>
            </div>

          </div>

      
      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            {/* <DropDown currentMode={currentMode} /> */}
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
      
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor='white'
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
