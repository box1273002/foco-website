
import { Container } from "@/components/Container";
import { PricingBox } from "@/components/pricing";
export default function Pricing() {
  const free = ["iOS & Andriod"]
  const premium = ["Take back control", "More flexiblity"]
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center w-full">
      <PricingBox title="Free" month={0} year={0} lifetime={0} benefits={free} />
      <PricingBox title="Premium" month={1} year={10} lifetime={25} benefits={premium} />
      <PricingBox title="Student" month={0.79} year={8} lifetime={20} benefits={premium} />
    </div>

  )
}
