export interface ProjectDetails {
  id: string;
  title: string;
  category: string;
  summary: string;
  tools: string[];
  testingType: string;
  metrics: string[];
  overview: string;
  problem: string;
  role: string;
  testingScope: string[];
  testStrategy: string[];
  challenges: string[];
  results: string[];
  detailedMetrics: { label: string; value: string }[];
}

export const projectsData: ProjectDetails[] = [
  {
    id: "upi-app-testing",
    title: "UPI App Testing",
    category: "FinTech UPI Platform",
    summary: "End-to-end quality assurance for real-time UPI transaction pipelines, validating merchant credits, bank routing callbacks, and ledger matching under stress conditions.",
    tools: ["Postman", "JMeter", "MySQL", "Android Studio (ADB)", "Python"],
    testingType: "API, Performance, Mobile & DB Validation",
    metrics: ["150+ Regression Cases", "95% Load Testing Success", "99.5% Database Accuracy", "80% Defect Reduction"],
    overview: "This project focused on the end-to-end quality validation of a high-volume Unified Payments Interface (UPI) app. The platform handles thousands of peer-to-peer (P2P) and peer-to-merchant (P2M) payments per minute. The main objective was to ensure instant debit/credit confirmations, zero balance leaks, and correct fee calculations across diverse bank APIs.",
    problem: "Validating heavy concurrent transactional volume, simulating delayed bank response callbacks, managing bank-down timeout sequences, and preventing double-debits due to duplicate user submissions.",
    role: "Lead QA Engineer responsible for designing the transaction test harness, automating backend API schemas, performing load spikes via JMeter, and orchestrating SQL balance reconciliation audits.",
    testingScope: [
      "UPI Registration & Device Binding",
      "VPA Creation & QR Code Decoding",
      "P2P and P2M Money Transfer",
      "Bank SDK Latency & Timeout Handling",
      "Merchant Settlement Ledger Audits"
    ],
    testStrategy: [
      "Configured dynamic test runners in Postman with random VPAs to check account validation endpoints.",
      "Used JMeter to simulate ramp-up loads up to 5,000 concurrent threads, checking database locking protocols.",
      "Automated SQL auditing scripts to run double-entry bookkeeping checks after transactions.",
      "Conducted hardware mobile tests across varying memory limits (2GB to 8GB RAM Android devices) using ADB commands."
    ],
    challenges: [
      "Simulating third-party bank gateway failures: Solved by mocking bank APIs and writing timeout configurations in Postman collections.",
      "Preventing race conditions during merchant credit triggers: Solved by executing concurrent SQL update simulations and testing the database's serialized transactions."
    ],
    results: [
      "Stabilized transaction flows leading to a 95% load testing success rate.",
      "Created a reusable library of 150+ regression test cases, slashing manual verification time by 70%.",
      "Ensured zero-margin transaction leakage, resulting in a 99.5% database accounting accuracy."
    ],
    detailedMetrics: [
      { label: "Regression Test Cases", value: "150+" },
      { label: "Peak TPS Supported", value: "250 Transactions/Sec" },
      { label: "Database Accuracy", value: "99.5%" },
      { label: "Defect Leakage Reduction", value: "80%" }
    ]
  },
  {
    id: "ekyc-process-testing",
    title: "eKYC Process Testing",
    category: "Identity & Compliance",
    summary: "Comprehensive QA validation for automated biometric and OTP-based Aadhaar eKYC integrations, securing onboarding pathways for thousands of daily merchants.",
    tools: ["Aadhaar APIs", "Biometric SDKs", "Postman", "MySQL", "Android Studio"],
    testingType: "Integration, Compliance, Hardware & DB Testing",
    metrics: ["95% Use Case Coverage", "98% Database Verification", "90% Device Compatibility"],
    overview: "This project targeted the validation of an electronic Know Your Customer (eKYC) system integrated with government Aadhaar portals. Merchants use biometric scanners or OTP verification to get onboarded. The system is compliance-critical, requiring high precision in biometric data handling, fast OTP callbacks, and highly secure encryption of sensitive files.",
    problem: "Ensuring zero authentication fraud, resolving hardware latency of biometric device drivers across multi-brand Android systems, and securing local caching of personal identity records (PII).",
    role: "Senior QA Specialist handling biometric hardware driver integrations, PII data leakage audits, API request-response timing validations, and edge-case OTP verification retry schemes.",
    testingScope: [
      "UIDAI Aadhaar OTP and Biometric API Integration",
      "External Fingerprint/Iris Scanner Driver Handshake",
      "PII Data Encryption (AES-256) at Rest & Transit",
      "OCR Document Verification Flow",
      "Merchant Status Transition Workflow (Approved, Rejected, Pending Info)"
    ],
    testStrategy: [
      "Created biometric mock profiles to test various verification responses (match success, fingerprint match failures, scanner timeout).",
      "Tested Document OCR APIs by feeding warped, blurred, and low-contrast identity document images.",
      "Performed DB structural tests to verify Aadhaar and PII fields are stored fully encrypted.",
      "Executed device compatibility matrix tests on 20+ distinct mobile handsets."
    ],
    challenges: [
      "Varying hardware responsiveness of biometric scanners: Resolved by setting adaptive connection timeouts and validating hardware connection status prompts.",
      "PII leakage in logs: Identified logging mechanisms printing request payloads, resolved by establishing log filters to sanitize sensitive keys before printing."
    ],
    results: [
      "Delivered a smooth onboarding flow covering 95% of targeted merchant states.",
      "Assured 98% data storage verification accuracy, keeping database compliance clean.",
      "Resolved device driver configurations to achieve 90% hardware scanner compatibility."
    ],
    detailedMetrics: [
      { label: "Onboarding Flow Coverage", value: "95%" },
      { label: "Biometric Match Accuracy", value: "99.8%" },
      { label: "Device Compatibility Scale", value: "20+ Handsets" },
      { label: "PII Security Audit Success", value: "100%" }
    ]
  },
  {
    id: "dynamic-rate-plan",
    title: "Dynamic Rate Plan Engine",
    category: "FinTech Pricing Engine",
    summary: "Validation of complex business rules, dynamic pricing tables, commission distributions, and merchant tax configurations under high-scale calculations.",
    tools: ["Postman", "Python Scripting", "MySQL", "Jira", "Agile Sprints"],
    testingType: "Business Logic, Database & Regression Testing",
    metrics: ["100% Rule Compliance", "30+ Matrix Edge Cases", "2-Week Sprint Deliveries"],
    overview: "The Dynamic Rate Plan is the engine that calculates real-time transaction fees, margins, discounts, and GST charges for merchants. The pricing rules depend on transaction volumes, channels, time-periods, and banking partners. The QA goal was to certify pricing precision to prevent billing discrepancies.",
    problem: "Ensuring complex pricing logic grids containing over 20 parameters do not clash, checking that automated margin structures match accounting formulas, and validating real-time rate changes during ongoing transaction runs.",
    role: "Pricing QA Owner in charge of rules matrix writing, database rate table validation, margin discrepancy scripting, and sprint-ready regression runs.",
    testingScope: [
      "Tax Brackets & GST Configurations",
      "Volume-Based Discount Trigger Limits",
      "Real-Time Merchant Account Billing Queries",
      "Dynamic Rate Table Updates",
      "Bank Commission Splits"
    ],
    testStrategy: [
      "Designed a comprehensive pricing rule matrix mapping all discount tiers to merchant types.",
      "Created automated Python scripts querying database records to audit billing margins.",
      "Simulated rate modifications mid-process to ensure running sessions are unaffected.",
      "Conducted boundary analyses on discount volumes to check edge-transition points."
    ],
    challenges: [
      "Overlapping pricing rules: Identified cases where discount rules clashed, leading to incorrect merchant charges. Resolved by collaborating with developers to refine criteria hierarchies.",
      "Database schema updates: Frequent rate changes required dynamic schema queries. Solved by writing automated validation scripts that mapped rate logs against historical calculations."
    ],
    results: [
      "Achieved 100% validation accuracy of active dynamic pricing rules.",
      "Documented 30+ complex edge-case price combinations, establishing a clear reference for business teams.",
      "Enabled agile release transitions with flawless sprint-ready QA deployments."
    ],
    detailedMetrics: [
      { label: "Pricing Rules Verified", value: "120+" },
      { label: "Discrepancy Rate achieved", value: "0.00%" },
      { label: "Edge-Cases Documented", value: "30+" },
      { label: "Sprint Cycles Completed", value: "10+" }
    ]
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway Core",
    category: "Transaction Processing",
    summary: "Testing the core payment gateway integrations, refund loops, transaction settlements, and multi-channel failure state recovery mechanisms.",
    tools: ["Postman", "JMeter", "MySQL", "Rest API", "SDK Integrations"],
    testingType: "Integration, API, DB & Security Validation",
    metrics: ["Zero Balance Leakage", "10+ Refund Scenarios", "100% Webhook Deliveries"],
    overview: "This project involved testing the core payment gateway handling cards, net banking, UPI, and digital wallets. Testing ensured absolute data flow synchronization, instant refund loop validation, proper error mapping for bank-down states, and secure transaction handshakes.",
    problem: "Verifying ledger reconciliation under partial refunds, testing multi-channel settlement callbacks, and verifying API token authorization constraints.",
    role: "Core Gateway QA Specialist. Wrote integration test collections, simulated gateway timeouts, and audited post-transaction databases.",
    testingScope: [
      "Multi-Channel Transaction Flows",
      "Refund Processing (Full, Partial, Instant, Scheduled)",
      "Bank Webhook Notifications & Retry Logic",
      "Tokenization and Key Exchange Handshakes",
      "Merchant Settlement Reconciliation"
    ],
    testStrategy: [
      "Built Postman collection suites to check API response formats and webhook status payloads.",
      "Mocked transaction responses (Success, Reject, Bank Timeout, Incomplete KYC) to test app reaction states.",
      "Simulated connection drops mid-transaction to check transaction rollback logic.",
      "Audited double-entry databases to assure transaction ledger sums match net balances."
    ],
    challenges: [
      "Handling erratic webhook delivery: Implemented tests checking webhook retry engines (e.g. 5x progressive backoff) and database logging under network latency.",
      "Partial refund accounting: Multi-split refunds could cause small rounding discrepancies. Resolved by writing precise decimals checks in SQL scripts."
    ],
    results: [
      "Guaranteed zero balance leakage across all gateway test pathways.",
      "Validated end-to-end processing of 10+ complex refund conditions.",
      "Secured API integration pathways, eliminating transaction tampering vulnerabilities."
    ],
    detailedMetrics: [
      { label: "Gateway Integrations Tested", value: "6 Channels" },
      { label: "Refund Test Scenarios", value: "10+" },
      { label: "Webhook Success Rate", value: "100%" },
      { label: "Audit Ledger Accuracy", value: "100%" }
    ]
  },
  {
    id: "gst-invoice-claim",
    title: "GST Invoice Claim Module",
    category: "Compliance & Billing",
    summary: "Validation of automated GST calculation algorithms, tax compliance invoices, B2B invoice generation, and government tax reporting structures.",
    tools: ["Postman", "MySQL", "Excel Auditing", "Python"],
    testingType: "Calculations, Compliance & DB Verification",
    metrics: ["100% Tax Accuracy", "B2B Invoice Validation", "Zero Calculation Leakage"],
    overview: "The GST Invoice Claim module handles the automated calculation of GST on transactions, generates compliance-ready B2B tax invoices, and prepares monthly reports for government portals. The QA focus was to ensure zero math rounding errors and compliance with Indian GST regulations.",
    problem: "Verifying multi-state GST splits (CGST, SGST, IGST) depending on merchant locations, handling bulk invoice processing without server lag, and validating invoice metadata accuracy.",
    role: "Billing QA Engineer responsible for verifying tax formula calculations, database invoice generation checks, and location-routing validations.",
    testingScope: [
      "Tax Split Logic (CGST + SGST vs. IGST)",
      "Bulk Invoice Generation Pipelines",
      "HSN/SAC Code Parameter Checks",
      "B2B Portal API Validations",
      "Tax Credit Matching Ledgers"
    ],
    testStrategy: [
      "Wrote automated test suites that validated dynamic tax splits based on merchant state configurations.",
      "Validated tax calculation decimal precision up to 4 points to prevent ledger rounding errors.",
      "Simulated massive concurrent B2B invoice creation to test database insertion limits.",
      "Audited PDF invoice layouts ensuring compliance data fields (GSTIN, HSN, Tax breakups) render correctly."
    ],
    challenges: [
      "State-border merchant classification errors: Identified cases where incorrect GST splits were applied because merchant addresses lacked structural parsing. Worked with developers to establish rigid address validations.",
      "Bulk invoice rendering slowdowns: Solved by performing system load tests and validating database indexing on invoice query pipelines."
    ],
    results: [
      "Ensured 100% correct tax configurations, avoiding compliance penalty risks.",
      "Delivered a fast invoice generation pipeline running under sub-second load times.",
      "Validated B2B invoice systems matching standard Indian billing protocols."
    ],
    detailedMetrics: [
      { label: "Tax Rules Verified", value: "40+ Combinations" },
      { label: "Invoice Load Time", value: "< 500ms" },
      { label: "GST Split Accuracy", value: "100%" },
      { label: "Compliance Score", value: "100/100" }
    ]
  },
  {
    id: "target-creation",
    title: "Target & Incentive Engine",
    category: "Business Intelligence & Incentives",
    summary: "Quality validation of incentive matrices, target threshold completions, merchant commission bonuses, and volume-tracking dashboard panels.",
    tools: ["Postman", "MySQL", "Python Scripting", "Jira"],
    testingType: "Logic Validation, Database Auditing & UI Verification",
    metrics: ["99.8% Commission Accuracy", "Volume Triggers Verified", "Zero Incentive Leakage"],
    overview: "This module tracks merchant business volumes against monthly target matrices and calculates incentive payouts. The QA focus was to ensure that volume thresholds trigger correct cashbacks/commissions automatically without calculation errors or delayed status transitions.",
    problem: "Handling floating-point incentives calculations, verifying target transitions at the stroke of midnight (batch processing), and validating merchant dashboard displays under dynamic volume updates.",
    role: "QA Analyst responsible for target logic verification, batch job triggers testing, and relational SQL commission matching.",
    testingScope: [
      "Target Threshold Progression Rules",
      "Bonus Payout Calculation Logic",
      "Batch Processing Job Timers",
      "Merchant Incentives Dashboard UI",
      "Clawback Logic for Failed Transactions"
    ],
    testStrategy: [
      "Simulated transaction progress to check if incentive tiers trigger at the exact volume threshold.",
      "Wrote database test scripts to verify payout calculations match business logic blueprints.",
      "Mocked transaction clawback events to check that cashbacks are reversed if a transaction is cancelled.",
      "Tested batch processing scripts by accelerating system clocks to trigger midnight calculations."
    ],
    challenges: [
      "Delayed incentive triggers: Found database lock-ups during batch processing runs. Resolved by verifying query optimization index models with the DBA.",
      "Clawback calculation bugs: Identified edge cases where partial refund clawbacks did not adjust overall progress. Resolved by verifying dynamic progress re-calculations."
    ],
    results: [
      "Achieved 99.8% commission validation accuracy across all merchant incentive tiers.",
      "Eliminated incentive leakage risks, protecting merchant profitability margins.",
      "Ensured real-time, responsive progression bar updates on merchant dashboards."
    ],
    detailedMetrics: [
      { label: "Merchant Tiers Tested", value: "12 Groups" },
      { label: "Incentive Rules Checked", value: "50+" },
      { label: "Commission Accuracy", value: "99.8%" },
      { label: "Clawback Cases Validated", value: "100%" }
    ]
  },
  {
    id: "api-automation-framework",
    title: "API Automation Framework",
    category: "Automation Engineering",
    summary: "Built a modular Python-based API regression framework from scratch, automating transaction callbacks, schema matching, and CI/CD testing integration.",
    tools: ["Python", "PyTest", "Requests", "Git", "Postman"],
    testingType: "Framework Design, Integration & CI/CD Pipelines",
    metrics: ["70% Time Reduction", "90% Test Coverage", "Zero Leakage"],
    overview: "This project involved engineering a proprietary API Automation Framework. Previously, API validation was heavily manual. The framework uses Python + PyTest to automate payload matching, authorization sequences, bank-down mock tests, and logs compilation under automated workflows.",
    problem: "Creating a framework that is easy to write, parses multi-tier nested JSON responses fast, supports concurrent test execution, and integrates into GitHub actions.",
    role: "Automation Architect. Designed the core test runner, config structures, environment switches, database assertions, and HTML test reporters.",
    testingScope: [
      "HTTP Request/Response Assertions",
      "Dynamic Authentication Handshakes (OAuth2/JWT)",
      "Database Assertions on Created Records",
      "HTML Test Report Generation",
      "CI/CD Pipeline Configuration"
    ],
    testStrategy: [
      "Designed clean modular PyTest structures separating configuration, test data, and test cases.",
      "Implemented database connection modules inside the framework to query databases and verify balance records.",
      "Used parallel test running plugins (pytest-xdist) to run API test cases concurrently, shortening check times.",
      "Configured GitHub Action workflows to trigger test suites automatically on every code push."
    ],
    challenges: [
      "Handling rotating access tokens: Solved by creating helper methods that fetch tokens prior to testing and inject them dynamically in headers.",
      "Parallel test data contamination: Solved by designing isolated mock databases and utilizing dynamically generated unique VPAs for each test run."
    ],
    results: [
      "Reduced overall API regression test run times by 70% compared to manual execution.",
      "Achieved 90% coverage on core transactional payment APIs.",
      "Established an automated pipeline catch rate, preventing broken API builds from reaching staging."
    ],
    detailedMetrics: [
      { label: "API Test Coverage", value: "90%" },
      { label: "Regression Run Time", value: "Under 5 mins" },
      { label: "Time Saved/Release", value: "12 Hours" },
      { label: "Pipeline Success Rate", value: "100%" }
    ]
  },
  {
    id: "mobile-testing-framework",
    title: "Mobile Testing Framework",
    category: "Mobile QA & Automation",
    summary: "Setup and execution of mobile app automation suites using Appium, executing device-compatibility tests, and validating biometric authentication on Android and iOS.",
    tools: ["Appium", "Python", "Android Studio (ADB)", "Xcode", "Device Farm"],
    testingType: "Mobile Automation, Compatibility & UI Validation",
    metrics: ["92% UI Accuracy", "15+ Device Models", "80% Speed Improvement"],
    overview: "This project targeted the mobile app testing workspace, focusing on automation setups. The goal was to build Appium test suites that evaluate user onboarding, QR code scanning, notification routing, and offline transaction caching states across various mobile screen aspect ratios and memory specifications.",
    problem: "Managing unstable app elements under Appium locators, simulating camera QR code scanning under automated environments, and validating biometric hardware finger-triggers.",
    role: "Mobile QA Engineer responsible for locator mapping, Appium script construction in Python, device compatibility testing, and mobile hardware simulations.",
    testingScope: [
      "App Launch and Onboarding User Interface",
      "QR Code Camera Scan Mocking",
      "Biometric Login Handshake UI",
      "Offline Storage Caching & Synchronization",
      "Push Notification Payload Validation"
    ],
    testStrategy: [
      "Built resilient Appium scripts using dynamic XPath and ID locators to prevent fragile element failures.",
      "Mocked QR camera outputs by injecting static QR image payloads at the Android system level.",
      "Configured automated check suites simulating low-memory states by clearing app caches.",
      "Executed tests across simulated Android system profiles via ADB."
    ],
    challenges: [
      "Locator instability: Resolved by introducing custom developer IDs (test-tags) in app source code to enable clean locator bindings.",
      "Simulating fingerprint scans: Resolved by calling ADB command triggers (`adb shell cmd fingerprint...`) within the Appium script flow."
    ],
    results: [
      "Accelerated mobile regression tests, achieving an 80% run speed improvement.",
      "Tested and certified app stability across 15+ different physical device configurations.",
      "Ensured 92% UI alignment accuracy across varying screen configurations."
    ],
    detailedMetrics: [
      { label: "Devices Verified", value: "15+ Models" },
      { label: "Mobile Test Coverage", value: "85%" },
      { label: "UI Alignment Score", value: "92%" },
      { label: "Regression Execution", value: "10 mins" }
    ]
  }
];
