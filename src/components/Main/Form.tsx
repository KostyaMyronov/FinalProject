import { useApp } from "../store/useApp";
import { theme } from "../../data/theme";
import { useTranslation } from "react-i18next";

export const Form = () => {
  const {t} = useTranslation()
  const isDark = useApp((state) => state.isDark);
  return (
    <form
      action='#'
      className={`w-[1300px] h-[387px] mt-[202px] rounded-[32px] flex justify-between items-center px-[60px] ${isDark ? theme.componentDark : theme.componentLight}`}
    >
      <section>
        <p className='text-[18px] leading-[27px] text-[#118DA8]'>{t("Email Newsletter")}</p>
        <h2 className='text-[72px] leading-[79px] tracking-[3px] '>
          {t("Subscribe")}
          <br />
          {t("for updates")}
        </h2>
      </section>
      <section className='grid gap-y-[20px]'>
        <input
          type='text'
          className={`w-[522px] h-[82px] rounded-[6px] ${isDark ? theme.inputDark : theme.inputLight}
                placeholder:text-[24px] placeholder:text-[#FFFFFFB2] pl-[19px] text-[24px] text-[#FFFFFFB2]`}
          placeholder={t("Name")}
        />
        <input
          type='text'
          className={`w-[522px] h-[82px] rounded-[6px] ${isDark ? theme.inputDark : theme.inputLight}
                placeholder:text-[24px] placeholder:text-[#FFFFFFB2] pl-[19px] text-[24px] text-[#FFFFFFB2]`}
          placeholder={t("Email")}
        />
        <button className='w-[87px] h-[48px] rounded-[6px] bg-[#118DA8] text-[15px] text-[#FFFFFFB2] font-bold cursor-pointer'>
          {t("Submit")}
        </button>
      </section>
    </form>
  );
};
