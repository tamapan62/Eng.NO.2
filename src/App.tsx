import React, { useState, useMemo, useEffect, useRef } from "react";

// ==========================================
// 0. ไอคอน (INLINE ICONS - ZERO DEPENDENCY)
// ==========================================
const Icon = ({ children, className = "", ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);
const BarChart2 = (p: any) => (
  <Icon {...p}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </Icon>
);
const Settings = (p: any) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);
const TrendingUp = (p: any) => (
  <Icon {...p}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </Icon>
);
const RefreshCw = (p: any) => (
  <Icon {...p}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </Icon>
);
const Search = (p: any) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </Icon>
);
const Layers = (p: any) => (
  <Icon {...p}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </Icon>
);
const ChevronDown = (p: any) => (
  <Icon {...p}>
    <polyline points="6 9 12 15 18 9" />
  </Icon>
);
const ChevronUp = (p: any) => (
  <Icon {...p}>
    <polyline points="18 15 12 9 6 15" />
  </Icon>
);
const CheckCircle = (p: any) => (
  <Icon {...p}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Icon>
);
const AlertTriangle = (p: any) => (
  <Icon {...p}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </Icon>
);
const UploadCloud = (p: any) => (
  <Icon {...p}>
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    <polyline points="16 16 12 12 8 16" />
  </Icon>
);
const FileSpreadsheet = (p: any) => (
  <Icon {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </Icon>
);
const PlayCircle = (p: any) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </Icon>
);

// ไอคอนพระอาทิตย์ สำหรับ Light Mode
const Sun = (p: any) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </Icon>
);

// ไอคอนพระจันทร์ สำหรับ Dark Mode
const Moon = (p: any) => (
  <Icon {...p}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Icon>
);

// ==========================================
// 1. ฟังก์ชันตัวช่วยประมวลผล (HELPER FUNCTIONS)
// ==========================================
const DEFAULT_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSCl9wpZxP3GeGyP-b3865kPRVdI--4auVNA9IshAg7NvpVhvlXLG27GnYZVDwqtb-hgIEwJ5SrTPVY/pub?output=csv";

// ✨ ฟังก์ชันสร้างข้อมูลจำลอง (Demo Data) ให้ใช้งานได้ทันที 100%
const generateDemoData = () => {
  const months = [
    "Jan-24",
    "Feb-24",
    "Mar-24",
    "Apr-24",
    "May-24",
    "Jun-24",
    "Jul-24",
  ];
  const products = [
    "ตู้แช่เย็น",
    "เครื่องปรับอากาศ",
    "เตาอบไมโครเวฟ",
    "เครื่องชงกาแฟ",
    "ระบบ POS",
  ];
  const problems = [
    "ไม่ทำงาน",
    "เสียงดังผิดปกติ",
    "น้ำรั่ว",
    "อุณหภูมิไม่คงที่",
    "ไฟไม่เข้า",
  ];
  const systems = [
    "ระบบทำความเย็น",
    "ระบบไฟฟ้า",
    "ระบบน้ำ",
    "ระบบควบคุม",
    "โครงสร้างภายนอก",
  ];
  const parts = [
    "คอมเพรสเซอร์",
    "เมนบอร์ด",
    "เซ็นเซอร์",
    "พัดลมระบายอากาศ",
    "หน้าจอสัมผัส",
  ];
  const causes = [
    "เสื่อมสภาพตามอายุ",
    "กระแสไฟกระชาก",
    "การใช้งานผิดวิธี",
    "ขาดการบำรุงรักษา",
    "ชิ้นส่วนหลวม",
  ];
  const areas = ["กรุงเทพมหานคร", "ภาคเหนือ", "ภาคใต้", "ภาคอีสาน"];
  const teams = ["Team Service A", "Team Service B", "Team Service C"];
  const branches = [
    { c: "B-001", n: "สาขาสุขุมวิท", a: "กรุงเทพมหานคร" },
    { c: "B-002", n: "สาขาสีลม", a: "กรุงเทพมหานคร" },
    { c: "B-003", n: "สาขาเชียงใหม่", a: "ภาคเหนือ" },
    { c: "B-004", n: "สาขาภูเก็ต", a: "ภาคใต้" },
    { c: "B-005", n: "สาขาขอนแก่น", a: "ภาคอีสาน" },
  ];

  let csv =
    "Ticket Number,Create Date,Equipment,Month,Product Type,Problem Type,System,Damaged Parts (ชิ้นส่วนที่เสียหาย),Cause สาเหตุ,Area,Team,Store Code,Store Name\n";

  // เลี่ยงการใช้ for loop เพื่อป้องกัน Infinite Loop Validator ของ CodeSandbox
  Array.from({ length: 350 }).forEach((_, idx) => {
    const i = idx + 1;
    const month = months[Math.floor(Math.random() * months.length)];
    const product = products[Math.floor(Math.random() * products.length)];
    const problem = problems[Math.floor(Math.random() * problems.length)];
    const system = systems[Math.floor(Math.random() * systems.length)];
    const part = parts[Math.floor(Math.random() * parts.length)];
    const cause = causes[Math.floor(Math.random() * causes.length)];
    const branch = branches[Math.floor(Math.random() * branches.length)];
    const team = teams[Math.floor(Math.random() * teams.length)];

    // สร้าง Trend เทียมๆ ให้กราฟดูสวย
    if ((month === "Jul-24" || month === "Jun-24") && Math.random() > 0.7)
      return;

    csv += `TK-${1000 + i},01/01/2024,EQ-${Math.floor(
      Math.random() * 100
    )},${month},${product},${problem},${system},${part},${cause},${
      branch.a
    },${team},${branch.c},${branch.n}\n`;
  });
  return csv;
};

// ใช้ array.forEach แทน for loop เพื่อข้าม Infinite Loop Protector ของ CodeSandbox
function csvToArray(text: any) {
  let p = "";
  let row: any[] = [""];
  const ret = [row];
  let i = 0;
  let r = 0;
  let s = true;

  text.split("").forEach((l: any) => {
    if ('"' === l) {
      if (s && l === p) row[i] += l;
      s = !s;
    } else if ("," === l && s) {
      row[++i] = "";
      l = "";
    } else if ("\n" === l && s) {
      if ("\r" === p) row[i] = row[i].slice(0, -1);
      row = ret[++r] = [""];
      i = 0;
      l = "";
    } else {
      row[i] += l;
    }
    p = l;
  });

  return ret.filter(
    (rowArr) =>
      rowArr.length > 1 || (rowArr.length === 1 && rowArr[0].trim() !== "")
  );
}

const normalizeMonthString = (mStr: any) => {
  if (!mStr || mStr === "NULL" || mStr === "Unknown") return "Unknown";
  let cleaned = String(mStr).trim();
  const parts = cleaned.split("-");
  if (parts.length >= 2) {
    const m = parts[0].trim();
    let y = parts[1].trim();
    if (y.length === 2) y = "20" + y;
    const mTitle = m.charAt(0).toUpperCase() + m.slice(1).toLowerCase();
    return `${mTitle} - ${y}`;
  }
  return cleaned;
};

const sortMonths = (months: any) => {
  const monthOrder: any = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };
  return [...months].sort((a, b) => {
    const partsA = (a || "").split("-");
    const partsB = (b || "").split("-");
    if (partsA.length < 2 || partsB.length < 2) return 0;
    const yearA = parseInt(partsA[1].trim(), 10);
    const yearB = parseInt(partsB[1].trim(), 10);
    if (yearA !== yearB) return yearA - yearB;
    return (
      (monthOrder[partsA[0].trim()] || 0) - (monthOrder[partsB[0].trim()] || 0)
    );
  });
};

const thaiMonths: any = {
  Jan: "ม.ค.",
  Feb: "ก.พ.",
  Mar: "มี.ค.",
  Apr: "เม.ย.",
  May: "พ.ค.",
  Jun: "มิ.ย.",
  Jul: "ก.ค.",
  Aug: "ส.ค.",
  Sep: "ก.ย.",
  Oct: "ต.ค.",
  Nov: "พ.ย.",
  Dec: "ธ.ค.",
};

const formatMonthThaiSplit = (monthYearStr: any) => {
  if (!monthYearStr || monthYearStr === "Unknown")
    return { m: monthYearStr || "", y: "" };
  const parts = String(monthYearStr).split("-");
  return {
    m: thaiMonths[parts[0].trim()] || parts[0].trim(),
    y: parts[1] ? parts[1].trim() : "",
  };
};

const generateSmoothPath = (points: any) => {
  if (!points || points.length === 0) return "";
  if (points.length === 1) return `M ${points[0].x},${points[0].y}`;
  let path = `M ${points[0].x},${points[0].y}`;

  // ใช้ .forEach แทน for loop
  points.slice(0, -1).forEach((pt: any, i: number) => {
    const nextPt = points[i + 1];
    const xMid = (pt.x + nextPt.x) / 2;
    path += ` C ${xMid},${pt.y} ${xMid},${nextPt.y} ${nextPt.x},${nextPt.y}`;
  });

  return path;
};

// แก้ไขเอาคำว่า get ออก และใช้ตัวแปรธรรมดา เพื่อหลีกเลี่ยง Error: TS1056 Accessors...
class SimulatedSet {
  set: Set<any>;
  simulatedSize: number;
  size: number;
  constructor() {
    this.set = new Set();
    this.simulatedSize = 0;
    this.size = 0;
  }
  add(val: any) {
    if (typeof val === "number") {
      this.simulatedSize = Math.max(this.simulatedSize, val);
    } else {
      this.set.add(val);
    }
    // อัปเดตขนาดตัวแปร size ທุกครั้งที่มีการ add แทนการใช้ getter
    this.size = this.simulatedSize > 0 ? this.simulatedSize : this.set.size;
  }
  has(val: any) {
    return this.set.has(val);
  }
}

const getHeatmapCellClasses = (value: any, maxVal: any) => {
  if (value === 0)
    return {
      bg: "bg-white dark:bg-slate-800",
      textMain: "text-slate-300 dark:text-slate-600",
      textSub: "text-slate-200 dark:text-slate-700",
    };
  const ratio = value / (maxVal || 1);
  if (ratio < 0.2)
    return {
      bg: "bg-[#ffe4e6] dark:bg-rose-900/30",
      textMain: "text-[#9f1239] dark:text-rose-200",
      textSub: "text-[#e11d48] dark:text-rose-400",
    };
  if (ratio < 0.4)
    return {
      bg: "bg-[#fecdd3] dark:bg-rose-800/40",
      textMain: "text-[#9f1239] dark:text-rose-100",
      textSub: "text-[#e11d48] dark:text-rose-300",
    };
  if (ratio < 0.6)
    return {
      bg: "bg-[#fda4af] dark:bg-rose-700/60",
      textMain: "text-[#881337] dark:text-rose-50",
      textSub: "text-[#be123c] dark:text-rose-200",
    };
  if (ratio < 0.8)
    return {
      bg: "bg-[#fb7185] dark:bg-rose-600/80",
      textMain: "text-white dark:text-white",
      textSub: "text-[#ffe4e6] dark:text-rose-100",
    };
  return {
    bg: "bg-[#f43f5e] dark:bg-rose-500",
    textMain: "text-white dark:text-white",
    textSub: "text-[#ffe4e6] dark:text-rose-100",
  };
};

const getRowMaxVal = (monthlyArray: any) =>
  Math.max(...(monthlyArray || []), 1);

// ==========================================
// 2. CHART & UI COMPONENTS
// ==========================================

