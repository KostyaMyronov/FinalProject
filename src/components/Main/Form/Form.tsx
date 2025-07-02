import { useApp } from '@/store/useApp';
import { theme } from '@/data/theme';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import type { IRegister } from '@/components/Main/Form/formTypes.ts';
import { schema } from '@/components/Main/Form/schema.ts';
import { yupResolver } from '@hookform/resolvers/yup';
  
export const Form = () => {
  const { t } = useTranslation();
  const isDark = useApp((state) => state.isDark);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schema),
  });

  const submitForm = (data: IRegister): void => {
    console.log({ data });
    reset();
  };
  const NameError = t(`${errors.name?.message}`)
  const EmailError = t(`${errors.email?.message}`)
  return (
    <form
      action='#'
      className={`w-[1300px] h-[387px] mt-[202px] rounded-[32px] flex justify-between items-center px-[60px] ${isDark ? theme.componentDark : theme.componentLight}`}
      onSubmit={handleSubmit(submitForm)}
    >
      <section>
        <p className='text-[18px] leading-[27px] text-[#118DA8]'>{t('Email Newsletter')}</p>
        <h2 className='text-[72px] leading-[79px] tracking-[3px] '>
          {t('Subscribe')}
          <br />
          {t('for updates')}
        </h2>
      </section>
      <section className='grid gap-y-[20px]'>
        <input
          {...register('name')}
          type='text'
          className={`w-[522px] h-[82px] rounded-[6px] ${isDark ? theme.inputDark : theme.inputLight}
                placeholder:text-[24px] placeholder:text-[#FFFFFFB2] pl-[19px] text-[24px] text-[#FFFFFFB2]`}
          placeholder={t('Name')}
        />
        <p className='text-red-500 m-0'>{NameError}</p>
        <input
          {...register('email')}
          type='text'
          className={`w-[522px] h-[82px] rounded-[6px] ${isDark ? theme.inputDark : theme.inputLight}
                placeholder:text-[24px] placeholder:text-[#FFFFFFB2] pl-[19px] text-[24px] text-[#FFFFFFB2]`}
          placeholder={t('Email')}
        />
        <p className='text-red-500 m-0'>{EmailError}</p>
        <button className='w-[87px] h-[48px] rounded-[6px] bg-[#118DA8] text-[15px] text-[#FFFFFFB2] font-bold cursor-pointer'>
          {t('Submit')}
        </button>
      </section>
    </form>
  );
};
