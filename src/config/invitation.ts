/**
 * Single source of truth for Archie Jain & Lakshya Jain's wedding invitation.
 */

export interface EventItem {
  time: string;
  title: string;
  note?: string;
  dressCode?: string;
  entryTime?: string;
}

export interface DaySchedule {
  date: string;
  dayName: string;
  title: string;
  events: EventItem[];
}

export const invitation = {
  couple: {
    bride: "Archie Jain",
    brideShort: "Archie",
    brideParents: "D/o Smt. Sunita Jain & Shri Umesh Jain",
    groom: "Lakshya Jain",
    groomShort: "Lakshya",
    groomParents: "S/o Smt. Reena Jain & Shri Sandeep Jain",
    hashtag: "#ArchieWedsLakshya",
  },
  familyElders: {
    title: "Invited With Love By",
    names: "Shri Ramesh Chandra Jain & Shreemati Saroj Jain",
  },
  invite: {
    headerInvocation: "॥ श्री महावीराय नमः ॥",
    kicker: "Together with their families",
    line: "cordially invite you to celebrate the joyous wedding of their children",
  },
  event: {
    title: "The Wedding Celebrations of Archie & Lakshya",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2026-11-14T08:00:00+05:30",
    endsAt: "2026-11-15T22:00:00+05:30",
    dateLabel: "14 . 11 . 2026 — 15 . 11 . 2026",
    dayLabel: "Saturday & Sunday",
    timeLabel: "Celebrations begin 8:00 AM",
    dressCode: "Festive Indian Attire",
    note: "Join us in showering blessings upon the couple",
  },
  schedule: [
    {
      date: "14 November 2026",
      dayName: "Saturday",
      title: "Day 1 — Pre-Wedding Celebrations",
      events: [
        {
          time: "08:00 AM",
          title: "Dev Darshan",
          note: "A auspicious beginning seeking divine blessings",
        },
        {
          time: "10:00 AM",
          title: "Myra",
          note: "Followed with Breakfast",
        },
        {
          time: "12:00 PM",
          title: "Haldi",
          dressCode: "Yellow Attire",
          note: "Followed with Dinner",
        },
        {
          time: "05:00 PM",
          title: "Mahila Sangeet",
          entryTime: "Bride & Groom Grand Entry at 7:00 PM",
          note: "Followed with Dinner",
        },
      ],
    },
    {
      date: "15 November 2026",
      dayName: "Sunday",
      title: "Day 2 — The Grand Wedding",
      events: [
        {
          time: "10:00 AM",
          title: "Baarat",
          note: "Breakfast served before Baarat arrival",
        },
        {
          time: "12:00 PM",
          title: "Varmala",
          note: "Followed with Lunch",
        },
        {
          time: "01:30 PM",
          title: "Phere",
          note: "Followed with High Tea",
        },
        {
          time: "05:00 PM",
          title: "Reception",
          entryTime: "Bride & Groom Grand Entry at 6:30 PM",
          note: "Followed with Dinner",
        },
      ],
    },
  ] as DaySchedule[],
  venue: {
    name: "Wedding Celebrations Venue",
    address: "Tap below to view full venue directions on Google Maps",
    mapsQuery: "Archie and Lakshya Wedding Venue",
    url: "https://share.google/r5kyQlp0lJqvumKx6",
    lat: 26.9124,
    lng: 75.7873,
  },
  story: [
    {
      year: "2024",
      title: "Two Souls Meet",
      text: "A beautiful beginning filled with laughter, shared values, and mutual respect.",
      image: "couple-1",
    },
    {
      year: "2025",
      title: "Bound by Love",
      text: "Growing closer with every shared moment and creating memories to cherish forever.",
      image: "couple-2",
    },
    {
      year: "2026",
      title: "Together Forever",
      text: "Stepping into a lifetime of happiness, togetherness, and sacred union.",
      image: "couple-3",
    },
  ],
  blessing: {
    motto: "परस्परोपग्रहो जीवानाम्",
    line: "Souls render service to one another.",
    translation: "Two loving souls, blessed by divine wisdom and united in eternal devotion.",
    source: "With the divine blessings of Lord Mahavira & Elders",
  },
  footer: {
    families: "With love & warm wishes from Jain & Extended Families",
    contacts: [],
  },
  meta: {
    title: "Archie & Lakshya — Wedding Celebrations",
    description:
      "Archie Jain & Lakshya Jain cordially invite you to celebrate their wedding on 14–15 November 2026.",
    url: "https://archie-weds-lakshya.invitingyou.top/",
    image: "https://archie-weds-lakshya.invitingyou.top/og-image.jpg",
    siteName: "Archie & Lakshya Wedding",
  },
} as const;

export type Invitation = typeof invitation;
