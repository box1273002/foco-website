import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const benefitOne = {
    title: "Our Features",
    desc: "We want our experience to be as customizable and feature rich as possible. Our platform is constantly being developed, so expect many more features soon!",
    image: benefitOneImg,
    bullets: [
        {
            title: "Intelligent app blocking",
            desc: "Block apps in any way you like! Time, location, anything is possible!",
            icon: <FaceSmileIcon />,
        },
        {
            title: "Make it your own",
            desc: "With our extensive customizability, FOCO can perfectly match your style.",
            icon: <DevicePhoneMobileIcon />,
        },
        {
            title: "Earn coins by being productive",
            desc: "Make the process of decluttering your digital days more enjoyable!",
            icon: <CurrencyDollarIcon />,
        },
    ],
};

const benefitTwo = {
    title: "Our Promise",
    desc: "We're not anti-technology – we're pro-human. By helping people build healthier digital habits, we're working toward a future where technology complements and amplifies our best qualities.",
    image: benefitTwoImg,
    bullets: [
        {
            title: "Improve your mental wellbeing",
            desc: "We want to help you take things at your pace. It's a marathon, not a sprint!",
            icon: <FaceSmileIcon />,
        },
        {
            title: "See results fast",
            desc: "Our comprehensive metrics help you visualize your results in real time.",
            icon: <ChartBarSquareIcon />,
        },
        {
            title: "Driven by you first",
            desc: "You get the final say in which apps to spend more or less time on.",
            icon: <AdjustmentsHorizontalIcon />,
        },
    ],
};


export { benefitOne, benefitTwo };
