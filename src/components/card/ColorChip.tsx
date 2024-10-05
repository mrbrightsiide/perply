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
}[] = [
  {
    name: 'purple',
    color: '#B287FF',
  },
  {
    name: 'blue',
    color: '#4096FF',
  },
  {
    name: 'skyblue',
    color: '#29D1FF',
  },
  {
    name: 'mint',
    color: '#15D6CF',
  },
  {
    name: 'lime',
    color: '#DCF333',
  },
  {
    name: 'yellow',
    color: '#FFEC3D',
  },
  {
    name: 'pink',
    color: '#F759AB',
  },
  {
    name: 'hotpink',
    color: '#F759AB',
  },

  {
    name: 'grapefruit',
    color: '#FF4D4F',
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
