
import { useState } from "react";
import { Search, MapPin, Calendar, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for activities
const mockActivities = [
  {
    id: 1,
    title: "Pastrimi i Parkut të Madh",
    ngo: "EcoAlbania",
    location: "Tiranë",
    date: "2025-06-15",
    volunteers: 12,
    maxVolunteers: 20,
    category: "Mjedis",
    description: "Bashkohuni me ne për të pastruar Parkun e Madh të Tiranës dhe për të bërë një ndryshim pozitiv në mjedisin tonë.",
    skills: ["Punë fizike", "Përkushtim"]
  },
  {
    id: 2,
    title: "Mësimi i Anglishtes për Fëmijët",
    ngo: "EducationFirst Albania",
    location: "Durrës",
    date: "2025-06-20",
    volunteers: 5,
    maxVolunteers: 8,
    category: "Arsim",
    description: "Ndihmoni fëmijët lokalë të mësojnë anglisht përmes aktiviteteve argëtuese dhe interaktive.",
    skills: ["Anglisht", "Komunikim", "Punë me fëmijë"]
  },
  {
    id: 3,
    title: "Ndihma Ushqimore për Familjet",
    ngo: "Help Albania",
    location: "Shkodër",
    date: "2025-06-18",
    volunteers: 8,
    maxVolunteers: 15,
    category: "Sociale",
    description: "Organizimi dhe shpërndarja e paketave ushqimore për familjet në nevojë.",
    skills: ["Organizim", "Komunikim"]
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Të gjitha");
  const [selectedLocation, setSelectedLocation] = useState("Të gjitha");

  const categories = ["Të gjitha", "Mjedis", "Arsim", "Sociale", "Shëndetësi"];
  const locations = ["Të gjitha", "Tiranë", "Durrës", "Shkodër", "Vlorë", "Elbasan"];

  const filteredActivities = mockActivities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Të gjitha" || activity.category === selectedCategory;
    const matchesLocation = selectedLocation === "Të gjitha" || activity.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Heart className="h-8 w-8 text-blue-600 mr-2" />
                <span className="font-bold text-xl text-gray-900">VolunteerAlbania</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/volunteer-dashboard">
                <Button variant="ghost">Paneli i Vullnetarit</Button>
              </Link>
              <Link to="/ngo-dashboard">
                <Button variant="ghost">Paneli i OJF-së</Button>
              </Link>
              <Link to="/login">
                <Button>Kyçu</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Bashkohuni me Organizatat Jofitimprurëse në Shqipëri
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Gjeni mundësi vullnetarimi që përshtaten me interesat tuaja dhe bëni një ndryshim pozitiv në komunitetin tuaj.
          </p>
          <div className="flex max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Kërkoni aktivitete..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-r-none bg-white text-gray-900"
            />
            <Button className="rounded-l-none bg-blue-700 hover:bg-blue-800">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Kategoria:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Vendndodhja:</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Aktivitete Vullnetarimi ({filteredActivities.length})
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map(activity => (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{activity.category}</Badge>
                    <span className="text-sm text-gray-500">{activity.ngo}</span>
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {activity.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {activity.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(activity.date).toLocaleDateString('sq-AL')}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {activity.volunteers}/{activity.maxVolunteers} vullnetarë
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {activity.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/activity/${activity.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        Shiko Detajet
                      </Button>
                    </Link>
                    <Button className="flex-1">
                      Bashkohu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-blue-400 mr-2" />
                <span className="font-bold text-lg">VolunteerAlbania</span>
              </div>
              <p className="text-gray-300">
                Platforma që lidh vullnetarët me organizatat jofitimprurëse në Shqipëri.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Lidhje të Dobishme</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white">Rreth Nesh</Link></li>
                <li><Link to="/contact" className="hover:text-white">Kontakti</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privatësia</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kontakti</h3>
              <p className="text-gray-300">
                Email: info@volunteeralbania.al<br />
                Tel: +355 4 123 4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 VolunteerAlbania. Të gjitha të drejtat e rezervuara.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
