/**
 * The address links and previews point to. Set NEXT_PUBLIC_SITE_URL once the real domain is connected;
 * until then a Vercel deployment uses its own production address, so a shared link shows its own preview image.
 */
const deployedHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const site = {
  name: "BlancBleu",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? (deployedHost ? `https://${deployedHost}` : "https://blancbleu.org"),
  founded: 2004,
  email: "info@blancbleu.org",
  phones: {
    /** The landline in the old site's footer. Confirm before launch. */
    il: { display: "02-6230088", tel: "+97226230088" } as { display: string; tel: string } | null,
    /** The old site's French number is missing a digit. Add it here once confirmed. */
    fr: null as { display: string; tel: string } | null,
  },
  /** Set to a https://wa.me/<number> link once the WhatsApp number is confirmed. */
  whatsappUrl: null as string | null,
} as const;
