import type { LanguageCode } from './types';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string[];
}

export interface LegalPolicyContent {
  title: string;
  subtitle: string;
  summary: string;
  sections: LegalSection[];
}

const LEGAL_POLICIES_EN: Record<string, LegalPolicyContent> = {
  'terms-of-service': {
    title: 'Terms of Service',
    subtitle: 'The binding terms, rules, and conditions governing access to and use of Tik Profiles Viewer on TikProfilesViewer.com.',
    summary: 'By accessing or using Tik Profiles Viewer, you agree to these Terms of Service. Our service allows users to inspect public creator profiles and download public media for personal, non-commercial use in compliance with applicable laws.',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        paragraphs: [
          'Welcome to Tik Profiles Viewer, accessible at TikProfilesViewer.com ("Website", "Service", "we", "us", or "our"). These Terms of Service constitute a legally binding agreement between you ("User", "you", or "your") and the operators of Tik Profiles Viewer.',
          'By visiting, accessing, browsing, or utilizing any features of our Website, you explicitly acknowledge that you have read, understood, and agreed to be bound by these Terms of Service, as well as our Privacy Policy, Cookie Policy, Acceptable Use Policy, and Copyright Policy. If you do not agree to all terms and conditions set forth herein, you must immediately cease all access and use of the Service.'
        ]
      },
      {
        heading: '2. Description of the Service',
        paragraphs: [
          'Tik Profiles Viewer is a web-based educational and utility platform designed to allow visitors to view publicly accessible information from the TikTok social media network. The features offered on the Website include:'
        ],
        bullets: [
          'Viewing publicly available creator profile avatars, display names, bios, follower figures, following statistics, and total likes.',
          'Streaming publicly published short-form video content without logging into an account.',
          'Saving original high-definition video files (MP4) and audio sound tracks (MP3) for personal, offline, and archival use.',
          'Accessing creator tools such as engagement rate estimators and video metrics calculators.'
        ],
        paragraphs_after: [
          'Our Service only indexes and proxies data that is already publicly visible on the open internet. We do not provide access to private accounts, deleted videos, geo-restricted media, or content behind account authentication walls.'
        ]
      },
      {
        heading: '3. Permitted and Non-Commercial Use',
        paragraphs: [
          'You are granted a limited, revocable, non-exclusive, non-transferable license to access and use the Website solely for personal, non-commercial, and lawful purposes. You agree that any videos, audios, images, or metrics retrieved through our Service will not be resold, repackaged, redistributed, broadcast, or commercially exploited in violation of third-party intellectual property rights.'
        ]
      },
      {
        heading: '4. User Covenants and Prohibited Activities',
        paragraphs: [
          'When using Tik Profiles Viewer, you expressly warrant and agree that you will not:'
        ],
        bullets: [
          'Use the Service for any unlawful, fraudulent, defamatory, harassing, or malicious purpose.',
          'Attempt to bypass, disable, circumvent, or compromise the technical infrastructure, rate limits, or security controls of the Website.',
          'Deploy automated scrapers, bots, crawlers, or high-concurrency request engines that disrupt server performance or impose an unreasonable load on our infrastructure.',
          'Download or distribute copyright-protected media for commercial monetization without explicit authorization from the original content owner.',
          'Impersonate any person or entity, or falsely claim affiliation with TikTok, ByteDance, or Tik Profiles Viewer.'
        ]
      },
      {
        heading: '5. Intellectual Property Rights and Ownership',
        paragraphs: [
          'All trademarks, logos, brand names, service marks, software code, site layout, designs, text, and graphics created by Tik Profiles Viewer are the exclusive intellectual property of Tik Profiles Viewer.',
          'All TikTok trademarks, logos, sound recordings, and creator videos displayed or streamed via the Website remain the property of their respective creators and ByteDance Ltd. We do not claim any proprietary rights over content published by third parties.'
        ]
      },
      {
        heading: '6. Third-Party Links, APIs, and External Infrastructure',
        paragraphs: [
          'The Service may retrieve information from third-party networks and APIs. We have no direct control over the content, uptime, availability, privacy policies, or practices of third-party platforms. You acknowledge that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused by your interaction with external third-party services.'
        ]
      },
      {
        heading: '7. Disclaimer of Warranties',
        paragraphs: [
          'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, ERROR-FREE, OR VIRUS-FREE.'
        ]
      },
      {
        heading: '8. Limitation of Liability',
        paragraphs: [
          'IN NO EVENT SHALL TIK PROFILES VIEWER, ITS OPERATORS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, DATA LOSS, OR SYSTEM DAMAGE ARISING FROM YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.'
        ]
      },
      {
        heading: '9. Modifications to the Service and Terms',
        paragraphs: [
          'We reserve the right to modify, alter, suspend, or discontinue any aspect of the Service at our sole discretion without prior notice. We may update these Terms of Service periodically to reflect changes in our legal obligations, service enhancements, or regulatory requirements. Continued use of the Website after any revision constitutes your full acceptance of the updated terms.'
        ]
      },
      {
        heading: '10. Governing Law and Severability',
        paragraphs: [
          'These Terms of Service shall be governed by and construed in accordance with applicable general commercial laws, without regard to conflict of law principles. If any provision of these Terms is determined by a court of competent jurisdiction to be invalid or unenforceable, that provision shall be severed, and the remaining provisions shall continue in full force and effect.'
        ]
      }
    ]
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    subtitle: 'How Tik Profiles Viewer protects your privacy, handles server logs, and explains advertising cookies in clear Plain English.',
    summary: 'Tik Profiles Viewer does not ask you to sign up, log in, or share personal details. We only process temporary technical logs needed to run the site safely, and you control your cookie and ad choices.',
    sections: [
      {
        heading: '1. Overview',
        paragraphs: [
          'Welcome to Tik Profiles Viewer at TikProfilesViewer.com. We built this website so anyone can view public TikTok profiles and download public media without creating an account.',
          'This policy explains what information is processed when you visit our site, how cookies work, and how you can control your privacy choices.'
        ]
      },
      {
        heading: '2. Information We Do Not Collect',
        paragraphs: [
          'We do not ask for or store personal account details. In particular, we do not collect:'
        ],
        bullets: [
          'Personal Identity Details: We do not ask for your name, home address, or phone number to use the viewer.',
          'TikTok Logins: We never ask for your TikTok username, password, or private account tokens.',
          'Personal Search History: We do not build personal profiles of the creators you search for or the files you download.'
        ]
      },
      {
        heading: '3. Temporary Server Logs and Contact Emails',
        paragraphs: [
          'Like most websites, our servers automatically create short-term technical logs to keep the site fast and safe from abuse or heavy bot traffic. These logs may include:'
        ],
        bullets: [
          'Your IP address (used for security rate limits and removed on a rolling schedule).',
          'Your browser type, device type, and screen size.',
          'The page you requested, date, time, and HTTP status code.'
        ],
        paragraphs_after: [
          'If you email us directly for support or a removal request, we only use your email address and message to reply to you and handle your request.'
        ]
      },
      {
        heading: '4. Cookies and Browser Storage',
        paragraphs: [
          'We use browser LocalStorage on your device to remember your simple site settings, such as your selected language or admin tool settings. This data stays in your browser.',
          'You can read the full breakdown in our Cookie Policy.'
        ]
      },
      {
        heading: '5. Google AdSense and Advertising Cookies',
        paragraphs: [
          'To keep our tools free for everyone, we may show ads through Google AdSense and approved third-party ad partners.'
        ],
        bullets: [
          'Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.',
          'Google uses advertising cookies to show either personalized ads or non-personalized ads depending on your consent choice and region.',
          'You can opt out of personalized advertising at any time by visiting Google Ads Settings.',
          'You can also opt out of third-party vendor cookies for personalized ads by visiting www.aboutads.info.'
        ]
      },
      {
        heading: '6. Third-Party Media Networks',
        paragraphs: [
          'When you watch a video or save a file, your browser loads public media from third-party content delivery networks. Those external hosts operate under their own privacy policies.'
        ]
      },
      {
        heading: '7. Data Retention and Your Privacy Rights',
        paragraphs: [
          'We keep temporary security logs only as long as needed to protect the service. Depending on where you live (including the EEA, UK, or California), you have the right to:'
        ],
        bullets: [
          'Access and Correction: Ask what personal data we hold from any email you sent us, and ask us to fix it.',
          'Deletion: Ask us to delete emails you sent us, or clear cookies and LocalStorage directly in your browser.',
          'Withdraw Consent: Turn off non-essential or personalized ad cookies at any time through your browser or Google Ads Settings.',
          'No Sale of Data: We do not sell your personal information to data brokers.'
        ]
      },
      {
        heading: '8. Children Under 13',
        paragraphs: [
          'This website is meant for general audiences and is not designed for children under 13. We do not knowingly collect personal information from children under 13. If you think a child sent us personal details by email, contact us so we can remove them right away.'
        ]
      },
      {
        heading: '9. Operator Details and Policy Updates',
        paragraphs: [
          'We may update this Privacy Policy when our tools or legal rules change. Please confirm the owner fields below before public launch and consult a qualified lawyer if you need certified legal advice.'
        ],
        callout: [
          'Site Operator: [Owner / Company Legal Name]',
          'Official Contact Email: legal@tikprofilesviewer.com',
          'Jurisdiction: [Country / Jurisdiction]',
          'Effective Date: November 2026'
        ]
      }
    ]
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    subtitle: 'Clear information about how cookies and browser storage work on TikProfilesViewer.com and how you can control them.',
    summary: 'Tik Profiles Viewer uses basic browser storage to remember your preferences and keep the site safe. If ads are shown, advertising partners such as Google AdSense may also place cookies based on your browser and consent settings.',
    sections: [
      {
        heading: '1. What Are Cookies and Local Storage?',
        paragraphs: [
          'Cookies are small text files that a website saves on your phone, tablet, or computer when you visit a page. They help the site remember settings and stay secure.',
          'Modern browsers also provide LocalStorage and SessionStorage. These tools save your settings directly inside your browser so your choices stay ready without creating a user account.'
        ]
      },
      {
        heading: '2. Cookie Categories Used on This Site',
        paragraphs: [
          'Below is a simple table showing each category, what it does, and how long data stays stored:'
        ],
        bullets: [
          'Strictly Necessary: Keeps page routing, basic security checks, and admin login sessions working properly. (Retention: Session)',
          'Preferences (LocalStorage): Remembers your chosen display settings and countdown preferences on your own device. (Retention: Until cleared)',
          'Analytics: Helps measure page speed and fix technical errors using aggregated site traffic data. (Retention: Up to 12 months)',
          'Advertising (Google AdSense): Helps Google and approved ad partners show ads, limit repeat ads, and measure ad clicks. (Retention: Per partner rules)'
        ]
      },
      {
        heading: '3. Google AdSense Advertising Choices',
        paragraphs: [
          'If ads are active on this site, Google and third-party vendors may use cookies to display ads based on your visits to this website and other websites.',
          'You can opt out of personalized advertising in Google Ads Settings or manage third-party ad cookies at www.aboutads.info.'
        ]
      },
      {
        heading: '4. How to Control Cookies in Your Browser',
        paragraphs: [
          'You can block or delete cookies at any time using your browser settings:'
        ],
        bullets: [
          'Google Chrome: Settings > Privacy and security > Third-party cookies',
          'Apple Safari: Settings or Preferences > Privacy > Manage Website Data',
          'Mozilla Firefox: Settings > Privacy & Security > Cookies and Site Data',
          'Microsoft Edge: Settings > Cookies and site permissions'
        ],
        paragraphs_after: [
          'Turning off strictly necessary storage may prevent some site preferences from saving. For more details, read our Privacy Policy.'
        ]
      },
      {
        heading: '5. Updates to This Policy',
        paragraphs: [
          'We may update this Cookie Policy when browser rules or site tools change. Please check this page for the latest version.'
        ]
      }
    ]
  },
  'disclaimer': {
    title: 'General Disclaimer',
    subtitle: 'Important legal clarification regarding information accuracy, metrics estimates, and third-party platform limitations.',
    summary: 'All profile data, follower counts, and video metrics displayed on Tik Profiles Viewer are retrieved from public endpoints for informational purposes only. We cannot guarantee real-time accuracy, completeness, or uninterrupted availability.',
    sections: [
      {
        heading: '1. Informational Purpose Only',
        paragraphs: [
          'The information and utility services provided by Tik Profiles Viewer (accessible at TikProfilesViewer.com) are intended exclusively for general informational, educational, and personal archival purposes.',
          'Nothing contained on this Website constitutes professional social media marketing consulting, investment advice, brand endorsement, or binding contractual guarantees of creator reach, earnings, or performance.'
        ]
      },
      {
        heading: '2. Accuracy and Timeliness of Public Data',
        paragraphs: [
          'The metrics displayed on our Website including follower tallies, following numbers, aggregate like counts, video titles, view counts, and engagement percentages are retrieved from publicly accessible third-party network endpoints.',
          'Because social media metrics fluctuate continuously and can be affected by API caching cycles, algorithm adjustments, or third-party rate limits:'
        ],
        bullets: [
          'Statistics may occasionally be delayed, estimated, rounded, or temporarily inaccurate compared to real-time mobile app telemetry.',
          'Accounts that have recently switched privacy settings, changed usernames, or been suspended by the platform may return cached or blank results.',
          'Calculated engagement rates and creator earnings figures represent mathematical estimates based on industry benchmarks, not audited financial records.'
        ]
      },
      {
        heading: '3. Non-Affiliation and Independence',
        paragraphs: [
          'Tik Profiles Viewer is an independent online web utility. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with TikTok, ByteDance Ltd., Musical.ly, or any of their subsidiaries or corporate affiliates.',
          'The official TikTok website is accessible at www.tiktok.com. The name "TikTok" as well as related names, marks, emblems, and logos are registered trademarks of their respective owners.'
        ]
      },
      {
        heading: '4. Third-Party Content and Copyright Responsibility',
        paragraphs: [
          'Tik Profiles Viewer does not own, produce, monitor, or claim copyright over third-party videos, photographs, audio tracks, or captions displayed via our service.',
          'All intellectual property rights in published media remain with the respective creators and content owners. Users of our service are solely responsible for ensuring that their downloading, viewing, and personal use of any media complies with applicable local and international copyright regulations.'
        ]
      },
      {
        heading: '5. "Use at Your Own Risk" Clause',
        paragraphs: [
          'YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF TIK PROFILES VIEWER IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
          'WE MAKE NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, SECURE, ACCURATE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE PROMPTLY CORRECTED.'
        ]
      }
    ]
  },
  'legal-notice': {
    title: 'Legal Notice',
    subtitle: 'Statutory provider identification, editorial responsibility, and official contact information for TikProfilesViewer.com.',
    summary: 'Official legal notice and corporate identification for Tik Profiles Viewer, outlining service ownership, technical hosting, designated legal representatives, and contact avenues.',
    sections: [
      {
        heading: '1. Service Provider Identification',
        paragraphs: [
          'Information provided pursuant to international electronic commerce and digital services disclosure standards:'
        ],
        callout: [
          'Web Service Name: Tik Profiles Viewer',
          'Official Domain: https://tikprofilesviewer.com',
          'Nature of Service: Free online utility and anonymous viewer for publicly available social media profile information and content.',
          'Primary Contact Email: support@tikprofilesviewer.com',
          'Legal & DMCA Inquiries: legal@tikprofilesviewer.com'
        ]
      },
      {
        heading: '2. Technical Hosting and Infrastructure',
        paragraphs: [
          'Tik Profiles Viewer is deployed across globally distributed cloud hosting infrastructure and edge content delivery networks (CDNs). Cloud hosting providers maintain physical server hardware in secure, ISO/IEC 27001-certified data center facilities across North America and Europe.'
        ]
      },
      {
        heading: '3. Editorial and Content Responsibility',
        paragraphs: [
          'As an automated technical search index and proxy service, Tik Profiles Viewer does not create, originate, edit, or curate third-party video uploads or creator profile biographies. All published media displayed on the service is retrieved on-demand from publicly accessible content distribution networks in direct response to user queries.',
          'The original creators who choose to publish their content publicly on third-party networks retain full editorial, civil, and criminal responsibility for their publications under applicable national laws.'
        ]
      },
      {
        heading: '4. Dispute Resolution and Contact Procedures',
        paragraphs: [
          'We are committed to resolving any legal concerns, copyright notices, or questions in a prompt and cooperative manner. If you believe any aspect of our service infringes your rights or violates applicable standards, please reach out directly:'
        ],
        bullets: [
          'General Inquiries: support@tikprofilesviewer.com',
          'Copyright & DMCA Takedown: legal@tikprofilesviewer.com',
          'Content Removal Requests: Submit via our Content Removal Policy channel.'
        ],
        paragraphs_after: [
          'Our administrative compliance team aims to review and respond to formal legal correspondence within 24 to 48 business hours.'
        ]
      }
    ]
  },
  'copyright-policy': {
    title: 'Copyright & DMCA Policy',
    subtitle: 'Our intellectual property principles, respect for creator ownership, and formal procedures for submitting copyright infringement notices.',
    summary: 'Tik Profiles Viewer respects creator intellectual property rights. We do not host media on our own storage servers. If you are a copyright owner and wish to request removal of content from our search index, follow our formal DMCA procedure below.',
    sections: [
      {
        heading: '1. Statement of Principle',
        paragraphs: [
          'Tik Profiles Viewer ("we", "us", "our") strongly respects the intellectual property rights of content creators, authors, musicians, and rights holders worldwide. It is our strict policy to respond promptly to clear, valid notices of alleged copyright infringement in compliance with the Digital Millennium Copyright Act (DMCA, 17 U.S.C. § 512), the European Union Copyright Directive, and international intellectual property treaties.'
        ]
      },
      {
        heading: '2. Technical Nature of Our Service (No File Hosting)',
        paragraphs: [
          'To understand our copyright framework, please note our technical architecture:'
        ],
        bullets: [
          'Tik Profiles Viewer operates as an automated index, client-side player, and public proxy tool.',
          'We do not maintain permanent file storage, media servers, or video databases hosting creator media on our servers.',
          'All videos, audio tracks, and images previewed or downloaded through the Website originate from third-party public content delivery networks (CDNs) where the content was published by the original TikTok user.',
          'When a video is deleted or set to private on TikTok by its original author, it naturally becomes inaccessible through our tool once CDN caches expire.'
        ]
      },
      {
        heading: '3. Requirements for Submitting a Formal DMCA Takedown Notice',
        paragraphs: [
          'If you are the copyright owner, or an authorized agent designated to act on behalf of the owner of an exclusive right, and you believe that content accessible through TikProfilesViewer.com infringes upon your copyright, you may submit a formal written notice to our Designated Copyright Agent at legal@tikprofilesviewer.com.',
          'To be effective under 17 U.S.C. § 512(c)(3), your notice must include ALL of the following:'
        ],
        bullets: [
          'Physical or Electronic Signature: A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive copyright right that is allegedly infringed.',
          'Identification of the Copyrighted Work: A clear description of the copyrighted work claimed to have been infringed (or if multiple works are covered by a single notification, a representative list of such works).',
          'Identification of the Infringing Material: Specific URLs or precise identifiers on TikProfilesViewer.com or TikTok that allow our technical team to locate and verify the material in question.',
          'Contact Information: Information reasonably sufficient to permit us to contact you, such as your full legal name, physical address, telephone number, and official email address.',
          'Good Faith Statement: A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law (such as fair use).',
          'Accuracy and Perjury Statement: A statement made under penalty of perjury that the information in the notification is accurate, and that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.'
        ]
      },
      {
        heading: '4. Processing and Response Timelines',
        paragraphs: [
          'Upon receipt of a substantially compliant DMCA notice, our legal team will:'
        ],
        bullets: [
          'Review the request within 24 to 48 business hours.',
          'Block or remove the identified URLs from our search indexing and caching layers.',
          'Provide written confirmation of the action taken to the notifying rights holder.'
        ]
      },
      {
        heading: '5. Designated Copyright Agent Contact',
        paragraphs: [],
        callout: [
          'Designated Agent: Copyright & IP Compliance Officer',
          'Service: Tik Profiles Viewer',
          'Email Address: legal@tikprofilesviewer.com',
          'Subject Line Requirement: Please format email subject as [DMCA Notice] - Copyright Claim - <Title/URL>'
        ]
      }
    ]
  },
  'tiktok-independence-disclaimer': {
    title: 'TikTok Independence Disclaimer',
    subtitle: 'Clear and unambiguous disclosure regarding our autonomous operational status and lack of corporate affiliation with ByteDance or TikTok.',
    summary: 'Tik Profiles Viewer is an entirely independent web platform. We are not owned, operated, authorized, endorsed, sponsored, or affiliated with TikTok Inc., ByteDance Ltd., or any of their global subsidiaries.',
    sections: [
      {
        heading: '1. Formal Statement of Independence',
        paragraphs: [
          'Tik Profiles Viewer (accessible at TikProfilesViewer.com) is an autonomous web service engineered and maintained by an independent group of web developers and enthusiasts.',
          'We explicitly affirm that our Website, software, brand identity, and operations are not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with TikTok Inc., ByteDance Ltd., Musical.ly, or any of their subsidiary corporate entities.'
        ]
      },
      {
        heading: '2. Trademark and Brand Ownership',
        paragraphs: [
          'The word mark "TikTok", the stylized music note logo, and all related brand assets, trade dress, product names, and company emblems are registered trademarks owned exclusively by ByteDance Ltd. and its affiliates.',
          'Any use of the word "TikTok" on TikProfilesViewer.com is made strictly for descriptive, nominative, and identification purposes to truthfully indicate the third-party platform whose publicly accessible profile information our utility is engineered to display. Such nominative usage constitutes protected fair use and does not suggest any corporate partnership, sponsorship, or licensing arrangement.'
        ]
      },
      {
        heading: '3. Official Channels and Inquiries',
        paragraphs: [
          'For official TikTok customer support, safety inquiries, creator program enrollment, advertising accounts, or to download the official mobile apps, please consult the official TikTok platforms:'
        ],
        bullets: [
          'Official Website: https://www.tiktok.com',
          'Official Newsroom: https://newsroom.tiktok.com',
          'Help & Support Portal: https://support.tiktok.com'
        ]
      },
      {
        heading: '4. Consumer Clarity',
        paragraphs: [
          'By using Tik Profiles Viewer, you confirm your understanding that you are using an independent third-party web tool. If you have questions regarding our operational independence or this disclosure, please contact our legal team at legal@tikprofilesviewer.com.'
        ]
      }
    ]
  },
  'public-content-policy': {
    title: 'Public Content Policy',
    subtitle: 'How Tik Profiles Viewer identifies, accesses, and displays only publicly available social media data.',
    summary: 'Tik Profiles Viewer strictly interacts with content that creators have chosen to make publicly accessible to the open internet. We do not bypass private accounts, age-gates, or digital security barriers.',
    sections: [
      {
        heading: '1. Principle of Public Domain Availability',
        paragraphs: [
          'The architecture of Tik Profiles Viewer is grounded in the foundational internet principle of open accessibility. When social media creators configure their user accounts as "Public" and publish videos, captions, and profile photos to the web, that content is indexed and made accessible to web browsers globally without requiring account creation.',
          'Our service functions as an open web browser proxy and viewer interface that reads this publicly reachable information on-demand when a user initiates a search.'
        ]
      },
      {
        heading: '2. Strict Limitations on Content Access',
        paragraphs: [
          'We enforce strict technical boundaries regarding what our tools can and cannot access:'
        ],
        bullets: [
          'Private Accounts: If a creator has designated their TikTok account as "Private", our system cannot, does not, and will never attempt to access, decrypt, or display their media or statistics.',
          'Deleted Content: Once a creator deletes a video or removes an account, our tools can no longer resolve the stream once third-party edge caches refresh.',
          'Friends-Only and Restricted Media: We cannot access posts shared exclusively with approved mutual followers or direct messages.',
          'No Circumvention: We never bypass, crack, or interfere with digital rights management (DRM), authentication tokens, or access controls.'
        ]
      },
      {
        heading: '3. Respect for Creator Privacy Choices',
        paragraphs: [
          'We firmly believe that creators retain ultimate control over their digital footprint. If you are a content creator and wish to prevent your public content from appearing in our web index, you have two simple options:'
        ],
        bullets: [
          'Switch your TikTok account settings to "Private" within the official TikTok application. This immediately blocks our service from retrieving your media.',
          'Submit an exclusion request to our compliance team under our Content Removal Policy to have your profile handle added to our internal blocklist.'
        ]
      },
      {
        heading: '4. Policy Contact',
        paragraphs: [
          'For questions regarding our public data handling or our technical indexing methodology, please reach out to legal@tikprofilesviewer.com.'
        ]
      }
    ]
  },
  'content-removal-policy': {
    title: 'Content Review & Removal Policy',
    subtitle: 'Clear, fair, and accessible procedures for content creators, rights owners, and individuals requesting content review or exclusion.',
    summary: 'We provide an open, transparent pathway for creators and individuals to request that their profiles, videos, or personal information be excluded from Tik Profiles Viewer search results and proxy indexes.',
    sections: [
      {
        heading: '1. Our Commitment to Fair Digital Removal',
        paragraphs: [
          'At Tik Profiles Viewer, we believe every creator and individual should have a clear, uncomplicated mechanism to control how their public information is reflected on third-party viewer portals.',
          'While our platform only indexes media that is already publicly available on the internet, we honor legitimate requests to exclude profiles or remove specific video identifiers from our search index.'
        ]
      },
      {
        heading: '2. Valid Grounds for Removal Requests',
        paragraphs: [
          'We review and process removal requests based on the following legitimate grounds:'
        ],
        bullets: [
          'Creator Profile Exclusion: If you are the owner of a public TikTok account and do not wish your profile to be searchable on our website.',
          'Copyright & Intellectual Property Infringement: Requests submitted by copyright owners pursuant to our Copyright & DMCA Policy.',
          'Privacy & Safety Concerns: Content involving minors, non-consensual media, inadvertent exposure of private addresses, phone numbers, or confidential personal data.',
          'Court Orders & Regulatory Injunctions: Formal orders issued by courts of competent jurisdiction or recognized regulatory authorities.'
        ]
      },
      {
        heading: '3. How to Submit a Removal Request',
        paragraphs: [
          'To expedite processing, please send your removal request to our compliance department at legal@tikprofilesviewer.com with the following details:'
        ],
        bullets: [
          'Your TikTok Username / Handle: (e.g., @yourcreatorname) or specific video URL(s).',
          'Verification of Ownership: Proof that you own or manage the account (such as sending the email from an address listed in the public bio, or confirming via a temporary unique phrase added to the profile bio).',
          'Reason for Request: A brief explanation of the nature of the request (e.g., personal privacy, profile exclusion, copyright infringement).',
          'Your Contact Information: Full name and contact email address for confirmation.'
        ]
      },
      {
        heading: '4. Processing Timelines and Resolution',
        paragraphs: [
          'Our team reviews removal requests on a daily basis. Most verified requests are processed within 24 to 48 business hours.',
          'Once approved, your username or video ID is added to our system exclusion blocklist. Future searches for that username on TikProfilesViewer.com will return an unavailable status, preventing the display of avatars, bio details, and video media streams.'
        ]
      },
      {
        heading: '5. Important Technical Clarification',
        paragraphs: [
          'Excluding your profile from Tik Profiles Viewer removes access via our website, but does not delete your videos or account from the underlying TikTok platform or other third-party websites. To permanently remove your content from the internet, you must delete the video or adjust your privacy settings directly on TikTok.'
        ]
      }
    ]
  },
  'acceptable-use-policy': {
    title: 'Acceptable Use Policy',
    subtitle: 'The rules of conduct, ethical standards, and prohibited technical practices required of all visitors on TikProfilesViewer.com.',
    summary: 'Tik Profiles Viewer is engineered for peaceful, respectful, and lawful exploration of public social media content. We strictly prohibit harassment, stalking, automated scraping, denial-of-service abuse, and malicious activities.',
    sections: [
      {
        heading: '1. Purpose and Scope',
        paragraphs: [
          'This Acceptable Use Policy ("AUP") governs all interactions with Tik Profiles Viewer (accessible at TikProfilesViewer.com). It applies to all users, automated systems, and network connections interacting with our web application, APIs, or infrastructure.',
          'Our mission is to maintain a safe, reliable, and respectful environment for creators and visitors alike. Violations of this policy may result in immediate IP banning, firewall rate-limiting, and referral to law enforcement where criminal misconduct occurs.'
        ]
      },
      {
        heading: '2. Prohibited Personal Conduct',
        paragraphs: [
          'When utilizing our Service, you agree that you will NOT engage in any of the following activities:'
        ],
        bullets: [
          'Harassment & Cyberbullying: Using our viewer to stalk, intimidate, bully, threaten, dox, or harass any individual creator or private person.',
          'Impersonation & Deception: Impersonating another person, brand, or entity, or falsely representing that you are authorized to act on behalf of a public figure or company.',
          'Dissemination of Hate Speech: Downloading, repackaging, or redistributing content to promote violence, discrimination, or hate speech against protected classes.',
          'Child Exploitation: Accessing, searching for, or attempting to distribute any material depicting the sexual exploitation or abuse of minors. We maintain zero tolerance and immediately report such incidents to NCMEC and international law enforcement.'
        ]
      },
      {
        heading: '3. Prohibited Technical and Infrastructure Activities',
        paragraphs: [
          'To safeguard the stability, speed, and availability of our web service for everyone, you agree that you will NOT:'
        ],
        bullets: [
          'Aggressive Scraping: Deploy headless browsers, automated bots, scrapers, spider scripts, or high-frequency automated tools to harvest media, usernames, or metrics without our explicit written permission.',
          'Denial-of-Service (DoS/DDoS): Flood our servers with excessive network requests, execute stress testing, or take any action that overburdens or disables our cloud infrastructure.',
          'Vulnerability Exploitation: Probe, scan, or test the vulnerability of our application, servers, proxies, or networks, or breach security or authentication controls.',
          'Reverse Engineering: Decompile, reverse engineer, or attempt to extract the source code of our backend proxy routing mechanisms.',
          'Ad-Fraud and Bot Traffic: Generate simulated impressions, fraudulent clicks, or artificial traffic across any advertising placements hosted on the Website.'
        ]
      },
      {
        heading: '4. Monitoring and Enforcement',
        paragraphs: [
          'We employ automated edge firewall filters, Web Application Firewalls (WAF), and heuristic anomaly detection to monitor traffic patterns for malicious behavior.',
          'We reserve the right to temporarily or permanently block any IP address, subnet, or autonomous system number (ASN) that demonstrates activity violating this policy, without prior warning or liability.'
        ]
      },
      {
        heading: '5. Reporting Abuse',
        paragraphs: [
          'If you observe any user or technical activity that violates this Acceptable Use Policy, please report it immediately to our security operations team at legal@tikprofilesviewer.com.'
        ]
      }
    ]
  },
  'security-policy': {
    title: 'Security Policy',
    subtitle: 'The technical standards, encryption protocols, and administrative controls implemented to protect our web platform and users.',
    summary: 'Tik Profiles Viewer prioritizes user security and system resilience. We employ modern HTTPS/TLS encryption, cloud DDoS mitigation, and regular security reviews to maintain a secure, safe environment.',
    sections: [
      {
        heading: '1. Security Overview',
        paragraphs: [
          'At Tik Profiles Viewer (accessible at TikProfilesViewer.com), we recognize the critical importance of cybersecurity in maintaining a trustworthy web utility. Our security strategy incorporates defense-in-depth principles, combining transport encryption, perimeter defense, and strict client-side data boundaries.'
        ]
      },
      {
        heading: '2. Transport Layer Encryption (HTTPS/TLS)',
        paragraphs: [
          'All network communications between your web browser and our application are encrypted using Transport Layer Security (TLS 1.3 / TLS 1.2) with modern, high-grade cryptographic cipher suites.',
          'We enforce HTTP Strict Transport Security (HSTS) to guarantee that your browser never transmits data over unencrypted HTTP channels, protecting against man-in-the-middle (MitM) eavesdropping, packet sniffing, and unauthorized network tampering.'
        ]
      },
      {
        heading: '3. Cloud Edge Defense & DDoS Mitigation',
        paragraphs: [
          'Our web application is protected by enterprise-tier edge security services that feature:'
        ],
        bullets: [
          'Distributed Denial-of-Service (DDoS) Shielding: Continuous network traffic analysis to absorb multi-gigabit volumetric attacks at edge points of presence.',
          'Web Application Firewall (WAF): Automated inspection of incoming HTTP payloads to intercept SQL injection, cross-site scripting (XSS), and malicious payload anomalies.',
          'Rate Limiting & Bot Management: Heuristic throttling mechanisms that protect backend compute nodes against brute-force automated scraping.'
        ]
      },
      {
        heading: '4. Minimal Attack Surface & Zero Personal Storage',
        paragraphs: [
          'The most effective method of safeguarding visitor data is simply not retaining it. By deliberate architectural design:'
        ],
        bullets: [
          'We do not operate user account databases that could be subject to credential-stuffing attacks or data leaks.',
          'We do not store passwords, financial accounts, or payment card details on our infrastructure.',
          'Client preferences are stored exclusively on your local device via standard browser LocalStorage.'
        ]
      },
      {
        heading: '5. Continuous Vulnerability Management & Patching',
        paragraphs: [
          'Our technical stack runs on modern Next.js and Node.js frameworks that receive automated dependency vulnerability scanning via automated continuous integration (CI) tools. Security patches, kernel updates, and runtime packages are regularly reviewed and deployed to mitigate emerging Common Vulnerabilities and Exposures (CVEs).'
        ]
      },
      {
        heading: '6. Responsible Vulnerability Disclosure',
        paragraphs: [
          'We welcome responsible security researchers who discover potential vulnerabilities in our website. If you identify a security issue, we ask that you adhere to responsible disclosure principles:'
        ],
        bullets: [
          'Email details of the finding to legal@tikprofilesviewer.com with the subject [Security Vulnerability Report].',
          'Provide reproducible steps, technical proofs-of-concept, and impacted endpoints.',
          'Allow us reasonable time to investigate, remediate, and patch the issue before making any public disclosures.',
          'Do not access or modify data belonging to other users or disrupt service operations during testing.'
        ]
      }
    ]
  },
  'service-availability-policy': {
    title: 'Service Availability Policy',
    subtitle: 'Information regarding technical uptime objectives, scheduled maintenance, and external dependency factors affecting availability.',
    summary: 'We strive to provide dependable, round-the-clock uptime. However, because our service relies on external public network endpoints, temporary interruptions or rate limits may occur beyond our direct control.',
    sections: [
      {
        heading: '1. Service Availability Objectives',
        paragraphs: [
          'At Tik Profiles Viewer (accessible at TikProfilesViewer.com), our engineering team strives to deliver consistent, uninterrupted access to our viewer tools and profile analytics 24 hours a day, 7 days a week, 365 days a year.',
          'We employ containerized cloud deployments and geographically distributed Content Delivery Networks to achieve high availability. However, as a free utility service, we do not provide a legally binding Service Level Agreement (SLA) with financial credits for downtime.'
        ]
      },
      {
        heading: '2. External Dependencies and Third-Party Limitations',
        paragraphs: [
          'Unlike closed platforms that generate all data internally, Tik Profiles Viewer depends on live public network connections to external social media platforms and third-party media delivery infrastructure. Consequently, service availability may be impacted by factors outside our direct operational control:'
        ],
        bullets: [
          'Third-Party API & Web Changes: Changes to TikTok\'s public web layout, response headers, video compression formats, or CDN endpoints may temporarily prevent our parser from resolving media streams until our engineers deploy compatible updates.',
          'Platform Rate Limiting & Anti-Bot Protections: During periods of heavy global traffic, third-party networks may temporarily throttle incoming requests from specific IP ranges, causing profile lookups to return delayed or unavailable responses.',
          'Regional Content Restrictions: Certain creator accounts or videos may be restricted by the platform in specific geographic jurisdictions due to local regulations or licensing agreements.'
        ]
      },
      {
        heading: '3. Scheduled Maintenance and System Upgrades',
        paragraphs: [
          'To ensure platform performance, security hardening, and database optimization, we periodically perform scheduled system maintenance.',
          'Whenever feasible, maintenance operations are scheduled during low-traffic hours and executed with rolling container deployments designed to eliminate or minimize noticeable downtime. In rare instances where brief maintenance windows are unavoidable, we work to restore full functionality as quickly as possible.'
        ]
      },
      {
        heading: '4. Force Majeure and Network Outages',
        paragraphs: [
          'We shall not be liable or responsible for any failure or delay in the performance of our service arising from events beyond our reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, labor disputes, telecommunications carrier failures, undersea cable breaks, power grid disruptions, widespread internet routing outages, or catastrophic cloud host failures.'
        ]
      },
      {
        heading: '5. Troubleshooting and Support',
        paragraphs: [
          'If you encounter an issue accessing a profile or downloading media:'
        ],
        bullets: [
          'Double-check that the creator username is spelled correctly and that the TikTok account is set to "Public".',
          'Wait a few moments and try your request again, as temporary platform rate limits frequently clear within minutes.',
          'If an issue persists across multiple accounts, report the technical glitch to our engineering team at support@tikprofilesviewer.com.'
        ]
      }
    ]
  }
};

