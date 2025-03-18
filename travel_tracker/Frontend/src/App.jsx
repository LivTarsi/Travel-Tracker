import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { FaPlane, FaHotel, FaListAlt, FaDollarSign, FaClipboardList } from "react-icons/fa";

export default function TravelTracker() {
  const [tripName, setTripName] = useState("");
  const [budget, setBudget] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignUp = () => {
    // User sign-up logic (send request to backend, store JWT, etc.)
  };
  
  const handleLogin = () => {
    // User login logic (send request to backend, receive JWT, authenticate)
  };
  
  const handlePlanningSubmission = () => {
    // Attach planning form details to user in database
  };
  
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Travel Tracker</h1>
      
      {/* User Authentication */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Login / Sign Up</h2>
        <Input 
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2"
        />
        <Input 
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2"
        />
        <Button onClick={handleLogin} className="mr-2">Log In</Button>
        <Button onClick={handleSignUp} variant="outline">Sign Up</Button>
      </div>
      
      <div className="mb-4">
        <Input 
          placeholder="Enter Trip Name"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="flights" className="w-full">
        <TabsList className="grid grid-cols-5 gap-2 mb-4">
          <TabsTrigger value="flights">
            <FaPlane className="mr-2" /> Flights
          </TabsTrigger>
          <TabsTrigger value="stay">
            <FaHotel className="mr-2" /> Stay
          </TabsTrigger>
          <TabsTrigger value="itinerary">
            <FaListAlt className="mr-2" /> Itinerary
          </TabsTrigger>
          <TabsTrigger value="budget">
            <FaDollarSign className="mr-2" /> Budget
          </TabsTrigger>
          <TabsTrigger value="planning">
            <FaClipboardList className="mr-2" /> Planning
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flights">
          <Card>
            <CardContent className="p-4">Flight details coming soon...</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stay">
          <Card>
            <CardContent className="p-4">Stay details coming soon...</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="itinerary">
          <Card>
            <CardContent className="p-4">Itinerary details coming soon...</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="budget">
          <Card>
            <CardContent className="p-4">
              <Input 
                placeholder="Enter Budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="planning">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Trip Planning</h2>
              <Input placeholder="Enter details..." className="mb-2" />
              <Button onClick={handlePlanningSubmission}>Submit</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}