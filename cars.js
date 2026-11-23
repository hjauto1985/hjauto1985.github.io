// ===== 在庫車輛資料 =====
// 新增一台車：複製一段 { ... }，改內容，照片放 img/ 資料夾
// 封面：預設第 1 張（車頭向左 45 度），要換就加 cover: 3（用第 3 張）
// 賣掉了：把 sold 改成 true（會顯示「已售出」），或直接刪掉那一段
const CARS = [
  {
    id: 98, photos: ["img/car98_1.jpg","img/car98_2.jpg","img/car98_3.jpg","img/car98_4.jpg","img/car98_5.jpg"],
    brand: "Toyota", model: "C-HR 1.2T 尊爵 AWD", year: 2021, km: "18 萬多", price: 49.8, type: "休旅",
    tags: ["認證車", "原鈑件", "TSS 2.0"],
    points: ["TSS 2.0：ACC 全速域跟車、LTA 車道循跡、PCS 預警防護", "iKey 一鍵啟動、摸門感應", "車側盲點偵測、360 環景", "雙區恆溫空調、皮椅", "1.2T 渦輪＋四輪驅動，一年稅金 8,640 元"],
    loan: "銀行可貸 85 萬，還可找 3～40 萬周轉", sold: false
  },
  {
    id: 96, brand: "BMW", model: "X4 20i", year: 2018, km: "14 萬", price: 96.8, type: "休旅",
    tags: ["認證車", "原鈑件"],
    points: ["5AT 智慧系統", "摸門感應、盲點偵測", "電動尾門、雙前電動座椅", "藍牙通訊、原廠氛圍燈"],
    loan: "", sold: false
  },
  {
    id: 92, brand: "BMW", model: "X6 35i", year: 2017, km: "17 萬", price: 69.8, type: "休旅",
    tags: ["認證車", "原鈑件", "原廠紅內裝"],
    points: ["外觀沉穩，開門才是重點：原廠紅內裝", "摸門感應、iKey 一鍵啟動", "盲點偵測、天窗、Apple CarPlay"],
    loan: "可貸 100 萬，車價以外還有一筆資金周轉", sold: false
  },
  {
    id: 88, photos: ["img/car88_5.jpg","img/car88_1.jpg","img/car88_2.jpg","img/car88_3.jpg","img/car88_4.jpg"],
    brand: "Toyota", model: "Altis 1.8", year: 2021, km: "7 萬多", price: 39.8, type: "轎車",
    tags: ["ACC 輔助駕駛"],
    points: ["ACC 主動跟車輔助駕駛", "車內外氣氛好，整理乾淨"],
    loan: "銀行可貸 54 萬", sold: false
  },
  {
    id: 91, photos: ["img/car91_5.jpg","img/car91_1.jpg","img/car91_2.jpg","img/car91_3.jpg","img/car91_4.jpg"],
    brand: "Nissan", model: "Tiida 1.6", year: 2019, km: "9 萬", price: 33.8, type: "掀背",
    tags: ["認證車", "原鈑件"],
    points: ["iKey、摸門感應、LED 日行燈", "盲點偵測、定速巡航、Apple CarPlay", "恆溫空調、皮椅、後座分離倒覆", "倒車雷達、電動折疊後視鏡"],
    loan: "", sold: false
  },
  {
    id: 97, photos: ["img/car97_5.jpg","img/car97_1.jpg","img/car97_2.jpg","img/car97_3.jpg","img/car97_4.jpg"],
    brand: "Mini", model: "Cooper 1.5T", year: 2015, km: "17 萬", price: 32.8, type: "掀背",
    tags: ["有近期維修工單"],
    points: ["近期維修工單齊全，保養狀況看得到"],
    loan: "車貸可貸 45 萬", sold: false
  },
  {
    id: 62, brand: "Benz", model: "C180 1.6", year: 2013, km: "13 萬", price: 29.8, type: "轎車",
    tags: ["原鈑件", "可全額貸"],
    points: ["7 顆氣囊＋ESP＋ABS＋煞車輔助", "W204 車系 Euro NCAP 成人保護五顆星", "C180 車主多是通勤家用、開車溫和，車況更讓人放心"],
    loan: "可全額貸", sold: false
  },
  {
    id: 84, brand: "Toyota", model: "Sienta 1.8", year: 2018, km: "7 萬多", price: 25.5, type: "休旅",
    tags: ["五人座"],
    points: ["五人座，空間好用", "里程低，家用通勤都適合"],
    loan: "", sold: false
  },
  {
    id: 93, brand: "Toyota", model: "Yaris 大鴨 1.5", year: 2014, km: "16 萬", price: 22.8, type: "掀背",
    tags: ["認證車", "免頭款"],
    points: ["古銅色鋁圈、尾翼、後下巴，運動化外觀", "影音主機＋倒車畫面", "內裝維護乾淨，前車主很愛惜"],
    loan: "銀行可貸 26 萬，免頭款，還有餘額可周轉", sold: false
  },
  {
    id: 85, brand: "Mitsubishi", model: "Colt Plus 1.5", year: 2018, km: "12 萬多", price: 19.8, type: "掀背",
    tags: ["原鈑件", "一手車", "免頭款"],
    points: ["第三方認證：原鈑件，無重大事故", "iKey 摸門感應＋一鍵啟動、盲點偵測", "數位儀表板", "行車記錄器＋倒車影像，直接上路"],
    loan: "銀行可貸 26 萬，免頭款，還有餘額可周轉", sold: false
  },
  {
    id: 95, brand: "Nissan", model: "Tiida 1.6", year: 2015, km: "14 萬多", price: 19.8, type: "掀背",
    tags: ["認證車", "原鈑件"],
    points: ["iKey、摸門感應", "後座出風口"],
    loan: "", sold: false
  },
  {
    id: 74, brand: "Mitsubishi", model: "Colt Plus 1.6", year: 2010, km: "20 萬", price: 9.8, type: "掀背",
    tags: ["耗材已預防性更換"],
    points: ["車主長年跑高速公路為主，車況比里程漂亮", "近期更換：水箱＋管路、變速箱油、煞車油", "加裝皮椅套，備用鑰匙已打好", "老實說：天蓬有使用痕跡、右後輪拱漆面較不漂亮"],
    loan: "", sold: false
  },
  {
    id: 94, brand: "Hyundai", model: "Getz 1.3", year: 2005, km: "12 萬多", price: 5.8, type: "掀背",
    tags: ["舊換新系列"],
    points: ["持有稅金便宜", "未來買新車可享有折抵至少 10 萬元補助", "學步車、代步車、買菜車"],
    loan: "", sold: false
  }
];
