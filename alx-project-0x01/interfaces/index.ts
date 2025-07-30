export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export interface PostsPageProps {
  posts: PostProps[];
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  geo: Geo;
  company: Company;
}
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
