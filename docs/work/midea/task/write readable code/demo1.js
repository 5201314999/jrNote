// disabled 表示上下架
<el-input size="small" :disabled="disabled == 1 || disabled == 3" v-model="form.strChannelLink" placeholder="**"></el-input>


// 流水账代码

// 27 行
if (data['productMemberLimit'] & 1 && !data['productScoreV1'] && data['productLevelLimit'] == 1) {
    return 'productScoreV1'
}
if (data['productMemberLimit'] & 1 && !data['productScoreV2'] && data['productLevelLimit'] <= 2) {
    return 'productScoreV2'
}
//如果v1<v
if (
    data['productMemberLimit'] & 1 &&
    parseInt(data['productScoreV1']) < parseInt(data['productScoreV2']) &&
    data['productLevelLimit'] <= 2
) {
    alert('积分值按等级 (低-高) 对应 (高-低) 设置哦')
    return 'productScoreV1'
}
if (data['productMemberLimit'] & 1 && !data['productScoreV3']) {
    return 'productScoreV3'
}
// 如果v2<v3 或者v1<v3
if (
    data['productMemberLimit'] & 1 &&
    (parseInt(data['productScoreV2']) < parseInt(data['productScoreV3']) ||
        (data['productMemberLimit'] & 1 && parseInt(data['productScoreV1']) < parseInt(data['productScoreV3'])))
) {
    alert('积分值按等级 (低-高) 对应 (高-低) 设置哦')
    return 'productScoreV2'
}


// 18- 5 = 13 行

const { productLevelLimit: levelLimit } = data
const tempArr = []
// 判断可兑换等级组，各等级积分是否为空
for (let i = levelLimit; i <= 5; i++) {
    tempArr.push(Number(data[`productScoreV${i}`]))
    if (!data[`productScoreV${i}`]) {
        return `productScoreV${i}`
    }
}
// 判断积分是否是递减的，见content值
if (tempArr.some((e, i, arr) => i < arr.length - 1 && e <= arr[i + 1])) {
    $.mpopup({
        type: 'tips',
        content: '积分值按等级 (低-高) 对应 (高-低) 设置哦',
        icoType: 'error',
        autoClose: 1000,
    }).show()
    return 'productScore'
}



// productMemberLimit: 后端使用2进制 ob01：等级会员 ob10：PRO会员 ,ob01 | ob10 =3 等级和PRO会员都勾选上了
if (data['productMemberLimit'] === 3) {
    if (!data['productScorePro']) {
        return 'productScorePro'
    }
    ...
}


if (data[key] & 0b001) {
    $($('input[name="productMemberLimit"]')[0]).prop('checked', true)
    $('.j-productMemberLimit1').show()
    $('.j-productLevelLimit').show()
} else {
    $($('input[name="productMemberLimit"]')[0]).prop('checked', false)
    $('.j-productMemberLimit1').hide()
    $('.j-productLevelLimit').hide()
}
if (data[key] & 0b010) {
    $($('input[name="productMemberLimit"]')[1]).prop('checked', true)
    $('.j-productMemberLimit2').show()
} else {
    $($('input[name="productMemberLimit"]')[1]).prop('checked', false)
    $('.j-productMemberLimit2').hide()
}


      // 异形屏（主要是iphoneX 以上系列）
      if (info.safeArea && info.screenHeight - info.safeArea.bottom > 0) {
        this.setData({
          height: '72px',
        })
      }




/**
 * ClassName: KeyboardVoiceActivity.java
 * Company: syt
 * @author lanhm
 * @date 2015-6-19上午11:15:43
 * @version 1.0
 * Description:键盘音效
 * 
 * ......................我佛慈悲......................
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \\|     |// '.
 *                 / \\|||  :  |||// \
 *                / _||||| -卍-|||||- \
 *               |   | \\\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *                       
 *..................佛祖开光 ,永无BUG...................
 * 
 */


 /**
 * 
 * htmlParser改造自: https://github.com/blowsie/Pure-JavaScript-HTML5-Parser
 * 
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 * 
 * github地址: https://github.com/icindy/wxParse
 * 
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */
// Regular Expressions for parsing tags and attributes
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,


// 如果foo 等于 bar
if (foo === bar) {

}

// 随意注释代码
window.onresize = function () {
    // initAmination()
    initPageData()
}

// 不更新注释
const levelScoreFeildsArr = [
    levelScore1,    // 普通
    scoreLevel2,    // 黄金
    scoreLevel3,    // 钻石
    scoreLevel4,    
    scoreLevel5, 
]


const show = parent.scrollspy || isActive;
const shouldRender = this.inited || parent.scrollspy || !parent.lazyRender;
const Content = shouldRender ? slotContent : h();


return (
  <div vShow={show} role="tabpanel" class={bem('pane')}>
    {Content}
  </div>
);
},
 