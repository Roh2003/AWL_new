"use client";

import React, { useState } from "react";
import AdminTable, { TableColumn } from "../AdminTable";
import AdminModal from "../AdminModal";
import AdminDeleteConfirm from "../AdminDeleteConfirm";
import { PRODUCTS_DATA, Product, ProductTab } from "../../products/productsData";

interface AdminProduct extends Product {
  category: string; // Tab ID e.g. "wellness-gummies", "health-supplements"
}

// Flat list of products from initial tab-based data structure
const INITIAL_DATA: AdminProduct[] = PRODUCTS_DATA.reduce((acc: AdminProduct[], tab: ProductTab) => {
  const tabProducts = tab.products.map((p) => ({
    ...p,
    category: tab.id,
  }));
  return [...acc, ...tabProducts];
}, []);

export default function ProductList() {
  const [data, setData] = useState<AdminProduct[]>(INITIAL_DATA);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<AdminProduct | null>(null);
  const [deletingItem, setDeletingItem] = useState<AdminProduct | null>(null);

  // Form states
  const [title, setTitle] = useState("");
  const [subLabel, setSubLabel] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("wellness-gummies");
  const [consumerNeed, setConsumerNeed] = useState("");
  const [benefitInput, setBenefitInput] = useState("");
  const [keyBenefits, setKeyBenefits] = useState<string[]>([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  // Category mapping
  const categoryNames: Record<string, string> = {
    "wellness-gummies": "Wellness Gummies",
    "health-supplements": "Health Supplements",
  };

  const handleCreateOpen = () => {
    setEditingItem(null);
    setTitle("");
    setSubLabel("");
    setDescription("");
    setImage("/assets/images/products/gummies_1.png");
    setCategory("wellness-gummies");
    setConsumerNeed("");
    setKeyBenefits([]);
    setIngredients([]);
    setBenefitInput("");
    setIngredientInput("");
    setIsFormOpen(true);
  };

  const handleEditOpen = (item: AdminProduct) => {
    setEditingItem(item);
    setTitle(item.title);
    setSubLabel(item.subLabel || "");
    setDescription(item.description || "");
    setImage(item.image || "/assets/images/products/gummies_1.png");
    setCategory(item.category);
    setConsumerNeed(item.consumerNeed || "");
    setKeyBenefits(item.keyBenefits || []);
    setIngredients(item.ingredientsList?.map((i) => i.name) || []);
    setBenefitInput("");
    setIngredientInput("");
    setIsFormOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const formattedIngredients = ingredients.map((name) => ({ name, image: "" }));

    if (editingItem) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editingItem.id
            ? {
                ...item,
                title,
                subLabel,
                description,
                image,
                category,
                consumerNeed,
                keyBenefits,
                ingredientsList: formattedIngredients,
              }
            : item
        )
      );
    } else {
      const newItem: AdminProduct = {
        id: `prod-${Date.now()}`,
        title,
        subLabel,
        description,
        image,
        category,
        consumerNeed,
        keyBenefits,
        ingredientsList: formattedIngredients,
        thumbnails: ["", "", ""],
      };
      setData((prev) => [newItem, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteOpen = (item: AdminProduct) => {
    setDeletingItem(item);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (!deletingItem) return;
    setData((prev) => prev.filter((item) => item.id !== deletingItem.id));
    setIsDeleteOpen(false);
    setDeletingItem(null);
  };

  // Add Key Benefit to list
  const addBenefit = () => {
    if (benefitInput.trim() && !keyBenefits.includes(benefitInput.trim())) {
      setKeyBenefits([...keyBenefits, benefitInput.trim()]);
      setBenefitInput("");
    }
  };

  const removeBenefit = (idx: number) => {
    setKeyBenefits(keyBenefits.filter((_, i) => i !== idx));
  };

  // Add Ingredient to list
  const addIngredient = () => {
    if (ingredientInput.trim() && !ingredients.includes(ingredientInput.trim())) {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput("");
    }
  };

  const removeIngredient = (idx: number) => {
    setIngredients(ingredients.filter((_, i) => i !== idx));
  };

  const getProductImageSrc = (imgSrc: string) => {
    if (!imgSrc) return "https://placehold.co/100x100/101010/d4ff9e?text=AWL";
    if (imgSrc.startsWith("http://") || imgSrc.startsWith("https://")) {
      return imgSrc;
    }
    if (imgSrc.startsWith("/")) {
      return imgSrc;
    }
    return `/${imgSrc}`;
  };

  const columns: TableColumn<AdminProduct>[] = [
    {
      header: "Product Info",
      accessor: "title",
      render: (row) => (
        <div className="admin-table-product-cell">
          <img
            src={getProductImageSrc(row.image)}
            alt={row.title}
            className="admin-table-thumb"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/100x100/101010/d4ff9e?text=AWL";
            }}
          />
          <div className="admin-table-product-info">
            <span className="admin-table-product-name">{row.title}</span>
            <span className="admin-table-product-sub">{row.subLabel}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Category",
      accessor: "category",
      render: (row) => (
        <span className="admin-badge admin-badge-success">
          {categoryNames[row.category] || row.category}
        </span>
      ),
    },
    {
      header: "Benefits Count",
      accessor: "keyBenefits",
      render: (row) => <span>{(row.keyBenefits || []).length} benefits</span>,
    },
    {
      header: "Ingredients Count",
      accessor: "ingredientsList",
      render: (row) => <span>{(row.ingredientsList || []).length} ingredients</span>,
    },
  ];

  return (
    <div>
      <AdminTable
        data={data}
        columns={columns}
        searchPlaceholder="Search products by title, sub-label..."
        searchKeys={["title", "subLabel", "category"]}
        onCreate={handleCreateOpen}
        createButtonText="Add Product"
        onEdit={handleEditOpen}
        onDelete={handleDeleteOpen}
      />

      {/* Form Modal */}
      <AdminModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={editingItem ? "Edit Product" : "Add Product"}
        size="large"
      >
        <form onSubmit={handleFormSubmit}>
          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-label">Product Title</label>
              <input
                type="text"
                className="admin-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Dreamy Sleep Gummies"
                required
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Sub Label (Target / Area)</label>
              <input
                type="text"
                className="admin-input"
                value={subLabel}
                onChange={(e) => setSubLabel(e.target.value)}
                placeholder="e.g. SLEEP & RECOVERY"
              />
            </div>
          </div>

          <div className="admin-form-row">
            <div className="admin-form-group">
              <label className="admin-label">Category</label>
              <select
                className="admin-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="wellness-gummies">Wellness Gummies</option>
                <option value="health-supplements">Health Supplements</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label className="admin-label">Main Image URL</label>
              <input
                type="text"
                className="admin-input"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="e.g. /assets/images/products/gummies_1.png"
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label className="admin-label">Description</label>
            <textarea
              className="admin-textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide a detailed product description..."
            />
          </div>

          <div className="admin-form-group">
            <label className="admin-label">Consumer Need (Why this product?)</label>
            <textarea
              className="admin-textarea"
              value={consumerNeed}
              onChange={(e) => setConsumerNeed(e.target.value)}
              placeholder="Describe what consumer need this product fulfills..."
            />
          </div>

          {/* Key Benefits Tag Input */}
          <div className="admin-form-group">
            <label className="admin-label">Key Benefits</label>
            <div className="admin-tag-input-wrapper">
              {keyBenefits.map((benefit, idx) => (
                <span className="admin-tag" key={idx}>
                  {benefit}
                  <button
                    type="button"
                    className="admin-tag-remove"
                    onClick={() => removeBenefit(idx)}
                  >
                    &times;
                  </button>
                </span>
              ))}
              <input
                type="text"
                className="admin-tag-input"
                placeholder="Type benefit and click + to add"
                value={benefitInput}
                onChange={(e) => setBenefitInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addBenefit();
                  }
                }}
              />
              <button
                type="button"
                className="admin-btn admin-btn-secondary"
                style={{ padding: "4px 8px", fontSize: "0.8rem", height: "auto" }}
                onClick={addBenefit}
              >
                + Add
              </button>
            </div>
          </div>

          {/* Ingredients Tag Input */}
          <div className="admin-form-group">
            <label className="admin-label">Key Ingredients</label>
            <div className="admin-tag-input-wrapper">
              {ingredients.map((ing, idx) => (
                <span className="admin-tag" key={idx}>
                  {ing}
                  <button
                    type="button"
                    className="admin-tag-remove"
                    onClick={() => removeIngredient(idx)}
                  >
                    &times;
                  </button>
                </span>
              ))}
              <input
                type="text"
                className="admin-tag-input"
                placeholder="Type ingredient name and click + to add"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addIngredient();
                  }
                }}
              />
              <button
                type="button"
                className="admin-btn admin-btn-secondary"
                style={{ padding: "4px 8px", fontSize: "0.8rem", height: "auto" }}
                onClick={addIngredient}
              >
                + Add
              </button>
            </div>
          </div>

          <div className="admin-modal-footer" style={{ padding: "16px 0 0 0", borderTop: "1px solid var(--admin-border)" }}>
            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={() => setIsFormOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="admin-btn admin-btn-primary">
              {editingItem ? "Save Changes" : "Create Product"}
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Delete confirmation */}
      <AdminDeleteConfirm
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
        itemName={deletingItem?.title || ""}
      />
    </div>
  );
}
