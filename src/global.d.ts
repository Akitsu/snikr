interface SneakerMedia {
  imageUrl?: string;
  smallImageUrl?: string;
  thumbUrl?: string;
}

interface Sneaker {
  brand: string;
  colorway: string;
  gender: string;
  id: string;
  media: SneakerMedia;
  name: string;
  releaseDate: string;
  retailPrice: number;
  shoe: string;
  title: string;
  year: number;
}