import { Suspense } from "react";
import MovieInfo from "../../../../component/movie_info";
import MovieVideo from "../../../../component/movie_video";
import styles from "../../../../css/movie.module.css";

export const metadata = {
  title: "Movie",
};

// Movie 컴포넌트는 fetch할 데이터가 없기 때문에 loading을 할 이유도 없다. server에서 랜더링 된 html을 그대로 가져와 보여주면 되기 때문이다.
export default function Movie({ params: { id } }: { params: { id: string } }) {
  // const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]); // 2개의 비동기 함수를 동시에 처리할 수 있지만 반횐되는 array는 최종 작업이 끝난 이후 동시에 저장된다.

  return (
    <div className={styles.container}>
      <Suspense
        fallback={
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
          </div>
        }
      >
        <MovieInfo id={id} />
      </Suspense>
      <Suspense
        fallback={
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
          </div>
        }
      >
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
