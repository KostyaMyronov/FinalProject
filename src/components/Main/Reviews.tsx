import { data } from '../../data/data';
import { FaStar } from 'react-icons/fa';
import { theme } from '../../data/theme';
import { useApp } from '../store/useApp';

export const Reviews = () => {
  const isDark = useApp((state) => state.isDark);
  return (
    <section className='grid grid-cols-3 gap-[16px] mt-[200px]'>
      {data.map((review, index) => {
        const { title, author } = review;
        return (
          <section
            className={`w-[423px] h-[321px] rounded-[32px] px-[50px] pt-[54px] ${isDark ? theme.componentDark : theme.componentLight}`}
            key={index}
          >
            <section
              className={`flex gap-[5px] ${isDark ? theme.reviewsStarDark : theme.reviewsStarLight}`}
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </section>

            <h4 className='text-[36px] leading-[43px]  mt-[21px]'>{title}</h4>
            <h5 className={`text-[24px] leading-[29px] mt-[19px] ${isDark ? theme.specialTextDark : theme.specialTextLight}`}>{author}</h5>
          </section>
        );
      })}
    </section>
  );
};
