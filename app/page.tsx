import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Download,
  Zap,
  Shield,
  Smartphone,
  Facebook,
  Mail,
  MessageCircle,
  Send,
  Youtube,
  Trophy,
  Megaphone,
  Play,
  Star,
  Users,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      {/* Header */}
      <header className="border-b border-purple-700/30 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/nexplay-logo.png"
                alt="NEXPLAY Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              NEXPLAY
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-slate-300 hover:text-pink-400 transition-colors font-medium">
              Home
            </a>
            <a href="#features" className="text-slate-300 hover:text-pink-400 transition-colors font-medium">
              Features
            </a>
            <a href="#team" className="text-slate-300 hover:text-pink-400 transition-colors font-medium">
              Team
            </a>
            <a href="#contact" className="text-slate-300 hover:text-pink-400 transition-colors font-medium">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Combined Hero & Home Section */}
      <section id="home" className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-32 left-40 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-violet-500/20 rounded-full blur-3xl"></div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/nexplay-logo.png"
                  alt="NEXPLAY Logo"
                  width={96}
                  height={96}
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                NEXPLAY
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-medium text-slate-300">
                Eco System for the{" "}
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Gaming Community
                </span>
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Experience the future of esports world. Your ultimate hub for competitive gaming and esports action. Join
              tournaments and connect with top players — all in one place.
            </p>

            {/* Download Button */}
              <a
                href="https://www.4sync.com/web/directDownload/f2P3mTnv/iwfV27T4.3c4d624867ff7a351474d3b25c27134b"
                download="nexplay-setup.exe"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download NEXPLAY
                </Button>
              </a>
              <p className="text-slate-400 font-medium">Free download • Available for Android</p>
            </div>
          </div>

          {/* App Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Feature Cards */}
            <div className="space-y-6">
              <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-2xl hover:shadow-pink-500/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-pink-500/20">
                      <Trophy className="w-7 h-7 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        <span className="text-pink-400">Leaderboards</span> Redefined
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Showcasing Global <span className="text-pink-400 font-medium">Rankings</span> with{" "}
                        <span className="text-pink-400 font-medium">Local</span> Flavor
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-2xl hover:shadow-blue-500/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                      <Play className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">Exclusive Gaming</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Get access to exclusive <span className="text-pink-400 font-medium">Gaming Shows</span> and
                        content
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>   
            {/* Center Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3.5rem] p-4 shadow-2xl border border-purple-700/30">
                  <div className="w-full h-full bg-gradient-to-b from-slate-900 to-purple-900 rounded-[3rem] flex flex-col relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                      <span className="font-medium">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white/50 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6">
                      <div className="w-20 h-20 mb-6 relative">
                        <Image
                          src="/images/nexplay-logo.png"
                          alt="NEXPLAY Logo"
                          width={80}
                          height={80}
                          className="object-contain drop-shadow-xl"
                        />
                      </div>
                      <div className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-bold text-3xl tracking-wider mb-4">
                        NEXPLAY
                      </div>
                      <div className="text-slate-400 text-center text-sm mb-8">The Future of Esports</div>

                      {/* App UI Elements */}
                      <div className="w-full space-y-3">
                        <div className="bg-slate-800/50 rounded-2xl p-4 border border-purple-700/30">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                              <Trophy className="w-4 h-4 text-pink-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white text-sm font-medium">Tournaments</div>
                              <div className="text-slate-400 text-xs">Join live competitions</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-2xl p-4 border border-purple-700/30">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                              <Users className="w-4 h-4 text-purple-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white text-sm font-medium">Community</div>
                              <div className="text-slate-400 text-xs">Connect with players</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-[3rem] pointer-events-none"></div>
                  </div>
                </div>

                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-blue-500/20 rounded-[3.5rem] blur-3xl -z-10"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-[4rem] blur-2xl -z-20"></div>
              </div>
            </div>

            {/* Right Feature Cards */}
            <div className="space-y-6">
              <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-2xl hover:shadow-violet-500/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-violet-500/20">
                      <Star className="w-7 h-7 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        <span className="text-pink-400">Participate</span> & Win
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Join exclusive <span className="text-pink-400 font-medium">Tournaments</span> and win amazing
                        prizes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-2xl hover:shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                      <Megaphone className="w-7 h-7 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        <span className="text-pink-400">Promote</span> Your Brand
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Showcase your <span className="text-pink-400 font-medium">Games</span> and{" "}
                        <span className="text-pink-400 font-medium">Brands</span> on NEXPLAY
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center text-white mb-4">Why Choose NEXPLAY?</h3>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Experience the ultimate gaming platform designed for competitive esports
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
                  <Zap className="w-7 h-7 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-300">
                  Ultra-fast load times and seamless performance optimized for intense esports tournaments and real-time
                  competitive play.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                  <Shield className="w-7 h-7 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">Secure & Private</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-300">
                  Your data is protected with enterprise-grade security and privacy features for safe gaming.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-pink-500/20">
                  <Smartphone className="w-7 h-7 text-pink-400" />
                </div>
                <CardTitle className="text-xl text-white">Cross-Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-300">
                  Available on Windows, Mac, iOS, Android, and web browsers for seamless gaming anywhere.
                </CardDescription>
              </CardContent>
            </Card>
        </div>
        </div>
      </section>
    </div>
  )
}
