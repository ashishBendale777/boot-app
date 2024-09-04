import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componanrs/Home'
import Add from './componanrs/Add'
import All from './componanrs/All'
import Profile from './componanrs/Profile'
import MyOffcanVas from './MyOffCanva'
import { Container } from 'react-bootstrap'
import Details from './componanrs/Details'
import Registration from './componanrs/Registration'
import Login from './componanrs/Login'


const MyRiutes = () => {
    return (
        <div>
            <BrowserRouter>
                <MyOffcanVas />

                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/add' element={<Add />} />
                        <Route path='/all' element={<All />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/details' element={<Details />} />
                        <Route path='/details/:langname' element={<Details />} />
                        <Route path='/registration' element={<Registration />} />
                        <Route path='/login' element={<Login
                         />} />

                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default MyRiutes