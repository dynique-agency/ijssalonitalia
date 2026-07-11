import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { vacatures, getVacatureBySlug } from '../../vacatures-data'
import { businessData } from '../../data'
import VacatureDetailClient from '../../components/VacatureDetailClient'

const siteUrl = 'https://www.ijssalonitaliavaals.nl'

export function generateStaticParams() {
  return vacatures.map(job => ({ slug: job.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const job = getVacatureBySlug(params.slug)
  if (!job) return {}

  return {
    title: `${job.title} - Vacature IJssalon Italia Vaals`,
    description: job.intro,
  }
}

export default function VacaturePage({ params }: { params: { slug: string } }) {
  const job = getVacatureBySlug(params.slug)
  if (!job) notFound()

  const jobPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: `${job.about} ${job.intro}`,
    employmentType: 'PART_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: businessData.business_identity.name,
      sameAs: siteUrl,
      logo: `${siteUrl}/italialogo.webp`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${businessData.contact_info.address.street} ${businessData.contact_info.address.number}`,
        addressLocality: businessData.contact_info.address.city,
        postalCode: businessData.contact_info.address.postal_code,
        addressCountry: 'NL',
      },
    },
    datePosted: '2026-07-01',
    validThrough: '2026-12-31',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <VacatureDetailClient job={job} />
    </>
  )
}
