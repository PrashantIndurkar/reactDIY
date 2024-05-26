## Fancy Animated Switch Component with sounds effects

we need to configure nextJS to play audio files

### this are the steps to configure nextJS to play audio files in the next.config.mjs file

```js
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/sounds",
          outputPath: "static/sounds",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
```

we will get typescript error when we import sound files like this, so we need to add declarations.d.ts file with this config

```js

// declarations.d.ts
declare module "*.wav" {
  const src: string;
  export default src;
}
```
