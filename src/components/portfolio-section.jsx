import { motion } from "framer-motion";
import client1 from "../assets/clients/figma.png";
import client2 from "../assets/clients/search.png";
import client3 from "../assets/clients/slack.png";
import client4 from "../assets/clients/netflix.png";
import client5 from "../assets/clients/linkedin.png";
import client6 from "../assets/clients/github.png";
import client7 from "../assets/clients/youtube.png";
import client8 from "../assets/clients/twitter.png";
import "./styles/portfolio-section.css";

const clients = [
  { image: client1, name: "Reid Hoffman", role: "Co-Founder LinkedIn" },
  { image: client2, name: "Grit by Kleiner Perkins", role: "Top Venture Fund" },
  { image: client3, name: "Primary", role: "Top Venture Fund" },
  { image: client4, name: "Greylock", role: "Top Venture Fund" },
  { image: client5, name: "Discord Ventures", role: "VC Backed" },
  { image: client6, name: "GitHub Partners", role: "Tech Sponsor" },
  { image: client7, name: "Microsoft Ventures", role: "Corporate VC" },
  { image: client8, name: "Stripe Capital", role: "Fintech Backer" },
];

// Duplicate clients for seamless infinite scroll
const infiniteClients = [...clients, ...clients];

export default function PortfolioClients() {
  return (
    <section className="bg-black portfolio-section text-white overflow-hidden">
      <div className="text-center portfolio-section-title">
        <h2 className="text-6xl font-semibold">
          Portfolio{" "}
          <span className="inline-block bg-green-400 text-green-400 text-6xl w-[2px]">.</span>
          <span className="inline-block bg-gradient-to-r from-green-800">
            Clients
          </span>
        </h2>
      </div>

      <motion.div
        className="flex gap-x-35 justify-between px-0 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 70,
        }}
      >
        {infiniteClients.map((client, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center min-w-[160px]"
          >
            <img
              src={client.image}
              alt={client.name}
              className="w-44 h-44 rounded-full object-cover shadow-lg bg-white m-2"
            />
            <h3 className="text-base font-semibold mt-3 portfolio-client-name">{client.name}</h3>
            <p className="text-xs text-gray-400">{client.role}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}