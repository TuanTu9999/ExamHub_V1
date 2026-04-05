// ============================================================
//  data.js — Dữ liệu đề thi ExamHub
//  Gồm 2 đề: Thái Nguyên (id 1-22) + Nghệ An (id 23-44)
// ============================================================

const EXAM_DATA = {

  // ── Phòng thi ───────────────────────────────────────────
  rooms: [
    {
      id: 1,
      name: "Toán học THPT",
      desc: "Tổng hợp đề thi Toán học THPT từ các sở giáo dục",
      subject: "math",
      icon: "📐",
      color: "var(--acc-s)",
      status: "open",
      premium: false
    }
  ],

  // ── Đề thi ──────────────────────────────────────────────
  exams: [
    {
      id: 1,
      name: "Đề toán sở Thái Nguyên lần 1 năm 2026",
      roomId: 1,
      duration: 90,
      type: "official",
      author: "Admin",
      questions: 22,
      questionIds: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
      created: "2026-04-01T00:00:00.000Z"
    },
    {
      id: 2,
      name: "Đề toán sở Nghệ An lần 1 năm 2026",
      roomId: 1,
      duration: 90,
      type: "official",
      author: "Admin",
      questions: 22,
      questionIds: [23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],
      created: "2026-04-01T00:00:00.000Z"
    }
  ],

  // ── Câu hỏi ─────────────────────────────────────────────
  questions: [

    // =========================================================
    //  ĐỀ THÁI NGUYÊN  (id 1 – 22)
    // =========================================================

    // --- Trắc nghiệm 1 đáp án (id 1-12) ---------------------
    {
      id: 1, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Cho hình chóp $S.ABCD$ có $SA \\perp (ABCD)$, tứ giác $ABCD$ là hình vuông, $SA = 3$ và $AB = 1$. Thể tích của khối chóp $S.ABCD$ bằng",
      opts: ["$2$", "$1$", "$3$", "$9$"],
      correct: 1,
      sol_text: "Diện tích đáy là $S_{ABCD} = AB^2 = 1$. Vì $SA \\perp (ABCD)$ nên $SA = 3$ là chiều cao. Do đó $V = \\dfrac{1}{3} \\cdot 1 \\cdot 3 = 1$."
    },
    {
      id: 2, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Cho hình hộp $ABCD.EFGH$ (tham khảo hình vẽ). Đường thẳng $GF$ song song với mặt phẳng nào sau đây?",
      image: "https://i.postimg.cc/9FCNr8t4/2.jpg",
      opts: ["$(ACGE)$", "$(ABFE)$", "$(ABCD)$", "$(BDHF)$"],
      correct: 2,
      sol_text: "Vì $GF$ là cạnh thuộc mặt phẳng $(EFGH)$ và $(EFGH) \\parallel (ABCD)$ nên $GF \\parallel (ABCD)$."
    },
    {
      id: 3, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Nghiệm của phương trình $\\log_2(x-1)=3$ là",
      opts: ["$x=9$", "$x=4$", "$x=7$", "$x=10$"],
      correct: 0,
      sol_text: "Điều kiện: $x>1$. Từ $\\log_2(x-1)=3$ suy ra $x-1=2^3=8$, nên $x=9$."
    },
    {
      id: 4, subject: "math", diff: "medium", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Cho hàm số đa thức bậc bốn $y=f(x)$ có đồ thị như hình vẽ. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
      image: "https://i.postimg.cc/t47kxL1J/4.jpg",
      opts: ["$(-1;0)$", "$(-\\infty;-1)$", "$(-\\infty;1)$", "$(-1;+\\infty)$"],
      correct: 1,
      sol_text: "Quan sát đồ thị, hàm số tăng khi $x$ đi từ $-\\infty$ đến $-1$. Vì vậy hàm số đồng biến trên khoảng $(-\\infty;-1)$."
    },
    {
      id: 5, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Tiệm cận ngang của đồ thị hàm số $y=\\dfrac{2x-5}{x+2}$ là đường thẳng có phương trình",
      opts: ["$y=-2$", "$y=\\dfrac{5}{2}$", "$y=\\dfrac{2}{5}$", "$y=2$"],
      correct: 3,
      sol_text: "Tử và mẫu đều bậc nhất nên tiệm cận ngang là tỉ số hệ số của $x$: $y=\\dfrac{2}{1}=2$."
    },
    {
      id: 6, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Nguyên hàm của hàm số $f(x)=2^x+x$ là",
      opts: ["$\\dfrac{2^x}{\\ln 2}+x^2+C$", "$\\dfrac{2^x}{\\ln 2}+\\dfrac{x^2}{2}+C$", "$2^x+\\dfrac{x^2}{2}+C$", "$2^x+x^2+C$"],
      correct: 1,
      sol_text: "$\\int 2^x\\,dx = \\dfrac{2^x}{\\ln 2}+C$ và $\\int x\\,dx = \\dfrac{x^2}{2}+C$. Cộng lại được $\\dfrac{2^x}{\\ln 2}+\\dfrac{x^2}{2}+C$."
    },
    {
      id: 7, subject: "math", diff: "medium", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Đồ thị của hàm số nào dưới đây có dạng như đường cong trong hình vẽ?",
      image: "https://i.postimg.cc/NFp8y4BX/7.jpg",
      opts: ["$y=\\dfrac{2x-1}{x+2}$", "$y=x^3-3x+1$", "$y=-x^3+3x+1$", "$y=\\dfrac{x^2-1}{2x-1}$"],
      correct: 1,
      sol_text: "Đồ thị là hàm bậc ba với hệ số bậc ba dương và tung độ gốc bằng $1$. Trong các lựa chọn chỉ có $y=x^3-3x+1$ phù hợp."
    },
    {
      id: 8, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Trong không gian với hệ tọa độ $Oxyz$, hình chiếu vuông góc của điểm $M(2;1;-1)$ trên mặt phẳng $(Oxz)$ có tọa độ là",
      opts: ["$(0;1;0)$", "$(2;1;0)$", "$(0;1;-1)$", "$(2;0;-1)$"],
      correct: 3,
      sol_text: "Hình chiếu lên $(Oxz)$ giữ nguyên $x,z$ và cho $y=0$, nên được $(2;0;-1)$."
    },
    {
      id: 9, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Cho cấp số cộng $(u_n)$ có $u_1=2$ và $u_4=11$. Công sai của cấp số cộng đã cho bằng",
      opts: ["$1$", "$2$", "$4$", "$3$"],
      correct: 3,
      sol_text: "Vì $u_4=u_1+3d$ nên $11=2+3d$. Suy ra $3d=9$ và $d=3$."
    },
    {
      id: 10, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Trong không gian với hệ tọa độ $Oxyz$, cho vectơ $\\vec{a}=(2;-1;3)$, $\\vec{b}=(1;3;-2)$. Tọa độ của vectơ $\\vec{c}=\\vec{a}-2\\vec{b}$ là",
      opts: ["$(0;-7;7)$", "$(4;-7;7)$", "$(0;7;7)$", "$(0;-7;-7)$"],
      correct: 0,
      sol_text: "$\\vec{c}=(2;-1;3)-2(1;3;-2)=(2;-1;3)-(2;6;-4)=(0;-7;7)$."
    },
    {
      id: 11, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Mỗi ngày bác An đều đi bộ để rèn luyện sức khỏe. Quãng đường đi bộ mỗi ngày của bác An trong 20 ngày được thống kê ở bảng sau. Khoảng tứ phân vị của mẫu số liệu ghép nhóm trên là",
      image: "https://i.postimg.cc/63KCYSQ5/11.jpg",
      opts: ["$0{,}5$", "$0{,}9$", "$0{,}575$", "$0{,}975$"],
      correct: 2,
      sol_text: "Tần số tích lũy là $3,9,14,18,20$. $Q_1=3{,}0+\\dfrac{5-3}{6}\\cdot 0{,}3=3{,}1$; $Q_3=3{,}6+\\dfrac{15-14}{4}\\cdot 0{,}3=3{,}675$. Khoảng tứ phân vị $= Q_3-Q_1=0{,}575$."
    },
    {
      id: 12, subject: "math", diff: "easy", source: "thainguyen", qtype: "single", score: 0.25,
      text: "Cho hàm số $f(x)$ có bảng biến thiên như hình vẽ. Giá trị cực tiểu của hàm số đã cho là",
      image: "https://i.postimg.cc/15d6L4zJ/12.jpg",
      opts: ["$y=1$", "$y=0$", "$y=-1$", "$y=2$"],
      correct: 0,
      sol_text: "Từ bảng biến thiên, các giá trị cực trị là $2, 1, 2$. Giá trị nhỏ nhất trong các điểm cực trị là $1$. Vì vậy giá trị cực tiểu của hàm số là $1$."
    },

    // --- Đúng/Sai 4 câu (id 13-16) --------------------------
    {
      id: 13, subject: "math", diff: "medium", source: "thainguyen", qtype: "tf4", score: 1.0,
      text: "Trong không gian với hệ tọa độ $Oxyz$, cho hình thang $ABCD$ vuông tại $A$ và $B$. Biết $A(1;2;1)$, $B(2;0;-1)$, $C(6;1;0)$ và diện tích hình thang $ABCD$ bằng $6\\sqrt{2}$.",
      subqs: [
        { text: "$\\cos(\\overrightarrow{AB},\\overrightarrow{AC})=\\dfrac{\\sqrt{3}}{3}$.", ans: true },
        { text: "Tọa độ điểm $D$ là $(a;b;c)$. Khi đó $a+b+c=\\dfrac{22}{3}$.", ans: false },
        { text: "Gọi điểm $M(x_M;y_M;z_M)$ nằm trên mặt phẳng $(Oxy)$ thỏa mãn $MA^2+2MB^2+3MC^2$ đạt giá trị nhỏ nhất. Khi đó $x_M<4$.", ans: true },
        { text: "$\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=9$.", ans: true }
      ],
      tf4scores: { s1: 0.1, s2: 0.25, s3: 0.5, s4: 1 },
      sol_text: "$\\vec{AB}=(1,-2,-2)$, $\\vec{AC}=(5,-1,-1)$ nên $\\vec{AB}\\cdot\\vec{AC}=9$ và $\\cos(\\vec{AB},\\vec{AC})=\\dfrac{\\sqrt{3}}{3}$. Vì $AB\\perp AD,BC$ và $AD\\parallel BC$, từ diện tích suy ra mệnh đề về $a+b+c$ là sai. Với điểm $M$ tối ưu trên $(Oxy)$, hoành độ nhận được nhỏ hơn $4$."
    },
    {
      id: 14, subject: "math", diff: "medium", source: "thainguyen", qtype: "tf4", score: 1.0,
      text: "Trong hình vẽ sau đây, khi kéo ra khỏi vị trí cân bằng ở điểm $O$ và buông tay, lực đàn hồi của lò xo khiến vật $A$ dao động quanh $O$. Tọa độ $s$ (centimét) của $A$ trên trục $Ox$ vào thời điểm $t$ (giây) sau khi buông tay được xác định bởi công thức $s=10\\sin\\left(10t-\\dfrac{\\pi}{2}\\right)$.",
      image: "https://i.postimg.cc/Vv6rhcP1/14.jpg",
      subqs: [
        { text: "Giá trị nhỏ nhất của hàm số $s=10\\sin\\left(10t-\\dfrac{\\pi}{2}\\right)$ bằng $-1$.", ans: false },
        { text: "Thời điểm đầu tiên tọa độ của vật $A$ trên trục bằng $5$ là $t=\\dfrac{2\\pi}{15}$ giây.", ans: false },
        { text: "Tập xác định của hàm số $s=10\\sin\\left(10t-\\dfrac{\\pi}{2}\\right)$ là $\\mathbb{R}$.", ans: true },
        { text: "Trong $3$ giây đầu tiên vật đi qua vị trí cân bằng $10$ lần.", ans: true }
      ],
      tf4scores: { s1: 0.1, s2: 0.25, s3: 0.5, s4: 1 },
      sol_text: "Biên độ bằng $10$ nên GTNN bằng $-10$, mệnh đề 1 sai. $\\sin(10t-\\pi/2)=1/2$ cho thời điểm dương nhỏ nhất $t=\\pi/15$, mệnh đề 2 sai. Hàm sin xác định với mọi $t\\in\\mathbb{R}$, mệnh đề 3 đúng. Chu kỳ $T=\\pi/5$, trong 3 giây vật qua vị trí cân bằng 10 lần, mệnh đề 4 đúng."
    },
    {
      id: 15, subject: "math", diff: "medium", source: "thainguyen", qtype: "tf4", score: 1.0,
      text: "Cây cà chua khi trồng có chiều cao $5$ cm. Tốc độ tăng chiều cao của cây cà chua sau khi trồng $t$ tuần được cho bởi hàm số $v(t)=-0{,}1t^3+t^2$, đơn vị: centimét/tuần. Gọi $h(t)$ là độ cao của cây cà chua ở tuần thứ $t$, đơn vị: centimét.",
      subqs: [
        { text: "Vào thời điểm cây cà chua đó phát triển nhanh nhất, chiều cao của cây cà chua nhỏ hơn $54$ cm.", ans: false },
        { text: "Cây cà chua đó có thể phát triển và cao hơn $88$ cm.", ans: true },
        { text: "Tốc độ tăng chiều cao của cây cà chua sau khi trồng được $2$ tuần là $3{,}2$ centimét/tuần.", ans: true },
        { text: "Giai đoạn tăng trưởng của cây cà chua đó kéo dài $8$ tuần.", ans: false }
      ],
      tf4scores: { s1: 0.1, s2: 0.25, s3: 0.5, s4: 1 },
      sol_text: "$v(2)=-0{,}1\\cdot8+4=3{,}2$, mệnh đề 3 đúng. $v(t)>0$ khi $0<t<10$ nên tăng trưởng 10 tuần, mệnh đề 4 sai. $h(10)\\approx88{,}33>88$, mệnh đề 2 đúng. Thời điểm phát triển nhanh nhất: cao hơn 54 cm, mệnh đề 1 sai."
    },
    {
      id: 16, subject: "math", diff: "medium", source: "thainguyen", qtype: "tf4", score: 1.0,
      text: "Cho hàm số $y=f(x)=(x^2-5x+7)e^x$.",
      subqs: [
        { text: "$f(0)=7$.", ans: true },
        { text: "Hàm số $y=f(x)$ nghịch biến trên khoảng $\\left(-\\infty;\\dfrac{5}{2}\\right)$.", ans: false },
        { text: "Đạo hàm của hàm số đã cho là $f'(x)=(2x-5)e^x$.", ans: false },
        { text: "Giá trị nhỏ nhất của hàm số $y=f(x)$ trên đoạn $[0;2]$ bằng $7$.", ans: true }
      ],
      tf4scores: { s1: 0.1, s2: 0.25, s3: 0.5, s4: 1 },
      sol_text: "$f(0)=7$ đúng. $f'(x)=(x^2-3x+2)e^x=(x-1)(x-2)e^x$, mệnh đề 3 sai. Hàm nghịch biến trên $(1;2)$, mệnh đề 2 sai. Trên $[0;2]$: $f(0)=7$, $f(1)=3e$, $f(2)=e^2$; GTNN bằng $7$, mệnh đề 4 đúng."
    },

    // --- Trả lời ngắn (id 17-22) ----------------------------
    {
      id: 17, subject: "math", diff: "medium", source: "thainguyen", qtype: "short", score: 0.5,
      text: "Có bao nhiêu cách chọn sáu số từ chín số nguyên $1,2,\\dots,9$ và điền vào các ô của hình dưới đây (mỗi ô chỉ điền đúng một số) sao cho tổng các số ở mỗi cột (kể cả cột có một ô) bằng nhau?",
      image: "https://i.postimg.cc/7LkCkzrW/17.jpg",
      answer: "48", unit: "",
      sol_text: "Bài toán đếm các cách chọn và sắp xếp sáu số khác nhau vào 6 ô sao cho ba cột có tổng bằng nhau. Sau khi xét đầy đủ các trường hợp hợp lệ, số cách thỏa mãn là $48$."
    },
    {
      id: 18, subject: "math", diff: "hard", source: "thainguyen", qtype: "short", score: 0.5,
      text: "Cho tứ diện $ABCD$ có $\\angle BAC = 30^\\circ$, $\\angle CAD = 45^\\circ$, $\\angle DAB = 60^\\circ$. Gọi $\\alpha=[B;AD;C]$ thì giá trị của $\\cos\\alpha$ bằng bao nhiêu? (làm tròn kết quả cuối cùng đến hàng phần trăm)",
      answer: "0.84", unit: "",
      sol_text: "Áp dụng công thức góc nhị diện, ta có $\\cos\\alpha = \\dfrac{\\cos 60^\\circ - \\cos 30^\\circ\\cos 45^\\circ}{\\sin 60^\\circ\\sin 45^\\circ} = \\sqrt{2}-\\dfrac{1}{\\sqrt{3}} \\approx 0{,}8374$. Làm tròn đến hàng phần trăm được $0{,}84$."
    },
    {
      id: 19, subject: "math", diff: "hard", source: "thainguyen", qtype: "short", score: 0.5,
      text: "Trong một cuộc thi pha chế, mỗi đội chơi được sử dụng tối đa $24$ gam hương liệu, $9$ lít nước và $210$ gam đường để pha chế nước ngọt loại I và loại II. Để pha chế $1$ lít nước ngọt loại I cần $10$ gam đường, $1$ lít nước và $4$ gam hương liệu. Để pha chế $1$ lít nước ngọt loại II cần $30$ gam đường, $1$ lít nước và $1$ gam hương liệu. Mỗi lít nước ngọt loại I được $80$ điểm thưởng, mỗi lít nước ngọt loại II được $60$ điểm thưởng. Hỏi số điểm thưởng cao nhất có thể của mỗi đội trong cuộc thi là bao nhiêu?",
      answer: "640", unit: "điểm",
      sol_text: "Gọi $x, y$ lần lượt là số lít loại I và II. Ràng buộc: $4x+y\\le24$, $x+y\\le9$, $x+3y\\le21$, $x,y\\ge0$. Hàm mục tiêu $P=80x+60y$ đạt max tại $(x,y)=(5,4)$: $P=80\\cdot5+60\\cdot4=640$."
    },
    {
      id: 20, subject: "math", diff: "hard", source: "thainguyen", qtype: "short", score: 0.5,
      text: "Tung đồng thời hai con xúc xắc khác nhau đều cân đối và đồng chất ba lần. Bằng cách cộng số chấm xuất hiện trên hai con xúc xắc trong mỗi lần tung ta được một số ngẫu nhiên từ $2$ đến $12$. Gọi ba số này lần lượt là $a$, $b$ và $t$. Chọn ngẫu nhiên một tam giác có hai cạnh có độ dài là $a$, $b$ và góc xen giữa chúng bằng $(t-1)15^\\circ$. Xác suất để tam giác này là tam giác vuông bằng bao nhiêu? (kết quả làm tròn đến hàng phần trăm)",
      answer: "0.17", unit: "",
      sol_text: "Tam giác vuông xảy ra khi góc xen giữa bằng $90^\\circ$ ($t=7$) hoặc thỏa mãn điều kiện khác. $P(t=7)=\\dfrac{1}{6}$. Tổng xác suất $\\approx 0{,}1744$, làm tròn được $0{,}17$."
    },
    {
      id: 21, subject: "math", diff: "medium", source: "thainguyen", qtype: "short", score: 0.5,
      text: "Khi nghiên cứu một loại thuốc trị bệnh trong nuôi trồng thủy sản, người ta sử dụng thuốc đó một lần và theo dõi nồng độ thuốc tồn dư trong nước kể từ lúc sử dụng thuốc. Kết quả cho thấy nồng độ thuốc $y(t)$ (đơn vị: mg/lít) tồn dư trong nước tại thời điểm $t$ ngày thỏa mãn $y'(t)=k\\,y(t)$ với $k$ là hằng số khác không. Đo nồng độ tại $t=6$ ngày và $t=12$ ngày lần lượt được $2$ mg/lít và $1$ mg/lít. Nồng độ thuốc tồn dư trong nước tại thời điểm $30$ ngày bằng bao nhiêu mg/lít? (kết quả làm tròn đến hàng phần trăm)",
      answer: "0.13", unit: "mg/lít",
      sol_text: "Vì $y'(t)=ky(t)$ nên $y(t)=Ce^{kt}$. Từ $y(6)=2$ và $y(12)=1$ suy ra $e^{6k}=\\dfrac{1}{2}$, do đó $k=-\\dfrac{\\ln 2}{6}$. Suy ra $y(30)=2e^{24k}=2\\cdot2^{-4}=0{,}125\\approx0{,}13$."
    },
    {
      id: 22, subject: "math", diff: "hard", source: "thainguyen", qtype: "short", score: 0.5,
      text: "Cho hình hộp chữ nhật $ABCD.EFGH$ với $AB=6$, $AD=8$ và $DH=10$. Gọi điểm $M$ là trung điểm của đoạn thẳng $AF$ và điểm $I$ thuộc mặt phẳng $(ABCD)$. Khi $IM+IG$ nhỏ nhất thì điểm $I$ cách hai đường thẳng $BA$ và $BC$ tương ứng bằng $a$ và $b$. Giá trị của biểu thức $P=3a+6b$ bằng bao nhiêu?",
      answer: "20", unit: "",
      sol_text: "Đặt $A(0,0,0)$, $B(6,0,0)$, $D(0,8,0)$, $F(6,0,10)$, $G(6,8,10)$. Trung điểm $M(3,0,5)$. Phản xạ $G$ qua $(ABCD)$ được $G'(6,8,-10)$. Đường thẳng $MG'$ cắt $(ABCD)$ tại $I\\left(4;\\dfrac{8}{3};0\\right)$. Suy ra $a=\\dfrac{8}{3}$, $b=2$, $P=3\\cdot\\dfrac{8}{3}+6\\cdot2=20$."
    },

    // =========================================================
    //  ĐỀ NGHỆ AN  (id 23 – 44)
    // =========================================================

    // --- Trắc nghiệm 1 đáp án (id 23-34) --------------------
    {
      id: 23, subject: "math", diff: "easy", source: "nghean", qtype: "single", score: 0.25,
      text: "Tìm $I = \\lim_{x \\to 0} \\dfrac{1}{x+1}$.",
      opts: ["$\\dfrac{1}{2}$", "$1$", "$+\\infty$", "$0$"],
      correct: 1,
      sol_text: "Thay trực tiếp $x=0$: $\\dfrac{1}{0+1}=1$."
    },
    {
      id: 24, subject: "math", diff: "medium", source: "nghean", qtype: "single", score: 0.25,
      text: "Hàm số nào dưới đây có đồ thị như hình vẽ?",
      image: "https://i.postimg.cc/7hKmbsGP/2.jpg",
      opts: ["$f(x)=x^3+3x+1$", "$f(x)=-x^3+3x-1$", "$f(x)=-x^3+3x+1$", "$f(x)=x^3-3x-1$"],
      correct: 2,
      sol_text: "Đồ thị có dạng bậc ba với hệ số $a<0$, đi qua điểm $(0;1)$ nên $f(x)=-x^3+3x+1$."
    },
    {
      id: 25, subject: "math", diff: "easy", source: "nghean", qtype: "single", score: 0.25,
      text: "Khoảng biến thiên của mẫu số liệu ghép nhóm là",
      opts: ["$10$", "$7$", "$6$", "$8$"],
      correct: 1,
      sol_text: "Khoảng biến thiên $= 10 - 3 = 7$ (giá trị lớn nhất $10$, nhỏ nhất $3$)."
    },
    {
      id: 26, subject: "math", diff: "easy", source: "nghean", qtype: "single", score: 0.25,
      text: "Trong không gian $Oxyz$, cho điểm $M(1;2;3)$. Tọa độ hình chiếu vuông góc của $M$ lên trục $Ox$ là",
      opts: ["$(2;0;0)$", "$(3;0;0)$", "$(1;0;0)$", "$(1;0;3)$"],
      correct: 2,
      sol_text: "Hình chiếu lên trục $Ox$ giữ nguyên hoành độ, tung độ và cao độ bằng $0$: $(1;0;0)$."
    },
    {
      id: 27, subject: "math", diff: "easy", source: "nghean", qtype: "single", score: 0.25,
      text: "Cho bảng biến thiên như hình vẽ, điểm cực tiểu của hàm số là",
      image: "https://i.postimg.cc/y6jffdfg/5.jpg",
      opts: ["$x=1$", "$x=3$", "$x=-1$", "$x=5$"],
      correct: 1,
      sol_text: "Dựa vào bảng biến thiên, hàm số đạt cực tiểu tại $x=3$ (đạo hàm đổi dấu từ âm sang dương)."
    },
    {
      id: 28, subject: "math", diff: "medium", source: "nghean", qtype: "single", score: 0.25,
      text: "Tâm đối xứng của đồ thị hàm số $y=-x^3+3x-2$ là",
      image: "https://i.postimg.cc/nV2ddzdX/6.jpg",
      opts: ["$(0;-2)$", "$(0;0)$", "$(-2;0)$", "$(0;2)$"],
      correct: 0,
      sol_text: "Hàm bậc ba có tâm đối xứng là điểm uốn. $y''=-6x=0 \\Rightarrow x=0$, $y(0)=-2$. Vậy tâm $I(0;-2)$."
    },
    {
      id: 29, subject: "math", diff: "medium", source: "nghean", qtype: "single", score: 0.25,
      text: "Ảnh của đoạn $A'C'$ qua phép chiếu song song theo phương $A'A$ lên $(ABCD)$ là",
      image: "https://i.postimg.cc/mZjddDd1/7_10.jpg",
      opts: ["$A'C$", "$AB$", "$BD$", "$AC$"],
      correct: 3,
      sol_text: "Phép chiếu theo phương $A'A$ biến $A'\\to A$, $C'\\to C$, nên ảnh của $A'C'$ là $AC$."
    },
    {
      id: 30, subject: "math", diff: "easy", source: "nghean", qtype: "single", score: 0.25,
      text: "Dãy số nào là dãy tăng?",
      opts: ["$\\dfrac{1}{3^n}$", "$n+1$", "$1+\\dfrac{1}{n}$", "$6-2n$"],
      correct: 1,
      sol_text: "Dãy $u_n=n+1$ có $u_{n+1}-u_n=1>0$ nên tăng."
    },
    {
      id: 31, subject: "math", diff: "easy", source: "nghean", qtype: "single", score: 0.25,
      text: "Tập nghiệm của bất phương trình $\\log_2(x-1)>3$ là",
      opts: ["$(1;+\\infty)$", "$(1;9)$", "$(9;+\\infty)$", "$(-\\infty;9)$"],
      correct: 2,
      sol_text: "$\\log_2(x-1)>3 \\Leftrightarrow x-1>2^3=8 \\Leftrightarrow x>9$."
    },
    {
      id: 32, subject: "math", diff: "medium", source: "nghean", qtype: "single", score: 0.25,
      text: "Tích vô hướng $\\vec{CC'}\\cdot \\vec{A'A}$ bằng",
      image: "https://i.postimg.cc/mZjddDd1/7_10.jpg",
      opts: ["$0$", "$-1$", "$2$", "$1$"],
      correct: 1,
      sol_text: "$\\vec{CC'}=\\vec{AA'}$, $\\vec{A'A}=-\\vec{AA'}$, nên $\\vec{CC'}\\cdot\\vec{A'A}=\\vec{AA'}\\cdot(-\\vec{AA'})=-|\\vec{AA'}|^2=-1$."
    },
    {
      id: 33, subject: "math", diff: "easy", source: "nghean", qtype: "single", score: 0.25,
      text: "Phương trình nào là phương trình mặt phẳng?",
      opts: [
        "$\\dfrac{x-2}{2}=\\dfrac{y-1}{2}=\\dfrac{z}{1}$",
        "$x-1=0$",
        "$x^2+y^2+z^2-4=0$",
        "$\\dfrac{2}{x}+\\dfrac{1}{y}+\\dfrac{3}{z}=0$"
      ],
      correct: 1,
      sol_text: "Phương trình tổng quát mặt phẳng có dạng $Ax+By+Cz+D=0$. Chỉ có $x-1=0$ thỏa mãn."
    },
    {
      id: 34, subject: "math", diff: "easy", source: "nghean", qtype: "single", score: 0.25,
      text: "Độ dài của vectơ $\\vec{a}=(-3;5;1)$ là",
      opts: ["$\\sqrt{17}$", "$35$", "$17$", "$\\sqrt{35}$"],
      correct: 3,
      sol_text: "$|\\vec{a}|=\\sqrt{(-3)^2+5^2+1^2}=\\sqrt{9+25+1}=\\sqrt{35}$."
    },

    // --- Đúng/Sai 4 câu (id 35-38) --------------------------
    {
      id: 35, subject: "math", diff: "medium", source: "nghean", qtype: "tf4", score: 1.0,
      text: "Một hợp tác xã nông nghiệp tại Nghệ An đầu tư dự án trồng dưa lưới nhà màng VietGAP. Xét trong một vụ canh tác, với diện tích $x$ (nghìn $\\text{m}^2$, $x \\geq 1$), tổng chi phí là $C(x) = x^2 + 30x + 100$ (triệu đồng). Tổng doanh thu dự kiến là $R(x) = x^2 + 100x$ (triệu đồng).",
      subqs: [
        {
          text: "Hàm số lợi nhuận của HTX sau một vụ canh tác là $L(x) = 70x - 100$ (triệu đồng).",
          ans: true
        },
        {
          text: "Nếu HTX muốn đạt mức lợi nhuận là $250$ triệu đồng cho một vụ thì diện tích canh tác cần thiết là $5$ nghìn $\\text{m}^2$.",
          ans: true
        },
        {
          text: "Chi phí trung bình trên mỗi đơn vị diện tích được định nghĩa là $P(x) = \\dfrac{C(x)}{x}$. Khi diện tích canh tác tăng từ $1$ nghìn $\\text{m}^2$ đến $11$ nghìn $\\text{m}^2$ thì chi phí trung bình luôn giảm.",
          ans: false
        },
        {
          text: "Để đồng vốn đầu tư đạt hiệu quả cao nhất (tỉ lệ lợi nhuận trên tổng chi phí $Q(x) = \\dfrac{L(x)}{C(x)}$ đạt giá trị lớn nhất), HTX cần tính toán để chi phí trung bình trên mỗi đơn vị diện tích $P(x)$ đạt mức thấp nhất.",
          ans: false
        }
      ],
      tf4scores: { s1: 0.1, s2: 0.25, s3: 0.5, s4: 1 },
      sol_text: "a) $L=R-C=(x^2+100x)-(x^2+30x+100)=70x-100$ đúng. b) $70x-100=250 \\Rightarrow x=5$ đúng. c) $P(x)=x+30+\\dfrac{100}{x}$, $P'(x)=1-\\dfrac{100}{x^2}=0\\Rightarrow x=10$, không luôn giảm trên $[1;11]$. d) Tối ưu $Q(x)$ không tương đương min $P(x)$."
    },
    {
      id: 36, subject: "math", diff: "medium", source: "nghean", qtype: "tf4", score: 1.0,
      text: "Cho hàm số $y = -\\dfrac{1}{x-1}$ có đồ thị là đường cong $(C)$.",
      image: "https://i.postimg.cc/gcsMMJMR/14.jpg",
      subqs: [
        {
          text: "Đường thẳng $x=1$ là tiệm cận đứng của đường cong $(C)$.",
          ans: true
        },
        {
          text: "$f'(x) = -\\dfrac{x^2 + 2x}{x-1},\\ \\forall x \\neq 1$.",
          ans: false
        },
        {
          text: "Điểm cực đại của hàm số là $N(2;3)$.",
          ans: false
        },
        {
          text: "Đường cong $(C)$ có dạng như hình vẽ.",
          ans: false
        }
      ],
      tf4scores: { s1: 0.1, s2: 0.25, s3: 0.5, s4: 1 },
      sol_text: "a) Đúng vì mẫu bằng $0$ tại $x=1$. b) $f'(x)=\\dfrac{1}{(x-1)^2}>0$, không phải $-\\dfrac{x^2+2x}{x-1}$, sai. c) Hàm không có cực trị do $f'>0$ với mọi $x\\neq1$, sai. d) Hình vẽ sai (đồ thị đúng phải nằm bên trái và phải tiệm cận đứng)."
    },
    {
      id: 37, subject: "math", diff: "hard", source: "nghean", qtype: "tf4", score: 1.0,
      text: "Trong một mô hình nông nghiệp công nghệ cao, một tấm pin năng lượng mặt trời phẳng được lắp đặt nghiêng sao cho bề mặt của nó nằm trên mặt phẳng $(P): 2x + 2y + z - 6 = 0$ (đơn vị mét). Robot có mặt phát tia laser tại điểm $S(1;1;6)$. Tại một thời điểm tia laser được chiếu theo đường thẳng $\\Delta$ có vectơ chỉ phương $\\vec{u} = (1;-2;-2)$ và chạm vào bề mặt tấm pin tại điểm $M$.",
      subqs: [
        {
          text: "Khoảng cách từ mặt phát tia laser $S$ đến mặt phẳng $(P)$ bằng $\\dfrac{4}{3}$ mét.",
          ans: true
        },
        {
          text: "Điểm $M$ có tọa độ là $(1;1;2)$.",
          ans: false
        },
        {
          text: "Góc $\\alpha$ hợp bởi tia laser $\\Delta$ và mặt phẳng $(P)$ thỏa mãn $\\sin \\alpha = \\dfrac{4}{9}$.",
          ans: true
        },
        {
          text: "Khi vệ sinh, dòng nước chảy trên bề mặt pin theo hướng dốc nhất có một vectơ chỉ phương là $\\vec{v} = (1;1;3)$.",
          ans: false
        }
      ],
      tf4scores: { s1: 0.1, s2: 0.25, s3: 0.5, s4: 1 },
      sol_text: "a) $d(S,(P))=\\dfrac{|2+2+6-6|}{\\sqrt{4+4+1}}=\\dfrac{4}{3}$, đúng. b) $M=S+t\\vec{u}=(1+t;1-2t;6-2t)$, thay vào $(P)$: $2(1+t)+2(1-2t)+(6-2t)-6=0\\Rightarrow t=1$, $M(2;-1;4)\\neq(1;1;2)$, sai. c) $\\sin\\alpha=\\dfrac{|\\vec{u}\\cdot\\vec{n}|}{|\\vec{u}|\\,|\\vec{n}|}=\\dfrac{|2-4-2|}{3\\cdot3}=\\dfrac{4}{9}$, đúng. d) Hướng dốc nhất là hình chiếu của $\\vec{n}$ lên $(P)$, kết quả không phải $(1;1;3)$, sai."
    },
    {
      id: 38, subject: "math", diff: "hard", source: "nghean", qtype: "tf4", score: 1.0,
      text: "Để tuyển chọn thành viên cho Câu lạc bộ Toán - Tin, nhà trường tổ chức một bài thi đánh giá năng lực (thang điểm $100$) cho $100$ học sinh. Kết quả điểm thi được thống kê trong bảng số liệu ghép nhóm gồm $6$ nhóm. An và Bình đạt số điểm lần lượt là $82$ điểm và $69{,}5$ điểm. Ban chủ nhiệm phân loại: \"Xuất sắc\" $\\geq$ phân vị thứ ba; \"Tiềm năng\": từ trung vị đến dưới phân vị thứ ba; \"Chưa đạt\": dưới trung vị. Không có học sinh nào có điểm bằng một trong ba giá trị phân vị.",
      subqs: [
        {
          text: "Khoảng biến thiên của mẫu số liệu ghép nhóm này là $60$.",
          ans: true
        },
        {
          text: "Điểm trung vị của $100$ học sinh tham gia kỳ thi là $71$ điểm.",
          ans: false
        },
        {
          text: "Mặc dù Bình xếp loại chưa đạt, nhưng điểm số của Bình vẫn cao hơn mức điểm trung bình.",
          ans: true
        },
        {
          text: "Ban tổ chức chọn ngẫu nhiên $4$ học sinh để phỏng vấn. Xác suất để nhóm $4$ học sinh được chọn có đầy đủ đại diện của cả $3$ nhóm xếp loại và luôn có mặt An là $\\dfrac{275}{14259}$.",
          ans: true
        }
      ],
      tf4scores: { s1: 0.1, s2: 0.25, s3: 0.5, s4: 1 },
      sol_text: "a) Đúng ($\\max=100, \\min=40$, khoảng biến thiên $=60$). b) Trung vị nằm trong nhóm $[70;80)$, tính ra $70$, không phải $71$, sai. c) Điểm trung bình $\\approx69$, Bình đạt $69{,}5>69$, đúng. d) Tính xác suất có điều kiện ra $\\dfrac{275}{14259}$, đúng."
    },

    // --- Trả lời ngắn (id 39-44) ----------------------------
    {
      id: 39, subject: "math", diff: "hard", source: "nghean", qtype: "short", score: 0.5,
      text: "Một kiến trúc sư thiết kế một hồ bơi vô cực có mặt trên của bể bơi nằm trong mặt phẳng $Oxy$ (đơn vị trục là mét). Một cạnh của hồ bơi dài $12$ m nằm trên trục $Ox$; hai cạnh bên lần lượt nằm trên trục $Oy$ và đường thẳng $x=12$; cạnh còn lại (mặt vô cực) là một phần đồ thị của hàm số $y = -\\dfrac{1}{18}x^2 + \\dfrac{2}{3}x + 4$. Hồ bơi không phẳng mà độ sâu tại điểm $(a;b)$ được tính theo công thức $h(a) = \\dfrac{1}{4}a + 1$ (mét). Thể tích nước tối đa mà hồ bơi có thể chứa là bao nhiêu $\\text{m}^3$?",
      answer: "160", unit: "m^3",
      sol_text: "$V=\\int_{0}^{12} h(x)\\cdot y(x)\\,dx = \\int_{0}^{12}\\left(\\dfrac{x}{4}+1\\right)\\left(-\\dfrac{x^2}{18}+\\dfrac{2x}{3}+4\\right)dx = 160$."
    },
    {
      id: 40, subject: "math", diff: "hard", source: "nghean", qtype: "short", score: 0.5,
      text: "Một nhân viên cứu hộ điều khiển một drone dự kiến bay thẳng từ đỉnh $A$ của tháp thứ nhất đến đỉnh $B$ của tháp thứ hai. Do gặp khu vực nhiễu sóng, drone phải bay từ $A$ đến điểm $P$ trên mặt đất để hạ cánh. Nhân viên mang drone từ $P$ theo hướng Tây $40$ m đến điểm $Q$, sau đó drone bay từ $Q$ lên đỉnh $B$. Đỉnh $A$ cao $100$ m, hình chiếu cách vị trí ban đầu $200$ m về phía Đông và $100$ m về phía Nam. Đỉnh $B$ cao $300$ m, hình chiếu cách vị trí ban đầu $140$ m về phía Tây và $200$ m về phía Nam. Chọn hệ trục $Oxyz$ có gốc tại vị trí người đứng ban đầu, trục $Ox$ hướng Đông, $Oy$ hướng Nam, $Oz$ hướng thẳng đứng lên trên (đơn vị $100$ m). Chọn $P(a;b;c)$ trên mặt đất sao cho tổng quãng đường bay ngắn nhất. Tính $S = 2a + 4b + c$.",
      image: "https://i.postimg.cc/wx2WWvWX/18.jpg",
      answer: "7.5", unit: "",
      sol_text: "Tọa độ: $A(2,1,1)$, $B(-1{,}4,2,3)$. $P(a,b,0)$, $Q(a-0{,}4,b,0)$, $PQ=0{,}4$ cố định. Tối thiểu $AP+QB$ bằng cách lấy $A'$ phản xạ qua mặt đất. Giải ra $a=0{,}5$, $b=1{,}5$, $c=0$. $S=2\\cdot0{,}5+4\\cdot1{,}5+0=7{,}5$."
    },
    {
      id: 41, subject: "math", diff: "medium", source: "nghean", qtype: "short", score: 0.5,
      text: "Một doanh nghiệp phân bổ ngân sách quảng cáo trên Facebook và Google với tổng số tiền không vượt quá $80$ triệu. Chi phí cho Facebook trong khoảng từ $20$ đến $50$ triệu. Chi phí cho Google tối thiểu là $15$ triệu. Số tiền chi cho Google không được vượt quá chi phí cho Facebook. Biết rằng số khách tiếp cận là $4$ nghìn khách cho mỗi triệu chi cho Facebook và $6$ nghìn khách cho mỗi triệu chi cho Google. Hỏi lượng khách tiếp cận lớn nhất là bao nhiêu?",
      answer: "400", unit: "nghìn khách",
      sol_text: "Gọi $x$ (FB), $y$ (Google). Ràng buộc: $x+y\\le80$, $20\\le x\\le50$, $y\\ge15$, $y\\le x$. Hàm mục tiêu $f=4x+6y$ đạt max tại đỉnh $x=y=40$ (thỏa mãn mọi ràng buộc): $f=4\\cdot40+6\\cdot40=400$."
    },
    {
      id: 42, subject: "math", diff: "hard", source: "nghean", qtype: "short", score: 0.5,
      text: "Cho hình chóp $S.ABCD$ có $ABCD$ là hình vuông cạnh bằng $4$. Tam giác $SAB$ cân tại $S$, có diện tích bằng $6$ và nằm trong mặt phẳng vuông góc với mặt phẳng đáy. Tính côsin của góc nhị diện $[S; AC; D]$ (làm tròn kết quả đến hàng phần mười).",
      answer: "-0.4", unit: "",
      sol_text: "Xây dựng hệ trục: $A(0,0,0)$, $B(4,0,0)$, $C(4,4,0)$, $D(0,4,0)$. Tam giác $SAB$ cân tại $S$ có diện tích $6$, suy ra $S(2,0,3)$. Tính góc nhị diện qua hai vectơ pháp tuyến của $(SAC)$ và $(DAC)$. Kết quả $\\cos\\approx-0{,}4$."
    },
    {
      id: 43, subject: "math", diff: "medium", source: "nghean", qtype: "short", score: 0.5,
      text: "Nồng độ thuốc $C$ (mg/ml) trong máu của một bệnh nhân sau $t$ giờ tiêm vào tĩnh mạch được xác định bởi công thức $C(t) = \\dfrac{at}{t^2+4}$ với $a$ là hằng số dương. Biết rằng nồng độ thuốc đạt giá trị lớn nhất là $0{,}5$ mg/ml. Tính giá trị tuyệt đối của tốc độ thay đổi tức thời của nồng độ thuốc tại thời điểm $t = 4$ giờ (đơn vị: mg/ml/h).",
      answer: "0.06", unit: "mg/ml/h",
      sol_text: "$C_{max}=\\dfrac{a}{2}\\cdot\\dfrac{1}{\\sqrt{1}}\\Rightarrow C'(t)=0$ tại $t=2$, $C(2)=\\dfrac{2a}{8}=\\dfrac{a}{4}=0{,}5\\Rightarrow a=2$. $C'(t)=\\dfrac{2(4-t^2)}{(t^2+4)^2}$, $|C'(4)|=\\dfrac{2|4-16|}{(16+4)^2}=\\dfrac{24}{400}=0{,}06$."
    },
    {
      id: 44, subject: "math", diff: "hard", source: "nghean", qtype: "short", score: 0.5,
      text: "Một khóa mã số sử dụng mật khẩu là một dãy gồm $5$ chữ số phân biệt từ $1$ đến $9$. Một mật khẩu được gọi là mạnh nếu thỏa mãn đồng thời: (i) Không có hai chữ số lẻ nào đứng cạnh nhau. (ii) Chữ số đứng sau luôn lớn hơn hoặc luôn nhỏ hơn chữ số đứng trước. Chọn ngẫu nhiên một mật khẩu. Xác suất để chọn được mật khẩu mạnh bằng $a \\cdot 10^{-3}$. Tính giá trị của $a$ (làm tròn đến hàng phần mười).",
      answer: "8.2", unit: "",
      sol_text: "Tổng số mật khẩu: $A_9^5=15120$. Mật khẩu mạnh phải tăng dần hoặc giảm dần (điều kiện ii), tức là chọn $5$ số từ $\\{1,\\dots,9\\}$ rồi sắp xếp tăng hoặc giảm ($2$ cách). Số bộ $5$ số thỏa mãn thêm điều kiện (i) là $62$. Số mật khẩu mạnh $=62\\times2=124$. Xác suất $=\\dfrac{124}{15120}\\approx 0{,}0082=8{,}2\\times10^{-3}$, vậy $a=8{,}2$."
    }

  ] // end questions
}; // end EXAM_DATA
