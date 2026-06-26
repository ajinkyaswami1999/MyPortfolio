export interface BlogSection {
  heading: string;
  text: string;
  code?: string;
  codeLanguage?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  sections: BlogSection[];
}

export const blogsData: BlogPost[] = [
  {
    id: "how-i-test-financial-apis",
    title: "How I Test Financial APIs: A Complete Guide",
    category: "API Testing",
    readTime: "6 min read",
    date: "June 15, 2026",
    summary: "A deep dive into structural validation, double-debit checking, idempotency validation, and latency mocking for payment APIs.",
    sections: [
      {
        heading: "1. The High Stakes of FinTech APIs",
        text: "In FinTech systems, API bugs aren't just minor UI glitches—they represent direct financial losses, regulatory non-compliance, or compromised user security. Testing payment gateways or UPI endpoints requires an extremely disciplined approach to data contracts, error codes, and server timeouts."
      },
      {
        heading: "2. The Idempotency Test (Double-Debit Prevention)",
        text: "Ensuring that the system never charges a user twice for a single transaction click is a core QA responsibility. We validate this using Idempotency Keys in request headers. When the same payment request is retried within a short window, the server must intercept it and return the cached status instead of charging the card again."
      },
      {
        heading: "3. Schema Contract Assertions in Postman",
        text: "Before checking logical flows, we must guarantee schema integrity. Using Postman's built-in assertions, we write validations checking datatypes, mandatory parameters, and range boundaries.",
        code: `// Postman Schema Validation Example
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

const schema = {
    "type": "object",
    "required": ["transactionId", "amount", "status"],
    "properties": {
        "transactionId": { "type": "string", "pattern": "^TXN\\\\d{8}$" },
        "amount": { "type": "number", "minimum": 1.00 },
        "status": { "type": "string", "enum": ["SUCCESS", "FAILED", "PENDING"] }
    }
};

pm.test("Schema is valid", function() {
    pm.response.to.have.jsonSchema(schema);
});`,
        codeLanguage: "javascript"
      },
      {
        heading: "4. Simulating Third-Party Bank Timeouts",
        text: "Many payment APIs fail when bank gateways take too long to respond. I mock gateway latencies (e.g. holding responses for 15+ seconds) to verify that our system triggers a proper 504 gateway timeout, transitions the transaction state to 'PENDING', and queues a reconciliation job instead of losing track of the record."
      }
    ]
  },
  {
    id: "sql-queries-every-qa-should-know",
    title: "SQL Queries Every QA Engineer Should Know",
    category: "SQL for QA",
    readTime: "5 min read",
    date: "June 10, 2026",
    summary: "Essential SQL templates, transaction ledger audits, margin verification, and search queries to validate database state accuracy.",
    sections: [
      {
        heading: "1. Database Integrity is QA's Foundation",
        text: "API response codes only tell half the story. If a payment returns 200 OK but inserts incorrect records in database logs, the system is broken. Database testing with SQL is an absolute must for FinTech validation."
      },
      {
        heading: "2. Audit 1: Verifying Double-Entry Bookkeeping Ledger",
        text: "In financial software, balance check consistency is everything. The sum of all credits must equal the sum of all debits. We audit this balance discrepancy using GROUP BY and aggregation queries.",
        code: `-- Audit query to find ledger mismatch
SELECT 
    account_id, 
    SUM(CASE WHEN txn_type = 'CREDIT' THEN amount ELSE 0 END) as total_credits,
    SUM(CASE WHEN txn_type = 'DEBIT' THEN amount ELSE 0 END) as total_debits,
    SUM(CASE WHEN txn_type = 'CREDIT' THEN amount ELSE -amount END) as balance_discrepancy
FROM transactions
GROUP BY account_id
HAVING balance_discrepancy != 0;`,
        codeLanguage: "sql"
      },
      {
        heading: "3. Audit 2: Checking Merchant Commission Margin Deductions",
        text: "When a merchant processes transactions, our dynamic rate engine applies cuts. We verify that deducted commission values match pricing policies using mathematical queries in SQL.",
        code: `-- Validate commission deduction math matches the 1.5% rule
SELECT 
    txn_id, 
    amount, 
    commission_deducted,
    (amount * 0.015) as expected_commission,
    ABS(commission_deducted - (amount * 0.015)) as variance
FROM transactions
WHERE ABS(commission_deducted - (amount * 0.015)) > 0.0001;`,
        codeLanguage: "sql"
      },
      {
        heading: "4. Audit 3: Detecting Duplicate Transaction Race Conditions",
        text: "Under peak transaction load, double-debit queries might create matching records with the same user parameters. We spot duplicates using nested aggregates.",
        code: `-- Search for transactions created within 2 seconds with identical payloads
SELECT 
    user_id, amount, merchant_id, COUNT(*) as duplicate_count
FROM transactions
WHERE created_at >= NOW() - INTERVAL 1 DAY
GROUP BY user_id, amount, merchant_id, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s')
HAVING COUNT(*) > 1;`,
        codeLanguage: "sql"
      }
    ]
  },
  {
    id: "upi-app-testing-checklist",
    title: "UPI App Testing Checklist",
    category: "FinTech Testing",
    readTime: "7 min read",
    date: "June 05, 2026",
    summary: "A robust checklist for testing UPI transactions, device binding, QR code triggers, and reconciliation pipelines.",
    sections: [
      {
        heading: "1. Device Binding and Registration Core",
        text: "UPI validation starts with the secure binding process: the app must verify the mobile number by sending an encrypted SMS and matching it to the device ID. Verify that switching sim cards triggers re-binding and that multiple profiles cannot register on a single device."
      },
      {
        heading: "2. The QR Code and VPA Scanning Suite",
        text: "Ensure that QR scanners handle low-contrast images, distorted dimensions, and different payment string payloads. Test parsing of dynamic QR codes (which contain predefined billing amounts) and verify HSN code configurations to filter secure business entities."
      },
      {
        heading: "3. Critical Transaction Scenarios",
        text: "A structured checklist must cover: standard payments, payment declines due to wrong MPIN, insufficient funds notifications, network drops mid-validation, and dynamic transaction split settlements."
      },
      {
        heading: "4. The Pre-Release Checklist Summary",
        text: "Before launching any build: verify SSL pinning blocks proxy sniffers, inspect that database transactions rollback on mid-request failures, validate SMS callbacks deliver in under 5 seconds, and audit that transaction ledgers match bank reports."
      }
    ]
  },
  {
    id: "ekyc-testing-scenarios",
    title: "eKYC Testing Scenarios: Compliance & Hardware",
    category: "QA Testing",
    readTime: "5 min read",
    date: "May 28, 2026",
    summary: "Detailed test scenarios for Aadhaar eKYC integrations, biometric validations, and OTP fallback paths.",
    sections: [
      {
        heading: "1. Verification of the Biometric Handshake",
        text: "biometric sensors (fingerprint/iris scanners) communicate with the app via SDK drivers. Test scenarios: scanner disconnected mid-scan, dirty lens validation response, driver crash recovery, and verification timing audits under latency constraints."
      },
      {
        heading: "2. OTP Verification Fallback and Resend Loops",
        text: "Aadhaar eKYC includes OTP validation. Scenarios must verify: OTP expiration timers, maximum retry counts blocking the user, resend button states, and handling of blank spaces or alphabetic values in inputs."
      },
      {
        heading: "3. Compliance Data Integrity Audits",
        text: "PII data must be handled with utmost security. Verify that biometric templates are never cached on the local device, that database transactions store documents in encrypted BLOBs, and that log files mask credentials."
      }
    ]
  },
  {
    id: "manual-testing-vs-automation",
    title: "Manual Testing vs Automation: Finding the Balance",
    category: "Automation",
    readTime: "5 min read",
    date: "May 15, 2026",
    summary: "Analyzing when to automate core APIs and transactions versus when to rely on manual exploratory QA for complex flows.",
    sections: [
      {
        heading: "1. The Automation Illusion",
        text: "It is common to assume that 100% automation is the goal. However, in financial systems with rapid feature additions and complex regulatory changes, complete automation of all components is often fragile and expensive."
      },
      {
        heading: "2. What to Automate Immediately",
        text: "Automate repeatable, high-risk, calculation-heavy structures. In payment systems, this means automating API contracts (schema, error codes), database transaction rules, and stress testing. These test flows run on every build to prevent critical failures."
      },
      {
        heading: "3. Where Manual Testing is Crucial",
        text: "Manual exploratory QA is indispensable for complex user flows (such as biometric setups on multiple physical handsets), payment error UX (assuring failed alerts explain the issue clearly), and UI compliance checking."
      },
      {
        heading: "4. Designing the Hybrid Testing Strategy",
        text: "Aim for a 70-30 split: automate API contracts and backend calculations, while relying on manual testing to explore UI states, new feature behaviors, and biometric setups before launching major updates."
      }
    ]
  },
  {
    id: "postman-api-testing-best-practices",
    title: "Postman API Testing Best Practices",
    category: "API Testing",
    readTime: "6 min read",
    date: "May 08, 2026",
    summary: "How to structure collections, write dynamic assertions, map environment variables, and run tests via CI/CD pipelines.",
    sections: [
      {
        heading: "1. Collection Organization Principles",
        text: "Keep API tests structured. Organize collections by service area (onboarding, payments, settlement), and use folder levels to map sequential flows (e.g. login -> generate link -> pay -> reconcile) to enable structured runs."
      },
      {
        heading: "2. Leveraging Environment and Global Variables",
        text: "Never hardcode secrets or IPs. Define environments (dev, staging, sandbox) containing dynamic variable keys. Write pre-request scripts to dynamically fetch API tokens and inject them in subsequent headers."
      },
      {
        heading: "3. Writing Dynamic Assertions in Javascript",
        text: "Write robust assertions validating status codes, response times, and exact JSON value properties. Validate that array lengths are greater than zero and keys exist in the schema response."
      },
      {
        heading: "4. Integrating Tests into CI/CD using Newman",
        text: "Run Postman collections in command line using Newman. Integrate Newman scripts into Git pipeline files, outputting HTML reports to keep builds visible to developer teams."
      }
    ]
  },
  {
    id: "jmeter-load-testing-guide",
    title: "JMeter Load Testing Guide: FinTech Scaling",
    category: "Performance Testing",
    readTime: "8 min read",
    date: "April 20, 2026",
    summary: "Step-by-step setup for simulating concurrent UPI/API loads, setting timers, and diagnosing server bottlenecks.",
    sections: [
      {
        heading: "1. Simulating Real-World User Scenarios",
        text: "A good load test replicates actual traffic. Map out a scenario (e.g. 70% make payments, 20% query ledgers, 10% view KYC status). In JMeter, use Thread Groups and controllers to model this dynamic transaction split."
      },
      {
        heading: "2. Setting Up Ramp-up Times and Constant Throughput",
        text: "Avoid dumping massive traffic instantly. Configure ramp-up periods (e.g. climbing from 0 to 1000 users over 10 minutes) and use Constant Throughput Timers to maintain a stable, stress-evaluating request rate."
      },
      {
        heading: "3. Tracking Latency, Error Rates, and Server CPU",
        text: "Monitor performance parameters: Latency, Response Time Percentiles (90th and 99th), and Error Rates. In financial APIs, any error rate exceeding 1% under load indicates system bottleneck problems."
      },
      {
        heading: "4. Identifying Backend Bottlenecks",
        text: "If response times increase, inspect: slow-running database queries lacking indexes, database connection exhaustion, or memory leak issues in the application JVM. Resolve and rerun JMeter test cycles."
      }
    ]
  },
  {
    id: "database-testing-in-fintech-projects",
    title: "Database Testing in FinTech Projects",
    category: "FinTech Testing",
    readTime: "7 min read",
    date: "April 10, 2026",
    summary: "Verifying data mapping, indexing audits, lock isolation, and balance checks in payment backend ledgers.",
    sections: [
      {
        heading: "1. Data Mapping Integrity Check",
        text: "When a customer initiates a transaction, database systems must map transaction state changes (PENDING -> SUCCESS) across multiple tables (orders, settlements, ledgers). We write SQL mapping queries to verify references remain clean."
      },
      {
        heading: "2. Row-Level Locking and Isolation Testing",
        text: "In high-throughput databases, concurrent queries trying to edit merchant balance rows might cause deadlocks. We test that query isolation levels are set to Repeatable Read or Serializable and row locks execute correctly."
      },
      {
        heading: "3. Index Audits for Fast Query Performance",
        text: "Slow transaction queries lead to payment timeouts. We audit database table indexes (e.g. index on transaction_id and merchant_id) ensuring database execution planners query records in milliseconds."
      }
    ]
  }
];
export const blogCategories = [
  "All",
  "QA Testing",
  "API Testing",
  "SQL for QA",
  "Automation",
  "FinTech Testing",
  "Performance Testing",
  "Career"
];
