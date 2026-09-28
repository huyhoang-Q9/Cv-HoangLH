/* CV Lê Huy Hoàng · app.js
   Dữ liệu kinh nghiệm (JOBS), parallax, lightbox, animation */
const IMG={job0:"assets/exp-aits.jpg",job1:"assets/exp-fsi.jpg",job2:"assets/exp-onehealth.jpg",job3:"assets/exp-drai.jpg"};

const JOBS=[
 {time:"02/2024 → nay",title:"Pre-Sale & Project Manager",short:"AITS · Vietnam Airlines",img:"job0",
  org:"Công ty CP Tin học Viễn thông Hàng không (AITS), Vietnam Airlines · Toàn thời gian",
  duties:["Nghiên cứu văn bản quy phạm pháp luật, văn bản chỉ đạo điều hành, thủ tục hành chính và tài liệu nghiệp vụ của dự án, sản phẩm","Khảo sát, đánh giá hệ thống, phân tích yêu cầu và tư vấn giải pháp phần mềm cho khách hàng","Xác định, kiểm soát và theo dõi nhu cầu của khách hàng với dịch vụ AITS hiện tại và tương lai","Tư vấn, xây dựng phương án kỹ thuật cho các dự án bán CNTT; hỗ trợ triển khai dự án","Phát hiện cơ hội kinh doanh sản phẩm, dịch vụ CNTT; tìm kiếm và thiết lập quan hệ khách hàng","Xây dựng hồ sơ dự thầu, hồ sơ mời thầu, hồ sơ đáp ứng; soạn thảo và đàm phán hợp đồng","Xây dựng tài liệu giới thiệu sản phẩm, trình bày giải pháp, demo sản phẩm, POC","Thiết lập quan hệ với nhà cung cấp, nhà phân phối, hãng sản xuất; phát triển đối tác, nghiên cứu công nghệ mới","Chịu trách nhiệm thiết kế, định hướng kiến trúc trong các dự án phát triển ứng dụng","Cùng P.SPDVPM phân tích, đánh giá giải pháp CNTT; tư vấn lãnh đạo về ưu nhược điểm và hướng phát triển CNTT"],
  projects:[["TCS · Dịch vụ Hàng hóa Tân Sơn Nhất","Hệ thống HRMS"],["FTC · Trung tâm Huấn luyện Bay","Website, mobile app quản trị, quản lý đào tạo và thi trắc nghiệm"],["TIA · Cảng HKQT Tân Sơn Nhất","Hệ thống đánh giá, góp ý hành khách quốc tế và quốc nội"],["SASCO","Hệ thống HRM"],["SAGS · Phục vụ mặt đất Sài Gòn","Quản lý và lưu trữ văn bản tại 4 sân bay"],["VASCO","Hệ thống A.Office, HRM"],["VACS · Suất ăn hàng không","Hệ thống A.Office"],["LAIP · Cảng quốc tế Long An","Autogate, phần mềm MOST, CATOS"]]},
 {time:"01/2023 → 01/2024",title:"Business Analyst",short:"FSI",img:"job1",
  org:"Công ty CP Đầu tư Thương mại và Phát triển Công nghệ FSI · Toàn thời gian",
  duties:["Khảo sát, thu thập thông tin và yêu cầu; phân tích yêu cầu và phân tích hệ thống","Báo cáo, theo dõi tiến độ dự án theo tuần, tháng, quý cho khách hàng và cấp trên","Đề xuất và phân tích rủi ro các module sắp thực hiện hoặc đang phát triển","Demo giải pháp tại hội thảo, sự kiện; POC cho khách hàng và người dùng cuối","Đào tạo sản phẩm cho khách hàng và nhân viên nội bộ","Viết và phân tích use case; test case, test flow với vai trò người dùng","Xây dựng tài liệu SRS, URD, HDSD, kịch bản kiểm thử, Fit-Gap, Kick-off, catalogue, tuyên bố đáp ứng, thuyết minh giải pháp","Phối hợp Dev, SI, PM, UI/UX, Sale, Pre-Sale; dựng wireframe, mockup, prototype bằng Figma, Photoshop, Illustrator, Visio, draw.io","Hỗ trợ triển khai dự án"],
  projects:[["Bệnh viện Quân y 175","Giải pháp phần mềm bệnh viện"],["Lưu trữ lịch sử Tỉnh ủy","Số hóa và chỉnh lý tài liệu, Đồng Nai và Hậu Giang"],["Sở KH&ĐT Đồng Nai","Giải pháp chuyển đổi số"],["Sở Nội vụ 5 tỉnh","Đồng Nai, Quảng Nam, Phú Yên, Trà Vinh, Kiên Giang"],["Dinh Độc Lập","Số hóa 3D và số hóa không gian"],["Đại học Tài chính Marketing","Giải pháp cho UFM"],["Giải pháp Logistics","Qualcomm, Scandit"]]},
 {time:"09/2020 → 12/2022",title:"Business Analyst/ DEV",short:"OneHealth",img:"job2",
  org:"Cty TNHH MTV OneHealth · Toàn thời gian",
  duties:["Triển khai phần mềm HIS, LIS, RIS, PACS, HR, HRM tại Bệnh viện Nhi Đồng 2","Khảo sát cơ cấu tổ chức, cơ chế và quy trình làm việc từng bộ phận","Phác họa cây quy trình bằng draw.io và phổ biến cho đội Dev","Tham gia xây dựng source, database cho dự án","Test case, test flow trước khi vận hành","Viết tài liệu SRS, URD và hướng dẫn sử dụng (IM, UM, AM)","Cài đặt, hướng dẫn và hỗ trợ người dùng; tiếp nhận lỗi và phối hợp Dev xử lý","Hỗ trợ Dev xây dựng báo cáo theo yêu cầu khách hàng"],
  projects:[["Bệnh viện Nhi Đồng 2","HIS, LIS, RIS, PACS, HR, HRM"]]},
 {time:"10/2020 → 12/2022",title:"Business Analyst/ DEV",short:"DrAI · chi nhánh OneHealth",img:"job3",
  org:"Cty DrAI, chi nhánh Cty TNHH MTV OneHealth · Toàn thời gian",
  duties:["Triển khai phần mềm quản lý bệnh viện tại BVĐK Hồng Đức, chi nhánh Quận 12 và Gò Vấp","Khảo sát cơ cấu tổ chức, quy trình từng bộ phận; lên cây quy trình bằng draw.io","Xây dựng source, database; test case, test flow","Viết tài liệu SRS, URD, IM, UM, AM","Hướng dẫn, hỗ trợ người dùng; tiếp nhận lỗi và phối hợp Dev sửa lỗi"],
  projects:[["BVĐK Hồng Đức","Phần mềm quản lý bệnh viện, chi nhánh Quận 12 và Gò Vấp"]]}
];


