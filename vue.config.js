const path = require('path')

function resolve(dir) {
    // console.log(__dirname)
    return path.join(__dirname, dir)
}

module.exports = {
    // 选项... 
    publicPath: process.env.NODE_ENV === 'production' ? './' : './', // 根路径
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
    lintOnSave: true, // 是否开启eslint保存检测, 有效值: true || false || 'error' 如果使用false 那么 vue单文件运行将无法工作 -  Error: No loader specified
    devServer: {
        open: true, //  自动打开浏览器
        host: '0.0.0.0', // 主机名, 真机测试: 0.0.0
        port: 3333, // 端口号
        https: false, 
        hotOnly: true, // 模块热更新
        proxy: 'http://locahost:8081/api/', // 跨域
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http//localhost:5000/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
    chainWebpack: (config) => {
        //命名 
        config.resolve.alias
            .set('SRC', resolve('src'))
            .set('ASSET', resolve('src/assets'))
            .set('VIEW', resolve('src/components'))
            .set('COMPONENT', resolve('src/components/common'))
            .set('UTIL', resolve('src/utils'))
            .set('API', resolve('src/api'));
        //打包文件带hash
        config.output.filename('[name].[hash].js').end();

    },
    css: {
        loaderOptions: {
            /**
             * 安装: yarn add postcss - pxtorem
             * px转换rem
             */
            postcss: { 
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 100, // 换算的基数
                        selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]
            }
        }
    },
}