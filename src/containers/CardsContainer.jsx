import { Card } from "../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CardsContainer = ({ cards }) => {
    const newCards = [...cards];

    const highestPrice = newCards.reduce((acc, curr) => curr.price > acc ? curr.price : acc, 0);
    const index = newCards.findIndex(card => card.price === highestPrice);
    const cardToMove = newCards.splice(index, 1)[0];
    newCards.splice(1, 0, cardToMove);

    return (
        <div className="cards-container mt-4 py-8">
            {/* MOBILE */}
            <div className="max-w-7xl px-4 lg:hidden">
                <Carousel responsive={responsive}>
                    {
                        cards.map((card, i) => (
                            <Card
                                key={i}
                                title={card.title}
                                price={card.price}
                                list={card.list}
                                i={null}
                            />
                        ))
                    }
                </Carousel>
            </div>
            
            {/* DESKTOP */}
            <div className="hidden max-w-7xl px-4 lg:flex justify-center items-center gap-12">
                {
                    newCards.map((card, i) => (
                        <Card
                            key={i}
                            title={card.title}
                            price={card.price}
                            list={card.list}
                            i={i}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default CardsContainer;