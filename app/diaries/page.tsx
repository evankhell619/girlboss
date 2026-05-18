"use client"

import { useEffect } from "react"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export default function DiariesPage() {
  const instagramPosts = [
    "https://www.instagram.com/p/DX-l6TfAY67/",
    "https://www.instagram.com/p/DTM7g8lgbQv/",
    "https://www.instagram.com/p/DSZiMR9gdB_/",
  ]

  useEffect(() => {
    const instagramEmbed = (window as typeof window & { instgrm?: { Embeds?: { process: () => void } } }).instgrm
    instagramEmbed?.Embeds?.process()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          const instagramEmbed = (window as typeof window & { instgrm?: { Embeds?: { process: () => void } } }).instgrm
          instagramEmbed?.Embeds?.process()
        }}
      />
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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-start">
            {instagramPosts.map((postUrl) => (
              <div key={postUrl} className="flex justify-center">
                <div className="instagram-embed-frame w-full max-w-[540px] rounded-[28px] bg-gradient-to-br from-pink-300 via-white to-purple-300 p-[2px] shadow-[0_18px_45px_rgba(219,39,119,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(147,51,234,0.22)] dark:from-pink-500/60 dark:via-gray-700 dark:to-purple-500/60">
                  <div className="rounded-[26px] bg-white p-3 dark:bg-gray-900">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-captioned
                      data-instgrm-permalink={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: 0,
                        borderRadius: 18,
                        boxShadow: "none",
                        margin: 0,
                        maxWidth: 540,
                        minWidth: 0,
                        padding: 0,
                        width: "100%",
                      }}
                    >
                      <div style={{ padding: 16 }}>
                        <a
                          href={`${postUrl}?utm_source=ig_embed&utm_campaign=loading`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: "#FFFFFF",
                            lineHeight: 0,
                            padding: 0,
                            textAlign: "center",
                            textDecoration: "none",
                            width: "100%",
                          }}
                        >
                          View this post on Instagram
                        </a>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
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
            behind-the-scenes content.
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

      {/* Instagram Embed Notice */}
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
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Instagram Embed</h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm">
                This page displays selected posts directly from @girlboss_bali using Instagram's official embed.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
