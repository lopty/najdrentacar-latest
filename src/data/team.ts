export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  group: 'leadership' | 'management' | 'team';
}

// Names, roles and photos come from the Najd organisation chart (October 2026).
export const TEAM: TeamMember[] = [
  { slug: 'basel-al-kasem', name: 'Basel Al Kasem', role: 'Founder & CEO', group: 'leadership' },
  { slug: 'walid-al-kasem', name: 'Walid Al Kasem', role: 'General Manager', group: 'leadership' },
  { slug: 'omah-al-kasem', name: 'Omah Al Kasem', role: 'Head of VIP', group: 'leadership' },
  { slug: 'maher-al-nahhas', name: 'Maher Al Nahhas', role: 'Vice GM', group: 'management' },
  { slug: 'asad-javed', name: 'Asad Javed', role: 'Head of Accounts', group: 'management' },
  { slug: 'sher-ali', name: 'Sher Ali', role: 'Fleet Manager', group: 'management' },
  { slug: 'sheraz-akhter', name: 'Sheraz Akhter', role: 'Business Development Manager', group: 'management' },
  { slug: 'amani-al-kasem', name: 'Amani Al Kasem', role: 'Project Manager', group: 'management' },
  { slug: 'lopty-pascal', name: 'Lopty Pascal', role: 'Marketing Specialist', group: 'team' },
  { slug: 'ashraf-asif', name: 'Ashraf Asif', role: 'Accountant', group: 'team' },
  { slug: 'omar-abdulrazak-alkassem', name: 'Omar Abdulrazak Alkassem', role: 'Fleet Procurement Assistant', group: 'team' },
  { slug: 'karen-tolentino', name: 'Karen Tolentino', role: 'Sales Executive', group: 'team' },
];

export const teamPhoto = (m: TeamMember) => `/images/team/${m.slug}.webp`;

export const GROUP_COMPANIES = [
  { slug: 'al-basel-consultancy', name: 'Al Basel Consultancy' },
  { slug: 'al-basel-real-estate-brokers', name: 'Al Basel Real Estate Brokers' },
  { slug: 'tuwaiq-travel-and-tourism', name: 'Tuwaiq Travel and Tourism LLC' },
  { slug: 'amani-investments', name: 'Amani Investments' },
  { slug: 'zallaqa-talent-acquisition', name: 'Zallaqa Talent Acquisition' },
];
