export interface VinayakNoteData {
  text: string;
}

export interface TimelineItemData {
  id: string;
  title: string;
  description: string;
  imageUrls: string[]; // Changed from imageUrl to support multiple photos
  date?: string;
  vinayakNote?: VinayakNoteData;
}

export interface TimelineSectionData {
  id: string;
  title: string;
  description: string;
  items: TimelineItemData[];
}

// Global definition for AOS library since we are loading it via CDN
declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
    };
  }
}