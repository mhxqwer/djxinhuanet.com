$(function () {    
    function setBook(){      
        // var bookUrl = "https://xhwtc.wenming.news.cn/u/f/carousel.do"
        var bookUrl = "//xhbooks.news.cn/u/f/carousel.do"
		
		
        $.ajax({
            url: bookUrl,
            success: function(data){
                // console.log("data:", data.data);
                localStorage.setItem("xhBook", JSON.stringify(data.data));
				setData(data.data);
            },
            error:function(){
                // console.log("error")
                //null
                var getXhBook = localStorage.getItem("xhBook");
                //console.log("getXhBook:", getXhBook)
                if (getXhBook!==null){
                    getXhBook = JSON.parse(getXhBook);
					setData(getXhBook);					
                }else{
					var data = [{
						"id": 2,
						"name": "写作教练在你家",
						"info": "教孩子们激发自己写故事的潜能",
						"url": "https://item.jd.com/10033092334534.html",
						"picUrl": "https://img14.360buyimg.com/n1/jfs/t1/221947/15/2177/283566/618cc0c8E10c3f2f5/a451ae95f5b06f3b.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 3,
						"name": "注音详解古文观止",
						"info": "青少年文言文国学经典",
						"url": "https://item.jd.com/10024053506686.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/179249/13/6402/37989/60b0a66cE4f4c0707/a6f26478b74b51c0.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 4,
						"name": "卓有成效的管理者 55周年新译本",
						"info": "经典管理学有效实践管理学原理与实践企业战略管理书",
						"url": "https://item.jd.com/10024057728256.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/22051/6/16651/188549/628c5978E32fae84c/873fa03f688ea031.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 5,
						"name": "金融市场技术分析",
						"info": "期（现）货市场、股票市场、外汇市场、利率（债券）市场之道",
						"url": "https://item.jd.com/10036423646547.html",
						"picUrl": "https://img12.360buyimg.com/n1/jfs/t1/200849/18/6450/185293/613af2faE7c69a9e5/75f0ccd076fc737e.jpg",
						"sort": 2,
						"isDel": 0
					}, {
						"id": 6,
						"name": "学习技巧",
						"info": "每个人都不该低估自己的学习潜力，东尼·博赞先生为你开启你的大脑提供了可靠的方法。揭示了影响学习效率的精神、情感和身体等障碍因素。",
						"url": "https://item.jd.com/10062945460846.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/195044/13/28739/92249/634916b2E2ef12c4c/0d799d9a78aab0cd.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 7,
						"name": "疗愈的饮食与断食",
						"info": "实现生命逆袭的科学饮食指南",
						"url": "https://item.jd.com/10058521271107.html",
						"picUrl": "https://img12.360buyimg.com/n1/jfs/t1/124256/34/40990/104495/6513908bF722ac355/69ad3f0eb4ee5dfb.jpg",
						"sort": 3,
						"isDel": 0
					}, {
						"id": 8,
						"name": "结构化表达 如何汇报工作演讲与写作",
						"info": "迅速提升结构化表达的能力，轻松解决职场沟通中的各种难题。",
						"url": "https://item.jd.com/10050609531511.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/223431/33/10644/150985/6268e410E53dafc68/e54d207f1e5eaf5f.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 9,
						"name": "真原医21世纪完整的预防医学",
						"info": "让本书强大的医学成果和生命智慧，陪你彻底参透人体健康的核心奥秘。",
						"url": "https://item.jd.com/10030917531802.html",
						"picUrl": "https://img12.360buyimg.com/n1/jfs/t1/190293/14/4951/854629/60aca87cEf8fda4b2/7f0a96bac4e38bee.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 10,
						"name": "领导力的5个层级",
						"info": "从职场新手晋升到卓越领导，5个阶段领导力提升的解决方案",
						"url": "https://item.jd.com/10070543180758.html",
						"picUrl": "https://img13.360buyimg.com/n1/jfs/t1/8185/35/20943/48851/640af12aFae7aa044/51efbd9e459bd11f.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 11,
						"name": "管理的实践",
						"info": "畅销30年，成为管理专业的学生、立志成为管理者的年轻人和成熟的管理者打好管理学根基最重要的一本书。",
						"url": "https://item.jd.com/10024058931168.html",
						"picUrl": "https://img13.360buyimg.com/n1/jfs/t1/202382/35/6796/149187/6141bf61E143555f4/56793353f74b9e81.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 12,
						"name": "这不是你的错",
						"info": "在探索之旅中，找到自己的核心语言，与隐藏的创伤对话，解决当下的问题。",
						"url": "https://item.jd.com/10031252836615.html",
						"picUrl": "https://img10.360buyimg.com/n1/jfs/t1/188896/2/4994/63267/60acca27Edc6d2b52/671e2659cfea572f.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 13,
						"name": "三精管理 增订版",
						"info": "三精十二化，集管理和经营于一体，兼顾效率和效益，兼修内功和外功，让你看得懂、可实操、有成效。",
						"url": "https://item.jd.com/10049794478589.html",
						"picUrl": "https://img14.360buyimg.com/n1/jfs/t1/228883/2/5099/39914/65670195F07764d40/ecf6300f0555d6bb.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 14,
						"name": "陕西历史博物馆",
						"info": "陕西历史博物馆是我国改革开放后建成的第一座现代化1国1家1级博物馆。",
						"url": "https://item.jd.com/10059385995342.html",
						"picUrl": "https://img12.360buyimg.com/n1/jfs/t1/157552/14/29822/130020/630c884bEf14e7ba7/81099bc1d6d7a2d1.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 15,
						"name": "DK博物大百科",
						"info": "本书内容由享誉世界的博物学家编著，经闻名于世的美国史密森学会认证，是展现物种多样性的终级视觉盛宴。",
						"url": "https://item.jd.com/10040955501811.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/21162/20/19794/118939/6327c846Eff813539/c19f49cc679ccced.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 16,
						"name": "医界探案 感染病科的故事",
						"info": "本书将40个疑难复杂的临床病例写作曲折悬疑的案件，为读者总结和科普防治该类疾病的重点知识",
						"url": "https://item.jd.com/10063494788262.html",
						"picUrl": "https://img12.360buyimg.com/n1/jfs/t1/51401/22/18518/53276/63510335E7e3ed203/b027a39466992a1d.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 17,
						"name": "普通高中教科书语文读本必修上册夏日终曲",
						"info": "语文课程教材研究书籍",
						"url": "https://item.jd.com/10041397878466.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/220037/13/6184/176584/61a5f677Ec1e22a2e/86cae6dcfcc91e32.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 18,
						"name": "算法导论 原书第3版",
						"info": "本书将严谨性和全面性融为一体，深入讨论各类算法，并着力使这些算法的设计和分析能为各个层次的读者接受。",
						"url": "https://item.jd.com/10024051885298.html",
						"picUrl": "https://img13.360buyimg.com/n1/jfs/t1/186337/17/12328/471411/60e7f737E6aa18da7/6c7cfffff66a3992.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 19,
						"name": "被忽视的孩子",
						"info": "深度解读童年情感忽视的开创性作品",
						"url": "https://item.jd.com/10024062042117.html",
						"picUrl": "https://img12.360buyimg.com/n1/jfs/t1/183120/14/5866/265849/60acc21bEd6aa9082/7113fdb7d12b1e34.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 20,
						"name": "给孩子的人类文明史 全12册",
						"info": "一部用全球史观写给孩子的文明博览",
						"url": "https://item.jd.com/10076961578697.html",
						"picUrl": "https://img12.360buyimg.com/n1/jfs/t1/213127/7/33786/141562/64929c1aF5008b762/913d9196a76070f4.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 21,
						"name": "义务教育教科书同步阅读语文一年级下册 月亮船",
						"info": "义务教育教科书同步阅读",
						"url": "https://item.jd.com/10085458924901.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/186195/39/38307/67769/64facd47F01f55270/6715c5e96e5dbce0.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 22,
						"name": "组织的力量",
						"info": "本书所述观点、方法、工具以及案例均来自真实的企业管理场景，适合企业各级管理者用于提升管理认知，提高管理效能。",
						"url": "https://item.jd.com/10042688904308.html",
						"picUrl": "https://img13.360buyimg.com/n1/jfs/t1/205495/16/19625/155191/61c55b03Ee3ff1e45/4d3498a98b7e24b4.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 23,
						"name": "感受爱 在亲密关系中获得幸福的艺术",
						"info": "作者用她在脑科学领域的新发现和45年的心理治疗师经验告诉我们大脑如何表达爱，如何将爱转化成令人满意的关系，以及为什么我们需要这些经验来克服压力等。",
						"url": "https://item.jd.com/10024061304258.html",
						"picUrl": "https://img13.360buyimg.com/n1/jfs/t1/121778/23/17588/240857/5fa3dee9E03b92fdb/8df3731ebaee5302.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 24,
						"name": "注音全译论语",
						"info": "这是一本对儒家传统经典著作《论语》进行注音、译文、注释的译注作品。",
						"url": "https://item.jd.com/10024057414453.html",
						"picUrl": "https://img13.360buyimg.com/n1/jfs/t1/148926/30/24758/105658/620ddd1fE69031e4f/b0796b7684e59f61.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 25,
						"name": "定位就是聊个天",
						"info": "一本书教会你定位的理念和沟通的方法。",
						"url": "https://item.jd.com/10088798556875.html",
						"picUrl": "https://img10.360buyimg.com/n1/jfs/t1/238224/24/3222/41453/655b11bbF242e47f4/b346ad7e8a1541f9.jpg",
						"sort": 1,
						"isDel": 0
					}, {
						"id": 26,
						"name": "部级领导干部历史文化讲座20周年纪念版",
						"info": "以史为鉴+诗书礼乐+良法善治+酌水知源+问道思辨+文明激荡。",
						"url": "https://item.jd.com/10043640614782.html",
						"picUrl": "https://img12.360buyimg.com/n1/jfs/t1/132370/20/22047/363985/61e11364E7bb02190/74a42655dc722754.jpg",
						"sort": 0,
						"isDel": 0
					}, {
						"id": 27,
						"name": "义务教育教科书语文自读课本七年级下册 好一朵木槿花",
						"info": "义务教育教科书语文自读课本",
						"url": "https://item.jd.com/10041369811171.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/205985/38/16855/182731/61a59740E880553c6/154bbfcb8e31ab9d.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 28,
						"name": "了不起的故宫宝贝之神韵匠心",
						"info": "故宫博物院新推出的，基于美术鉴赏与工艺设计编写的故宫文物系列书。",
						"url": "https://item.jd.com/10075959297262.html",
						"picUrl": "https://img12.360buyimg.com/n1/jfs/t1/150596/15/33337/221777/646494a6Fd3c8d668/aaafb20ab746e220.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 29,
						"name": "母爱的羁绊",
						"info": "全书共分为14章，其中包括了情绪的重负、空白的记忆：妈妈和我、母性自恋面面观等内容。",
						"url": "https://item.jd.com/10024057990161.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/140078/18/13313/223753/5fa3cca5Ef55764bd/7993a50e00659a2e.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 30,
						"name": "漫步华尔街 原书第12版",
						"info": "本书旨在帮助投资者在动荡的金融市场中规划一条长期安全的投资之路。",
						"url": "https://item.jd.com/10076130437356.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/183689/26/33008/100524/6466f3adFb84c80a8/e6656034dd9c8514.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 31,
						"name": "14岁懂社会系列 全14册",
						"info": "多角度解决孩子的生活烦恼与人生困惑。",
						"url": "https://item.jd.com/10043579419279.html",
						"picUrl": "https://img14.360buyimg.com/n1/jfs/t1/184006/27/39432/82225/652f58d8Fceb52b5f/3d2cc7c03558960f.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 32,
						"name": "中国基因 妈妈的一碗汤",
						"info": "是和亲子共读的中华文化传承绘本",
						"url": "https://item.jd.com/10043220205621.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/54702/29/18918/379613/61d3ea7bE03e6277f/4a713552206d71c4.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 33,
						"name": "经营的本质 修订版",
						"info": "经营的本质即商业的逻辑，就是能够有效地把握顾客价值、合理成本、有效规模、人性盈利四大基本要素。",
						"url": "https://item.jd.com/10024056946199.html",
						"picUrl": "https://img14.360buyimg.com/n1/jfs/t1/198063/17/8513/66702/61419c2bE83f36ccd/bcdd5546542ef82f.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 34,
						"name": "义务教育教科书同步阅读语文一年级上册 小猫种鱼",
						"info": "义务教育教科书同步阅读",
						"url": "https://item.jd.com/10085458924900.html",
						"picUrl": "https://img10.360buyimg.com/n1/jfs/t1/110358/19/27413/100688/64facd3eF4ed1b900/a3762f9765b89a4b.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 35,
						"name": "跨越式成长 思维转换重塑你的工作和生活",
						"info": "作者走遍全球，进行跨学科研究，提出了重启人生的关键性工具。",
						"url": "https://item.jd.com/10024060046205.html",
						"picUrl": "https://img10.360buyimg.com/n1/jfs/t1/138820/38/13273/272419/5fa3d765Ef9d9ae5e/971b0a69c44392dc.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 36,
						"name": "呼吸为了疗愈",
						"info": "杨定一博士基于多年的研究，提出呼吸才是整合身心，让自己健康而强大的关键。",
						"url": "https://item.jd.com/10080452965838.html",
						"picUrl": "https://img13.360buyimg.com/n1/jfs/t1/160610/10/37759/93188/64ae206bF69cd54eb/f9f1ad60dae63327.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 37,
						"name": "普通高中教科书语文读本选择性必修上册 追寻逝去的时光",
						"info": "普通高中教科书语文读本选择性必修",
						"url": "https://item.jd.com/10041395189518.html",
						"picUrl": "https://img13.360buyimg.com/n1/jfs/t1/204223/33/17379/142020/61a5eeb8Eb59f09b0/44aa8bb341929330.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 38,
						"name": "给孩子的五顶学习帽",
						"info": "激发学习兴趣，告别低效勤奋，成为面向未来的优等生。",
						"url": "https://item.jd.com/10039399922625.html",
						"picUrl": "https://img10.360buyimg.com/n1/jfs/t1/174198/39/24566/256196/61c52752E46975ecd/fc81a75f47a60ba2.jpg",
						"sort": -1,
						"isDel": 0
					}, {
						"id": 39,
						"name": "商业模式新生代 经典重译版",
						"info": "关于商业模式创新的、实用的、启发性的工具书",
						"url": "https://item.jd.com/10024058937676.html",
						"picUrl": "https://img11.360buyimg.com/n1/jfs/t1/83284/18/18577/79502/6284a381Ee63eae6b/9eb4b3419c326a6e.jpg",
						"sort": -1,
						"isDel": 0
					}]
					setData(data);
				}
            }
        });
    }
    setBook(); 
	function setData(data){
		var tempNum = data.length;
		var bookHtml = "";
		$(data).each(function (i, item) {
			if(item.sort == -1){
				data[i].sort = tempNum;
				tempNum++;
			} 
		})
		data = data.sort(function(a,b){
			return (a.sort - b.sort)
		})			
		
		$(data).each(function (i, item) {
			if (i < 2) {
				bookHtml += '<li><a href="' + item.url + '" target="_blank"><div><img src="' + item.picUrl + '"></div><div class="book-tit">' + item.name + '</div></li>';
			}
		})
		$(".book ul").html(bookHtml)
		var bookListHtml = "";
		$(data).each(function (i, item) {
			if (i < 6) {
				bookListHtml += '<li><div class="pic"><a href="' + item.url + '" target="_blank"><img src="' + item.picUrl + '" alt=""></a></div><div class="title"><a href="' + item.url + '" target="_blank">' + item.name + '</a></div></li>';
			}
		})
		$(".bookList ul").html(bookListHtml)
	}  
})
