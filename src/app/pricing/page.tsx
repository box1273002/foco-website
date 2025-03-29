
import { Container } from "@/components/Container";
import { PricingBox } from "@/components/pricing";
export default function Pricing() {
  return (
    <Container>
      <div className="flex flex-wrap justify-center">
        <PricingBox />
        <PricingBox />
        <PricingBox />
      </div>

    </Container>
  )
}
