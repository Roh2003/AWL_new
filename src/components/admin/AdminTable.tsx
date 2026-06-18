"use client";

import React, { useState, useMemo } from "react";

export interface TableColumn<T> {
  header: string;
  accessor?: keyof T | string;
  render?: (row: T) => React.ReactNode;
}

interface AdminTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  searchPlaceholder?: string;
  searchKeys?: (keyof T)[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onView?: (row: T) => void;
  onCreate?: () => void;
  createButtonText?: string;
}

export default function AdminTable<T extends { id: string | number }>({
  data,
  columns,
  searchPlaceholder = "Search entries...",
  searchKeys,
  onEdit,
  onDelete,
  onView,
  onCreate,
  createButtonText,
}: AdminTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Reset to page 1 on search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Filter data
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;

    const query = searchQuery.toLowerCase();
    return data.filter((item) => {
      // If search keys are provided, search only those
      if (searchKeys && searchKeys.length > 0) {
        return searchKeys.some((key) => {
          const val = item[key];
          return val ? String(val).toLowerCase().includes(query) : false;
        });
      }

      // Otherwise search all string/number fields
      return Object.values(item).some((val) => {
        if (typeof val === "string" || typeof val === "number") {
          return String(val).toLowerCase().includes(query);
        }
        return false;
      });
    });
  }, [data, searchQuery, searchKeys]);

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredData.length);

  return (
    <div className="admin-table-container">
      {/* Search & Actions Header */}
      <div className="admin-table-controls">
        <div className="admin-table-search">
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
            style={{ color: "var(--admin-text-muted)" }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {onCreate && createButtonText && (
          <button className="admin-btn admin-btn-primary" onClick={onCreate}>
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            {createButtonText}
          </button>
        )}
      </div>

      {/* Table Content */}
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx}>{col.header}</th>
              ))}
              {(onEdit || onDelete || onView) && (
                <th style={{ width: "120px", textAlign: "right" }}>Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + ((onEdit || onDelete || onView) ? 1 : 0)}
                  style={{ textAlign: "center", padding: "40px", color: "var(--admin-text-secondary)" }}
                >
                  No entries found.
                </td>
              </tr>
            ) : (
              paginatedData.map((row) => (
                <tr key={row.id}>
                  {columns.map((col, idx) => {
                    return (
                      <td key={idx}>
                        {col.render
                          ? col.render(row)
                          : col.accessor
                          ? String(row[col.accessor as keyof T] || "")
                          : null}
                      </td>
                    );
                  })}
                  {(onEdit || onDelete || onView) && (
                    <td>
                      <div className="admin-table-actions" style={{ justifyContent: "flex-end" }}>
                        {onView && (
                          <button
                            className="admin-btn-icon"
                            onClick={() => onView(row)}
                            title="View Details"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0Z"/><circle cx="12" cy="12" r="3"/></svg>
                          </button>
                        )}
                        {onEdit && (
                          <button
                            className="admin-btn-icon admin-btn-icon-edit"
                            onClick={() => onEdit(row)}
                            title="Edit"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                          </button>
                        )}
                        {onDelete && (
                          <button
                            className="admin-btn-icon admin-btn-icon-danger"
                            onClick={() => onDelete(row)}
                            title="Delete"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {filteredData.length > 0 && (
        <div className="admin-pagination">
          <div>
            Showing <span>{startIndex}</span> to <span>{endIndex}</span> of{" "}
            <span>{filteredData.length}</span> entries
          </div>
          <div className="admin-pagination-buttons">
            <button
              className="admin-btn admin-btn-secondary"
              style={{ padding: "6px 12px", fontSize: "0.8rem" }}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span style={{ display: "flex", alignItems: "center", padding: "0 8px" }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="admin-btn admin-btn-secondary"
              style={{ padding: "6px 12px", fontSize: "0.8rem" }}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
