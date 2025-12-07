import React from 'react';

const marqueeText = "长期招商，年入百万。添加旺旺客服：391120 ";

const apps = [
   { 
    id: 1, 
    name: "非凡娱乐", 
    description: "新台大水", 
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fd.jpg",
    url: "https://wcwx.paradisemall.net/app/register.php?site_id=1050&topId=880722&selfPlanId=855049",
  },
    { 
    id: 2, 
    name: "top1体育", 
    description: "新台大水", 
    iconUrl: "https://pic1.imgdb.cn/item/686c718458cb8da5c895dcf1.jpg",
    url: "https://bakmry.gziasti.com/app/register.php?site_id=1051&topId=457911",
  },
     { 
    id: 3, 
    name: "保时捷国际", 
    description: "新台大水", 
    iconUrl: "https://pic1.imgdb.cn/item/68dbfe46c5157e1a884b253c.jpg",
    url: "https://bsj.iypcst.com/app/register.php?site_id=134523275&topId=82386",
  },
       { 
    id: 4, 
    name: "东升国际", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/68692e6758cb8da5c89176fe.jpg",
    url: "https://tz.wx-zxivoq2.com/app/register.php?site_id=2173&topId=1090266",
  },
  { 
    id: 5, 
    name: "NG体育", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/68b3af8358cb8da5c8655b32.jpg",
    url: "https://nvjmce.hfjcl.com/app/register.php?site_id=1019&topId=10325130",
  },
   { 
    id: 6, 
    name: "旺财28", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/68b3af7e58cb8da5c8655b00.png",
    url: "https://wlkyiy.paradisemall.net/app/register.php?site_id=1012&topId=3926701",
  },
  { 
    id: 7, 
    name: "超凡国际", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/68692e6558cb8da5c89176f7.jpg",
    url: "https://pkajim.hfjcl.com/app/register.php?site_id=1032&topId=1056008",
  },
   { 
    id: 8, 
    name: "赏金国际", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/688c1d0e58cb8da5c8f69d23.jpg",
    url: "https://xjvueb.hefaship.com/app/register.php?site_id=1010&topId=3094701",
  },
   { 
    id: 9, 
    name: "问鼎国际", 
    description: "十年老台", 
    iconUrl: "https://th.bing.com/th/id/R.3ff55b6d5ae91f929259d3f5fe8ee346?rik=KMsNN8o%2bXu04JQ&riu=http%3a%2f%2fimg.xz7.com%2fup%2fico%2f2024%2f0911%2f1726047132590171.png&ehk=u0ICtB1tC5UuQseS9l1DHMjKl1x8crEE3pggKWNac1Y%3d&risl=&pid=ImgRaw&r=0",
    url: "https://onkrcy.hefaship.com/app/register.php?site_id=1020&topId=21543657",
  },
 { 
    id: 10, 
    name: "国际人", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/68a570b358cb8da5c83d12f7.jpg",
    url: "https://tz.wx-ulslyd12.com/app/register.php?site_id=2304&topId=1112856",
  },
   { 
    id: 11, 
    name: "亿万28", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/68a570b358cb8da5c83d12f9.jpg",
    url: "https://xjvueb.hefaship.com/app/register.php?site_id=1017&topId=7061046",
  },
  { 
    id: 12, 
    name: "巅峰国际", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176f8.jpg",
    url: "https://gfvgx.jgqvji.com/app/register.php?site_id=1030&topId=1744632",
  },
  { 
    id: 13, 
    name: "征途国际", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fc.jpg",
    url: "https://pkajim.hfjcl.com/app/register.php?site_id=1031&topId=1890399",
  },
  { 
    id: 14, 
    name: "壹号娱乐", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/688c1d0e58cb8da5c8f69d21.webp",
    url: "https://gfvgx.jgqvji.com/app/register.php?site_id=800&pt=20784FBB-9EDA-E1C7-A955-C82CA771D0F3",
  },
  { 
    id: 15, 
    name: "多多28", 
    description: "十年老台", 
    iconUrl: "https://pic1.imgdb.cn/item/686f644658cb8da5c899de0b.png",
    url: "https://wlkyiy.paradisemall.net/app/register.php?site_id=1021&topId=5519693",
  },
   { 
    id: 16, 
    name: "大满贯", 
    description: "首存100+100", 
    iconUrl: "https://pic1.imgdb.cn/item/6911f7f73203f7be00ed9d46.jpg",
    url: "https://tz.wx-gujdtq3.com/app/register.php?site_id=2228&topId=1661558",
  },
   {
    id: 17,
    name: "C7娱乐 ",
    description: "首存100+100",
    iconUrl: "https://pic1.imgdb.cn/item/69355ead3cf558499f245c9e.jpg",
    url: "https://103.39.18.211:7788/#/link?allwin=0RcGUSI3XYLQ0lhXzzQuiw%3D%3D",
  },
    {
    id: 19,
    name: "NG28",
    description: "首存100+100",
    iconUrl: "https://pic1.imgdb.cn/item/689dd5ec58cb8da5c8251893.jpg",
    url: "https://38.181.23.18:60004/#/link?allwin=22198286",
  },
];

function App() {
  const handleAppClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 顶部跑马灯区域 */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-4 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative">
          <div className="whitespace-nowrap animate-marquee">
            <span className="text-white text-lg font-medium tracking-wide">
              {marqueeText.repeat(5)}
            </span>
          </div>
        </div>
      </div>

      {/* 中部文字描述区域 */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="https://pic1.imgdb.cn/item/68c12fa558cb8da5c896e94a.jpg" 
            alt="应用展示图片" 
            className="w-full max-w-2xl h-auto mx-auto rounded-lg shadow-lg object-cover mb-8"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* 底部APP展示区域 */}
      <div className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {apps.map((app) => (
              <div
                key={app.id}
                onClick={() => handleAppClick(app.url)}
                className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-2 sm:p-3 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 hover:shadow-2xl border border-white border-opacity-20"
              >
                <div className="rounded-xl mx-auto mb-1.5 w-10 h-10 sm:w-12 sm:h-12 overflow-hidden transform transition-transform group-hover:rotate-6 shadow-lg">
                  <img 
                    src={app.iconUrl} 
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1 group-hover:text-blue-300 transition-colors leading-tight">
                  {app.name}
                </h3>
                <p className="text-gray-400 text-xs leading-tight px-0.5">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 横向广告区域 */}
      <div className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <a 
            href="https://wwtalk.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 p-1">
              <img 
                src="https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fa.png" 
                alt="旺旺商聊" 
                className="w-full h-20 sm:h-24 md:h-28 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md transition-opacity duration-300 group-hover:bg-opacity-10"></div>
            </div>
          </a>
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </div>
  );
}

export default App;