const ROLES=[
 {title:"Pre-Sale",sub:"Tư vấn giải pháp CNTT, lập phương án kỹ thuật và hồ sơ dự thầu",
  goals:[["Ngắn hạn","Nắm vững kiến thức sản phẩm, phát triển kỹ năng tư vấn và hỗ trợ đội ngũ kinh doanh đạt chỉ tiêu."],["Dài hạn","Trở thành chuyên gia tư vấn giải pháp, xây dựng mối quan hệ chiến lược với khách hàng, đóng góp vào tăng trưởng doanh số."]],
  proof:[["AITS · 02/2024 → nay",["Tư vấn, xây dựng phương án kỹ thuật cho các dự án bán CNTT","Xây dựng hồ sơ dự thầu, hồ sơ mời thầu, hồ sơ đáp ứng; soạn thảo và đàm phán hợp đồng","Xây dựng tài liệu giới thiệu sản phẩm, trình bày giải pháp, demo sản phẩm, POC","Phát hiện cơ hội kinh doanh; thiết lập quan hệ với khách hàng, nhà cung cấp, hãng sản xuất"]],["FSI · 2023",["Demo giải pháp tại hội thảo và sự kiện quảng bá sản phẩm","POC và demo hệ thống cho khách hàng, người dùng cuối","Catalogue, phạm vi cung cấp, tuyên bố đáp ứng, thuyết minh giải pháp"]]],
  tags:["Phương án kỹ thuật","Hồ sơ dự thầu","Tuyên bố đáp ứng","Demo","POC","Đàm phán hợp đồng"]},
 {title:"Project Manager",sub:"Điều phối triển khai dự án bảo đảm tiến độ, ngân sách và chất lượng",
  goals:[["Trọng tâm","Tối ưu hóa quy trình triển khai, bảo đảm dự án đáp ứng tiến độ, ngân sách và chất lượng."],["Phương pháp","Áp dụng Agile, Scrum để nâng hiệu suất nhóm, tối ưu tài nguyên, giảm thiểu rủi ro; phát triển kỹ năng lãnh đạo, chiến lược và đổi mới công nghệ."]],
  proof:[["AITS · 02/2024 → nay",["Hỗ trợ triển khai dự án","Chịu trách nhiệm thiết kế, định hướng kiến trúc trong các dự án phát triển ứng dụng","Phối hợp phòng chức năng, hãng sản xuất, đối tác để xây dựng sản phẩm phần mềm mới"]],["FSI · 2023",["Báo cáo, theo dõi tiến độ dự án theo tuần, tháng, quý cho khách hàng và cấp trên","Đề xuất và phân tích rủi ro các module sắp và đang phát triển","Phối hợp PM, Dev, SI, UI/UX, Sale, Pre-Sale trong triển khai"]]],
  tags:["Agile","Scrum","Theo dõi tiến độ","Quản lý rủi ro","Báo cáo dự án","Điều phối đa bên"]},
 {title:"Business Analyst",sub:"Khảo sát, phân tích yêu cầu và đặc tả hệ thống phần mềm",
  goals:[["Ngắn hạn","Nhanh chóng thích nghi, nắm sâu quy trình kinh doanh và áp dụng kỹ năng phân tích để hỗ trợ ra quyết định."],["Dài hạn","Trở thành chuyên gia BA, đóng góp tối ưu hóa quy trình và dẫn dắt các dự án chiến lược."]],
  proof:[["FSI · 2023",["Khảo sát, thu thập yêu cầu; phân tích yêu cầu và hệ thống","Viết use case, test case, test flow","Tài liệu SRS, URD, HDSD, Fit-Gap, Kick-off","Dựng wireframe, mockup, prototype cùng nhóm UI/UX"]],["OneHealth & DrAI · 2020 → 2022",["Triển khai HIS, LIS, RIS, PACS, HRM tại BV Nhi Đồng 2 và BVĐK Hồng Đức","Khảo sát quy trình từng bộ phận, vẽ cây quy trình bằng draw.io","Viết SRS, URD, tài liệu IM, UM, AM","Hướng dẫn người dùng, tiếp nhận lỗi và phối hợp Dev xử lý"]]],
  tags:["SRS","URD","Use case","Fit-Gap","Test case","Wireframe","draw.io","Figma"]}
];
/* ---------- Tiles ---------- */
const shots=document.getElementById("shots");
JOBS.forEach((j,i)=>{
  const li=document.createElement("li");
  li.innerHTML=`<button class="shot" type="button" data-i="${i}" aria-label="Xem chi tiết: ${j.title}, ${j.short}"><img src="${IMG[j.img]}" alt="" loading="lazy"><span class="idx">${String(i+1).padStart(2,"0")}/${String(JOBS.length).padStart(2,"0")}</span><span class="meta"><small>${j.time}</small><b>${j.title}</b><span>${j.short}</span></span></button>`;
  shots.appendChild(li);
});

