export interface IPlaylistData {
  user_name: string;
  playlist_id: {
    text: string;
    key: number;
  };
  content?: string;
  youtube_url: string;
  album_image: string;
  title: string;
  singer: string;
  maniadb_id: string;
}

export type TTapeColor =
  | 'purple'
  | 'blue'
  | 'skyblue'
  | 'mint'
  | 'lime'
  | 'yellow'
  | 'pink'
  | 'hotpink'
  | 'grapefruit';

export interface ITape {
  id: number;
  playlist_id: number;
  user_name: string;
  singer: string;
  title: string;
  youtube_url: string;
  content: string;
  like: number;
  is_read: boolean;
  created_at: string;
  color: TTapeColor;
  album_cover_url: string;
}

export interface ITapeResponse {
  tapes: ITape[];
  total_music_cards: number;
}

export const tapeDummyData: ITape[] = [
  {
    id: 1,
    playlist_id: 1,
    user_name: '노래하는명학',
    singer: '김건모',
    title: '너에게 하고 싶은 말',
    youtube_url: 'https://www.youtube.com/watch?v=kXXFlw5n6LE',
    content: '너를 생각하면 떠오르는 노래야~',
    like: 1,
    is_read: false,
    created_at: '2024-10-03T01:57:35.070176Z',
    color: 'pink',
    album_cover_url:
      'https://visla.kr/wp/wp-content/uploads/2022/11/210260257_492056461875169_1648387615546901397_n.jpg',
  },
  {
    id: 2,
    playlist_id: 1,
    user_name: '춤추는예진',
    singer: '윤도현',
    title: '너에게 전하고 싶은 말',
    youtube_url: 'https://www.youtube.com/watch?v=YSUCH6OfDNg',
    content: '사랑했나봐',
    like: 1,
    is_read: true,
    created_at: '2024-10-03T02:00:31.399606Z',
    color: 'skyblue',
    album_cover_url:
      'https://visla.kr/wp/wp-content/uploads/2022/11/210260257_492056461875169_1648387615546901397_n.jpg',
  },
  {
    id: 3,
    playlist_id: 1,
    user_name: '흥얼거리는승희',
    singer: '김태우',
    title: '우리 노래 같아~',
    youtube_url: 'https://www.youtube.com/watch?v=0vPZpzvUCuQ',
    content: '사랑비가 내려와~~',
    like: 1,
    is_read: false,
    created_at: '2024-10-03T02:05:17.542127Z',
    color: 'blue',
    album_cover_url:
      'https://visla.kr/wp/wp-content/uploads/2022/11/210260257_492056461875169_1648387615546901397_n.jpg',
  },
  {
    id: 4,
    playlist_id: 2,
    user_name: '댄스하는시아',
    singer: 'SG워너비',
    title: 'Timeless',
    youtube_url: 'https://www.youtube.com/watch?v=0pLa8NyS4Es',
    content: '내가 너에게 들려주고 싶은 노래~',
    like: 1,
    is_read: true,
    created_at: '2024-10-03T02:10:13.597026Z',
    color: 'lime',
    album_cover_url:
      'https://visla.kr/wp/wp-content/uploads/2022/11/210260257_492056461875169_1648387615546901397_n.jpg',
  },
  {
    id: 5,
    playlist_id: 1,
    user_name: 'test',
    singer: 'test',
    title: 'test',
    youtube_url: 'tes',
    content: 'tes',
    like: 1,
    is_read: true,
    created_at: '2024-10-03T03:22:20.963271Z',
    color: 'grapefruit',
    album_cover_url:
      'https://visla.kr/wp/wp-content/uploads/2022/11/210260257_492056461875169_1648387615546901397_n.jpg',
  },
];

export interface IPlaylist {
  id: number;
  user_id: number;
  user_uuid: string;
  playlist_title: string;
  created_at: string;
}

export interface ITapeDetail {
  playlist: IPlaylist;
  recommended_songs: ITape[];
}
