import React from 'react'
import {
    Routes,
    Route,
    BrowserRouter,
    Navigate,
    HashRouter,
} from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Pricing from './pages/Pricing/Pricing'
import Contacts from './pages/Contacts/Contacts'

const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Main = styled.main`
    flex: 1;
    padding: 0;
`

function App() {
    return (
        <HashRouter>
            <AppWrapper>
                <Header />
                <Main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Main>
                <Footer />
            </AppWrapper>
        </HashRouter>
    )
}

export default App
