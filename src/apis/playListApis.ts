import { axiosInstance } from './axiosInstance';
import { IPlayList, ITape } from '@/types/index';

export const getAllPlaylists = async (
  user_uuid: string
): Promise<IPlayList[]> => {
  try {
    return await axiosInstance.get(`cassette/playlists/${user_uuid}/`);
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
    return await axiosInstance.get(
      `/cassette/playlists/detail/${user_uuid}/${playlist_id}/`
    );
  } catch (error) {
    console.error('Error fetching playlist details:', error);
    throw error;
  }
};
