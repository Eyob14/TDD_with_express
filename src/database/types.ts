import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Bookings {
  id: Generated<number>;
  screeningId: number;
  userId: number;
}

export interface Directors {
  movieId: number;
  personId: number;
}

export interface Movies {
  id: number | null;
  title: string;
  year: number | null;
}

export interface People {
  id: number | null;
  name: string;
  birth: number | null;
}

export interface Ratings {
  movieId: number;
  rating: number;
  votes: number;
}

export interface Screenings {
  id: Generated<number>;
  movieId: number;
  timestamp: string;
  allocation: number;
}

export interface Stars {
  movieId: number;
  personId: number;
}

export interface Users {
  id: Generated<number>;
  username: string;
  password: string;
  email: string;
  role: Generated<string>;
}

export interface DB {
  bookings: Bookings;
  directors: Directors;
  movies: Movies;
  people: People;
  ratings: Ratings;
  screenings: Screenings;
  stars: Stars;
  users: Users;
}
