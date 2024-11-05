
const Banner = ({img, title})=>{
    return(
        <div className="py-[160px]" style={{backgroundImage:`url(${img})`,
         backgroundSize:'cover', backgroundRepeat:'no-repeat',
         backgroundAttachment:'fixed', backgroundPosition:'center center'}}>
            <div className="w-[90%] text-white mx-auto h-[450px]
             rounded-lg py-20 text-center bg-black bg-opacity-50 ">
                <h2 className="text-[88px] font-bold">{title}</h2>
                <p className="uppercase text-[24px] font-semibold">Would You Like to Try a Dish</p>
            </div>
        </div>
    )
}
export default Banner;