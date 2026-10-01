import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig(({mode}) => {
 const { VITE_SITE_URL } = loadEnv(mode, '.', 'VITE_');
 const origin = VITE_SITE_URL ? new URL(VITE_SITE_URL).origin : undefined;
 return {plugins:[react(),tailwindcss(),{name:'site-metadata',transformIndexHtml(){return [
 {tag:'meta',attrs:{property:'og:image',content:(origin ?? '')+'/images/hero-foundation.webp'},injectTo:'head' as const},
 ...(origin ? [
 {tag:'link',attrs:{rel:'canonical',href:origin+'/'},injectTo:'head' as const},
 {tag:'meta',attrs:{property:'og:url',content:origin+'/'},injectTo:'head' as const}
 ]:[])
 ]}}]};
});
