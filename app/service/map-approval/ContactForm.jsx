"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newLead = {
      name,
      contact: { phoneNo: phone, whatsapp: phone, email },
      location: { city },
      requirement: { service: "Approval", message },
      source: "website",
    };
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setCity("");

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);

    try {
      console.log(newLead);

      const response = await axios.post("/api/lead", newLead);
      //   await axios.post(
      //     `${process.env.API_BASE_URL}/api/v1/lead`,
      //     newLead,
      //   );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
            className="input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91-8986699600"
            required
            className="input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            className="input"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">City / Area *</Label>
          <Input
            id="area"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City / Area"
            className="input"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project..."
          rows={5}
          required
          className="input"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : isSuccess ? (
          <>Message Sent</>
        ) : (
          <>Submit Consultation Request</>
        )}
      </Button>
    </form>
  );
}
