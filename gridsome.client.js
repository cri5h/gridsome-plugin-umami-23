export default function (Vue, options, context) {
    if (!options.dataWebsiteId) {
        console.error('Please supply dataWebsiteId in options for gridsome-plugin-umami.')
        return;
    }
    if (!options.srcUrl) {
        console.error('Please supply srcUrl in options for gridsome-plugin-umami.')
        return;
    }

    const dataDomains = options.customDataDomains != null ? options.customDataDomains : ''

    context.head.script.push({
        src: options.srcUrl + '/umami.js',
        async: true,
        defer: true,
        'data-website-id': options.dataWebsiteId,
        'data-domains': dataDomains,
    })
}
