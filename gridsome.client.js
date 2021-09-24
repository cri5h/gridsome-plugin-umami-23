export default function (Vue, options, context) {
    if (!options.dataWebsiteId) {
        console.error('Please supply dataWebsiteId in options for gridsome-plugin-umami.')
        return;
    }
    if (!options.websiteSource) {
        console.error('Please supply websiteSource in options for gridsome-plugin-umami.')
        return;
    }

    var dataDomains;
    if (options.customDataDomains) {
        dataDomains = options.customDataDomains
    } else {
        dataDomains = ''
    }

    context.head.script.push({
        src: 'https://' + options.websiteSource + '/umami.js',
        async: true,
        defer: true,
        'data-website-id': options.dataWebsiteId,
        'data-domains': dataDomains,
    })
}
