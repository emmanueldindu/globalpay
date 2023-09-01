import React from 'react'
import { DateInput, Header } from '../components'
import {GridComponent, Resize, ColumnDirective, ColumnsDirective, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, ordersGrid } from '../data/dummy'

function Orders() {
  return (



    <div className="m-2 pt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl overflow-x-scroll xl:w-[1000px] xl:mx-auto "  style={{ overflowX: 'auto' }}>
      <Header category='View all transactions' title="Transactions" description='chose a timeframe for your transaction/statement' />
      <div className="mx-auto p-4">
        <DateInput />
      </div>
      <div className='overflow-x-scroll' style={{ overflowX: 'auto' }}>

      <GridComponent
          id='gridcomp'
          dataSource={ordersData}
      
        > 
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {
              ...item} />
            
          ))}
          


        </ColumnsDirective>

        
      </GridComponent>
      
      </div>

      </div>
      

      )
}

export default Orders