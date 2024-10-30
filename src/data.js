import user1 from './images/user1.jpg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpg'

export const WHY_CHOOSE_OUR_APP = [
    {
        id: 1,
        title: "Extensive Listings",
        description: "Access a wide range of properties, including residential, commercial, and agricultuaral lands, tailored to your needs."
    },
    {
        id: 2,
        title: "Personalized Alerts",
        description: "Stay informed with notifications on new listings or price changes that match your preferences."
    },
    {
        id: 3,
        title: "Transparent Information",
        description: "Access detailed property information, including history, zoning regulations, and nearby amenities, for informed decisions."
    },
    {
        id: 4,
        title: "Interactive Maps",
        description: "Visualize land boundaries, nearby infrastructure, and environmental features to access suitability."
    },
    {
        id: 5,
        title: "Expert Support",
        description: "Get professional assistance and guidance throughout the buying or selling process from our dedicated support team."
    },
    {
        id: 6,
        title: "Feedback and Reviews",
        description: "Benefit from user feedback and reviews to gauge property satisfaction and reliability"
    },
]

export const LAND_PROFILE_MORE_DETAILS_TABS = [
    { id: 'basicDetails', label: 'Basic Details' },
    { id: 'documents', label: 'Documents' },
    { id: 'pricing', label: 'Pricing & Other' },
    { id: 'ownerDetails', label: 'Owner Details' },
    { id: 'marketRate', label: 'Market Rate' },
];

export const LAND_PROFILE_BASIC_DETAILS = [
    { label: 'SURVEY NUMBER', value: '12345' },
    { label: 'SOIL QUALITY', value: 'Good' },
    { label: 'LENGTH', value: '---' },
    { label: 'BREADTH', value: '---' },
    { label: 'WATER SOURCE', value: 'Canal' },
    { label: 'NO OF OPEN SIDES', value: '2' },
    { label: 'BOUNDARY WALL', value: 'No' },
    { label: 'CONSTRUCTION ALLOWED', value: 'Yes' },
    { label: 'ANY CONSTRUCTION DONE?', value: 'Yes (Shed)' },
    { label: 'TRANSPORTATION', value: 'Yes' },
    { label: 'OWNERSHIP', value: '---' },
    { label: 'APPROVED BY', value: 'GHMC' },
    { label: 'ELECTRICITY', value: 'Yes' },
    { label: 'TRANSACTION TYPE', value: 'Resale' },
    { label: 'LEGAL STATUS', value: 'Verified' },
    { label: 'PRONE TO ANY ENVIRONMENTAL CONDITIONS?', value: 'No' },
];

export const LAND_DOCUMENT = [
    {
        title: "Title Deed",
        verified: 100,
        link: "#"
    },
    {
        title: "Zonal Regulations",
        verified: 100,
        link: "#"
    },
    {
        title: "Identity Proof of Seller",
        verified: 100,
        link: "#"
    },
    {
        title: "Encumberance Certificate (EC)",
        verified: 100,
        link: "#"
    },
    {
        title: "No Objection Certificate (NOCs)",
        verified: 100,
        link: "#"
    },
    {
        title: "Sale Agreement",
    },
    {
        title: "Patta (Land Ownership Document) and Chitta (Land Revenue Record)",
        verified: 70,
        link: "#"
    },
    {
        title: "Survey Plan",
        verified: 100,
        link: "#"
    },
    {
        title: "Registered Sale Deed",
        verified: 100,
        link: "#"
    },
    {
        title: "Pahani or Adangal",
        verified: 70,
        link: "#"
    },
    {
        title: "Power of Attorney(if applicable)",
        verified: 100,
    },
    {
        title: "Mutation Document",
        verified: 100,
    },
    {
        title: "Tax Receipts and Bills",
        verified: 70,
        link: "#",
    },
    {
        title: "Land Conversion Certificate (if applicable)",
        verified: 100,
    },
    {
        title: "Approved Layout Plan",
        verified: 70,
        link: "#",
    },
    {
        title: "Legal Opinion",
        verified: 100,
    },
]

export const PROPERTY_PRICE_DETAILS = [
    {
        title: "PROPERTY STATUS",
        detail: "---",
    },
    {
        title: "PRICE PER SQFT",
        detail: "---",
    },
    {
        title: "PRICE NEGOTIABLE",
        detail: "Yes",
    },
    {
        title: "BOUNDARY DISPUTES",
        detail: "No",
    },
    {
        title: "ANY LEGAL ISSUES ON LAND",
        detail: "No",
    },
]

export const LAND_PROFILE_SIMILAR_LISTING_TABS = [
    { id: 'agriculture', label: 'Agriculture Lands' },
    { id: 'residential', label: 'Residential Lands' },
    { id: 'commercial', label: 'Commercial Lands' },
    { id: 'industrial', label: 'Industrial Lands' },
    { id: 'others', label: 'Others' },
];

