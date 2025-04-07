import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import BarChart from "@/components/BarChart";
export default function Home() {
    return (
        <Container>
            <Hero />
            <SectionTitle
                preTitle="Our Mission"
                title="Digital Wellness with Purpose"
            >
                We envision a world where technology serves as a tool for growth rather
                than a source of distraction. While we embrace the innovation of the digital age,
                we advocate for mindful tech usage that enhances rather than diminishes human potential.
            </SectionTitle>

            <Benefits data={benefitOne} />
            <Benefits imgPos="right" data={benefitTwo} />

            <SectionTitle
                preTitle="Still not convinced?"
                title="The Data"
            >
                In the US, average screen time per day hit 7 hours and 3 minutes in 2025 according to Backlinko.
                Given that the average person spends 15 hours and 39 minutes awake per day, that's 45% of your waking hours spent in front of a screen.
                We can do better than this. And we have the answer.
            </SectionTitle>

            <BarChart />

            <center>
                *Data is for illustrative purposes only. We will update this chart when we have more users, and thus more data.
            </center>

            <SectionTitle
                preTitle="But don't just take our word for it..."
                title="What our customers say"
            >
                We asked customers what they thought of FOCO after having used it. This is what they had to say.
            </SectionTitle>

            <Testimonials />

            <Cta />
        </Container>
    );
}
