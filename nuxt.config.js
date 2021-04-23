export default {
    target: 'static',
    modules: [
        '@nuxt/content'
    ],
    css: ['@/assets/main.scss'],
    head: {
        link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
        titleTemplate: 'RR',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},

            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            {hid: 'description', name: 'description', content: 'Meta description'}
        ],
        script: [{src: '/heap.js'}]
    }
}
