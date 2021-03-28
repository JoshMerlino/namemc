# namemc
[![Node.js CI](https://github.com/JoshMerlino/namemc/actions/workflows/node.js.yml/badge.svg)](https://github.com/JoshMerlino/namemc/actions/workflows/node.js.yml)
[![njsscan sarif](https://github.com/JoshMerlino/namemc/actions/workflows/njsscan-analysis.yml/badge.svg)](https://github.com/JoshMerlino/namemc/actions/workflows/njsscan-analysis.yml)

![](https://img.shields.io/npm/dt/namemc)
![](https://img.shields.io/github/issues/JoshMerlino/namemc)
![](https://img.shields.io/github/issues-closed/JoshMerlino/namemc)
![](https://img.shields.io/github/issues-pr/JoshMerlino/namemc)
![](https://img.shields.io/github/issues-pr-closed/JoshMerlino/namemc)

The unofficial Node JS package for looking up Minecraft users on [Name MC](https://namemc.com/).

ℹ *Name MC has updated their HTML structure. All versions below `v1.6.5` are now broken*

⚠ *This package is not affiliated with Name MC or Minecraft in any way*

---

### Documentation:
* [TypeScript](https://github.com/JoshMerlino/namemc/blob/master/docs/typescript.md)
* [JavaScript](https://github.com/JoshMerlino/namemc/blob/master/docs/javascript.md)
* [Common JS](https://github.com/JoshMerlino/namemc/blob/master/docs/common-js.md)

## Caveats
1. This package is powered by [Web Scraping](https://en.wikipedia.org/wiki/Web_scraping), meaning that if Name MC were to suddenly change the HTML layout on their page it would cause the package to break until I were update it.
2. Name MC will rate-limit you after a certian amount of requests. In my opinion, they're very generous about this, after spamming an obscene amount of requests, the most I got limited for was 5 seconds. The package will reject the promise if you are being rate limited.
3. On top of point #2, this package does not cache the response from Name MC. If you are getting rate limited over and over, you might want to implement some cache system that prevents the same name from being resolved more than once per hour and using a cached result.

## API
If you need to use this in a browser and arent using a bundler, you can send API requests to my server to resolve names.
Endpoints and their info can be found on the [wiki](https://github.com/JoshMerlino/namemc/wiki).
