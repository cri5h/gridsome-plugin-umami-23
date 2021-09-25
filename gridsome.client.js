export default function (Vue, options, context) {
    if (!options.dataWebsiteId) {
        console.error('Please supply dataWebsiteId in options for gridsome-plugin-umami.')
        return;
    }
    if (!options.srcUrl) {
        console.error('Please supply srcUrl in options for gridsome-plugin-umami.')
        return;
    }

    const dataHostUrl = options.dataHostUrl != null ? options.dataHostUrl : ''
    const dataAutoTrack = options.dataAutoTrack != null ? options.dataAutoTrack : true
    const dataDoNotTrack = options.dataDoNotTrack != null ? options.dataDoNotTrack : true  // unlike original functionality, default to true
    const dataCache = options.dataCache != null ? options.dataCache : false
    const dataDomains = options.dataDomains != null ? options.dataDomains : ''

    context.head.script.push({
        src: options.srcUrl + '/umami.js',
        async: true,
        defer: true,
        'data-website-id': options.dataWebsiteId,
        'data-host-url': dataHostUrl,
        'data-auto-track': dataAutoTrack,
        'data-do-not-track': dataDoNotTrack,
        'data-cache': dataCache,
        'data-domains': dataDomains
    })
}
