import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Instagram,
  Facebook,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Navigation from "@/components/navigation";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.jpg"
            alt="Girl Boss Beauty Studio"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text text-transparent mb-6 animate-shimmer">
              Girl Boss
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light">
              Where Beauty Meets Perfection
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Experience the ultimate in nail art and eyelash extensions at our
              luxury beauty studio. Transform your look with our expert
              treatments and premium services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M16 .396c-8.84 0-16 6.953-16 15.54 0 2.74.797 5.3 2.164 7.523L0 32l8.465-2.207c2.308 1.256 4.984 1.964 7.887 1.964 8.84 0 16-6.953 16-15.54S24.84.396 16 .396zm0 28.708c-2.676 0-5.164-.736-7.273-2.012l-.52-.308-5.027 1.313 1.344-4.914-.34-.508c-1.28-1.925-2-4.164-2-6.58 0-6.757 5.805-12.271 12.816-12.271 7.012 0 12.816 5.514 12.816 12.27 0 6.756-5.805 12.27-12.816 12.27zm7.027-9.695c-.383-.191-2.27-1.117-2.625-1.242-.352-.127-.609-.191-.867.191-.258.383-.996 1.242-1.223 1.5-.223.254-.445.287-.828.096-.383-.192-1.621-.596-3.088-1.9-1.14-1.015-1.91-2.27-2.133-2.65-.223-.383-.023-.59.17-.78.175-.174.383-.445.574-.668.192-.223.255-.383.384-.639.127-.254.064-.478-.031-.668-.096-.191-.867-2.088-1.188-2.85-.312-.762-.629-.658-.867-.67l-.74-.014c-.223 0-.582.08-.887.383-.305.305-1.16 1.133-1.16 2.766s1.188 3.205 1.355 3.43c.175.223 2.34 3.567 5.668 5.004.793.342 1.41.547 1.895.699.797.254 1.52.219 2.09.133.637-.094 1.963-.801 2.238-1.574.277-.773.277-1.434.195-1.574-.08-.14-.305-.223-.637-.383z" />
                  </svg>
                  Book Now
                </Button>
              </Link>
              <Link href="/treatment">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  View Treatments
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-60 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-pink-300 rounded-full opacity-40 animate-pulse"></div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Signature Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our premium beauty treatments designed to enhance your
              natural beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Eyelash Extensions",
                description:
                  "Premium lash extensions for stunning, long-lasting results",
                image: "/images/eyelash extension.jpg",
              },
              {
                title: "Nail Art",
                description:
                  "Creative and elegant nail designs tailored to your style",
                image: "/images/nail art.jpg",
              },
              {
                title: "Brow Bomber",
                description:
                  "Perfect eyebrow shaping and enhancement treatments",
                image: "/images/brows.png",
              },
              {
                title: "Lash Lifting",
                description:
                  "Natural lash enhancement for a lifted, curled look",
                image: "/images/lashlift.png",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-600">
              See the beautiful transformations we create
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/images/brows nail art.jpg",
              "/images/eyelash extension1.jpg",
              "/images/nail art(1).jpg",
              "/images/post IG (2).png",
              "/images/post IG (3).png",
              "/images/post IG (4).png",
              "/images/press on nail 1.png",
              "/images/press on nail 2.png",
            ].map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review:
                  "Absolutely amazing! The eyelash extensions look so natural and beautiful. The staff is professional and the studio is gorgeous.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Maria Rodriguez",
                rating: 5,
                review:
                  "Best nail art in town! The attention to detail is incredible. I always leave feeling like a queen.",
                image: "/placeholder.svg?height=80&width=80",
              },
              {
                name: "Emma Chen",
                rating: 5,
                review:
                  "The lash lift treatment exceeded my expectations. My natural lashes look amazing! Highly recommend Girl Boss.",
                image: "/placeholder.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Girl Boss
              </h3>
              <p className="text-gray-300 mb-4">
                Your premier destination for luxury nail art and eyelash
                services.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" />
                {/* <Facebook className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" /> */}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/treatment"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Eyelash Extensions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/treatment"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Nail Art
                  </Link>
                </li>
                <li>
                  <Link
                    href="/treatment"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Lash Lifting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/treatment"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Brow Bomber
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-pink-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/location"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diaries"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Diaries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booking"
                    className="hover:text-pink-400 transition-colors"
                  >
                    Book Online
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+62 877 00105 777</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Taman Griya, Jimbaran, Kuta Selatan, Badung, Bali, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Girl Boss Beauty Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
