import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Clock, Star, MapPin, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"

export default function HomeServicePage() {
  const services = [
    {
      title: "Mobile Eyelash Extensions",
      description:
        "Professional eyelash extension service in the comfort of your own home. Perfect for busy schedules or special occasions.",
      duration: "2.5-3.5 hours",
      price: "From $200",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Home Nail Art Session",
      description:
        "Creative nail art and manicure services delivered to your doorstep. Includes all premium products and tools.",
      duration: "1.5-2 hours",
      price: "From $120",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Bridal Beauty Package",
      description:
        "Complete bridal beauty service including lashes, nails, and brows. Perfect for your special day preparation.",
      duration: "4-5 hours",
      price: "From $350",
      image: "/placeholder.svg?height=300&width=400",
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
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text text-transparent mb-6">
                Home Service
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience luxury beauty treatments in the comfort of your own home. Our mobile beauty services bring
                the Girl Boss experience directly to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Home Service
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Home Beauty Service"
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

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Home Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional beauty treatments delivered to your location with the same high standards as our studio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg"
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

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">{service.title}</CardTitle>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-pink-600">{service.price}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href="/booking">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book This Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Home Service?</h2>
            <p className="text-xl text-gray-600">
              Experience the convenience and luxury of professional beauty treatments at home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Home className="w-12 h-12 text-pink-500" />,
                title: "Comfort & Privacy",
                description: "Enjoy treatments in your own comfortable, private space",
              },
              {
                icon: <Clock className="w-12 h-12 text-purple-500" />,
                title: "Time Saving",
                description: "No travel time needed - we come to you at your convenience",
              },
              {
                icon: <Star className="w-12 h-12 text-pink-500" />,
                title: "Same Quality",
                description: "Professional equipment and products for studio-quality results",
              },
              {
                icon: <MapPin className="w-12 h-12 text-purple-500" />,
                title: "Flexible Location",
                description: "Service available at your home, office, or preferred location",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Service Areas</h2>
          <p className="text-xl text-gray-600 mb-8">
            We provide home services within a 25km radius of our main studio. Contact us to confirm availability in your
            area.
          </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Service Areas Map"
              width={500}
              height={300}
              className="mx-auto rounded-lg shadow-md"
            />
          </div>

          <Link href="/booking">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Check Availability & Book
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
