// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-my-very-first-first-author-preprint-is-out",
        
          title: "My very first first-author preprint is out!",
        
        description: "&quot;Zero-shot ecological annotation of microbial genomes with myLLannotator accelerates scientific discovery&quot; by Alyssa Lu Lee, Arya Sharma, and Rohan Maddamsetti, bioRxiv, 2026 (preprint). doi: https://doi.org/10.64898/2026.01.18.700140",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/my-first-first-author-preprint-is-out/";
          
        },
      },{id: "post-photos-from-my-trip-to-santa-barbara",
        
          title: "Photos from my trip to Santa Barbara!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/santa-barbara-trip-photos/";
          
        },
      },{id: "post-why-am-i-researching-seaweed",
        
          title: "Why am I researching seaweed?",
        
        description: "Pros and cons of seaweed as fuel",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/why-study-seaweed-biofuel/";
          
        },
      },{id: "post-my-first-semester-as-a-phd-student",
        
          title: "My first semester as a PhD student!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first-semester-phd-review/";
          
        },
      },{id: "post-science-book-dump",
        
          title: "science book dump!",
        
        description: "tuberculosis, wildlife crossings, and scary fungi",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/science-book-dump/";
          
        },
      },{id: "post-i-joined-the-rutgers-sailing-team",
        
          title: "I joined the Rutgers sailing team!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/i-joined-ru-sailing-team/";
          
        },
      },{id: "post-advice-for-starting-your-phd",
        
          title: "Advice for starting your PhD",
        
        description: "A compilation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/start-a-phd-advice-compilation/";
          
        },
      },{id: "post-climate-change-newsletters-i-like",
        
          title: "Climate change newsletters I like",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/climate-newsletters/";
          
        },
      },{id: "post-standing-up-for-science",
        
          title: "Standing up for science",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/standing-up-for-science/";
          
        },
      },{id: "post-what-i-39-ve-been-reading-to-start-2025",
        
          title: "What I&#39;ve been reading to start 2025",
        
        description: "Andy Weir, Siddhartha Mukherjee, Malcolm Gladwell, and more",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/reading-to-start-2025/";
          
        },
      },{id: "post-taking-personal-action-for-the-climate",
        
          title: "Taking personal action for the climate",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/my-climate-actions/";
          
        },
      },{id: "post-donating-for-the-climate-in-2025",
        
          title: "Donating for the climate in 2025",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/donations-for-climate/";
          
        },
      },{id: "post-the-healing-power-of-placentas-smart-insulin-and-the-woman-who-could-smell-parkinson-39-s",
        
          title: "The healing power of placentas, smart insulin, and the woman who could smell...",
        
        description: "A compilation of stories from medicine",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/placentas-smart-insulin/";
          
        },
      },{id: "post-sci-fi-book-recommendations",
        
          title: "Sci-fi book recommendations",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/scifi-book-recs/";
          
        },
      },{id: "post-a-lab-of-one-39-s-own",
        
          title: "A lab of one&#39;s own",
        
        description: "Women in science, and an awesome memoir by Rita Colwell, PhD",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/a-lab-of-ones-own/";
          
        },
      },{id: "post-recommended-reading-for-summer-2024",
        
          title: "Recommended reading for summer 2024!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/summer-reading-2024/";
          
        },
      },{id: "post-my-first-week-volunteering-in-the-root-lab",
        
          title: "My first week volunteering in the Root Lab!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/root-lab/";
          
        },
      },{id: "post-what-are-my-research-interests",
        
          title: "What are my research interests???",
        
        description: "I list random articles I found in order to find out",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/research-interests/";
          
        },
      },{id: "post-crochet-projects-for-nerds-lt-3",
        
          title: "Crochet projects for nerds &lt;3",
        
        description: "DNA in crochet form",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/crochet-dna/";
          
        },
      },{id: "post-my-academic-work-at-williams-mystic",
        
          title: "My academic work at Williams-Mystic",
        
        description: "Independent research projects: recap",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/wm-academics/";
          
        },
      },{id: "post-our-message-to-williams-college-don-39-t-close-williams-mystic",
        
          title: "Our message to Williams College: Don&#39;t close Williams-Mystic",
        
        description: "Advocating for the program that taught me how to advocate for myself",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/williams-mystic-op-ed/";
          
        },
      },{id: "post-poem-making",
        
          title: "Poem: Making",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/making-poem/";
          
        },
      },{id: "post-love-letter-to-williams-mystic",
        
          title: "Love letter to Williams-Mystic",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/love-letter-williams-mystic/";
          
        },
      },{id: "post-poem-sea-weed-by-d-h-lawrence",
        
          title: "Poem: Sea-Weed by D.H. Lawrence",
        
        description: "Shared with me by esteemed professor of ocean literature Dr. Ned Schaumberg",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/seaweed-dh-lawrence/";
          
        },
      },{id: "post-words-that-help-me-stay-the-course",
        
          title: "Words that help me stay the course",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/words-help-me-stay-the-course/";
          
        },
      },{id: "post-photos-from-california-and-louisiana",
        
          title: "Photos from California and Louisiana!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ca-la-photos/";
          
        },
      },{id: "post-first-time-sailing",
        
          title: "First time sailing!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/first-day-sailing/";
          
        },
      },{id: "post-my-favorite-places-in-mystic-so-far",
        
          title: "My favorite places in Mystic (so far)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/favorite-places-in-mystic/";
          
        },
      },{id: "post-completely-fascinating-biology-videos",
        
          title: "Completely fascinating biology videos",
        
        description: "The most mind-blowing videos I&#39;ve ever seen",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/fascinating-biology-videos/";
          
        },
      },{id: "post-the-great-wave-art-science-and-travelers-from-the-2011-japan-tsunami",
        
          title: "The great wave: Art, science, and travelers from the 2011 Japan tsunami",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/the-great-wave/";
          
        },
      },{id: "post-my-offshore-trip-in-photos",
        
          title: "My offshore trip in photos!",
        
        description: "What it was like sailing in the Caribbean, from Antigua to Dominica and back",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/offshore-antigua-dominica/";
          
        },
      },{id: "post-ready-for-offshore",
        
          title: "Ready for offshore!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mystic-ready-for-offshore/";
          
        },
      },{id: "post-my-first-day-at-williams-mystic",
        
          title: "My first day at Williams-Mystic!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mystic-first-day/";
          
        },
      },{id: "post-recommended-reading-2023",
        
          title: "Recommended reading 2023",
        
        description: "Books I read in 2023 that I recommend!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/recommended-reading-2023/";
          
        },
      },{id: "post-bacteria-giant-viruses-and-their-viruses",
        
          title: "Bacteria, giant viruses, and their viruses",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/giant-viruses/";
          
        },
      },{id: "post-how-to-get-involved-in-comp-bio-research",
        
          title: "How to get involved in comp bio research",
        
        description: "Getting involved in comp bio research as an undergrad",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/research-advice/";
          
        },
      },{id: "post-comp-bio-outside-of-class-at-cmu",
        
          title: "Comp bio outside of class at CMU",
        
        description: "Interested in comp bio? Here are some things you can do that aren&#39;t taking classes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/cmu-out-of-class/";
          
        },
      },{id: "post-advice-for-undergrads-in-comp-bio-at-cmu",
        
          title: "Advice for undergrads in comp bio at CMU",
        
        description: "Helpful information and resources for undergraduate students in CMU&#39;s Computational Biology Department!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/cmu-comp-bio-undergrad-advice/";
          
        },
      },{id: "post-the-design-of-everyday-things",
        
          title: "The design of everyday things",
        
        description: "why it&#39;s not your fault that you can&#39;t figure out how to open doors (Donald A. Norman, originally published 1998)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/design-of-everyday-things/";
          
        },
      },{id: "post-science-courses",
        
          title: "science courses!",
        
        description: "my thoughts on science courses at CMU",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/science-courses/";
          
        },
      },{id: "post-the-hidden-life-of-trees",
        
          title: "The hidden life of trees",
        
        description: "An adorable book by Peter Wohlleben about trees and how they cope with life&#39;s ups and downs (translated to English in 2016)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/hidden-life-of-trees/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-book-recommendations",
          title: 'My book recommendations',
          description: "",
          section: "News",},{id: "news-advice-for-starting-a-phd",
          title: 'Advice for starting a PhD',
          description: "",
          section: "News",},{id: "news-my-first-first-author-preprint-is-out",
          title: 'My first first-author preprint is out!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%79%73%73%61.%6C%65%65@%72%75%74%67%65%72%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/alyssa-lee", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alyssalulee", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0005-4407-6853", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ckU9pLwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
