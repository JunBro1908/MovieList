import { API_URL } from "../app/constants";
import styles from "../css/movie-info.module.css";

const getMovie = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`);
  const json = await res.json();
  return json;
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div>
        <div
          style={{
            backgroundImage: `url(${movie.backdrop_path})`,
            backgroundSize: "cover",
            opacity: 0.5,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        ></div>
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.original_title}</h1>
          <h3>⭐️ {movie.vote_average.toFixed(1)} / 10</h3>
          <p>
            {movie.genres.map((item: { name: string }) => item.name).join(", ")}
          </p>
          <p>{movie.overview}</p>
          <a href={movie.homepage} target={"_blank"}>
            More Info &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
