import { Container } from "@/components/Container";
import Image from 'next/image';
export default function NotFound() {
  return (
    <Container>


      <Image
        src="/img/how.png"  // Local image in the "public" folder or a remote URL
        alt="Where are we"
        width={644}               // Image width
        height={131}              // Image height
        className="rounded-md w-full"
      />
      <div className="w-full flex justify-center items-center mt-4 text-3xl font-bold">
        404 Page Not Found.
      </div>

    </Container>
  )
}