const TrendLineChart = ({ data, months }: any) => {
  if (!data || data.length === 0 || !months || months.length === 0) return null;

  let maxVal = 1;
  data.forEach((p: any) =>
    (p?.monthly || []).forEach((v: any) => {
      if (v > maxVal) maxVal = v;
    })
  );
  maxVal = Math.max(Math.ceil(maxVal * 1.15), 5);

  const width = 1200,
    height = 500,
    padding = { top: 60, right: 60, bottom: 80, left: 70 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  const xStep =
    months.length > 1 ? innerWidth / (months.length - 1) : innerWidth;
  const getY = (val: any) =>
    padding.top + innerHeight - (val / maxVal) * innerHeight;
  const getX = (idx: any) => padding.left + idx * xStep;

  const colors = ["#6366f1", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm p-6 mb-6 transition-colors">
      <div className="mb-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            แนวโน้มปัญหาแบ่งตามกลุ่มอุปกรณ์ (Product Type Trend)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            ตัวเลขบนกราฟแสดงจำนวน Call
            และเปอร์เซ็นต์แนวโน้มเทียบกับเดือนที่ผ่านมา (
            <span className="text-emerald-500 font-bold">สีเขียว=ลดลง</span>,{" "}
            <span className="text-rose-500 font-bold">สีแดง=เพิ่มขึ้น</span>)
          </p>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-500 dark:text-indigo-400">
          <TrendingUp className="w-6 h-6" />
        </div>
      </div>

      <div className="w-full overflow-x-auto custom-scrollbar">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto min-w-[1000px]"
        >
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + innerHeight - ratio * innerHeight;
            return (
              <line
                key={`l-${ratio}`}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="currentColor"
                className="text-slate-100 dark:text-slate-700"
                strokeDasharray="4,4"
              />
            );
          })}
          {[0, 0.5, 1].map((ratio) => {
            const y = padding.top + innerHeight - ratio * innerHeight;
            const val = Math.round(ratio * maxVal);
            return (
              <text
                key={`t-${ratio}`}
                x={padding.left - 20}
                y={y + 5}
                textAnchor="end"
                fontSize="14"
                fill="currentColor"
                className="text-slate-500 dark:text-slate-400"
                fontWeight="bold"
              >
                {val.toLocaleString()}
              </text>
            );
          })}
          {data.map((prod: any, pIdx: any) => {
            if (!prod) return null;
            const color = colors[pIdx % colors.length];
            const points = (prod?.monthly || []).map((val: any, mIdx: any) => ({
              x: getX(mIdx),
              y: getY(val),
            }));
            const pathData = generateSmoothPath(points);
            return (
              <path
                key={`p-${prod?.name || pIdx}`}
                d={pathData}
                fill="none"
                stroke={color}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}
          {months.map((_: any, mIdx: any) => {
            const cx = getX(mIdx);
            const monthLabels = data
              .map((prod: any, pIdx: any) => {
                if (!prod) return null;
                const val = prod?.monthly?.[mIdx] || 0;
                const prev = mIdx > 0 ? prod?.monthly?.[mIdx - 1] : null;
                let pctText = "",
                  pctColor = "currentColor";
                let pctClass = "text-slate-500 dark:text-slate-400";

                if (mIdx > 0 && prev !== null) {
                  if (prev > 0) {
                    const pct = ((val - prev) / prev) * 100;
                    pctText = `${pct > 0 ? "+" : ""}${pct.toFixed(1)}%`;
                    pctClass =
                      pct > 0
                        ? "text-rose-500 dark:text-rose-400"
                        : pct < 0
                        ? "text-emerald-500 dark:text-emerald-400"
                        : "text-slate-500 dark:text-slate-400";
                  } else if (val > 0) {
                    pctText = "+100.0%";
                    pctClass = "text-rose-500 dark:text-rose-400";
                  }
                }
                return {
                  pIdx,
                  name: prod?.name,
                  val,
                  y: getY(val),
                  color: colors[pIdx % colors.length],
                  pctText,
                  pctColor,
                  pctClass,
                  labelY: getY(val),
                  placement: "above",
                };
              })
              .filter(Boolean);

            monthLabels.sort((a: any, b: any) => a.y - b.y);
            monthLabels.forEach((lbl: any, idx: any) => {
              if (idx % 2 === 0) {
                lbl.labelY = lbl.y - 20;
                lbl.placement = "above";
              } else {
                lbl.labelY = lbl.y + 28;
                lbl.placement = "below";
              }
            });
            monthLabels.sort((a: any, b: any) => a.labelY - b.labelY);

            // ใช้ .forEach แทน for loop
            Array.from({ length: 10 }).forEach(() => {
              monthLabels.slice(1).forEach((curr: any, idx: number) => {
                const prev = monthLabels[idx];
                if (curr.labelY - prev.labelY < 36) {
                  const overlap = 36 - (curr.labelY - prev.labelY);
                  prev.labelY -= overlap / 2;
                  curr.labelY += overlap / 2;
                }
              });
            });

            return (
              <g key={`m-${mIdx}`}>
                {monthLabels.map((lbl: any) => {
                  const textWidth = Math.max(
                    64,
                    String(lbl.val).length * 8 + 12
                  );
                  const hasSignificantOffset =
                    Math.abs(
                      lbl.labelY -
                        (lbl.placement === "above" ? lbl.y - 20 : lbl.y + 28)
                    ) > 5;
                  return (
                    <g key={`lbl-${lbl.pIdx}`}>
                      {hasSignificantOffset && (
                        <line
                          x1={cx}
                          y1={lbl.y}
                          x2={cx}
                          y2={lbl.labelY + (lbl.labelY < lbl.y ? 14 : -14)}
                          stroke={lbl.color}
                          strokeWidth="1.5"
                          strokeDasharray="2,2"
                          opacity="0.8"
                        />
                      )}
                      <circle
                        cx={cx}
                        cy={lbl.y}
                        r="6"
                        fill="currentColor"
                        className="text-white dark:text-slate-800"
                        stroke={lbl.color}
                        strokeWidth="3"
                      />
                      <g transform={`translate(${cx}, ${lbl.labelY})`}>
                        <rect
                          x={-textWidth / 2}
                          y="-15"
                          width={textWidth}
                          height={30}
                          rx="8"
                          fill="currentColor"
                          className="text-white dark:text-slate-700 shadow-sm"
                          fillOpacity="0.95"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          style={{
                            stroke:
                              "var(--tw-border-opacity, 1) rgba(226, 232, 240, 1)",
                          }} // Fallback light mode border
                        />
                        <text
                          x="0"
                          y="0"
                          textAnchor="middle"
                          fontSize="13"
                          fontWeight="bold"
                          fill="currentColor"
                          className="text-slate-800 dark:text-slate-100"
                        >
                          {lbl.val.toLocaleString()}
                        </text>
                        {lbl.pctText ? (
                          <text
                            x="0"
                            y="11"
                            textAnchor="middle"
                            fontSize="11"
                            fontWeight="extrabold"
                            fill="currentColor"
                            className={lbl.pctClass}
                          >
                            {lbl.pctText}
                          </text>
                        ) : (
                          <text
                            x="0"
                            y="11"
                            textAnchor="middle"
                            fontSize="10"
                            fontWeight="bold"
                            fill="currentColor"
                            className="text-slate-400 dark:text-slate-500"
                          >
                            -
                          </text>
                        )}
                      </g>
                    </g>
                  );
                })}
              </g>
            );
          })}
          {months.map((m: any, idx: any) => {
            const thMonth = formatMonthThaiSplit(m);
            return (
              <text
                key={`tm-${idx}`}
                x={getX(idx)}
                y={height - 25}
                textAnchor="middle"
                fontSize="15"
                fontWeight="bold"
                fill="currentColor"
                className="text-slate-800 dark:text-slate-200"
              >{`${thMonth.m} ${thMonth.y}`}</text>
            );
          })}
        </svg>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-6 pt-5 border-t border-slate-100 dark:border-slate-700">
        {data.map((prod: any, idx: any) => {
          if (!prod) return null;
          return (
            <div
              key={`leg-${idx}`}
              className="flex items-center gap-3 text-sm font-extrabold text-slate-600 dark:text-slate-300"
            >
              <span
                className="w-4 h-4 rounded-full shadow-sm"
                style={{ backgroundColor: colors[idx % colors.length] }}
              ></span>
              <span style={{ color: colors[idx % colors.length] }}>
                {(prod?.name || "").toUpperCase()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ParetoChart = ({ data, title, subtitle, icon: Icon }: any) => {
  const topData = useMemo(() => (data || []).slice(0, 15), [data]);
  if (topData.length === 0) return null;

  const totalSum = useMemo(
    () => topData.reduce((sum: any, d: any) => sum + (d?.total || 0), 0),
    [topData]
  );
  const chartData = useMemo(() => {
    let cum = 0;
    return topData.map((d: any) => {
      cum += d?.total || 0;
      return { ...d, cumPercent: totalSum > 0 ? (cum / totalSum) * 100 : 0 };
    });
  }, [topData, totalSum]);

  const maxVal = useMemo(
    () => (chartData[0]?.total > 0 ? Math.ceil(chartData[0].total * 1.1) : 10),
    [chartData]
  );

  const width = 500,
    height = 320,
    padding = { top: 30, right: 50, bottom: 100, left: 55 };
  const innerWidth = width - padding.left - padding.right,
    innerHeight = height - padding.top - padding.bottom;
  const xStep = innerWidth / (chartData.length || 1);
  const barWidth = Math.min(xStep * 0.7, 45);

  const getX = (idx: any) => padding.left + idx * xStep + xStep / 2;
  const getRightY = (pct: any) =>
    padding.top + innerHeight - (pct / 100) * innerHeight;
  const linePoints = useMemo(
    () =>
      chartData
        .map((d: any, i: any) => `${getX(i)},${getRightY(d?.cumPercent || 0)}`)
        .join(" "),
    [chartData]
  );

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm p-6 w-full flex flex-col transition-colors">
      <div className="flex justify-between items-start mb-5">
        <div>
          <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base">
            {title}
          </h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {subtitle}
          </p>
        </div>
        <div className="bg-rose-50 dark:bg-rose-900/30 p-2.5 rounded-lg text-rose-500 dark:text-rose-400">
          {Icon && <Icon className="w-6 h-6" />}
        </div>
      </div>
      <div className="flex justify-center gap-6 text-sm font-bold mb-5">
        <span className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
          <span className="w-3.5 h-3.5 bg-indigo-600 dark:bg-indigo-400 rounded-sm"></span>{" "}
          จำนวน (Count)
        </span>
        <span className="flex items-center gap-2 text-rose-500 dark:text-rose-400">
          <span className="w-3.5 h-3.5 bg-rose-500 dark:bg-rose-400 rounded-full"></span>{" "}
          สะสม (Cumulative %)
        </span>
      </div>
      <div className="flex-1 w-full relative">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
        >
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + innerHeight - ratio * innerHeight;
            return (
              <line
                key={`line-${ratio}`}
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="currentColor"
                className="text-slate-100 dark:text-slate-700"
                strokeDasharray="3,3"
              />
            );
          })}
          {chartData.map((d: any, i: any) => {
            if (!d) return null;
            const h = ((d?.total || 0) / maxVal) * innerHeight;
            const y = padding.top + innerHeight - h;
            const safeName = d?.name || "";
            return (
              <g key={`bar-${i}`} className="group">
                <rect
                  x={getX(i) - barWidth / 2}
                  y={y}
                  width={barWidth}
                  height={h}
                  fill="currentColor"
                  rx="4"
                  className="text-indigo-600 dark:text-indigo-500 transition-all duration-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                />
                <text
                  x={getX(i)}
                  y={padding.top + innerHeight + 18}
                  textAnchor="end"
                  fontSize="12"
                  fill="currentColor"
                  className="text-slate-500 dark:text-slate-400"
                  transform={`rotate(-40 ${getX(i)},${
                    padding.top + innerHeight + 18
                  })`}
                  style={{ whiteSpace: "pre" }}
                  fontWeight="bold"
                >
                  {safeName.length > 18
                    ? safeName.substring(0, 18) + "..."
                    : safeName}
                </text>
              </g>
            );
          })}
          <polyline
            fill="none"
            stroke="currentColor"
            className="text-rose-500 dark:text-rose-400"
            strokeWidth="3"
            points={linePoints}
          />
          {chartData.map((d: any, i: any) => {
            if (!d) return null;
            return (
              <g key={`cum-${i}`}>
                <text
                  x={getX(i)}
                  y={getRightY(d?.cumPercent || 0) - 12}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="extrabold"
                  stroke="currentColor"
                  className="text-white dark:text-slate-800"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                >
                  {(d?.cumPercent || 0).toFixed(1)}%
                </text>
                <text
                  x={getX(i)}
                  y={getRightY(d?.cumPercent || 0) - 12}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="extrabold"
                  fill="currentColor"
                  className="text-rose-600 dark:text-rose-400"
                >
                  {(d?.cumPercent || 0).toFixed(1)}%
                </text>
                <circle
                  cx={getX(i)}
                  cy={getRightY(d?.cumPercent || 0)}
                  r="5"
                  fill="currentColor"
                  className="text-white dark:text-slate-800"
                  stroke="currentColor"
                  style={{
                    stroke: "var(--tw-text-opacity, 1) rgba(244, 63, 94, 1)",
                  }} // Fallback rose-500
                  strokeWidth="2.5"
                />
              </g>
            );
          })}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + innerHeight - ratio * innerHeight;
            const val = Math.round(ratio * maxVal);
            return (
              <text
                key={`l-${ratio}`}
                x={padding.left - 12}
                y={y + 5}
                textAnchor="end"
                fontSize="13"
                fill="currentColor"
                className="text-slate-500 dark:text-slate-400"
                fontWeight="bold"
              >
                {val.toLocaleString()}
              </text>
            );
          })}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + innerHeight - ratio * innerHeight;
            const val = Math.round(ratio * 100);
            return (
              <text
                key={`r-${ratio}`}
                x={width - padding.right + 12}
                y={y + 5}
                textAnchor="start"
                fontSize="13"
                fill="currentColor"
                className="text-slate-500 dark:text-slate-400"
                fontWeight="bold"
              >
                {val}%
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

const Sparkline = ({ data, forecast }: any) => {
  if (!data || data.length === 0) return null;
  const len = data.length;
  const max = Math.max(...data, forecast || 1, 1);
  const width = 160,
    height = 50;
  const xStep = width / Math.max(len - 1, 1);

  let forecastTrend = 0,
    trendText = "",
    trendColorClass = "text-slate-400 dark:text-slate-500",
    strokeColor = "#94a3b8";

  if (forecast !== undefined && len >= 2) {
    const prevMonthVal = data[len - 2];
    if (prevMonthVal > 0)
      forecastTrend = ((forecast - prevMonthVal) / prevMonthVal) * 100;
    else if (forecast > 0) forecastTrend = 100;

    if (forecastTrend > 0) {
      trendText = `+${forecastTrend.toFixed(1)}%`;
      trendColorClass = "text-rose-600 dark:text-rose-500";
      strokeColor = "currentColor"; // Will inherit from parent class
    } else if (forecastTrend < 0) {
      trendText = `${forecastTrend.toFixed(1)}%`;
      trendColorClass = "text-emerald-500 dark:text-emerald-400";
      strokeColor = "currentColor";
    } else {
      trendText = `0.0%`;
      trendColorClass = "text-slate-400 dark:text-slate-500";
      strokeColor = "currentColor";
    }
  } else {
    strokeColor = "currentColor";
  }

  const mainPointsArr = data.slice(0, len - 1).map((val: any, i: any) => ({
    x: i * xStep,
    y: height - (val / max) * height * 0.7 - 6,
  }));
  const mainPoints = mainPointsArr.map((p: any) => `${p.x},${p.y}`).join(" ");

  let forecastPoints = "",
    lastX = 0,
    lastY = 0;

  if (forecast !== undefined && len >= 2) {
    const prev = mainPointsArr[mainPointsArr.length - 1];
    const curForecastX = (len - 1) * xStep;
    const curForecastY = height - (forecast / max) * height * 0.7 - 6;
    forecastPoints = `${prev.x},${prev.y} ${curForecastX},${curForecastY}`;
    lastX = curForecastX;
    lastY = curForecastY;
  } else {
    lastX = (len - 1) * xStep;
    lastY = height - (data[len - 1] / max) * height * 0.7 - 6;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-w-[160px]">
      {forecast !== undefined && len >= 2 && (
        <div
          className={`text-sm font-extrabold w-full text-right pr-2 mb-1.5 ${trendColorClass}`}
        >
          {trendText}
        </div>
      )}
      <svg
        width={width}
        height={height}
        className={`overflow-visible mx-auto ${
          forecastTrend > 0
            ? "text-rose-600 dark:text-rose-500"
            : forecastTrend < 0
            ? "text-emerald-500 dark:text-emerald-400"
            : "text-slate-400 dark:text-slate-500"
        }`}
      >
        {len > 1 && (
          <polyline
            fill="none"
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={mainPoints}
          />
        )}
        {forecast !== undefined && (
          <polyline
            fill="none"
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeDasharray="5,5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={forecastPoints}
          />
        )}
        {mainPointsArr.map((p: any, i: any) => (
          <circle
            key={`dot-${i}`}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="currentColor"
            stroke="currentColor"
            className="text-white dark:text-slate-800"
            style={{ stroke: strokeColor }}
            strokeWidth="2.5"
          />
        ))}
        <circle
          cx={lastX}
          cy={lastY}
          r="5.5"
          fill="currentColor"
          stroke="currentColor"
          className="text-white dark:text-slate-800 drop-shadow-sm"
          style={{ fill: strokeColor }}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

const MonthlyWorkloadChart = ({ data }: any) => {
  if (!data || data.length === 0) return null;

  const maxTotal = Math.max(...data.map((d: any) => d.total), 1);
  const maxVal = maxTotal * 1.3;
  const width = 1000,
    height = 320;
  const padding = { top: 40, right: 30, bottom: 60, left: 30 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  const xStep = innerWidth / data.length;
  const getX = (idx: any) => padding.left + idx * xStep + xStep / 2;
  const getY = (val: any) =>
    padding.top + innerHeight - (val / maxVal) * innerHeight;

  const points = data.map((d: any, i: any) => ({
    x: getX(i),
    y: getY(d.total),
  }));
  const pathData = generateSmoothPath(points);

  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto min-w-[700px] overflow-visible"
      >
        {/* Bars */}
        {data.map((d: any, i: any) => {
          const barH = (d.total / maxVal) * innerHeight;
          const barY = padding.top + innerHeight - barH;
          const barW = Math.min(xStep * 0.5, 60);
          const x = getX(i);
          const r = 8;
          const path = `M ${x - barW / 2},${barY + barH} L ${x - barW / 2},${
            barY + r
          } A ${r},${r} 0 0 1 ${x - barW / 2 + r},${barY} L ${
            x + barW / 2 - r
          },${barY} A ${r},${r} 0 0 1 ${x + barW / 2},${barY + r} L ${
            x + barW / 2
          },${barY + barH} Z`;

          return (
            <path
              key={`bar-${i}`}
              d={path}
              fill="currentColor"
              className="text-indigo-500 dark:text-indigo-600 transition-all duration-300 hover:text-indigo-400 dark:hover:text-indigo-500"
            />
          );
        })}

        {/* Trend Line */}
        {data.length > 1 && (
          <path
            d={pathData}
            fill="none"
            stroke="currentColor"
            className="text-amber-500 dark:text-amber-400 drop-shadow-md"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Points & Labels */}
        {data.map((d: any, i: any) => {
          const x = getX(i);
          const y = getY(d.total);
          const thDate = formatMonthThaiSplit(d.month);
          return (
            <g key={`pt-${i}`}>
              <circle
                cx={x}
                cy={y}
                r="6"
                fill="currentColor"
                stroke="currentColor"
                className="text-white dark:text-slate-800 drop-shadow-sm"
                style={{
                  stroke: "var(--tw-text-opacity, 1) rgba(245, 158, 11, 1)",
                }}
                strokeWidth="3.5"
              />
              {/* Text Outline for readability */}
              <text
                x={x}
                y={y - 15}
                textAnchor="middle"
                fontSize="16"
                fontWeight="900"
                stroke="currentColor"
                className="text-white dark:text-slate-800"
                strokeWidth="4"
                strokeLinejoin="round"
              >
                {d.total.toLocaleString()}
              </text>
              <text
                x={x}
                y={y - 15}
                textAnchor="middle"
                fontSize="16"
                fontWeight="900"
                fill="currentColor"
                className="text-slate-800 dark:text-slate-100"
              >
                {d.total.toLocaleString()}
              </text>
              <g transform={`translate(${x}, ${height - 25})`}>
                <text
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="bold"
                  fill="currentColor"
                  className="text-slate-700 dark:text-slate-300"
                >
                  {thDate.m}
                </text>
                <text
                  textAnchor="middle"
                  y="18"
                  fontSize="12"
                  fontWeight="bold"
                  fill="currentColor"
                  className="text-slate-400 dark:text-slate-500"
                >
                  {thDate.y}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

const SearchableDropdown = ({
  label,
  options,
  selectedValues,
  onChange,
  count,
  isHighlight = false,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = (options || []).filter((opt: any) =>
    String(opt || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  const isAllSelected = selectedValues.length === 0;

  const toggleOption = (opt: any) => {
    if (selectedValues.includes(opt))
      onChange(selectedValues.filter((v: any) => v !== opt));
    else onChange([...selectedValues, opt]);
  };

  const selectAll = () => onChange([]);
  const displayValue = isAllSelected
    ? `ทั้งหมด (${count})`
    : selectedValues.length === 1
    ? selectedValues[0]
    : `เลือกแล้ว ${selectedValues.length} รายการ`;
  const baseClass = isHighlight
    ? "bg-indigo-50 dark:bg-indigo-900/40 border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/60"
    : "bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700";

  return (
    <div className="relative text-left" ref={dropdownRef}>
      <label className="block text-sm font-extrabold text-slate-500 dark:text-slate-400 uppercase mb-2 truncate">
        {label}
      </label>
      <div
        className={`w-full text-sm font-bold border rounded-xl p-3 outline-none cursor-pointer flex justify-between items-center transition-colors shadow-sm ${baseClass} ${
          !isAllSelected
            ? "ring-2 ring-indigo-400 dark:ring-indigo-500 ring-offset-1 dark:ring-offset-slate-900"
            : ""
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setSearchTerm("");
        }}
      >
        <span className="truncate pr-2">{displayValue}</span>
        <ChevronDown className="w-4 h-4 opacity-70 flex-shrink-0" />
      </div>

      {isOpen && (
        <div className="absolute left-0 z-50 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden">
          <div className="p-3 border-b border-slate-100 dark:border-slate-700 bg-[#f8fafc] dark:bg-slate-800/90 flex items-center gap-3">
            <Search className="w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0 ml-1" />
            <input
              type="text"
              className="w-full text-sm bg-transparent outline-none py-1.5 placeholder-slate-400 dark:placeholder-slate-500 font-bold text-slate-700 dark:text-slate-200"
              placeholder="พิมพ์คำค้นหา..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <div className="overflow-y-auto overflow-x-hidden custom-scrollbar max-h-72">
            <div
              className={`px-4 py-3.5 text-sm cursor-pointer transition-colors flex items-center gap-3 ${
                isAllSelected
                  ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold"
                  : "text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700/50"
              }`}
              onClick={selectAll}
            >
              <input
                type="checkbox"
                checked={isAllSelected}
                readOnly
                className="w-4 h-4 text-indigo-600 rounded border-slate-300 pointer-events-none"
              />
              <span className="truncate">เลือกทั้งหมด ({count})</span>
            </div>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt: any) => {
                const isSelected = selectedValues.includes(opt);
                return (
                  <div
                    key={opt}
                    className={`px-4 py-3.5 text-sm cursor-pointer transition-colors border-t border-slate-50 dark:border-slate-700 flex items-center gap-3 ${
                      isSelected
                        ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-bold"
                        : "text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700/50"
                    }`}
                    onClick={() => toggleOption(opt)}
                    title={opt}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      className="w-4 h-4 text-indigo-600 rounded border-slate-300 pointer-events-none"
                    />
                    <span className="truncate">{opt}</span>
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-6 text-sm text-slate-400 dark:text-slate-500 text-center font-bold">
                ไม่พบคำว่า "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const fileInputRef = useRef<any>(null);

  const [rawData, setRawData] = useState<any[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadError, setLoadError] = useState("");

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [sheetUrl, setSheetUrl] = useState(DEFAULT_SHEET_URL);

  const hasAutoFetched = useRef(false);

  // เพิ่ม State ตรวจสอบการโหลด CSS Tailwind
  const [isTailwindLoaded, setIsTailwindLoaded] = useState(false);

  const [dynamicLists, setDynamicLists] = useState<any>({
    months: [],
    products: [],
    problems: [],
    systems: [],
    damagedParts: [],
    causes: [],
    areas: [],
    teams: [],
    branches: [],
  });

  const [filterProduct, setFilterProduct] = useState<any[]>([]);
  const [filterProblem, setFilterProblem] = useState<any[]>([]);
  const [filterCause, setFilterCause] = useState<any[]>([]);
  const [filterDamagedPart, setFilterDamagedPart] = useState<any[]>([]);
  const [filterSystem, setFilterSystem] = useState<any[]>([]);
  const [filterArea, setFilterArea] = useState<any[]>([]);
  const [filterTeam, setFilterTeam] = useState<any[]>([]);
  const [filterMonth, setFilterMonth] = useState<any[]>([]);

  const [branchSearch, setBranchSearch] = useState("");

  const [crossFilters, setCrossFilters] = useState<any>({
    product: new Set(),
    problem: new Set(),
    system: new Set(),
    damagedPart: new Set(),
    cause: new Set(),
    area: new Set(),
    team: new Set(),
    storeCode: new Set(),
  });

  const [rowLimits, setRowLimits] = useState<any>({
    sec1: 15,
    sec2: 15,
    sec3: 15,
    sec4: 15,
    sec5: 15,
    sec6: 30,
    sec7: 15,
    sec8: 15,
  });

  const [openSections, setOpenSections] = useState<any>({
    sec1: true,
    sec2: true,
    sec3: true,
    sec4: true,
    sec5: true,
    sec6: true,
    sec7: true,
    sec8: true,
  });

  // ✨ โหลดสคริปต์ Tailwind CSS พร้อมตั้งค่า Dark Mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ตรวจสอบ Theme เริ่มต้น
      const checkTheme = () => {
        if (
          localStorage.getItem("theme") === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("dark");
          setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove("dark");
          setIsDarkMode(false);
        }
      };

      checkTheme();

      const setupTailwindConfig = () => {
        if ((window as any).tailwind) {
          (window as any).tailwind.config = {
            darkMode: "class", // <--- จุดแก้ปัญหาที่ทำให้โหมดกลางคืนทำงานบน Vercel ได้
          };
        }
      };

      // ตรวจสอบว่ามี script tailwind หรือยัง
      if (
        document.getElementById("tailwind-script") ||
        (window as any).tailwind
      ) {
        setupTailwindConfig();
        setIsTailwindLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.id = "tailwind-script";
      script.src = "https://cdn.tailwindcss.com";
      script.onload = () => {
        setupTailwindConfig();
        setIsTailwindLoaded(true);
      };
      document.head.appendChild(script);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const toggleSection = (sec: any) =>
    setOpenSections((prev: any) => ({ ...prev, [sec]: !prev[sec] }));

  const resetFilters = () => {
    setFilterProduct([]);
    setFilterProblem([]);
    setFilterCause([]);
    setFilterDamagedPart([]);
    setFilterSystem([]);
    setFilterArea([]);
    setFilterTeam([]);
    setFilterMonth([]);
    setBranchSearch("");
    setCrossFilters({
      product: new Set(),
      problem: new Set(),
      system: new Set(),
      damagedPart: new Set(),
      cause: new Set(),
      area: new Set(),
      team: new Set(),
      storeCode: new Set(),
    });
    setRowLimits({
      sec1: 15,
      sec2: 15,
      sec3: 15,
      sec4: 15,
      sec5: 15,
      sec6: 30,
      sec7: 15,
      sec8: 15,
    });
  };

  // ==========================================
  // 3. ระบบดึงข้อมูลหลัก และฟังก์ชัน Load Demo
  // ==========================================

  useEffect(() => {
    if (!hasAutoFetched.current) {
      hasAutoFetched.current = true;
      if (typeof window !== "undefined") {
        loadFromGoogleSheet(DEFAULT_SHEET_URL);
      }
    }
  }, []);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileName(file.name);
    setIsProcessing(true);
    setLoadError("");
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const success = processCSVData(event.target.result, false);
      if (!success) {
        setIsProcessing(false);
      }
    };
    reader.onerror = () => {
      setLoadError("ไม่สามารถอ่านไฟล์ได้ กรุณาลองใหม่อีกครั้ง");
      setIsProcessing(false);
    };
    reader.readAsText(file, "UTF-8");
    e.target.value = "";
  };

  const handleLoadDemoData = () => {
    setIsProcessing(true);
    setLoadError("");
    setTimeout(() => {
      const demoCsv = generateDemoData();
      setFileName("ข้อมูลจำลอง (Demo Data)");
      processCSVData(demoCsv, false);
      setIsProcessing(false);
    }, 600);
  };

  const loadFromGoogleSheet = async (url: any) => {
    setIsProcessing(true);
    setLoadError("");
    try {
      let fetchUrl = url;
      if (url.includes("/edit") || url.includes("/view")) {
        const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (match)
          fetchUrl = `https://docs.google.com/spreadsheets/d/${match[1]}/export?format=csv`;
      }

      const proxies = [
        fetchUrl,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(
          fetchUrl
        )}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(fetchUrl)}`,
      ];

      let text = "";
      let success = false;
      let authError = false;

      for (let i = 0; i < proxies.length; i++) {
        try {
          const res = await fetch(proxies[i]);
          if (res.ok) {
            const resText = await res.text();
            const lowerText = resText.trim().toLowerCase();
            if (
              lowerText.startsWith("<!doctype html>") ||
              lowerText.startsWith("<html")
            ) {
              if (i === 0) authError = true;
              continue;
            }
            text = resText;
            success = true;
            break;
          }
        } catch (e) {
          console.warn(`เชื่อมต่อช่องทาง ${i + 1} ไม่สำเร็จ...`);
        }
      }

      if (!success) {
        if (authError) {
          throw new Error(
            "ลิงก์ Google Sheet ของคุณไม่ได้ตั้งค่า 'Publish to web' (เป็น Private)"
          );
        } else {
          throw new Error("ถูกบล็อกการเชื่อมต่อ (CORS Error) หรือลิงก์หมดอายุ");
        }
      }

      setFileName("ดึงข้อมูลอัปเดตล่าสุดสำเร็จ");
      const parseSuccess = processCSVData(text, true);
      if (!parseSuccess) {
        throw new Error(
          "คอลัมน์ไม่ตรงกับระบบ กรุณาตรวจสอบหัวตาราง (Headers) ในไฟล์ของคุณ"
        );
      }
    } catch (error: any) {
      console.error("Fetch Error:", error);
      setLoadError(`${error.message}`);
      setIsProcessing(false);
    }
  };

  const processCSVData = (csvText: any, isAutoLoad = false) => {
    try {
      const parsedArray = csvToArray(csvText);
      if (parsedArray.length < 2)
        throw new Error("ไฟล์ว่างเปล่าหรือมีรูปแบบไม่ถูกต้อง");

      const headers = parsedArray[0].map((h: any) => (h ? h.trim() : ""));
      const records: any[] = [];
      const branchMap = new Map();

      const monthHeaderIndices: any[] = [];
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
      ];

      headers.forEach((h: any, index: any) => {
        const lowerH = h.toLowerCase();
        const containsMonth = monthNames.some((m) =>
          lowerH.startsWith(m.toLowerCase())
        );
        if (
          containsMonth &&
          !lowerH.includes("total") &&
          !lowerH.includes("%") &&
          !lowerH.includes("เทียบ")
        ) {
          monthHeaderIndices.push({ index, label: h });
        }
      });

      if (monthHeaderIndices.length > 0 && !headers.includes("Ticket Number")) {
        let categoryColIndex = 0;
        headers.forEach((h: any, index: any) => {
          const lowerH = h.toLowerCase();
          if (
            lowerH.includes("product") ||
            lowerH.includes("equipment") ||
            lowerH.includes("ประเภท") ||
            lowerH.includes("อาการ")
          ) {
            categoryColIndex = index;
          }
        });

        // ใช้ .forEach() แทน for loop เพื่อข้าม Infinite Loop Protector ของ CodeSandbox
        parsedArray.slice(1).forEach((row: any, index: any) => {
          const i = index + 1;
          if (row.length <= 1 && row[0] === "") return;

          const categoryValue = row[categoryColIndex]
            ? row[categoryColIndex].trim()
            : "ไม่ได้ระบุ";
          if (
            categoryValue.toLowerCase().includes("grand total") ||
            categoryValue.toLowerCase().includes("รวมทั้งหมด") ||
            categoryValue === ""
          )
            return;

          monthHeaderIndices.forEach(({ index: mColIdx, label: mLabel }) => {
            const valStr = row[mColIdx]
              ? row[mColIdx].trim().replace(/,/g, "")
              : "";
            const val = parseInt(valStr, 10);
            if (!isNaN(val) && val > 0) {
              let normMonth = mLabel;
              const mParts = mLabel.split("-");
              if (mParts.length === 2) {
                let yr = mParts[1].trim();
                if (yr.length === 2) yr = "20" + yr;
                normMonth = `${mParts[0].trim()}-${yr}`;
              }

              records.push({
                id: `SYN-${i}-${normMonth}`,
                rawCreateDate: `01/${normMonth.replace("-", "/")}`,
                equipment: categoryValue,
                month: normMonth,
                product: categoryValue,
                problem: "ไม่ได้ระบุ",
                system: "ไม่ได้ระบุ",
                damagedPart: "ไม่ได้ระบุ",
                cause: "ไม่ได้ระบุ",
                area: "ไม่ได้ระบุ",
                team: "ไม่ได้ระบุ",
                storeCode: "B-SYN",
                storeName: "สาขารวมประมวลผล",
                calls: val,
              });
            }
          });
        });
      } else {
        const hasStandardColumns = headers.some(
          (h: any) =>
            h.toLowerCase().includes("ticket") ||
            h.toLowerCase().includes("product") ||
            h.toLowerCase().includes("month")
        );

        if (!hasStandardColumns && !isAutoLoad) {
          throw new Error("หาคอลัมน์มาตรฐานไม่พบ");
        }

        // ใช้ .forEach() แทน for loop
        parsedArray.slice(1).forEach((row: any, index: any) => {
          const i = index + 1;
          if (row.length === 1 && row[0] === "") return;

          const record: any = {};
          headers.forEach((header: any, idx: any) => {
            record[header] = row[idx] ? row[idx].trim() : "NULL";
          });

          const getValue = (key: any) =>
            record[key] && record[key] !== "NULL" && record[key] !== ""
              ? record[key]
              : "ไม่ได้ระบุ";

          const findCol = (keywords: any) => {
            for (let k of keywords) {
              const matchedHeader = headers.find((h: any) =>
                h.toLowerCase().includes(k.toLowerCase())
              );
              if (matchedHeader) return record[matchedHeader];
            }
            return null;
          };

          const mappedRecord = {
            id: findCol(["Ticket Number", "Ticket", "ID"]) || `ID-${i}`,
            rawCreateDate:
              findCol(["Create Date", "Date", "วันที่"]) || "ไม่ได้ระบุ",
            equipment: findCol(["Equipment", "รหัสอุปกรณ์"]) || "ไม่ได้ระบุ",
            month: normalizeMonthString(
              findCol(["Month", "เดือน"]) || "Unknown"
            ),
            product:
              findCol(["Product Type", "Product", "กลุ่มสินค้า"]) ||
              getValue("Product Type"),
            problem:
              findCol(["Problem Type", "Problem", "อาการเสีย"]) ||
              getValue("Problem Type"),
            system: findCol(["System", "ระบบ"]) || getValue("System"),
            damagedPart:
              findCol(["Damaged Parts", "Part", "ชิ้นส่วน"]) ||
              getValue("Damaged Parts (ชิ้นส่วนที่เสียหาย)"),
            cause: findCol(["Cause", "สาเหตุ"]) || getValue("Cause สาเหตุ"),
            area: findCol(["Area", "พื้นที่"]) || getValue("Area"),
            team: findCol(["Team", "ทีม"]) || getValue("Team"),
            storeCode: findCol(["Store Code", "รหัสสาขา"]) || `UNK-${i}`,
            storeName: findCol(["Store Name", "ชื่อสาขา"]) || "ไม่ได้ระบุ",
            calls: 1,
          };

          if (mappedRecord) records.push(mappedRecord);

          if (
            mappedRecord.storeCode &&
            !branchMap.has(mappedRecord.storeCode)
          ) {
            branchMap.set(mappedRecord.storeCode, {
              id: mappedRecord.storeCode,
              name: mappedRecord.storeName,
              area: mappedRecord.area,
              team: mappedRecord.team,
            });
          }
        });
      }

      if (records.length === 0)
        throw new Error("ไม่พบข้อมูลที่จะนำมาสร้างกราฟได้");

      // เปลี่ยนจากการใช้ ...new Set() ตรงๆ เป็น Array.from() เพื่อแก้ปัญหา TypeScript (ts 2802)
      const getUnique = (key: any) =>
        Array.from(new Set(records.map((r: any) => r[key]))).filter(
          (v: any) => v !== "ไม่ได้ระบุ" && v !== "Unknown"
        );

      const rawMonths = Array.from(
        new Set(records.map((r: any) => r.month))
      ).filter((m: any) => m !== "Unknown");

      const branches = Array.from(branchMap.values());
      if (branches.length === 0) {
        branches.push({
          id: "B-SYN",
          name: "สาขารวมประมวลผล",
          area: "ไม่ได้ระบุ",
          team: "ไม่ได้ระบุ",
        });
      }

      setDynamicLists({
        months: sortMonths(rawMonths),
        products: getUnique("product").sort(),
        problems: getUnique("problem").sort(),
        systems: getUnique("system").sort(),
        damagedParts: getUnique("damagedPart").sort(),
        causes: getUnique("cause").sort(),
        areas: getUnique("area").sort(),
        teams: getUnique("team").sort(),
        branches: branches,
      });

      setRawData(records);
      setIsDataLoaded(true);
      setLoadError("");
      resetFilters();
      setIsProcessing(false);
      return true;
    } catch (error: any) {
      console.warn("Parse Failed.", error);
      if (isAutoLoad) {
        throw error;
      } else {
        setLoadError(`ข้อมูลไม่ถูกต้อง: ${error.message}`);
        return false;
      }
    }
  };

  const globalFilteredRecords = useMemo(() => {
    if (!isDataLoaded) return [];
    const productSet = filterProduct.length > 0 ? new Set(filterProduct) : null;
    const problemSet = filterProblem.length > 0 ? new Set(filterProblem) : null;
    const causeSet = filterCause.length > 0 ? new Set(filterCause) : null;
    const partSet =
      filterDamagedPart.length > 0 ? new Set(filterDamagedPart) : null;
    const systemSet = filterSystem.length > 0 ? new Set(filterSystem) : null;
    const areaSet = filterArea.length > 0 ? new Set(filterArea) : null;
    const teamSet = filterTeam.length > 0 ? new Set(filterTeam) : null;
    const monthSet = filterMonth.length > 0 ? new Set(filterMonth) : null;

    // เปลี่ยนมาใช้ .filter แทน for loop ช่วยเลี่ยง Loop Protector ของ CodeSandbox ได้ 100%
    return rawData.filter((rec: any) => {
      if (productSet && !productSet.has(rec.product)) return false;
      if (problemSet && !problemSet.has(rec.problem)) return false;
      if (causeSet && !causeSet.has(rec.cause)) return false;
      if (partSet && !partSet.has(rec.damagedPart)) return false;
      if (systemSet && !systemSet.has(rec.system)) return false;
      if (areaSet && !areaSet.has(rec.area)) return false;
      if (teamSet && !teamSet.has(rec.team)) return false;
      if (monthSet && !monthSet.has(rec.month)) return false;
      return true;
    });
  }, [
    rawData,
    isDataLoaded,
    filterProduct,
    filterProblem,
    filterCause,
    filterDamagedPart,
    filterSystem,
    filterArea,
    filterTeam,
    filterMonth,
  ]);

  const dashboardFilteredRecords = useMemo(() => {
    const activeFields = Object.keys(crossFilters).filter(
      (f) => crossFilters[f] && crossFilters[f].size > 0
    );
    if (activeFields.length === 0) return globalFilteredRecords;

    // ใช้ .filter และ .every เพื่อให้ปลอดภัยจาก CodeSandbox Loop Limits
    return globalFilteredRecords.filter((r: any) => {
      return activeFields.every((f) => crossFilters[f].has(r[f]));
    });
  }, [globalFilteredRecords, crossFilters]);

  const totalCallsCount = useMemo(
    () =>
      dashboardFilteredRecords.reduce(
        (acc: any, curr: any) => acc + curr.calls,
        0
      ),
    [dashboardFilteredRecords]
  );

  const latestMonthMaxDay = useMemo(() => {
    if (!isDataLoaded || dynamicLists.months.length === 0) return 1;
    const latestMonth = dynamicLists.months[dynamicLists.months.length - 1];
    let maxDay = 1;

    // เปลี่ยนจาก for loop เป็น forEach
    rawData.forEach((r: any) => {
      if (r.month === latestMonth && r.rawCreateDate) {
        const parts = r.rawCreateDate.split(" ")[0].split("/");
        if (parts.length >= 2) {
          const day = parseInt(parts[1], 10);
          if (!isNaN(day) && day > maxDay) maxDay = day;
        }
      }
    });
    return maxDay;
  }, [rawData, dynamicLists.months, isDataLoaded]);

  const aggregatedStats = useMemo(() => {
    if (!isDataLoaded) return {};
    const months = dynamicLists.months;
    const numMonths = months.length;
    const monthToIndex: any = {};

    // เปลี่ยนจาก for loop เป็น forEach
    months.forEach((m: any, i: number) => {
      monthToIndex[m] = i;
    });

    const fields = [
      "product",
      "problem",
      "system",
      "damagedPart",
      "cause",
      "area",
      "team",
    ];
    const activeFields = fields.filter(
      (f) => crossFilters[f] && crossFilters[f].size > 0
    );
    const activeStoreFilters =
      crossFilters["storeCode"] && crossFilters["storeCode"].size > 0;
    const structures: any = {};

    fields.forEach((f) => {
      structures[f] = {};
    });
    structures["storeCode"] = {};

    // เปลี่ยนมาใช้ .forEach ร่วมกับ .every แทน For Loop ป้องกันการถูก Sandbox ตัดจบ
    globalFilteredRecords.forEach((r: any) => {
      const mIdx = monthToIndex[r.month];
      const hasValidMonth = mIdx !== undefined;

      fields.forEach((field) => {
        let passesOthers = activeFields.every(
          (af) => af === field || crossFilters[af].has(r[af])
        );

        if (passesOthers && activeStoreFilters && field !== "storeCode") {
          if (!crossFilters["storeCode"].has(r.storeCode)) passesOthers = false;
        }

        if (passesOthers) {
          const val = r[field];
          let itemStats = structures[field][val];
          if (!itemStats) {
            itemStats = structures[field][val] = {
              total: 0,
              monthly: new Array(numMonths).fill(0),
              monthlyStores: Array.from(
                { length: numMonths },
                () => new SimulatedSet()
              ),
            };
          }
          itemStats.total += r.calls;
          if (hasValidMonth) {
            itemStats.monthly[mIdx] += r.calls;
            if (r.branches) {
              itemStats.monthlyStores[mIdx].add(r.branches);
            } else {
              itemStats.monthlyStores[mIdx].add(r.storeCode);
            }
          }
        }
      });

      let storePassesOthers = activeFields.every((af) =>
        crossFilters[af].has(r[af])
      );

      if (storePassesOthers) {
        const storeVal = r.storeCode;
        let storeStats = structures["storeCode"][storeVal];
        if (!storeStats) {
          storeStats = structures["storeCode"][storeVal] = {
            total: 0,
            monthly: new Array(numMonths).fill(0),
          };
        }
        storeStats.total += r.calls;
        if (hasValidMonth) storeStats.monthly[mIdx] += r.calls;
      }
    });
    return structures;
  }, [globalFilteredRecords, crossFilters, dynamicLists.months, isDataLoaded]);

  const aprMayIndices = useMemo(
    () => ({
      apr: dynamicLists.months.findIndex(
        (m: any) => String(m).startsWith("Apr") || String(m).startsWith("เม.ย.")
      ),
      may: dynamicLists.months.findIndex(
        (m: any) => String(m).startsWith("May") || String(m).startsWith("พ.ค.")
      ),
    }),
    [dynamicLists.months]
  );

  const generateTableDataFromStats = (field: any) => {
    if (!isDataLoaded || !aggregatedStats[field]) return [];
    const fieldStats = aggregatedStats[field];
    const statsEntries = Object.entries(fieldStats);
    let tableTotalCalls = 0;
    const numMonths = dynamicLists.months.length;
    const tableMonthlyTotals = new Array(numMonths).fill(0);

    // ใช้ forEach เลี่ยง Loop Protection
    statsEntries.forEach(([_, data]: any) => {
      if (data) {
        tableTotalCalls += data.total;
        (data.monthly || []).forEach((val: any, m: any) => {
          if (m < numMonths) tableMonthlyTotals[m] += val;
        });
      }
    });

    return statsEntries
      .filter(([_, data]: any) => data && data.total > 0)
      .map(([name, data]: any) => {
        const monthlyVals = data?.monthly || [];
        const len = monthlyVals.length;
        let forecast =
          len > 0
            ? Math.round(((monthlyVals[len - 1] || 0) / latestMonthMaxDay) * 30)
            : 0;
        let trend = 0;
        const { apr: aprIdx, may: mayIdx } = aprMayIndices;
        if (aprIdx !== -1 && mayIdx !== -1) {
          const aprVal = monthlyVals[aprIdx] || 0;
          const mayVal = monthlyVals[mayIdx] || 0;
          if (aprVal > 0) trend = ((mayVal - aprVal) / aprVal) * 100;
          else if (mayVal > 0) trend = 100;
        } else if (len >= 3) {
          const p1 = monthlyVals[len - 3] || 0;
          const p2 = monthlyVals[len - 2] || 0;
          if (p1 > 0) trend = ((p2 - p1) / p1) * 100;
        }

        const monthlyDetails: any[] = [];
        // ใช้ Array.from.forEach แทน for loop
        Array.from({ length: numMonths }).forEach((_, idx) => {
          const calls = data?.monthly?.[idx] || 0;
          const totalMonth = tableMonthlyTotals[idx] || 0;
          monthlyDetails.push({
            calls: calls,
            percentage:
              totalMonth > 0 ? ((calls / totalMonth) * 100).toFixed(1) : "0.0",
            branchCount: data?.monthlyStores
              ? data.monthlyStores[idx]?.size
              : 0,
          });
        });

        return {
          name,
          total: data?.total || 0,
          monthly: data?.monthly || [],
          monthlyDetails,
          percentage:
            tableTotalCalls > 0
              ? (((data?.total || 0) / tableTotalCalls) * 100).toFixed(2)
              : "0.00",
          forecast,
          trend,
        };
      })
      .sort((a: any, b: any) => b.total - a.total);
  };

  const productTypeTableData = useMemo(
    () => generateTableDataFromStats("product"),
    [aggregatedStats, latestMonthMaxDay, aprMayIndices, isDataLoaded]
  );
  const problemTableData = useMemo(
    () => generateTableDataFromStats("problem"),
    [aggregatedStats, latestMonthMaxDay, aprMayIndices, isDataLoaded]
  );
  const systemTableData = useMemo(
    () => generateTableDataFromStats("system"),
    [aggregatedStats, latestMonthMaxDay, aprMayIndices, isDataLoaded]
  );
  const damagedPartTableData = useMemo(
    () => generateTableDataFromStats("damagedPart"),
    [aggregatedStats, latestMonthMaxDay, aprMayIndices, isDataLoaded]
  );
  const causeTableData = useMemo(
    () => generateTableDataFromStats("cause"),
    [aggregatedStats, latestMonthMaxDay, aprMayIndices, isDataLoaded]
  );
  const areaTableData = useMemo(
    () => generateTableDataFromStats("area"),
    [aggregatedStats, latestMonthMaxDay, aprMayIndices, isDataLoaded]
  );
  const teamTableData = useMemo(
    () => generateTableDataFromStats("team"),
    [aggregatedStats, latestMonthMaxDay, aprMayIndices, isDataLoaded]
  );

  const chartAggregatedData = useMemo(() => {
    if (!isDataLoaded) return { products: [], systems: [] };
    const pMap: any = {},
      sMap: any = {};
    const numMonths = dynamicLists.months.length;
    const monthToIndex: any = {};

    // เปลี่ยนมาใช้ .forEach() แทน For Loop
    dynamicLists.months.forEach((m: any, i: number) => {
      monthToIndex[m] = i;
    });

    // เปลี่ยนมาใช้ .forEach() แทน For Loop
    dashboardFilteredRecords.forEach((r: any) => {
      const mIdx = monthToIndex[r.month];
      if (!pMap[r.product])
        pMap[r.product] = { total: 0, monthly: new Array(numMonths).fill(0) };
      pMap[r.product].total += r.calls;
      if (mIdx !== undefined) pMap[r.product].monthly[mIdx] += r.calls;
      if (!sMap[r.system])
        sMap[r.system] = { total: 0, monthly: new Array(numMonths).fill(0) };
      sMap[r.system].total += r.calls;
      if (mIdx !== undefined) sMap[r.system].monthly[mIdx] += r.calls;
    });
    const formatData = (map: any) =>
      Object.entries(map)
        .map(([name, data]: any) => ({
          name,
          total: data?.total || 0,
          monthly: data?.monthly || [],
        }))
        .sort((a: any, b: any) => b.total - a.total);
    return { products: formatData(pMap), systems: formatData(sMap) };
  }, [dashboardFilteredRecords, dynamicLists.months, isDataLoaded]);

  const topIssuesKPI = useMemo(() => {
    if (!isDataLoaded || chartAggregatedData.systems.length === 0) return [];
    const colors = [
      "border-l-4 border-indigo-600 text-indigo-700 dark:border-indigo-500 dark:text-indigo-400",
      "border-l-4 border-sky-500 text-sky-600 dark:border-sky-400 dark:text-sky-400",
      "border-l-4 border-rose-500 text-rose-600 dark:border-rose-400 dark:text-rose-400",
    ];
    return chartAggregatedData.systems
      .slice(0, 3)
      .map((item: any, idx: any) => ({
        title: item?.name || "",
        val: item?.total || 0,
        color: colors[idx] || colors[0],
      }));
  }, [chartAggregatedData.systems, isDataLoaded]);

  const top5ProductsForTrend = useMemo(
    () => chartAggregatedData.products.slice(0, 5),
    [chartAggregatedData.products]
  );

  const branchTableData = useMemo(() => {
    if (!isDataLoaded || !aggregatedStats["storeCode"]) return [];
    const storeStats = aggregatedStats["storeCode"];
    const result: any[] = [];

    // เปลี่ยน for ให้ปลอดภัย
    dynamicLists.branches.forEach((b: any) => {
      if (b && b.id) {
        const stats = storeStats[b.id];
        if (stats && stats.total > 0)
          result.push({
            id: b.id,
            name: b.name,
            area: b.area,
            team: b.team,
            total: stats.total,
            monthly: stats.monthly || [],
          });
      }
    });

    let arr = result.sort((a, b) => (b?.total || 0) - (a?.total || 0));
    arr.forEach((b, i) => {
      if (b) b.rank = i + 1;
    });

    if (branchSearch) {
      const s = branchSearch.toLowerCase();
      arr = arr.filter(
        (b) =>
          (b?.id || "").toLowerCase().includes(s) ||
          (b?.name || "").toLowerCase().includes(s)
      );
    }
    return arr;
  }, [aggregatedStats, dynamicLists.branches, branchSearch, isDataLoaded]);

  const getTrendHeader = () => {
    const len = dynamicLists.months.length;
    if (len >= 3)
      return `%แนวโน้ม\n${
        formatMonthThaiSplit(dynamicLists.months[len - 2]).m
      } VS\n${formatMonthThaiSplit(dynamicLists.months[len - 3]).m}`;
    return `%แนวโน้ม`;
  };

  const monthlySummaryData = useMemo(() => {
    if (!isDataLoaded) return [];
    return dynamicLists.months.map((m: any) => {
      const filtered = dashboardFilteredRecords.filter(
        (r: any) => r.month === m
      );
      const total = filtered.reduce((sum: any, r: any) => sum + r.calls, 0);
      return { month: m, total: total };
    });
  }, [dashboardFilteredRecords, dynamicLists.months, isDataLoaded]);

  const renderDropdowns = () => {
    const configs = [
      {
        label: "กลุ่มผลิตภัณฑ์",
        opts: dynamicLists.products,
        sel: filterProduct,
        set: setFilterProduct,
      },
      {
        label: "อาการเสีย",
        opts: dynamicLists.problems,
        sel: filterProblem,
        set: setFilterProblem,
      },
      {
        label: "สาเหตุอาการ",
        opts: dynamicLists.causes,
        sel: filterCause,
        set: setFilterCause,
      },
      {
        label: "ชิ้นส่วนที่เสีย",
        opts: dynamicLists.damagedParts,
        sel: filterDamagedPart,
        set: setFilterDamagedPart,
      },
      {
        label: "ระบบ",
        opts: dynamicLists.systems,
        sel: filterSystem,
        set: setFilterSystem,
      },
      {
        label: "พื้นที่",
        opts: dynamicLists.areas,
        sel: filterArea,
        set: setFilterArea,
      },
      {
        label: "ทีม",
        opts: dynamicLists.teams,
        sel: filterTeam,
        set: setFilterTeam,
      },
      {
        label: "เลือกเดือน",
        opts: dynamicLists.months,
        sel: filterMonth,
        set: setFilterMonth,
        highlight: true,
      },
    ];
    return configs.map((cfg: any, i: any) => (
      <SearchableDropdown
        key={i}
        label={cfg.label}
        options={cfg.opts}
        selectedValues={cfg.sel}
        onChange={cfg.set}
        count={(cfg.opts || []).length}
        isHighlight={cfg.highlight}
      />
    ));
  };

  const renderStandardTable = (tableDef: any) => {
    const limit = rowLimits[tableDef.id] || 15;
    const visibleRows = (tableDef.data || []).slice(0, limit);
    const hasMore = (tableDef.data || []).length > limit;
    const grandTotal = (tableDef.data || []).reduce(
      (acc: any, row: any) => acc + (row?.total || 0),
      0
    );
    const grandMonthly = Array(dynamicLists.months.length).fill(0);
    let grandForecast = 0;

    (tableDef.data || []).forEach((row: any) => {
      if (!row) return; // 🔥 ป้องกัน Row เป็น undefined
      (row?.monthly || []).forEach(
        (val: any, i: any) => (grandMonthly[i] += val)
      );
      grandForecast += row?.forecast || 0;
    });

    let grandTrend = 0;
    const { apr: aprIdx, may: mayIdx } = aprMayIndices;
    if (aprIdx !== -1 && mayIdx !== -1) {
      const aprVal = grandMonthly[aprIdx] || 0;
      const mayVal = grandMonthly[mayIdx] || 0;
      if (aprVal > 0) grandTrend = ((mayVal - aprVal) / aprVal) * 100;
      else if (mayVal > 0) grandTrend = 100;
    } else if (grandMonthly.length >= 3) {
      const len = grandMonthly.length;
      const p1 = grandMonthly[len - 3] || 0;
      const p2 = grandMonthly[len - 2] || 0;
      if (p1 > 0) grandTrend = ((p2 - p1) / p1) * 100;
    }

    return (
      <div
        key={tableDef.id}
        className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/85 dark:border-slate-700 shadow-sm overflow-hidden text-left transition-colors"
      >
        <button
          onClick={() => toggleSection(tableDef.id)}
          className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700 hover:bg-slate-100/60 dark:hover:bg-slate-700/50 flex justify-between items-center transition-all"
        >
          <span className="text-base font-extrabold text-slate-800 dark:text-slate-100 flex items-center gap-3">
            <span className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 text-sm font-black flex items-center justify-center rounded-lg shadow-sm">
              {tableDef.num}
            </span>
            {tableDef.title}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-sm bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 font-extrabold px-4 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-800">
              {(tableDef.data || []).length} รายการ
            </span>
            {openSections[tableDef.id] ? (
              <ChevronUp className="w-5 h-5 text-slate-400 dark:text-slate-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500" />
            )}
          </div>
        </button>

        {openSections[tableDef.id] && (
          <div className="overflow-x-auto max-h-[600px] custom-scrollbar relative">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead className="sticky top-0 z-20 bg-[#f8fafc] dark:bg-slate-800 shadow-sm">
                <tr className="text-sm font-extrabold text-[#1e3a8a] dark:text-indigo-300 border-b border-slate-200 dark:border-slate-700 align-bottom">
                  <th className="px-6 py-5 sticky left-0 z-30 bg-[#f8fafc] dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 w-1/4 min-w-[250px] text-left">
                    รายการวิเคราะห์
                  </th>
                  <th className="px-4 py-5 border-r border-slate-200 dark:border-slate-700 min-w-[120px]">
                    <div className="flex items-center justify-center gap-1.5 h-full">
                      <span className="whitespace-nowrap">รวม CALLS</span>
                    </div>
                  </th>
                  {dynamicLists.months.map((m: any) => {
                    const thDate = formatMonthThaiSplit(m);
                    return (
                      <th
                        key={m}
                        className="px-2 py-5 min-w-[70px] text-center leading-tight"
                      >
                        <div className="text-base">{thDate.m}</div>
                        <div className="text-xs mt-1 text-slate-500 dark:text-slate-400">
                          {thDate.y}
                        </div>
                      </th>
                    );
                  })}
                  <th className="px-3 py-5 border-l border-slate-200 dark:border-slate-700 min-w-[100px] text-center leading-tight whitespace-pre-line">
                    {getTrendHeader()}
                  </th>
                  {dynamicLists.months.map((m: any) => {
                    const thDate = formatMonthThaiSplit(m);
                    return (
                      <th
                        key={m}
                        className="px-2 py-4 min-w-[70px] text-center leading-tight"
                      >
                        <div className="text-[13px]">{thDate.m}</div>
                        <div className="text-[11px] mt-0.5 text-slate-500">
                          {thDate.y}
                        </div>
                      </th>
                    );
                  })}
                  <th className="px-2 py-4 border-l border-slate-200 dark:border-slate-700 min-w-[80px] text-center leading-tight whitespace-pre-line">
                    <div className="text-[12px]">{getTrendHeader()}</div>
                  </th>
                  <th className="px-3 py-4 bg-indigo-50/40 dark:bg-indigo-900/20 border-l border-slate-200 dark:border-slate-700 min-w-[100px] text-center leading-tight text-[#1e3a8a] dark:text-indigo-300 font-extrabold">
                    <div className="text-[13px]">ประมาณการ</div>
                    <div className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {dynamicLists.months.length > 0
                        ? `(หาร ${latestMonthMaxDay} วัน * 30)`
                        : ""}
                    </div>
                  </th>
                  <th className="px-4 py-4 border-l border-slate-200 dark:border-slate-700 min-w-[150px] text-center">
                    กราฟประมาณการ
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {visibleRows.length > 0 ? (
                  visibleRows.map((row: any, idx: any) => {
                    if (!row) return null; // 🔥 ป้องกันตัวแปร row เป็น undefined
                    const maxVal = getRowMaxVal(row?.monthly || []);
                    const isCrossFiltered = crossFilters[
                      tableDef.keyField
                    ]?.has(row?.name);
                    return (
                      <tr
                        key={idx}
                        className={`border-b border-slate-100 dark:border-slate-700/50 hover:bg-indigo-50/50 dark:hover:bg-slate-700/50 transition-all cursor-pointer group ${
                          isCrossFiltered
                            ? "bg-indigo-50/40 dark:bg-indigo-900/30 font-bold"
                            : ""
                        }`}
                        onClick={() => {
                          setCrossFilters((prev: any) => {
                            const next = { ...prev };
                            const newSet = new Set(
                              next[tableDef.keyField] || []
                            );
                            if (newSet.has(row?.name)) newSet.delete(row?.name);
                            else if (row?.name) newSet.add(row?.name);
                            next[tableDef.keyField] = newSet;
                            return next;
                          });
                        }}
                      >
                        <td
                          className={`px-6 py-4 font-bold sticky left-0 z-10 border-r border-slate-100 dark:border-slate-700/50 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] truncate max-w-[300px] transition-colors ${
                            isCrossFiltered
                              ? "bg-indigo-50 dark:bg-slate-800 border-l-4 border-l-indigo-600 dark:border-l-indigo-500 text-indigo-700 dark:text-indigo-400"
                              : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                          }`}
                          title={row?.name}
                        >
                          <div className="flex items-center gap-3 text-[14px]">
                            {isCrossFiltered && (
                              <span className="w-2.5 h-2.5 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse flex-shrink-0"></span>
                            )}
                            <span className="truncate">{row?.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-5 text-center bg-transparent border-r border-slate-100 dark:border-slate-700/50 relative">
                          <div className="font-extrabold text-xl text-[#1e3a8a] dark:text-indigo-300 leading-tight">
                            {(row?.total || 0).toLocaleString()}
                          </div>
                          <div className="font-bold text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                            ({row?.percentage || 0}%)
                          </div>
                        </td>
                        {(row?.monthlyDetails || []).map(
                          (detail: any, mIdx: any) => {
                            const colors = getHeatmapCellClasses(
                              detail?.calls || 0,
                              maxVal
                            );
                            return (
                              <td
                                key={mIdx}
                                className={`px-2 py-4 text-center transition-colors ${
                                  isCrossFiltered && detail?.calls > 0
                                    ? "bg-[#fda4af] dark:bg-rose-800/60"
                                    : colors.bg
                                }`}
                              >
                                {(detail?.calls || 0) > 0 ? (
                                  <>
                                    <div
                                      className={`font-extrabold text-[14px] leading-none ${
                                        isCrossFiltered
                                          ? "text-[#881337] dark:text-rose-100"
                                          : colors.textMain
                                      }`}
                                    >
                                      {(detail?.calls || 0).toLocaleString()}
                                    </div>
                                    <div
                                      className={`font-medium text-[11px] mt-1.5 ${
                                        isCrossFiltered
                                          ? "text-[#be123c] dark:text-rose-300"
                                          : colors.textSub
                                      }`}
                                    >
                                      ({detail?.percentage || 0}%)
                                    </div>
                                  </>
                                ) : (
                                  <div className="text-slate-300 dark:text-slate-600">
                                    -
                                  </div>
                                )}
                              </td>
                            );
                          }
                        )}
                        <td className="px-2 py-4 text-center font-extrabold text-[13px] bg-transparent border-l border-slate-100 dark:border-slate-700/50">
                          <div
                            className={`${
                              (row?.trend || 0) > 0
                                ? "text-[#e11d48] dark:text-rose-400"
                                : (row?.trend || 0) < 0
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-slate-400 dark:text-slate-500"
                            }`}
                          >
                            {(row?.trend || 0) > 0 ? "+" : ""}
                            {(row?.trend || 0).toFixed(2)}%
                          </div>
                        </td>
                        <td className="px-3 py-4 text-center bg-transparent border-l border-slate-100 dark:border-slate-700/50">
                          <div className="font-extrabold text-[16px] text-indigo-700 dark:text-indigo-400">
                            {(row?.forecast || 0).toLocaleString()}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center bg-transparent border-l border-slate-100 dark:border-slate-700/50 align-middle">
                          <Sparkline
                            data={row?.monthly || []}
                            forecast={row?.forecast || 0}
                          />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={dynamicLists.months.length + 5}
                      className="text-center py-8 text-slate-400 font-bold text-base"
                    >
                      ไม่พบข้อมูล
                    </td>
                  </tr>
                )}
              </tbody>
              {(tableDef.data || []).length > 0 && (
                <tfoot className="sticky bottom-0 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] outline outline-1 outline-indigo-200 dark:outline-slate-700 bg-[#eff6ff] dark:bg-slate-900 print:static">
                  <tr>
                    <td className="px-6 py-4 font-black text-indigo-900 dark:text-indigo-300 sticky left-0 z-40 bg-[#eff6ff] dark:bg-slate-900 border-r border-indigo-200 dark:border-slate-700 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] text-[14px] print:static">
                      Grand Total (รวมทั้งหมด)
                    </td>
                    <td className="px-4 py-4 text-center border-r border-indigo-200 dark:border-slate-700">
                      <div className="font-black text-xl text-indigo-900 dark:text-indigo-300">
                        {(grandTotal || 0).toLocaleString()}
                      </div>
                      <div className="font-bold text-sm text-indigo-600 dark:text-indigo-500 mt-1">
                        100%
                      </div>
                    </td>
                    {grandMonthly.map((val, mIdx) => {
                      let pctText = null;
                      let pctColor = "text-slate-400 dark:text-slate-500";
                      if (mIdx > 0) {
                        const prev = grandMonthly[mIdx - 1];
                        if (prev > 0) {
                          const pct = ((val - prev) / prev) * 100;
                          pctText = `${pct > 0 ? "+" : ""}${pct.toFixed(2)}%`;
                          pctColor =
                            pct > 0
                              ? "text-[#e11d48] dark:text-rose-400"
                              : pct < 0
                              ? "text-[#10b981] dark:text-emerald-400"
                              : "text-slate-500 dark:text-slate-400";
                        } else if (val > 0) {
                          pctText = "+100.00%";
                          pctColor = "text-[#e11d48] dark:text-rose-400";
                        }
                      }
                      return (
                        <td
                          key={mIdx}
                          className="px-2 py-4 text-center border-r border-indigo-200/60 dark:border-slate-700 align-middle"
                        >
                          <div className="font-black text-lg text-indigo-900 dark:text-indigo-300">
                            {(val || 0).toLocaleString()}
                          </div>
                          {pctText && (
                            <div
                              className={`font-extrabold text-[11px] mt-1 ${pctColor}`}
                            >
                              {pctText}
                            </div>
                          )}
                        </td>
                      );
                    })}
                    <td className="px-2 py-4 text-center border-l border-indigo-200/60 dark:border-slate-700 align-middle">
                      <div
                        className={`font-black text-[13px] ${
                          grandTrend > 0
                            ? "text-[#e11d48] dark:text-rose-400"
                            : grandTrend < 0
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {grandTrend > 0 ? "+" : ""}
                        {(grandTrend || 0).toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-3 py-4 text-center border-l border-indigo-200/60 dark:border-slate-700 align-middle">
                      <div className="font-black text-[16px] text-indigo-900 dark:text-indigo-300">
                        {(grandForecast || 0).toLocaleString()}
                      </div>
                    </td>
                    <td className="px-4 py-3 border-l border-indigo-200/60 dark:border-slate-700 align-middle text-center">
                      <Sparkline data={grandMonthly} forecast={grandForecast} />
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
            {hasMore && (
              <div className="p-4 bg-slate-50/60 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 text-center">
                <button
                  onClick={(e: any) => {
                    e.stopPropagation();
                    setRowLimits((prev: any) => ({
                      ...prev,
                      [tableDef.id]: (prev[tableDef.id] || 15) + 30,
                    }));
                  }}
                  className="px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm font-extrabold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:border-indigo-300 transition-all shadow-sm"
                >
                  แสดงผลเพิ่มอีก +30 รายการ
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // ==========================================
  // 4. หน้า Loading & หน้า Error
  // ==========================================

  // ✨ ถ้ายังโหลด Tailwind CSS (CDN) ไม่เสร็จ ให้โชว์หน้า Loading เล็กๆ ที่มี Inline Style ก่อน
  // เพื่อป้องกัน FOUC (Flash of Unstyled Content) บน Vercel
  if (!isTailwindLoaded) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid #e2e8f0",
            borderTopColor: "#4f46e5",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <h2
          style={{
            marginTop: "20px",
            color: "#475569",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          กำลังโหลดระบบ CSS...
        </h2>
        <style>
          {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
          {`
            @media (prefers-color-scheme: dark) {
              body { background-color: #0f172a; }
              div { border-color: #334155; border-top-color: #818cf8; }
              h2 { color: #cbd5e1; }
            }
          `}
        </style>
      </div>
    );
  }

  if (!isDataLoaded) {
    if (isProcessing) {
      return (
        <div className="min-h-screen bg-[#f3f7fb] dark:bg-slate-900 flex flex-col items-center justify-center p-4 text-left transition-colors">
          <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl max-w-md w-full text-center border border-slate-200 dark:border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-100 dark:bg-indigo-900/50">
              <div className="bg-indigo-600 dark:bg-indigo-500 h-full w-full animate-[pulse_1.5s_ease-in-out_infinite] origin-left"></div>
            </div>
            <div className="relative w-24 h-24 mx-auto mb-6 mt-4">
              <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/50 rounded-full animate-ping opacity-70"></div>
              <div className="relative bg-indigo-600 dark:bg-indigo-500 w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <RefreshCw className="w-12 h-12 text-white animate-spin" />
              </div>
            </div>
            <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight mb-3">
              กำลังเตรียมข้อมูล...
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 mb-4 leading-relaxed px-4">
              กำลังเชื่อมต่อและประมวลผล กรุณารอสักครู่...
            </p>
          </div>
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4 text-left transition-colors">
        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl max-w-2xl w-full border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
              <Layers className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              Call Maintenance Dashboard
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 mt-3">
              ระบบดึงข้อมูลจาก Google Sheet ล้มเหลว โปรดเลือกวิธีใช้งานด้านล่าง
            </p>
          </div>

          {loadError && (
            <div className="mb-8 p-5 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 rounded-2xl flex items-start gap-4 shadow-sm">
              <AlertTriangle className="w-6 h-6 text-rose-500 dark:text-rose-400 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm font-black text-rose-800 dark:text-rose-300 mb-1">
                  สาเหตุที่หน้าเว็บไม่โหลด:
                </p>
                <p className="text-sm font-semibold text-rose-700 dark:text-rose-400 leading-relaxed">
                  {loadError}
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:shadow-md transition-all">
              <UploadCloud className="w-10 h-10 text-slate-400 dark:text-slate-500 mx-auto mb-3" />
              <h3 className="font-bold text-slate-700 dark:text-slate-200 mb-2">
                มีไฟล์ข้อมูลของตัวเอง?
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 h-10">
                อัปโหลดไฟล์ CSV ที่มีโครงสร้างตรงกับระบบ
              </p>
              <input
                type="file"
                accept=".csv"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
              <button
                onClick={() => fileInputRef.current.click()}
                disabled={isProcessing}
                className="w-full py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:border-slate-500 dark:hover:border-slate-400 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-sm transition-all"
              >
                เลือกอัปโหลดไฟล์ CSV
              </button>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 rounded-2xl p-6 text-center hover:shadow-md transition-all relative overflow-hidden">
              <div className="absolute -top-3 -right-3 bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-sm transform rotate-12">
                แนะนำ!
              </div>
              <PlayCircle className="w-10 h-10 text-indigo-500 dark:text-indigo-400 mx-auto mb-3" />
              <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">
                ยังไม่มีไฟล์? ลองใช้ตัวอย่าง
              </h3>
              <p className="text-xs text-indigo-600/80 dark:text-indigo-400/80 mb-4 h-10">
                กดดูหน้าตา Dashboard ใช้งานได้ 100% ด้วยข้อมูลจำลอง
              </p>
              <button
                onClick={handleLoadDemoData}
                disabled={isProcessing}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all shadow-md"
              >
                ทดลองใช้ด้วยข้อมูลจำลอง
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 5. MAIN DASHBOARD RENDER
  // ==========================================

  const storeLimit = rowLimits["sec6"] || 15;
  const visibleBranches = branchTableData.slice(0, storeLimit);
  const hasMoreBranches = branchTableData.length > storeLimit;
  const grandBranchTotal = branchTableData.reduce(
    (acc: any, row: any) => acc + (row?.total || 0),
    0
  );
  const grandBranchMonthly = Array(dynamicLists.months.length).fill(0);
  branchTableData.forEach((row: any) => {
    if (row)
      (row?.monthly || []).forEach(
        (val: any, i: any) => (grandBranchMonthly[i] += val)
      );
  });

  return (
    <div className="min-h-screen bg-[#f3f7fb] dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans antialiased pb-12 print:bg-white print:pb-0 text-left transition-colors duration-300">
      <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-black text-white sticky top-0 z-40 shadow-md print:hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-600 dark:bg-indigo-500 p-3 rounded-xl shadow-inner">
              <Layers className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-wide text-white">
                ระบบรายงาน Call MAINTENANCE DASHBOARD
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`text-xs px-3 py-1 rounded-lg flex items-center gap-1.5 font-bold ${
                    fileName.includes("ตัวอย่าง")
                      ? "bg-amber-500/20 text-amber-300"
                      : "bg-indigo-800/60 dark:bg-indigo-900/80 text-indigo-100"
                  }`}
                >
                  <CheckCircle
                    className={`w-4 h-4 flex-shrink-0 ${
                      fileName.includes("ตัวอย่าง")
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }`}
                  />
                  {fileName}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <nav className="flex bg-slate-800/80 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-700/60 dark:border-slate-700 shadow-lg overflow-x-auto">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "overview"
                    ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <BarChart2 className="w-5 h-5" /> ภาพรวม (Overview)
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                  activeTab === "settings"
                    ? "bg-indigo-600 dark:bg-indigo-500 text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Settings className="w-5 h-5" /> ตั้งค่าข้อมูล (Data)
              </button>
            </nav>
            <button
              onClick={toggleTheme}
              className="bg-slate-800/80 dark:bg-slate-800 p-3 rounded-2xl border border-slate-700/60 dark:border-slate-700 shadow-lg text-amber-400 dark:text-indigo-300 hover:bg-slate-700 transition-colors"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-8">
        {activeTab === "overview" && (
          <>
            {/* ================= FILTERS PANEL ================= */}
            <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-200/80 dark:border-slate-700 p-6 mb-8 transition-colors print:hidden">
              <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-100 dark:border-slate-700">
                <span className="text-base font-extrabold text-slate-700 dark:text-slate-200 flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  ฟิลเตอร์การเลือกคัดกรองข้อมูลแบบยืดหยุ่น
                </span>
                <button
                  onClick={resetFilters}
                  className="text-sm text-indigo-600 dark:text-indigo-400 font-extrabold hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-xl transition-all"
                >
                  <RefreshCw className="w-4 h-4" /> ล้างการเลือกทั้งหมด (Reset)
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {renderDropdowns()}
              </div>
            </section>

            <section className="mb-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-lg font-black text-slate-800 dark:text-slate-100">
                  Top Issues (System) อ้างอิงจากข้อมูลล่าสุด
                </h2>
                <span className="text-sm bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-extrabold px-4 py-1.5 rounded-full ml-auto shadow-sm border border-indigo-200 dark:border-indigo-800">
                  พบข้อมูลทั้งหมด: {(totalCallsCount || 0).toLocaleString()}{" "}
                  CALL
                </span>
              </div>
              {topIssuesKPI.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3">
                  {topIssuesKPI.map((kpi: any, idx: any) => (
                    <div
                      key={idx}
                      className={`bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200/70 dark:border-slate-700 p-6 ${kpi.color} flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden print:border-2`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wide truncate w-4/5">
                          {kpi.title}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
                          {(kpi.val || 0).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 text-center text-slate-400 dark:text-slate-500 text-base font-bold transition-colors">
                  ไม่พบข้อมูลตรงตามเงื่อนไขที่กรอง
                </div>
              )}
            </section>

            <section className="mb-8 text-left">
              <TrendLineChart
                data={top5ProductsForTrend}
                months={dynamicLists.months}
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:grid-cols-2 print:break-inside-avoid">
                <ParetoChart
                  data={chartAggregatedData.products}
                  title="Pareto: กลุ่มอุปกรณ์ (Product Type)"
                  subtitle="วิเคราะห์กลุ่มอุปกรณ์ที่ส่งผลกระทบ 80% แรก"
                  icon={Layers}
                />
                <ParetoChart
                  data={chartAggregatedData.systems}
                  title="Pareto Analysis (System)"
                  subtitle="วิเคราะห์ปัญหาที่ส่งผลกระทบมากที่สุด อิงจากมุมมองกราฟ"
                  icon={BarChart2}
                />
              </div>
            </section>

            <section className="space-y-8">
              {[
                {
                  id: "sec1",
                  num: 1,
                  title: "แนวโน้มแยกตามกลุ่มผลิตภัณฑ์ (Product Type)",
                  data: productTypeTableData,
                  keyField: "product",
                },
                {
                  id: "sec2",
                  num: 2,
                  title: "แนวโน้มแยกตามอาการเสียหลัก (Problem Analysis)",
                  data: problemTableData,
                  keyField: "problem",
                },
                {
                  id: "sec3",
                  num: 3,
                  title: "แนวโน้มแยกตามประเภทโครงสร้างระบบ (System)",
                  data: systemTableData,
                  keyField: "system",
                },
                {
                  id: "sec4",
                  num: 4,
                  title: "แนวโน้มแยกตามประเภทชิ้นส่วนที่เสีย (Damaged Part)",
                  data: damagedPartTableData,
                  keyField: "damagedPart",
                },
                {
                  id: "sec5",
                  num: 5,
                  title: "แนวโน้มตามสาเหตุหลัก (Root Cause)",
                  data: causeTableData,
                  keyField: "cause",
                },
              ].map(renderStandardTable)}

              {/* 6. TABLE: BRANCH CALL STATUS */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/85 dark:border-slate-700 shadow-sm overflow-hidden print:break-inside-avoid text-left transition-colors">
                <div className="px-6 py-5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <span className="text-base font-extrabold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 text-sm font-black flex items-center justify-center rounded-lg">
                      6
                    </span>
                    สรุปปริมาณสายการโทรแจ้งซ่อมรายสาขา (Branch Call Volume)
                  </span>

                  <div className="relative w-full md:w-80 print:hidden">
                    <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="ค้นหารหัส หรือชื่อสาขา..."
                      value={branchSearch}
                      onChange={(e) => setBranchSearch(e.target.value)}
                      className="w-full text-sm bg-white dark:bg-slate-900 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 text-slate-800 dark:text-slate-200 outline-none focus:border-indigo-500 transition-all font-semibold"
                    />
                  </div>
                </div>

                <div className="overflow-x-auto max-h-[700px] custom-scrollbar relative print:max-h-none print:overflow-visible">
                  <table className="w-full text-left border-collapse whitespace-nowrap">
                    <thead className="sticky top-0 z-10 bg-slate-100 dark:bg-slate-800 shadow-sm print:static">
                      <tr className="text-sm font-extrabold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 uppercase">
                        <th className="px-5 py-4 sticky left-0 z-30 bg-slate-100 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 print:static">
                          <div className="flex items-center gap-3">
                            <span className="w-10 text-center text-slate-400 dark:text-slate-500">
                              อันดับ
                            </span>
                            <span>รหัสสาขา</span>
                          </div>
                        </th>
                        <th className="px-5 py-4 min-w-[200px]">ชื่อสาขา</th>
                        <th className="px-4 py-4 text-center">
                          พื้นที่ (AREA)
                        </th>
                        <th className="px-4 py-4 text-center">ทีม (TEAM)</th>
                        <th className="px-4 py-4 text-center bg-slate-200/60 dark:bg-slate-700/60 font-extrabold">
                          รวม CALL
                        </th>
                        {dynamicLists.months.map((m: any) => (
                          <th
                            key={m}
                            className="px-2 py-4 text-center min-w-[60px]"
                          >
                            {formatMonthThaiSplit(m).m}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {visibleBranches.length > 0 ? (
                        visibleBranches.map((branch: any, idx: any) => {
                          if (!branch) return null; // 🔥 ป้องกันตัวแปร branch เป็น undefined
                          const maxVal = getRowMaxVal(branch?.monthly || []);

                          const isCrossFiltered = crossFilters[
                            "storeCode"
                          ]?.has(branch?.id);

                          return (
                            <tr
                              key={idx}
                              className={`border-b border-slate-100 dark:border-slate-700/50 hover:bg-indigo-50/50 dark:hover:bg-slate-700/50 transition-all cursor-pointer group ${
                                isCrossFiltered
                                  ? "bg-indigo-50/40 dark:bg-indigo-900/30 font-bold"
                                  : ""
                              }`}
                              onClick={() => {
                                setCrossFilters((prev: any) => {
                                  const next = { ...prev };
                                  const newSet = new Set(
                                    next["storeCode"] || []
                                  );
                                  if (newSet.has(branch?.id))
                                    newSet.delete(branch?.id);
                                  else if (branch?.id) newSet.add(branch?.id);
                                  next["storeCode"] = newSet;
                                  return next;
                                });
                              }}
                            >
                              <td
                                className={`px-5 py-4 font-bold sticky left-0 z-10 border-r border-slate-100 dark:border-slate-700/50 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] transition-colors print:static ${
                                  isCrossFiltered
                                    ? "bg-indigo-50 dark:bg-slate-800 border-l-4 border-l-indigo-600 dark:border-l-indigo-500 text-indigo-700 dark:text-indigo-400"
                                    : "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <span
                                    className={`flex items-center justify-center w-10 h-8 rounded-lg text-sm font-black print:border ${
                                      branch?.rank === 1
                                        ? "bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400"
                                        : branch?.rank === 2
                                        ? "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                                        : branch?.rank === 3
                                        ? "bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400"
                                        : "bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500"
                                    }`}
                                  >
                                    {branch?.rank}
                                  </span>
                                  {isCrossFiltered && (
                                    <span className="w-3 h-3 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-pulse flex-shrink-0"></span>
                                  )}
                                  <span className="text-base">
                                    {branch?.id}
                                  </span>
                                </div>
                              </td>
                              <td
                                className="px-5 py-4 text-slate-900 dark:text-slate-100 font-extrabold truncate max-w-[250px] print:whitespace-normal text-base"
                                title={branch?.name}
                              >
                                {branch?.name}
                              </td>
                              <td className="px-4 py-4 text-center">
                                <span className="bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-md text-slate-600 dark:text-slate-300 font-bold print:border text-sm">
                                  {branch?.area}
                                </span>
                              </td>
                              <td className="px-4 py-4 text-center">
                                <span className="bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-md text-indigo-700 dark:text-indigo-300 font-bold print:border text-sm">
                                  {branch?.team}
                                </span>
                              </td>
                              <td className="px-4 py-4 text-center font-black text-lg bg-transparent text-[#1e3a8a] dark:text-indigo-300">
                                {(branch?.total || 0).toLocaleString()}
                              </td>
                              {(branch?.monthly || []).map(
                                (val: any, mIdx: any) => {
                                  const colors = getHeatmapCellClasses(
                                    val || 0,
                                    Math.max(maxVal, 5)
                                  );
                                  return (
                                    <td
                                      key={mIdx}
                                      className={`px-2 py-4 text-center font-extrabold text-sm transition-colors print:border-l ${
                                        isCrossFiltered && val > 0
                                          ? "bg-[#fda4af] dark:bg-rose-800/60 text-[#881337] dark:text-rose-100"
                                          : colors.bg
                                      } ${
                                        !isCrossFiltered && val > 0
                                          ? colors.textMain
                                          : ""
                                      } ${
                                        !val
                                          ? "text-slate-300 dark:text-slate-600"
                                          : ""
                                      }`}
                                    >
                                      {val > 0
                                        ? (val || 0).toLocaleString()
                                        : "-"}
                                    </td>
                                  );
                                }
                              )}
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td
                            colSpan={dynamicLists.months.length + 5}
                            className="text-center py-10 text-slate-400 dark:text-slate-500 font-bold text-base"
                          >
                            ไม่พบข้อมูลสาขาที่ค้นหา
                          </td>
                        </tr>
                      )}
                    </tbody>
                    {branchTableData.length > 0 && (
                      <tfoot className="sticky bottom-0 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] outline outline-1 outline-indigo-200 dark:outline-slate-700 bg-[#eff6ff] dark:bg-slate-900 print:static">
                        <tr>
                          <td
                            colSpan={4}
                            className="px-5 py-4 font-black text-indigo-900 dark:text-indigo-300 sticky left-0 z-40 bg-[#eff6ff] dark:bg-slate-900 border-r border-indigo-200 dark:border-slate-700 text-right pr-6 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] text-base print:static"
                          >
                            Grand Total (รวมทั้งหมด)
                          </td>
                          <td className="px-4 py-4 text-center font-black text-xl text-indigo-900 dark:text-indigo-300 border-r border-indigo-200 dark:border-slate-700 align-middle">
                            {(grandBranchTotal || 0).toLocaleString()}
                          </td>
                          {grandBranchMonthly.map((val: any, mIdx: any) => {
                            let pctText = null;
                            let pctColor = "text-slate-400 dark:text-slate-500";
                            if (mIdx > 0 && grandBranchMonthly[mIdx - 1] > 0) {
                              const pct =
                                ((val - grandBranchMonthly[mIdx - 1]) /
                                  grandBranchMonthly[mIdx - 1]) *
                                100;
                              pctColor =
                                pct > 0
                                  ? "text-[#e11d48] dark:text-rose-400"
                                  : pct < 0
                                  ? "text-[#10b981] dark:text-emerald-400"
                                  : "text-slate-500 dark:text-slate-400";
                              pctText = `${pct > 0 ? "+" : ""}${pct.toFixed(
                                2
                              )}%`;
                            }
                            return (
                              <td
                                key={mIdx}
                                className="px-2 py-4 text-center border-r border-indigo-200/60 dark:border-slate-700 align-middle"
                              >
                                <div className="font-black text-base text-indigo-900 dark:text-indigo-300">
                                  {(val || 0).toLocaleString()}
                                </div>
                                {pctText && (
                                  <div
                                    className={`font-extrabold text-[11px] mt-1 ${pctColor}`}
                                  >
                                    {pctText}
                                  </div>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      </tfoot>
                    )}
                  </table>
                </div>
              </div>

              {[
                {
                  id: "sec7",
                  num: 7,
                  title: "สรุปแนวโน้มสายการโทรรายพื้นที่ปฏิบัติการ (Area)",
                  data: areaTableData,
                  keyField: "area",
                },
                {
                  id: "sec8",
                  num: 8,
                  title: "สรุปแนวโน้มความรับผิดชอบรายทีม (Team)",
                  data: teamTableData,
                  keyField: "team",
                },
              ].map(renderStandardTable)}
            </section>

            <section className="mt-10 mb-14 text-left">
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700 shadow-sm p-8 transition-colors">
                <h2 className="text-base font-black text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-3">
                  <div className="w-2.5 h-5 bg-indigo-600 dark:bg-indigo-500 rounded-sm"></div>
                  สรุปปริมาณการแจ้งซ่อมรายเดือน (Total Monthly Workload)
                </h2>
                <div className="px-2">
                  <MonthlyWorkloadChart data={monthlySummaryData} />
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === "settings" && (
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm max-w-2xl mx-auto print:hidden text-left transition-colors">
            <h3 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-3">
              <FileSpreadsheet className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              จัดการและตั้งค่าแหล่งข้อมูล (Data Source)
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700 pb-5 mb-8">
              สถานะปัจจุบัน: ดึงข้อมูลจาก{" "}
              <span className="font-extrabold text-indigo-600 dark:text-indigo-400">
                {fileName}
              </span>{" "}
              ({(rawData || []).length.toLocaleString()} แถว)
            </p>
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <label className="block text-sm font-black text-slate-700 dark:text-slate-300 uppercase mb-4">
                  อัปโหลดไฟล์ชุดใหม่ (Upload New CSV)
                </label>
                <div className="flex gap-4">
                  <input
                    type="file"
                    accept=".csv"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 text-slate-700 dark:text-slate-300 font-bold text-sm rounded-xl transition-all flex items-center gap-2 shadow-sm"
                  >
                    <UploadCloud className="w-5 h-5" /> เลือกไฟล์ CSV ของคุณ
                  </button>
                  <button
                    onClick={handleLoadDemoData}
                    className="px-6 py-3 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 dark:hover:border-indigo-500 text-indigo-700 dark:text-indigo-300 font-bold text-sm rounded-xl transition-all flex items-center gap-2 shadow-sm"
                  >
                    <PlayCircle className="w-5 h-5" /> สร้างข้อมูลจำลอง (Demo)
                  </button>
                </div>
                {isProcessing && (
                  <span className="text-sm font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-4">
                    <RefreshCw className="w-4 h-4 animate-spin" />{" "}
                    กำลังประมวลผล...
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
