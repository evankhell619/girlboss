"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import type { InstagramMedia } from "@/lib/instagram"

interface InstagramCarouselProps {
  media: InstagramMedia[]
  className?: string
}

export function InstagramCarousel({ media, className = "" }: InstagramCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!media || media.length === 0) return null

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={media[currentIndex].media_url || "/placeholder.svg"}
          alt={`Instagram media ${currentIndex + 1}`}
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Video Play Button */}
        {media[currentIndex].media_type === "VIDEO" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full p-4">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={goToNext}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}

        {/* Slide Indicators */}
        {media.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {media.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}

        {/* Media Counter */}
        {media.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {currentIndex + 1} / {media.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {media.length > 1 && (
        <div className="flex space-x-2 mt-3 overflow-x-auto pb-2">
          {media.map((item, index) => (
            <button
              key={index}
              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex ? "border-pink-500" : "border-transparent"
              }`}
              onClick={() => goToSlide(index)}
            >
              <Image
                src={item.media_url || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
              {item.media_type === "VIDEO" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play className="w-3 h-3 text-white fill-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
