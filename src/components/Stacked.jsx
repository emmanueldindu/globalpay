import React from 'react'
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective,
  Inject, Legend, Category, StackingColumnSeries, Tooltip, DataLabel, ColumnSeries,
  AccumulationChartComponent,
  AccumulationSeriesDirective,
  AccumulationSeriesCollectionDirective,
  PieSeries,
  AccumulationSeries,
  AccumulationDataLabel,
  AccumulationLegend, 
} from '@syncfusion/ej2-react-charts'

// import {ChartsHeader} from ''
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis, barPrimaryXAxis, barCustomSeries, barPrimaryYAxis, pievalue } from '../data/dummy'

function Stacked() {

  return (
    <div>
      <AccumulationChartComponent legendSettings={{position:"Bottom"}}>
        <Inject services={[PieSeries, AccumulationDataLabel]}></Inject>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            type='pie'
            dataSource={pievalue}
            xName="name"
            yName="value"
            dataLabel={{
              visible: true,
              position: 'Inside',
               name: 'value'
            }}


          >


          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>

      </AccumulationChartComponent>
    </div>
   
  )
}

export default Stacked