import { certificates } from "../data/certificates.js"

export const generateCertificate = () => {
    const certificatesWrapper = document.getElementById('certificates-wrapper');

    // Reads each certificate from "certificates" 
    certificates.forEach(certificate => {
        // Creates an "article" element with a class name of "certificates-card"
        const certificateCard = document.createElement('article');
        certificateCard.className = "certificates-card"; 

        // Generate an html code inside "certificateCard", so i have 3 certificates, so
        // It would generate 3 "certificateCard"
        certificateCard.innerHTML = `
            <div class="center" style="background-color: ${certificate.backgroundColor}; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                <img src="${certificate.imagePath}" alt="${certificate.title}">
            </div>
            <div class="certificate-content">
                <h3>${certificate.title}</h3>
                <p>Issued: ${certificate.dateIssued}</p>
                <p>${certificate.description}</p>
            </div>
        `;

        // Adds the "certificateCard" inside "certificateWrapper"
        certificatesWrapper.appendChild(certificateCard);
    })
}