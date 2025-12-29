// Enhanced Instagram API integration with carousel support
export interface InstagramMedia {
  id: string
  media_url: string
  media_type: "IMAGE" | "VIDEO"
  thumbnail_url?: string
}

export interface InstagramPost {
  id: string
  caption: string
  media_url: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  permalink: string
  timestamp: string
  username: string
  children?: InstagramMedia[] // For carousel posts
  like_count?: number
  comments_count?: number
}

// Mock Instagram posts using local images
const mockInstagramPosts: InstagramPost[] = [
  {
    id: "1",
    caption:
      "Fresh eyelash extensions for a soft, lifted look. Book your appointment today. #girlboss #eyelashextensions #beauty #bali",
    media_url: "/images/eyelash%20extension.jpg",
    media_type: "IMAGE",
    permalink: "https://www.instagram.com/p/example1/",
    timestamp: "2024-01-20T14:30:00Z",
    username: "girlboss_bali",
    like_count: 245,
    comments_count: 18,
  },
  {
    id: "2",
    caption:
      "Nail art in bloom. Clean lines, soft colors, and a glossy finish. #nailart #girlboss #springnails #bali",
    media_url: "/images/nail%20art.jpg",
    media_type: "IMAGE",
    permalink: "https://www.instagram.com/p/example2/",
    timestamp: "2024-01-18T16:45:00Z",
    username: "girlboss_bali",
    like_count: 189,
    comments_count: 25,
  },
  {
    id: "3",
    caption:
      "Brow shaping that frames the face and elevates the look. #brows #girlboss #beauty #bali",
    media_url: "/images/brows.png",
    media_type: "IMAGE",
    permalink: "https://www.instagram.com/p/example3/",
    timestamp: "2024-01-15T11:20:00Z",
    username: "girlboss_bali",
    like_count: 156,
    comments_count: 12,
  },
]

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  // In a real implementation, you would:
  // 1. Set up Instagram Basic Display API
  // 2. Get access token from Instagram
  // 3. Make API calls to fetch posts: GET https://graph.instagram.com/me/media
  // 4. For carousel posts, fetch children: GET https://graph.instagram.com/{media-id}/children
  // 5. Handle rate limiting and errors

  // Example real API call structure:
  // const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink,timestamp,children{media_url,media_type}&access_token=${accessToken}`)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockInstagramPosts)
    }, 1000)
  })
}

export function formatInstagramDate(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function extractHashtags(caption: string): string[] {
  const hashtags = caption.match(/#\w+/g)
  return hashtags || []
}

export function formatLikes(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`
  }
  return count.toString()
}
