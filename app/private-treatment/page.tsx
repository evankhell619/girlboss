import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Shield, Clock, Star, Users, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"

export default function PrivateTreatmentPage() {
  const packages = [
    {
      title: "VIP Solo Experience",
      description: "Exclusive one-on-one treatment session with our master technician in a private suite.",
      duration: "3-4 hours",
      price: "From $400",
      features: [
        "Private Suite",
        "Master Technician",
        "Premium Products",
        "Complimentary Refreshments",
        "Aftercare Kit",
      ],
      image: "/placeholder.svg?height=400&width=600",
      popular: true,
    },
    {
      title: "Bridal Private Package",
      description: "Complete bridal beauty preparation with trial session and wedding day service in private setting.",
      duration: "Full Day",
      price: "From $800",
      features: ["Trial Session", "Wedding Day Service", "Bridal Party Options", "Photography Ready", "Touch-up Kit"],
      image: "/placeholder.svg?height=400&width=600",
      popular: false,
    },
    {
      title: "Group Private Session",
      description: "Private group treatments for special occasions, parties, or corporate events (2-6 people).",
      duration: "4-6 hours",
      price: "From $300/person",
      features: ["Group Booking", "Party Atmosphere", "Customized Treatments", "Group Discounts", "Event Coordination"],
      image: "/placeholder.svg?height=400&width=600",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-4">
                <Crown className="w-8 h-8 text-pink-600 mr-2" />
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">Exclusive</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text text-transparent mb-6">
                Private Treatment
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the ultimate in luxury and privacy with our exclusive private treatment packages. Enjoy
                personalized attention in our premium private suites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Private Session
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Private Treatment Suite"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Packages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Private Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our exclusive private treatment packages designed for ultimate luxury and personalization
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  {pkg.popular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <div className="relative overflow-hidden">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-800">{pkg.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pink-600">{pkg.price}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {pkg.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <Star className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/booking">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book This Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Suite Features */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Private Suite Features</h2>
            <p className="text-xl text-gray-600">
              Experience luxury and comfort in our exclusive private treatment suites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-pink-500" />,
                title: "Complete Privacy",
                description: "Soundproof suites with private entrance for ultimate discretion",
              },
              {
                icon: <Crown className="w-12 h-12 text-purple-500" />,
                title: "Luxury Amenities",
                description: "Premium furnishings, ambient lighting, and relaxing atmosphere",
              },
              {
                icon: <Users className="w-12 h-12 text-pink-500" />,
                title: "Dedicated Staff",
                description: "Personal technician and assistant for your exclusive session",
              },
              {
                icon: <Star className="w-12 h-12 text-purple-500" />,
                title: "Premium Products",
                description: "Highest quality products and tools for exceptional results",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Private Suite Gallery</h2>
            <p className="text-xl text-gray-600">Take a look inside our luxurious private treatment suites</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/placeholder.svg?height=400&width=400",
              "/placeholder.svg?height=400&width=400",
              "/placeholder.svg?height=400&width=400",
              "/placeholder.svg?height=400&width=400",
              "/placeholder.svg?height=400&width=400",
              "/placeholder.svg?height=400&width=400",
            ].map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Private suite ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ready for the Ultimate Experience?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your private treatment session today and indulge in the luxury and privacy you deserve. Our exclusive
            suites are waiting for you.
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Private Treatment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
