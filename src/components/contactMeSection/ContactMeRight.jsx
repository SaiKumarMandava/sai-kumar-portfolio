// import ContactInfo from "./ContactInfo";
// import ContactSocial from "./ContactSocial";
import EamilImage from '../../assets/email-image.png'
const ContactMeRight = () => {
  return (
    <div className="py-6 sm:px-6">
      <img
        src={EamilImage}
        alt="email image"
        className="max-w-[300px]"
      />
      {/* <ContactInfo />
      <ContactSocial /> */}
    </div>
  );
};

export default ContactMeRight;
