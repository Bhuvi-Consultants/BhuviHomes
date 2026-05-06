"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }
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
      setIsSubmitting(true);
      setError("");
      console.log(newLead);
      const response = await axios.post("/api/lead", newLead);
      //   await axios.post(
      //     `${process.env.API_BASE_URL}/api/v1/lead`,
      //     newLead,
      //   );

      setIsSuccess(true);

      // reset form
      setName("");
      setPhone("");
      setEmail("");
      setCity("");
      setMessage("");
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-sm border text-center animate-in fade-in duration-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          Consultation Request Submitted
        </h3>

        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Our architectural team will review your request and contact you within
          24 business hours.
        </p>

        <button
          onClick={() => setIsSuccess(false)}
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

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

      <input type="text" name="website" className="hidden" />

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-700 hover:bg-green-800 text-white py-6 rounded-lg font-semibold transition disabled:opacity-70"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending Request...
          </div>
        ) : (
          "Submit Consultation Request"
        )}
      </Button>
    </form>
  );
}
