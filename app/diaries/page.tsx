"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Heart, Share2, Instagram, ExternalLink, Eye } from "lucide-react"
import Navigation from "@/components/navigation"
import { InstagramCarousel } from "@/components/instagram-carousel"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import {
  getInstagramPosts,
  formatInstagramDate,
  extractHashtags,
  formatLikes,
  type InstagramPost,
} from "@/lib/instagram"

export default function DiariesPage() {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getInstagramPosts()
        setInstagramPosts(posts)
      } catch (error) {
        console.error("Error fetching Instagram posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <Navigation />
        <div className="pt-24 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading latest posts from Instagram...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center mb-6">
              <Instagram className="w-8 h-8 text-pink-600 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text text-transparent">
                Girl Boss Diaries
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto mb-8">
              Follow our latest beauty transformations, tips, and behind-the-scenes moments directly from our Instagram
              @girlboss_bali.
            </p>
            <a
              href="https://www.instagram.com/girlboss_bali/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors duration-300"
            >
              Follow us on Instagram
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Instagram Posts</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Our most popular transformations and beauty tips from Instagram
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {instagramPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  {/* Instagram Media Display */}
                  {post.media_type === "CAROUSEL_ALBUM" && post.children ? (
                    <InstagramCarousel media={post.children} className="h-64" />
                  ) : (
                    <div className="relative">
                      <Image
                        src={post.media_url || "/placeholder.svg"}
                        alt="Instagram post"
                        width={600}
                        height={400}
                        className="w-full object-cover group-hover:scale-110 transition-transform duration-500 h-64"
                      />
                      {post.media_type === "VIDEO" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-4">
                            <Eye className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Post Type Badge */}
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <Instagram className="w-3 h-3 mr-1" />
                    {post.media_type === "CAROUSEL_ALBUM"
                      ? "Carousel"
                      : post.media_type === "VIDEO"
                        ? "Video"
                        : "Photo"}
                  </Badge>

                  {/* Media Count for Carousel */}
                  {post.media_type === "CAROUSEL_ALBUM" && post.children && (
                    <Badge className="absolute top-4 right-4 bg-black/50 text-white text-xs">
                      {post.children.length} photos
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 dark:text-gray-300 mr-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-200 mr-4">@{post.username}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 dark:text-gray-300 mr-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-200">
                        {formatInstagramDate(post.timestamp)}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-100 mb-4 leading-relaxed text-sm line-clamp-3">
                    {post.caption.replace(/#\w+/g, "").trim()}
                  </p>

                  {/* Hashtags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {extractHashtags(post.caption)
                      .slice(0, 4)
                      .map((hashtag, hashIndex) => (
                        <Badge
                          key={hashIndex}
                          variant="outline"
                          className="border-pink-500 text-pink-600 dark:text-pink-400 text-xs hover:bg-pink-50 dark:hover:bg-pink-900/20 cursor-pointer transition-colors"
                        >
                          {hashtag}
                        </Badge>
                      ))}
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 text-pink-500 mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-200">
                          {post.like_count ? formatLikes(post.like_count) : "Like"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <WhatsAppIcon className="w-4 h-4 text-purple-500 mr-1" />
                        <span className="text-sm text-gray-600 dark:text-gray-200">
                          {post.comments_count ? post.comments_count : "Comment"}
                        </span>
                      </div>
                      <Share2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-pink-500 transition-colors" />
                    </div>

                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-pink-500 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 text-xs px-3 py-1 rounded-full bg-transparent transition-all duration-300 hover:scale-105"
                      >
                        View on IG
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Integration Info */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-purple-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Stay Connected</h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 mb-8">
            Follow @girlboss_bali on Instagram for daily beauty inspiration, client transformations, and exclusive
            behind-the-scenes content. Our live feed updates automatically with every new post!
          </p>

          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border-0 p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.instagram.com/girlboss_bali/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Instagram className="w-5 h-5 mr-2" />
                  Follow on Instagram
                </Button>
              </a>
              <Link href="/booking">
                <Button
                  variant="outline"
                  className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Auto-Update Notice */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 dark:from-pink-500/20 dark:to-purple-500/20 border-pink-200 dark:border-pink-800">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <Instagram className="w-8 h-8 text-pink-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Live Instagram Integration</h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm">
                This page displays your real Instagram feed from @girlboss_bali. Every time you post something new, it
                will automatically appear here - including carousel posts, videos, and all your beautiful beauty
                transformations!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
