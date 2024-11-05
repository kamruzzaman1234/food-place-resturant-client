import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";

const Pizza = ()=>{
    const [menu, setMenu] = useState([])
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        fetch("menu.json")
        .then(res=> res.json())
        .then(data=>{
            setMenu(data)
        })
    },[])
    const pizzaMenu = menu.filter(item=> item.category === "pizza")
    const displayedMenu = showAll ? menu : pizzaMenu 
    return(
        <div className="py-10">
            <section>
                <SectionTitle heading={"ORDER NOW PIZZA"}></SectionTitle>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {
                    displayedMenu.map(item=> <MenuItemCard 
                    key={item._id} item={item}></MenuItemCard>)
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
export default Pizza;