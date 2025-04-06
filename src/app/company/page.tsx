import { Testimonials } from "@/components/Testimonials";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import dynamic from "next/dynamic";

// Import the client component dynamically to avoid server/client mismatch
const AnimatedTestimonials = dynamic(() => import('@/components/AnimatedTestimonials'), { ssr: false });

export default function CompanyPage() {
  return (
    <>
      <Container>
        <SectionTitle
          preTitle="Our Customers"
          title="What people are saying about us">
          Read testimonials from our satisfied customers who have experienced 
          the benefits of using our product.
        </SectionTitle>
      </Container>
      <AnimatedTestimonials />
    </>
  );
} 