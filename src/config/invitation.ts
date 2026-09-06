/**
 * Single source of truth for Lakshya Jain & Archie Jain's wedding invitation.
 */

export interface EventItem {
  time: string;
  title: string;
  note?: string;
  dressCode?: string;
  entryTime?: string;
  icon?: "food" | "sparkles" | "none";
}

export interface DaySchedule {
  date: string;
  dayName: string;
  title: string;
  events: EventItem[];
}

export const invitation = {
  couple: {
    groom: "Lakshya Jain",
    groomShort: "Lakshya",
    groomParents: "S/o Shri Sandeep Jain & Smt. Reena Jain",
    bride: "Archie Jain",
    brideShort: "Archie",
    brideParents: "D/o Shri Umesh Jain & Smt. Sunita Jain",
    hashtag: "#LakshyaWedsArchie",
  },
  familyElders: {
    title: "Invited With Love By",
    names: "Shri Ramesh Chandra Jain & Shreemati Saroj Jain",
    parents: "Shri Sandeep Jain & Smt. Reena Jain",
    others: "Dr. Paryul Jain",
  },
  invite: {
    headerInvocation: "॥ श्री महावीराय नमः ॥",
    kicker: "Together with their families",
    line: "cordially invite you to celebrate the joyous wedding of their children",
  },
  event: {
    title: "The Wedding Celebrations of Lakshya & Archie",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2026-11-14T08:00:00+05:30",
    endsAt: "2026-11-15T22:00:00+05:30",
    dateLabel: "14 . 11 . 2026 — 15 . 11 . 2026",
    dayLabel: "",
    timeLabel: "",
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
          note: "An auspicious beginning seeking divine blessings",
        },
        {
          time: "10:00 AM",
          title: "Myra",
        },
        {
          time: "12:00 PM",
          title: "Haldi",
          dressCode: "Yellow Attire",
        },
        {
          time: "05:00 PM",
          title: "Mahila Sangeet",
          entryTime: "Bride & Groom Grand Entry at 7:00 PM",
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
        },
        {
          time: "11:30 AM",
          title: "Varmala",
        },
        {
          time: "01:30 PM",
          title: "Phere",
        },
        {
          time: "05:00 PM",
          title: "Reception",
          entryTime: "Bride & Groom Grand Entry at 6:30 PM",
        },
      ],
    },
  ] as DaySchedule[],
  venue: {
    name: "Wedding Celebrations Venue",
    address: "Tap below to view full venue directions on Google Maps",
    mapsQuery: "Lakshya and Archie Wedding Venue",
    url: "https://share.google/r5kyQlp0lJqvumKx6",
    lat: 26.9124,
    lng: 75.7873,
  },
  story: [
    {
      year: "",
      title: "Two Souls Meet",
      text: "A beautiful beginning filled with laughter, shared values, and mutual respect.",
      image: "couple-1",
    },
    {
      year: "",
      title: "Bound by Love",
      text: "Growing closer with every shared moment and creating memories to cherish forever.",
      image: "couple-2",
    },
    {
      year: "",
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
    families: "With love & warm wishes from Jain Family",
    contacts: [],
  },
  meta: {
    title: "Lakshya & Archie — Wedding Celebrations",
    description:
      "Lakshya Jain & Archie Jain cordially invite you to celebrate their wedding on 14–15 November 2026.",
    url: "https://lakshya-weds-archie.invitingyou.top/",
    image: "https://lakshya-weds-archie.invitingyou.top/og-image.jpg",
    siteName: "Lakshya & Archie Wedding",
  },
} as const;

export type Invitation = typeof invitation;
