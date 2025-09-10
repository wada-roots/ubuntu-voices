import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Kenyan Flag */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-8 bg-gradient-to-b from-heritage-black via-heritage-red to-heritage-green rounded-sm shadow-md"></div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Ubuntu Voices</h1>
              <p className="text-xs text-muted-foreground">Preserving Kenya's Heritage</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#stories" className="text-foreground hover:text-primary transition-colors">Stories</a>
            <a href="#elders" className="text-foreground hover:text-primary transition-colors">Elders</a>
            <a href="#poetry" className="text-foreground hover:text-primary transition-colors">Poetry</a>
            <a href="#healing" className="text-foreground hover:text-primary transition-colors">Healing</a>
            <a href="#places" className="text-foreground hover:text-primary transition-colors">Places</a>
            <a href="#heroes" className="text-foreground hover:text-primary transition-colors">Heroes</a>
          </nav>

          {/* Search and Menu */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;