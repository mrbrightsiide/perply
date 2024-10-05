import styled from '@emotion/styled';
import { TTapeColor } from '@/types/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const ColorChip = ({
  selectedColor,
}: {
  selectedColor: { name: string; color: string };
}) => {
  return (
    <Swiper spaceBetween={12} slidesPerView={7}>
      {colorChips.map((chip) => (
        <SwiperSlide key={chip.name}>
          <BG
            clicked={selectedColor.name === chip.name}
            onClick={() => alert('clicked')}
          >
            <Chip
              key={chip.name}
              color={chip.color}
              clicked={selectedColor.name === chip.name}
            />
          </BG>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const colorChips: {
  name: TTapeColor;
  color: string;
  listBgColor: string;
  songBgColor?: string;
}[] = [
  {
    name: 'purple',
    color: '#B287FF',
    listBgColor: '#C8A7FF',
    songBgColor: '#DFCEFF',
  },
  {
    name: 'blue',
    color: '#4096FF',
    listBgColor: '#96C6FF',
  },
  {
    name: 'skyblue',
    color: '#29D1FF',
    listBgColor: '#C1E0FF',
  },
  {
    name: 'cyan',
    color: '#15D6CF',
    listBgColor: '#77e7e3',
  },
  {
    name: 'green',
    color: '#DCF333',
    listBgColor: '#E8F58C',
  },
  {
    name: 'yellow',
    color: '#FFEC3D',
    listBgColor: '#fff566',
  },
  {
    name: 'pink',
    color: '#F759AB',
    listBgColor: '#FF85C0',
    songBgColor: '#FFB6B7',
  },
  {
    name: 'red',
    color: '#FF4D4F',
    listBgColor: '#FF7875',
    songBgColor: '#FAD0E3',
  },
];

const Chip = styled.div<{ color: string; clicked: boolean }>`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
  cursor: pointer;
  margin: 0 auto;
`;

const BG = styled.div<{ clicked: boolean }>`
  background-color: ${({ clicked, theme }) =>
    clicked ? theme.line.regular_gray : 'transparent'};
  border-radius: 100%;
  width: min-content;
  height: auto;
  padding: 2px;
  border: 1px solid
    ${({ theme, clicked }) =>
      clicked ? theme.line.black : theme.line.regular_gray};
`;
