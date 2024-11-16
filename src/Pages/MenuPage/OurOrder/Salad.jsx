import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";
import { Link } from "react-router-dom";

const Salad = ()=>{
    const [menu, setMenu] = useState([])
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:6009/menu")
        .then(res=> res.json())
        .then(data=>{
            setMenu(data)
        })
    },[])
    const saladMenu = menu.filter(item=> item.category === "salad")
    const displayedMenu = showAll ? menu : saladMenu 
    return(
        <div className="py-10">
            <section>
                <SectionTitle heading={"salad"} subHeading={"Salad MENU"}></SectionTitle>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                 {
                    displayedMenu.map(item=> <MenuItemCard 
                    key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className="text-center mt-8">
                <Link to=""
                    className="border-b-2  text-black border-black px-6 py-2 rounded-[20px]"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "View Less" : "View All"}
                </Link>
            </div>
        </div>
    )
}
export default Salad