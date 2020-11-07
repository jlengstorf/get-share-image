# Generate Social Media Images Using Cloudinary

This is a utility function that builds social media images by overlaying a title and tagline over an image using [Cloudinary’s APIs](https://cloudinary.com/documentation/image_transformations?ap=lwj#adding_text_captions).

> **NOTE:** a Cloudinary account is required to use this package. The free tier should be more than enough for most small to medium websites using this package. [Sign up for an account here!](https://jason.af/cloudinary)

**This was created as part of an article series:**

- [How to design a social sharing card template](https://www.learnwithjason.dev/blog/design-social-sharing-card/)
- [How the code in this package works](https://www.learnwithjason.dev/blog/auto-generate-social-image/)

## Installation

```bash
# install using npm
npm install --save @jlengstorf/get-share-image

# install using yarn
yarn add @jlengstorf/get-share-image
```

See how this is used in a production site in the [learnwithjason.dev source code](https://github.com/jlengstorf/learnwithjason.dev/blob/070468828e8c758d150a8d573fd471d786278243/packages/%40jlengstorf/gatsby-theme-code-blog/src/gatsby-theme-blog-core/components/post.js#L55-L64).

## Example Usage

```js
import getShareImage from '@jlengstorf/get-share-image';

const socialImage = getShareImage({
  title: 'Deploy a Node.js App to DigitalOcean with SSL',
  tagline: '#devops #nodejs #ssl',
  cloudName: 'jlengstorf',
  imagePublicID: 'lwj/blog-post-card',
  titleFont: 'futura',
  taglineFont: 'futura',
  textColor: '232129',
});
```

This generates an image URL:

```text
https://res.cloudinary.com/jlengstorf/image/upload/w_1280,h_669,c_fill,q_auto,f_auto/w_760,c_fit,co_rgb:232129,g_south_west,x_480,y_254,l_text:futura_64:Deploy%20a%20Node.js%20App%20to%20DigitalOcean%20with%20SSL/w_760,c_fit,co_rgb:232129,g_north_west,x_480,y_445,l_text:futura_48:%23devops%20%23nodejs%20%23ssl/lwj/blog-post-card
```

Which looks like this:

![Deploy a Node.js App to DigitalOcean with SSL, from learnwithjason.dev](https://res.cloudinary.com/jlengstorf/image/upload/w_1280,h_669,c_fill,q_auto,f_auto/w_760,c_fit,co_rgb:232129,g_south_west,x_480,y_254,l_text:futura_64:Deploy%20a%20Node.js%20App%20to%20DigitalOcean%20with%20SSL/w_760,c_fit,co_rgb:232129,g_north_west,x_480,y_445,l_text:futura_48:%23devops%20%23nodejs%20%23ssl/lwj/blog-post-card)

## Options

This utility function accepts a config object. Available options are as follows:

| name               | required | description                                                          |
| ------------------ | -------- | -------------------------------------------------------------------- |
| title              | true     | (string) title text to be placed on the card                         |
| tagline            |          | (string) tagline text to be placed on the card                       |
| cloudName          | true     | (string) your Cloudinary cloud name (i.e. your username)             |
| imagePublicID      | true     | (string) the public ID of your social image template                 |
| cloudinaryUrlBase  |          | (string, default `https://res.cloudinary.com`) Cloudinary asset URL  |
| titleFont          |          | (string, default `arial`) font to use for rendering title            |
| titleExtraConfig   |          | (string) optional additional text overlay config                     |
| taglineExtraConfig |          | (string) optional additional text overlay config                     |
| taglineFont        |          | (string, default `arial`) font to use for rendering tagline          |
| imageWidth         |          | (number, default `1280`) SEO image width (defaults to Twitter ratio) |
| imageHeight        |          | (number, default `669`) SEO image height (defaults to Twitter ratio) |
| textAreaWidth      |          | (number, default `760`) width of title and tagline text areas        |
| textLeftOffset     |          | (number, default `480`) distance from left edge to start text boxes  |
| titleGravity       |          | (string, default `south_west`) location the title is anchored from   |
| taglineGravity     |          | (string, default `north_west`) location the tagline is anchored from |
| titleLeftOffset    |          | (number, `null`) distance from left edge to start text boxes  |
| taglineLeftOffset  |          | (number, default `null`) distance from left edge to start text boxes |
| titleBottomOffset  |          | (number, default `254`) distance from bottom to start title text     |
| taglineTopOffset   |          | (number, default `445`) distance from top to start tagline text      |
| textColor          |          | (string, default `000000`) hex value for text color                  |
| titleColor         |          | (string) hex value specific for title color. If this is not set, the color will be the one set to `textColor`   |
| taglineColor       |          | (string) hex value specific for tagline color. If this is not set, the color will be the one set to `textColor` |
| titleFontSize      |          | (number, default `64`) font size to use for the title                |
| taglineFontSize    |          | (number, default `48`) font size to use for the tagline              |
| version            |          | (string) optional version string for caching                         |

### Setting config options

```js
const socialImage = getShareImage({
  title: 'My Post Title',
  tagline: 'A tagline for the post',
  cloudName: 'myusername',
  imagePublicID: 'my-template-image.jpg',
  titleExtraConfig: '_bold', // optional - set title font weight to bold
  textColor: '663399', // optional — set the color to purple
});
```

## Who is using this?

- [Echobind](https://echobind.com/) with their [blog image generator](https://github.com/echobind/blog-image-generator)
- [@jsjoeio](https://github.com/jsjoeio) on his [personal website](https://github.com/jsjoeio/joeprevite.com)
- [Horacio Herrera](https://horacioh.com)
- [@chris_berry](https://twitter.com/chris_berry) on his [blog](https://chrisberry.io)
- [@codebender828](https://twitter.com/codebender828) on his [blog](https://jbakebwa.dev)
- [@ryan_c_harris](https://twitter.com/ryan_c_harris) on his [blog](https://ryanharris.dev)
