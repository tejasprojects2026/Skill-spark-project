import {
  Briefcase,
  Building2,
  Factory,
  HeartPulse,
  Package,
  Users,
} from "lucide-react";

export const industries = [
  {
    icon: Users,
    label: "Information Technology",
    seoTitle: "IT Recruitment Services for Software, Cloud, Data, and Support Roles",
    overview:
      "Skill Spark supports IT hiring for startups, product companies, IT services firms, and enterprise technology teams across Pune, PCMC, and India. We help employers hire screened technology talent for permanent staffing, specialized recruitment, and leadership search.",
    services: [
      "Permanent staffing for software and IT support teams",
      "Specialized recruitment for technology project teams",
      "Executive search for engineering, product, and technology leaders",
    ],
    roleGroups: [
      {
        title: "Software & Web Development",
        roles: [
          "Frontend Developer",
          "Backend Developer",
          "Full Stack Developer",
          "React Developer",
          "Node.js Developer",
          "Python Developer",
        ],
      },
      {
        title: "Cloud, Data & Infrastructure",
        roles: [
          "DevOps Engineer",
          "Cloud Engineer",
          "Data Analyst",
          "Data Engineer",
          "Database Administrator",
          "Network Engineer",
        ],
      },
      {
        title: "Product, QA & Support",
        roles: [
          "QA Engineer",
          "Automation Tester",
          "Product Manager",
          "Business Analyst",
          "Technical Support Executive",
          "IT Helpdesk Engineer",
        ],
      },
    ],
  },
  {
    icon: Factory,
    label: "Manufacturing & Engineering",
    seoTitle: "Manufacturing and Engineering Recruitment for Plant, Production, and Quality Teams",
    overview:
      "We provide manufacturing recruitment and engineering staffing for factories, industrial units, fabrication businesses, and production-led companies. Our hiring support covers shop-floor, technical, supervisory, and senior plant roles.",
    services: [
      "Permanent staffing for production and engineering departments",
      "Specialized recruitment for plant operations and project demand",
      "Executive search for plant heads and operations leaders",
    ],
    roleGroups: [
      {
        title: "Production & Operations",
        roles: [
          "Production Manager",
          "Production Supervisor",
          "Machine Operator",
          "CNC Operator",
          "Assembly Line Supervisor",
          "Shift Incharge",
        ],
      },
      {
        title: "Quality, Maintenance & EHS",
        roles: [
          "Quality Engineer",
          "QA/QC Inspector",
          "Maintenance Engineer",
          "EHS Officer",
          "Safety Officer",
          "Utility Technician",
        ],
      },
      {
        title: "Engineering & Plant Leadership",
        roles: [
          "Design Engineer",
          "Process Engineer",
          "Plant Head",
          "Operations Manager",
          "Tool Room Engineer",
          "Industrial Engineer",
        ],
      },
    ],
  },
  {
    icon: Package,
    label: "Logistics & Supply Chain",
    seoTitle: "Logistics and Supply Chain Hiring for Warehouse, Procurement, and Transport Roles",
    overview:
      "Skill Spark helps companies hire dependable logistics and supply chain professionals for warehousing, dispatch, procurement, inventory, and last-mile operations. We focus on practical screening, communication skills, and operational reliability.",
    services: [
      "Permanent staffing for logistics and supply chain functions",
      "Bulk hiring support for warehouse and dispatch operations",
      "Leadership hiring for procurement, warehouse, and distribution teams",
    ],
    roleGroups: [
      {
        title: "Warehouse & Inventory",
        roles: [
          "Warehouse Manager",
          "Inventory Executive",
          "Store Keeper",
          "Picker Packer",
          "Warehouse Supervisor",
          "Stock Auditor",
        ],
      },
      {
        title: "Transport & Dispatch",
        roles: [
          "Dispatch Executive",
          "Logistics Coordinator",
          "Fleet Supervisor",
          "Transport Manager",
          "Delivery Operations Executive",
          "Route Planner",
        ],
      },
      {
        title: "Procurement & Supply Chain",
        roles: [
          "Purchase Executive",
          "Procurement Manager",
          "Supply Chain Analyst",
          "Vendor Development Executive",
          "Import Export Executive",
          "MIS Executive",
        ],
      },
    ],
  },
  {
    icon: HeartPulse,
    label: "Healthcare & Nursing",
    seoTitle: "Healthcare and Nursing Staffing for Hospitals, Clinics, and Care Facilities",
    overview:
      "We support healthcare recruitment for hospitals, clinics, diagnostic centers, home-care providers, and medical facilities. Our process focuses on verified experience, patient-care attitude, shift readiness, and role-specific screening.",
    services: [
      "Permanent staffing for clinical and hospital support roles",
      "Focused recruitment for ward, patient-care, and facility requirements",
      "Focused sourcing for nursing, diagnostics, and healthcare operations",
    ],
    roleGroups: [
      {
        title: "Nursing & Patient Care",
        roles: [
          "Staff Nurse",
          "GNM Nurse",
          "ANM Nurse",
          "ICU Nurse",
          "Nursing Assistant",
          "Patient Care Attendant",
        ],
      },
      {
        title: "Diagnostics & Clinical Support",
        roles: [
          "Lab Technician",
          "Radiology Technician",
          "Phlebotomist",
          "OT Technician",
          "Dialysis Technician",
          "Medical Records Executive",
        ],
      },
      {
        title: "Hospital Operations",
        roles: [
          "Hospital Administrator",
          "Front Office Executive",
          "Billing Executive",
          "Ward Boy",
          "Housekeeping Supervisor",
          "Facility Coordinator",
        ],
      },
    ],
  },
  {
    icon: Building2,
    label: "Corporate & Admin",
    seoTitle: "Corporate and Admin Recruitment for HR, Finance, Back Office, and Office Operations",
    overview:
      "Skill Spark recruits corporate and administrative talent for growing businesses that need dependable back-office, HR, finance, operations, and office support teams. We prioritize communication, stability, documentation accuracy, and role fit.",
    services: [
      "Permanent staffing for corporate and back-office functions",
      "Focused hiring support for documentation, operations, and admin workload",
      "Search support for HR, finance, and administration leadership",
    ],
    roleGroups: [
      {
        title: "Human Resources & Admin",
        roles: [
          "HR Executive",
          "Recruiter",
          "Admin Executive",
          "Office Coordinator",
          "Payroll Executive",
          "Facility Executive",
        ],
      },
      {
        title: "Finance & Accounts",
        roles: [
          "Accountant",
          "Accounts Executive",
          "Billing Executive",
          "Finance Executive",
          "Tax Assistant",
          "Accounts Manager",
        ],
      },
      {
        title: "Back Office & Operations",
        roles: [
          "Data Entry Operator",
          "MIS Executive",
          "Operations Executive",
          "Customer Support Executive",
          "Documentation Executive",
          "Executive Assistant",
        ],
      },
    ],
  },
  {
    icon: Briefcase,
    label: "BFSI & Sales",
    seoTitle:
      "BFSI and Sales Recruitment for Banking, Insurance, Field Sales, and Business Development",
    overview:
      "We help banking, financial services, insurance, fintech, and sales-led organizations hire target-driven professionals. Our screening focuses on communication, product understanding, field readiness, customer handling, and performance orientation.",
    services: [
      "Permanent staffing for sales, banking, and insurance teams",
      "Bulk hiring support for field sales and customer acquisition",
      "Leadership hiring for branch, sales, and business development roles",
    ],
    roleGroups: [
      {
        title: "Banking, Finance & Insurance",
        roles: [
          "Relationship Manager",
          "Loan Officer",
          "Credit Executive",
          "Insurance Advisor",
          "Branch Operations Executive",
          "KYC Executive",
        ],
      },
      {
        title: "Sales & Business Development",
        roles: [
          "Sales Executive",
          "Business Development Executive",
          "Area Sales Manager",
          "Field Sales Officer",
          "Inside Sales Executive",
          "Key Account Manager",
        ],
      },
      {
        title: "Customer & Revenue Operations",
        roles: [
          "Telecaller",
          "Customer Service Executive",
          "Collection Executive",
          "Sales Coordinator",
          "Channel Sales Executive",
          "Team Leader Sales",
        ],
      },
    ],
  },
] as const;
