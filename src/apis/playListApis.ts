// import { axiosInstance } from './axiosInstance';
import { IPlayList, ITape, tapeDummyData } from '@/types/index';
import { recommendSongs } from './musicCardApis';

export const dummyPlaylists = [
  {
    id: 1,
    user_uuid: 'b61fb2',
    playlist_title: '나를 보면 떠오르는 음악',
    playlist_title_other: '너를 보면 떠오르는 음악',
    user_id: 2,
    created_at: '2021-10-10',
    total_songs: 3,
  },
  {
    id: 2,
    user_uuid: 'b61fb2',
    playlist_title: '나의 첫인상과 닮은 음악 모음',
    playlist_title_other: '너의 첫인상과 닮은 음악',
    user_id: 2,
    created_at: '2021-10-10',
    total_songs: 0,
  },
  {
    id: 3,
    user_uuid: 'b61fb2',
    playlist_title: '이 음악은 마치 화났을 때의 나',
    playlist_title_other: '화가 났을 때 너의 모습과 닮은 음악',
    user_id: 2,
    created_at: '2021-10-10',
    total_songs: 0,
  },
  {
    id: 4,
    user_uuid: 'b61fb2',
    playlist_title: '나의 매력을 음악으로 표현하자면',
    playlist_title_other: '너의 매력 포인트와 닮은 음악',
    user_id: 2,
    created_at: '2021-10-10',
    total_songs: 3,
  },
  {
    id: 5,
    user_uuid: 'b61fb2',
    playlist_title: '사랑을 할 때의 나는 이 음악과 닮았어',
    playlist_title_other: '사랑을 할 때의 너와 닮은 음악',
    user_id: 2,
    created_at: '2021-10-10',
    total_songs: 0,
  },
];

export const getAllPlaylists = async (
  user_uuid: string
): Promise<IPlayList[]> => {
  try {
    // return await axiosInstance.get(`/cassette/playlists/${user_uuid}/`);
    // return dummyplaylist after 300ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyPlaylists);
      }, 300);
    });
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw error;
  }
};

export interface IPlaylistDetailResponse {
  playlist: IPlayList;
  recommended_songs: ITape[];
}

export const getPlaylistDetails = async (
  user_uuid: string,
  playlist_id: number
): Promise<IPlaylistDetailResponse> => {
  try {
    // return await axiosInstance.get(
    //   `cassette/playlists/detail/${user_uuid}/${playlist_id}/`
    // );
    // return dummyplaylist after 300ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          playlist: dummyPlaylists.find(
            (playlist) => playlist.id === playlist_id
          )!,
          recommended_songs: recommendSongs.filter(
            (tape) => tape.playlist_id === playlist_id
          ),
        });
      }, 300);
    });
  } catch (error) {
    console.error('Error fetching playlist details:', error);
    throw error;
  }
};
