"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ClientInitializer() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // 1. One-time initial loading screen delay on mount
  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setLoaderVisible(false);
    }, 1600);
    return () => clearTimeout(loaderTimer);
  }, []);

  // 2. Intersection Observer to trigger scroll reveals on route changes
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => revealObserver.observe(el));

    // Dynamic hover scaling triggers for custom cursors (rescan elements on page load)
    const interactives = document.querySelectorAll(
      "a, button, .product-card, .beyond-item, .news-card, input, textarea"
    );
    const scaleUpCursor = () => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(1.5)";
        followerRef.current.style.transform = "translate(-50%, -50%) scale(1.5)";
        followerRef.current.style.borderColor = "var(--lime)";
      }
    };
    const scaleDownCursor = () => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        followerRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        followerRef.current.style.borderColor = "rgba(200,245,90,0.5)";
      }
    };

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", scaleUpCursor);
      el.addEventListener("mouseleave", scaleDownCursor);
    });

    return () => {
      revealElements.forEach((el) => revealObserver.unobserve(el));
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", scaleUpCursor);
        el.removeEventListener("mouseleave", scaleDownCursor);
      });
    };
  }, [pathname]);

  // 3. Custom cursor lag movement hooks
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        followerRef.current.style.left = `${e.clientX}px`;
        followerRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnterViewport = () => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.opacity = "1";
        followerRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeaveViewport = () => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.opacity = "0";
        followerRef.current.style.opacity = "0";
      }
    };

    if (window.innerWidth > 1024) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseenter", handleMouseEnterViewport);
      document.addEventListener("mouseleave", handleMouseLeaveViewport);
    }

    return () => {
      if (window.innerWidth > 1024) {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseenter", handleMouseEnterViewport);
        document.removeEventListener("mouseleave", handleMouseLeaveViewport);
      }
    };
  }, []);

  return (
    <>
      {/* LOADER */}
      <div id="loader" className={loaderVisible ? "" : "hidden"}>
        <div className="loader-logo">Aayush <span>Wellness</span></div>
        <div className="loader-bar">
          <div className="loader-fill"></div>
        </div>
      </div>

      {/* CURSOR */}
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  );
}
