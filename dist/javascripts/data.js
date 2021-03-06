"use strict";

// 商品详情list字符串数据
var list = [{
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280128.jpg?t=1593490248",
  money: "¥329.00",
  bigword: "小金条系列车载香氛 | 来我的车里，吸一口仙气",
  smallword: " 来我的车里，吸一口仙气",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1346.jpg",
  title: "DAILY LAB",
  count: "607"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280147.jpg?t=1593756787",
  money: "¥219.00",
  bigword: "干湿两用气垫气囊梳子 | 磨砂梳柄 顺发造型",
  smallword: "橡胶气囊 舒适按摩 磨砂梳柄 顺发造型",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1346.jpg",
  title: "KENT肯特",
  count: "600"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280112.jpg?t=1592967358",
  money: "¥1348.00",
  bigword: "桌面即热式饮水机S803 | 三秒即热，现烧现喝",
  smallword: "3秒速热|8段水温|3种水源|安全童锁，更小更强大",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1620.jpg",
  title: "北鼎",
  count: "605"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280105.jpg?t=1592802270",
  money: "¥55.00",
  bigword: "蜂蜜牛奶手工皂 | 深入滋养，肌肤细腻嫩滑",
  smallword: "牛奶和蜂蜜让肌肤更紧致，滋养肌肤",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1882.jpg",
  title: "施丹兰",
  count: "594"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280110.jpg?t=1592966537",
  money: "¥189.00",
  bigword: "紫光筷子筒 | 紫光智护，干爽防潮更健康",
  smallword: " 2颗紫光灯照射，自动模式下合仓即工作，开仓即停止...",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1884.jpg",
  title: "DGQ",
  count: "608"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280089.jpg?t=1592295716",
  money: "¥752.00",
  bigword: "英国老牌城市系列剑桥包 | 源自英伦 从经典到潮流",
  smallword: "精选细腻纹理牛皮，工整缝线，优质配件",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1878.jpg",
  title: "Zatchels",
  count: "601"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280078.jpg?t=1592288912",
  money: "¥599.00",
  bigword: "梵高系列20英寸拉杆箱 | 梵高名画复原，旅行的艺术",
  smallword: "全新设计书籍形状三层PC箱体，铝镁合金拉杆",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/395.jpg",
  title: "WAAGE",
  count: "596"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280059.jpg?t=1591326084",
  money: "¥158.00",
  bigword: "柠檬味体能充沛泡腾*4 | 及时一片 速速精神",
  smallword: "提神醒脑，集中精力，提升肌肉心肺机能",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1873.jpg",
  title: "WELLEXIR",
  count: "599"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280064.jpg?t=1591345770",
  money: "¥299.00",
  bigword: "乐穿梭茶具 | 茶具+茶叶精美端午礼盒",
  smallword: "一体化设计，化繁为简。",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/529.jpg",
  title: "哲品",
  count: "602"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280062.jpg?t=1591344104",
  money: "¥1550.00",
  bigword: "动态雕塑平衡装置 | 大胆的基色，漂浮杆",
  smallword: "西班牙Volta Mobile动态雕塑平衡装置动态雕塑",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1874.jpg",
  title: "Volta",
  count: "601"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280054.jpg?t=1591169600",
  money: "¥179.00",
  bigword: "茶水分离泡茶杯 | 泡出传统中式茶味",
  smallword: "浓淡两相宜， 泡出传统中式茶味，养生花茶随手一杯。...",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1620.jpg",
  title: "北鼎",
  count: "605"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/280/280056.jpg?t=1591239095",
  money: "¥260.00",
  bigword: "香梅 昂 吟酿清酒 | 入口清爽，回甘无穷",
  smallword: "巧妙地激发料理的鲜甜，更凸显食材的本味，独饮亦佳...",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1542.jpg",
  title: "米嗅",
  count: "600"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/279/279982.jpg?t=1590113833",
  money: "¥220.00",
  bigword: "室内香氛喷雾150ml | 转瞬拥有天然的清新宜人",
  smallword: "采颉大自然芬芳，富足心灵与精神。100% 天然精油调制而成...",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1831.jpg",
  title: "100 BON",
  count: "599"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/279/279987.jpg?t=1590377253",
  money: "¥299.00",
  bigword: "Moonii陶瓷月相灯 | 24小时制，由月知时",
  smallword: " 触摸感应开关4000mAH锂电池2种职能模式",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1860.jpg",
  title: "小鸣",
  count: "621"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/279/279988.jpg?t=1590378810",
  money: "¥239.00",
  bigword: "小风扇落地电扇 | 四档风速调节，低噪音运行",
  smallword: "90°手动上下风向，LED实时电量提示，15小时超长续航...",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1857.jpg",
  title: "SOLEUSAIR",
  count: "600"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/279/279941.jpg?t=1589787226",
  money: "¥999.00",
  bigword: "CLIMA智能控温被 | 透气排湿，被窝不躁不闷",
  smallword: "身体热了吸收多余热量，冷了释放保存起来的热量。...",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/825_1541562754.jpg",
  title: "DOWNLAND",
  count: "601"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/279/279974.jpg",
  money: "¥349.00",
  bigword: "非洲手鼓-圆 | 带动孩子音乐细胞",
  smallword: "以手鼓带动孩子的音乐细胞，设计灵感源自Cojon手鼓盒...",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1851_1589871381.jpg",
  title: "PlanToys",
  count: "601"
}, {
  bigsrc: "https://imgs-qn.iliangcang.com/ware/goods/big/2/279/279883.jpg?t=1588752232",
  money: "¥268.00",
  bigword: "深海四十噚 神奇修护精华液 | 抗糖化，修复老化细胞",
  smallword: "修复皮肤代谢、受损细胞、角质屏障、细纹松弛，使皮肤紧致透亮...",
  smallsrc: "https://imgs-qn.iliangcang.com/ware/brand/1792.jpg",
  title: "unichi",
  count: "600"
}];