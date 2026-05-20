import React from "react";
import { Search, Bell, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center flex-1 gap-6">
          {/* Mock Logo Space */}
          <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
            <div className="w-4 h-4 rounded-full bg-primary" />
          </div>
          
          <div className="relative hidden md:flex items-center w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Find influencers to collaborate with" 
              className="w-full pl-9 bg-muted/50 border-transparent focus-visible:bg-background"
              data-testid="input-search-influencers"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Button 
            variant="outline" 
            className="hidden sm:inline-flex rounded-full border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800"
            data-testid="button-upgrade"
          >
            Upgrade
          </Button>
          
          <Button 
            className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
            data-testid="button-create-campaign"
          >
            + Create Campaign
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground" data-testid="button-notifications">
            <Bell className="h-5 w-5" />
          </Button>

          <Avatar className="h-8 w-8 cursor-pointer" data-testid="avatar-user">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">AB</AvatarFallback>
          </Avatar>

          <Button variant="ghost" size="icon" className="sm:hidden text-muted-foreground" data-testid="button-mobile-menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}