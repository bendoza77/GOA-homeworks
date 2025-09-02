import { useEffect, useState } from "react";
import PanelCars from "../Components/PanelCars";
import { GetLocalStorage } from "../utils/LocalStorages";

const Panel = ({panel, setPanel}) => {

    const [res, setRes] = useState([]);

    useEffect(() => {

        setRes(panel)

    }, [panel])

    return (
        <>
            <main className="panel_main">
                { res.map((el, i) => {

                    return (
                        <>
                            <PanelCars setPanel={setPanel} panel={panel} id={el.id} image={el.image} model={el.name} seats={el.seats} price={el.price_per_day} currency={el.currency} transmission={el.transmission} fuel={el.fuel}/>
                        </>
                    );

                })}
            </main>
        </>
    );




}

export default Panel;