

interface Step {
  animation: any;
  headline: string;
  subtext: string;
}

// TimelineSteps.tsx
const timelineSteps: Step[] = [
  {
    animation: require("../../public/animations/step1.json"),
    headline: "Pick your cards",
    subtext: "No linking needed. Just check the ones you use.",
  },
  {
    animation: require("../../public/animations/step2.json"),
    headline: "We track your promos",
    subtext: "Monthly bonus categories, updated automatically.",
  },
  {
    animation: require("../../public/animations/step3.json"),
    headline: "Get alerts before you swipe",
    subtext: "Email, push, or widget. Your choice.",
  },
  {
    animation: require("../../public/animations/step4.json"),
    headline: "Swipe smarter",
    subtext: "Know what to use before the cashier says ‘insert.’",
  },
  {
    animation: require("../../public/animations/step5.json"),
    headline: "You’ve optimized your wallet",
    subtext: "Now sit back and let the rewards roll in.",
  },
];

export default timelineSteps;