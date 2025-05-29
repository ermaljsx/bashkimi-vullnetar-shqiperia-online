
import { useState } from "react";
import { Plus, Users, Calendar, BarChart3, Settings, LogOut, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NgoDashboard = () => {
  const [ngo] = useState({
    name: "EcoAlbania",
    email: "contact@ecoalbania.org",
    description: "Organizatë e përkushtuar për mbrojtjen e mjedisit në Shqipëri",
    location: "Tiranë",
    website: "www.ecoalbania.org",
    activitiesCreated: 15,
    totalVolunteers: 120,
    upcomingEvents: 3
  });

  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "Pastrimi i Parkut të Madh",
      date: "2025-06-15",
      volunteers: 12,
      maxVolunteers: 20,
      status: "active",
      category: "Mjedis"
    },
    {
      id: 2,
      title: "Pastrimi i Bregdetit të Vlorës",
      date: "2025-06-25",
      volunteers: 5,
      maxVolunteers: 15,
      status: "active",
      category: "Mjedis"
    },
    {
      id: 3,
      title: "Mbjellja e Pemëve në Kamëz",
      date: "2025-05-20",
      volunteers: 8,
      maxVolunteers: 10,
      status: "completed",
      category: "Mjedis"
    }
  ]);

  const volunteers = [
    {
      id: 1,
      name: "Ana Marku",
      email: "ana.marku@email.com",
      activities: 3,
      rating: 4.8,
      skills: ["Komunikim", "Organizim"]
    },
    {
      id: 2,
      name: "Marko Petriti",
      email: "marko.petriti@email.com", 
      activities: 2,
      rating: 4.9,
      skills: ["Punë fizike", "Përkushtim"]
    },
    {
      id: 3,
      name: "Elsa Hoxha",
      email: "elsa.hoxha@email.com",
      activities: 5,
      rating: 5.0,
      skills: ["Lidershipi", "Komunikim", "Organizim"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">Paneli i OJF-së</h1>
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Aktivitete Aktive</p>
                  <p className="text-2xl font-bold text-gray-900">{ngo.upcomingEvents}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Vullnetarë</p>
                  <p className="text-2xl font-bold text-gray-900">{ngo.totalVolunteers}</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Aktivitete të Krijuara</p>
                  <p className="text-2xl font-bold text-gray-900">{ngo.activitiesCreated}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Përfshirje Mesatare</p>
                  <p className="text-2xl font-bold text-gray-900">75%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile and Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Organization Profile */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>{ngo.name}</CardTitle>
                <p className="text-sm text-gray-600">{ngo.email}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Përshkrimi</h4>
                  <p className="text-sm text-gray-600">{ngo.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Vendndodhja</h4>
                  <p className="text-sm text-gray-600">{ngo.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Website</h4>
                  <p className="text-sm text-blue-600">{ngo.website}</p>
                </div>
                <Button className="w-full">
                  Ndrysho Profilin
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="activities" className="space-y-6">
              <div className="flex justify-between items-center">
                <TabsList>
                  <TabsTrigger value="activities">Aktivitetet</TabsTrigger>
                  <TabsTrigger value="volunteers">Vullnetarët</TabsTrigger>
                  <TabsTrigger value="analytics">Analitika</TabsTrigger>
                </TabsList>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Krijo Aktivitet të Ri
                </Button>
              </div>

              <TabsContent value="activities" className="space-y-4">
                <div className="space-y-4">
                  {activities.map(activity => (
                    <Card key={activity.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold">{activity.title}</h3>
                              <Badge 
                                variant={activity.status === 'active' ? 'default' : 'secondary'}
                              >
                                {activity.status === 'active' ? 'Aktiv' : 'I përfunduar'}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                              <div>
                                <span className="font-medium">Data:</span> {new Date(activity.date).toLocaleDateString('sq-AL')}
                              </div>
                              <div>
                                <span className="font-medium">Vullnetarë:</span> {activity.volunteers}/{activity.maxVolunteers}
                              </div>
                              <div>
                                <span className="font-medium">Kategoria:</span> {activity.category}
                              </div>
                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${(activity.volunteers / activity.maxVolunteers) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div className="ml-4 flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              Shiko Vullnetarët
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="volunteers" className="space-y-4">
                <div className="space-y-4">
                  {volunteers.map(volunteer => (
                    <Card key={volunteer.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-1">{volunteer.name}</h3>
                            <p className="text-gray-600 mb-2">{volunteer.email}</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                              <div>
                                <span className="font-medium">Aktivitete:</span> {volunteer.activities}
                              </div>
                              <div>
                                <span className="font-medium">Vlerësimi:</span> ⭐ {volunteer.rating}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1">
                              {volunteer.skills.map(skill => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="ml-4 space-y-2">
                            <Button variant="outline" size="sm" className="w-full">
                              Shiko Profilin
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              Dërgo Mesazh
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Aktivitetet për Muaj</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Grafiku i aktiviteteve do të shfaqet këtu
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Vullnetarët Aktivë</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 flex items-center justify-center text-gray-500">
                        Grafiku i vullnetarëve do të shfaqet këtu
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Kategoritë më të Populluara</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Mjedis</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div className="bg-green-600 h-2 rounded-full" style={{width: '80%'}}></div>
                            </div>
                            <span className="text-sm text-gray-600">80%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Arsim</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                            </div>
                            <span className="text-sm text-gray-600">60%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Sociale</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-600 h-2 rounded-full" style={{width: '40%'}}></div>
                            </div>
                            <span className="text-sm text-gray-600">40%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Performanca e Përgjithshme</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Shkalla e Plotësimit</span>
                          <span className="font-semibold">75%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Vlerësimi Mesatar</span>
                          <span className="font-semibold">4.6 ⭐</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Shkalla e Kthimit</span>
                          <span className="font-semibold">85%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoDashboard;
