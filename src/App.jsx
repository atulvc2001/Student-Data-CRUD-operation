import React from 'react'
import Layout from './Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddStudent from './AddStudent'
import ViewAll from './ViewAll'
import ViewSingleStu from './ViewSingleStu'
import EditStudent from './EditStudent'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <div><Toaster
  position="top-left"
  reverseOrder={false}
    /></div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<AddStudent />} />
              <Route path='/viewall' element={<ViewAll />} />
              <Route path='/viewsingle/:id' element={<ViewSingleStu />}></Route>
              <Route path='/editstu/:id' element={<EditStudent/>} />
              
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
