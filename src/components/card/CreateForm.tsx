import styled from '@emotion/styled';
import { IPlaylistData } from '@/types';
import { TextInputWithLabel, TextAreaWithLabel } from '../atom/TextInput';
import { SelectBox } from '../atom/SelectBox';
import { TextInputLabel } from '../atom/TextInputLabel';

export const CreateForm = ({
  info,
  setInfo,
}: {
  info: IPlaylistData;
  setInfo: React.Dispatch<React.SetStateAction<IPlaylistData>>;
}) => {
  return (
    <BG>
      <PageWrapper>
        <TextInputWithLabel
          label='닉네임'
          value={info.user_name}
          onChangeInput={(e) => setInfo({ ...info, user_name: e.target.value })}
          placeholder='닉네임을 입력해주세요.'
        />
        <div>
          <TextInputLabel label='카테고리 선택' />
          <SelectBox
            list={[
              { text: '너와 분위기가 어울릴 것 같은 노래', key: 1 },
              { text: '노래 목록 필요', key: 2 },
              {
                text: '노래 목록 필요',
                key: 3,
              },
            ]}
            selected={info.playlist_id}
            setSelected={(item) => setInfo({ ...info, playlist_id: item })}
          />
        </div>
        <div>
          <TextInputLabel label='추천 음악' />
          <MusicWrapper>
            <AlbumCover>
              <img
                src={'http://' + info.albumart_url}
                width='100%'
                height='100%'
                alt='album cover'
              />
            </AlbumCover>
            <Info>
              <Title>{info.title}</Title>
              <Artist>{info.singer}</Artist>
            </Info>
          </MusicWrapper>
        </div>
        <TextAreaWithLabel
          label='추천 이유'
          value={info.content || ''}
          onChangeInput={(e) => setInfo({ ...info, content: e.target.value })}
          placeholder='추천 이유를 입력해주세요(선택)'
          inputStyle={{
            minHeight: '100px',
            textAlign: 'left',
            verticalAlign: 'top',
          }}
          isOptional
        />
        {/* 250바이트 제한 넣기 */}
      </PageWrapper>
    </BG>
  );
};

const BG = styled.div`
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.line.regular_gray};
  margin-top: 28px;
`;

const PageWrapper = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const MusicWrapper = styled.div`
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  padding: 14px 16px;
  display: flex;
  column-gap: 12px;
  justify-content: flex-start;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  max-width: calc(100% - (60px + 12px));
`;

const Artist = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.font.gray_02};
  margin-top: 4px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #171717;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

const AlbumCover = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
`;
