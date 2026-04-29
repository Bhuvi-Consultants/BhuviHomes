"use client";

const AddContact = () => {
    const handleAddContact = () => {
        // Contact information
        const contactInfo = {
            name: "Bhuvi Consultants",
            phone: "+918986699600",
            email: "bhuviconsultants@yahoo.in",
            address: "Sri Guru Kripa, Near Shiv Mandir, Beside West end residency, Kaju bagan, Ranchi, Jharkhand 834003"
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
            className="py-2 px-4" aria-label="Add Bhuvi Consultants to Contacts">
            Add  to <i className='fa fa-address-book text-white ml-1' style={{ fontSize: '24px' }}></i>
        </button>
    )
}

export default AddContact