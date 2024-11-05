import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Img1 from '../../../assets/home/slide1.jpg'
import Img2 from '../../../assets/home/slide2.jpg'
import Img3 from '../../../assets/home/slide3.jpg'

const CardMenu = ()=>{
    return(
        <div className="py-10">
             <section>
                <SectionTitle
                    subHeading={"should try"}
                    heading={"Chef Recommends"}
                />
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="shadow-xl">
           <figure className="">
           <img
           src={Img1}
      alt="Shoes"
      className="w-[400px] h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Tometo Salad</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="text-yellow-300 border-b-2 px-8 py-2
       border-black rounded-[20px]">Add to Cart</button>
    </div>
  </div>
           </div>
           <div className="shadow-xl">
           <figure className="">
           <img
           src={Img2}
      alt="Shoes"
      className="w-[400px] h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Tometo Salad</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="text-yellow-300 border-b-2 px-8 py-2
       border-black rounded-[20px]">Add to Cart</button>
    </div>
  </div>
           </div>
           <div className="shadow-xl">
           <figure className="">
           <img
           src={Img3}
      alt="Shoes"
      className="w-[400px] h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Tometo Salad</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="text-yellow-300 border-b-2 px-8 py-2
       border-black rounded-[20px]">Add to Cart</button>
    </div>
  </div>
           </div>
            </div>
        </div>
    )
}
export default CardMenu;