export const CUSTOMER_REVIEWS = [
    {
        user: "User 1",
        comment: "Perfect location for investment, offering stunning views and easy access to amenities",
        img: user1,
    },
    {
        user: "User 2",
        comment: "Excellent value for money; well-connected and ideal for farming.",
        img: user2,
    },
    {
        user: "User 3",
        comment: "The land offers a great balance of natural beauty and proximity to city facilities.",
        img: user3,
    }
]

export const FOOTER_LINKS = [
    {
        title: "Property Listing",
        menu: [
            {
                id: 1,
                title: "Residential properties",
                link: "#",
            },
            {
                id: 2,
                title: "Commercial properties",
                link: "#",
            },
            {
                id: 3,
                title: "Plots",
                link: "#",
            },
            {
                id: 4,
                title: "Farmlands",
                link: "#",
            },
            {
                id: 5,
                title: "Industrial properties",
                link: "#",
            },
        ]
    },
    {
        title: "Company",
        menu: [
            {
                id: 1,
                title: "Home",
                link: "#",
            },
            {
                id: 2,
                title: "About Us",
                link: "#",
            },
            {
                id: 2,
                title: "Contact",
                link: "#",
            },
        ]
    },
    {
        title: "Resources",
        menu: [
            {
                id: 1,
                title: "Blog",
                link: "#",
            },
            {
                id: 2,
                title: "Newsletter",
                link: "#",
            },
            {
                id: 3,
                title: "Help centre",
                link: "#",
            },
            {
                id: 4,
                title: "Support",
                link: "#",
            },
        ]
    },
    {
        title: "Social",
        menu: [
            {
                id: 1,
                title: "Twitter",
                link: "#",
            },
            {
                id: 2,
                title: "LinkedIn",
                link: "#",
            },
            {
                id: 3,
                title: "Facebook",
                link: "#",
            },
        ]
    },
    {
        title: "Legal",
        menu: [
            {
                id: 1,
                title: "Terms",
                link: "#"
            },
            {
                id: 2,
                title: "Privacy",
                link: "#"
            },
            {
                id: 3,
                title: "Cookies",
                link: "#"
            },
            {
                id: 4,
                title: "Licenses",
                link: "#"
            },
        ]
    }

]

export const SUBSCRIPTION_PLANS = [
    {
        plan: "basic",
        price: 5,
        planDetails: [
            {
                id: 1,
                detail: "List up to 10 properties"
            },
            {
                id: 2,
                detail: "Email support"
            },
            {
                id: 3,
                detail: "Lead Management System"
            },
            {
                id: 4,
                detail: "Basic analytics and reporting"
            },
        ]
    },
    {
        plan: "pro",
        price: 10,
        planDetails: [
            {
                id: 1,
                detail: "List up to 50 properties"
            },
            {
                id: 2,
                detail: "Email support"
            },
            {
                id: 3,
                detail: "Lead Management System"
            },
            {
                id: 4,
                detail: "Advanced analytics and reporting"
            },
        ]
    },
    {
        plan: "premium",
        price: 30,
        planDetails: [
            {
                id: 1,
                detail: "List unlimited properties"
            },
            {
                id: 2,
                detail: "Email support"
            },
            {
                id: 3,
                detail: "Lead Management System"
            },
            {
                id: 4,
                detail: "Comprehensive analytics and reporting"
            },
        ]
    },
]


export const LANDPOST_UPLOAD_DOCUMENT_INTIAL_DATA = [
    {
        name: 'Title Deed',
        remarks: "",
        uploadStatus: 'Uploaded',
        verificationStatus: 'Pending',
        info: ""

    },
    {
        name: 'Encumbrance Certificate',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: "Encumbrance Certificate confirms that the land is free from any monetary or legal liabilities."

    },
    {
        name: 'Patta (Land Ownership Document) and Chitta, (Land Revenue Record)',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: "These are important land documents that confirm ownership and revenue records."

    },
    {
        name: 'Pahani or Adangal',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""

    },
    {
        name: 'Tax Receipts and Bills',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: "Some info about tax receipts"

    },
    {
        name: 'Approved Layout Plan',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""

    },
    {
        name: 'Zonal Regulations',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""

    },
    {
        name: 'No Objection Certificates (NOCs)',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""
    },
    {
        name: 'Survey Plan',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""
    },
    {
        name: 'Power of Attorney (if applicable)',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""
    },
    {
        name: 'Land Conversion Certificate (if applicable)',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""
    },
    {
        name: 'Legal Opinion',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""
    },
    {
        name: 'Identity Proof of Seller',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""
    },
    {
        name: 'Sale Agreement',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""
    },
    {
        name: 'Registered Sale Deed',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: ""
    },
    {
        name: 'Mutation Document',
        remarks: "",
        uploadStatus: 'Not uploaded',
        verificationStatus: 'Pending',
        info: "info on mutation document"
    },
];

export const LAND_PROFILE_OWNER_DETAILS = [
    {
        title: "Mr. Sharma",
        postedBy: "Mr. Sharma",
        mobile: "9898989898",
        email: "mrsharma@email.com"
    }
]