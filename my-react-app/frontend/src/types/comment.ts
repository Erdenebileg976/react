export interface Comments {
  name: string;
  email: string;
  text: string;
  date: string[];
  movie_id: {
    $oid: [];
  };
}
