import logo from './logo.svg';
import './App.css';
import './index.css'
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Router, Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from './contexts/ContextProvider';
import { Navbar, Footer, Sidebar, Theme } from './components';
import { Ecommerce, Orders, Calender, Employee, Stacked, Pyramid,  Customer, Kanban, Area, Pie, Financial, ColorPicker, Editor } from './pages';
// const [sidebar, setSidebar] = useState(true)
import { registerLicense } from '@syncfusion/ej2-base';


function App() {
  const {activeMenu} = useStateContext()
  return (
    <div className=''>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg" >
        
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>

            <Sidebar />
             </div>
        ): (
          <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
        )}
       <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >

          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">

        <Navbar />
          </div>
        
          <Routes>
            {/* Dashboard */}
            <Route path='/' element={<Ecommerce />} />
            <Route path='/dashboard' element={<Ecommerce />} />


            {/* pages */}
            <Route path='/Transactions' element={<Orders  />} />
            <Route path='/cards' element={ <Employee /> } />
            <Route path='/state' element={<Customer />} />
            <Route path='/Terminals' element={<Kanban />} />


            {/* apps */}
            <Route path='/editor' element={<Editor />} />
            <Route path='/calender' element={<Calender />} />
            <Route path='/color-picker' element={<ColorPicker />} />


            {/* charts */}

            {/* <Route path='/line' element={<Line /> } /> */}
            <Route path='/area' element={<Area />} />
            {/* <Route path='/bar' element={} /> */}
            <Route path='/pie' element={<Pie />} />
            <Route path='/financial' element={<Financial />} />
            {/* <Route path='/color-mapping' element={<ColorPicke} /> */}
            <Route path='/pyramid' element={<Pyramid />} />
            <Route path='/stacked' element={<Stacked />}  />

          </Routes>
      
          </div>
    </div>
      </BrowserRouter>
</div>
      );
}

export default App;
