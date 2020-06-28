module.exports = {
        configureWebpack: {
            resolve: {
                alias: {
                    'assets': '@/assets',
                    'common': '@/common',
                    'components': '@/components',
                    'network': '@/network',
                    'views': '@/views'
                }
            },
        }
    }
    // const debug = process.env.NODE_ENV !== 'production'
    // module.exports = {
    //     configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    //         if (debug) { // 开发环境配置
    //             config.devtool = 'cheap-module-eval-source-map'
    //         } else { // 生产环境配置
    //         }
    //         Object.assign(config, { // 开发生产共同配置，配置别名
    //             resolve: {
    //                 alias: {
    //                     'assets': '@/assets',
    //                     'common': '@/common',
    //                     'components': '@/components',
    //                     'network': '@/network',
    //                     'views': '@/views'
    //                 }
    //             }
    //         })
    //     },
    // }