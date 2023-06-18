 export const NavList = [
    {
        name : "campaigns",
        isDropdown : false
    },

    {
        name : "audience",
        isDropdown : true,
        options: ["audience segments", "data connectors", "audience splicing"]
    },

    {
        name : "creative",
        isDropdown : false
    },

    {
        name : "catalogs",
        isDropdown : true,
        options: ["creative feeds", "manage needs", "catalogs (Facebook)", "DCO configurations"]
    },

    {
        name : "Utility",
        isDropdown : true,
        options: ["trafficking", "brand safety", "segments", "bulk actions", "geo lists", "keyword lists", "IP lists", "PO lists", "sites", "apps"]
    },

    {
        name : "Reports",
        isDropdown : true,
        options: ["Insights", "attribution", "my reports", "scheduled reports (beta)", "leads"]
    },

    {
        name : "pixel",
        isDropdown : true,
        options: ["remarketing", "conversion", "tag configuratio"]
    },

    {
        name : "settings",
        isDropdown : true,
        options: ["notifications", "call tracking", "PMP deals"]
    },
]


export const GeoData = [
    {
        name : "Target",
        options : [
            "People in, or who show interest in, your targeted locations (recommended)",
            "People in or regularly in your targeted locations",
            "people searching for your targeted locations"
        ]
    },

    {
        name : "Exclude",
        options : [
            "People in your excluded locations",
            "People in, or who show interest in your excluded locations"
        ]
    },

]

export const  LangOptions  = [
    { label:  'English', value:  'English'  },
    { label:  'Hindi', value:  'Hindi'  },
    { label:  'Bengali', value:  'Bengali'  },
    { label:  'French', value:  'French'  },
    { label:  'Chinese', value:  'Chinese'  },
    { label:  'Japenese', value:  'Japenese'  },
]