/* ---------- Parallax (Firewatch: lớp xa chậm, lớp gần nhanh) ---------- */
const layers=[...document.querySelectorAll(".keyart_layer[data-speed]")];
const keyart=document.querySelector(".keyart"),scrim=document.getElementById("k-scrim"),nav=document.getElementById("nav");
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
let ticking=false;
function onScroll(){
  const y=scrollY,H=keyart.offsetHeight;
  if(y<=H+10){
    if(!reduce)layers.forEach(l=>{l.style.transform=`translate3d(0,${(y*parseFloat(l.dataset.speed)).toFixed(1)}px,0)`});
    scrim.style.opacity=Math.min(y/H*1.15,.95).toFixed(3);
  }
  nav.classList.toggle("solid",y>H-90);
  ticking=false;
}
addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(onScroll);ticking=true}},{passive:true});
onScroll();

/* ---------- Lightbox + phân trang ---------- */
const lb=document.getElementById("lb"),pager=document.getElementById("pager");let cur=0,lastFocus=null;
let mode="job";
function buildPager(n,fn){pager.innerHTML="";for(let i=0;i<n;i++){const b=document.createElement("button");b.type="button";b.setAttribute("aria-label",(mode==="job"?"Chặng ":"Vị trí ")+(i+1));b.onclick=()=>fn(i);pager.appendChild(b)}}
function swapAnim(i){const card=document.getElementById("lbCard");if(!lb.hidden){card.style.setProperty("--dir",(i<cur?"-28px":"28px"));card.classList.remove("swap");void card.offsetWidth;card.classList.add("swap")}else card.classList.remove("swap")}
function showLb(){document.getElementById("lbPrev").textContent=mode==="job"?"← Chặng trước":"← Vị trí trước";document.getElementById("lbNext").textContent=mode==="job"?"Chặng sau →":"Vị trí sau →";[...pager.children].forEach((b,k)=>b.setAttribute("aria-current",k===cur));if(lb.hidden){lastFocus=document.activeElement;lb.hidden=false;document.body.style.overflow="hidden"}document.getElementById("lbCard").scrollTop=0;document.getElementById("lbX").focus()}
function openRole(i){
  if(mode!=="role"||lb.hidden){mode="role";buildPager(ROLES.length,openRole)}
  swapAnim(i);cur=(i+ROLES.length)%ROLES.length;const r=ROLES[cur];
  document.getElementById("lbImg").src=document.querySelector(`.role[data-role="${cur}"] img`).src;
  document.getElementById("lbTime").textContent=`Vị trí ứng tuyển · ${cur+1}/${ROLES.length}`;
  document.getElementById("lbTitle").textContent=r.title;
  document.getElementById("lbOrg").textContent=r.sub;
  document.getElementById("lbBody").innerHTML=`<h5>Mục tiêu</h5><ul class="goals">${r.goals.map(g=>`<li><b>${g[0]}</b>${g[1]}</li>`).join("")}</ul>`+r.proof.map(p=>`<h5>Kinh nghiệm liên quan · ${p[0]}</h5><ul class="duties">${p[1].map(d=>`<li>${d}</li>`).join("")}</ul>`).join("")+`<h5>Năng lực chính</h5><div class="tags">${r.tags.map(t=>`<span>${t}</span>`).join("")}</div>`;
  showLb();
}
function openJob(i){
  if(mode!=="job"||lb.hidden){mode="job";buildPager(JOBS.length,openJob)}
  const card=document.getElementById("lbCard");
  if(!lb.hidden){card.style.setProperty("--dir",(i<cur?"-28px":"28px"));card.classList.remove("swap");void card.offsetWidth;card.classList.add("swap")}else card.classList.remove("swap");
  cur=(i+JOBS.length)%JOBS.length;const j=JOBS[cur];
  document.getElementById("lbImg").src=IMG[j.img];
  document.getElementById("lbTime").textContent=`${j.time} · Chặng ${cur+1}/${JOBS.length}`;
  document.getElementById("lbTitle").textContent=j.title;
  document.getElementById("lbOrg").textContent=j.org;
  document.getElementById("lbBody").innerHTML=`<h5>Công việc chính</h5><ul class="duties">${j.duties.map(d=>`<li>${d}</li>`).join("")}</ul><h5>Dự án tiêu biểu (${j.projects.length})</h5><ul class="proj">${j.projects.map(p=>`<li><b>${p[0]}</b>${p[1]}</li>`).join("")}</ul>`;
  showLb();
}
function closeLb(){lb.hidden=true;document.body.style.overflow="";lastFocus&&lastFocus.focus()}
shots.addEventListener("click",e=>{const b=e.target.closest(".shot");if(b)openJob(+b.dataset.i)});
document.querySelectorAll("[data-open]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();openJob(+a.dataset.open)}));
document.getElementById("lbX").onclick=closeLb;
const go=d=>(mode==="job"?openJob:openRole)(cur+d);
document.getElementById("lbPrev").onclick=()=>go(-1);
document.getElementById("lbNext").onclick=()=>go(1);
lb.addEventListener("click",e=>{if(e.target===lb)closeLb()});
addEventListener("keydown",e=>{if(lb.hidden)return;if(e.key==="Escape")closeLb();if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1)});

