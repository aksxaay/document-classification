import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../assets/img/benefit-one.png";
import benefitTwoImg from "../assets/img/benefit-two.png";

const benefitOne = {
  title: "Our benefits",
  desc: "We offer a variety of features.",
  image: benefitOneImg,
  bullets: [
    {
      title: "System Auto Document Classification",
      desc: "Sorts your document in the given Categories with ease.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Customer Facing UI",
      desc: "Account and Save functionality so the User does not lose changes",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Admin UI",
      desc: "Admin Intervention in-case the system fails to classify your Precious Documents",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More Benefits",
  desc: "Some additional features.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "ºdissonance is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by React UI Library & TailwindCSS",
      desc: "This template is powered by well-tested technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "ºdissonance comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
