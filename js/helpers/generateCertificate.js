import { certificates } from "../data/certificates.js"

export const generateCertificate = () => {
    const certificatesWrapper = document.getElementById('certificates-wrapper');

    certificates.forEach(certificate => {
        const certificateCard = document.createElement('article');
        certificateCard.className = "certificates-card"; 

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

        certificatesWrapper.appendChild(certificateCard);
    })
}