/* ---------- Sao chép ---------- */
document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",()=>{
  const t=b.dataset.copy,el=b.previousElementSibling;
  const ok=()=>{b.textContent="Đã chép";setTimeout(()=>b.textContent="Sao chép",1500)};
  const sel=()=>{const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r)};
  try{navigator.clipboard.writeText(t).then(ok,sel)}catch(_){sel()}
}));

/* ================= ANIMATION JS ================= */
(function(){
  const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const prog=document.getElementById("progress"),top=document.getElementById("totop");
  function tick(){
    const h=document.documentElement.scrollHeight-innerHeight;
    prog.style.transform=`scaleX(${h>0?(scrollY/h).toFixed(4):0})`;
    top.classList.toggle("show",scrollY>innerHeight*.9);
  }
  addEventListener("scroll",()=>requestAnimationFrame(tick),{passive:true});tick();

  /* scrollspy */
  const links=[...document.querySelectorAll('.topnav a[href^="#"]:not(.brand)')];
  const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}}),{rootMargin:"-45% 0px -50% 0px"});
  ["summary","goals","experience","details","contact"].forEach(id=>{const el=document.getElementById(id);el&&spy.observe(el)});

  /* tách chữ trích dẫn */
  const bq=document.querySelector(".quote blockquote");
  bq.innerHTML=bq.textContent.trim().split(/\s+/).map((w,i)=>`<span class="qw" style="--i:${i}">${w}</span>`).join(" ");

  /* đếm số */
  function countUp(el){
    const to=+el.dataset.count;if(RM||!to){el.textContent=to;return}
    const t0=performance.now(),dur=1300;
    (function f(t){const p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e);if(p<1)requestAnimationFrame(f)})(t0);
  }

  /* reveal khi cuộn */
  if(RM||!("IntersectionObserver" in window))return;
  const groups=[".available .status",".available .h2",".stats li",".trailer",".story>.eyebrow",".story>.h2",".story>.lead",".roles li",".story .commit",".links2",".sec-head",".shots li",".clients",".quote",".info .card",".foot>*",".legal"];
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting)return;const el=e.target;el.classList.add("in");io.unobserve(el);
    el.querySelectorAll(".num").forEach(countUp);
  }),{threshold:.05,rootMargin:"0px 0px -2% 0px"});
  groups.forEach(sel=>{
    document.querySelectorAll(sel).forEach((el,i)=>{
      const r=el.getBoundingClientRect();
      if(r.top<innerHeight*.92){el.querySelectorAll(".num").forEach(countUp);return}
      el.classList.add("reveal");
      if(el.matches(".trailer,.quote"))el.classList.add("zoom");
      el.style.setProperty("--d",(Math.min(i,6)*0.09)+"s");
      io.observe(el);
    });
  });
})();

