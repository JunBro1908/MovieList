import styles from "../css/video.module.css";
import { API_URL } from "../app/constants";

const getVideo = async (id: string) => {
  console.log("get video API...");

  const res = await fetch(`${API_URL}/${id}/videos`);
  const json = await res.json();
  return json;
};

export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
