import { Container } from "@/components/Container";
import { Check, X } from 'lucide-react';
import React from 'react';
export default function Features() {
  const yes = <td className="text-center text-2xl  border-b border-gray-800 text-[#8a2be2] drop-shadow-[0_0_5px_rgba(153,209,250,1)]">
    ✓
  </td>
  const no = <td className="text-center border-b border-gray-800">
    <X className="text-gray-700 inline-block" />
  </td>
  const features = {
    "Cross platform support": [yes, yes],
    "App locking": [yes, yes],
    "App dependant coin schedules": [yes, yes],
    "More unlock tasks": [no, yes],
    "Geolocation blocking": [no, yes],
    "Time dependant coin schedules": [no, yes],
    "Visual Customization": [no, yes],
  };
  return (
    <Container>
      <div className="m-auto  shadow-[0_0_20px_rgba(124,58,237,1)] flex flex-wrap md:flex-nowrap justify-center max-h-2/3 border rounded-3xl  bg-gradient-to-br from-gray-900 to-black border-gray-800 ">
        <table className="w-full  table-auto  overflow-hidden shadow-sm">
          <thead >
            <tr>
              <th className="text-center px-4 py-3 w-1/2  border-b border-gray-600">Features</th>
              <th className="text-center px-4 py-3 border-b border-gray-600">Free</th>
              <th className="text-center px-4 py-3 border-b border-gray-600">Premium</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(features).map((feature) => (
              <tr key={feature}>
                <td className="px-4 py-3 border-b border-gray-800">{feature}</td>
                {features[feature].map((available, index) => (
                  <React.Fragment key={index}>{available}</React.Fragment>
                ))}
              </tr>
            ))}
            <tr>
              <td className="px-4 py-3">Coin reduction scheduling</td>
              <td className="text-center ">
                <X className="text-gray-700 inline-block" />
              </td>
              <td className="text-center text-2xl   text-[#8a2be2] drop-shadow-[0_0_5px_rgba(153,209,250,1)]">
                ✓
              </td>


            </tr>
          </tbody>
        </table>


      </div>
    </Container>
  )
}
