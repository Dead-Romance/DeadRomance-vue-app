class vScroll {
    constructor() {
        

        // ios 开启乱拖动
        this.isIosStopScroll = this.isIosStopScroll
        // 禁止一个以上手指手势操作
        this.handleStopGesture = this.handleStopGesture

        this.stopScroll = this.stopScroll
    }
    // ios 开启乱拖动
    isIosStopScroll(element) {
        const ios = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判断是否为ios
        if (ios) {
            let divEl = element; //这是你需要定义的容器，这个容器里滑动正常，出了这个容器，页面的橡皮筋效果就被禁用掉了
            this.iosTrouchFn(divEl);
        }
    }
    //解决ios橡皮筋问题
    iosTrouchFn(el) {
        console.log(el)
        //el需要滑动的元素
        el.addEventListener("touchmove", function (e) {
            e.isSCROLL = true;
        });
        document.body.addEventListener(
            "touchmove",
            function (e) {
                
                if (!e.isSCROLL) {
                    e.preventDefault(); //阻止默认事件(上下滑动)
                } 
            }, {
                passive: false
            }
        ); //passive防止阻止默认事件不生效
    }
    // 禁止一个以上手指手势操作
    // 处理双击放大操作
    handleStopGesture(element) {
        const _this = this
        element.addEventListener(
            "touchstart",
            function (event) {
                // 一个手指以上
                if (event.touches.length > 1) {
                    event.preventDefault();
                }
                // 处理双击放大操作
                stopRepeatClick(() => {
                    try {
                        // 手机无报错
                        event.preventDefault();
                    } catch (err) {
                        
                    }
                    
                })
            },
            false
        );
    }


}


/**
 * 
 * @param {lastTouchEnd : 全局记录值0}    
 * @param {callback : 禁止时做些什么.}  
 */
var lastTouchEnd = 0;

function stopRepeatClick(callback) {

    let now = Date.now();

    if (now - lastTouchEnd <= 300) {
        callback()
    }

    lastTouchEnd = now;

}

export default vScroll