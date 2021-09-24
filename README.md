# gridsome-plugin-umami

umami analytics plugin for Gridsome

## Installation

* `npm install gridsome-plugin-umami`
* `yarn add gridsome-plugin-umami`

## Usage

In `gridsome.config.js`:

```js
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-umami',
      options: {
        srcUrl: 'https://your-umami-app.com',
        dataWebsiteId: 'UMAMI_DATA_WEBSITE_ID'
      }
    }
  ]
}   
```

## Options

#### srcUrl

- Type: `String`
- Default: None, field is required

Domain/website that was spun up to host your umami dashboard. e.g. your-umami-app.com

#### dataWebsiteId

- Type: `String`
- Default: None, field is required

dataWebsiteId can be found in your Umami dashboard using the instructions [here](https://umami.is/docs/collect-data).

#### customDataDomains (optional)

- Type: `String`
- Default: Empty

If you want the tracker to only run on specific domains, you can add them here. This is a comma delimited list of domain names. More info [here](https://umami.is/docs/tracker-config)
