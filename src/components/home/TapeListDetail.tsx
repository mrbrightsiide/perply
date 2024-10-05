import styled from '@emotion/styled';
import { ITape } from '@/types';
import { useRouter } from 'next/router';
import { UnreadDot } from './TapeListPreview';

export const TapeListDetail = ({ data }: { data: ITape[] }) => {
  const router = useRouter();
  return (
    <Wrapper>
      {data.map((item) => (
        <TapeListDetailCard
          key={item.id}
          onClick={() =>
            router.push({
              pathname: '/my_home/detail',
              query: { id: item.id },
            })
          }
        >
          <Flex>
            <AlbumComverBox>
              {!item.is_read && <UnreadDot top='0' right='0' />}
              <AlbumComver>
                <img src={item.album_cover_url} alt='album cover' />
              </AlbumComver>
            </AlbumComverBox>
            <InfoWrap>
              <div>
                <SongTitle>{item.title}</SongTitle>
                <Artist>{item.singer}</Artist>
              </div>
              <From>From. {item.user_name}</From>
            </InfoWrap>
          </Flex>
        </TapeListDetailCard>
      ))}
    </Wrapper>
  );
};

const TapeListDetailCard = styled.div`
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  row-gap: 20px;
  display: grid;
  max-width: 335px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  margin: 102px 20px 0 20px;
  padding-bottom: 20px;
  max-height: calc(100% - 102px);
  overflow-y: auto;
  /* border: 1px solid pink; */
`;

const SongTitle = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: #fff;
`;

const From = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.font.gray_03};
  margin-top: 6px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const Flex = styled.div`
  display: flex;
  align-items: stretch;
  gap: 16px;
`;

const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: column;
  padding: 4px 3px 3px 3px;
`;

const AlbumComverBox = styled.div`
  position: relative;
`;

const AlbumComver = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 16px;
  overflow: hidden;
  object-fit: cover;
`;

const Artist = styled.p`
  font-size: 14px;
  color: #fff;
  margin-top: 6px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
