import styled from '@emotion/styled';
import { CheckBox } from '../atom/CheckBox';

export const SearchMusicCard = ({
  item,
  checked,
  onChangeCheckBox,
  openIframe,
  onClickOpenIframe,
}: {
  item: {
    title: string;
    'maniadb:artist': { name: string }[];
    'maniadb:album': { image: string[] }[];
    $: { id: string };
  };
  checked: boolean;
  onChangeCheckBox: () => void;
  openIframe: boolean;
  onClickOpenIframe: () => void;
}) => {
  return (
    <>
      <Wrapper>
        <CoverAndInfo onClick={onClickOpenIframe}>
          <AlbumCover>
            <img
              src={item?.['maniadb:album']?.[0]?.image?.[0]}
              width='100%'
              height='100%'
              alt='album cover'
            />
          </AlbumCover>
          <Info>
            <Title>{item.title}</Title>
            <Artist>{item['maniadb:artist'][0].name}</Artist>
          </Info>
        </CoverAndInfo>
        <CheckBox checked={checked} onChange={onChangeCheckBox} />
      </Wrapper>
      {openIframe && (
        <iframe
          src={`https://www.maniadb.com/popup/youtube/${item?.['$']?.['id']}`}
          width='100%'
          height={250}
          frameBorder={0}
        />
      )}
    </>
  );
};

const AlbumCover = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
`;

const Artist = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.font.gray_02};
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #171717;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-top: 1px solid #f1f1f5;
  cursor: pointer;
`;

const CoverAndInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-start;
  flex: 1;
  margin-right: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  max-width: calc(100% - (60px + 12px));
`;
