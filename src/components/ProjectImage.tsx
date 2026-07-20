import { useState, type ImgHTMLAttributes } from "react";
import { PROJECT_IMAGE_PLACEHOLDER } from "../data/projectAssets";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function ProjectImage({
  src,
  alt,
  fallbackSrc = PROJECT_IMAGE_PLACEHOLDER,
  ...rest
}: Props) {
  const [currentSrc, setCurrentSrc] = useState(src ?? fallbackSrc);

  return (
    <img
      {...rest}
      src={currentSrc || fallbackSrc}
      alt={alt}
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  );
}
