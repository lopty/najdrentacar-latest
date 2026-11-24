import React from 'react';
import type { Crumb } from '../site/schema';
import { BUSINESS } from '../site/business';
import { Container, CtaBand, FaqList, H2, LinkCards, PageHeader, Prose, Section, TrustPanel } from '../components/ui';

export const STORAGE_FAQS = [
  { q: 'Where does Najd offer car storage in Dubai?', a: `Storage is at Najd’s existing location: ${BUSINESS.addressLine}, ${BUSINESS.streetAddress}, Dubai. Contact the team before bringing a vehicle so availability and the handover arrangements can be confirmed.` },
  { q: 'Is there indoor space at the location?', a: 'The supplied photographs show vehicles inside the warehouse as well as outside the premises. Ask the team to confirm the specific space offered for your car and whether it will remain indoors throughout the agreed period.' },
  { q: 'How much does car storage cost?', a: 'Request the current rate for your vehicle and dates. No fixed storage price is published here. Ask for the total charge, any deposit, the minimum term and the cost of extending or ending the arrangement.' },
  { q: 'Can I collect or access my car whenever I want?', a: 'Agree access and collection times with Najd before booking. Storage access is not advertised as available around the clock. Tell the team about any planned visits or early collection so the arrangements are clear.' },
  { q: 'Does storage include insurance, security or vehicle care?', a: 'Ask for the included provisions in writing. This page does not promise particular security systems, insurance cover, climate control, battery charging, cleaning or maintenance. Confirm responsibility for the vehicle and any care you need before handing it over.' },
];

export const StoragePage: React.FC<{ crumbs: Crumb[] }> = ({ crumbs }) => <>
  <PageHeader crumbs={crumbs} eyebrow="Vehicle storage" h1="Car Storage in Dubai" lead="Najd offers car storage at its Al Quoz location in Dubai. Share your vehicle details and storage dates to check space, request a rate and agree how you will hand over and collect your car." />
  <Container>
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure><img src="/images/najd-storage-al-quoz-exterior.png" alt="Najd premises in Al Quoz with warehouse entrance and vehicles outside" width={573} height={510} className="w-full h-auto rounded-2xl" /><figcaption className="mt-3 text-sm text-slate-600">The exterior of Najd’s existing Al Quoz premises.</figcaption></figure>
        <figure><img src="/images/najd-storage-al-quoz-interior.png" alt="Vehicles parked inside the warehouse at Najd’s Al Quoz location" width={386} height={510} loading="lazy" className="w-full h-auto max-w-sm mx-auto rounded-2xl" /><figcaption className="mt-3 text-sm text-slate-600">Interior view supplied by Najd. Confirm the space allocated to your vehicle.</figcaption></figure>
      </div>
    </Section>
    <Section><H2>Arrange storage around your plans</H2><Prose paragraphs={[
      'If you need somewhere to keep your car while travelling or between periods of use, start with the expected drop-off and collection dates. Tell the team the make and model, whether the vehicle can be driven normally, and whether you will need access during storage. Availability and acceptance must be confirmed for the individual vehicle.',
      'For a longer stay, explain any care requirements before requesting a quote. Agree who retains the keys, whether the car may need to be moved and how any vehicle-care instructions will be recorded. A photograph of parked vehicles does not specify the services included in a storage agreement.',
    ]} /></Section>
    <Section><H2>What to agree before handing over the car</H2><Prose paragraphs={[
      'Ask for the storage location within the premises, the agreed dates, access arrangements and the complete price. Confirm the terms for extending the stay or collecting early. Any deposit, additional charge or vehicle-care service should be itemised so you know what the booking covers.',
      'Record the vehicle’s condition, mileage, fuel level and any accessories handed over. Take photographs together with the handover record, and ask who to contact if your plans change. Confirm insurance and responsibility for loss or damage directly with the team rather than assuming your rental or personal motor cover applies to storage.',
    ]} /></Section>
    <Section><H2>Visit the Al Quoz location by arrangement</H2><Prose paragraphs={[
      `The storage service uses the same Najd premises at ${BUSINESS.addressLine}, ${BUSINESS.streetAddress}, Dubai. Arrange a visit or handover with the team first, including the contact person and time.`,
      'You can find our office details on the [contact page](/contact/). If you also need a rental vehicle, explore the [fleet](/fleet/) and request that service separately so both arrangements are clear.',
    ]} /></Section>
    <Section><CtaBand heading="Ask about car storage availability" message="Hello Najd, I would like a car storage quote. Vehicle: __. Storage dates: __. Access or care requirements: __. Please confirm the space, rate and terms." /></Section>
    <Section><H2>Car storage questions</H2><FaqList faqs={STORAGE_FAQS} /></Section>
    <Section><LinkCards links={[{href:'/about/',label:'About Najd'}, {href:'/contact/',label:'Location and contact'}, {href:'/monthly-car-rental-dubai/',label:'Monthly rental options'}]} /></Section>
    <Section><TrustPanel /></Section>
  </Container>
</>;
