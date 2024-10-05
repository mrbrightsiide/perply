import { axiosInstance } from './axiosInstance';
import { IPlayList } from '@/types/index';

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
