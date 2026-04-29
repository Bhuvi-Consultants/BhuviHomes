"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PricingPlan = ({ type }) => {
  const [openSection, setOpenSection] = useState(null);
  const [packages, setPackages] = useState([]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // --- DATA (same as yours, shortened here for clarity) ---
  const Construction = [
    {
      head: "Signature Package – ₹1,873/SQ.FT (Excl. GST)",
      features: [
        {
          title: "Designs & Drawings",
          description: [
            "Conceptual Floor Plan",
            "Furniture Layout",
            "Structural Drawing & Detail",
            "3D Elevation",
            "Electrical & Plumbing",
            "Interior Design",
          ],
        },
        {
          title: "Foundation Upto Tie Beam - ₹ 700/SQ.FT",
          description: [
            "Steel: TATA TISCON (550D)",
            "Cement: ACC (F2R For RCC Work & HPC For Brick & Plaster Work)",
            'Bricks: AAC Block / Fly Ash / Red Bricks of 10" for Exterior & 5" for Interior wall',
            "Sand: P Sand - Brickwork & Plastering & River Sand",
            "Aggregate: Black Aggregate (Chuttu-palu) 10 mm & 20 mm",
            "RCC Design Mix: M20",
            "Water Proofing: Dr. Fixit",
            "Anti-Termite Proofing: Terminator",
            "Ground Level From Road: 2\' - 6\" Above existing road level (extra ₹ 50/ft)",
            "Floor to Floor Height: 10\' (extra ₹ 50/ft)",
          ],
        },
        {
          title: "Structure",
          description: [
            "Steel: TATA TISCON (550D)",
            "Cement: ACC (F2R For RCC Work & HPC For Brick & Plaster Work)",
            'Bricks: AAC Block / Fly Ash / Red Bricks of 10" for Exterior & 5" for Interior wall',
            "Sand: P Sand - Brickwork & Plastering & River Sand",
            "Aggregate: Black Aggregate (Chuttu-palu) 10 mm & 20 mm",
            "RCC Design Mix: M20",
            "Water Proofing: Dr. Fixit",
            "Anti-Termite Proofing: Terminator",
            "Ground Level From Road: 2\' - 6\" Above existing road level (extra ₹ 50/ft)",
            "Floor to Floor Height: 10\' (extra ₹ 50/ft)",
          ],
        },
        {
          title: "Flooring",
          description: [
            "Floor Tiles : Vitrified Tiles Upto ₹ 60/sq.ft",
            "Toilet Wall Tiles : Vitrified Tiles 7' Hight Upto ₹ 60/sq.ft",
            "Staircase : Granite On Tread of Upto ₹ 110/sq.ft",
            "Balcony : Vitrified Tiles of Upto ₹ 60/sq.ft",
            "Parking Floor (Upto Covered Area) : Heavy Duty Tiles of Upto ₹ 45/sqft",
            "Kitchen Couter : Granite Top of Upto ₹ 110/sq.ft",
            "Kitchen Dado : Tiles Upto 4' of ₹ 60/sq.ft",
            "Doors Threshold : Granite of Upto ₹ 110/sq.ft",
            "Tiles Skirting : Upto 4 Inch",
            "Make : Kajaria / Vermora / GC / Johnson",
          ],
        },
        {
          title: "Painting",
          description: [
            "Putty : 2/3 Coat Birla White Putty",
            "Primer : 1 Coat of Asian / Birla White",
            "Rustic: Rustic Texture of German Rustic",
            "Interior Wall : Asian Apcolite /Birla Opus",
            "Exterior Wall : 2 Coat Weather Proof Paint of Asian / Opus",
            "Window Grill : Metal Primer & Enamel Paint",
          ],
        },
        {
          title: "Doors & Windows",
          description: [
            "Main Door : Steel Door (Tata Pravesh / Megastar) Or Solid Wood with MS Grill of Upto ₹ 35000 per Door/Project",
            "Inner Doors : Century Sanik 710 BWP Grade 30mm (Upto ₹ 11000/Door)",
            "Laminate Sheet : Door Laminate upto ₹ 700/sheet",
            "Door Fittings : Upto ₹ 1000/door of any approved brand",
            "Handle Lock: Godrej/Dorset of Upto ₹ 2000/door",
            "Bathroom Door: Wpc Door upto ₹ 8000/Door",
            "Door Jams: Granite / Sakhua Wood with Polish Or WPC",
            "Window : Sliding 2.5 Track UPVC Window (Upto ₹ 550/sqft)",
            "Window Grill : Galvanized MS Grill",
            "Window Surround: Full Granite Window Surround of Upto ₹ 110/sq.ft",
            "Ventilator: MS Gill with UPVC Louvers of Upto ₹ 550/sqft",
            "Glass : 5mm thick Tinted / Reflective (Saint Gobain)",
          ],
        },
        {
          title: "Plumbing",
          description: [
            "Pipes: Supreme / Ashirwad",
            "Bathroom Fittings: Upto ₹ 25000/Bathroom ( Including: EWC, Health Faucet, Wash Basin, 2 In 1 Wall Mixer )",
            "Kitchen/Dinning Basin: Upto ₹ 4000/Basin",
            "Kitchen/Dinning Mixture: Upto ₹ 4000/Basin",
            "Water Tank: 2000 Ltr. Triple Layer Tank / Floor",
            "Other Provisions: RO Point, Geyser Point, Exhaust Point, Washing Machine Point",
          ],
        },
        {
          title: "Electrical",
          description: [
            "Conduct Pipe & GI Box : Anchor",
            "Wires : Havells / Anchor with AC & Inverter Wiring",
            "Switches & Plate : Anchor - Penta / Roma (Plain White Color)",
            "MCB & RCCB : Anchor Single Phase upto ₹ 2000 & Tripal Phase upto ₹ 2500",
            "Sub Meter : Upto ₹ 600",
            "Change Over : Single Phase upto ₹ 2000 & Tripal Phase upto ₹ 2500",
            "Earthing: Chemical Earthing As per Load",
          ],
        },
        {
          title: "Railing",
          description: [
            "Balcony Railing : Granite Sill Top with Galvanized Iron Railing OR SS Railing 304 Grade Upto ₹ 650/rft",
            "Staiir Case Railing : Galvanized Iron Railing OR SS Railing 304 grade Upto ₹ 650/rft",
          ],
        },
        {
          title: "On Extra Cost (Not Included in Covered Area)",
          description: [
            "Boundary Wall: ₹ 350/sq.ft",
            "Main Gate: ₹ 100/Kg Fixing and enamel painting",
            "Lift: As per Vendor",
            "Septic Tank + Soak Pit: ₹ 150000 size 13' X 8' X 8' + 6' X 6' X 6'",
            "Terrace Parapet Wall: ₹ 650/Rft",
            "Under Ground RCC Water Tank: ₹ 26/Litr",
            "Modern Rain Water Harvesting: ₹ 20000 with vertical Filter and Silting Chamber",
            "Traditional Rain Water Harvesting: ₹ 150000 with 100' boring and 8' Chamber with filter media",
            "Interior Woodwork: As per Quotation",
            "Light & Fan: As per Quotation",
            "RCC Chajja: ₹ 400/sq.ft",
            "Kaddappa Self: ₹ 100/sq.ft",
            "Granite Self: ₹ 150/sq.ft",
            "False Celling: ₹ 65/sq.ft",
          ],
        },
      ],
    },
    {
      head: "Smart Package – ₹1,650/SQ.FT (Excl. GST)",
      features: [
        {
          title: "Designs & Drawings",
          description: [
            "Conceptual Floor Plan",
            "Furniture Layout",
            "Structural Drawing & Detail",
            "3D Elevation",
            "Electrical & Plumbing",
          ],
        },
        {
          title: "Foundation Upto Tie Beam - ₹ 550/SQ.FT",
          description: [
            "Steel: Rungta/ Mongia (550D)",
            "Cement: Bangur / Shree Cement",
            'Bricks: AAC Bricks (Sharda Excel) / Flyash Bricks (Inland) of 10" for Exterior & 5" for Interior wall',
            "Sand: P Sand - Brickwork & Plastering & River Sand",
            "Aggregate: Black Aggregate (Chuttu-palu) 10 mm & 20 mm",
            "RCC Design Mix: M20",
            "Water Proofing: Dr. Fixit",
            "Anti-Termite Proofing: Terminator",
            "Ground Level From Road: 2\' - 6\" Above existing road level (extra ₹ 50/ft)",
            "Floor to Floor Height: 10\' (extra ₹ 50/ft)",
          ],
        },
        {
          title: "Structure",
          description: [
            "Steel: Rungta/ Mongia (550D)",
            "Cement: Bangur / Shree Cement",
            'Bricks: AAC Bricks (Sharda Excel) / Flyash Bricks (Inland) of 10" for Exterior & 5" for Interior wall',
            "Sand: P Sand - Brickwork & Plastering & River Sand",
            "Aggregate: Black Aggregate (Chuttu-palu) 10 mm & 20 mm",
            "RCC Design Mix: M20",
            "Water Proofing: Dr. Fixit",
            "Anti-Termite Proofing: Terminator",
            "Ground Level From Road: 2\' - 6\" Above existing road level (extra ₹ 50/ft)",
            "Floor to Floor Height: 10\' (extra ₹ 50/ft)",
          ],
        },
        {
          title: "Flooring",
          description: [
            "Floor Tiles : Vitrified Tiles Upto ₹ 50/sq.ft",
            "Toilet Wall : Vitrified Tiles 7\' Height Upto ₹ 50/sq.ft",
            "Staircase : Granite On Tread of Upto ₹ 90/sq.ft & Tiles on Riser of Upto ₹ 50/sq.ft",
            "Kitchen Counter : Granite Top of Upto ₹ 50/sq.ft",
            "Kitchen Dado : Tiles Upto 4\' of Upto ₹ 50/sq.ft",
            "Balcony & Open Area Floor : Tiles of Upto ₹ 45/sq.ft",
            "Parking Floor (Upto Covered Area) : Anti-Skid Tiles of Upto ₹ 45/sqft",
            'Tiles Skirting : Upto 4" Thick',
            "Make : Kajaria / Vermora / GC / Johnson",
          ],
        },
        {
          title: "Painting",
          description: [
            "Putty : 2/3 Coat Berger Putty",
            "Primer : 1 Coat Berger / Nerolac",
            "Interior Wall : Tractor Emulsion / Nerolac / Berger",
            "Exterior Wall : 2 Coat Weather Proof Paint of Exterior Emulsion / Nerolac",
            "Window Grill : Metal Primer & Enamel Paint",
          ],
        },
        {
          title: "Doors & Windows",
          description: [
            "All Doors : Flush Door BWP Grade 30mm",
            "Laminate Sheet : Door Laminate upto ₹ 700/sheet",
            "Door Fittings : Upto ₹ 1000/door of any approved brand",
            "Aldrop Lock: Upto ₹ 1000/door",
            "Bathroom Door: Aluminium Door",
            "Door Jams: WPC",
            "Window : Sliding 3 Track Aluminium Window Powder Coated (Upto ₹ 300/sqft)",
            "Window Grill : MS Grill",
            "Window Sill: Granite of Upto ₹ 90/sq.ft",
            "Ventilator: MS Gill with Glass Louvers",
            "Glass : 5mm thick Tinted / Reflective (Saint Gobain)",
          ],
        },
        {
          title: "Plumbing",
          description: [
            "Pipes: Supreme / Ashirwad",
            "Bathroom Fittings: Upto ₹ 20000/Bathroom ( Including: EWC, Health Faucet, Wash Basin, 2 In 1 Wall Mixer )",
            "Kitchen/Dinning Basin: Upto ₹ 3000/Basin",
            "Kitchen/Dinning Mixture: Upto ₹ 2000/Basin",
            "Water Tank: 2000 Ltr. Triple Layer Tank / Floor",
            "Other Provisions: RO Point, Geyser Point, Exhaust Point, Washing Machine Point",
          ],
        },
        {
          title: "Electrical",
          description: [
            "GI Box & Conduct Pipe : Anchor",
            "Wires : PolyCab / Anchor (AC & Inverter Wiring)",
            "Switches & Plate : Anchor - Penta / Roma (Plain White Color Non Modular)",
            "MCB & RCCB : Anchor, Single Phase upto ₹ 2000 & Tripal Phase upto ₹ 2500",
            "Change Over : Single Phase upto ₹ 2000 & Tripal Phase upto ₹ 2500",
            "Earthing: Chemical Earthing As per Load",
          ],
        },
        {
          title: "Railing",
          description: [
            "Balcony Railing : Galvanized Iron Railing OR SS Railing 202 Grade Upto ₹ 450/rft",
            "Staiir Case Railing : Iron Railing OR SS Railing 202 grade Upto ₹ 450/rft",
          ],
        },
        {
          title: "On Extra Cost (Not Included in Covered Area)",
          description: [
            "Boundary Wall: ₹ 350/sq.ft",
            "Main Gate: ₹ 100/Kg Fixing and enamel painting",
            "Lift: As per Vendor",
            "Septic Tank + Soak Pit: ₹ 150000 size 13' X 8' X 8' + 6' X 6' X 6'",
            "Terrace Parapet Wall: ₹ 650/Rft",
            "Under Ground RCC Water Tank: ₹ 24/Litr",
            "Modern Rain Water Harvesting: ₹ 20000 with vertical Filter and Silting Chamber",
            "Traditional Rain Water Harvesting: ₹ 150000 with 100' boring and 8' Chamber with filter media",
            "Interior Woodwork: As per Quotation",
            "Light & Fan: As per Quotation",
            "RCC Chajja: ₹ 400/sq.ft",
            "Kaddappa Self: ₹ 100/sq.ft",
            "Granite Self: ₹ 150/sq.ft",
            "False Celling: ₹ 65/sq.ft",
          ],
        },
      ],
    },
  ];

  const Design = [
    {
      head: "For Built-up Area Upto 3000/sq.ft & G+2 Floor",
      features: [
        {
          title: "PREMIUM - ₹ 60,000/-",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Furniture Layout-2D",
            "Construction Quotation",
            "3D Exterior View (1 option)",
            "Electrical Drawing",
            "Plumbing Drawing",
            "4 Site Visits",
            "Interior Design",
            "Interior Quotation",
            "Soil Testing",
            "Survey",
            "Delivery Time - 45 Working Days",
          ],
        },
        {
          title: "ADVANCE - ₹ 30,000/-",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Furniture Layout-2D",
            "Construction Quotation",
            "3D Exterior View (1 option)",
            "Electrical Drawing",
            "Plumbing Drawing",
            "3 Site Visits",
            "Soil Testing",
            "Delivery Time - 23 Working Days",
          ],
        },
        {
          title: "STANDARD - ₹ 12,000/-",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Furniture Layout-2D",
            "2 Site Visits",
            "Delivery Time - 9 Working Days",
          ],
        },
        {
          title: "General Terms *",
          description: [
            "Conceptual Drawing includes 1 Option and 2 Corrections.",
            "Working Drawing includes Structural Drawing of Footing, Column, Beams, Slab and Brickwork without Revision.",
            "Construction Quotation will be as per our Construction Rates.",
            "3D View will contain Exterior View of all Four sides.",
            "Points of Plumbing & Electrical switch height & symbols are shown in Drawings.",
            "Site Visit will be possible as per availability.",
            "All designs are based on site measurements taken at the time and changes may affect cost and timeline.",
            "All drawings are according to our best knowledge of Vastu.",
            "Delivery timeline depends on timely correction, approvals & payments.",
            "All designs are prepared based on client requirements, site conditions, applicable bye-laws, and standard design practices.",
            "Map approval process's timeline can be vary by involvement of Govt. Body.",
            "The Fees & Document to be applied in Map approval process have been decided by the Govt.",
            "Rates are Excluding GST.",
          ],
        },
      ],
    },
    {
      head: "For Built-up Area Above 3000/sq.ft or G+2 Floor",
      features: [
        {
          title: "PREMIUM - ₹ 20/SQ.FT",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Furniture Layout-2D",
            "Construction Quotation",
            "3D Exterior View (1 option)",
            "Electrical Drawing",
            "Plumbing Drawing",
            "4 Site Visits",
            "Interior Design",
            "Interior Quotation",
            "Soil Testing",
            "Survey",
            "Delivery Time - 45 Working Days",
          ],
        },
        {
          title: "ADVANCE - ₹ 8/SQ.FT",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Furniture Layout-2D",
            "Construction Quotation",
            "3D Exterior View (1 option)",
            "Electrical Drawing",
            "Plumbing Drawing",
            "3 Site Visits",
            "Soil Testing",
            "Delivery Time - 23 Working Days",
          ],
        },
        {
          title: "STANDARD - ₹ 4/SQ.FT",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Furniture Layout-2D",
            "2 Site Visits",
            "Delivery Time - 9 Working Days",
          ],
        },
        {
          title: "General Terms *",
          description: [
            "Conceptual Drawing includes 1 Option and 2 Corrections.",
            "Working Drawing includes Structural Drawing of Footing, Column, Beams, Slab and Brickwork without Revision.",
            "Construction Quotation will be as per our Construction Rates.",
            "3D View will contain Exterior View of all Four sides.",
            "Points of Plumbing & Electrical switch height & symbols are shown in Drawings.",
            "Site Visit will be possible as per availability.",
            "All designs are based on site measurements taken at the time and changes may affect cost and timeline.",
            "All drawings are according to our best knowledge of Vastu.",
            "Delivery timeline depends on timely correction, approvals & payments.",
            "All designs are prepared based on client requirements, site conditions, applicable bye-laws, and standard design practices.",
            "Map approval process's timeline can be vary by involvement of Govt. Body.",
            "The Fees & Document to be applied in Map approval process have been decided by the Govt.",
            "Rates are Excluding GST.",
          ],
        },
      ],
    },
    {
      head: "Specific Design Services",
      features: [
        {
          title: "Single Floor Design - ₹ 8,000/-",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Delivery Time - 7 Working Days",
          ],
        },
        {
          title: "G+2 Floor Design - ₹ 12,000/-",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Delivery Time - 7 Working Days",
          ],
        },
        {
          title: "3D View - ₹ 12,000/-",
          description: [
            "Including 1 Options & Catalogue",
            "Elevation Detail",
            "Delivery Time - 8 Working Days",
          ],
        },
        {
          title: "Service Drawing - ₹ 7,000/-",
          description: [
            "Electrical Drawing",
            "Plumbing Drawing",
            "Delivery Time - 3 Working Days",
          ],
        },
        {
          title: "Blue Print + Estimate - ₹ 6,000/-",
          description: [
            "Sanction Drawing",
            "Bank Estimate",
            "Delivery Time - 2 Working Days",
          ],
        },
        {
          title: "Map Approval - ₹ 15,000/-",
          description: [
            "The Fees & Document to be applied in Map approval process have been decided by the Govt.",
            "Delivery Time - Timeline can be vary by involvement of Govt. Body.",
          ],
        },
        {
          title: "Interior Design - ₹ 15/sq.ft",
          description: ["Delivery Time - 14 Working Days"],
        },
        {
          title: "Interior Design Estimate - ₹ 4/sq.ft",
          description: ["Delivery Time - 9 Working Days"],
        },
        {
          title: "Site Visit in Ranchi - ₹ 2000/- Per Visit.",
          description: ["Site Visit will be possible as per availability"],
        },
        {
          title: "Site Visit Out of Ranchi - ₹ 2000/- Per Visit.",
          description: ["Site Visit will be possible as per availability"],
        },
        {
          title: "General Terms *",
          description: [
            "Conceptual Drawing includes 1 Option and 2 Corrections.",
            "Working Drawing includes Structural Drawing of Footing, Column, Beams, Slab and Brickwork without Revision.",
            "Construction Quotation will be as per our Construction Rates.",
            "3D View will contain Exterior View of all Four sides.",
            "Points of Plumbing & Electrical switch height & symbols are shown in Drawings.",
            "Site Visit will be possible as per availability.",
            "All designs are based on site measurements taken at the time and changes may affect cost and timeline.",
            "All drawings are according to our best knowledge of Vastu.",
            "Delivery timeline depends on timely correction, approvals & payments.",
            "All designs are prepared based on client requirements, site conditions, applicable bye-laws, and standard design practices.",
            "Map approval process's timeline can be vary by involvement of Govt. Body.",
            "The Fees & Document to be applied in Map approval process have been decided by the Govt.",
            "Rates are Excluding GST.",
          ],
        },
      ],
    },
  ];

  const Interior = [
    {
      head: "Specific Services",
      features: [
        {
          title: "Interior Design - ₹ 15/sq.ft",
          description: ["Delivery Time - 14 Working Days"],
        },
        {
          title: "Interior Design Estimate - ₹ 4/sq.ft",
          description: ["Delivery Time - 9 Working Days"],
        },
      ],
    },
    {
      head: "Best Of Complete Design Packages",
      features: [
        {
          title: "Built-Up Upto 3000/sq.ft & G+2 - ₹ 60,000/-",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Furniture Layout-2D",
            "Construction Quotation",
            "3D Exterior View (1 option)",
            "Electrical Drawing",
            "Plumbing Drawing",
            "4 Site Visits",
            "Interior Design",
            "Interior Quotation",
            "Soil Testing",
            "Survey",
            "Delivery Time - 45 Working Days",
          ],
        },
        {
          title: "Built-Up Above 3000/sq.ft or G+2 - ₹ 20/SQ.FT",
          description: [
            "Conceptual Floor Plan (2 revisions)",
            "Working Drawing",
            "Furniture Layout-2D",
            "Construction Quotation",
            "3D Exterior View (1 option)",
            "Electrical Drawing",
            "Plumbing Drawing",
            "4 Site Visits",
            "Interior Design",
            "Interior Quotation",
            "Soil Testing",
            "Survey",
            "Delivery Time - 45 Working Days",
          ],
        },
      ],
    },
  ];

  // --- SET DATA ---
  useEffect(() => {
    if (type === "Construction") setPackages(Construction);
    else if (type === "Design") setPackages(Design);
    else if (type === "Interior") setPackages(Interior);
    else if (type === "Both") setPackages([...Construction, ...Design]);
  }, [type]);

  return (
    <section className="w-full px-4 pt-12">
      {/* Heading */}
      <h2 className="font-bold text-4xl text-center">
        Home {type === "Both" ? "Design & Construction" : type} Packages
      </h2>

      {/* Grid */}
      <div className="w-full md:w-4/6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6 py-10">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-offwhite shadow-lg rounded-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-leaf text-white text-center p-4">
              <h2 className="text-lg font-bold">{pkg.head}</h2>
            </div>

            {/* Content */}
            <div className="py-4 px-6">
              {pkg.features.map((feature, i) => (
                <div key={i} className="border-b">
                  <button
                    className="w-full text-left py-2 flex justify-between items-center"
                    onClick={() => toggleSection(feature.title)}
                  >
                    <span>{feature.title}</span>
                    <span>{openSection === feature.title ? "-" : "+"}</span>
                  </button>

                  {openSection === feature.title && (
                    <ul className="p-2 list-disc pl-5">
                      {feature.description.map((desc, j) => (
                        <li key={j}>{desc}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center p-4">
              <Button asChild className="bg-orange-500 text-white rounded-full" aria-label="Contact BhuviHomes to build your dream home">
                <Link href="/contact" className="flex items-center gap-2" aria-label="Contact BhuviHomes to build your dream home">
                  LET'S BUILD
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlan;
