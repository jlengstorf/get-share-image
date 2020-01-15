// add TypeScript definitions for autocomplete in IDEs
interface Config {
  title: string;
  tagline?: string;
  cloudName: string;
  imagePublicID: string;
  cloudinaryUrlBase?: string;
  titleExtraConfig?: string;
  taglineExtraConfig?: string;
  titleFont?: string;
  taglineFont?: string;
  imageWidth?: number;
  imageHeight?: number;
  textAreaWidth?: number;
  textLeftOffset?: number;
  titleBottomOffset?: number;
  taglineTopOffset?: number;
  textColor?: string;
  titleColor?: string;
  taglineColor?: string;
  titleFontSize?: number;
  taglineFontSize?: number;
  version?: string;
}

/**
 * Encodes characters for Cloudinary URL
 * Encodes some not allowed in Cloudinary parameter values twice:
 *   hash, comma, slash, question mark, backslash
 *   https://support.cloudinary.com/hc/en-us/articles/202521512-How-to-add-a-slash-character-or-any-other-special-characters-in-text-overlays-
 */
function cleanText(text: string): string {
  return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, '%25$1');
}

/**
 * Generates a social sharing image with custom text using Cloudinary’s APIs.
 *
 * @see https://cloudinary.com/documentation/image_transformations#adding_text_captions
 */
export default function generateSocialImage({
  title,
  tagline,
  cloudName,
  imagePublicID,
  cloudinaryUrlBase = 'https://res.cloudinary.com',
  titleFont = 'arial',
  titleExtraConfig = '',
  taglineExtraConfig = '',
  taglineFont = 'arial',
  imageWidth = 1280,
  imageHeight = 669,
  textAreaWidth = 760,
  textLeftOffset = 480,
  titleBottomOffset = 254,
  taglineTopOffset = 445,
  textColor = '000000',
  titleColor,
  taglineColor,
  titleFontSize = 64,
  taglineFontSize = 48,
  version = null,
}: Config): string {
  // configure social media image dimensions, quality, and format
  const imageConfig = [
    `w_${imageWidth}`,
    `h_${imageHeight}`,
    'c_fill',
    'q_auto',
    'f_auto',
  ].join(',');

  // configure the title text
  const titleConfig = [
    `w_${textAreaWidth}`,
    'c_fit',
    `co_rgb:${titleColor || textColor}`,
    'g_south_west',
    `x_${textLeftOffset}`,
    `y_${titleBottomOffset}`,
    `l_text:${titleFont}_${titleFontSize}${titleExtraConfig}:${cleanText(
      title,
    )}`,
  ].join(',');

  // configure the tagline text
  const taglineConfig = tagline
    ? [
        `w_${textAreaWidth}`,
        'c_fit',
        `co_rgb:${textColor}`,
        'g_north_west',
        `x_${textLeftOffset}`,
        `y_${taglineTopOffset}`,
        `l_text:${taglineFont}_${taglineFontSize}${taglineExtraConfig}:${cleanText(
          tagline,
        )}`,
      ].join(',')
    : undefined;

  // combine all the pieces required to generate a Cloudinary URL
  const urlParts = [
    cloudinaryUrlBase,
    cloudName,
    'image',
    'upload',
    imageConfig,
    titleConfig,
    taglineConfig,
    version,
    imagePublicID,
  ];

  // remove any falsy sections of the URL (e.g. an undefined version)
  const validParts = urlParts.filter(Boolean);

  // join all the parts into a valid URL to the generated image
  return validParts.join('/');
}
