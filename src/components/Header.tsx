import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import drumLogo from "@/assets/logo-drum-concept.png";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={drumLogo} 
              alt="Ubuntu Voices Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Ubuntu Voices</h1>
              <p className="text-xs text-muted-foreground">Preserving Kenya's Heritage</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/stories" className="text-foreground hover:text-primary transition-colors story-link">Stories</a>
            <a href="/ubuntu-voices" className="text-foreground hover:text-primary transition-colors story-link">Elders</a>
            <a href="/poetry" className="text-foreground hover:text-primary transition-colors story-link">Poetry</a>
            <a href="/medicinal-plants" className="text-foreground hover:text-primary transition-colors story-link">Healing</a>
            <a href="/heritage-map" className="text-foreground hover:text-primary transition-colors story-link">Places</a>
            <a href="/heroes" className="text-foreground hover:text-primary transition-colors story-link">Heroes</a>
            <a href="/learning-hub" className="text-foreground hover:text-primary transition-colors story-link">Learn</a>
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