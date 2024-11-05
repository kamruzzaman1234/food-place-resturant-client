import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeatureImg from '../../../assets/home/featured.jpg'
import './Feature.css'
const FeatureMenu  =()=>{
    return(
        <div className="py-20 feature-img">
            <section>
                <SectionTitle
                subHeading={"check in our"}
                heading={"Form Our Menu"}></SectionTitle>
            </section>
            <div className="flex justify-center items-center z-40">
                <div className="flex p-20  gap-10 text-white bg-slate-600 bg-opacity-50 " 
                >
                    <img src={FeatureImg} alt="" className="w-[648px] h-[400px] rounded-lg z-30"/>
                    <div>
                        <p>November 12, 2024</p>
                        <h2>WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Error voluptate facere,  
                        deserunt dolores
                        maiores quod nobis quas quasi. Eaque repellat recusandae ad 
                        laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="border-b-2 px-6 py-2 border-white rounded-[30px] ">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeatureMenu;