export const bookingUrl =
  "https://movementmedicinellc.janeapp.com/?utm_source=mmpt&utm_medium=cta&utm_campaign=bookings";

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const whoWeServe = [
  "Competitive Athletes",
  "Baseball and Overhead Athletes",
  "Return-to-Sport Athletes",
  "Clients Who Want Objective Movement Data",
];

export const proofPoints = [
  {
    label: "5-star trust",
    value: "Google-rated care",
    copy: "Athletes and parents consistently look for strong care experience, trust, and clear communication.",
  },
  {
    label: "Objective testing",
    value: "Force plate + motion capture",
    copy: "Objective testing helps separate movement issues, capacity limits, and performance bottlenecks more clearly.",
  },
  {
    label: "Hybrid delivery",
    value: "App-guided programming",
    copy: "Guided plans and ongoing monitoring help athletes keep progressing between visits.",
  },
];

export const testimonialThemes = [
  {
    title: "Athlete feedback",
    copy: "Athletes describe the care as highly customized, organized, and performance-minded.",
  },
  {
    title: "Parent feedback",
    copy: "Parents call out how clearly the team teaches arm safety, strength, and long-term development.",
  },
  {
    title: "Facility credibility",
    copy: "A clean, advanced environment reinforces the premium feel of the care and performance model.",
  },
];

export const platformTabs = [
  "Player Performance Profile",
  "Arm Care Program",
  "Strength Program",
  "Return to Play",
];

export const focusAreas = [
  {
    title: "UB Mobility",
    score: "63",
    note: "Shoulder, elbow, and wrist movement quality",
    width: "63%",
    tone: "amber" as const,
  },
  {
    title: "UB Strength + Power",
    score: "92",
    note: "Upper-body force production and power output",
    width: "92%",
    tone: "red" as const,
  },
  {
    title: "Torso + Core Mobility",
    score: "62",
    note: "Rotational access, trunk motion, and spinal mobility",
    width: "62%",
    tone: "amber" as const,
  },
  {
    title: "Core Strength + Control",
    score: "78",
    note: "Strength, control, and stiffness under load",
    width: "78%",
    tone: "red" as const,
  },
  {
    title: "LB Mobility",
    score: "87",
    note: "Hip, knee, and ankle movement quality",
    width: "87%",
    tone: "red" as const,
  },
  {
    title: "LB Strength + Power",
    score: "91",
    note: "Lower-body output, stability, and power access",
    width: "91%",
    tone: "red" as const,
  },
];

export const platformFeatures = [
  "Objective motion capture and force plate testing",
  "Precision programming based on strengths and weaknesses",
  "Arm-care and injury-prevention systems",
  "App-delivered plans with guided progress tracking",
];

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDefinition = {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  image: string;
  mediaPhones?: Array<{
    src: string;
    alt: string;
    fit?: "cover" | "contain";
  }>;
  summary: string;
  bullets: string[];
  cta: string;
  intent: string;
  audience: string[];
  includes: string[];
  differentiators: string[];
  faqs: ServiceFaq[];
};

export const services: ServiceDefinition[] = [
  {
    slug: "sports-medicine-physical-therapy",
    title: "Sports Medicine Physical Therapy",
    shortTitle: "Sports PT",
    tag: "Pain + return to sport",
    image: "/images/return-to-sport.jpeg",
    summary:
      "Sports medicine rehab for athletes returning from pain and injury back to training, competition, and confidence.",
    bullets: [
      "Non-operative injuries, post-op rehab, return-to-play planning",
      "Arm care, prehab, manual therapy, and sport-specific progression",
      "Built for athletes who want clinical care without losing performance focus",
    ],
    cta: "Book Sports PT",
    intent: "sports_medical_pt",
    audience: [
      "Pain limiting training",
      "Post-op return to sport",
      "Baseball + overhead athletes",
    ],
    includes: [
      "Sport-specific evaluation",
      "Hands-on care + rehab progression",
      "Return-to-play planning",
    ],
    differentiators: [
      "Sports medicine + performance",
      "Objective reassessment",
      "App-guided follow-up",
    ],
    faqs: [
      {
        question: "Do I need a referral to start PT?",
        answer:
          "No. A referral is not required to begin physical therapy.",
      },
      {
        question: "What types of cases fit this service?",
        answer:
          "Best for non-operative injuries, post-operative rehab, arm-care needs, and return to sport.",
      },
    ],
  },
  {
    slug: "athlete-performance-assessment",
    title: "Athlete Assessment",
    shortTitle: "Athlete Assessment",
    tag: "Data-driven evaluation",
    image: "/images/athlete-assessment.jpeg",
    summary:
      "A movement and force-based assessment built to show what is limiting mobility, strength, power, and overall performance.",
    bullets: [
      "Motion capture, force plate, and movement profiling",
      "Clear read on strengths, weaknesses, and programming priorities",
      "Best first step for athletes who want objective direction",
    ],
    cta: "Book Assessment",
    intent: "athlete_assessment",
    audience: [
      "Athletes wanting a clear baseline",
      "Parents + coaches seeking clarity",
      "Athletes tired of guesswork",
    ],
    includes: [
      "Movement + force testing",
      "Benchmarked against athletes at your level",
      "Clear priorities + next-step plan",
    ],
    differentiators: [
      "Testing replaces guesswork",
      "Results connect directly to programming",
      "Clear priorities after one visit",
    ],
    faqs: [
      {
        question: "What makes this different from a standard eval?",
        answer:
          "The assessment uses objective movement data, force testing, and individualized programming decisions rather than guesswork alone.",
      },
      {
        question: "Who should book this first?",
        answer:
          "This is ideal for athletes who want clarity on what to improve before they commit to a longer rehab or performance path.",
      },
    ],
  },
  {
    slug: "arm-care-and-throwing-support",
    title: "Precision Arm Care",
    shortTitle: "Precision Arm Care",
    tag: "Throwing durability",
    image: "/images/arm-care-clean.jpeg",
    summary:
      "A throwing-focused service built around arm durability, workload management, recovery, and long-term health.",
    bullets: [
      "Throwing-specific strength, mobility, and recovery support",
      "Programming shaped by position, volume, and current tolerance",
      "Strong fit for baseball families who want a clearer arm-care system",
    ],
    cta: "Book Arm Capacity Assessment",
    intent: "arm_care",
    audience: [
      "Pitchers managing workload",
      "Shoulder or elbow return",
      "Families wanting structure",
    ],
    includes: [
      "Weekly arm-care structure",
      "Volume-based programming",
      "Recovery + readiness support",
    ],
    differentiators: [
      "Built for overhead athletes",
      "Programming adapts to workload",
      "Supports durability + return",
    ],
    faqs: [
      {
        question: "Is this only for injured athletes?",
        answer:
          "No. The arm-care offer supports both recovery and proactive durability work for healthy throwers.",
      },
      {
        question: "How is the routine delivered?",
        answer:
          "The routine is designed to be guided clearly with structure around reps, sets, and exercise execution.",
      },
    ],
  },
  {
    slug: "remote-coaching-and-follow-up",
    title: "Remote Support + Programming",
    shortTitle: "Remote Support",
    tag: "Platform-guided continuity",
    image: "/images/remote-support-one.jpeg",
    mediaPhones: [
      {
        src: "/images/platform-week-1.jpeg",
        alt: "MMPT platform week and day programming view",
        fit: "cover",
      },
      {
        src: "/images/platform-third-screen.jpeg",
        alt: "MMPT platform strength block and exercise list view",
        fit: "cover",
      },
      {
        src: "/images/remote-support.jpeg",
        alt: "MMPT platform exercise detail and demo view",
        fit: "contain",
      },
    ],
    summary:
      "A hybrid support model for athletes who need clear programming, accountability, and progress outside in-person visits.",
    bullets: [
      "App-based follow-up for athletes who need structure between sessions",
      "Useful for travel athletes, busy families, and ongoing development plans",
      "Supports hybrid care rather than forcing every solution into the clinic",
    ],
    cta: "Build Remote Plan",
    intent: "remote_program",
    audience: [
      "Athletes outside the clinic area",
      "Clients needing ongoing programming",
      "Families wanting continuity",
    ],
    includes: [
      "App-delivered training plans",
      "Programming updates over time",
      "Bridge from testing to execution",
    ],
    differentiators: [
      "Progress between visits",
      "Strong fit for travel athletes",
      "Better long-term continuity",
    ],
    faqs: [
      {
        question: "Is MMPT in-person only?",
        answer:
          "No. MMPT supports in-person, virtual, and hybrid delivery through our performance platform.",
      },
      {
        question: "When does remote support make sense?",
        answer:
          "It makes the most sense after an assessment, during longer-term development, or when consistency matters more than location.",
      },
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Assess",
    copy: "Start with injury history, movement, force, and sport demands so the next step is grounded in real information.",
  },
  {
    step: "02",
    title: "Review",
    copy: "Translate testing and clinical findings into a clear picture of what is limiting performance or recovery.",
  },
  {
    step: "03",
    title: "Program",
    copy: "Build the right path through sports PT, athlete assessment follow-up, arm care, or app-guided support.",
  },
  {
    step: "04",
    title: "Reassess",
    copy: "Use ongoing feedback and retesting to refine the plan instead of guessing what should happen next.",
  },
];

export const homeFaqs: ServiceFaq[] = [
  {
    question: "Do I need a referral?",
    answer:
      "No. You do not need a referral to begin physical therapy. You can book an initial consultation directly with MMPT.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "MMPT is an out-of-network physical therapy practice. Payment is due at the time of service, and claims are submitted on your behalf after your visit.",
  },
  {
    question: "Can MMPT verify my insurance coverage before I come in?",
    answer:
      "Yes. If you send your insurance information in advance, MMPT can verify your coverage and help estimate your expected costs before your appointment.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Bring any relevant medical reports, a list of medications, and comfortable clothing that allows you to move well during the evaluation.",
  },
  {
    question: "How often should I attend sessions?",
    answer:
      "Session frequency depends on your condition, goals, and treatment plan. MMPT will help build that plan during your initial evaluation.",
  },
  {
    question: "Do you offer in-person, virtual, and hybrid support?",
    answer:
      "Yes. MMPT offers in-person, virtual, and hybrid models, supported through the app with exercise instruction, demonstrations, and additional guidance.",
  },
  {
    question: "Are your therapists licensed?",
    answer:
      "Yes. MMPT therapists are licensed and certified in physical therapy and performance-related treatment approaches, including hands-on care and strength-based rehab methods.",
  },
  {
    question: "Do you accept HSA/FSA?",
    answer: "Yes. MMPT accepts HSA and FSA payments.",
  },
];

export const aboutPillars = [
  {
    title: "Built by athletes for athletes",
    copy: "Care should reflect sport demands, training reality, and the standards serious athletes actually live under.",
  },
  {
    title: "Data-driven decisions",
    copy: "Objective testing, clinical reasoning, and sport context help shape a clearer plan instead of guesswork.",
  },
  {
    title: "Platform-guided follow-through",
    copy: "Assessment, rehab, and programming stay connected through a system that supports progress beyond the clinic.",
  },
];

export const featuredTeamMembers = [
  {
    name: "Dr. Eric Nichols",
    credentials: "PT, DPT, TPI-C, Cert DN",
    role: "Founder + sports medicine lead",
    image: "/images/eric.jpeg",
    copy: "Eric leads the MMPT system with a sports medicine and performance model built for athletes who want more than generic rehab.",
    highlights: [
      "Experience across MLB, NFL, PGA Tour, and LIV Tour athletes",
      "Founder of specialized baseball and golf medicine programs",
      "Specializes in orthopedic injury rehab, prevention, and return to sport",
    ],
  },
  {
    name: "Dr. Trent Maddox",
    credentials: "PT, DPT",
    role: "Assessment + rehab specialist",
    image: "/images/trent.jpeg",
    copy: "Trent helps athletes connect testing, rehab, and performance progression through a system that feels clear, measurable, and actionable.",
    highlights: [
      "Doctor of Physical Therapy from Augusta University",
      "Played college baseball at Augusta University",
      "Strong fit for athletes who want movement clarity and performance carryover",
    ],
  },
  {
    name: "Lloyd Van Pamelen",
    credentials: "PT, CSCS",
    role: "Senior sports medicine clinician",
    image: "/images/lloyd.jpeg",
    copy: "Lloyd brings deep baseball medicine and orthopedic rehab experience to athletes who need trusted care, strong communication, and a clear return-to-play path.",
    highlights: [
      "More than 30 years in sports medicine and orthopedic rehabilitation",
      "Former Atlanta Braves physical therapist with deep baseball medicine experience",
      "Currently serves Georgia Tech Baseball alongside his role at Movement Medicine",
    ],
  },
];

export const supportingTeamMembers = [
  {
    name: "Dr. Cal Lawanson",
    credentials: "PT, DPT",
    role: "Performance-minded rehab clinician",
    copy: "Evidence-based rehabilitation, injury prevention, and return-to-sport care with a strong athlete-development mindset.",
  },
  {
    name: "Dr. Kyle Shumeyko",
    credentials: "PT, DPT",
    role: "Overhead athlete specialist",
    copy: "Background in sports residency training, pediatric and adolescent injuries, and motion analysis for overhead athletes.",
  },
];

export const contactMethods = [
  {
    title: "Book online",
    value: "Jane booking",
    copy: "The fastest path for Sports PT, Athlete Assessment, and Arm Capacity Assessment.",
    href: bookingUrl,
    cta: "Book Now",
    external: true,
  },
  {
    title: "Call MMPT",
    value: "(770) 298-5893",
    copy: "Best if you want help choosing the right service or have a question before booking.",
    href: "tel:+17702985893",
    cta: "Call Now",
    external: false,
  },
  {
    title: "Visit Atlanta",
    value: "1825 MacArthur Blvd NW",
    copy: "Train, test, and receive care in person while still using the platform for hybrid follow-through.",
    href: "https://www.google.com/maps/search/?api=1&query=1825+MacArthur+Blvd+NW+Atlanta+GA+30318",
    cta: "Get Directions",
    external: true,
  },
];

export const contactLocationPoints = [
  {
    label: "Atlanta facility",
    value: "1825 MacArthur Blvd NW, Atlanta, GA 30318",
  },
  {
    label: "Phone",
    value: "(770) 298-5893",
  },
  {
    label: "Support model",
    value: "In-person, virtual, and hybrid delivery through the MMPT performance platform",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
