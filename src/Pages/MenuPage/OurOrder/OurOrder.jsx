import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import OrderCard from "./OrderCard";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";

const OurOrder = ()=>{
    const [menu, setMenu] = useState([])
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:6009/menu")
        .then(res=> res.json())
        .then(data=> {
            setMenu(data)
        })
    },[])
    const soupMenu = menu.filter(item => item.category === "soup");
    const displayedMenu = showAll ? menu : soupMenu;

    // const soupArea = orders.filter(order=> order.category === "soup")

    

    return(
        <div className="py-10">
            <section>
                <SectionTitle
                subHeading={"Soup"} 
                heading={"Todays Order"}>

                </SectionTitle>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {
                        displayedMenu.map(item=> <MenuItemCard key={item._key} item={item}>
                        </MenuItemCard>)
                    }
            </div>
            <div className="text-center mt-8">
                <button
                    className="border-b-2  text-black border-black px-6 py-2 rounded-[20px]"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "View Less" : "View All"}
                </button>
            </div>
        </div>
    )
}
export default OurOrder;