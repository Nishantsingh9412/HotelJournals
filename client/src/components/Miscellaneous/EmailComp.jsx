import React from "react"

export default function EmailComp() {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          color: "#333",
          fontFamily: "Arial, sans-serif",
          margin: "0 auto",
          maxWidth: "600px",
          padding: "20px",
        }}
      >
        <img
          alt="Hotel Journals"
          height="200"
          src="https://via.placeholder.com/500"
          style={{
            aspectRatio: "600/200",
            marginBottom: "20px",
            objectFit: "cover",
            width: "100%",
          }}
          width="600"
        />
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          ¡BIENVENIDA/O A HOTEL JOURNALS!
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          Hola Compi!
          <br />
          Estamos muy felices de contar contigo!
        </p>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          Queremos que Hotel Journals te acompañe en tu proceso de crecimiento profesional y personal. Puedes encontrar
          cursos, ofertas de trabajo y consejos en nuestra página web!
        </p>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          Estate atenta/o a nuestras últimas actualizaciones y nos vemos por nuestras redes sociales :)
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "bold",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          ¡Un abrazo!
          <br />
          Equipo de Hotel Journals
        </p>
        <hr
          style={{
            border: "0",
            borderBottom: "1px solid #ccc",
            marginBottom: "20px",
          }}
        />
        <p
          style={{
            fontSize: "14px",
            fontStyle: "italic",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          Hotel Journals, en busca de un sector más justo.
        </p>
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <InstagramIcon className="inline-block mx-2" />
          <YoutubeIcon className="inline-block mx-2" />
          <YoutubeIcon className="inline-block mx-2" />
          <PodcastIcon className="inline-block mx-2" />
        </div>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
            textAlign: "center",
          }}
        >
          Copyright © 2024 Hotel Journals
        </p>
      </div>
    )
  }
  
  function InstagramIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function PodcastIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="11" r="1" />
        <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z" />
        <path d="M8 14a5 5 0 1 1 8 0" />
        <path d="M17 18.5a9 9 0 1 0-10 0" />
      </svg>
    )
  }
  
  
  function YoutubeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    )
  }
  