export type UserBody = {
  name: string;
  email: string;
  status: boolean;
  phone: string;
};

export type QueryString = {
  limit: number;
  page: number;
};
