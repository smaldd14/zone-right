import { Card, CardContent } from "@/react-app/components/ui/card";

const HomePage = () => {
  // QR Code for App Store link (you can generate this with the actual App Store URL)
  const qrCodeUrl = "data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='200' height='200' fill='%23000'/%3e%3crect x='20' y='20' width='20' height='20' fill='%23fff'/%3e%3crect x='60' y='20' width='20' height='20' fill='%23fff'/%3e%3crect x='100' y='20' width='20' height='20' fill='%23fff'/%3e%3crect x='140' y='20' width='20' height='20' fill='%23fff'/%3e%3crect x='20' y='60' width='20' height='20' fill='%23fff'/%3e%3crect x='100' y='60' width='20' height='20' fill='%23fff'/%3e%3crect x='180' y='60' width='20' height='20' fill='%23fff'/%3e%3ctext x='100' y='110' fill='%23fff' text-anchor='middle' font-size='12'%3eQR Code%3c/text%3e%3ctext x='100' y='130' fill='%23fff' text-anchor='middle' font-size='12'%3eZoneRight%3c/text%3e%3c/svg%3e";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            ZoneRight
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Train in the right zone with hands-free audio coaching
          </p>
          
          {/* Main CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="text-center">
              <div className="mb-2">
                <img src={qrCodeUrl} alt="QR Code for ZoneRight" className="w-32 h-32 mx-auto border rounded-lg" />
              </div>
              <p className="text-sm text-muted-foreground">Scan to download</p>
            </div>
            <a href="https://apps.apple.com/app/zoneright" target="_blank" rel="noopener noreferrer" className="block">
              <img 
                src="/app-store-badge-black.svg" 
                alt="Download on the App Store" 
                className="h-16 w-auto hover:opacity-80 transition-opacity dark:hidden"
              />
              <img 
                src="/app-store-badge-white.svg" 
                alt="Download on the App Store" 
                className="h-16 w-auto hover:opacity-80 transition-opacity hidden dark:block"
              />
            </a>
            
          </div>
        </div>

        {/* App Screenshots Showcase */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="relative">
              <img src="/image1.png" alt="Train in the right zone" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="relative md:mt-8">
              <img src="/image2.png" alt="Stay focused, eyes-free" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="relative md:mt-16">
              <img src="/image3.png" alt="7-zone scientific training" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="relative md:mt-8">
              <img src="/image4.png" alt="Works with any monitor" className="w-full rounded-2xl shadow-2xl" />
            </div>
            <div className="relative">
              <img src="/image5.png" alt="Track every improvement" className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Real-time Coaching</h3>
              <p className="text-sm text-muted-foreground">Voice and haptic alerts keep you in your optimal training zone</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="font-semibold mb-2">Universal Compatibility</h3>
              <p className="text-sm text-muted-foreground">Works with Whoop, Polar, Garmin, and any Bluetooth heart rate device</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold mb-2">Scientific Training</h3>
              <p className="text-sm text-muted-foreground">Evidence-based 7-zone system from recovery to neuromuscular</p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-muted-foreground">All data stays on your device - complete offline functionality</p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to train smarter?</h2>
          <a href="https://apps.apple.com/app/zoneright" target="_blank" rel="noopener noreferrer" className="inline-block">
            <img 
              src="/app-store-badge-black.svg" 
              alt="Download on the App Store" 
              className="h-16 w-auto hover:opacity-80 transition-opacity dark:hidden"
            />
            <img 
              src="/app-store-badge-white.svg" 
              alt="Download on the App Store" 
              className="h-16 w-auto hover:opacity-80 transition-opacity hidden dark:block"
            />
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Available for iPhone and Apple Watch
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;