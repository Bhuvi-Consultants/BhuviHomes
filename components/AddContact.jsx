"use client";

const AddContact = () => {
  const handleAddContact = () => {
    // Contact information
    const contactInfo = {
      name: "Bhuvi Consultants",
      phone: "+918986699600",
      email: "bhuviconsultants@yahoo.in",
      address:
        "Sri Guru Kripa, Near Shiv Mandir, Beside West end residency, Kaju bagan, Ranchi, Jharkhand 834003",
    };

    // VCF file content
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL;TYPE=INTERNET:${contactInfo.email}
ADR;TYPE=HOME:;;${contactInfo.address};;;
END:VCARD`;

    // Create a Blob from the VCF content
    const blob = new Blob([vcfContent], { type: "text/vcard" });

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${contactInfo.name}.vcf`; // Set the filename
    link.style.display = "none";

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
      onClick={handleAddContact}
      className="py-2 px-4 flex items-center justify-center gap-2 "
      aria-label="Add Bhuvi Consultants to Contacts"
    >
      Add {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-contact-icon lucide-contact"
      >
        <path d="M16 2v2" />
        <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        <path d="M8 2v2" />
        <circle cx="12" cy="11" r="3" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
      </svg>
    </button>
  );
};

export default AddContact;
