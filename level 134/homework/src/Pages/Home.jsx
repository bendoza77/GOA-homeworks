import { carsData } from "../CarList";
import CarDetails from "../Components/CarDetails";

const Home = () => {

    return (
        <>
            <main className="Home">
                <h1>Cars you may like</h1>

                {carsData.map((el, i) => {
                    return (
                        <>
                            <CarDetails key={i} data={el} />
                        </>
                    );
                })}
            </main>
        </>
    );




}

export default Home;