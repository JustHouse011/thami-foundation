import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const homeDescription = 'The Thami Dish Foundation champions the dignity, rights and potential of young LGBTQI+ people across Africa through advocacy, education, culture and community.';
const aboutDescription = 'Learn about the Thami Dish Foundation and its work advancing dignity, safety, opportunity and belonging for LGBTQIA+ communities in South Africa.';
const programmesDescription = 'Explore the Thami Dish Foundation’s work across LGBTQIA+ advocacy, education, safe spaces, youth empowerment and community building.';

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

export function RouteEffects() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);
  const publicOrigin = useRef(document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href);

  useLayoutEffect(() => {
    const changed = previousPath.current !== pathname;
    previousPath.current = pathname;
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (target) {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: changed || reducedMotion ? 'instant' : 'smooth', block: 'start' });
      } else if (changed || !hash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      if (changed) document.querySelector<HTMLElement>('main')?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  useEffect(() => {
    const about = pathname === '/about' || pathname === '/about/';
    const programmes = pathname === '/programmes' || pathname === '/programmes/';
    const feather = pathname.replace(/\/$/, '') === '/feather-awards';
    const title = feather ? 'Feather Awards | Thami Dish Foundation' : programmes ? 'Programmes | Thami Dish Foundation' : about ? 'About | Thami Dish Foundation' : 'Thami Dish Foundation | A Brighter, Braver Africa';
    const description = feather ? 'Explore the Feather Awards — a celebration of LGBTQIA+ visibility, culture, expression and community in South Africa.' : programmes ? programmesDescription : about ? aboutDescription : homeDescription;
    const imagePath = programmes ? '/images/programmes/programmes-hero.webp' : about ? '/images/about/about-hero.webp' : '/images/hero-foundation.webp';
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    if (feather) document.head.querySelector('meta[property="og:image"]')?.remove();
    else setMeta('property', 'og:image', publicOrigin.current ? new URL(imagePath, publicOrigin.current).href : imagePath);
    if (publicOrigin.current) {
      const url = new URL(pathname, publicOrigin.current).href;
      const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonical) canonical.href = url;
      setMeta('property', 'og:url', url);
    }
  }, [pathname]);

  return null;
}

