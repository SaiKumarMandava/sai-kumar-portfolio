import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex flex-wrap lg:flex lg:justify-between md:flex md:justify-between">
        <div className="">
       <div className="px-6 py-3">
         <ContactMeLeft />
      
          <ContactInfo />
      <ContactSocial />
       </div>
      </div>
      <div>
        <ContactMeRight />
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;
