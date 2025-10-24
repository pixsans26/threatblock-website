import AboutHero from "@/components/about_hero";
import MissionVision from "@/components/mission_vision";
import Team from "@/components/team";
import Values from "@/components/values";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About ThreatBlock | Our Mission & Expert Team',
    description: 'Meet the expert team at ThreatBlock. Learn about our mission to secure the digital world and why businesses trust us with their security.',
    keywords: ['about ThreatBlock', 'cybersecurity experts', 'our mission', 'cybersecurity team', 'company values', 'security leadership']
};

export default function About() {
    return (
        <>
            <AboutHero />
            <MissionVision />
            <Values />
            <Team />
        </>
    );
}