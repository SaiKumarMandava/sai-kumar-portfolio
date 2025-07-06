import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 py-6">
      <SingleInfo text="saimandava1999@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 6309640774" Image={FiPhone} />
      <SingleInfo text="Vinajmur, Nellore District, AP" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
