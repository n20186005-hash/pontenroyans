import openNextWorker from './.open-next/worker.js'

export * from './.open-next/worker.js'

const canonicalOrigin = 'https://www.pontenroyans.com'
const siteHosts = new Set(['pontenroyans.com', 'www.pontenroyans.com'])

export default {
  fetch(request, env, context) {
    const url = new URL(request.url)

    if (siteHosts.has(url.hostname) && url.origin !== canonicalOrigin) {
      return Response.redirect(`${canonicalOrigin}${url.pathname}${url.search}`, 308)
    }

    return openNextWorker.fetch(request, env, context)
  },
}
