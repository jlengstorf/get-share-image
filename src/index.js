"use strict";
exports.__esModule = true;
/**
 * Encodes characters for Cloudinary URL
 * Encodes some not allowed in Cloudinary parameter values twice:
 *   hash, comma, slash, question mark, backslash
 *   https://support.cloudinary.com/hc/en-us/articles/202521512-How-to-add-a-slash-character-or-any-other-special-characters-in-text-overlays-
 *
 */
function cleanText(text) {
    return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, '%25$1');
}
/**
 * Generates a social sharing image with custom text using Cloudinary’s APIs.
 *
 * @see https://cloudinary.com/documentation/image_transformations#adding_text_captions
 *
 */
function generateSocialImage(_a) {
    var title = _a.title, tagline = _a.tagline, cloudName = _a.cloudName, imagePublicID = _a.imagePublicID, _b = _a.cloudinaryUrlBase, cloudinaryUrlBase = _b === void 0 ? 'https://res.cloudinary.com' : _b, _c = _a.titleFont, titleFont = _c === void 0 ? 'arial' : _c, _d = _a.titleExtraConfig, titleExtraConfig = _d === void 0 ? '' : _d, _e = _a.taglineExtraConfig, taglineExtraConfig = _e === void 0 ? '' : _e, _f = _a.taglineFont, taglineFont = _f === void 0 ? 'arial' : _f, _g = _a.imageWidth, imageWidth = _g === void 0 ? 1280 : _g, _h = _a.imageHeight, imageHeight = _h === void 0 ? 669 : _h, _j = _a.textAreaWidth, textAreaWidth = _j === void 0 ? 760 : _j, _k = _a.textLeftOffset, textLeftOffset = _k === void 0 ? 480 : _k, _l = _a.titleGravity, titleGravity = _l === void 0 ? 'south_west' : _l, _m = _a.taglineGravity, taglineGravity = _m === void 0 ? 'north_west' : _m, _o = _a.titleLeftOffset, titleLeftOffset = _o === void 0 ? null : _o, _p = _a.taglineLeftOffset, taglineLeftOffset = _p === void 0 ? null : _p, _q = _a.titleBottomOffset, titleBottomOffset = _q === void 0 ? 254 : _q, _r = _a.taglineTopOffset, taglineTopOffset = _r === void 0 ? 445 : _r, _s = _a.textColor, textColor = _s === void 0 ? '000000' : _s, titleColor = _a.titleColor, taglineColor = _a.taglineColor, _t = _a.titleFontSize, titleFontSize = _t === void 0 ? 64 : _t, _u = _a.taglineFontSize, taglineFontSize = _u === void 0 ? 48 : _u, _v = _a.version, version = _v === void 0 ? null : _v;
    // configure social media image dimensions, quality, and format
    var imageConfig = [
        "w_" + imageWidth,
        "h_" + imageHeight,
        'c_fill',
        'q_auto',
        'f_auto',
    ].join(',');
    // configure the title text
    var titleConfig = [
        "w_" + textAreaWidth,
        'c_fit',
        "co_rgb:" + (titleColor || textColor),
        "g_" + titleGravity,
        "x_" + (titleLeftOffset || textLeftOffset),
        "y_" + titleBottomOffset,
        "l_text:" + titleFont + "_" + titleFontSize + titleExtraConfig + ":" + cleanText(title),
    ].join(',');
    // configure the tagline text
    var taglineConfig = tagline
        ? [
            "w_" + textAreaWidth,
            'c_fit',
            "co_rgb:" + (taglineColor || textColor),
            "g_" + taglineGravity,
            "x_" + (taglineLeftOffset || textLeftOffset),
            "y_" + taglineTopOffset,
            "l_text:" + taglineFont + "_" + taglineFontSize + taglineExtraConfig + ":" + cleanText(tagline),
        ].join(',')
        : undefined;
    // combine all the pieces required to generate a Cloudinary URL
    var urlParts = [
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
    var validParts = urlParts.filter(Boolean);
    // join all the parts into a valid URL to the generated image
    return validParts.join('/');
}
exports["default"] = generateSocialImage;
