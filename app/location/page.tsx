import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"

export default function LocationPage() {
  const hours = [
    { day: "Monday", time: "9:00 AM - 7:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 7:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 7:00 PM" },
    { day: "Thursday", time: "9:00 AM - 8:00 PM" },
    { day: "Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "8:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 5:00 PM" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text text-transparent mb-6">
              Our Location
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto mb-8">
              Visit us at our beautiful studio located in the heart of Jimbaran, Bali. We offer a luxurious environment
              for all your beauty needs.
            </p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map and Address */}
            <div>
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
                <div className="relative h-80">
                  {/* Google Map Embed */}
                  <a
                    href="https://maps.app.goo.gl/TSyuCEeonaBhHH1C8" // User's provided URL for redirection
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10" // Make the entire area clickable
                    aria-label="View Girl Boss Beauty Studio on Google Maps"
                  >
                    <span className="sr-only">Click to view on Google Maps</span>
                  </a>
                  <iframe
                    src="https://maps.google.com/maps?q=Taman%20Griya,%20Jl.%20Danau%20Batur%20Raya%20No.%206,%20Jimbaran,%20South%20Kuta,%20Badung%20Regency,%20Bali%2080361&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Girl Boss Beauty Studio Location on Google Maps"
                  ></iframe>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <MapPin className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Address</h3>
                      <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                        Taman Griya, Jl. Danau Batur Raya No. 6
                        <br />
                        Jimbaran, South Kuta, Badung Regency
                        <br />
                        Bali 80361, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <Phone className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-200">087700105777</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Email</h3>
                      <p className="text-gray-600 dark:text-gray-200">girlboss.bali@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Opening Hours */}
            <div className="space-y-8">
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border-0 h-full">
                {" "}
                {/* Added h-full for neatness */}
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-gray-800 dark:text-white">
                    <Clock className="w-6 h-6 text-pink-500 mr-3" />
                    Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {hours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        <span className="font-medium text-gray-800 dark:text-white">{schedule.day}</span>
                        <span className="text-gray-600 dark:text-gray-200">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <p className="text-sm text-pink-700 dark:text-pink-300">
                      <strong>Note:</strong> We're open by appointment on holidays. Please call ahead to confirm
                      availability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Inside Our Studio</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              Take a virtual tour of our beautiful, modern facility
            </p>
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
                  alt={`Studio interior ${index + 1}`}
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

      {/* Nearby Landmarks */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Nearby Landmarks</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200">
              We're conveniently located near popular destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Grand Shopping Mall", distance: "2 minutes walk", type: "Shopping" },
              { name: "Central Park", distance: "5 minutes walk", type: "Recreation" },
              { name: "Business District", distance: "10 minutes drive", type: "Business" },
              { name: "Fashion Street", distance: "1 minute walk", type: "Shopping" },
            ].map((landmark, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{landmark.name}</h3>
                <p className="text-pink-600 font-medium mb-1">{landmark.distance}</p>
                <p className="text-gray-600 dark:text-gray-200 text-sm">{landmark.type}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Ready to Visit Us?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 mb-8">
            We can't wait to welcome you to our beautiful studio. Book your appointment today and experience the Girl
            Boss difference in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent dark:text-pink-400 dark:hover:bg-pink-900/20"
            >
              Call Us: 087700105777
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
