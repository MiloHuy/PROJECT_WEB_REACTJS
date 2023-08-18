import React from 'react'
import Silder from '../Slider'
import NavBarButton from '../../NavigateButton'
import ProductSection from '../ProductSection'
import Footer from '../Footer'

function MainPage() {
    return (
        <div>
            <Silder />
            <NavBarButton />
            <ProductSection />
            <Footer />
        </div>
    )
}

export default MainPage