// Hotel information for the AI demo call
export const omriqHotelInfo = {
  name: "Omriq Luxury Hotel & Resort",
  location: "San Francisco, California",
  address: "123 Market Street, San Francisco, CA 94105",
  phone: "+1 (415) 555-0100",
  
  amenities: [
    {
      category: "Dining",
      items: [
        "Fine dining restaurant 'The Omriq Bistro' - Modern California cuisine, open 6 PM - 11 PM",
        "Sky Lounge rooftop bar - Craft cocktails and panoramic city views, open 5 PM - 1 AM",
        "Breakfast buffet - Continental and hot breakfast, 6:30 AM - 10:30 AM daily",
        "24/7 room service - Full menu available around the clock",
        "Coffee bar - Artisan coffee and pastries, open 6 AM - 6 PM"
      ]
    },
    {
      category: "Wellness & Recreation",
      items: [
        "Infinity pool - Outdoor heated pool with city skyline views, open 6 AM - 10 PM",
        "Full-service spa - Massage, facials, and wellness treatments by appointment",
        "State-of-the-art fitness center - 24/7 access with premium equipment",
        "Yoga studio - Daily classes at 7 AM and 6 PM",
        "Sauna and steam room - Available 6 AM - 10 PM"
      ]
    },
    {
      category: "Business & Events",
      items: [
        "Business center - 24/7 access with printing, scanning, and meeting space",
        "Conference rooms - 5 rooms accommodating 10-200 guests",
        "Grand ballroom - Up to 500 guests for events",
        "High-speed WiFi - Complimentary throughout the property",
        "Executive lounge - Exclusive access for premium guests"
      ]
    },
    {
      category: "Guest Services",
      items: [
        "Concierge service - 24/7 assistance with reservations and recommendations",
        "Valet parking - Available 24/7",
        "Laundry and dry cleaning - Same-day service available",
        "Pet-friendly rooms - Welcome amenities for your furry friends",
        "Electric vehicle charging stations - Complimentary for guests"
      ]
    },
    {
      category: "Rooms & Suites",
      items: [
        "Luxury suites with city or bay views - 450+ square feet",
        "Executive rooms with workstations",
        "Presidential suite - 2,000 square feet with private terrace",
        "Smart room controls - Voice-activated lighting and temperature",
        "Premium bedding - 600-thread-count linens and memory foam mattresses"
      ]
    }
  ],

  nearbyAttractions: [
    "Fisherman's Wharf - 10 minute walk",
    "Alcatraz ferry - 5 minute walk",
    "Golden Gate Bridge - 15 minute drive",
    "Union Square shopping - 8 minute walk",
    "San Francisco Museum of Modern Art - 12 minute walk",
    "Ferry Building Marketplace - 3 minute walk"
  ],

  policies: {
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    earlyCheckIn: "Available based on availability, $50 fee before 12 PM",
    lateCheckOut: "Available until 2 PM for $75, subject to availability",
    cancellation: "Free cancellation up to 48 hours before arrival",
    pets: "Pets welcome with $75 per stay fee"
  },

  // AI script prompts
  aiGreeting: "Hello! Thank you for calling Omriq Luxury Hotel & Resort. This is your AI concierge assistant. How can I help you today?",
  
  aiInstructions: `You are a friendly, professional AI concierge for Omriq Luxury Hotel & Resort in San Francisco. 
    You help guests with information about hotel amenities, services, and local area.
    Be warm, helpful, and conversational. When asked about amenities, provide specific details from the hotel information.
    Keep responses concise but informative. Always offer to help with anything else.
    The hotel is a luxury property with extensive amenities including dining, wellness facilities, business services, and more.`
};

