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

// Enhanced mock Instagram posts with carousel support
const mockInstagramPosts: InstagramPost[] = [
  {
    id: "DMmcq4shgAv",
    caption:
      "✨ Stunning eyelash extension transformation! Our client is absolutely glowing with these beautiful volume lashes 💕 Swipe to see the amazing before and after results! Book your appointment today and get ready to feel like the boss you are! 👑 #girlboss #eyelashextensions #beauty #bali #lashextensions #volumelashes #beautytransformation #lashartist #girlboss_bali",
    media_url: "/placeholder.svg?height=600&width=600&text=Eyelash+Extension+Main",
    media_type: "CAROUSEL_ALBUM",
    permalink: "https://www.instagram.com/p/DMmcq4shgAv/",
    timestamp: "2024-01-20T14:30:00Z",
    username: "girlboss_bali",
    like_count: 245,
    comments_count: 18,
    children: [
      {
        id: "1",
        media_url: "/placeholder.svg?height=600&width=600&text=Beautiful+Volume+Lashes+Close+Up",
        media_type: "IMAGE",
      },
      {
        id: "2",
        media_url: "/placeholder.svg?height=600&width=600&text=Before+Natural+Lashes",
        media_type: "IMAGE",
      },
      {
        id: "3",
        media_url: "/placeholder.svg?height=600&width=600&text=After+Volume+Extensions",
        media_type: "IMAGE",
      },
      {
        id: "4",
        media_url: "/placeholder.svg?height=600&width=600&text=Side+View+Transformation",
        media_type: "IMAGE",
      },
    ],
  },
  {
    id: "2",
    caption:
      "🌸 Spring nail art collection is here! Delicate florals meet modern elegance. Which design speaks to your soul? 💅✨ #nailart #floralnails #girlboss #springnails #naildesign #bali #manicure #nailinspo",
    media_url: "/placeholder.svg?height=600&width=600&text=Spring+Floral+Nail+Art",
    media_type: "CAROUSEL_ALBUM",
    permalink: "https://www.instagram.com/p/example2/",
    timestamp: "2024-01-18T16:45:00Z",
    username: "girlboss_bali",
    like_count: 189,
    comments_count: 25,
    children: [
      {
        id: "1",
        media_url: "/placeholder.svg?height=600&width=600&text=Pink+Floral+Design",
        media_type: "IMAGE",
      },
      {
        id: "2",
        media_url: "/placeholder.svg?height=600&width=600&text=White+Cherry+Blossom",
        media_type: "IMAGE",
      },
      {
        id: "3",
        media_url: "/placeholder.svg?height=600&width=600&text=Pastel+Garden+Nails",
        media_type: "IMAGE",
      },
    ],
  },
  {
    id: "3",
    caption:
      "Behind the magic ✨ Our talented team creating beautiful transformations every day! The precision, the artistry, the passion - this is what makes Girl Boss special 💕 #behindthescenes #girlboss #beautystudio #teamwork #lashartist #nailtech #bali",
    media_url: "/placeholder.svg?height=600&width=600&text=Team+Working+Behind+Scenes",
    media_type: "IMAGE",
    permalink: "https://www.instagram.com/p/example3/",
    timestamp: "2024-01-15T11:20:00Z",
    username: "girlboss_bali",
    like_count: 156,
    comments_count: 12,
  },
  {
    id: "4",
    caption:
      "Lash lift magic! 🪄 Natural lashes enhanced to perfection. No extensions needed - just your beautiful natural lashes lifted and curled to create that wide-eyed, gorgeous look! Results last 6-8 weeks ✨ #lashlift #naturallashes #lashenhancement #girlboss #bali #lashtreatment",
    media_url: "/placeholder.svg?height=600&width=600&text=Lash+Lift+Results",
    media_type: "CAROUSEL_ALBUM",
    permalink: "https://www.instagram.com/p/example4/",
    timestamp: "2024-01-12T09:15:00Z",
    username: "girlboss_bali",
    like_count: 203,
    comments_count: 31,
    children: [
      {
        id: "1",
        media_url: "/placeholder.svg?height=600&width=600&text=Before+Lash+Lift",
        media_type: "IMAGE",
      },
      {
        id: "2",
        media_url: "/placeholder.svg?height=600&width=600&text=After+Lash+Lift+Front",
        media_type: "IMAGE",
      },
      {
        id: "3",
        media_url: "/placeholder.svg?height=600&width=600&text=After+Lash+Lift+Side",
        media_type: "IMAGE",
      },
    ],
  },
  {
    id: "5",
    caption:
      "Brow bomber transformation! 🔥 From sparse to spectacular - our signature brow treatment includes shaping, tinting, and styling for the perfect frame to your beautiful face! Book your brow appointment today 💕 #browbomber #eyebrows #browtransformation #girlboss #bali #browshaping #browtinting",
    media_url: "/placeholder.svg?height=600&width=600&text=Brow+Bomber+Transformation",
    media_type: "CAROUSEL_ALBUM",
    permalink: "https://www.instagram.com/p/example5/",
    timestamp: "2024-01-10T13:30:00Z",
    username: "girlboss_bali",
    like_count: 167,
    comments_count: 19,
    children: [
      {
        id: "1",
        media_url: "/placeholder.svg?height=600&width=600&text=Before+Sparse+Brows",
        media_type: "IMAGE",
      },
      {
        id: "2",
        media_url: "/placeholder.svg?height=600&width=600&text=After+Shaped+Brows",
        media_type: "IMAGE",
      },
    ],
  },
  {
    id: "6",
    caption:
      "Client love makes our hearts full! 💕 Thank you beautiful souls for trusting us with your beauty journey. Your smiles and confidence are our biggest rewards! ✨ #clientlove #testimonial #girlboss #happyclients #beautytransformation #bali #grateful",
    media_url: "/placeholder.svg?height=600&width=600&text=Happy+Client+Testimonial",
    media_type: "IMAGE",
    permalink: "https://www.instagram.com/p/example6/",
    timestamp: "2024-01-08T15:45:00Z",
    username: "girlboss_bali",
    like_count: 134,
    comments_count: 28,
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
