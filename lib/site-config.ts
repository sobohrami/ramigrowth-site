export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ramigrowth-site.vercel.app'
}

export function getCalendlyUrl() {
  return process.env.NEXT_PUBLIC_CALENDLY_URL ?? ''
}

export function getFormspreeAction() {
  const id = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  return id ? `https://formspree.io/f/${id}` : ''
}

export function getContactEmail() {
  return process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? ''
}