/* spotlight theo vị trí chuột */
document.addEventListener("pointermove",e=>{
  const c=e.target.closest&&e.target.closest(".card,.ref,.stat,.role");if(!c)return;
  const r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px");
},{passive:true});

/* parallax theo chuột trên ảnh bìa (desktop) */
if(matchMedia("(pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
  const ls=[...document.querySelectorAll(".keyart_layer[data-speed]")];
  document.querySelector(".keyart").addEventListener("pointermove",e=>{
    const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
    ls.forEach(l=>{const d=(1-parseFloat(l.dataset.speed))*18;l.style.translate=`${(-x*d).toFixed(1)}px ${(-y*d*.5).toFixed(1)}px`});
  });
}

/* ================= ANIMATION · PHONG CÁCH PHẦN MỀM ================= */
(function(){
  const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE=matchMedia("(pointer:fine)").matches;

  /* 1. Mạng lưới node trên ảnh bìa */
  const cv=document.getElementById("net"),hero=document.querySelector(".keyart");
  if(cv){
    const ctx=cv.getContext("2d");let W,H,pts=[],mouse={x:-1e4,y:-1e4},run=true;
    function size(){const d=Math.min(devicePixelRatio||1,2);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);
      const n=Math.min(90,Math.round(W*H/15000));pts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H*.8,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.6}))}
    function frame(){
      ctx.clearRect(0,0,W,H);
      for(const p of pts){if(!RM){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H*.85)p.vy*=-1}}
      for(let i=0;i<pts.length;i++){const a=pts[i];
        for(let j=i+1;j<pts.length;j++){const b=pts[j],dx=a.x-b.x,dy=a.y-b.y,d=dx*dx+dy*dy;if(d<17000){ctx.strokeStyle=`rgba(34,211,238,${(1-d/17000)*.28})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}
        const mx=a.x-mouse.x,my=a.y-mouse.y,md=mx*mx+my*my;if(md<26000){ctx.strokeStyle=`rgba(245,165,36,${(1-md/26000)*.55})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke()}
        ctx.fillStyle="rgba(190,235,255,.85)";ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,7);ctx.fill()}
      if(run&&!RM)requestAnimationFrame(frame)}
    size();frame();
    addEventListener("resize",()=>{size();if(RM)frame()});
    hero.addEventListener("pointermove",e=>{const r=cv.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top});
    hero.addEventListener("pointerleave",()=>{mouse.x=mouse.y=-1e4});
    new IntersectionObserver(es=>{const v=es[0].isIntersecting;if(v&&!run){run=true;if(!RM)requestAnimationFrame(frame)}run=v}).observe(hero);
  }

  /* 2. Gõ chữ vai trò */
  const typed=document.getElementById("typed");
  if(typed&&!RM){
    const words=["Pre-Sale","Business Analyst","Project Manager","Solution Consultant"];let w=0,c=words[0].length,del=true;
    typed.textContent=words[0];
    setTimeout(function loop(){
      const word=words[w];
      if(del){c--;typed.textContent=word.slice(0,c);if(c===0){del=false;w=(w+1)%words.length}setTimeout(loop,38)}
      else{c++;typed.textContent=words[w].slice(0,c);if(c===words[w].length){del=true;setTimeout(loop,2200)}else setTimeout(loop,70+Math.random()*50)}
    },2600);
  }

  /* 3. Glitch logo lúc tải */
  const bi=document.querySelector(".brand i");if(bi&&!RM){setTimeout(()=>{bi.classList.add("g");setTimeout(()=>bi.classList.remove("g"),1000)},1500)}

  /* 4. Hiệu ứng giải mã tiêu đề */
  const GL="!<>-_\\/[]{}=+*^?#01";
  function scramble(el){
    const nodes=[];(function walk(n){n.childNodes.forEach(k=>{if(k.nodeType===3&&k.textContent.trim())nodes.push({n:k,t:k.textContent});else if(k.nodeType===1)walk(k)})})(el);
    const total=nodes.reduce((s,x)=>s+x.t.length,0),t0=performance.now(),dur=Math.min(1100,300+total*14);
    (function f(now){const p=Math.min((now-t0)/dur,1);let done=Math.floor(total*p),acc=0;
      nodes.forEach(x=>{let out="";for(let i=0;i<x.t.length;i++){const ch=x.t[i];out+=(acc+i<done||ch===" ")?ch:GL[(Math.random()*GL.length)|0]}acc+=x.t.length;x.n.textContent=out});
      if(p<1)requestAnimationFrame(f);else nodes.forEach(x=>x.n.textContent=x.t)})(t0);
  }
  if(!RM){const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){so.unobserve(e.target);scramble(e.target)}}),{threshold:.6});
    document.querySelectorAll(".content .h2").forEach(h=>so.observe(h))}

  /* 5. Đánh số thứ tự cho tags/chips để hiện lần lượt */
  document.querySelectorAll(".tags,.chips").forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty("--t",i)));
  if(!RM&&"IntersectionObserver" in window){
    const tr=document.querySelector(".trailer");
    const gl=document.querySelector(".gitlog");
    [gl].forEach(el=>{if(!el)return;if(el.getBoundingClientRect().top<innerHeight*.9)return;el.classList.add("reveal");
      const o=new IntersectionObserver(es=>{if(es[0].isIntersecting){el.classList.add("in");o.disconnect()}},{threshold:.3});o.observe(el)});
    /* chips trong thẻ tóm tắt: trailer đã có reveal, thêm nếu thẻ hiện sẵn */
    if(tr&&!tr.classList.contains("reveal")){tr.classList.add("in")}
  }

  /* 6. Gõ lệnh terminal ở chân trang */
  const tt=document.getElementById("termtxt");
  if(tt){const cmd='hire --candidate "Lê Huy Hoàng" --role presales,ba,dev,pm --status available';
    if(RM){tt.textContent=cmd}else{const o=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;o.disconnect();let i=0;(function t(){tt.textContent=cmd.slice(0,++i);if(i<cmd.length)setTimeout(t,28+Math.random()*40)})()},{threshold:.6});o.observe(tt)}}

  /* 7. Lưới chấm theo con trỏ */
  const content=document.querySelector(".content");
  if(FINE&&content){content.addEventListener("pointermove",e=>{const r=content.getBoundingClientRect();content.style.setProperty("--cx",(e.clientX-r.left)+"px");content.style.setProperty("--cy",(e.clientY-r.top)+"px")},{passive:true});
    content.addEventListener("pointerleave",()=>{content.style.setProperty("--cx","-999px")})}

  /* 8. Nút hút theo chuột */
  if(FINE&&!RM){document.querySelectorAll(".btn.primary,.topnav .cta,.totop,.links2 .btn,.actions .btn").forEach(b=>{b.classList.add("magnet");
    b.addEventListener("pointermove",e=>{const r=b.getBoundingClientRect();b.style.translate=`${((e.clientX-r.left-r.width/2)*.22).toFixed(1)}px ${((e.clientY-r.top-r.height/2)*.3).toFixed(1)}px`});
    b.addEventListener("pointerleave",()=>{b.style.translate="0 0"})})}
})();

