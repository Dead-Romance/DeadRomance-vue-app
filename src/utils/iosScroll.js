const iosScroll = (element) => {
    // 检测ios
    let isIos = (el) => {
        const ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判断是否为ios
        if (ios) {
            handleFiexdScroll(el)
        }
    }

    //   处理ios有fiexd上下滑不动问题
    const handleFiexdScroll = (el) => {
        el.addEventListener("scroll", function (e) {
            // 顶部距离
            let sTop = e.target.scrollTop
            // 窗口高度
            let cHieght = e.target.clientHeight
            // 滚动高度
            let sHeight = e.target.scrollHeight
            // 顶部触发
            if (e.target.scrollTop <= 1.5) {
                e.target.scrollTop = 1.5;
            }
            // 底部触发
            if (sTop + cHieght == sHeight) {
                e.target.scrollTop = sTop - 1.5;
            }
        });
    }


    isIos(element)
}



export default iosScroll
