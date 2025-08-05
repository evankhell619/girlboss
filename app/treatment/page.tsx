import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, MessageCircle } from "lucide-react";
import Navigation from "@/components/navigation";

export default function TreatmentPage() {
  const treatments = [
    {
      title: "Eyelash Extension",
      description:
        "Transform your look with our premium eyelash extensions. Choose from classic, volume, or hybrid styles for stunning, long-lasting results.",
      duration: "2-3 hours",
      price: "From Rp 1.500.000",
      features: [
        "Classic Extensions",
        "Volume Extensions",
        "Hybrid Extensions",
        "Maintenance & Refills",
      ],
      image: "images/eyelash extension.jpg",
      popular: true,
    },
    {
      title: "Eyelash Lifting",
      description:
        "Enhance your natural lashes with our professional lifting treatment. Get beautifully curled, lifted lashes that last 6-8 weeks.",
      duration: "1-1.5 hours",
      price: "From Rp 1.200.000",
      features: [
        "Natural Lash Enhancement",
        "Long-lasting Results",
        "No Daily Maintenance",
        "Suitable for All Lash Types",
      ],
      image: "/images/lashlift.png",
      popular: false,
    },
    {
      title: "Brow Bomber",
      description:
        "Perfect your eyebrows with our signature Brow Bomber treatment. Includes shaping, tinting, and styling for flawless brows.",
      duration: "45 minutes",
      price: "From Rp 800.000",
      features: [
        "Professional Shaping",
        "Brow Tinting",
        "Styling & Grooming",
        "Aftercare Guidance",
      ],
      image: "/images/brows.png",
      popular: false,
    },
    {
      title: "Stem Cell Lash Regrowth",
      description:
        "Revolutionary stem cell treatment to promote natural lash growth and strengthen existing lashes for healthier, fuller lashes.",
      duration: "1 hour",
      price: "From Rp 1.000.000",
      features: [
        "Stem Cell Technology",
        "Natural Growth Promotion",
        "Lash Strengthening",
        "Visible Results in 4-6 weeks",
      ],
      image: "/images/brows nail art.jpg",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text text-transparent mb-6">
              Our Treatments
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our premium beauty treatments designed to enhance your
              natural beauty with the latest techniques and highest quality
              products.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {treatments.map((treatment, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  {treatment.popular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <div className="relative overflow-hidden">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      {treatment.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pink-600">
                        {treatment.price}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {treatment.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {treatment.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {treatment.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <Star className="w-4 h-4 text-pink-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/booking">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-2"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16 .396c-8.84 0-16 6.953-16 15.54 0 2.74.797 5.3 2.164 7.523L0 32l8.465-2.207c2.308 1.256 4.984 1.964 7.887 1.964 8.84 0 16-6.953 16-15.54S24.84.396 16 .396zm0 28.708c-2.676 0-5.164-.736-7.273-2.012l-.52-.308-5.027 1.313 1.344-4.914-.34-.508c-1.28-1.925-2-4.164-2-6.58 0-6.757 5.805-12.271 12.816-12.271 7.012 0 12.816 5.514 12.816 12.27 0 6.756-5.805 12.27-12.816 12.27zm7.027-9.695c-.383-.191-2.27-1.117-2.625-1.242-.352-.127-.609-.191-.867.191-.258.383-.996 1.242-1.223 1.5-.223.254-.445.287-.828.096-.383-.192-1.621-.596-3.088-1.9-1.14-1.015-1.91-2.27-2.133-2.65-.223-.383-.023-.59.17-.78.175-.174.383-.445.574-.668.192-.223.255-.383.384-.639.127-.254.064-.478-.031-.668-.096-.191-.867-2.088-1.188-2.85-.312-.762-.629-.658-.867-.67l-.74-.014c-.223 0-.582.08-.887.383-.305.305-1.16 1.133-1.16 2.766s1.188 3.205 1.355 3.43c.175.223 2.34 3.567 5.668 5.004.793.342 1.41.547 1.895.699.797.254 1.52.219 2.09.133.637-.094 1.963-.801 2.238-1.574.277-.773.277-1.434.195-1.574-.08-.14-.305-.223-.637-.383z" />
      </svg>
                      Book This Treatment
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Before & After
            </h2>
            <p className="text-xl text-gray-600">
              See the amazing transformations our treatments create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  alt={`Before and after ${index + 1}`}
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your appointment today and experience the Girl Boss difference.
            Our expert technicians are ready to help you achieve your beauty
            goals.
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 mr-2"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16 .396c-8.84 0-16 6.953-16 15.54 0 2.74.797 5.3 2.164 7.523L0 32l8.465-2.207c2.308 1.256 4.984 1.964 7.887 1.964 8.84 0 16-6.953 16-15.54S24.84.396 16 .396zm0 28.708c-2.676 0-5.164-.736-7.273-2.012l-.52-.308-5.027 1.313 1.344-4.914-.34-.508c-1.28-1.925-2-4.164-2-6.58 0-6.757 5.805-12.271 12.816-12.271 7.012 0 12.816 5.514 12.816 12.27 0 6.756-5.805 12.27-12.816 12.27zm7.027-9.695c-.383-.191-2.27-1.117-2.625-1.242-.352-.127-.609-.191-.867.191-.258.383-.996 1.242-1.223 1.5-.223.254-.445.287-.828.096-.383-.192-1.621-.596-3.088-1.9-1.14-1.015-1.91-2.27-2.133-2.65-.223-.383-.023-.59.17-.78.175-.174.383-.445.574-.668.192-.223.255-.383.384-.639.127-.254.064-.478-.031-.668-.096-.191-.867-2.088-1.188-2.85-.312-.762-.629-.658-.867-.67l-.74-.014c-.223 0-.582.08-.887.383-.305.305-1.16 1.133-1.16 2.766s1.188 3.205 1.355 3.43c.175.223 2.34 3.567 5.668 5.004.793.342 1.41.547 1.895.699.797.254 1.52.219 2.09.133.637-.094 1.963-.801 2.238-1.574.277-.773.277-1.434.195-1.574-.08-.14-.305-.223-.637-.383z" />
      </svg>
              Book Your Treatment Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