/* ================= ANIMATION ĐỢT 3 ================= */
(function(){
  const RM=matchMedia("(prefers-reduced-motion: reduce)").matches,FINE=matchMedia("(pointer:fine)").matches;

  /* thẻ vai trò: thêm nút gợi ý + mở chi tiết */
  const peekSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 9l10.5 3.5-4.5 1.5-1.5 4.5z"/><path d="M5 3.5v2M3.5 5h2M8 2.5l.8 1.6M2.5 8l1.6.8"/></svg>';
  document.querySelectorAll(".role").forEach(r=>{
    r.setAttribute("tabindex","0");r.setAttribute("role","button");r.setAttribute("aria-label","Xem chi tiết vị trí "+r.querySelector("figure span").textContent);
    const p=document.createElement("em");p.className="peek";p.innerHTML=peekSvg+"<b>Xem chi tiết</b>";r.querySelector("figure").appendChild(p);
    const m=document.createElement("div");m.className="more";m.innerHTML='./xem-chi-tiet <i>→</i>';r.appendChild(m);
    r.addEventListener("click",()=>setTimeout(()=>openRole(+r.dataset.role),RM?0:180));
    r.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openRole(+r.dataset.role)}});
  });

  /* 1. gợn sóng khi bấm */
  if(!RM)document.addEventListener("pointerdown",e=>{
    const t=e.target.closest(".role,.shot,.stat,.btn,.card,.roles-strip a");if(!t)return;
    if(getComputedStyle(t).position==="static")t.style.position="relative";
    const r=t.getBoundingClientRect(),d=Math.max(r.width,r.height)*2.2,s=document.createElement("span");
    s.className="rpl";s.style.cssText=`width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;
    t.appendChild(s);setTimeout(()=>s.remove(),750);
  });

  /* 2. nghiêng 3D */
  if(FINE&&!RM)document.querySelectorAll(".role,.shot").forEach(el=>{
    el.classList.add("tilt");const g=document.createElement("i");g.className="glare";el.appendChild(g);
    el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      el.style.transform=`perspective(900px) rotateX(${((.5-y)*7).toFixed(2)}deg) rotateY(${((x-.5)*9).toFixed(2)}deg) translateY(-4px)`;
      el.style.setProperty("--gx",x*100+"%");el.style.setProperty("--gy",y*100+"%")});
    el.addEventListener("pointerleave",()=>{el.style.transform=""});
  });

  /* 4. mưa mã trong khối trích dẫn */
  const q=document.querySelector(".quote"),rc=q&&q.querySelector(".rain");
  if(rc&&!RM){const ctx=rc.getContext("2d"),G="01{}<>/=;()[]$#".split("");let W,H,cols,drops,vis=false,fs=14;
    function size(){const d=Math.min(devicePixelRatio||1,2);W=rc.clientWidth;H=rc.clientHeight;rc.width=W*d;rc.height=H*d;ctx.setTransform(d,0,0,d,0,0);cols=Math.ceil(W/fs);drops=Array.from({length:cols},()=>Math.random()*-40)}
    let last=0;function draw(t){if(!vis)return;requestAnimationFrame(draw);if(t-last<55)return;last=t;
      ctx.fillStyle="rgba(7,17,31,.16)";ctx.fillRect(0,0,W,H);ctx.font=`500 ${fs}px JetBrains Mono,monospace`;
      for(let i=0;i<cols;i++){const y=drops[i]*fs;ctx.fillStyle=Math.random()>.96?"rgba(245,165,36,.9)":"rgba(34,211,238,.55)";ctx.fillText(G[(Math.random()*G.length)|0],i*fs,y);
        if(y>H&&Math.random()>.975)drops[i]=0;drops[i]+=1}}
    size();addEventListener("resize",size);
    new IntersectionObserver(es=>{const v=es[0].isIntersecting;if(v&&!vis){vis=true;requestAnimationFrame(draw)}vis=v}).observe(q);
  }

  /* 5. thông báo kiểu CI/CD */
  const box=document.getElementById("toasts");
  window.toast=function(title,msg,life=4200){if(!box)return;const t=document.createElement("div");t.className="toast";t.style.setProperty("--life",life+"ms");
    t.innerHTML=`<span class="ok">✓</span><span><b>${title}</b>${msg}</span>`;box.appendChild(t);
    setTimeout(()=>{t.classList.add("out");setTimeout(()=>t.remove(),450)},life)};
  if(!RM)setTimeout(()=>toast("Build Passed · Cv_HoangLH","Hồ sơ đã tải xong, sẵn sàng trình chiếu"),3200);
  document.querySelectorAll(".copy").forEach(b=>b.addEventListener("click",()=>toast("copied to clipboard",b.dataset.copy,2600)));

  /* 6. nhãn gõ chữ khi cuộn tới + 7. gạch chân tiêu đề */
  if(!RM&&"IntersectionObserver" in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target;
      if(el.classList.contains("h2")){el.classList.add("lined");return}
      const full=el.textContent;el.textContent="";el.classList.add("typing");let i=0;
      (function t(){el.textContent=full.slice(0,++i);if(i<full.length)setTimeout(t,26);else setTimeout(()=>el.classList.remove("typing"),600)})()}),{threshold:.8});
    document.querySelectorAll(".content .eyebrow,.content .h2").forEach(el=>io.observe(el));
  }else document.querySelectorAll(".content .h2").forEach(h=>h.classList.add("lined"));

  /* 8. nhân đôi dải khách hàng để chạy liên tục */
  const tr=document.querySelector(".track");if(tr&&!RM){tr.innerHTML+=tr.innerHTML;[...tr.children].slice(tr.children.length/2).forEach(c=>c.setAttribute("aria-hidden","true"))}
})();

/* ảnh bìa: 3 cột vai trò mở chi tiết */
document.querySelectorAll(".roles-strip a").forEach((a,i)=>a.addEventListener("click",e=>{e.preventDefault();openRole([0,2,1][i])}));
