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
  const [serviceType, setServiceType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [marketing, setMarketing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newLead = {
      name,
      contact: { phoneNo: phone, whatsapp: phone, email },
      requirement: { service: serviceType, message },
      source: "website",
    };
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setServiceType("");
      setBudget("");
      setMessage("");
      setMarketing(false);

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);

    try {
      console.log(newLead);
      const response = await axios.post("/api/v1/lead", newLead);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91-8986699600"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service Interest *</Label>
          <select
            name="servicetype"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="appearance-none w-full py-2 px-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option className="text-gray-500" a value="">
              Select a service
            </option>
            <option className="text-black bg-white" value="design">
              Design
            </option>
            <option className="text-black bg-white" value="design">
              Approval
            </option>
            <option className="text-black bg-white" value="construction">
              Construction
            </option>
            <option className="text-black bg-white" value="consulting">
              Consulting
            </option>
            <option className="text-black bg-white" value="full-service">
              Full Service (Design + Construction)
            </option>
            <option className="text-black bg-white" value="other">
              Other
            </option>
          </select>
        </div>
      </div>

      {/* <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select
                      value={budget}
                      onValueChange={setBudget}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="over-500k">Over $500,000</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}

      <div className="space-y-2">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project, timeline, and any specific requirements."
          rows={5}
          required
        />
      </div>

      {/* <div className="flex items-start space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={marketing}
                      onCheckedChange={(checked) => {
                        if (typeof checked === 'boolean') {
                          setMarketing(checked);
                        }
                      }}
                    />
                    <Label htmlFor="marketing" className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I'd like to receive inspiration, marketing promotions and updates via email.
                    </Label>
                  </div> */}

      <Button
        type="submit"
        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : isSuccess ? (
          <>Message Sent</>
        ) : (
          <>Send Message</>
        )}
      </Button>
    </form>
  );
}
