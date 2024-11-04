import chefImg from '../../../assets/home/chef-service.jpg'
const ChefArea = ()=>{
    return(
        <div className="py-[100px]" 
        style={{backgroundImage: `url(${chefImg})`, 
        backgroundSize:"cover", 
        backgroundRepeat:"no-repeat", backgroundPosition:'center center'}}>
            <div className="w-[80%] mx-auto bg-[#FFFFFF]">
                <div className="flex justify-center items-center flex-col text-center p-20">
                        <h3 className="text-[45px]">Food Place</h3>
                        <p className="text-16px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, 
                            libero accusamus laborum deserunt ratione dolor officiis praesentium! 
                            Deserunt magni aperiam
                             dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    )
}
export default ChefArea;