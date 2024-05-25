import React from 'react'
import { Navbar, Retour, Arriver, Messi, SliderContent, SliderMeilleur, CardProduits, TextInfos, Sinscrire, FooterLiens } from '../components/index'
import Tendances from '../components/Tendances'
import { listOne, listTwo, listThree, dataDesktop, dataArrived, dataMessi, dataSlider, dataNouveau, dataProduits, dataText, dataFooterMobile, dataFooterMobileTwo, dataFooterDesktop } from '../constants/data'

const Home = () => {
    return (
        <>
            <Retour />
            <Navbar myDataOne={listOne} myDataTwo={listTwo} myDataThree={listThree} dataDesktop={dataDesktop} />
            <Arriver {...dataArrived} />
            <Messi {...dataMessi} />
            <SliderContent dataSlider={dataSlider} />
            <SliderMeilleur data={dataNouveau} />
            <CardProduits data={dataProduits} />
            <Tendances />
            <TextInfos data={dataText} />
            <Sinscrire />
            <FooterLiens data={dataFooterMobile} dataTwo={dataFooterMobileTwo} dataThree={dataFooterDesktop} />
        </>
    )
}

export default Home
