import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const ContactConfirm  =()=>{
    return(
        <div className="py-10">
            <section>
            <SectionTitle heading={"Contact Confirm"}
            subHeading={"send as a message"}></SectionTitle>
            </section>
            <div className="bg-gray-200">
                <form action="" className="mx-20 my-10 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="form-control">
                            <label htmlFor="" className="text-2xl font-bold text-black mb-2">Name </label>
                            <input type="text" name="name" placeholder="Enter Your Name"
                             className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="" className="text-2xl font-bold text-black mb-2">Email </label>
                            <input type="email" name="email" placeholder="Enter Your Email"
                             className="input input-bordered"/>
                        </div>
                        <div className="form-control col-span-2">
                            <label htmlFor="" className="text-2xl font-bold text-black mb-2">Phone</label>
                           <input type="number" name="number" placeholder="Enter Your Number" className="input input-bordered"/>
                        </div>
                        <div className="form-control col-span-2">
                            <label htmlFor="" className="text-2xl font-bold  text-black mb-2">Message</label>
                           <textarea name="message" id="" cols="10" rows="10" className="rounded-lg"></textarea>
                        </div>
                       

                    </div>
                    <div className="text-center py-10">
                            <input type="submit" name="" id="" className="bg-[#BB8506] text-center
                            font-bold px-8 py-2 rounded-lg text-white "/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactConfirm;