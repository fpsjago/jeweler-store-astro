import type { ImageMetadata } from 'astro';

import akoyaPearls from '../assets/akoya-pearls.jpg';
import diamondBracelet from '../assets/diamond-bracelet.jpg';
import emeraldDrops from '../assets/emerald-drops.jpg';
import eternalSolitaire from '../assets/eternal-solitaire.jpg';
import goldChain from '../assets/gold-chain.jpg';
import goldPendant from '../assets/gold-pendant.jpg';
import heritageBangle from '../assets/heritage-bangle.jpg';
import jewelryAtelier from '../assets/jewelry-atelier.jpg';
import luxuryTimepiece from '../assets/luxury-timepiece.jpg';
import marquiseStatement from '../assets/marquise-statement.jpg';
import roseEternity from '../assets/rose-eternity.jpg';
import rubyRing from '../assets/ruby-ring.jpg';
import sapphirePendant from '../assets/sapphire-pendant.jpg';
import tennisNecklace from '../assets/tennis-necklace.jpg';
import topazCocktail from '../assets/topaz-cocktail.jpg';

/**
 * Product photos, keyed by the bare filename used in a product's `image:` field.
 *
 * The imports are explicit on purpose. An `import.meta.glob` over src/assets
 * keeps every source JPEG in the module graph and copies the unoptimized
 * originals into dist/. Explicit imports let Astro ship only the optimized
 * AVIF/WebP. Convention: the photo is named after the product's slug.
 * Adding a product photo means one import and one line here.
 */
const imagesByFile: Record<string, ImageMetadata> = {
  'akoya-pearls.jpg': akoyaPearls,
  'diamond-bracelet.jpg': diamondBracelet,
  'emerald-drops.jpg': emeraldDrops,
  'eternal-solitaire.jpg': eternalSolitaire,
  'gold-chain.jpg': goldChain,
  'gold-pendant.jpg': goldPendant,
  'heritage-bangle.jpg': heritageBangle,
  'jewelry-atelier.jpg': jewelryAtelier,
  'luxury-timepiece.jpg': luxuryTimepiece,
  'marquise-statement.jpg': marquiseStatement,
  'rose-eternity.jpg': roseEternity,
  'ruby-ring.jpg': rubyRing,
  'sapphire-pendant.jpg': sapphirePendant,
  'tennis-necklace.jpg': tennisNecklace,
  'topaz-cocktail.jpg': topazCocktail,
};

/** Resolve a product's `image:` frontmatter filename to its imported asset. */
export function resolveProductImage(file: string): ImageMetadata {
  const image = imagesByFile[file];
  if (!image) {
    throw new Error(
      `Product image "${file}" was not found in src/assets/. ` +
        'Add the file there, then import it in src/lib/product-images.ts and add it to imagesByFile.'
    );
  }
  return image;
}
