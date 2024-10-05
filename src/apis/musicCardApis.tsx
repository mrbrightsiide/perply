import { ITape } from '@/types';
import { axiosInstance } from './axiosInstance';

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
  alubmart_url?: string;
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
    const response = await axiosInstance.get(`/cassette/${user_uuid}/`);
    return response as any;
  } catch (error) {
    console.error('Error creating music card:', error);
    throw error;
  }
};
