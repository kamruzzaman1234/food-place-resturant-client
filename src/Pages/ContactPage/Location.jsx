import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaPhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
const Location = ()=>{
    return(
        <div className="py-10">
            <section>
                <SectionTitle heading={"location"} subHeading={"Location Confirm"}></SectionTitle>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="border-2 border-gray-20 relative">
                    <div className="bg-slate-300 py-20 text-center mx-6 mb-6">
                        <h3 className="text-[24px] font-bold">PHONE</h3>
                        <p className="text-[16px]">+001234343545</p>
                    </div>
                    <div className="w-full h-10 bg-[#BB8506] py-6 flex justify-center items-center absolute top-0">
                        <FaPhone className="text-[22px] text-white"></FaPhone>
                    </div>
                </div>
                <div className="border-2 border-gray-20 relative">
                    <div className="bg-slate-300 py-20 text-center mx-6 mb-6">
                        <h3 className="text-[24px] font-bold">ADDRESS</h3>
                        <p className="text-[16px]">+001234343545</p>
                    </div>
                    <div className="w-full h-10 bg-[#BB8506] py-6 flex justify-center items-center absolute top-0">
                        <FaAddressBook className="text-[22px] text-white"></FaAddressBook>
                    </div>
                </div>
                <div className="border-2 border-gray-20 relative">
                    <div className="bg-slate-300 py-20 text-center mx-6 mb-6">
                        <h3 className="text-[24px] font-bold">WORKING HOUR</h3>
                        <p className="text-[16px]">+001234343545</p>
                    </div>
                    <div className="w-full h-10 bg-[#BB8506] py-6 flex justify-center items-center absolute top-0">
                        <FaPhone className="text-[22px] text-white"></FaPhone>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;