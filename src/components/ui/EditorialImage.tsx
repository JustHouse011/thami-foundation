import { BorderLight } from './BorderLight';
import { useState, type CSSProperties } from 'react';

export interface EditorialImageAsset {
  src?: string;
  alt: string;
  position?: string;
}

export function EditorialImage({ image, label, className = '', priority = false, ratio = '4 / 5', edge = false }: {
  image: EditorialImageAsset; label: string; className?: string; priority?: boolean; ratio?: string; edge?: boolean;
}) {
  const [failedSource, setFailedSource] = useState<string>();
  const available = image.src && image.src !== failedSource;
  return <figure className={`editorial-image ${className} ${edge ? 'rainbow-border rainbow-border--feature' : ''}`}  style={{ '--image-ratio': ratio } as CSSProperties}>
    {edge && <BorderLight />}
    <div className="editorial-image-frame">
      {available ? <img src={image.src} alt={image.alt} style={{ objectPosition: image.position || 'center' }} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async" onError={() => setFailedSource(image.src)} /> :
        <div className="editorial-image-placeholder" role="img" aria-label={`${label}. Editorial placeholder; event photograph not yet supplied.`}>
          <span className="editorial-image-mark" aria-hidden="true">F / A</span>
          <span className="editorial-image-note">{label}<small>Photography forthcoming</small></span>
        </div>}
    </div>
  </figure>;
}
