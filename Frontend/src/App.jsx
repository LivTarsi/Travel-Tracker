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
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const API_BASE_URL = "http://localhost:5000/api";

  const handleSignUp = async () => {
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Signup successful! Please log in.");
    } else {
      alert(data.msg || "Error signing up.");
    }
  };

  const handleLogin = async () => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      setToken(data.access_token);
      localStorage.setItem("token", data.access_token);
      alert("Login successful!");
    } else {
      alert(data.msg || "Invalid credentials.");
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const handleCreateTrip = async () => {
    if (!token) {
      alert("Please log in first.");
      return;
    }

    const response = await fetch(`${API_BASE_URL}/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ tripName, budget }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Trip created successfully!");
    } else {
      alert(data.msg || "Error creating trip.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Travel Tracker</h1>

      {/* User Authentication */}
      {!token ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Login / Sign Up</h2>
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
          <div className="flex gap-2">
            <Button onClick={handleLogin}>Log In</Button>
            <Button onClick={handleSignUp} variant="outline">Sign Up</Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center mb-4">
          <p className="text-green-600">Logged in as {email}</p>
          <Button onClick={handleLogout} variant="destructive">Log Out</Button>
        </div>
      )}

      {/* Trip Input */}
      {token && (
        <div className="mb-4">
          <Input 
            placeholder="Enter Trip Name"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            className="mb-2"
          />
          <Input 
            placeholder="Enter Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleCreateTrip}>Create Trip</Button>
        </div>
      )}

      {/* Tabs for trip management */}
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
          <Card><CardContent className="p-4">Flight details coming soon...</CardContent></Card>
        </TabsContent>
        <TabsContent value="stay">
          <Card><CardContent className="p-4">Stay details coming soon...</CardContent></Card>
        </TabsContent>
        <TabsContent value="itinerary">
          <Card><CardContent className="p-4">Itinerary details coming soon...</CardContent></Card>
        </TabsContent>
        <TabsContent value="budget">
          <Card><CardContent className="p-4">Budget details coming soon...</CardContent></Card>
        </TabsContent>
        <TabsContent value="planning">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Trip Planning</h2>
              <Input placeholder="Enter details..." className="mb-2" />
              <Button>Submit</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
