
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, Star, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ActivityDetail = () => {
  const { id } = useParams();
  const [isJoined, setIsJoined] = useState(false);

  // Mock activity data - in real app would fetch based on ID
  const activity = {
    id: parseInt(id || "1"),
    title: "Pastrimi i Parkut të Madh",
    ngo: {
      name: "EcoAlbania",
      logo: "",
      rating: 4.8,
      description: "Organizatë e përkushtuar për mbrojtjen e mjedisit në Shqipëri",
      contact: "contact@ecoalbania.org"
    },
    location: "Parku i Madh, Tiranë",
    address: "Rruga e Elbasanit, pranë Qendrës Tregtare",
    date: "2025-06-15",
    startTime: "09:00",
    endTime: "12:00",
    volunteers: 12,
    maxVolunteers: 20,
    category: "Mjedis",
    description: "Bashkohuni me ne për të pastruar Parkun e Madh të Tiranës dhe për të bërë një ndryshim pozitiv në mjedisin tonë. Kjo aktivitet do të përfshijë pastrimin e zonave të ndryshme të parkut, mbjelljet e reja dhe organizimin e materialeve të riciklueshme.",
    requirements: [
      "Veshje të përshtatshme për punë në natyrë",
      "Doreza pune (do të sigurohen nga organizata)",
      "Motivim dhe energji pozitive",
      "Moshë minimale 16 vjeç"
    ],
    skills: ["Punë fizike", "Përkushtim", "Punë në grup"],
    benefits: [
      "Certifikatë vullnetarimi",
      "Ushqim dhe pije gjatë aktivitetit",
      "Transport i organizuar nga qendra e qytetit",
      "Eksperiencë e vlefshme pune në grup"
    ],
    schedule: [
      { time: "09:00", activity: "Mbërritja dhe regjistrimi" },
      { time: "09:15", activity: "Prezantimi i aktivitetit dhe ndarje në grupe" },
      { time: "09:30", activity: "Fillimi i punës - pastrimi i zonës" },
      { time: "11:00", activity: "Pushim dhe rikuqje" },
      { time: "11:15", activity: "Vazhdimi i punës - mbjelljet" },
      { time: "12:00", activity: "Përfundimi dhe vlerësimi" }
    ]
  };

  const reviews = [
    {
      id: 1,
      volunteer: "Ana Marku",
      rating: 5,
      comment: "Eksperiencë fantastike! Organizimi ishte i shkëlqyer dhe ndihemi shumë të dobishëm.",
      date: "2025-05-20"
    },
    {
      id: 2,
      volunteer: "Marko Petriti", 
      rating: 4,
      comment: "Aktivitet i bukur, por do të ishte mirë të kishte më shumë mjete pune.",
      date: "2025-05-18"
    }
  ];

  const handleJoin = () => {
    setIsJoined(!isJoined);
    // In real app would make API call to join/leave activity
  };

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
              <Link to="/">
                <Button variant="ghost">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kthehu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{activity.category}</Badge>
                <span className="text-sm text-gray-500">nga {activity.ngo.name}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{activity.title}</h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-medium">{new Date(activity.date).toLocaleDateString('sq-AL')}</div>
                    <div className="text-sm">{activity.startTime} - {activity.endTime}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-medium">{activity.location}</div>
                    <div className="text-sm">{activity.address}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-medium">{activity.volunteers}/{activity.maxVolunteers}</div>
                    <div className="text-sm">vullnetarë</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-medium">3 orë</div>
                    <div className="text-sm">kohëzgjatja</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="space-y-6">
              <TabsList>
                <TabsTrigger value="description">Përshkrimi</TabsTrigger>
                <TabsTrigger value="schedule">Orari</TabsTrigger>
                <TabsTrigger value="requirements">Kërkesat</TabsTrigger>
                <TabsTrigger value="reviews">Vlerësimet</TabsTrigger>
              </TabsList>

              <TabsContent value="description">
                <Card>
                  <CardHeader>
                    <CardTitle>Rreth Aktivitetit</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Aftësitë e Nevojshme</h4>
                      <div className="flex flex-wrap gap-2">
                        {activity.skills.map(skill => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Përfitimet</h4>
                      <ul className="space-y-2">
                        {activity.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule">
                <Card>
                  <CardHeader>
                    <CardTitle>Orari i Aktivitetit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activity.schedule.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-b-0">
                          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium min-w-fit">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements">
                <Card>
                  <CardHeader>
                    <CardTitle>Kërkesat për Pjesëmarrje</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {activity.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-3 mt-1">•</span>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-4">
                  {reviews.map(review => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{review.volunteer}</h4>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating 
                                      ? 'text-yellow-400 fill-current' 
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString('sq-AL')}
                          </span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Join Button */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {activity.volunteers}/{activity.maxVolunteers}
                  </div>
                  <div className="text-sm text-gray-600">vullnetarë të regjistruar</div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(activity.volunteers / activity.maxVolunteers) * 100}%` }}
                    ></div>
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={handleJoin}
                    variant={isJoined ? "outline" : "default"}
                  >
                    {isJoined ? "Anulo Pjesëmarrjen" : "Bashkohu me Aktivitetin"}
                  </Button>

                  <p className="text-xs text-gray-500">
                    Do të dërgojmë një email konfirmimi pasi të regjistroheni
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* NGO Info */}
            <Card>
              <CardHeader>
                <CardTitle>Rreth Organizatës</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-green-800">{activity.ngo.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{activity.ngo.name}</h4>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-gray-600">{activity.ngo.rating}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700">{activity.ngo.description}</p>
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Shiko Profilin
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Kontakto Organizatën
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle>Ndaje Aktivitetin</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
