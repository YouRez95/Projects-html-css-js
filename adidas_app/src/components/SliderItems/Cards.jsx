import { useRef } from 'react';
import Card from "./Card"
import CardOne from "./CardOne"
import Carousel from 'react-elastic-carousel';

const Cards = ({ shoes, vetements, accessoires }) => {
    const carouselRef = useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the last item, go to first item
            carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the first item, go to last item
            carouselRef.current.goTo(shoes.length + vetements.length + accessoires.length);
        }
    };
    const breakPoints = [
        // { width: 960, itemsToShow: 2 },
        { width: 990, itemsToShow: 3, itemsToScroll: 2, pagination: false },
        { width: 1090, itemsToShow: 3.5, itemsToScroll: 2, pagination: false },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
        { width: 1450, itemsToShow: 5, itemsToScroll: 4, pagination: false },
        { width: 1750, itemsToShow: 6, itemsToScroll: 5, pagination: false },
    ]

    return (
        <>
            <div className="hidden flex-col gap-4 md:flex md:flex-row">
                <Carousel breakPoints={breakPoints}
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
                >
                    {/* <div className="overflow-scroll scrollbar__width">
                <div className="flex"> */}
                    {
                        shoes.map((shoe, index) => (
                            index === 0
                                ? <CardOne {...shoe} key={index} />
                                : <Card {...shoe} key={index} />
                        ))
                    }
                    {/* </div>
            </div> */}

                    {/* <div className="overflow-scroll scrollbar__width">
                <div className="flex"> */}
                    {
                        vetements.map((shoe, index) => (
                            index === 0
                                ? <CardOne {...shoe} key={index} />
                                : <Card {...shoe} key={index} />
                        ))
                    }
                    {/* </div>
            </div> */}

                    {/* <div className="overflow-scroll scrollbar__width">
                <div className="flex"> */}
                    {
                        accessoires.map((shoe, index) => (
                            index === 0
                                ? <CardOne {...shoe} key={index} />
                                : <Card {...shoe} key={index} />
                        ))
                    }
                    {/* </div>
            </div> */}
                </Carousel>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:hidden">

                <div className="overflow-scroll scrollbar__width">
                    <div className="flex">
                        {
                            shoes.map((shoe, index) => (
                                index === 0
                                    ? <CardOne {...shoe} key={index} />
                                    : <Card {...shoe} key={index} />
                            ))
                        }
                    </div>
                </div>

                <div className="overflow-scroll scrollbar__width">
                    <div className="flex">
                        {
                            vetements.map((shoe, index) => (
                                index === 0
                                    ? <CardOne {...shoe} key={index} />
                                    : <Card {...shoe} key={index} />
                            ))
                        }
                    </div>
                </div>

                <div className="overflow-scroll scrollbar__width">
                    <div className="flex">
                        {
                            accessoires.map((shoe, index) => (
                                index === 0
                                    ? <CardOne {...shoe} key={index} />
                                    : <Card {...shoe} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
