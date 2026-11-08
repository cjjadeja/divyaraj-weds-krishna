// config.js
const WEDDING_CONFIG = {
  // Data Source Mode: "tsv" (reads local guests.tsv) or "google_sheet" (uses Apps Script URL below)
  dataSource: "tsv",
  tsvFilePath: "./guests.tsv",

  // Paste your deployed Google Apps Script Web App URL here (used for RSVP POST and optional Sheet GET)
  googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycbwX0oGS1fmIA7qe1iZ0d2cfDAGanV3KaAUZdN-qJxF3oZF06JOU-3DV4GS6_Y5nVNWE/exec",
  // https://script.google.com/macros/s/AKfycbwX0oGS1fmIA7qe1iZ0d2cfDAGanV3KaAUZdN-qJxF3oZF06JOU-3DV4GS6_Y5nVNWE/exec
  // AKfycbwX0oGS1fmIA7qe1iZ0d2cfDAGanV3KaAUZdN-qJxF3oZF06JOU-3DV4GS6_Y5nVNWE

  // Optional background instrumental audio (MP3 path or URL)
  // backgroundMusicUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
  backgroundMusicUrl: "./resources/bgm.mp3",

  couple: {
    monogram: "D & K",
    hashtag: "#DevKiKrishna",
    groom: {
      name: "Divyarajsinh J. Jadeja",
      shortName: "Divyarajsinh",
      parents: "Son of Smt. Nileshwariba Jayeshsinh Jadeja <br> <span class='text-amber-300/80 font-serif italic text-sm py-1 block'>&</span> Jayeshsinh Bharatsinhji Jadeja"
    },
    bride: {
      name: "Krishnaba Rana",
      shortName: "Krishnaba",
      parents: "Daughter of Smt. Jyotiba Mahipalsinh Rana <br> <span class='text-amber-300/80 font-serif italic text-sm py-1 block'>&</span> Mahipalsinh Jasubha Rana"
    }
  },

  weddingDate: {
    displayDate: "28th January 2027",
    dayOfWeek: "Thursday",
    muhuratTime: "7:30 PM Onwards",
    // ISO string in IST (+05:30) for the live countdown and calendar invite
    isoStart: "2027-01-28T19:30:00+05:30",
    isoEnd: "2027-01-28T23:30:00+05:30",
    calendarTitle: "Divyarajsinh & Krishnaba's Wedding Ceremony",
    calendarDescription: "Join us to celebrate the royal union of Divyarajsinh J. Jadeja & Krishnaba Rana.",
    calendarLocation: "Krushnakunj Mandapam, Sidsar Budhel Road, Bhavnagar, Gujarat"
  },

  events: [
    {
      id: "mandap_mahurat",
      title: "Mandap Mahurat",
      subtitle: "Auspicious Beginning • Followed by Lunch",
      date: "26th January 2027",
      time: "Morning Muhurat • Followed by Lunch",
      venueName: "Shraddha",
      address: "Sitvan Society, Hapa Road, Jamnagar",
      mapUrl: "https://maps.google.com/?q=Sitvan+Society+Hapa+Road+Jamnagar",
      icon: "🪔"
    },
    {
      id: "sangeet",
      title: "Sangeet Gala",
      subtitle: "An Evening of Melodies • With Dinner",
      date: "27th January 2027",
      time: "7:30 PM Onwards • Followed by Dinner",
      venueName: "Krushnakunj Mandapam",
      address: "Sidsar Budhel Road, Bhavnagar",
      mapUrl: "https://maps.google.com/?q=Krushnakunj+Mandapam+Sidsar+Budhel+Road+Bhavnagar",
      icon: "🎶"
    },
    {
      id: "haldi",
      title: "Haldi Utsav",
      subtitle: "Hues of Marigold & Turmeric • Followed by Lunch",
      date: "28th January 2027",
      time: "10:00 AM Onwards • Followed by Lunch",
      venueName: "Krushnakunj Mandapam",
      address: "Sidsar Budhel Road, Bhavnagar",
      mapUrl: "https://maps.google.com/?q=Krushnakunj+Mandapam+Sidsar+Budhel+Road+Bhavnagar",
      icon: "🌼"
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      subtitle: "Hasta Melap • Followed by Royal Dinner",
      date: "28th January 2027",
      time: "Muhurat at 7:30 PM • Followed by Dinner",
      venueName: "Krushnakunj Mandapam",
      address: "Sidsar Budhel Road, Bhavnagar",
      mapUrl: "https://maps.google.com/?q=Krushnakunj+Mandapam+Sidsar+Budhel+Road+Bhavnagar",
      icon: "👑"
    }
  ],

  accommodation: {
    title: "Royal Hospitality & Stay",
    subtitle: "We have arranged your comfortable stay in Bhavnagar",
    hotelName: "Iscon - The Fern Resort & Spa",
    address: "Bhavnagar, Gujarat",
    // checkInNote: "Kindly present your invitation code at the hospitality desk upon arrival.",
    mapUrl: "https://maps.google.com/?q=Iscon+The+Fern+Resort+and+Spa+Bhavnagar"
  },

  gallery: [
    {
      url: "./resources/1.jpeg?auto=format&fit=crop&w=900&q=80",
      caption: "The Beginning"
    },
    {
      url: "./resources/2.jpeg?auto=format&fit=crop&w=900&q=80",
      caption: "Written in the Stars"
    },
    {
      url: "./resources/3.jpeg?auto=format&fit=crop&w=900&q=80",
      caption: "Two Souls, One Journey"
    },
    {
      url: "./resources/4.jpeg?auto=format&fit=crop&w=900&q=80",
      caption: "Celebrating Forever"
    }
  ],

  hostsFooter: {
    complimentsFrom: "With Best Compliments From",
    familyLine: "Jayendrasinh Bharatsinhji Jadeja <br> <span class='text-amber-300/80 font-serif italic text-sm py-1 block'>&</span> Nileshwariba Jayendrasinh Jadeja",
    secondaryLine: "Entire Jadeja Parivar"
  },

  // Built-in fallback rows so you can test ?code=roy01 or ?code=gen1 immediately
  fallbackGuests: [
    { code: "roy01", names: "Darbarsaheb Vikramadityasinhji & Family", mobile: "9876543210", pax: 4, accommodation: "Yes" },
    { code: "roy02", names: "Shri Rajendrasinh Zala & Smt. Padminiba", mobile: "9876543211", pax: 2, accommodation: "No" },
    { code: "gen1", names: "", mobile: "", pax: 1, accommodation: "No" },
    { code: "gen2", names: "", mobile: "", pax: 2, accommodation: "Yes" },
    { code: "gen3", names: "", mobile: "", pax: 4, accommodation: "No" }
  ]
};