export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questions: Question[];
  duration: number; // in minutes
  icon: string;
  color: string;
}

export const quizData: Quiz[] = [
  {
    id: "principles-of-computer-system-design-lecture1",
    title: "CSC 319 Lecture 1: Principles of Computer Systems",
    description:
      "Covers the fundamentals of computer systems, their purpose, historical evolution, and key technological milestones.",
    category: "Computer Science",
    difficulty: "Medium",
    duration: 10,
    icon: "Cpu",
    color: "bg-indigo-600",
    questions: [
      {
        id: "csd1",
        question: "What is a computer system?",
        options: [
          "A single hardware component used for gaming",
          "An integrated set of hardware and software components designed to process data and perform specific tasks",
          "A software program used for creating graphics",
          "A network of computers used for communication"
        ],
        correctAnswer: 1,
        explanation:
          "A computer system is an integrated combination of hardware and software designed to process data and perform specific tasks."
      },
      {
        id: "csd2",
        question: "Which of the following is NOT a purpose of computer systems?",
        options: [
          "Automating tasks and processes",
          "Enhancing productivity and efficiency",
          "Providing entertainment and information",
          "Replacing human intelligence completely"
        ],
        correctAnswer: 3,
        explanation:
          "Computer systems assist and enhance human tasks but do not replace human intelligence entirely."
      },
      {
        id: "csd3",
        question: "Which of these is one of the earliest known computing devices?",
        options: ["ENIAC", "Pascaline", "Abacus", "Leibniz’s Stepped Reckoner"],
        correctAnswer: 2,
        explanation:
          "The Abacus is one of the earliest known computing devices used for arithmetic calculations."
      },
      {
        id: "csd4",
        question: "Who invented the Pascaline, an early mechanical calculator?",
        options: ["Gottfried Leibniz", "Charles Babbage", "Blaise Pascal", "Alan Turing"],
        correctAnswer: 2,
        explanation:
          "The Pascaline was developed by Blaise Pascal in the 17th century to perform arithmetic calculations."
      },
      {
        id: "csd5",
        question: "Which device was developed by Gottfried Leibniz?",
        options: ["Stepped Reckoner", "Analytical Engine", "Abacus", "Difference Engine"],
        correctAnswer: 0,
        explanation:
          "Leibniz developed the Stepped Reckoner, a mechanical calculator capable of performing various arithmetic operations."
      },
      {
        id: "csd6",
        question: "What marks the beginning of the first generation of computers?",
        options: [
          "Use of vacuum tubes",
          "Invention of the transistor",
          "Use of integrated circuits",
          "Development of microprocessors"
        ],
        correctAnswer: 0,
        explanation:
          "First-generation computers (1940s–1950s) used vacuum tubes for circuitry and magnetic drums for memory."
      },
      {
        id: "csd7",
        question: "What was ENIAC notable for?",
        options: [
          "Being the first commercially available computer",
          "Being the first general-purpose electronic computer",
          "Introducing microprocessors",
          "Running on integrated circuits"
        ],
        correctAnswer: 1,
        explanation:
          "ENIAC (Electronic Numerical Integrator and Computer) was the first general-purpose electronic computer."
      },
      {
        id: "csd8",
        question: "What was the first commercially available computer?",
        options: ["ENIAC", "UNIVAC I", "IBM 7094", "System/360"],
        correctAnswer: 1,
        explanation:
          "UNIVAC I was the first commercially available computer, marking the beginning of commercial computing."
      },
      {
        id: "csd9",
        question: "Which major technology replaced vacuum tubes in the second generation of computers?",
        options: ["Integrated Circuits", "Microprocessors", "Transistors", "Magnetic Drums"],
        correctAnswer: 2,
        explanation:
          "Transistors replaced vacuum tubes in the 1950s–1960s, making computers smaller, faster, and more reliable."
      },
      {
        id: "csd10",
        question: "What was the IBM 7094 an example of?",
        options: [
          "First-generation computer",
          "Second-generation computer",
          "Third-generation computer",
          "Fourth-generation computer"
        ],
        correctAnswer: 1,
        explanation:
          "The IBM 7094 was a second-generation computer using transistors for processing."
      },
      {
        id: "csd11",
        question: "Which technology defined the third generation of computers?",
        options: ["Microprocessors", "Transistors", "Integrated Circuits", "Vacuum Tubes"],
        correctAnswer: 2,
        explanation:
          "The third generation (1960s–1970s) introduced Integrated Circuits (ICs), allowing more compact and efficient computers."
      },
      {
        id: "csd12",
        question: "What innovation did IBM System/360 introduce?",
        options: [
          "Microprocessor technology",
          "Graphical User Interface",
          "Compatible family of computers",
          "Artificial intelligence"
        ],
        correctAnswer: 2,
        explanation:
          "IBM System/360 introduced the concept of a compatible family of computers, setting a new industry standard."
      },
      {
        id: "csd13",
        question: "What characterizes the fourth generation of computers?",
        options: [
          "Vacuum tubes",
          "Microprocessors",
          "Integrated Circuits",
          "Artificial Intelligence"
        ],
        correctAnswer: 1,
        explanation:
          "Fourth-generation computers (1970s–present) are characterized by microprocessors, which integrate the entire CPU on a single chip."
      },
      {
        id: "csd14",
        question: "Which computers were central to the personal computing revolution?",
        options: [
          "IBM PC and Apple Macintosh",
          "ENIAC and UNIVAC I",
          "IBM 7094 and System/360",
          "Intel 4004 and ARPANET"
        ],
        correctAnswer: 0,
        explanation:
          "The IBM PC and Apple Macintosh led the PC revolution, making personal computing mainstream."
      },
      {
        id: "csd15",
        question: "Which technologies define the fifth generation of computers?",
        options: [
          "Integrated Circuits and Transistors",
          "Microprocessors and GUIs",
          "Artificial Intelligence and Quantum Computing",
          "Vacuum Tubes and Magnetic Storage"
        ],
        correctAnswer: 2,
        explanation:
          "Fifth-generation computers focus on Artificial Intelligence, Machine Learning, and Quantum Computing."
      },
      {
        id: "csd16",
        question: "Who introduced the stored-program concept?",
        options: ["Alan Turing", "John von Neumann", "Charles Babbage", "Blaise Pascal"],
        correctAnswer: 1,
        explanation:
          "John von Neumann introduced the stored-program concept, allowing instructions to be stored in memory."
      },
      {
        id: "csd17",
        question: "What was ARPANET known for?",
        options: [
          "Being the first graphical operating system",
          "Being the precursor to the Internet",
          "Being the first AI-based computer",
          "Being the first personal computer"
        ],
        correctAnswer: 1,
        explanation:
          "ARPANET, developed in the 1960s, was the first network to implement packet-switching and is the forerunner of today’s Internet."
      },
      {
        id: "csd18",
        question: "What did the Intel 4004 microprocessor introduce?",
        options: [
          "Quantum computing concepts",
          "First operating system kernel",
          "Integration of an entire CPU on a single chip",
          "First computer network"
        ],
        correctAnswer: 2,
        explanation:
          "Intel 4004 was the first microprocessor, integrating all CPU functions on a single chip."
      },
      {
        id: "csd19",
        question: "Which operating system introduced multitasking and multiuser capabilities?",
        options: ["DOS", "Unix", "Windows 3.1", "Linux"],
        correctAnswer: 1,
        explanation:
          "Unix, introduced in the 1970s, supported multitasking and multiple users."
      },
      {
        id: "csd20",
        question: "What decade saw the personal computer boom?",
        options: ["1960s", "1970s", "1980s", "1990s"],
        correctAnswer: 2,
        explanation:
          "The 1980s marked the personal computer boom with the rise of IBM PC and Apple Macintosh."
      },
      {
        id: "csd21",
        question: "What user interface innovation emerged in the 1980s?",
        options: [
          "Command-line interface",
          "Graphical User Interface (GUI)",
          "Voice-based interface",
          "Holographic interface"
        ],
        correctAnswer: 1,
        explanation:
          "The GUI introduced windows, icons, and menus, making computers more user-friendly."
      },
      {
        id: "csd22",
        question: "What characterized computing in the 1990s?",
        options: [
          "Vacuum tubes and punch cards",
          "Internet expansion and mobile computing",
          "Transistor miniaturization",
          "Rise of mechanical calculators"
        ],
        correctAnswer: 1,
        explanation:
          "The 1990s saw the explosion of the Internet and the advent of mobile computing devices."
      },
      {
        id: "csd23",
        question: "Which two technologies emerged prominently in the 2000s?",
        options: [
          "Quantum computing and AI",
          "Smartphones and cloud computing",
          "Integrated circuits and GUI",
          "Microprocessors and ARPANET"
        ],
        correctAnswer: 1,
        explanation:
          "The 2000s saw the rise of smartphones and the adoption of cloud computing."
      },
      {
        id: "csd24",
        question: "Which trend became prominent from the 2010s to the present?",
        options: [
          "Vacuum tube innovation",
          "Transistor-based computers",
          "Artificial Intelligence, Quantum Computing, and IoT",
          "Mainframe computing"
        ],
        correctAnswer: 2,
        explanation:
          "Modern computing is characterized by AI integration, Quantum Computing research, and the Internet of Things (IoT)."
      },
      {
        id: "csd25",
        question: "Why is understanding the evolution of computer systems important?",
        options: [
          "It helps predict future trends and understand current technologies",
          "It replaces the need for programming knowledge",
          "It helps repair old computers only",
          "It has no relevance to modern systems"
        ],
        correctAnswer: 0,
        explanation:
          "Studying computer system evolution provides context for current technology and insights into future advancements."
      }
    ]
  },
  {
    id: "principles-of-computer-system-design-lecture2",
    title: "CSC 319 Lecture 2: Systems and Complexity",
    description: "Principles of managing complexity in computer systems, from system components and interactions to abstraction, modularity, and layering.",
    category: "Computer Science",
    difficulty: "Medium",
    duration: 10,
    icon: "Layers",
    color: "bg-purple-500",
    questions: [
      {
        id: "sc1",
        question: "What best defines a system in the context of computing?",
        options: [
          "A single software application running on a computer",
          "A collection of unrelated hardware components",
          "A collection of interconnected components working together to achieve a purpose",
          "A physical machine used for processing data"
        ],
        correctAnswer: 2,
        explanation: "A system is defined as a collection of interconnected components (hardware, software, and processes) that work together to achieve a specific purpose or set of objectives."
      },
      {
        id: "sc2",
        question: "Which of the following is NOT a key characteristic of a system?",
        options: ["Components", "Interactions", "Randomness", "Boundaries"],
        correctAnswer: 2,
        explanation: "Systems have defined components, interactions, boundaries, and goals. Randomness is not a characteristic — systems are purposefully organized."
      },
      {
        id: "sc3",
        question: "What is the purpose of defining system boundaries?",
        options: [
          "To increase system complexity",
          "To identify what is inside or outside the system",
          "To connect multiple systems together",
          "To improve software speed"
        ],
        correctAnswer: 1,
        explanation: "System boundaries separate internal components from the external environment, helping designers define system scope and interactions."
      },
      {
        id: "sc4",
        question: "In a banking system, what represents the interaction between components?",
        options: [
          "ATMs being placed in cities",
          "Customers using mobile apps",
          "The ATM communicating with the bank’s database to process a withdrawal",
          "Users reading bank terms and conditions"
        ],
        correctAnswer: 2,
        explanation: "Interactions refer to how system components communicate. In a banking system, this includes the ATM requesting data from the database through the network."
      },
      {
        id: "sc5",
        question: "Which statement about complexity in computing is correct?",
        options: [
          "Complexity decreases as systems grow larger",
          "Complexity is unrelated to system performance",
          "Complexity refers to the difficulty of understanding and managing system behavior",
          "Complexity only occurs in hardware systems"
        ],
        correctAnswer: 2,
        explanation: "Complexity in computing refers to the difficulty of understanding, designing, maintaining, and predicting system behavior as the number of components and interactions increases."
      },
      {
        id: "sc6",
        question: "Why does complexity matter in system design?",
        options: [
          "It determines the color scheme of the user interface",
          "It affects performance, reliability, and maintainability",
          "It makes systems more entertaining to use",
          "It simplifies software development automatically"
        ],
        correctAnswer: 1,
        explanation: "Complexity directly impacts performance, reliability, and maintainability — the harder a system is to understand, the more difficult it becomes to optimize and maintain."
      },
      {
        id: "sc7",
        question: "Which of the following is a major source of complexity in computer systems?",
        options: ["Simplicity", "Scale", "Documentation", "Single-user operation"],
        correctAnswer: 1,
        explanation: "Scale — such as increased users, servers, or lines of code — introduces significant complexity due to the difficulty of coordinating large interconnected components."
      },
      {
        id: "sc8",
        question: "What is an example of scale contributing to system complexity?",
        options: [
          "A calculator performing basic arithmetic",
          "A cloud-based editor like Google Docs supporting millions of users simultaneously",
          "A single-user text editor",
          "A stand-alone desktop game"
        ],
        correctAnswer: 1,
        explanation: "As systems expand in scale, such as Google Docs handling millions of concurrent users, the coordination and synchronization of data increase overall complexity."
      },
      {
        id: "sc9",
        question: "Concurrency introduces challenges such as:",
        options: [
          "Simplified execution and reduced waiting time",
          "Race conditions and deadlocks",
          "Reduced need for error handling",
          "Easier debugging"
        ],
        correctAnswer: 1,
        explanation: "Concurrency allows multiple processes to run simultaneously, which can cause race conditions (conflicting access) and deadlocks (mutual waiting)."
      },
      {
        id: "sc10",
        question: "Which statement best describes heterogeneity in computing systems?",
        options: [
          "Systems are composed of similar hardware and software only",
          "Systems consist of different hardware and software components that must work together",
          "All systems are built using one programming language",
          "Heterogeneity improves system simplicity"
        ],
        correctAnswer: 1,
        explanation: "Heterogeneity means a system contains diverse components (hardware, software, OS), creating challenges in compatibility and integration."
      },
      {
        id: "sc11",
        question: "Why must large systems anticipate failures?",
        options: [
          "To allow systems to crash gracefully",
          "To ensure systems can automatically recover and continue functioning",
          "To test user patience",
          "To simplify maintenance routines"
        ],
        correctAnswer: 1,
        explanation: "Anticipating failures is critical in large systems so they can recover automatically — ensuring reliability and minimal downtime."
      },
      {
        id: "sc12",
        question: "Netflix’s Chaos Monkey tool is designed to:",
        options: [
          "Improve movie recommendation accuracy",
          "Simulate system failures to test reliability",
          "Manage database queries",
          "Monitor network usage"
        ],
        correctAnswer: 1,
        explanation: "Chaos Monkey deliberately causes failures to ensure Netflix’s systems can recover automatically without affecting user experience."
      },
      {
        id: "sc13",
        question: "System evolution increases complexity because:",
        options: [
          "It makes old systems obsolete",
          "New updates must remain compatible with legacy systems",
          "It reduces code size over time",
          "It limits hardware flexibility"
        ],
        correctAnswer: 1,
        explanation: "As systems evolve, they must integrate new features while maintaining backward compatibility — increasing overall design and maintenance complexity."
      },
      {
        id: "sc14",
        question: "Which principle helps reduce system complexity by hiding low-level details?",
        options: ["Concurrency", "Abstraction", "Replication", "Evolution"],
        correctAnswer: 1,
        explanation: "Abstraction hides unnecessary details and exposes only essential features, allowing designers to focus on functionality rather than implementation."
      },
      {
        id: "sc15",
        question: "In programming, SQL queries represent which design principle?",
        options: ["Concurrency", "Abstraction", "Layering", "Evolution"],
        correctAnswer: 1,
        explanation: "Using SQL allows programmers to retrieve data without worrying about how it is physically stored — a classic example of abstraction."
      },
      {
        id: "sc16",
        question: "Modularity in system design means:",
        options: [
          "Building systems as a single large block",
          "Dividing systems into smaller, independent modules",
          "Using identical modules for every task",
          "Reducing system documentation"
        ],
        correctAnswer: 1,
        explanation: "Modularity breaks large systems into smaller, manageable units that can be developed, tested, and maintained independently."
      },
      {
        id: "sc17",
        question: "Which of the following is NOT an advantage of modularity?",
        options: ["Easier debugging", "Improved teamwork", "Reduced reusability", "Independent development"],
        correctAnswer: 2,
        explanation: "Modularity promotes reusability — not reduces it — making it easier to reuse existing components in new projects."
      },
      {
        id: "sc18",
        question: "Layering helps manage system complexity by:",
        options: [
          "Combining unrelated tasks into one layer",
          "Organizing systems into hierarchical layers with defined roles",
          "Eliminating all system dependencies",
          "Hiding all user interfaces"
        ],
        correctAnswer: 1,
        explanation: "Layering organizes systems hierarchically — each layer provides services to the one above and depends on the one below, improving structure and manageability."
      },
      {
        id: "sc19",
        question: "Which layer in the OSI model handles data transmission over physical media?",
        options: ["Application Layer", "Transport Layer", "Physical Layer", "Network Layer"],
        correctAnswer: 2,
        explanation: "The Physical Layer deals with the physical transmission of data (e.g., cables, fiber optics, radio signals) between connected devices."
      },
      {
        id: "sc20",
        question: "In the OSI model, which layer is responsible for routing data packets?",
        options: ["Transport Layer", "Network Layer", "Data Link Layer", "Session Layer"],
        correctAnswer: 1,
        explanation: "The Network Layer manages routing and forwarding of data packets between devices across multiple networks."
      },
      {
        id: "sc21",
        question: "What principle allows different layers of a system to evolve independently?",
        options: ["Concurrency", "Layering", "Evolution", "Heterogeneity"],
        correctAnswer: 1,
        explanation: "Layering isolates functionality so that changes in one layer do not directly affect others, allowing independent evolution and maintainability."
      },
      {
        id: "sc22",
        question: "Which combination of principles helps designers cope with complexity?",
        options: [
          "Abstraction, Modularity, and Layering",
          "Concurrency, Evolution, and Failures",
          "Heterogeneity, Scale, and Boundaries",
          "Testing, Debugging, and Deployment"
        ],
        correctAnswer: 0,
        explanation: "Abstraction, Modularity, and Layering are core design principles that simplify complex systems and make them scalable and maintainable."
      },
      {
        id: "sc23",
        question: "In a layered computer system, the operating system typically sits:",
        options: [
          "Above the hardware and below the applications",
          "Below the hardware and above the applications",
          "At the same level as the hardware",
          "At the same level as the user interface"
        ],
        correctAnswer: 0,
        explanation: "The operating system acts as a middle layer between hardware and user applications — managing resources and providing essential services."
      },
      {
        id: "sc24",
        question: "What is the key takeaway from the concept of systems and complexity?",
        options: [
          "Complexity can be completely eliminated through coding",
          "All systems are simple by design",
          "Design principles like abstraction and layering help manage unavoidable complexity",
          "Complex systems should never be built"
        ],
        correctAnswer: 2,
        explanation: "Complexity is inevitable, but principles like abstraction, modularity, and layering help engineers build systems that are reliable, maintainable, and scalable."
      }
    ]
  },
  {
    id: "lecture-3-elements-of-computer-system-organization",
    title: "CSC 319 Lecture 3: Elements of Computer System Organization",
    description: "Explore the key components and interactions that define computer system organization, from CPU and memory to system layers and instruction sets.",
    category: "Computer Science",
    difficulty: "Medium",
    duration: 10,
    icon: "Cpu",
    color: "bg-purple-600",
    questions: [
      {
        id: "l3q1",
        question: "Which of the following best defines a computer system?",
        options: [
          "A single hardware device used for computing",
          "A combination of hardware and software working together to perform tasks",
          "A collection of users connected to the internet",
          "A device that only performs arithmetic operations"
        ],
        correctAnswer: 1,
        explanation: "A computer system integrates hardware (physical components) and software (instructions) to execute tasks and provide useful services."
      },
      {
        id: "l3q2",
        question: "What are the three main components of the CPU?",
        options: [
          "Monitor, Keyboard, and Mouse",
          "ALU, Control Unit, and Registers",
          "RAM, ROM, and Cache",
          "Motherboard, Hard Disk, and GPU"
        ],
        correctAnswer: 1,
        explanation: "The CPU comprises the Arithmetic Logic Unit (ALU) for computation, Control Unit (CU) for coordination, and Registers for temporary high-speed storage."
      },
      {
        id: "l3q3",
        question: "What is the primary function of the Arithmetic Logic Unit (ALU)?",
        options: [
          "To control input/output operations",
          "To perform arithmetic and logical operations",
          "To manage memory allocation",
          "To store permanent data"
        ],
        correctAnswer: 1,
        explanation: "The ALU handles arithmetic (add, subtract) and logic (AND, OR, NOT) operations, forming the computational core of the CPU."
      },
      {
        id: "l3q4",
        question: "Which CPU component directs data and instruction flow between the CPU and memory?",
        options: [
          "Cache Memory",
          "Control Unit",
          "ALU",
          "Registers"
        ],
        correctAnswer: 1,
        explanation: "The Control Unit (CU) manages and coordinates the movement of data and instructions between CPU components and memory."
      },
      {
        id: "l3q5",
        question: "What is the main role of registers in the CPU?",
        options: [
          "Store frequently used data temporarily for quick access",
          "Hold permanent data during system boot",
          "Store large files like documents and videos",
          "Manage device drivers and firmware"
        ],
        correctAnswer: 0,
        explanation: "Registers are small, high-speed storage areas within the CPU used for quick access to temporary data and instructions during execution."
      },
      {
        id: "l3q6",
        question: "Which of the following correctly differentiates RAM and ROM?",
        options: [
          "RAM is permanent storage while ROM is temporary",
          "Both are volatile memory types",
          "RAM is volatile, ROM is non-volatile",
          "ROM and RAM are both used for long-term storage"
        ],
        correctAnswer: 2,
        explanation: "RAM is volatile (data lost when power is off) and used for active processes, while ROM is non-volatile and stores permanent data like BIOS."
      },
      {
        id: "l3q7",
        question: "Cache memory is primarily used to:",
        options: [
          "Store system logs",
          "Reduce time to access frequently used data",
          "Store backup files",
          "Replace the main hard disk"
        ],
        correctAnswer: 1,
        explanation: "Cache memory, located near the CPU, speeds up processing by storing frequently accessed data, reducing the need to fetch from slower main memory."
      },
      {
        id: "l3q8",
        question: "What type of device is a printer in computer system organization?",
        options: [
          "Input device",
          "Output device",
          "Processing device",
          "Storage device"
        ],
        correctAnswer: 1,
        explanation: "A printer is an output device — it converts processed data from digital form into a physical format like text or images on paper."
      },
      {
        id: "l3q9",
        question: "Which of the following is an example of an input device?",
        options: [
          "Printer",
          "Monitor",
          "Keyboard",
          "Speaker"
        ],
        correctAnswer: 2,
        explanation: "A keyboard is an input device that sends signals to the CPU for processing when keys are pressed."
      },
      {
        id: "l3q10",
        question: "What is the main difference between HDD and SSD?",
        options: [
          "HDDs are faster than SSDs",
          "SSDs use magnetic storage while HDDs use flash memory",
          "SSDs are faster and more reliable than HDDs",
          "Both use optical storage technology"
        ],
        correctAnswer: 2,
        explanation: "Solid State Drives (SSDs) use flash memory, making them faster and more durable compared to Hard Disk Drives (HDDs), which use spinning disks."
      },
      {
        id: "l3q11",
        question: "Which of the following acts as a bridge between hardware and application software?",
        options: [
          "Operating System",
          "Compiler",
          "Cache Memory",
          "Database"
        ],
        correctAnswer: 0,
        explanation: "The operating system manages hardware resources and offers a platform for applications to run, effectively bridging the user and hardware."
      },
      {
        id: "l3q12",
        question: "Which of the following manages communication between the CPU and I/O devices?",
        options: [
          "I/O Controllers",
          "BIOS",
          "ISA",
          "Registers"
        ],
        correctAnswer: 0,
        explanation: "I/O Controllers facilitate data exchange between CPU and peripherals, handling input/output requests and managing device operations."
      },
      {
        id: "l3q13",
        question: "What does firmware refer to in computer systems?",
        options: [
          "Software stored on a disk",
          "Permanently stored low-level software in hardware devices",
          "Temporary files created by the operating system",
          "Application updates installed by users"
        ],
        correctAnswer: 1,
        explanation: "Firmware is permanent software embedded in hardware components, like BIOS, that initializes and manages hardware at startup."
      },
      {
        id: "l3q14",
        question: "Which software allows the OS to communicate with hardware devices?",
        options: [
          "System Utilities",
          "Device Drivers",
          "Compilers",
          "BIOS"
        ],
        correctAnswer: 1,
        explanation: "Device drivers translate OS commands into device-specific signals, enabling seamless communication between hardware and software."
      },
      {
        id: "l3q15",
        question: "What is the function of the BIOS in a computer system?",
        options: [
          "To translate high-level language into machine code",
          "To manage internet connectivity",
          "To perform startup checks and load the OS",
          "To store user files"
        ],
        correctAnswer: 2,
        explanation: "The BIOS (firmware) runs during system startup, checks hardware components, and loads the operating system from storage."
      },
      {
        id: "l3q16",
        question: "What does the Instruction Set Architecture (ISA) define?",
        options: [
          "The interface between hardware and software",
          "The hardware design of the CPU",
          "The network protocol used by computers",
          "The physical wiring of circuits"
        ],
        correctAnswer: 0,
        explanation: "The ISA defines the set of instructions the CPU can execute, forming the interface between hardware and software."
      },
      {
        id: "l3q17",
        question: "Which instruction set is known for fewer and simpler instructions?",
        options: [
          "CISC",
          "RISC",
          "VISC",
          "MISC"
        ],
        correctAnswer: 1,
        explanation: "RISC (Reduced Instruction Set Computer) simplifies processing by using fewer, faster instructions — common in mobile devices like smartphones."
      },
      {
        id: "l3q18",
        question: "In which type of architecture are many powerful instructions provided?",
        options: [
          "CISC",
          "RISC",
          "Harvard",
          "Von Neumann"
        ],
        correctAnswer: 0,
        explanation: "CISC (Complex Instruction Set Computer) offers many complex instructions, enabling more operations per command — e.g., Intel x86."
      },
      {
        id: "l3q19",
        question: "Which of the following best describes a layered computer system?",
        options: [
          "A structure where each layer performs all tasks independently",
          "A hierarchical structure where each layer serves the one above it",
          "A design where hardware directly communicates with users",
          "A disorganized combination of hardware and software"
        ],
        correctAnswer: 1,
        explanation: "A layered structure organizes systems so each layer provides services to the one above and depends on the one below, simplifying complexity."
      },
      {
        id: "l3q20",
        question: "What is the correct order of layers in a typical computer system?",
        options: [
          "User → Hardware → Applications → Firmware",
          "Hardware → Firmware → OS → System Software → Application → User",
          "Firmware → Hardware → System Software → User → OS",
          "Applications → OS → Hardware → User"
        ],
        correctAnswer: 1,
        explanation: "From bottom to top: Hardware → Firmware → OS → System Software → Applications → User. This structure organizes interactions logically."
      },
      {
        id: "l3q21",
        question: "When a user opens a file, which layer interacts directly with the hardware?",
        options: [
          "User Layer",
          "Operating System Layer",
          "Firmware and Device Drivers",
          "System Software Layer"
        ],
        correctAnswer: 2,
        explanation: "Firmware and device drivers control hardware actions such as accessing storage or reading data when a file is opened."
      },
      {
        id: "l3q22",
        question: "Which layer manages system calls and hardware resource allocation?",
        options: [
          "Operating System Layer",
          "System Software Layer",
          "Firmware Layer",
          "User Layer"
        ],
        correctAnswer: 0,
        explanation: "The OS layer handles system calls, allocates resources like memory and CPU time, and coordinates hardware interactions."
      },
      {
        id: "l3q23",
        question: "Which example best demonstrates system layering in action?",
        options: [
          "A printer directly communicating with an application",
          "An OS translating application requests into hardware commands",
          "A user accessing memory without the OS",
          "Firmware managing application updates"
        ],
        correctAnswer: 1,
        explanation: "System layering allows the OS to translate application-level actions (like opening a file) into hardware operations."
      },
      {
        id: "l3q24",
        question: "What is the key purpose of organizing computer systems into layers?",
        options: [
          "To reduce cost",
          "To make systems modular, understandable, and easier to maintain",
          "To allow users to modify hardware directly",
          "To speed up internet connections"
        ],
        correctAnswer: 1,
        explanation: "Layered organization promotes modularity and maintainability by dividing complex systems into manageable, interacting parts."
      },
      {
        id: "l3q25",
        question: "Which of the following correctly matches components to their layer?",
        options: [
          "User – BIOS; Firmware – Browser",
          "Hardware – CPU; Firmware – BIOS",
          "System Software – Keyboard; User – GPU",
          "Application – Cache Memory"
        ],
        correctAnswer: 1,
        explanation: "The Hardware layer includes CPU and memory; Firmware (like BIOS) operates above hardware to initialize and manage it."
      },
      {
        id: "l3q26",
        question: "Which of the following statements about system software is TRUE?",
        options: [
          "It includes applications like Microsoft Word",
          "It manages hardware and supports application execution",
          "It consists of only firmware programs",
          "It cannot interact with hardware directly"
        ],
        correctAnswer: 1,
        explanation: "System software, such as OS and utilities, manages hardware and provides essential services to run applications."
      },
      {
        id: "l3q27",
        question: "What happens immediately after the BIOS completes its checks during startup?",
        options: [
          "The OS is loaded into memory",
          "User applications begin executing",
          "The CPU enters sleep mode",
          "Peripheral devices power down"
        ],
        correctAnswer: 0,
        explanation: "After the BIOS verifies hardware functionality, it locates and loads the operating system into main memory for execution."
      },
      {
        id: "l3q28",
        question: "Which statement about hardware and software interaction is correct?",
        options: [
          "Hardware functions independently of software",
          "Software instructs hardware on what tasks to perform",
          "Both operate only when connected to the internet",
          "Hardware always manages memory allocation"
        ],
        correctAnswer: 1,
        explanation: "Software provides the set of instructions that direct hardware operations, making both interdependent for computing tasks."
      },
      {
        id: "l3q29",
        question: "What does the acronym CPU stand for?",
        options: [
          "Central Programming Unit",
          "Central Processing Unit",
          "Central Peripheral Unit",
          "Computer Program Utility"
        ],
        correctAnswer: 1,
        explanation: "CPU stands for Central Processing Unit — the main component responsible for executing instructions and processing data."
      },
      {
        id: "l3q30",
        question: "Why is the layered approach crucial for modern system design?",
        options: [
          "It increases system randomness",
          "It simplifies design, enhances scalability, and promotes reusability",
          "It reduces CPU performance but improves reliability",
          "It prevents software updates"
        ],
        correctAnswer: 1,
        explanation: "Layered design organizes systems for scalability, reusability, and easier debugging by ensuring clear responsibilities between layers."
      }
    ]
  },
  {
    id: "lecture-4-naming-in-computer-systems",
    title: "CSC 319 Lecture 4: Naming in Computer Systems",
    description: "Understand how names, identifiers, and addresses are used to reference entities in computer systems, exploring binding, name resolution, and naming schemes across distributed environments.",
    category: "Computer Science",
    difficulty: "Medium",
    duration: 10,
    icon: "Tag",
    color: "bg-blue-600",
    questions: [
      {
        id: "l4q1",
        question: "In the context of computer systems, what is 'naming' primarily concerned with?",
        options: [
          "Assigning physical memory addresses to CPU registers",
          "Providing a way to identify and reference entities such as files, processes, and resources",
          "Labeling hardware components for manufacturing purposes",
          "Linking variables to constants in a program"
        ],
        correctAnswer: 1,
        explanation: "Naming provides a means of identifying and referring to entities such as files, processes, devices, or network nodes within a computer or distributed system."
      },
      {
        id: "l4q2",
        question: "Which of the following best defines the term 'name binding'?",
        options: [
          "The process of linking a name to the entity it represents",
          "Encrypting names to ensure system security",
          "Mapping file paths to logical directories",
          "Assigning IP addresses to routers"
        ],
        correctAnswer: 0,
        explanation: "Name binding refers to associating a name with an entity, such as linking a variable name to a memory address or a hostname to an IP address."
      },
      {
        id: "l4q3",
        question: "What is 'name resolution' in computer systems?",
        options: [
          "A method for renaming files automatically",
          "The process of translating a name into the entity or address it refers to",
          "A technique for compressing long file names",
          "A process for encrypting data during communication"
        ],
        correctAnswer: 1,
        explanation: "Name resolution involves translating a human-readable name (like www.example.com) into the actual entity (such as its IP address or file reference)."
      },
      {
        id: "l4q4",
        question: "In a distributed system, why is naming important?",
        options: [
          "Because it provides a uniform way to locate and access resources across multiple machines",
          "Because it speeds up CPU instruction execution",
          "Because it ensures data is stored locally only",
          "Because it reduces memory fragmentation"
        ],
        correctAnswer: 0,
        explanation: "Naming allows users and processes to refer to distributed resources transparently, without needing to know their physical locations."
      },
      {
        id: "l4q5",
        question: "Which of the following is an example of a human-readable name in a naming system?",
        options: [
          "192.168.1.1",
          "/dev/sda1",
          "www.google.com",
          "0x7FFB93"
        ],
        correctAnswer: 2,
        explanation: "‘www.google.com’ is a human-readable name that can be resolved into a machine-understandable address (an IP address) through DNS."
      },
      {
        id: "l4q6",
        question: "Which type of binding occurs when the association between a name and an entity is established at program compile time?",
        options: [
          "Dynamic binding",
          "Static binding",
          "Late binding",
          "Deferred binding"
        ],
        correctAnswer: 1,
        explanation: "Static binding happens at compile time, where the association between a name and an entity (like a variable to a function call) is determined early in the program lifecycle."
      },
      {
        id: "l4q7",
        question: "What is the major advantage of dynamic name binding?",
        options: [
          "It eliminates the need for memory management",
          "It allows flexibility by resolving names at runtime",
          "It ensures faster execution at compile time",
          "It removes the need for an operating system"
        ],
        correctAnswer: 1,
        explanation: "Dynamic binding enables more flexible systems by resolving names during execution, which is essential in systems where resources may change over time."
      },
      {
        id: "l4q8",
        question: "In hierarchical naming systems, names are structured as:",
        options: [
          "Flat, single-level identifiers",
          "Randomly generated numeric values",
          "A tree-like structure with levels separated by delimiters",
          "Encrypted strings with no semantic meaning"
        ],
        correctAnswer: 2,
        explanation: "Hierarchical naming structures organize names into levels, forming a tree — for example, the Domain Name System (DNS) structure like ‘mail.university.edu’."
      },
      {
        id: "l4q9",
        question: "What does DNS (Domain Name System) primarily do?",
        options: [
          "Encrypts web traffic between clients and servers",
          "Maps human-readable domain names to IP addresses",
          "Monitors network latency and bandwidth usage",
          "Stores website content for faster retrieval"
        ],
        correctAnswer: 1,
        explanation: "DNS is a distributed naming service that resolves domain names into corresponding IP addresses used by network devices."
      },
      {
        id: "l4q10",
        question: "Which of the following correctly describes the relationship between names, identifiers, and addresses?",
        options: [
          "An address is used to find a name, and a name identifies an identifier",
          "A name refers to an entity, an identifier uniquely distinguishes it, and an address specifies its location",
          "An identifier is a human-readable alias for an address",
          "Names and addresses are interchangeable in all systems"
        ],
        correctAnswer: 1,
        explanation: "In naming systems, a name refers to an entity, an identifier provides uniqueness, and an address specifies the physical or logical location of that entity."
      },
      {
        id: "l4q11",
        question: "Which of the following is NOT a characteristic of a good naming system?",
        options: [
          "Uniqueness",
          "Persistence",
          "Security",
          "Obfuscation"
        ],
        correctAnswer: 3,
        explanation: "A good naming system should ensure uniqueness, persistence, and security — obfuscation (making things unclear) is undesirable."
      },
      {
        id: "l4q12",
        question: "What type of naming scheme is used in email addresses (e.g., user@domain.com)?",
        options: [
          "Flat naming scheme",
          "Hierarchical naming scheme",
          "Randomized naming scheme",
          "Context-free naming scheme"
        ],
        correctAnswer: 1,
        explanation: "Email addresses use a hierarchical naming scheme, combining user-level identifiers with domain hierarchies."
      },
      {
        id: "l4q13",
        question: "Which of the following components is most responsible for resolving names in network systems?",
        options: [
          "Cache controller",
          "Name server",
          "Device driver",
          "Router buffer"
        ],
        correctAnswer: 1,
        explanation: "Name servers are responsible for resolving names into addresses or entities in distributed naming systems like DNS."
      },
      {
        id: "l4q14",
        question: "What is the purpose of aliasing in naming systems?",
        options: [
          "To create multiple names that refer to the same entity",
          "To assign a single name to multiple entities",
          "To encrypt system files",
          "To simplify address translation"
        ],
        correctAnswer: 0,
        explanation: "Aliasing allows one entity to be referred to by multiple names, enhancing flexibility and accessibility in naming systems."
      },
      {
        id: "l4q15",
        question: "In a distributed naming system, what problem can occur if two entities share the same name?",
        options: [
          "Name collision",
          "Name translation",
          "Name caching",
          "Name forwarding"
        ],
        correctAnswer: 0,
        explanation: "Name collision occurs when two distinct entities are assigned the same name, leading to ambiguity in name resolution."
      }
    ]
  },
  {
    id: "lecture-5-design-of-naming-schemes",
    title: "CSC 319 Lecture 5: Design of Naming Schemes",
    description: "Understand how computer systems, especially distributed systems, design and manage naming schemes to ensure unique identification, modular sharing, and efficient address resolution.",
    category: "Computer Science",
    difficulty: "Medium",
    duration: 10,
    icon: "Network",
    color: "bg-green-600",
    questions: [
      {
        id: "l5q1",
        question: "What is the primary purpose of a naming scheme in computer systems?",
        options: [
          "To assign memory locations to programs",
          "To identify, locate, and access objects or resources within a system",
          "To encrypt data before storage",
          "To manage CPU scheduling policies"
        ],
        correctAnswer: 1,
        explanation: "A naming scheme provides a consistent method to identify, locate, and access entities such as files, servers, and processes in a system."
      },
      {
        id: "l5q2",
        question: "Which of the following is NOT an example of a name used in a computer system?",
        options: [
          "https://example.com/home",
          "C:\\Documents\\report.docx",
          "192.168.1.5",
          "Intel Core i9 processor"
        ],
        correctAnswer: 3,
        explanation: "‘Intel Core i9 processor’ is a hardware model, not a system-level name used to identify or locate a digital entity."
      },
      {
        id: "l5q3",
        question: "Which of the following is NOT an objective of naming schemes?",
        options: [
          "Explaining the concept of naming",
          "Managing CPU pipeline execution",
          "Supporting modular sharing and namespace management",
          "Ensuring unique and secure name generation"
        ],
        correctAnswer: 1,
        explanation: "Naming schemes focus on identification, modularity, and unique addressing — not on CPU performance or instruction pipelines."
      },
      {
        id: "l5q4",
        question: "A namespace can be best described as:",
        options: [
          "A collection of valid names recognized by a system",
          "A list of IP addresses stored in a router",
          "A temporary storage for variables during execution",
          "A virtual memory area for caching files"
        ],
        correctAnswer: 0,
        explanation: "A namespace defines all valid names and their structure in a system, such as directories or domains."
      },
      {
        id: "l5q5",
        question: "Which of the following best illustrates modular sharing in a naming system?",
        options: [
          "All departments use a single, identical namespace",
          "Each department has a local namespace but can be accessed via a global namespace",
          "Names are generated randomly for each module",
          "Namespaces are restricted to hardware components only"
        ],
        correctAnswer: 1,
        explanation: "Modular sharing allows each module (e.g., department) to maintain local namespaces while participating in a unified global namespace."
      },
      {
        id: "l5q6",
        question: "Which real-world example demonstrates modular namespace integration?",
        options: [
          "A single file system on a local computer",
          "DNS domains such as bursary.yabatech.edu.ng and registry.yabatech.edu.ng",
          "An isolated printer server",
          "A standalone application with no external links"
        ],
        correctAnswer: 1,
        explanation: "DNS illustrates modular namespaces — each organization manages its subdomain under a global hierarchy."
      },
      {
        id: "l5q7",
        question: "Metadata in naming systems provides:",
        options: [
          "Encryption for files and directories",
          "Additional information about the named object such as owner, permissions, or location",
          "Instructions for how to execute a program",
          "A list of all processes running in the background"
        ],
        correctAnswer: 1,
        explanation: "Metadata describes data attributes such as creator, access rights, and modification date, aiding in management and security."
      },
      {
        id: "l5q8",
        question: "Which of the following best defines name overloading?",
        options: [
          "Assigning the same name to multiple entities in different contexts",
          "Encrypting names to prevent duplication",
          "Using long hierarchical paths for unique access",
          "Renaming entities automatically during program execution"
        ],
        correctAnswer: 0,
        explanation: "Name overloading occurs when one name refers to multiple entities, with meaning determined by context or namespace."
      },
      {
        id: "l5q9",
        question: "How can systems resolve name overloading effectively?",
        options: [
          "By restricting all systems to a single global name list",
          "By using context or namespace qualifiers to distinguish meanings",
          "By converting all names into numeric values",
          "By eliminating metadata from naming structures"
        ],
        correctAnswer: 1,
        explanation: "Namespaces or context qualifiers (e.g., student.account vs bursary.account) help resolve ambiguity in overloaded names."
      },
      {
        id: "l5q10",
        question: "What is the main distinction between a name and an address?",
        options: [
          "A name describes what an object is, while an address specifies where it is located",
          "A name and address always refer to the same thing",
          "An address provides metadata, while a name stores data",
          "A name is numeric, while an address is always textual"
        ],
        correctAnswer: 0,
        explanation: "Names identify entities conceptually, while addresses describe their physical or logical locations."
      },
      {
        id: "l5q11",
        question: "Which of the following is an example of a location-independent name?",
        options: [
          "192.168.10.25",
          "File handle or URL such as https://portal.school.edu",
          "MAC address of a network card",
          "Physical memory address in RAM"
        ],
        correctAnswer: 1,
        explanation: "Location-independent names remain valid even if the entity moves — such as URLs or symbolic file handles."
      },
      {
        id: "l5q12",
        question: "The process of converting a name into its corresponding address is known as:",
        options: [
          "Address resolution",
          "Name translation",
          "Namespace recursion",
          "Address recursion"
        ],
        correctAnswer: 0,
        explanation: "Address resolution (like DNS lookup) translates a name into its corresponding address for actual communication."
      },
      {
        id: "l5q13",
        question: "In distributed systems, ensuring unique names across multiple nodes can be achieved by:",
        options: [
          "Using the same namespace on all servers",
          "Implementing unique naming methods such as UUIDs or hierarchical naming",
          "Relying only on manual name entry",
          "Assigning names based on alphabetic order"
        ],
        correctAnswer: 1,
        explanation: "Unique naming in distributed systems is ensured using globally unique identifiers, timestamps, or hierarchical name composition."
      },
      {
        id: "l5q14",
        question: "Which of the following methods generates unique names using node ID and timestamp?",
        options: [
          "Centralized naming server",
          "Distributed coordination (UUIDs)",
          "Hash-based naming",
          "Manual entry naming"
        ],
        correctAnswer: 1,
        explanation: "Distributed coordination techniques like UUIDs use node IDs and timestamps to create globally unique names without central control."
      },
      {
        id: "l5q15",
        question: "What is a common example of a centralized naming service?",
        options: [
          "DNS lookup",
          "DHCP assigning IP addresses",
          "Git commit hash generation",
          "Local file renaming"
        ],
        correctAnswer: 1,
        explanation: "DHCP servers use centralized control to assign unique IP addresses dynamically to network clients."
      },
      {
        id: "l5q16",
        question: "Which of the following naming approaches appends timestamps to ensure uniqueness?",
        options: [
          "Hash-based naming",
          "Hierarchical naming",
          "Timestamp-based naming",
          "UUID generation"
        ],
        correctAnswer: 2,
        explanation: "Timestamp-based naming attaches date or time information (e.g., report_20251005_1230.txt) to ensure unique identifiers."
      },
      {
        id: "l5q17",
        question: "What type of naming scheme combines organization or node identifiers with local names?",
        options: [
          "Hierarchical naming",
          "Flat naming",
          "Context-free naming",
          "Dynamic binding"
        ],
        correctAnswer: 0,
        explanation: "Hierarchical naming allows structured organization, combining node or department identifiers with local names for clarity and uniqueness."
      },
      {
        id: "l5q18",
        question: "Which of the following best describes hash-based naming?",
        options: [
          "Names are derived from hashing object contents or attributes",
          "Names are stored in alphabetical order",
          "Names are chosen based on user input only",
          "Names are resolved using timestamps"
        ],
        correctAnswer: 0,
        explanation: "Hash-based naming generates unique identifiers from object data using hash functions like SHA-1, as used in systems like Git."
      },
      {
        id: "l5q19",
        question: "In cloud storage systems like Google Drive, what ensures internal consistency even when users rename files?",
        options: [
          "The file’s internal unique identifier remains constant",
          "The file name is locked permanently",
          "The metadata automatically updates all global references",
          "The system creates a duplicate of the renamed file"
        ],
        correctAnswer: 0,
        explanation: "Cloud systems maintain internal unique identifiers (IDs) that remain unchanged even when users rename files."
      },
      {
        id: "l5q20",
        question: "Which of the following correctly matches concepts with their examples?",
        options: [
          "Namespace – /home/user/docs | Unique name – UUID",
          "Metadata – 192.168.1.1 | Overloading – file.txt",
          "Address – owner name | Namespace – 0x45F9",
          "Hash-based name – /documents | Modular sharing – timestamp"
        ],
        correctAnswer: 0,
        explanation: "A namespace defines valid name structures like '/home/user/docs', and unique names like UUIDs ensure no duplication across systems."
      }
    ]
  }

]


export function getQuizById(id: string): Quiz | undefined {
  return quizData.find(quiz => quiz.id === id);
}

export function getQuizzesByCategory(category: string): Quiz[] {
  return quizData.filter(quiz => quiz.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(quizData.map(quiz => quiz.category))];
}