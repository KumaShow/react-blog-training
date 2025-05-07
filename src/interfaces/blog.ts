/**
 * 部落格卡片元件的內容。
 *
 * @property id - 文章唯一識別碼。
 * @property isNew - （選填）是否為最新文章。
 * @property isHot - （選填）是否為熱門文章。
 * @property date - 文章發佈日期（ISO 字串?）。
 * @property title - 文章標題。
 * @property tag - 文章相關標籤陣列。
 * @property description - 文章簡短摘要或描述。
 * @property imgUrl - 文章相關圖片的網址。
 */
export interface BlogPost {
  id: number;
  isNew?: boolean;
  isHot?: boolean;
  date: string;
  title: string;
  tags: string[];
  description: string;
  imgUrl: string;
}
