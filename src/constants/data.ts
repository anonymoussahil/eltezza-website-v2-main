import {
  BrandsData,
  BtsData,
  CarouselData,
  CreativeHeroImgData,
  CreativeHeroVideoData,
  CreativeWorkData,
  FeaturedReviewData,
  TeamData,
  TestimonialsData,
} from "@/types";

const distributionName = "/images/";

// HOME PAGE DATA
export const landingPageData = {
  design: [
    {
      id: "1",
      src: distributionName + "Brandwork/coffee.png",
      badge: "Social Media",
      isVideo: false,
    },
    {
      id: "2", // Updated duplicate from "1" to "2"
      src: distributionName + "Brandwork/restaurant.mp4",
      badge: "Reels",
      thumbnail:
        distributionName +
        "/Landing+Page/Design/Ikaika_Motivational_Reel_k6l7dy_THUMBNAIL.jpg",
      isVideo: true,
    },
    {
      id: "3",
      src:
        distributionName +
        "Brandwork/mac.png",
      badge: "Brand Mockups",
      isVideo: false,
    },
    {
      id: "4",
      src:
        distributionName +
        "Brandwork/carousel.png",
      badge: "Brand Mockups",
      isVideo: false,
    }
    
  ] as Array<CarouselData>,
  creative: [
    {
      id: "8",
      src: distributionName + "/Landing+Page/Creative/Copy_of_V_mjlm08.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "9",
      src:
        distributionName +
        "/Landing+Page/Creative/Rinse_Content_Final_Version_gk9vl8.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Rinse_Content_Final_Version_gk9vl8_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "10",
      src:
        distributionName +
        "/Landing+Page/Creative/Copy_of_No_Ugly_2_vd5xg1.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "11",
      src:
        distributionName +
        "/Landing+Page/Creative/REVISED_Remarkable_Video_Wide_ozrqog.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/REVISED_Remarkable_Video_Wide_ozrqog_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "12",
      src:
        distributionName + "/Landing+Page/Creative/Copy_of_Jarrah_pujknc.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },

    {
      id: "13",
      src:
        distributionName + "/Landing+Page/Creative/Redbull_Zoomed_gfb6hv.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Redbull_Zoomed_gfb6hv_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "14",
      src:
        distributionName +
        "/Landing+Page/Creative/Greenhill_Seltzers_1_bouwy7.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "15",
      src:
        distributionName + "/Landing+Page/Creative/Kiwiblue_Zoomed_jtmk4o.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Kiwiblue_Zoomed_jtmk4o_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "16",
      src:
        distributionName +
        "/Landing+Page/Creative/NEW_PEAQ_Launch_Video_1_vcfcud.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/NEW_PEAQ_Launch_Video_1_vcfcud_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "17",
      src:
        distributionName +
        "/Landing+Page/Creative/EatKinda_-_Freezer_1.5x_vnwdlp.jpg",
      badge: "Advertising Imagery",
      isVideo: false,
    },
    {
      id: "18",
      src: distributionName + "/Landing+Page/Creative/Honey_Soy_1x1_zptjyf.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Honey_Soy_1x1_zptjyf_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "19",
      src:
        distributionName +
        "/Landing+Page/Creative/Goju_Content_Reel_dhbmn7.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Goju_Content_Reel_dhbmn7_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
    {
      id: "20",
      src:
        distributionName + "/Landing+Page/Creative/Nev_Reel_Final_rdt49z.mp4",
      thumbnail:
        distributionName +
        "/Landing+Page/Creative/Nev_Reel_Final_rdt49z_THUMBNAIL.jpg",
      badge: "Promotional Video",
      isVideo: true,
    },
  ] as Array<CarouselData>,
};

// DESIGN PAGE DATA
export const designMarqueeLeftData = [
  // Re-assigned sequential ids 1 to 15
  {
    id: "1",
    src: distributionName + "Work/001.png",
    badge: "Furniture",
    isVideo: false,
  },
  {
    id: "2",
    src: distributionName + "Work/002.png",
    badge: "Real Estate",
    isVideo: false,
  },
  {
    id: "3",
    src: distributionName + "Work/003.png",
    badge: "FMCG",
    isVideo: false,
  },
  {
    id: "4",
    src: distributionName + "Work/seerat.mp4",
    badge: "Fashion",
    isVideo: true,
    alt: "Seerat Fashion Store",
    thumbnail: distributionName + "Work/seerat.png", 
  },   
  {
    id: "5",
    src: distributionName + "Work/1.jpeg",
    badge: "Travel",
    isVideo: false,
  },
  {
    id: "6",
    src: distributionName + "Work/2.jpeg",
    badge: "Travel",
    isVideo: false,
  },
  {
    id: "7",
    src: distributionName + "Work/3.jpeg",
    badge: "Travel",
    isVideo: false,
  },
  {
    id: "8",
    src: distributionName + "Work/10.jpeg",
    badge: "Travel",
    isVideo: false,
  },
  {
    id: "9",
    src: distributionName + "Work/11.jpeg",
    badge: "Travel",
    isVideo: false,
  },
  {
    id: "10",
    src: distributionName + "Work/4.jpeg",
    badge: "Real Estate",
    isVideo: false,
  },
  {
    id: "11",
    src: distributionName + "Work/5.jpeg",
    badge: "Real Estate",
    isVideo: false,
  },
  {
    id: "12",
    src: distributionName + "Work/6.jpeg",
    badge: "Real Estate",
    isVideo: false,
  },
  {
    id: "13",
    src: distributionName + "Work/7.jpeg",
    badge: "Real Estate",
    isVideo: false,
  },
  {
    id: "14",
    src: distributionName + "Work/8.jpeg",
    badge: "Real Estate",
    isVideo: false,
  },
  {
    id: "15",
    src: distributionName + "Work/9.jpeg",
    badge: "Real Estate",
    isVideo: false,
  }  
] satisfies Array<CarouselData>;

export const designMarqueeRightData = [
  // Re-assigned sequential ids 1 to 5
  {
    id: "1",
    src: distributionName + "Work/Education/2.png",
    badge: "Education",
    isVideo: false,
  },
  {
    id: "2",
    src: distributionName + "Work/001.png",
    badge: "Furniture",
    isVideo: false,
  },
  {
    id: "3",
    src: distributionName + "Work/002.png",
    badge: "Real Estate",
    isVideo: false,
  },
  {
    id: "4",
    src: distributionName + "Work/003.png",
    badge: "FMCG",
    isVideo: false,
  },
  {
    id: "5",
    src: distributionName + "Work/seerat.mp4",
    badge: "Fashion",
    isVideo: true,
    alt: "Seerat Fashion Store",
    thumbnail:
      distributionName +
      "Work/seerat.png"  
  }  
] satisfies Array<CarouselData>;

export const designCarouselData = [
  {
    id: "1",
    src: distributionName + "Brandwork/coffee.png",
    badge: "Social Media",
    alt: "Coffee Ad by KeyOn Media",
    isVideo: false,
  },
  {
    id: "2",
    src: distributionName + "Brandwork/restaurant.mp4",
    badge: "Reels",
    alt: "Restaurant Ad by KeyOn Media",
    thumbnail:
      distributionName +
      "Brandwork/restaurant.png",
    isVideo: true,
  },
  {
    id: "3",
    alt: "Mockup Ads byKeyOn Media",
    src:
      distributionName +
      "Brandwork/mac.jpg",
    badge: "Brand Mockups",
    isVideo: false,
  },
  {
    id: "4",
    alt: "Mockup Ads by KeyOn Media",
    src:
      distributionName +
      "Brandwork/skincare.png",
    badge: "Social Media",
    isVideo: false,
  },
  {
    id: "5",
    alt: "Mockup Ads by KeyOn Media",
    src:
      distributionName +
      "Brandwork/carousel.jpg",
    badge: "Brand Mockups",
    isVideo: false,
  },
  {
    id: "6",
    alt: "Mockup Ads by KeyOn Media",
    src:
      distributionName +
      "Brandwork/newspaper.jpg",
    badge: "Brand Mockups",
    isVideo: false,
  }
] satisfies Array<CarouselData>;

// CREATIVE PAGE DATA
export const creativeHeroData = {
  video: [
    {
      id: "1",
      src:
        distributionName +
        "/Creative/Hero/video/Eatkinda_Website_Video_dqohbd.mp4",
      thumbnail:
        distributionName + "/Creative/Hero/video/EatKinda_TN_yclerg.jpg",
    },
  ] satisfies Array<CreativeHeroVideoData>,
  images: [
    {
      id: "1",
      src:
        distributionName + "/Creative/Hero/EatKinda_-_Freezer_1.5x_vnwdlp.jpg",
      alt: "EatKinda Freezer",
    },
    {
      id: "2",
      src:
        distributionName +
        "/Creative/Hero/EatKinda_-_Available_Woowlorths_Final_1.5x_zfnn1v.jpg",
      alt: "EatKinda available at Woolworths",
    },
  ] satisfies Array<CreativeHeroImgData>,
};

export const creativeWorkData = [
  {
    id: "1",
    srcHighQuality:
      distributionName +
      "/Creative/Work/RemarkableCream/REVISED_Remarkable_Video_Wide_ozrqog.mp4",
    src:
      distributionName +
      "/Creative/Work/RemarkableCream/REVISED_Remarkable_Video_Wide_ozrqog_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/RemarkableCream/Remarkable_Cream_TN_ouqltl.jpg",
    size: "large",
    client: "Remarkable Cream",
    campaign: "Crafted by nature, perfected by tradition",
  },
  {
    id: "2",
    srcHighQuality:
      distributionName + "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o.mp4",
    src:
      distributionName +
      "/Creative/Work/KiwiBlue/Kiwiblue_Zoomed_jtmk4o_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/KiwiBlue/Kiwi_Blue_NT_qutbbd.jpg",
    size: "small",
    client: "Kiwi Blue",
    campaign: "Out of the blue",
  },
  {
    id: "3",
    srcHighQuality:
      distributionName + "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7.mp4",
    src:
      distributionName +
      "/Creative/Work/Goju/Goju_Content_Reel_dhbmn7_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Goju/Go_Ju_TN_irpemp.jpg",
    size: "small",
    client: "Goju",
    campaign: "Need some pep in your step?",
  },
  {
    id: "4",
    srcHighQuality:
      distributionName +
      "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5.mp4",
    src:
      distributionName +
      "/Creative/Work/Innerbloom/Innerbloom_Zoomed_kozcl5_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Innerbloom/Innerbloom_TN_r25fo4.jpg",
    size: "small",
    client: "Innerbloom",
    campaign: "My only one",
  },
  {
    id: "5",
    srcHighQuality:
      distributionName +
      "/Creative/Work/PEAQLaunch/NEW_PEAQ_Launch_Video_1_vcfcud.mp4",
    src:
      distributionName +
      "/Creative/Work/PEAQLaunch/NEW_PEAQ_Launch_Video_1_vcfcud_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/PEAQLaunch/PEAQ_ROCKET_rqw8an.jpg",
    size: "large",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    id: "6",
    srcHighQuality:
      distributionName + "/Creative/Work/PEAQBobby/Reel_Bobby_jnsrcg.mp4",
    src:
      distributionName +
      "/Creative/Work/PEAQBobby/Reel_Bobby_jnsrcg_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/PEAQBobby/Bobby_Reaching_lzw3ry.jpg",
    size: "small",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    id: "7",
    srcHighQuality:
      distributionName + "/Creative/Work/PEAQAlex/AP_Reel_nhvysa.mp4",
    src: distributionName + "/Creative/Work/PEAQAlex/AP_Reel_nhvysa_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/PEAQAlex/Alex_P_-_Thumbnail_sgrabf.jpg",
    size: "small",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    id: "8",
    srcHighQuality:
      distributionName + "/Creative/Work/PEAQNeve/Nev_Reel_Final_rdt49z.mp4",
    src:
      distributionName +
      "/Creative/Work/PEAQNeve/Nev_Reel_Final_rdt49z_LOWRES.mp4",
    thumbnail:
      distributionName +
      "/Creative/Work/PEAQNeve/Neve_-_Website_Thumbnail_o46hwp.jpg",
    size: "small",
    client: "PEAQ",
    campaign: "One tap away",
  },
  {
    id: "9",
    srcHighQuality:
      distributionName +
      "/Creative/Work/Eatkinda/Eatkinda_Website_Video_dqohbd.mp4",
    src:
      distributionName +
      "/Creative/Work/Eatkinda/Eatkinda_Website_Video_dqohbd_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Eatkinda/EatKinda_TN_yclerg.jpg",
    size: "large",
    client: "Eatkinda",
    campaign: "Kinda different, totally delicious",
  },

  {
    id: "10",
    srcHighQuality:
      distributionName + "/Creative/Work/HoneySoy/Honey_Soy_1x1_zptjyf.mp4",
    src:
      distributionName +
      "/Creative/Work/HoneySoy/Honey_Soy_1x1_zptjyf_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/HoneySoy/Honey_Soy_TN_kscrr3.jpg",
    size: "medium",
    client: "Black Pearl",
    campaign: "Glazing perfection",
  },
  {
    id: "11",
    srcHighQuality:
      distributionName + "/Creative/Work/SnowyG/Snowy_G_1x1_fxji0j.mp4",
    src:
      distributionName + "/Creative/Work/SnowyG/Snowy_G_1x1_fxji0j_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/SnowyG/Snowy_G_TN_miougx.jpg",
    size: "medium",
    client: "Black Pearl",
    campaign: "It goes beyond the mayo",
  },
  {
    id: "12",
    srcHighQuality:
      distributionName +
      "/Creative/Work/Rinse/Rinse_Content_Final_Version_gk9vl8.mp4",
    src:
      distributionName +
      "/Creative/Work/Rinse/Rinse_Content_Final_Version_gk9vl8_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Rinse/Rinse_TN_nuwajl.jpg",
    size: "large",
    client: "Rinse Vodka",
    campaign: "Because one is not enough",
  },
  {
    id: "13",
    srcHighQuality:
      distributionName + "/Creative/Work/Redbull/Redbull_Zoomed_gfb6hv.mp4",
    src:
      distributionName +
      "/Creative/Work/Redbull/Redbull_Zoomed_gfb6hv_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Redbull/Redbull_TN_eqmilw.jpg",
    size: "small",
    client: "Red Bull",
    campaign: "The new wings in town",
  },
  {
    id: "14",
    srcHighQuality:
      distributionName + "/Creative/Work/Charlies/Charlie_Zoomed_nuafy8.mp4",
    src:
      distributionName +
      "/Creative/Work/Charlies/Charlie_Zoomed_nuafy8_LOWRES.mp4",
    thumbnail:
      distributionName + "/Creative/Work/Charlies/Charlies_TN_xbihz7.jpg",
    size: "small",
    client: "Charlie's",
    campaign: "Shake up the good stuff!",
  },
  {
    id: "15",
    srcHighQuality:
      distributionName + "/Creative/Work/Live/Live_Content_Reel_npbkph.mp4",
    src:
      distributionName +
      "/Creative/Work/Live/Live_Content_Reel_npbkph_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Live/Live_TN_zvkmkn.jpg",
    size: "small",
    client: "Live+",
    campaign: "Electrified living",
  },
  {
    id: "16",
    srcHighQuality:
      distributionName + "/Creative/Work/Kmart/KMART_KWTA_ultgma.mp4",
    src: distributionName + "/Creative/Work/Kmart/KMART_KWTA_ultgma.mp4",
    thumbnail: distributionName + "/Creative/Work/Kmart/KMART_TN_fnsr1v.jpg",
    size: "medium",
    client: "KMart",
    campaign: "Wishing tree appeal",
  },
  {
    id: "17",
    srcHighQuality:
      distributionName + "/Creative/Work/Ball/Ball_Animation_1x1_yp7ku1.mp4",
    src:
      distributionName +
      "/Creative/Work/Ball/Ball_Animation_1x1_yp7ku1_LOWRES.mp4",
    thumbnail: distributionName + "/Creative/Work/Ball/3D_Ball_TN_nskugx.jpg",
    size: "medium",
    client: "3D Ball",
    campaign: "Infinite alignment",
  },
] satisfies Array<CreativeWorkData>;

export const testimonialsData = [
  // Modern Furnitures Reviews for KeyOn Media Digital Services
  {
    id: "1",
    review:
      "I recently collaborated with KeyOn Media for our digital overhaul, and their expertise in website design and social media strategy is simply remarkable, yaar. Our online presence has been completely transformed.",
    name: "Rajesh Kumar",
    role: "Owner, Modern Furnitures",
  },
  {
    id: "2",
    review:
      "KeyOn Media has redefined our digital strategy. Their team is highly responsive and innovative, ensuring every detail aligns perfectly with our brand. The new website and targeted social campaigns have driven impressive results.",
    name: "Suman Devi",
    role: "Marketing Head, Modern Furnitures",
  },
  {
    id: "3",
    review:
      "Working with KeyOn Media was an absolute pleasure. Their digital services—from creative content to effective online marketing—ensured our message reached the right audience. Absolutely recommended!",
    name: "Amit Sharma",
    role: "Business Development Manager, Modern Furnitures",
  },
  // Seerat NX Fashion Reviews for KeyOn Media Digital Services
  {
    id: "4",
    review:
      "KeyOn Media provided an excellent digital makeover for Seerat NX Fashion. The revamped website is sleek and user-friendly, and our social media engagement has seen a significant boost.",
    name: "Priya Singh",
    role: "Creative Director, Seerat NX Fashion",
  },
  {
    id: "5",
    review:
      "We are extremely satisfied with KeyOn Media's digital services. Their innovative approach and attention to detail have elevated our brand’s online presence. Truly a game changer for our business!",
    name: "Anil Verma",
    role: "Brand Manager, Seerat NX Fashion",
  },
  {
    id: "6",
    review:
      "From strategy to execution, KeyOn Media delivered exceptional digital solutions for our fashion brand. Their commitment and expertise are evident in every aspect of their work. Excellent service, indeed!",
    name: "Neha Mehta",
    role: "Digital Marketing Lead, Seerat NX Fashion",
  },
] satisfies Array<TestimonialsData>;

// OTHER DATA FOR DESIGN & CREATIVE PAGES
export const featuredReviewData = {
  design: {
    review:
      "Keyon Media's strategic approach to our digital and print campaigns significantly boosted our brand visibility. Their understanding of the real estate market and ability to create compelling visuals for our projects was exceptional.",
    name: "Surya Joshi, Director, Royale Kotak",
    src: distributionName + "Brandwork/director.jpeg",
  } satisfies FeaturedReviewData,
  creative: {
    review:
      "We engaged Eltezza for the animation of a corporate project for one of Australia's well-known brands, and it was an absolute pleasure. They comprehended the brief exceptionally well and executed it with precision. The client was extremely satisfied!",
    name: "Arielle Thomas, CinemaThom",
    src: distributionName + "/Creative/Feat_Review/Arielle_hwmabn.png",
  } satisfies FeaturedReviewData,
};

export const brandsData = {
  design: [
    {
      "id": "1",
      "brand": "Bank Edge",
      "src": "/images/BrandLogo/Bank_Edge.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "2",
      "brand": "Bharat Co-operative Bank",
      "src": "/images/BrandLogo/Bharat_Bank.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "3",
      "brand": "Cat King",
      "src": "/images/BrandLogo/Catking.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "4",
      "brand": "Cheeliza",
      "src": "/images/BrandLogo/cheeliza.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "5",
      "brand": "Club Mahindra",
      "src": "/images/BrandLogo/Club_Mahindra.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "6",
      "brand": "Cushman & Wakefield",
      "src": "/images/BrandLogo/Cushman.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "8",
      "brand": "Eagle Home",
      "src": "/images/BrandLogo/Eagle_Home.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "9",
      "brand": "Honda BigWing",
      "src": "/images/BrandLogo/Honda.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "10",
      "brand": "IDBI Bank",
      "src": "/images/BrandLogo/IDBI_Bank.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "11",
      "brand": "IFBI",
      "src": "/images/BrandLogo/IFBI.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "12",
      "brand": "Kotak Builders",
      "src": "/images/BrandLogo/Kotak_Builders.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "13",
      "brand": "M.K. Ghare",
      "src": "/images/BrandLogo/M_K_Ghare.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "14",
      "brand": "Mirchi & Mime",
      "src": "/images/BrandLogo/Mirchi_Mime.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "15",
      "brand": "National",
      "src": "/images/BrandLogo/National.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "16",
      "brand": "NIIT",
      "src": "/images/BrandLogo/NIIT.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "17",
      "brand": "Northern Travels",
      "src": "/images/BrandLogo/Northern.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "18",
      "brand": "Saraswati College of Engineering",
      "src": "/images/BrandLogo/Sarasvati.png",
      "maxWidth": 250,
      "width": "100%"
    },
    {
      "id": "19",
      "brand": "Smith & Nephew",
      "src": "/images/BrandLogo/Smith_N_Nephew.png",
      "maxWidth": 250,
      "width": "100%"
    },
      {
      "id": "21",
      "brand": "Thakur",
      "src": "/images/BrandLogo/Thakur.png",
      "maxWidth": 250,
      "width": "100%"
    }
  ] satisfies Array<BrandsData>,
};

export const teamData = {
  design: [
    {
      id: "1",
      name: "Mrs. Kavisha Nigudkar",
      src:"/images/Team/kavisha.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715647107/EZ%20Website%20-%20Design/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      position: "Director",
     // email: "teneza@eltezza.com",
    },
    {
      id: "2",
      name: "Mr. Sudhir Nigudkar",
      src: "/images/Team/Sudhirnigudkar.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709569/EZ%20Website%20-%20Design/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      position: "Managing Director",
     // email: "eltayeb@eltezza.com",
    },
    {
      id: "3",
      name: "Mr. Prashant Chalke",
      src:  "/images/Team/prashantchalke.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709592/EZ%20Website%20-%20Design/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      position: "Marketing Head",
     // email: "chhetri@eltezza.com",
    },
    {
      id: "4",
      name: "Mrs. Pranali Thakur",
      src: "/images/Team/pranalithakur.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709515/EZ%20Website%20-%20Design/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      position: "Media Manager",
      //email: "herrera@eltezza.com",
    },
   
  ] satisfies Array<TeamData>,
  creative: [
    {
      id: "1",
      name: "Chris Teneza",
      src:
        distributionName +
        "/Creative/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1715647107/EZ%20Website%20-%20Design/Team/Chris_Teneza_-_Creative_Director_ziruf9.jpg",
      position: "Creative Director",
      email: "teneza@eltezza.com",
    },
    {
      id: "2",
      name: "Mo Eltayeb",
      src:
        distributionName +
        "/Creative/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709569/EZ%20Website%20-%20Design/Team/Mo_Eltayeb_-_Managing_Director_nfrqnm.jpg",
      position: "Managing Director",
      email: "eltayeb@eltezza.com",
    },
    {
      id: "3",
      name: "Pradeep Chhetri",
      src:
        distributionName +
        "/Creative/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709592/EZ%20Website%20-%20Design/Team/Pradeep_Chhetri_-_Account_Manager_gibk0f.jpg",
      position: "Account Manager",
      email: "chhetri@eltezza.com",
    },
    {
      id: "4",
      name: "Danilo Herrera",
      src:
        distributionName +
        "/Creative/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709515/EZ%20Website%20-%20Design/Team/Danilo_Herrera_-_Business_Strategist_gcgqi1.jpg",
      position: "Business Strategist",
      email: "herrera@eltezza.com",
    },
    {
      id: "5",
      name: "Ilyas Megarbi",
      src:
        distributionName +
        "/Creative/Team/Ilyas_Megarbi_-_Graphic_Designer_agv0jc.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1713331517/EZ%20Website%20-%20Design/Team/Ilyas_Megarbi_-_Graphic_Designer_agv0jc.jpg",
      position: "Graphic Designer",
    },
    {
      id: "6",
      name: "King Raffy",
      src:
        distributionName +
        "/Creative/Team/King_Raffy_-_Visual_Designer_bxau6w.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_20/v1712709685/EZ%20Website%20-%20Creative/Team/King_Raffy_-_Visual_Designer_bxau6w.jpg",
      position: "Visual Designer",
    },
  ] satisfies Array<TeamData>,
};

export const btsData = {
  design: [
    {
      id: "1",
      src:
        distributionName + "/Brandwork/team2.png",
      placeholder: distributionName + "/Brandwork/team2.png",
      alt: "Team Posing for a collaboration",
      isVideo: false,
    },
    {
      id: "2",
      src:
        distributionName + "/Brandwork/team1.jpg",
      placeholder: distributionName + "/Brandwork/team1.jpg",
      alt: "Team discussion for a strategy",
      isVideo: false,
    },
    {
      id: "3",
      src:
        distributionName + "/Brandwork/team3.png",
      placeholder: distributionName + "/Brandwork/team3.png",
      alt: "Team identifying challenges",
      isVideo: false,
    },
    
  ] satisfies Array<BtsData>,
  creative: [
    {
      id: "1",
      src:
        distributionName +
        "/Creative/BTS/Sharing_the_stage_with_other_awesome_agencies_fnds14.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_15/v1712183208/EZ%20Website%20-%20Creative/BTS/Photos/Sharing_the_stage_with_other_awesome_agencies_fnds14.jpg",
      alt: "Sharing the stage with other awesome agencies",
      isVideo: false,
    },
    {
      id: "2",
      src: distributionName + "/Creative/BTS/IMG_2974_zzlgzw.mp4",
      alt: "Filming",
      isVideo: true,
    },
    {
      id: "3",
      src: distributionName + "/Creative/BTS/Pradeep_qorjpw.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183143/EZ%20Website%20-%20Creative/BTS/Photos/Pradeep_qorjpw.jpg",
      alt: "Pradeep!",
      isVideo: false,
    },
    {
      id: "4",
      src: distributionName + "/Creative/BTS/IMG_0289_s9kbnw.mp4",
      alt: "Goju behind the scenes",
      isVideo: true,
    },
    {
      id: "5",
      src: distributionName + "/Creative/BTS/Mo_Chris_Ben_hk4if5.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_15/v1712183099/EZ%20Website%20-%20Creative/BTS/Photos/Mo_Chris_Ben_hk4if5.jpg",
      alt: "Mo, Chris and Ben",
      isVideo: false,
    },
    {
      id: "6",
      src: distributionName + "/Creative/BTS/IMG_0268_swi4xa.mp4",
      alt: "Dunk!",
      isVideo: true,
    },
    {
      id: "7",
      src: distributionName + "/Creative/BTS/IMG_7073_kxjqe6.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183049/EZ%20Website%20-%20Creative/BTS/Photos/IMG_7073_kxjqe6.jpg",
      alt: "Chris with Seltzers boxes",
      isVideo: false,
    },
    {
      id: "8",
      src: distributionName + "/Creative/BTS/IMG_0265_oq3usj.mp4",
      alt: "Slam that Rinse can",
      isVideo: true,
    },
    {
      id: "9",
      src: distributionName + "/Creative/BTS/IMG_3067_ocmthz.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183002/EZ%20Website%20-%20Creative/BTS/Photos/IMG_3067_ocmthz.jpg",
      alt: "Vitality Bites BTS",
      isVideo: false,
    },
    {
      id: "10",
      src: distributionName + "/Creative/BTS/IMG_0373_eg7qqi.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712182947/EZ%20Website%20-%20Creative/BTS/Photos/IMG_0373_eg7qqi.jpg",
      alt: "Vitality Bites Photoshoot",
      isVideo: false,
    },
    {
      id: "11",
      src: distributionName + "/Creative/BTS/IMG_0293_jmaghr.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712182886/EZ%20Website%20-%20Creative/BTS/Photos/IMG_0293_jmaghr.jpg",
      alt: "Filming setup",
      isVideo: false,
    },
    {
      id: "12",
      src: distributionName + "/Creative/BTS/IMG_0178_kog9qh.mp4",
      alt: "Chris the Barista",
      isVideo: true,
    },
    {
      id: "13",
      src: distributionName + "/Creative/BTS/IMG_0292_ol8zrs.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712182821/EZ%20Website%20-%20Creative/BTS/Photos/IMG_0292_ol8zrs.jpg",
      alt: "Hangin' the Goju bottle",
      isVideo: false,
    },
    {
      id: "14",
      src: distributionName + "/Creative/BTS/IMG_0162_kdykqr.mp4",
      alt: "Video editing",
      isVideo: true,
    },
    {
      id: "15",
      src: distributionName + "/Creative/BTS/I_see_you_d7wnxc.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_15/v1712182568/EZ%20Website%20-%20Creative/BTS/Photos/I_see_you_d7wnxc.jpg",
      alt: "I see you!",
      isVideo: false,
    },
    {
      id: "16",
      src: distributionName + "/Creative/BTS/IMG_0152_weisck.mp4",
      alt: "Honey Soy Chicken BTS",
      isVideo: true,
    },
    {
      id: "17",
      src: distributionName + "/Creative/BTS/Give_us_ya_best_pose_wsanck.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712182647/EZ%20Website%20-%20Creative/BTS/Photos/Give_us_ya_best_pose_wsanck.jpg",
      alt: "Give us ya best pose!",
      isVideo: false,
    },
    {
      id: "18",
      src: distributionName + "/Creative/BTS/Copy_of_IMG_0275_cq2av0.mp4",
      alt: "Filming BTS",
      isVideo: true,
    },
    {
      id: "19",
      src: distributionName + "/Creative/BTS/Danny_fowga4.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183283/EZ%20Website%20-%20Creative/BTS/Photos/Danny_fowga4.jpg",
      alt: "Danny!",
      isVideo: false,
    },
    {
      id: "20",
      src: distributionName + "/Creative/BTS/Chris_CEO_qiaopi.jpg",
      placeholder:
        "https://res.cloudinary.com/dsxzhd4c2/image/upload/c_scale,h_17/v1712183244/EZ%20Website%20-%20Creative/BTS/Photos/Chris_CEO_qiaopi.jpg",
      alt: "Chris CEO",
      isVideo: false,
    },
  ] satisfies Array<BtsData>,
};
