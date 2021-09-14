interface Props {
    title: string;
    tagline: string;
    cloudName: string;
    imagePublicID: string;
    cloudinaryUrlBase?: string;
    titleFont?: string;
    titleExtraConfig?: string;
    taglineExtraConfig?: string;
    taglineFont?: string;
    imageWidth?: number;
    imageHeight?: number;
    textAreaWidth?: number;
    textLeftOffset?: number;
    titleGravity?: string;
    taglineGravity?: string;
    titleLeftOffset?: number | null;
    taglineLeftOffset?: number | null;
    titleBottomOffset?: number;
    taglineTopOffset?: number;
    textColor?: string;
    titleColor: string;
    taglineColor: string;
    titleFontSize?: number;
    taglineFontSize?: number;
    version?: number | null;
}
/**
 * Generates a social sharing image with custom text using Cloudinary’s APIs.
 *
 * @see https://cloudinary.com/documentation/image_transformations#adding_text_captions
 *
 */
export default function generateSocialImage({ title, tagline, cloudName, imagePublicID, cloudinaryUrlBase, titleFont, titleExtraConfig, taglineExtraConfig, taglineFont, imageWidth, imageHeight, textAreaWidth, textLeftOffset, titleGravity, taglineGravity, titleLeftOffset, taglineLeftOffset, titleBottomOffset, taglineTopOffset, textColor, titleColor, taglineColor, titleFontSize, taglineFontSize, version, }: Props): string;
export {};
