import React from 'react'
import { DateInput, Header } from '../components'
import {GridComponent, Resize, ColumnDirective, ColumnsDirective, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject,  } from '@syncfusion/ej2-react-grids'
import { ordersData, ordersGrid } from '../data/dummy'
import '@syncfusion/ej2-react-grids/styles/material.css';

function Orders() {
  let gridInstanceRef = React.useRef(null);

  const exportToExcel = () => {
    if (gridInstanceRef.current) {
      gridInstanceRef.current.excelExport();
    }
  };

  // const gridInstanceRef = React.useRef(null);

  const exportToPDF = () => {
    if (gridInstanceRef.current) {
      gridInstanceRef.current.pdfExport();
    }
  };

  // const gridInstanceRef = React.useRef(null);


  return (



    <div className="m-2 pt-20 md:m-10 p-2 md:p-10 bg-white rounded-3xl overflow-x-scroll xl:w-[1000px] xl:mx-auto "  style={{ overflowX: 'auto' }}>
      <Header category='View all transactions' title="Transactions" description='chose a timeframe for your transaction/statement' />
      <div className="mx-auto p-4">
        <DateInput />
      </div>

      {/* <button  className="h-6 bg-red-500 w-7"onClick={exportToExcel}>Export to Excel</button> */}
      <button className='w-[120px] h-3 bg-yellow-500' onClick={exportToPDF}>Export to PDF</button>
      <div className='overflow-x-scroll' style={{ overflowX: 'auto' }}>

      <GridComponent
          id='gridcomp'
          dataSource={ordersData}
          allowPaging
          allowSorting
          ref={gridInstanceRef}
      
        > 
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {
              ...item} />
            
          ))}
          


          </ColumnsDirective>
          <Inject services={[Sort, Resize, ContextMenu, Filter, Page, ExcelExport, PdfExport]} />

        
      </GridComponent>
      
      </div>

      </div>
      

      )
}

export default Orders