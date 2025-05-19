import type { ReactNode } from "react";
import { CONTACT_INFO, type ContactInfoAddress } from "../../config/contactInfo.config";
import useTranslation from "../../hook/useTranslation";
import ContactInfo from "../../component/ContactInfo/ContactInfo";
import { ASSETS } from "../../config/assets.config";
import LogoBackdrop from "./LogoBackdrop";

export default function Contact(): ReactNode {
  const {t} = useTranslation();

  const renderContactInfo = (address: ContactInfoAddress) => {
    return (
      <ContactInfo
        key={address.languageKey || address.title}
        label={(address.title || t(address.languageKey) || "")}
        href={address.link}
        // @ts-ignore
        iconSrc={ASSETS.icon.socials[address.icon]}
      />
    );
  };

  return (
    <div className="d-flex flex-direction-col gap-large">
      <LogoBackdrop backdrop={{
        left: "1px", 
        top: "1px", 
        width: "25px", 
        height: "28px"
      }}>
        {renderContactInfo(CONTACT_INFO.linkedin)}
      </LogoBackdrop>
      <LogoBackdrop backdrop={{
        left: "5px", 
        top: "10px", 
        width: "20px", 
        height: "10px"
      }}>
        {renderContactInfo(CONTACT_INFO.channel)}
      </LogoBackdrop>
      {renderContactInfo(CONTACT_INFO.email)}
    </div>
  );
}
