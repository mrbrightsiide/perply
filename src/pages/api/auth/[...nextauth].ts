/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({
      token,
      account,
      profile,
    }: {
      token: any;
      account: any;
      profile: any;
    }) {
      // 카카오 로그인 후 API로 사용자 정보를 받아서 토큰에 저장
      if (account && profile) {
        try {
          // const response = await axios.get(
          //   'http://www.perply.site/account/kakao/login',
          //   {
          //     params: {
          //       code: account.access_token, // 카카오에서 받은 토큰을 사용
          //     },
          //   }
          // );
          const response = {
            token:
              'O5smzE4wk7vA39TtX9l31J33uTGjEM2JAAAAAQo8JCAAAAGSXC_IzRamEcnPBcmr',
            user_id: 2,
            user_uuid: 'b61fb2',
            nickname: '시아',
            profile_image:
              'http://img1.kakaocdn.net/thumb/R640x640.q70/?fname=http://t1.kakaocdn.net/account_images/default_profile.jpeg',
            created: false,
          };

          const { user_id, user_uuid, nickname, profile_image, created } =
            response;

          console.log('$$$ response.data: ', response);

          // API 응답 데이터를 JWT에 포함
          token.userId = user_id;
          token.userUuid = user_uuid;
          token.nickname = nickname;
          token.profileImage = profile_image;
          token.created = created;
        } catch (error) {
          console.error('Kakao login API request failed:', error);
        }
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      // JWT 토큰에서 세션으로 데이터를 전달
      session.user.id = token.userId;
      session.user.uuid = token.userUuid;
      session.user.nickname = token.nickname;
      session.user.profileImage = token.profileImage;
      session.user.created = token.created;
      return session;
    },
  },
};

export default NextAuth(authOptions as any);
