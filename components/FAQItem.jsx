"use client";
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";

const FAQItem = ({ question, answer, value }) => {
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get(
          "/api/v1/faq/service?serviceId=123456&limit=6",
        );
      } catch (error) {}
    };
  }, []);

  return (
    <AccordionItem value={value} className="border-b border-muted">
      <AccordionTrigger className="text-left font-medium text-lg py-4">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-500 py-4">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
