import React from 'react'
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective,
Inject, Legend, Category, StackingColumnSeries, Tooltip, DataLabel, ColumnSeries
} from '@syncfusion/ej2-react-charts'

// import {ChartsHeader} from ''
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis, barPrimaryXAxis, barCustomSeries, barPrimaryYAxis } from '../data/dummy'

function Stacked({width, height}) {

  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{background: 'white'}}
      
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip, DataLabel, ColumnSeries]} />
      <SeriesCollectionDirective>

        
      </SeriesCollectionDirective>
 
      
</ChartComponent>
  )
}

export default Stacked