import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import Image1 from '../../images/IMAGE (1).png';
import Image2 from '../../images/IMAGE (2).png';
import Image3 from '../../images/IMAGE (3).png';
import Image4 from '../../images/IMAGE (4).png';
import Image5 from '../../images/IMAGE (5).png';
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer className='grid grid-cols-3 mt-[200px]'>
      <section>
        <h2 className=' text-5xl'>Castaway</h2>
        <section className='flex gap-[10px] mt-[23px] text-2xl'>
          <FaInstagram />
          <CiTwitter />
          <FiFacebook />
        </section>
      </section>
      <section className='flex gap-[120px]'>
        <ul className='text-[17px]  leading-[27px]'>
          <li>{t("Home")}</li>
          <li>{t("About")}</li>
          <li>{t("Episodes")}</li>
          <li>{t("Contact")}</li>
        </ul>
        <ul className='text-[18px]  leading-[27px]'>
          <li>{t("Style Guide")}</li>
          <li>{t("Instructions")}</li>
          <li>{t("Changelog")}</li>
          <li>{t("Credit")}</li>
          <li>{t("Powered by Webflow")}</li>
          <li>{t("Licenses")}</li>
        </ul>
      </section>
      <section className='flex gap-[17px]'>
        <img src={Image1} alt='' className='w-[32px] h-[32px]' />
        <img src={Image2} alt='' className='w-[32px] h-[32px]' />
        <img src={Image3} alt='' className='w-[32px] h-[32px]' />
        <img src={Image4} alt='' className='w-[32px] h-[32px]' />
        <img src={Image5} alt='' className='w-[32px] h-[32px]' />
      </section>
    </footer>
  );
};
