import styled from '@emotion/styled';
import { ITape } from '@/types';
import { colorChips } from '../card/ColorChip';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Image from 'next/image';

export const TapeListPreview = ({ data }: { data: ITape[] }) => {
  const router = useRouter();
  const { userId } = router.query as { userId: string };

  return (
    <Wrapper>
      {data.map((item) => (
        <TapeListPreviewCard
          key={item.id}
          css={css`
            background-color: ${colorChips.find(
              ({ name }) => name === item.color
            )?.listBgColor || 'white'};
          `}
          onClick={() =>
            router.push({
              pathname: '/playlist/song',
              query: { id: item.id, playlistId: item.playlist_id, userId },
            })
          }
        >
          <Shadow>
            {!item.is_read && <UnreadDot top='12px' right='12px' />}
            <Flex>
              <TapeImg>
                <Image
                  src={`/images/main/small_tape/${item.color}.png`}
                  alt='tape'
                  width={81}
                  height={55}
                />
              </TapeImg>
              <InfoWrap>
                <SongTitle>{item.title}</SongTitle>
                <From>From. {item.user_name}</From>
              </InfoWrap>
            </Flex>
          </Shadow>
        </TapeListPreviewCard>
      ))}
    </Wrapper>
  );
};

const TapeListPreviewCard = styled.div`
  border-radius: 16px;
  box-shadow: inset 3px 3px 3px #ffffff50;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  row-gap: 17px;
  display: grid;
  margin: 12px 0 30px 0;
`;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: inset -2px -2px 3px #00000026;
  border-radius: 16px;
  position: relative;
`;

const SongTitle = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 170px;
`;

const From = styled.p`
  font-size: 12px;
  color: #00000080;
  margin-top: 6px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const TapeImg = styled.div`
  width: 124px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const InfoWrap = styled.div`
  padding: 14px 24px 16px 0;
`;

export const UnreadDot = styled.div<{
  top: string;
  right: string;
}>`
  width: 8px;
  height: 8px;
  background-color: #ff3535;
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  z-index: 10;
`;
