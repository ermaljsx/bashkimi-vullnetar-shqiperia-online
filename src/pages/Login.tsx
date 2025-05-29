
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Mail, Lock, User, Building } from "lucide-react";

const Login = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    email: "",
    password: ""
  });

  const [ngoForm, setNgoForm] = useState({
    email: "",
    password: ""
  });

  const handleVolunteerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would connect to authentication
    console.log("Volunteer login:", volunteerForm);
    // Redirect to volunteer dashboard
    window.location.href = "/volunteer-dashboard";
  };

  const handleNgoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would connect to authentication
    console.log("NGO login:", ngoForm);
    // Redirect to NGO dashboard
    window.location.href = "/ngo-dashboard";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center">
            <Heart className="h-10 w-10 text-blue-600 mr-3" />
            <span className="text-2xl font-bold text-gray-900">VolunteerAlbania</span>
          </Link>
          <p className="text-gray-600 mt-2">Kyçuni në platformën tuaj</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Kyçu në Llogari</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="volunteer" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="volunteer" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Vullnetar
                </TabsTrigger>
                <TabsTrigger value="ngo" className="flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  OJF
                </TabsTrigger>
              </TabsList>

              <TabsContent value="volunteer">
                <form onSubmit={handleVolunteerLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="volunteer-email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="volunteer-email"
                        type="email"
                        placeholder="Shkruani email-in tuaj"
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="volunteer-password" className="text-sm font-medium text-gray-700">
                      Fjalëkalimi
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="volunteer-password"
                        type="password"
                        placeholder="Shkruani fjalëkalimin tuaj"
                        value={volunteerForm.password}
                        onChange={(e) => setVolunteerForm({...volunteerForm, password: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Kyçu si Vullnetar
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                      <Link to="/forgot-password" className="text-blue-600 hover:underline">
                        Harruat fjalëkalimin?
                      </Link>
                    </p>
                    <p className="text-sm text-gray-600">
                      Nuk keni llogari?{" "}
                      <Link to="/register" className="text-blue-600 hover:underline">
                        Regjistrohuni këtu
                      </Link>
                    </p>
                  </div>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Ose</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" type="button">
                      <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Kyçu me Google
                    </Button>
                    <Button variant="outline" className="w-full" type="button">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Kyçu me Facebook
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="ngo">
                <form onSubmit={handleNgoLogin} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="ngo-email" className="text-sm font-medium text-gray-700">
                      Email i Organizatës
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="ngo-email"
                        type="email"
                        placeholder="Shkruani email-in e organizatës"
                        value={ngoForm.email}
                        onChange={(e) => setNgoForm({...ngoForm, email: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ngo-password" className="text-sm font-medium text-gray-700">
                      Fjalëkalimi
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="ngo-password"
                        type="password"
                        placeholder="Shkruani fjalëkalimin"
                        value={ngoForm.password}
                        onChange={(e) => setNgoForm({...ngoForm, password: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Kyçu si OJF
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-gray-600">
                      <Link to="/forgot-password" className="text-blue-600 hover:underline">
                        Harruat fjalëkalimin?
                      </Link>
                    </p>
                    <p className="text-sm text-gray-600">
                      Organizata juaj nuk është e regjistruar?{" "}
                      <Link to="/register-ngo" className="text-blue-600 hover:underline">
                        Regjistroni organizatën
                      </Link>
                    </p>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
            ← Kthehu në faqen kryesore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
