import { useDataset } from "../context/DatasetContext";
import VideoCard from "./VideoCard";
export default function VideoFeed({ search, activeCategory, onSelect }) {
  const { categories } = useDataset();
  let videos = categories.flatMap((g) =>
    g.contents.map((v) => ({ ...v, category: g.category })),
  );

  if (activeCategory)
    videos = videos.filter((v) => v.category.slug === activeCategory);

  if (search)
    videos = videos.filter((v) =>
      v.title.toLowerCase().includes(search.toLowerCase()),
    );

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((v) => (
        <VideoCard
          key={v.slug}
          video={v}
          category={v.category}
          onClick={() => onSelect(v)}
        />
      ))}
    </div>
  );
}
