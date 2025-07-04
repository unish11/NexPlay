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
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
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

      {/* Team Portfolio Section */}
      <section id="team" className="py-16 px-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Meet Our Team</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The passionate developers and designers behind NEXPLAY, dedicated to revolutionizing the esports
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-xl group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              <Image
                  src="/images/nexplay-logo.png"
                  alt="NEXPLAY Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">unish ghimire</h4>
                <p className="text-pink-400 font-medium mb-3">ceo</p>
                <p className="text-slate-300 text-sm mb-4">
                Driven by a visionary CEO and a passionate team, NEXPLAY is reshaping the esports world with cutting-edge innovation, flawless execution, and unwavering excellence
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <email className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-xl group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                kyt
                </div>
                <h4 className="text-xl font-bold text-white mb-2">kinglor yt</h4>
                <p className="text-pink-400 font-medium mb-3">head admin/content creator</p>
                <p className="text-slate-300 text-sm mb-4">
                 Powering flawless tournament management and dynamic content creation — built for creators, driven by competition.
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-xl group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  sd
                </div>
                <h4 className="text-xl font-bold text-white mb-2">saran dulal</h4>
                <p className="text-pink-400 font-medium mb-3">tourment admin</p>
                <p className="text-slate-300 text-sm mb-4">
                Expertly crafted for seamless tournament hosting, delivering pro-level coordination, real-time results, and next-gen esports experience
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-xl group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
            
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Bijay thapa</h4>
                <p className="text-pink-400 font-medium mb-3">finance /marketingManager</p>
                <p className="text-slate-300 text-sm mb-4">
                  Strategic product leader with deep understanding of esports community needs and market trends.
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 5 */}
            <Card className="bg-slate-800/60 border-purple-700/30 backdrop-blur-xl hover:bg-slate-800/80 transition-all duration-300 shadow-xl group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                LS
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Lilakant sah</h4>
                <p className="text-pink-400 font-medium mb-3">costumers support head</p>
                <p className="text-slate-300 text-sm mb-4">
                  Seamlessly managing user engagement with care, clarity, and next-level support — because every player matters.
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-purple-600/20 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-slate-400 hover:text-purple-400" />
                  </a>
                </div>
              </CardContent>
            </Card>

      
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-4 bg-purple-900/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center text-white mb-4">Contact Us</h3>
          <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us through any of these platforms.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <a
              href="https://facebook.com/nexplayorg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 border border-purple-700/30 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3 border border-blue-500/20">
                <Facebook className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-slate-300 font-medium">Facebook</span>
            </a>

            <a
              href="mailto:nexplayorg@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 border border-purple-700/30 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-3 border border-red-500/20">
                <Mail className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-slate-300 font-medium">Gmail</span>
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=9779767783336&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 border border-purple-700/30 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-3 border border-green-500/20">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-slate-300 font-medium">WhatsApp</span>
            </a>

            <a
              href="https://t.me/+A1h9c1DCUOwxMjE1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 border border-purple-700/30 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mb-3 border border-blue-400/20">
                <Send className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-slate-300 font-medium">Telegram</span>
            </a>

            <a
              href="https://discord.gg/D3M3AqAe5U"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 border border-purple-700/30 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-3 border border-indigo-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-6 h-6" fill="#818CF8">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
              </div>
              <span className="text-slate-300 font-medium">Discord</span>
            </a>

            <a
              href="https://www.youtube.com/@Nexplayorg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 border border-purple-700/30 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-3 border border-red-500/20">
                <Youtube className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-slate-300 font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-800/30 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/nexplay-logo.png"
                  alt="NEXPLAY Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                NEXPLAY
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-6">The future of digital Esports, available today.</p>
            <div className="border-t border-purple-800/30 pt-6 w-full text-center text-sm text-slate-500">
              <p>&copy; 2024 NEXPLAY. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
