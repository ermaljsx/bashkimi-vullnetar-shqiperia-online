
import { useState } from "react";
import { Calendar, Clock, MapPin, Star, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VolunteerDashboard = () => {
  const [volunteer] = useState({
    name: "Ana Marku",
    email: "ana.marku@email.com",
    phone: "+355 69 123 4567",
    location: "Tiranë",
    skills: ["Anglisht", "Komunikim", "Organizim", "Punë me fëmijë"],
    interests: ["Arsim", "Mjedis", "Sociale"],
    hoursVolunteered: 45,
    activitiesCompleted: 8
  });

  const upcomingActivities = [
    {
      id: 1,
      title: "Mësimi i Anglishtes për Fëmijët",
      ngo: "EducationFirst Albania",
      date: "2025-06-20",
      time: "09:00",
      location: "Durrës",
      status: "confirmed"
    },
    {
      id: 2,
      title: "Pastrimi i Bregdetit",
      ngo: "EcoAlbania", 
      date: "2025-06-25",
      time: "08:00",
      location: "Vlorë",
      status: "pending"
    }
  ];

  const pastActivities = [
    {
      id: 3,
      title: "Ndihma Ushqimore për Familjet",
      ngo: "Help Albania",
      date: "2025-05-15",
      rating: 5,
      feedback: "Eksperiencë shumë e bukur dhe e dobishme!"
    },
    {
      id: 4,
      title: "Pastrimi i Parkut të Madh",
      ngo: "EcoAlbania",
      date: "2025-05-10",
      rating: 4,
      feedback: "Organizim i mirë, do të kishte qenë mirë më shumë mjete."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Paneli i Vullnetarit</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Cilësimet
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Dil
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle>{volunteer.name}</CardTitle>
                <p className="text-sm text-gray-600">{volunteer.email}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Statistikat</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Orë vullnetarimi:</span>
                      <span className="font-semibold">{volunteer.hoursVolunteered}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Aktivitete:</span>
                      <span className="font-semibold">{volunteer.activitiesCompleted}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Aftësitë</h4>
                  <div className="flex flex-wrap gap-1">
                    {volunteer.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Interesat</h4>
                  <div className="flex flex-wrap gap-1">
                    {volunteer.interests.map(interest => (
                      <Badge key={interest} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="upcoming" className="space-y-6">
              <TabsList>
                <TabsTrigger value="upcoming">Aktivitete të Ardhshme</TabsTrigger>
                <TabsTrigger value="past">Aktivitete të Kaluara</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Aktivitetet e Mia të Ardhshme</h2>
                  <Button>Gjej Aktivitete të Reja</Button>
                </div>

                {upcomingActivities.length === 0 ? (
                  <Card>
                    <CardContent className="text-center py-8">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Nuk keni aktivitete të ardhshme
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Eksploroni aktivitetet e disponueshme dhe bashkohuni me ato që ju interesojnë.
                      </p>
                      <Button>Shikoni Aktivitetet</Button>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {upcomingActivities.map(activity => (
                      <Card key={activity.id}>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                              <p className="text-gray-600 mb-4">{activity.ngo}</p>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  {new Date(activity.date).toLocaleDateString('sq-AL')}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-2" />
                                  {activity.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  {activity.location}
                                </div>
                              </div>
                            </div>
                            
                            <div className="ml-4 text-right">
                              <Badge 
                                variant={activity.status === 'confirmed' ? 'default' : 'secondary'}
                                className="mb-2"
                              >
                                {activity.status === 'confirmed' ? 'E konfirmuar' : 'Në pritje'}
                              </Badge>
                              <div className="space-y-2">
                                <Button variant="outline" size="sm" className="w-full">
                                  Detajet
                                </Button>
                                <Button variant="ghost" size="sm" className="w-full text-red-600">
                                  Anulo
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past" className="space-y-4">
                <h2 className="text-xl font-semibold">Aktivitetet e Kaluara</h2>
                
                <div className="space-y-4">
                  {pastActivities.map(activity => (
                    <Card key={activity.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                            <p className="text-gray-600 mb-2">{activity.ngo}</p>
                            <p className="text-sm text-gray-500 mb-4">
                              {new Date(activity.date).toLocaleDateString('sq-AL')}
                            </p>
                            
                            <div className="flex items-center mb-2">
                              <span className="text-sm text-gray-600 mr-2">Vlerësimi im:</span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < activity.rating 
                                        ? 'text-yellow-400 fill-current' 
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            
                            <p className="text-sm text-gray-700 italic">
                              "{activity.feedback}"
                            </p>
                          </div>
                          
                          <Button variant="outline" size="sm">
                            Shiko Sërish
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
