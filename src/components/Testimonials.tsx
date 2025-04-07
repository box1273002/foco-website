import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full  px-14 rounded-2xl py-14 bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              I've reduced my mindless scrolling by 70% and <Mark>finally finished my novel</Mark> thanks to FOCO's gentle but effective reminders.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Chen"
              title="Freelance Designer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full px-14 rounded-2xl py-14 bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The <Mark>coin system</Mark> completely changed how I view my screen time. Now I'm strategic about which apps deserve my attention instead of mindlessly scrolling.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Entrepreneur and Parent"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full  px-14 rounded-2xl py-14 bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              After years of notification anxiety, FOCO helped me establish healthy boundaries with technology and <Mark>my sleep quality has improved dramatically</Mark>.
            </p>

            <Avatar
              image={userThreeImg}
              name="Jason Winn"
              title="Artist and Photographer"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="rounded-md  ring-4 ring-indigo-900 bg-indigo-900 text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
