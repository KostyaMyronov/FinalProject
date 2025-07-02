import RightArrow from '@/images/RightArrow.png';
import Hoster from '@/images/Host.jpg';
import { theme } from '@/data/theme';
import { useApp } from '@/store/useApp';
import { useTranslation } from 'react-i18next';

export const Host = () => {
  const { t } = useTranslation();
  const isDark = useApp((state) => state.isDark);
  return (
    <section className='flex justify-center gap-[94px] items-center'>
      <section>
        <div className='w-[112px] h-[112px] rounded-full bg-[#118DA8] items-center flex justify-center'>
          <img src={RightArrow} alt='RightArrow' className='rotate-270' />
        </div>
        <p className='text-[18px] text-[#118DA8] mt-5 leading-[27px]'>{t('MeetYourHost')}</p>
        <h2 className='text-[65px]  leading-[79px] tracking-[3px]'>{t('HostName')}</h2>
        <article
          className={`text-[22px] mt-[28px] ${isDark ? theme.specialTextDark : theme.specialTextLight}`}
        >
          <p>{t('HostTextParagraph1')}</p>
          <p>{t('HostTextParagraph2')}</p>
          <p className='mt-[33px]'>{t('HostTextParagraph3')}</p>
          <p>{t('HostTextParagraph4')}</p>
        </article>
      </section>
      <img src={Hoster} alt='Host' className='w-[650px] h-[743px]' />
    </section>
  );
};
