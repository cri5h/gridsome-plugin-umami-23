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

### Required fields

#### srcUrl

- Type: `String`
- Default: None, field is required

Domain/website that was spun up to host your umami dashboard. e.g. your-umami-app.com

#### dataWebsiteId

- Type: `String`
- Default: None, field is required

dataWebsiteId can be found in your Umami dashboard using the instructions [here](https://umami.is/docs/collect-data).

### Optional fields - configuration docs [here](https://umami.is/docs/tracker-config)

#### dataHostUrl (optional)

- Type: `String`
- Default: Empty

Used to override where umami sends your data so that it can be sent to another location.

#### dataAutoTrack (optional)

- Type: `Boolean`
- Default: True

Enables umami's auto tracking feature that tracks all all pageviews and events automatically.

#### dataDoNotTrack (optional)

- Type: `Boolean`
- Default: True

Unlike the original functionality, this defaults to true to respect the visitor's Do Not Track setting.

#### dataDomains (optional)

- Type: `String`
- Default: Empty

If you want the tracker to only run on specific domains, you can add them here. This is a comma delimited list of domain names.
