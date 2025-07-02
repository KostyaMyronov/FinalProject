import { CiSun } from 'react-icons/ci';
import { FaMoon } from 'react-icons/fa6';
import { useApp } from '@/store/useApp';
import { theme } from '@/data/theme';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const NavMenu = () => {
  const { t, i18n } = useTranslation();
  const setLanguage = useApp((state) => state.setLanguage);
  const language = useApp((state) => state.language);
  const setTheme = useApp((state) => state.setTheme);
  const isDark = useApp((state) => state.isDark);
  const languages = ['en', 'uk'];
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    changeLanguage(language);
  }, [language]);
  return (
    <nav
      className={`flex justify-between items-center fixed w-full top-0 py-[26px] shadow z-3 ${isDark ? theme.componentDark : theme.componentLight} px-[60px]`}
    >
      <h1 className='text-4xl'>Castaway</h1>
      <ul className='flex text-[17px] leading-[27px cursor-pointer gap-[40px] items-center'>
        <li>{t('Home')}</li>
        <li>{t('Episodes')}</li>
        <li>{t('About')}</li>
        <li>{t('Contact')}</li>
        <button className='text-[37px] cursor-pointer outline-0' onClick={setTheme}>
          {isDark ? <CiSun /> : <FaMoon />}
        </button>
        <Select onValueChange={setLanguage} defaultValue={language}>
          <SelectTrigger className='cursor-pointer'>
            <SelectValue placeholder={language.toUpperCase()} />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang, index) => (
              <SelectItem value={lang} key={index} className='text-black'>
                {lang.toLocaleUpperCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </ul>
    </nav>
  );
};
