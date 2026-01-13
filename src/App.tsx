import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Zap } from 'lucide-react';

const marqueeText = " ";

const apps = [
     {
    id: 1,
    name: "新时代",
    description: "",
    iconUrl: "https://i.postimg.cc/t4SjcBzw/xin-shi-dai.jpg",
    url: "https://tfajn.hcjwj.com/app/register.php?site_id=1058&topId=26442&selfPlanId=1692",
  },
     {
    id: 2,
    name: "星耀国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/69327e9bd1e741a32bf19523.jpg",
    url: "https://gedxs.hcjwj.com/app/register.php?site_id=1057&topId=22066",
  },
       {
    id: 3,
    name: "胜天国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/6937c17f00233646958cd102.jpg",
    url: "https://tfajn.hcjwj.com/app/register.php?site_id=1058&topId=26442&selfPlanId=1692",
  },
    {
    id: 4,
    name: "赏金国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/688c1d0e58cb8da5c8f69d23.jpg",
    url: "https://xjvueb.hefaship.com/app/register.php?site_id=1010&topId=3094701",
  },
    {
    id: 5,
    name: "top1体育",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/686c718458cb8da5c895dcf1.jpg",
    url: "https://bakmry.gziasti.com/app/register.php?site_id=1051&topId=457911",
  },
       {
    id: 6,
    name: "东升国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68692e6758cb8da5c89176fe.jpg",
    url: "https://tz.wx-zxivoq2.com/app/register.php?site_id=2173&topId=1090266",
  },
  {
    id: 7,
    name: "NG体育",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68b3af8358cb8da5c8655b32.jpg",
    url: "https://nvjmce.hfjcl.com/app/register.php?site_id=1019&topId=10325130",
  },
   {
    id: 8,
    name: "旺财28",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68b3af7e58cb8da5c8655b00.png",
    url: "https://wlkyiy.paradisemall.net/app/register.php?site_id=1012&topId=3926701",
  },
  {
    id: 9,
    name: "超凡国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68692e6558cb8da5c89176f7.jpg",
    url: "https://pkajim.hfjcl.com/app/register.php?site_id=1032&topId=1056008",
  },
   {
    id: 10,
    name: "问鼎国际",
    description: "",
    iconUrl: "https://th.bing.com/th/id/R.3ff55b6d5ae91f929259d3f5fe8ee346?rik=KMsNN8o%2bXu04JQ&riu=http%3a%2f%2fimg.xz7.com%2fup%2fico%2f2024%2f0911%2f1726047132590171.png&ehk=u0ICtB1tC5UuQseS9l1DHMjKl1x8crEE3pggKWNac1Y%3d&risl=&pid=ImgRaw&r=0",
    url: "https://onkrcy.hefaship.com/app/register.php?site_id=1020&topId=21543657",
  },
    {
    id: 11,
    name: "非凡娱乐",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fd.jpg",
    url: "https://wcwx.paradisemall.net/app/register.php?site_id=1050&topId=880722&selfPlanId=855049",
  },
 {
    id: 12,
    name: "国际人",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68a570b358cb8da5c83d12f7.jpg",
    url: "https://tz.wx-ulslyd12.com/app/register.php?site_id=2304&topId=1112856",
  },
   {
    id: 13,
    name: "亿万28",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68a570b358cb8da5c83d12f9.jpg",
    url: "https://xjvueb.hefaship.com/app/register.php?site_id=1017&topId=7061046",
  },
  {
    id: 14,
    name: "巅峰国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176f8.jpg",
    url: "https://gfvgx.jgqvji.com/app/register.php?site_id=1030&topId=1744632",
  },
  {
    id: 15,
    name: "征途国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176fc.jpg",
    url: "https://pkajim.hfjcl.com/app/register.php?site_id=1031&topId=1890399",
  },
  {
    id: 16,
    name: "壹号娱乐",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/688c1d0e58cb8da5c8f69d21.webp",
    url: "https://gfvgx.jgqvji.com/app/register.php?site_id=800&pt=20784FBB-9EDA-E1C7-A955-C82CA771D0F3",
  },
       {
    id: 17,
    name: "保时捷国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68dbfe46c5157e1a884b253c.jpg",
    url: "https://bsj.iypcst.com/app/register.php?site_id=134523275&topId=82386",
  },
  {
    id: 18,
    name: "多多28",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/686f644658cb8da5c899de0b.png",
    url: "https://wlkyiy.paradisemall.net/app/register.php?site_id=1021&topId=5519693",
  },
   {
    id: 19,
    name: "大满贯",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/6911f7f73203f7be00ed9d46.jpg",
    url: "https://tz.wx-gujdtq3.com/app/register.php?site_id=2228&topId=1661558",
  },
      {
    id: 20,
    name: "C7娱乐",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68a570b358cb8da5c83d12f5.jpg",
    url: "https://103.39.18.211:7788/#/link?allwin=0RcGUSI3XYLQ0lhXzzQuiw%3D%3D",
  },    {
    id: 21,
    name: "豪门国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68692e6558cb8da5c89176f6.webp",
    url: "https://nvjmce.hfjcl.com/app/register.php?site_id=1008&topId=2610410",
  },    {
    id: 22,
    name: "28圈",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/68692e6658cb8da5c89176f9.jpg",
    url: "https://156.234.70.2:61106/#/link?allwin=9437468",
  },    {
    id: 23,
    name: "NG28",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/689dd5ec58cb8da5c8251893.jpg",
    url: "https://38.181.23.18:60004/#/link?allwin=22198286",
  },
     {
    id: 24,
    name: "君临国际",
    description: "",
    iconUrl: "https://pic1.imgdb.cn/item/695248a74b4fb88febf26626.jpg",
    url: "https://tfajn.hcjwj.com/app/register.php?site_id=1058&topId=26442&selfPlanId=1692",
  },
];

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredApp, setHoveredApp] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAppClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent)`
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10">
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 overflow-hidden shadow-2xl border-b-4 border-yellow-400">
            <div className="flex items-center py-3 px-4">
              <Sparkles className="text-yellow-300 animate-pulse mr-3" size={24} />
              <div className="flex-1 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  <span className="text-white text-xl font-bold tracking-wider drop-shadow-lg">
                    {marqueeText.repeat(6)}
                  </span>
                </div>
              </div>
              <Sparkles className="text-yellow-300 animate-pulse ml-3" size={24} />
            </div>
          </div>
        </div>

        <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              </div>

              <div className="relative">
                <div className="inline-flex items-center justify-center mb-6">
                  <Star className="text-yellow-400 animate-spin" size={32} style={{ animationDuration: '3s' }} />
                  <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 mx-4 drop-shadow-2xl">
                    强烈推荐 精品平台
                  
                    
                  </h1>
                  <Star className="text-yellow-400 animate-spin" size={32} style={{ animationDuration: '3s' }} />
                </div>

                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                  <Zap className="text-yellow-400 animate-bounce" size={28} />
                  <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {apps.map((app, index) => (
                  <div
                    key={app.id}
                    onClick={() => handleAppClick(app.url)}
                    onMouseEnter={() => setHoveredApp(app.id)}
                    onMouseLeave={() => setHoveredApp(null)}
                    className="group relative cursor-pointer"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-cyan-500/50">
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full">GO</div>
                      </div>

                      <div className="relative mb-3">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl overflow-hidden border-2 border-slate-600 group-hover:border-cyan-400 transition-colors duration-300 shadow-lg">
                          <img
                            src={app.iconUrl}
                            alt={app.name}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {hoveredApp === app.id && (
                          <div className="absolute -inset-2 border-2 border-cyan-400 rounded-xl animate-ping"></div>
                        )}
                      </div>

                      <h3 className="text-white font-bold text-sm sm:text-base mb-1 text-center group-hover:text-cyan-300 transition-colors duration-300">
                        {app.name}
                      </h3>

                      <div className="flex items-center justify-center gap-1">
                        <div className="h-px w-6 bg-gradient-to-r from-transparent to-blue-500"></div>
                        <p className="text-cyan-400 text-xs font-medium">
                          {app.description}
                        </p>
                        <div className="h-px w-6 bg-gradient-to-l from-transparent to-blue-500"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 via-teal-500 via-yellow-500 to-orange-500"></div>
      </div>
    </div>
  );
}

export default App;
