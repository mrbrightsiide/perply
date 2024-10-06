import { axiosInstance } from './axiosInstance';
import { IPlayList, ITape, tapeDummyData } from '@/types/index';
import { recommendSongs } from './musicCardApis';

export const dummyPlaylists = [
  {
    id: 1,
    user_uuid: 'b61fb2',
    playlist_title: '테스트',
    playlist_title_other: '테스트',
    user_id: 2,
    created_at: '2021-10-10',
    total_songs: 3,
  },
  {
    id: 2,
    user_uuid: 'b61fb2',
    playlist_title: '테스트',
    playlist_title_other: '테스트',
    user_id: 2,
    created_at: '2021-10-10',
    total_songs: 0,
  },
  {
    id: 3,
    user_uuid: 'b61fb2',
    playlist_title: '테스트',
    playlist_title_other: '테스트',
    user_id: 2,
    created_at: '2021-10-10',
    total_songs: 2,
  },
  {
    id: 4,
    user_uuid: 'b61fb2',
    playlist_title: '테스트',
    playlist_title_other: '테스트',
    user_id: 2,
    created_at: '2021-10-10',
    total_songs: 1,
  },
  {
    id: 5,
    user_uuid: 'b61fb2',
    playlist_title: '테스트',
    playlist_title_other: '테스트',
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
