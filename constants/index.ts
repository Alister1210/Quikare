export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-shyam.png",
    name: "Shyam Sunder Bhansali",
  },
  {
    image: "/assets/images/dr-seema.png",
    name: "Seema Rao",
  },
  {
    image: "/assets/images/dr-ashok.png",
    name: "Ashok Seth",
  },
  {
    image: "/assets/images/dr-naresh.png",
    name: "Naresh Trehan",
  },
  {
    image: "/assets/images/dr-randeep.png",
    name: "Randeep Guleria",
  },
  {
    image: "/assets/images/dr-raghu.png",
    name: "P. Raghu Ram",
  },
  {
    image: "/assets/images/dr-shailaja.png",
    name: "Shailaja Desai ",
  },
  {
    image: "/assets/images/dr-sushila.png",
    name: "Sushila Kataria",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
