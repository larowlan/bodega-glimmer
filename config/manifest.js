/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Shop 201",
    short_name: "Shop 201",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    orientation: "portrait",
    icons: [
        {
            src: "/assets/images/icons/apple-touch-icon-60x60.png",
            sizes: "60x60",
            type: "image/png"
        },
        {
            src: "/assets/images/icons/apple-touch-icon-76x76.png",
            sizes: "76x76",
            type: "image/png"
        },
        {
            src: "/assets/images/icons/apple-touch-icon-120x120.png",
            sizes: "120x120",
            type: "image/png"
        },
        {
            src: "/assets/images/icons/apple-touch-icon-152x152.png",
            sizes: "152x152",
            type: "image/png"
        },
        {
            src: "/assets/images/icons/apple-touch-icon-180x180.png",
            sizes: "180x180",
            type: "image/png"
        },
        {
            src: "/assets/images/icons/android-chrome-192x192.jpg",
            sizes: "192x192",
            type: "image/jpeg"
        },
        {
            src: "/assets/images/icons/android-chrome-512x512.jpg",
            sizes: "512x512",
            type: "image/jpeg"
        }
    ]
  };
}
