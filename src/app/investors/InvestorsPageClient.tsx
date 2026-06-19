"use client";

import React, { useState, useMemo } from "react";
import { SectionTag } from "@/components/ui/SectionTag";
import "./investors.css";

interface DocumentItem {
  id: string;
  name: string;
  date: string;
  size: string;
  url: string;
}

interface Category {
  id: string;
  name: string;
  desc: string;
  hasYears: boolean;
  years?: string[];
  documents?: DocumentItem[];
  documentsByYear?: Record<string, DocumentItem[]>;
  documentsByYearAndQuarter?: Record<string, Record<string, DocumentItem[]>>;
}

// Financial Years list used globally across categories with years
const FINANCIAL_YEARS = [
  "FY 2024-25",
  "FY 2023-24",
  "FY 2022-23",
  "FY 2021-22",
  "FY 2020-21",
  "FY 2019-20",
  "FY 2018-19",
  "FY 2017-18",
  "FY 2016-17",
  "FY 2015-16",
];

const categoriesData: Category[] = [
  {
    id: "annual-report",
    name: "Annual Report",
    desc: "Complete financial reports detailing Aayush Wellness Limited's operations, audited statements, and corporate balance sheets for each financial year.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      acc[year] = [
        {
          id: `ar-${year}`,
          name: `Annual_Report_${year.replace(" ", "_")}.pdf`,
          date: `${2000 + parseInt(year.substring(8))}-08-15`,
          size: "4.8 MB",
          url: "#",
        },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "annual-returns",
    name: "Annual Returns",
    desc: "Statutory annual returns filed with the Registrar of Companies (RoC) reflecting the company's registration, shareholdings, and governance profile.",
    hasYears: false,
    documents: [
      { id: "artn-25", name: "Annual_Return_31_March_2025.pdf", date: "2025-09-30", size: "2.4 MB", url: "#" },
      { id: "artn-24", name: "Annual_Return_31_March_2024.pdf", date: "2024-09-28", size: "2.2 MB", url: "#" },
      { id: "artn-23", name: "Annual_Return_31_March_2023.pdf", date: "2023-09-27", size: "2.1 MB", url: "#" },
      { id: "artn-22", name: "Annual_Return_31_March_2022.pdf", date: "2022-09-25", size: "2.0 MB", url: "#" },
      { id: "artn-21", name: "Annual_Return_31_March_2021.pdf", date: "2021-09-24", size: "1.9 MB", url: "#" },
    ],
  },
  {
    id: "bm-intimation",
    name: "BM Intimation",
    desc: "Prior intimations sent to the Stock Exchange (BSE) regarding upcoming board meetings scheduled to approve financial results or other key corporate actions.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const startYear = year.substring(3, 5);
      const endYear = year.substring(6, 8);
      acc[year] = [
        { id: `bmi-q4-${year}`, name: `BM_Intimation_Audited_Results_Q4_FY${endYear}.pdf`, date: `20${endYear}-05-18`, size: "340 KB", url: "#" },
        { id: `bmi-q3-${year}`, name: `BM_Intimation_Unaudited_Results_Q3_FY${endYear}.pdf`, date: `20${endYear}-01-28`, size: "295 KB", url: "#" },
        { id: `bmi-q2-${year}`, name: `BM_Intimation_Unaudited_Results_Q2_FY${endYear}.pdf`, date: `20${startYear}-10-22`, size: "310 KB", url: "#" },
        { id: `bmi-q1-${year}`, name: `BM_Intimation_Unaudited_Results_Q1_FY${endYear}.pdf`, date: `20${startYear}-07-25`, size: "285 KB", url: "#" },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "bm-outcome",
    name: "BM Outcome",
    desc: "Outcome reports submitted to the BSE outlining decisions taken during Board Meetings, including approvals of financial statements and corporate schemes.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const startYear = year.substring(3, 5);
      const endYear = year.substring(6, 8);
      acc[year] = [
        { id: `bmo-q4-${year}`, name: `BM_Outcome_Audited_Financial_Results_Q4_FY${endYear}.pdf`, date: `20${endYear}-05-25`, size: "1.2 MB", url: "#" },
        { id: `bmo-q3-${year}`, name: `BM_Outcome_Unaudited_Results_Q3_FY${endYear}.pdf`, date: `20${endYear}-02-05`, size: "940 KB", url: "#" },
        { id: `bmo-q2-${year}`, name: `BM_Outcome_Unaudited_Results_Q2_FY${endYear}.pdf`, date: `20${startYear}-10-30`, size: "1.1 MB", url: "#" },
        { id: `bmo-q1-${year}`, name: `BM_Outcome_Unaudited_Results_Q1_FY${endYear}.pdf`, date: `20${startYear}-08-02`, size: "890 KB", url: "#" },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "news-adv",
    name: "News Adv.",
    desc: "Newspaper advertisements published in leading English and Marathi publications detailing financial outcomes, general meetings, and public notices.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const startYear = year.substring(3, 5);
      const endYear = year.substring(6, 8);
      acc[year] = [
        { id: `news-q4-${year}`, name: `News_Ad_Audited_Financial_Results_Q4_FY${endYear}.pdf`, date: `20${endYear}-05-27`, size: "650 KB", url: "#" },
        { id: `news-q3-${year}`, name: `News_Ad_Unaudited_Results_Q3_FY${endYear}.pdf`, date: `20${endYear}-02-07`, size: "520 KB", url: "#" },
        { id: `news-q2-${year}`, name: `News_Ad_Unaudited_Results_Q2_FY${endYear}.pdf`, date: `20${startYear}-11-01`, size: "580 KB", url: "#" },
        { id: `news-q1-${year}`, name: `News_Ad_Unaudited_Results_Q1_FY${endYear}.pdf`, date: `20${startYear}-08-04`, size: "490 KB", url: "#" },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "twc",
    name: "TWC",
    desc: "Trading Window Closure notifications issued to designated insiders and directors, restricting trade on company shares prior to financial disclosures.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const startYear = year.substring(3, 5);
      const endYear = year.substring(6, 8);
      acc[year] = [
        { id: `twc-q1fy26-${year}`, name: `Trading_Window_Closure_Q1_FY${parseInt(endYear) + 1}.pdf`, date: `20${endYear}-06-30`, size: "180 KB", url: "#" },
        { id: `twc-q4-${year}`, name: `Trading_Window_Closure_Q4_FY${endYear}.pdf`, date: `20${endYear}-03-31`, size: "175 KB", url: "#" },
        { id: `twc-q3-${year}`, name: `Trading_Window_Closure_Q3_FY${endYear}.pdf`, date: `20${startYear}-12-31`, size: "182 KB", url: "#" },
        { id: `twc-q2-${year}`, name: `Trading_Window_Closure_Q2_FY${endYear}.pdf`, date: `20${startYear}-09-30`, size: "170 KB", url: "#" },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "book-closure",
    name: "Book Closure",
    desc: "Notices determining the dates during which the Register of Members and Share Transfer Books remain closed for dividends or general meeting requirements.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const yearStr = year.substring(3, 5);
      acc[year] = [
        { id: `bc-${year}`, name: `Book_Closure_Notice_AGM_20${parseInt(yearStr) + 1}.pdf`, date: `20${parseInt(yearStr) + 1}-08-08`, size: "235 KB", url: "#" },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "notices",
    name: "Notices",
    desc: "Official convocations, proxy forms, and explanatory notes for Annual General Meetings (AGM), Extraordinary General Meetings (EGM), or Postal Ballot.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const yearStr = year.substring(3, 5);
      acc[year] = [
        { id: `not-agm-${year}`, name: `Notice_of_AGM_August_20${parseInt(yearStr) + 1}.pdf`, date: `20${parseInt(yearStr) + 1}-08-15`, size: "1.8 MB", url: "#" },
        { id: `not-postal-${year}`, name: `Notice_of_Postal_Ballot_${year.replace(" ", "_")}.pdf`, date: `20${parseInt(yearStr) + 1}-06-10`, size: "850 KB", url: "#" },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "scrutinizer-report",
    name: "Scrutinizer Report",
    desc: "Reports compiled by independent scrutinizers certifying the validity and outcome of remote e-voting and ballot voting for general assemblies.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const yearStr = year.substring(3, 5);
      acc[year] = [
        { id: `scr-${year}`, name: `Scrutinizer_Report_AGM_20${parseInt(yearStr) + 1}.pdf`, date: `20${parseInt(yearStr) + 1}-09-12`, size: "780 KB", url: "#" },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "voting-results",
    name: "Voting Results",
    desc: "Disclosure of the voting counts and resolutions approved during corporate assemblies, formatted per Regulation 44 of SEBI LODR.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const yearStr = year.substring(3, 5);
      acc[year] = [
        { id: `vr-${year}`, name: `Voting_Results_AGM_20${parseInt(yearStr) + 1}_Regulation_44.pdf`, date: `20${parseInt(yearStr) + 1}-09-12`, size: "420 KB", url: "#" },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "press-release",
    name: "Press Release",
    desc: "Media circulars and corporate announcements issued to the press and public regarding financial outcomes or strategic updates.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const startYear = year.substring(3, 5);
      const endYear = year.substring(6, 8);
      acc[year] = [
        { id: `pr-q4-${year}`, name: `Press_Release_Financial_Results_Q4_FY${endYear}.pdf`, date: `20${endYear}-05-25`, size: "320 KB", url: "#" },
        { id: `pr-update-${year}`, name: `Press_Release_Corporate_Development_FY${endYear}.pdf`, date: `20${startYear}-12-18`, size: "280 KB", url: "#" },
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
  {
    id: "policies-scheme",
    name: "Policies / Scheme",
    desc: "Corporate governance guidelines, ethical codes, charter policies, and internal codes adopted by Aayush Wellness Limited to secure transparency.",
    hasYears: false,
    documents: [
      { id: "pol-1", name: "Code_of_Conduct_and_Ethics.pdf", date: "2025-03-15", size: "450 KB", url: "#" },
      { id: "pol-2", name: "Whistle_Blower_Policy.pdf", date: "2025-03-15", size: "380 KB", url: "#" },
      { id: "pol-3", name: "Policy_on_Related_Party_Transactions.pdf", date: "2025-03-15", size: "520 KB", url: "#" },
      { id: "pol-4", name: "Nomination_and_Remuneration_Policy.pdf", date: "2025-03-15", size: "410 KB", url: "#" },
      { id: "pol-5", name: "Materiality_of_Events_Policy.pdf", date: "2025-03-15", size: "340 KB", url: "#" },
      { id: "pol-6", name: "Archival_Policy.pdf", date: "2025-03-15", size: "280 KB", url: "#" },
      { id: "pol-7", name: "Criteria_for_Making_Payments_to_Non-Executive_Directors.pdf", date: "2025-03-15", size: "310 KB", url: "#" },
      { id: "pol-8", name: "Code_of_Internal_Procedures_and_Conduct_for_Trading.pdf", date: "2025-03-15", size: "460 KB", url: "#" },
    ],
  },
  {
    id: "updates",
    name: "Updates",
    desc: "General updates, investor updates, presentation reports, and material communications addressing the investor ecosystem.",
    hasYears: false,
    documents: [
      { id: "upd-1", name: "Corporate_Investor_Presentation_June_2025.pdf", date: "2025-06-01", size: "3.2 MB", url: "#" },
      { id: "upd-2", name: "Corporate_Investor_Presentation_December_2024.pdf", date: "2024-12-05", size: "2.9 MB", url: "#" },
    ],
  },
  {
    id: "bse-compliances",
    name: "BSE Compliances",
    desc: "Compliance reports, shareholding patterns, and statutory disclosures submitted under SEBI Listing Obligations and Disclosure Requirements (LODR).",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYearAndQuarter: FINANCIAL_YEARS.reduce((acc, year) => {
      const startYear = year.substring(5, 7); // "24" for "FY 2024-25"
      const endYear = year.substring(8, 10);   // "25" for "FY 2024-25"
      acc[year] = {
        "Q1": [
          { id: `bse-reg33-q1-${year}`, name: `Reg_33_Financial_Results_Q1_FY${endYear}.pdf`, date: `20${startYear}-08-14`, size: "890 KB", url: "#" },
          { id: `bse-shp-q1-${year}`, name: `Shareholding_Pattern_Q1_FY${endYear}.pdf`, date: `20${startYear}-07-15`, size: "820 KB", url: "#" },
          { id: `bse-gov-q1-${year}`, name: `Corporate_Governance_Report_Q1_FY${endYear}.pdf`, date: `20${startYear}-07-15`, size: "940 KB", url: "#" },
        ],
        "Q2": [
          { id: `bse-reg33-q2-${year}`, name: `Reg_33_Financial_Results_Q2_FY${endYear}.pdf`, date: `20${startYear}-11-14`, size: "920 KB", url: "#" },
          { id: `bse-shp-q2-${year}`, name: `Shareholding_Pattern_Q2_FY${endYear}.pdf`, date: `20${startYear}-10-15`, size: "825 KB", url: "#" },
          { id: `bse-gov-q2-${year}`, name: `Corporate_Governance_Report_Q2_FY${endYear}.pdf`, date: `20${startYear}-10-15`, size: "945 KB", url: "#" },
        ],
        "Q3": [
          { id: `bse-reg33-q3-${year}`, name: `Reg_33_Financial_Results_Q3_FY${endYear}.pdf`, date: `20${endYear}-02-14`, size: "910 KB", url: "#" },
          { id: `bse-shp-q3-${year}`, name: `Shareholding_Pattern_Q3_FY${endYear}.pdf`, date: `20${endYear}-01-15`, size: "815 KB", url: "#" },
          { id: `bse-gov-q3-${year}`, name: `Corporate_Governance_Report_Q3_FY${endYear}.pdf`, date: `20${endYear}-01-15`, size: "935 KB", url: "#" },
        ],
        "Q4": [
          { id: `bse-reg33-q4-${year}`, name: `Reg_33_Financial_Results_Q4_FY${endYear}.pdf`, date: `20${endYear}-05-25`, size: "1.1 MB", url: "#" },
          { id: `bse-reg7-q4-${year}`, name: `Reg_7(3)_Compliance_Certificate_FY${endYear}.pdf`, date: `20${endYear}-04-18`, size: "210 KB", url: "#" },
          { id: `bse-reg40-q4-${year}`, name: `Reg_40(9)_Compliance_Certificate_FY${endYear}.pdf`, date: `20${endYear}-04-18`, size: "195 KB", url: "#" },
          { id: `bse-shp-q4-${year}`, name: `Shareholding_Pattern_Q4_FY${endYear}.pdf`, date: `20${endYear}-04-15`, size: "820 KB", url: "#" },
          { id: `bse-gov-q4-${year}`, name: `Corporate_Governance_Report_Q4_FY${endYear}.pdf`, date: `20${endYear}-04-15`, size: "940 KB", url: "#" },
        ],
      };
      return acc;
    }, {} as Record<string, Record<string, DocumentItem[]>>),
  },
  {
    id: "right-issue",
    name: "Right Issue",
    desc: "Legal and procedural documents, including letters of offer and application drafts, pertaining to rights issues authorized by the company.",
    hasYears: false,
    documents: [
      { id: "ri-1", name: "Right_Issue_Letter_of_Offer_2024.pdf", date: "2024-11-12", size: "2.6 MB", url: "#" },
      { id: "ri-2", name: "Right_Issue_Abridged_Letter_of_Offer_2024.pdf", date: "2024-11-12", size: "1.1 MB", url: "#" },
      { id: "ri-3", name: "Right_Issue_Application_Form_2024.pdf", date: "2024-11-12", size: "480 KB", url: "#" },
    ],
  },
  {
    id: "dividend",
    name: "Dividend",
    desc: "Details of unclaimed or unpaid dividends declared by the Board of Directors, ensuring compliance with Investor Education and Protection Fund (IEPF).",
    hasYears: false,
    documents: [
      { id: "div-1", name: "Unclaimed_Dividend_Details_2024-25.pdf", date: "2025-05-30", size: "850 KB", url: "#" },
      { id: "div-2", name: "Unclaimed_Dividend_Details_2023-24.pdf", date: "2024-05-30", size: "810 KB", url: "#" },
    ],
  },
  {
    id: "moa-aoa",
    name: "MOA / AOA",
    desc: "Fundamental constitutional blueprints outlining Aayush Wellness Limited's corporate objectives (Memorandum) and internal administration (Articles).",
    hasYears: false,
    documents: [
      { id: "moa", name: "Memorandum_of_Association_(MOA).pdf", date: "2023-09-15", size: "1.8 MB", url: "#" },
      { id: "aoa", name: "Articles_of_Association_(AOA).pdf", date: "2023-09-15", size: "2.4 MB", url: "#" },
    ],
  },
  {
    id: "board-of-directors",
    name: "Board of Directors",
    desc: "Profiles, committee compositions, and details of the Board of Directors of Aayush Wellness Limited.",
    hasYears: false,
    documents: [
      { id: "bod-1", name: "Composition_of_Committees.pdf", date: "2025-04-10", size: "320 KB", url: "#" },
      { id: "bod-2", name: "Board_of_Directors_Profiles.pdf", date: "2025-04-10", size: "480 KB", url: "#" },
    ],
  },
  {
    id: "subsidiaries-financials",
    name: "Financial Statements of Subsidiaries",
    desc: "Audited financial statements and related disclosures of the subsidiary companies of Aayush Wellness Limited.",
    hasYears: true,
    years: FINANCIAL_YEARS,
    documentsByYear: FINANCIAL_YEARS.reduce((acc, year) => {
      const endYear = year.substring(6, 8);
      acc[year] = [
        { id: `sub-fin-${year}`, name: `Financial_Statement_Subsidiary_Companies_FY${endYear}.pdf`, date: `20${endYear}-08-20`, size: "1.6 MB", url: "#" }
      ];
      return acc;
    }, {} as Record<string, DocumentItem[]>),
  },
];

export function InvestorsPageClient() {
  const [activeCategory, setActiveCategory] = useState("annual-report");
  const [activeYearsByCat, setActiveYearsByCat] = useState<Record<string, string>>(
    categoriesData.reduce((acc, cat) => {
      acc[cat.id] = FINANCIAL_YEARS[0];
      return acc;
    }, {} as Record<string, string>)
  );

  // Mobile Accordion state: holds the ID of expanded category
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>("annual-report");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeQuarter, setActiveQuarter] = useState<string>("Q1");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Trigger simulated download notification
  const handleDownload = (docName: string, docSize: string) => {
    setToastMessage(`📥 Starting download: ${docName} (${docSize})...`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const currentCategory = useMemo(() => {
    return categoriesData.find((cat) => cat.id === activeCategory) || categoriesData[0];
  }, [activeCategory]);

  const activeYear = activeYearsByCat[currentCategory.id] || FINANCIAL_YEARS[0];

  const handleYearChange = (catId: string, year: string) => {
    setActiveYearsByCat((prev) => ({
      ...prev,
      [catId]: year,
    }));
  };

  // Helper to filter documents based on search query
  const getFilteredDocs = (cat: Category, year: string) => {
    let list: DocumentItem[] = [];
    if (cat.id === "bse-compliances") {
      list = cat.documentsByYearAndQuarter?.[year]?.[activeQuarter] || [];
    } else if (cat.hasYears) {
      list = cat.documentsByYear?.[year] || [];
    } else {
      list = cat.documents || [];
    }

    if (!searchQuery) return list;

    const query = searchQuery.toLowerCase();
    return list.filter((doc) => doc.name.toLowerCase().includes(query));
  };

  const desktopFilteredDocuments = useMemo(() => {
    return getFilteredDocs(currentCategory, activeYear);
  }, [currentCategory, activeYear, activeQuarter, searchQuery]);

  return (
    <div className="investors-page-container">
      {/* Hero Section */}
      <section className="investors-hero">
        <div className="investors-hero-bg" style={{ backgroundImage: "url('/assets/images/investors/investors_bg.jpg')" }} />
        <div className="investors-hero-overlay" />
        <div className="investors-hero-content">
          <h1 className="investors-hero-title">Investor Relations</h1>
          <p className="investors-hero-desc">
            All financial disclosures, governance documents, regulatory filings, and shareholder information for Aayush Wellness Limited - organised for transparency and ease of access.
          </p>
        </div>
      </section>

      <div className="investors-page-wrapper">

        {/* ================= DESKTOP VIEW ================= */}
        {/* Left Fixed Sidebar */}
        <aside className="investors-sidebar">
          {categoriesData.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                className={`sidebar-item ${isActive ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
                title={cat.name}
              >
                {cat.name}
              </button>
            );
          })}
        </aside>

        {/* Right Main Screen Panel */}
        <section className="investors-content">
          <div className="investors-header-block">
            <h1 className="investors-category-title">{currentCategory.name}</h1>
            <p className="investors-category-desc">{currentCategory.desc}</p>
          </div>

          {currentCategory.id === "investor-grievance" && (
            <div className="grievance-cards-grid" style={{ marginBottom: "40px" }}>
              {/* Card 1 */}
              <div className="grievance-card">
                <h3 className="grievance-card-header">Grievance Redressal Officer</h3>
                <div className="grievance-card-content">
                  <div className="grievance-field">
                    <span className="field-label">NAME</span>
                    <span className="field-value">Ms. Sneha Khemka</span>
                  </div>
                  <div className="grievance-field">
                    <span className="field-label">DESIGNATION</span>
                    <span className="field-value">Company Secretary & Compliance Officer</span>
                  </div>
                  <div className="grievance-field">
                    <span className="field-label">CONTACT NO.</span>
                    <span className="field-value">+91 84486 93031</span>
                  </div>
                  <div className="grievance-field">
                    <span className="field-label">E-MAIL</span>
                    <span className="field-value">
                      <a href="mailto:cs@aayushwellness.com">cs@aayushwellness.com</a>
                    </span>
                  </div>
                  <div className="grievance-field">
                    <span className="field-label">WEBSITE</span>
                    <span className="field-value">
                      <a href="http://www.aayushwellness.com/" target="_blank" rel="noopener noreferrer">
                        http://www.aayushwellness.com/
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="grievance-card">
                <h3 className="grievance-card-header">Registrar & Share Transfer Agent</h3>
                <div className="grievance-card-content">
                  <div className="grievance-field">
                    <span className="field-label">RTA NAME</span>
                    <span className="field-value">Beetal Financial & Computer Services (P) Ltd</span>
                  </div>
                  <div className="grievance-field">
                    <span className="field-label">ADDRESS</span>
                    <span className="field-value">
                      Beetal House, 3rd Floor, 99 Madangir, Behind Local Shopping Centre, Near Dada Harsukh Dass Mandir, New Delhi - 110062.
                    </span>
                  </div>
                  <div className="grievance-field">
                    <span className="field-label">CONTACT NO.</span>
                    <span className="field-value">011-29961281</span>
                  </div>
                  <div className="grievance-field">
                    <span className="field-label">E-MAIL</span>
                    <span className="field-value">
                      <a href="mailto:beetalrta@gmail.com">beetalrta@gmail.com</a>
                    </span>
                  </div>
                  <div className="grievance-field">
                    <span className="field-label">WEBSITE</span>
                    <span className="field-value">
                      <a href="http://www.beetalfinancial.com/" target="_blank" rel="noopener noreferrer">
                        http://www.beetalfinancial.com/
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Box */}
          <div className="investors-search-box">
            <svg
              className="investors-search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="investors-search-input"
              placeholder={`Search ${currentCategory.name} documents...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Financial Years Tabs / BSE Compliances custom filters (conditionally rendered) */}
          {currentCategory.id === "bse-compliances" ? (
            <div className="bse-filters-container">
              <div className="years-dropdown-container">
                <label className="years-tabs-label" htmlFor="bse-year-select">Select Financial Year</label>
                <div className="select-wrapper">
                  <select
                    id="bse-year-select"
                    className="bse-year-select"
                    value={activeYear}
                    onChange={(e) => handleYearChange("bse-compliances", e.target.value)}
                  >
                    {FINANCIAL_YEARS.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="quarter-tabs-container">
                <div className="years-tabs-label">Select Quarter</div>
                <div className="quarter-tabs">
                  {["Q1", "Q2", "Q3", "Q4"].map((q) => {
                    const isActive = activeQuarter === q;
                    return (
                      <button
                        key={q}
                        className={`quarter-tab ${isActive ? "active" : ""}`}
                        onClick={() => setActiveQuarter(q)}
                      >
                        Quarter {q.substring(1)}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            currentCategory.hasYears && currentCategory.years && (
              <div className="years-tabs-container">
                <div className="years-tabs-label">Select Financial Year</div>
                <div className="years-tabs">
                  {currentCategory.years.map((year) => {
                    const isActive = activeYear === year;
                    return (
                      <button
                        key={year}
                        className={`year-tab ${isActive ? "active" : ""}`}
                        onClick={() => handleYearChange(currentCategory.id, year)}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              </div>
            )
          )}

          {/* Documents Table */}
          <div className="document-table-wrapper">
            {desktopFilteredDocuments.length > 0 ? (
              <table className="document-table">
                <thead>
                  <tr>
                    <th>Document Name</th>
                    <th>Publication Date</th>
                    <th>File Size</th>
                    <th style={{ textAlign: "right" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {desktopFilteredDocuments.map((doc) => (
                    <tr key={doc.id}>
                      <td>
                        <a
                          className="doc-link"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDownload(doc.name, doc.size);
                          }}
                          href="#"
                        >
                          <svg
                            className="doc-link-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          {doc.name}
                        </a>
                      </td>
                      <td>
                        <span className="doc-date">{doc.date}</span>
                      </td>
                      <td>
                        <span className="doc-size">{doc.size}</span>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <button
                          className="doc-action-btn"
                          onClick={() => handleDownload(doc.name, doc.size)}
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="no-documents">
                No documents found matching &quot;{searchQuery}&quot; for this period.
              </div>
            )}
          </div>
        </section>

        {/* ================= MOBILE VIEW (ACCORDIONS) ================= */}
        <section className="investors-mobile-accordions">
          <div className="mobile-header-block">
            <SectionTag num="01" label="Investors Ecosystem" theme="dark" />
            <h1 className="about-title" style={{ fontSize: "28px", marginTop: "16px", marginBottom: "8px" }}>
              BSE-Listed Governance
            </h1>
            <p className="investors-category-desc" style={{ fontSize: "14px", marginBottom: "20px" }}>
              Access regulatory filings, reports, compliance disclosures, and company policies.
            </p>

            {/* Global mobile search */}
            <div className="investors-search-box">
              <svg
                className="investors-search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="investors-search-input"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="accordion-list">
            {categoriesData.map((cat) => {
              const isExpanded = expandedMobileCategory === cat.id;
              const mobileCatActiveYear = activeYearsByCat[cat.id] || FINANCIAL_YEARS[0];
              const mobileFilteredDocuments = getFilteredDocs(cat, mobileCatActiveYear);

              return (
                <div key={cat.id} className="accordion-item">
                  <button
                    className={`accordion-header ${isExpanded ? "expanded" : ""}`}
                    onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.id)}
                  >
                    <span>{cat.name}</span>
                    <svg
                      className="accordion-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {isExpanded && (
                    <div className="accordion-content">
                      <p className="investors-category-desc" style={{ fontSize: "13px", marginBottom: "16px" }}>
                        {cat.desc}
                      </p>

                      {cat.id === "investor-grievance" && (
                        <div className="grievance-cards-grid" style={{ marginBottom: "24px" }}>
                          {/* Card 1 */}
                          <div className="grievance-card">
                            <h3 className="grievance-card-header">Grievance Redressal Officer</h3>
                            <div className="grievance-card-content">
                              <div className="grievance-field">
                                <span className="field-label">NAME</span>
                                <span className="field-value">Ms. Sneha Khemka</span>
                              </div>
                              <div className="grievance-field">
                                <span className="field-label">DESIGNATION</span>
                                <span className="field-value">Company Secretary & Compliance Officer</span>
                              </div>
                              <div className="grievance-field">
                                <span className="field-label">CONTACT NO.</span>
                                <span className="field-value">+91 84486 93031</span>
                              </div>
                              <div className="grievance-field">
                                <span className="field-label">E-MAIL</span>
                                <span className="field-value">
                                  <a href="mailto:cs@aayushwellness.com">cs@aayushwellness.com</a>
                                </span>
                              </div>
                              <div className="grievance-field">
                                <span className="field-label">WEBSITE</span>
                                <span className="field-value">
                                  <a href="http://www.aayushwellness.com/" target="_blank" rel="noopener noreferrer">
                                    http://www.aayushwellness.com/
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Card 2 */}
                          <div className="grievance-card">
                            <h3 className="grievance-card-header">Registrar & Share Transfer Agent</h3>
                            <div className="grievance-card-content">
                              <div className="grievance-field">
                                <span className="field-label">RTA NAME</span>
                                <span className="field-value">Beetal Financial & Computer Services (P) Ltd</span>
                              </div>
                              <div className="grievance-field">
                                <span className="field-label">ADDRESS</span>
                                <span className="field-value">
                                  Beetal House, 3rd Floor, 99 Madangir, Behind Local Shopping Centre, Near Dada Harsukh Dass Mandir, New Delhi - 110062.
                                </span>
                              </div>
                              <div className="grievance-field">
                                <span className="field-label">CONTACT NO.</span>
                                <span className="field-value">011-29961281</span>
                              </div>
                              <div className="grievance-field">
                                <span className="field-label">E-MAIL</span>
                                <span className="field-value">
                                  <a href="mailto:beetalrta@gmail.com">beetalrta@gmail.com</a>
                                </span>
                              </div>
                              <div className="grievance-field">
                                <span className="field-label">WEBSITE</span>
                                <span className="field-value">
                                  <a href="http://www.beetalfinancial.com/" target="_blank" rel="noopener noreferrer">
                                    http://www.beetalfinancial.com/
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Year Tabs inside Mobile Accordion */}
                      {/* Year Tabs / BSE Compliances custom filters inside Mobile Accordion */}
                      {cat.id === "bse-compliances" ? (
                        <div className="bse-filters-container mobile-bse-filters" style={{ padding: "14px", gap: "12px", border: "1px solid var(--gray-200)", borderRadius: "8px", background: "#ffffff", marginBottom: "16px" }}>
                          <div className="years-dropdown-container">
                            <label className="years-tabs-label" htmlFor={`bse-year-select-mobile-${cat.id}`} style={{ fontSize: "11px", marginBottom: "6px" }}>Select Financial Year</label>
                            <select
                              id={`bse-year-select-mobile-${cat.id}`}
                              className="bse-year-select"
                              style={{ padding: "8px 12px", fontSize: "13px", width: "100%", boxSizing: "border-box" }}
                              value={mobileCatActiveYear}
                              onChange={(e) => handleYearChange(cat.id, e.target.value)}
                            >
                              {FINANCIAL_YEARS.map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="quarter-tabs-container" style={{ marginTop: "8px" }}>
                            <div className="years-tabs-label" style={{ fontSize: "11px", marginBottom: "6px" }}>Select Quarter</div>
                            <div className="quarter-tabs" style={{ gap: "6px", flexWrap: "wrap" }}>
                              {["Q1", "Q2", "Q3", "Q4"].map((q) => {
                                const isActive = activeQuarter === q;
                                return (
                                  <button
                                    key={q}
                                    className={`quarter-tab ${isActive ? "active" : ""}`}
                                    style={{ padding: "6px 12px", fontSize: "11px" }}
                                    onClick={() => setActiveQuarter(q)}
                                  >
                                    Quarter {q.substring(1)}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ) : (
                        cat.hasYears && cat.years && (
                          <div className="years-tabs-container">
                            <div className="years-tabs" style={{ gap: "6px" }}>
                              {cat.years.map((year) => {
                                const isActive = mobileCatActiveYear === year;
                                return (
                                  <button
                                    key={year}
                                    className={`year-tab ${isActive ? "active" : ""}`}
                                    style={{ padding: "6px 12px", fontSize: "11px" }}
                                    onClick={() => handleYearChange(cat.id, year)}
                                  >
                                    {year}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )
                      )}

                      {/* Document List inside Mobile Accordion */}
                      <div className="document-table-wrapper" style={{ marginTop: "12px" }}>
                        {mobileFilteredDocuments.length > 0 ? (
                          <table className="document-table">
                            <thead>
                              <tr>
                                <th>Document Name</th>
                                <th style={{ textAlign: "right" }}>Download</th>
                              </tr>
                            </thead>
                            <tbody>
                              {mobileFilteredDocuments.map((doc) => (
                                <tr key={doc.id}>
                                  <td>
                                    <a
                                      className="doc-link"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleDownload(doc.name, doc.size);
                                      }}
                                      href="#"
                                      style={{ fontSize: "13px" }}
                                    >
                                      <svg
                                        className="doc-link-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                      </svg>
                                      {doc.name}
                                    </a>
                                  </td>
                                  <td style={{ textAlign: "right" }}>
                                    <button
                                      className="doc-action-btn"
                                      style={{ padding: "6px 10px", fontSize: "11px" }}
                                      onClick={() => handleDownload(doc.name, doc.size)}
                                    >
                                      Download
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <div className="no-documents" style={{ fontSize: "13px", padding: "20px 10px" }}>
                            No documents found.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Investor Grievance Section */}
      <section className="investors-grievance">
        <div className="grievance-banner">
          <div className="grievance-banner-bg" style={{ backgroundImage: "url('/assets/images/investors/investors_1.jpg')" }} />
          <div className="grievance-banner-overlay" />
          <h2 className="grievance-banner-title">Investor Grievance</h2>
        </div>

        <div className="grievance-cards-grid">
          {/* Card 1 */}
          <div className="grievance-card">
            <h3 className="grievance-card-header">Grievance Redressal Officer</h3>
            <div className="grievance-card-content">
              <div className="grievance-field">
                <span className="field-label">NAME</span>
                <span className="field-value">Ms. Sneha Khemka</span>
              </div>
              <div className="grievance-field">
                <span className="field-label">DESIGNATION</span>
                <span className="field-value">Company Secretary & Compliance Officer</span>
              </div>
              <div className="grievance-field">
                <span className="field-label">CONTACT NO.</span>
                <span className="field-value">+91 84486 93031</span>
              </div>
              <div className="grievance-field">
                <span className="field-label">E-MAIL</span>
                <span className="field-value">
                  <a href="mailto:cs@aayushwellness.com">cs@aayushwellness.com</a>
                </span>
              </div>
              <div className="grievance-field">
                <span className="field-label">WEBSITE</span>
                <span className="field-value">
                  <a href="http://www.aayushwellness.com/" target="_blank" rel="noopener noreferrer">
                    http://www.aayushwellness.com/
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="grievance-card">
            <h3 className="grievance-card-header">Registrar & Share Transfer Agent</h3>
            <div className="grievance-card-content">
              <div className="grievance-field">
                <span className="field-label">RTA NAME</span>
                <span className="field-value">Beetal Financial & Computer Services (P) Ltd</span>
              </div>
              <div className="grievance-field">
                <span className="field-label">ADDRESS</span>
                <span className="field-value">
                  Beetal House, 3rd Floor, 99 Madangir, Behind Local Shopping Centre, Near Dada Harsukh Dass Mandir, New Delhi - 110062.
                </span>
              </div>
              <div className="grievance-field">
                <span className="field-label">CONTACT NO.</span>
                <span className="field-value">011-29961281</span>
              </div>
              <div className="grievance-field">
                <span className="field-label">E-MAIL</span>
                <span className="field-value">
                  <a href="mailto:beetalrta@gmail.com">beetalrta@gmail.com</a>
                </span>
              </div>
              <div className="grievance-field">
                <span className="field-label">WEBSITE</span>
                <span className="field-value">
                  <a href="http://www.beetalfinancial.com/" target="_blank" rel="noopener noreferrer">
                    http://www.beetalfinancial.com/
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Download Toast Alert */}
      <div className={`download-toast ${showToast ? "show" : ""}`}>
        <div className="download-toast-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
