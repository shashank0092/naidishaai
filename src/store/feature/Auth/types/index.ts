export type AuthInterface = {
  isLoggedIn: boolean;
  loading: boolean;
  userProfile: {
    name: string;
    email: string;
    picture: {
      fileLink: string;
      fileName: string;
      fileType: string;
    };
  } | null;
};
