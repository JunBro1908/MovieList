import Link from "next/link";
import { API_URL } from "../constants";
import styles from "../../css/home.module.css";

export const metadata = { title: "HOME" };
// { cache: "no-store" }
const getMovies = async () => {
  return await (await fetch(API_URL)).json();
};

export default async function Home() {
  const movies = JSON.parse(JSON.stringify(await getMovies()));

  return (
    <ul className={styles.movie_slider}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movie_item}>
          <Link prefetch href={`/movie/${movie.id}`}>
            <img
              src={movie.poster_path}
              className={styles.movie_poster}
              alt={movie.title}
            />
            <div className={styles.movie_info}>
              <h3>{movie.title}</h3>
              <p>⭐️ {movie.vote_average.toFixed(1)} / 10</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
