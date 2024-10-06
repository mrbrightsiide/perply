import { ITape } from '@/types';
import { axiosInstance } from './axiosInstance';

export const recommendSongs = [
  {
    id: 1,
    singer: 'Linkin Park',
    title: 'Heavy Is the Crown',
    youtube_url: (
      <iframe
        width='275'
        height='205'
        src='https://www.youtube.com/embed/5FrhtahQiRc?si=eCKFqv3wSTErZygy'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    ),
    content: '네 강한 의지랑 도전적인 성격이 이 노래랑 잘 어울려서 생각났어!',
    like: 5,
    is_read: true,
    created_at: '2024-10-06T01:57:35.070176Z',
    color: 'purple',
    albumart_url:
      'https://i.scdn.co/image/ab67616d0000b2735e2801d58ceb23a9d19308b7',
    playlist_id: 1,
    user_name: '노래하는명학',
  },
  {
    id: 2,
    singer: '프로미스나인',
    title: 'Supersonic',
    youtube_url: (
      // rome-ignore lint/style/useSelfClosingElements: <explanation>
      <iframe
        width='275'
        height='205'
        src='https://www.youtube.com/embed/0LiQp7y8Wwc?si=oAJpny5yQ35mAc6y'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    ),
    content: '항상 에너지 넘치는 너랑 이 곡의 신나는 느낌이 너무 닮았어!',
    like: 4,
    is_read: false,
    created_at: '2024-10-06T01:57:35.070176Z',
    color: 'blue',
    albumart_url:
      'https://image.bugsm.co.kr/album/images/500/41053/4105386.jpg',
    playlist_id: 1,
    user_name: '춤추는 시아',
  },
  {
    id: 3,
    singer: 'League of Legends & NewJeans',
    title: 'GODS',
    youtube_url: (
      <iframe
        width='275'
        height='205'
        src='https://www.youtube.com/embed/C3GouGa0noM?si=1gaeXlyMAKzexdC8'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    ),
    content: '너의 독창적인 성격이 이 곡처럼 특별하게 느껴져서 생각났어!',
    like: 7,
    is_read: false,
    created_at: '2024-10-06T01:57:35.070176Z',
    color: 'skyblue',
    albumart_url: 'https://i.ytimg.com/vi/jdzKPUhXa-o/maxresdefault.jpg',
    playlist_id: 1,
    user_name: '특별한 승희',
  },
  {
    id: 4,
    singer: 'TWS',
    title: '첫 만남은 계획대로 되지 않아',
    youtube_url: (
      <iframe
        width='275'
        height='205'
        src='https://www.youtube.com/embed/hVAc1Vf2ITU?si=Ogy5rfALosNdc4j8'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    ),
    content: '너의 낭만적인 성향이 이 곡 가사랑 참 잘 맞아서 생각났어.',
    like: 6,
    is_read: true,
    created_at: '2024-10-06T01:57:35.070176Z',
    color: 'cyan',
    albumart_url:
      'https://i1.sndcdn.com/artworks-0hcmWmh9PfZJRd2a-1U37gA-t500x500.jpg',
    playlist_id: 3,
    user_name: '낭만적인 예진',
  },
  {
    id: 5,
    singer: '아이유',
    title: '관객이 될게 (I stan U)',
    youtube_url: (
      <iframe
        width='275'
        height='205'
        src='https://www.youtube.com/embed/_ZfT3M6ZKEM?si=19w9jekGgJHWf0W2'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    ),
    content: '네가 항상 주변 사람들 응원해주는 모습이 이 곡이랑 딱이야!',
    like: 8,
    is_read: true,
    created_at: '2024-10-06T01:57:35.070176Z',
    color: 'green',
    albumart_url:
      'https://image.bugsm.co.kr/album/images/500/40955/4095501.jpg',
    playlist_id: 3,
    user_name: '유애나 짱',
  },
  {
    id: 6,
    singer: '넬 (Nell)',
    title: '기억을 걷는 시간',
    youtube_url: (
      <iframe
        width='275'
        height='205'
        src='https://www.youtube.com/embed/83IfZhO4Pd0?si=MEYHyJqut9votq-s'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    ),
    content: '네 깊은 생각과 추억을 소중히 여기는 성격이 이 노래랑 잘 어울려!',
    like: 10,
    is_read: true,
    created_at: '2024-10-06T01:57:35.070176Z',
    color: 'yellow',
    albumart_url: 'https://image.bugsm.co.kr/album/images/500/1512/151262.jpg',
    playlist_id: 4,
    user_name: '넬덕후',
  },
] as unknown as ITape[];

export interface MusicCardData {
  user_name: string; // 사용자 이름 (예: "노래하는명학")
  singer: string; // 가수 이름 (예: "김건모")
  title: string; // 노래 제목 (예: "너에게 하고 싶은 말")
  youtube_url: string; // 유튜브 URL (예: "https://www.youtube.com/watch?v=kXXFlw5n6LE")
  content?: string; // 노래에 대한 설명 (예: "너를 생각하면 떠오르는 노래야~")
  //   like: number; // 좋아요 개수 (숫자)
  //   is_read: boolean; // 읽음 여부 (예: false)
  //   created_at: string; // 생성 시간 (ISO 문자열, 예: "2024-10-03T01:57:35.070176Z")
  color: string; // 카드 색상 (예: "red", "white" 등)
  alubmart_url: string | null;
  playlist_id: number;
}

export const createMusicCard = async (
  user_uuid: string,
  playlist_id: number,
  musicCardData: MusicCardData
) => {
  try {
    const response = await axiosInstance.post(
      `/cassette/recommended-playlist/create/${user_uuid}/${playlist_id}/`,
      musicCardData
    );
    return response;
  } catch (error) {
    console.error('Error creating music card:', error);
    throw error;
  }
};

export const getSongCardList = async (
  user_uuid: string
): Promise<
  { total_music_cards: number; recommended_songs: ITape[] } | undefined
> => {
  try {
    // const response = await axiosInstance.get(`/cassette/${user_uuid}/`);
    // return response as any;
    // return dummy data after 300ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          total_music_cards: 6,
          recommended_songs: recommendSongs,
        });
      }, 300);
    });
  } catch (error) {
    console.error('Error creating music card:', error);
    throw error;
  }
};

export const getMusicCardDetail = async (
  user_uuid: string,
  playlistId: number,
  musicCardId: number
): Promise<ITape> => {
  try {
    // return await axiosInstance.get(
    //   `cassette/recommended-playlist/detail/${user_uuid}/${playlistId}/${musicCardId}/`
    // );
    // return recommendSongs.find((song) => song.id === musicCardId) as ITape;
    // return dummy data after 300ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          recommendSongs.find((song) => song.id === musicCardId) as ITape
        );
      }, 200);
    });
  } catch (error) {
    console.error('Error fetching music card:', error);
    throw error;
  }
};