const LEGAL_POLICIES_TRANSLATED: Partial<Record<LanguageCode, Record<string, LegalPolicyContent>>> = {
  ar: {
    'terms-of-service': {
      title: 'شروط الخدمة',
      subtitle: 'الشروط والأحكام الملزمة التي تحكم الوصول إلى واستخدام عارض ملفات تيك توك على TikProfilesViewer.com.',
      summary: 'من خلال الوصول إلى عارض ملفات تيك توك أو استخدامه، فإنك توافق على شروط الخدمة هذه. يتيح خدمتنا للمستخدمين فحص حسابات المبدعين العامة وتنزيل الوسائط العامة للاستخدام الشخصي غير التجاري.',
      sections: [
        {
          heading: '1. قبول الشروط',
          paragraphs: [
            'مرحباً بك في Tik Profiles Viewer (المتاح على TikProfilesViewer.com). تشكل شروط الخدمة هذه اتفاقية ملزمة قانوناً بينك وبين مشغلي الموقع.',
            'من خلال زيارة أو استخدام أي ميزة من ميزات الموقع، فإنك تقر صراحة بأنك قرأت وفهمت ووافقْت على الالتزام بشروط الخدمة هذه وسياسة الخصوصية الخاصة بنا.'
          ]
        },
        {
          heading: '2. وصف الخدمة',
          paragraphs: [
            'TikProfilesViewer.com هو منصة تعليمية وخدمية تعتمد على الويب وممكّنة للسماح للزوار بعرض المعلومات المتاحة للعامة من شبكة تيك توك الاجتماعية.'
          ],
          bullets: [
            'عرض الصور الرمزية للمبدعين وأسماؤهم والنبذات التعريفية وعدد المتابعين.',
            'بث محتوى الفيديو المنشور علناً دون تسجيل الدخول.',
            'حفظ ملفات الفيديو الأصلية عالية الدقة (MP4) والمقاطع الصوتية (MP3).'
          ]
        }
      ]
    },
    'privacy-policy': {
      title: 'سياسة الخصوصية',
      subtitle: 'كيف يحمي Tik Profiles Viewer خصوصيتك ويتعامل مع سجلات الخادم وملفات تعريف الارتباط.',
      summary: 'لا يطلب منك Tik Profiles Viewer التسجيل أو تسجيل الدخول أو مشاركة التفاصيل الشخصية. نحن نعالج فقط سجلات التقنية المؤقتة اللازمة لتشغيل الموقع بأمان.',
      sections: [
        {
          heading: '1. نظرة عامة',
          paragraphs: [
            'مرحباً بك في سياسة الخصوصية الخاصة بنا. لقد أنشأنا هذا الموقع لكي يتمكن أي شخص من عرض حسابات تيك توك العامة وتنزيل الوسائط دون إنشاء حساب.'
          ]
        },
        {
          heading: '2. المعلومات التي لا نجمعها',
          paragraphs: [
            'نحن لا نطلب تفاصيل الحساب الشخصي ولا نجمع أي بيانات تعريف شخصية.'
          ]
        }
      ]
    }
  }
};

export function getLocalizedLegalPolicy(slug: string, lang: LanguageCode): LegalPolicyContent {
  const defaultPolicy = LEGAL_POLICIES_EN[slug] || {
    title: 'Legal Policy',
    subtitle: 'Official legal terms and policy disclosures for TikProfilesViewer.com.',
    summary: 'Standard legal and operational terms governing usage of Tik Profiles Viewer.',
    sections: [
      {
        heading: '1. General Terms',
        paragraphs: [
          'This policy applies to all visitors and users of TikProfilesViewer.com. By using our website, you agree to these transparent operational guidelines.'
        ]
      }
    ]
  };

  if (lang === 'en') return defaultPolicy;

  const langMap = LEGAL_POLICIES_TRANSLATED[lang];
  if (langMap && langMap[slug]) {
    return langMap[slug]!;
  }

  return defaultPolicy;
}