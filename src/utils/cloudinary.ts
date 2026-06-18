/**
 * Cloudinary Direct Upload Utility
 * 
 * This utility allows uploading files (Images, PDFs, etc.) directly from the frontend
 * to your Cloudinary account using Unsigned Upload Presets.
 * 
 * Setup instructions:
 * 1. Go to your Cloudinary Dashboard.
 * 2. Settings -> Upload -> Upload presets -> Add upload preset.
 * 3. Set the mode to "Unsigned" and save the name.
 * 4. Add the following to your frontend `.env.local` file:
 *    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
 *    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_unsigned_preset_name
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "demo";
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "sample_preset";

export interface CloudinaryUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  original_filename: string;
}

/**
 * Uploads a file (image or PDF document) directly to Cloudinary.
 * 
 * @param file The File object (from an <input type="file"> or drag-and-drop).
 * @param resourceType Cloudinary resource type: 'image' (for png, jpg, webp), 'raw' (for PDFs, docs), or 'auto' (automatic detection).
 * @returns Promise resolving to the secure CDN URL of the uploaded asset.
 */
export async function uploadToCloudinary(
  file: File,
  resourceType: "image" | "raw" | "auto" = "auto"
): Promise<string> {
  // Validate cloud name and preset are not placeholders
  if (CLOUD_NAME === "demo" && UPLOAD_PRESET === "sample_preset") {
    console.warn(
      "Cloudinary utility is using default 'demo' credentials. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET in your environment variables for production uploads."
    );
  }

  // Create FormData payload
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData?.error?.message || `Cloudinary upload failed with status ${response.status}`
      );
    }

    const data: CloudinaryUploadResponse = await response.json();

    // Return the HTTPS secure URL
    return data.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
}

/**
 * Helper to upload multiple files in parallel.
 * 
 * @param files Array of File objects.
 * @param resourceType Cloudinary resource type.
 * @returns Promise resolving to an array of secure URLs.
 */
export async function uploadMultipleToCloudinary(
  files: File[],
  resourceType: "image" | "raw" | "auto" = "auto"
): Promise<string[]> {
  const uploadPromises = files.map((file) => uploadToCloudinary(file, resourceType));
  return Promise.all(uploadPromises);
}


// exp

// import { uploadToCloudinary } from "@/utils/cloudinary";

// const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];
//   if (!file) return;

//   try {
//     // 1. Upload file to Cloudinary and get CDN url
//     const cdnUrl = await uploadToCloudinary(file, "auto");
//     console.log("Uploaded successfully:", cdnUrl);

//     // 2. Send the URL in payload to your backend
//     const payload = {
//       title: "New Press Release",
//       imageUrl: cdnUrl, // <-- Uploaded asset link
//       releaseDate: new Date(),
//     };

//     await fetch("/api/press-releases", {
//       method: "POST",
//       body: JSON.stringify(payload),
//     });
//   } catch (error) {
//     console.error("Upload/Post failed:", error);
//   }
// };
