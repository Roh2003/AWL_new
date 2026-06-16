"use client";

import React, { useState, useMemo } from "react";
import { NEWS_DATA, NEWS_CATEGORIES, NewsItem } from "./newsData";

export function NewsPageClient() {
  const [activeCategory, setActiveCategory] = useState("All News");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchText, setSearchText] = useState(""); // text entered in input, searches on button click or Enter key
  const [visibleCount, setVisibleCount] = useState(6);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Calculate article counts per category based on total dataset
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All News": NEWS_DATA.length };
    NEWS_CATEGORIES.forEach((cat) => {
      if (cat !== "All News") {
        counts[cat] = NEWS_DATA.filter((item) => item.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter articles based on active category and search text
  const filteredArticles = useMemo(() => {
    return NEWS_DATA.filter((item) => {
      // Category filter
      const matchesCategory =
        activeCategory === "All News" || item.category === activeCategory;

      // Search query filter
      const searchLower = searchText.trim().toLowerCase();
      const matchesSearch =
        searchLower === "" ||
        item.title.toLowerCase().includes(searchLower) ||
        item.excerpt.toLowerCase().includes(searchLower) ||
        item.source.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchText]);

  // Handle Search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchText(searchQuery);
    setVisibleCount(6); // reset pagination
  };

  // Handle Share click
  const handleShareClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/news#${id}` : "";
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Reset search
  const handleResetSearch = () => {
    setSearchQuery("");
    setSearchText("");
    setVisibleCount(6);
  };

  // Get spotlight items
  const spotlightItems = useMemo(() => {
    return NEWS_DATA.filter((item) => item.isSpotlight);
  }, []);

  // Normal articles list (exclude spotlight elements to avoid duplicates in the main grid)
  const gridArticles = useMemo(() => {
    return filteredArticles.filter((item) => !item.isSpotlight);
  }, [filteredArticles]);

  return (
    <div className="news-container">
      {/* 1. HERO HEADER SECTION */}
      <section className="news-hero-sec">
        <div className="news-hero-overlay" />
        <div className="news-hero-content">
          <h1 className="news-hero-title">Press & Media Center</h1>
          <p className="news-hero-desc">
            Stay updated with company announcements, media coverage, business milestones,
            product launches & industry developments
          </p>
        </div>
      </section>

      {/* 2. IN THE SPOTLIGHT SECTION */}
      <section className="spotlight-sec">
        <div className="spotlight-header">
          <span className="spotlight-tag">In The Spotlight</span>
        </div>

        {spotlightItems.length > 0 && (
          <div className="spotlight-wrapper">
            {/* Primary spotlight article (horizontal layout) */}
            <div className="spotlight-primary">
              <div className="spotlight-img-wrap">
                <img
                  src={spotlightItems[0].image}
                  alt={spotlightItems[0].title}
                  className="spotlight-img"
                />
                <span className="spotlight-badge-label">
                  {spotlightItems[0].badge}
                </span>
              </div>
              <div className="spotlight-info-wrap">
                <span className="spotlight-source">{spotlightItems[0].source}</span>
                <h2 className="spotlight-title">{spotlightItems[0].title}</h2>
                <p className="spotlight-excerpt">{spotlightItems[0].excerpt}</p>
                <div className="spotlight-footer">
                  <span className="spotlight-date">{spotlightItems[0].date}</span>
                  <a
                    href={spotlightItems[0].link}
                    className="spotlight-cta-btn"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary spotlight articles (two columns) */}
            {spotlightItems.length > 1 && (
              <div className="spotlight-secondary-grid">
                {spotlightItems.slice(1, 3).map((item) => (
                  <div key={item.id} className="spotlight-sub-card">
                    <div className="spotlight-sub-img-wrap">
                      <img src={item.image} alt={item.title} className="spotlight-sub-img" />
                      <span className="spotlight-badge-label">{item.badge}</span>
                    </div>
                    <div className="spotlight-sub-body">
                      <span className="spotlight-source">{item.source}</span>
                      <h3 className="spotlight-sub-title">{item.title}</h3>
                      <p className="spotlight-sub-excerpt">{item.excerpt}</p>
                      <div className="spotlight-sub-divider" />
                      <div className="spotlight-sub-footer">
                        <span className="spotlight-date">{item.date}</span>
                        <button
                          onClick={(e) => handleShareClick(item.id, e)}
                          className="spotlight-share-btn"
                          aria-label="Share article"
                        >
                          {copiedId === item.id ? (
                            <span className="share-copied-toast">Copied!</span>
                          ) : (
                            <>
                              <span>Share</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="18" cy="5" r="3" />
                                <circle cx="6" cy="12" r="3" />
                                <circle cx="18" cy="19" r="3" />
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* 3. BROWSE BY CATEGORY & SEARCH BAR */}
      <section className="category-bar-sec">
        <div className="category-bar-left">
          <span className="category-bar-label">Browse by Category :</span>
          <div className="category-pills">
            {NEWS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`category-pill-btn ${activeCategory === cat ? "active" : ""}`}
              >
                {cat} <span className="cat-count">({categoryCounts[cat] || 0})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="category-bar-right">
          <form onSubmit={handleSearchSubmit} className="search-form-wrap">
            <input
              type="text"
              placeholder="Search articles, publications or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input-field"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleResetSearch}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
            <button type="submit" className="search-submit-btn">
              Search
            </button>
          </form>

          <button className="filters-btn" aria-label="More filters">
            <svg
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
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            <span>More Filters</span>
          </button>
        </div>
      </section>

      {/* 4. MAIN ARTICLE GRID */}
      <section className="articles-grid-sec">
        {gridArticles.length > 0 ? (
          <>
            <div className="articles-main-grid">
              {gridArticles.slice(0, visibleCount).map((item) => (
                <article key={item.id} className="article-card">
                  <div className="article-img-wrap">
                    <img src={item.image} alt={item.title} className="article-card-img" />
                    <span className="article-badge-label">{item.badge}</span>
                  </div>
                  <div className="article-card-body">
                    <span className="article-source">{item.source}</span>
                    <h3 className="article-card-title">{item.title}</h3>
                    <p className="article-card-excerpt">{item.excerpt}</p>
                    <div className="article-card-divider" />
                    <div className="article-card-footer">
                      <span className="article-date">{item.date}</span>
                      <button
                        onClick={(e) => handleShareClick(item.id, e)}
                        className="article-share-btn"
                        aria-label="Share article"
                      >
                        {copiedId === item.id ? (
                          <span className="share-copied-toast">Copied!</span>
                        ) : (
                          <>
                            <span>Share</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="18" cy="5" r="3" />
                              <circle cx="6" cy="12" r="3" />
                              <circle cx="18" cy="19" r="3" />
                              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < gridArticles.length && (
              <div className="load-more-container">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="load-more-btn"
                >
                  <span>Load More Articles</span>
                  <svg
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
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-articles-found">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.35, marginBottom: "16px" }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <h3>No Articles Found</h3>
            <p>We couldn't find any articles matching "{searchText}". Try checking your spelling or adjusting your filters.</p>
            <button onClick={handleResetSearch} className="no-articles-reset-btn">
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 5. MEDIA & PRESS ENQUIRIES FOOTER BANNER */}
      <section className="enquiries-banner-sec">
        <div className="enquiries-banner-card">
          <div className="enquiries-left">
            <div className="enquiries-icon-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="enquiries-text-wrap">
              <h3 className="enquiries-title">Media & Press Enquiries</h3>
              <p className="enquiries-desc">
                For media enquiries, interview requests, or additional information, please reach
                out to our communications team.
              </p>
            </div>
          </div>
          <div className="enquiries-right">
            <a href="mailto:media@aayushwellness.com" className="enquiries-cta-btn">
              Contact Communications Team &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
