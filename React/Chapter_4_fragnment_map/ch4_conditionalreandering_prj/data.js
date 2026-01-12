let studentProfile = {
    basic_info: {
        personal: {
            name: 'Nayan Pathak',
            age: 22,
            gender: 'Male'
        },
        education: {
            level: 'Bachelor',
            faculty: 'Computer Science',
            current_semester: 6,
            college: {
                name: 'ABC College',
                university: 'Tribhuvan University',
                location: {
                    city: 'Kathmandu',
                    district: 'Kathmandu',
                    province: 'Bagmati'
                }
            }
        }
    },

    address: {
        history: {
            stayed_places: [
                {
                    city: 'Kathmandu',
                    duration: {
                        from: 2019,
                        to: 2022
                    },
                    reason: 'Study'
                },
                {
                    city: 'Chitwan',
                    duration: {
                        from: 2016,
                        to: 2019
                    },
                    reason: 'Family'
                }
            ]
        },

        current: {
            temporary: {
                city: 'Birtamode',
                postal_code: 55704,
                district: 'Jhapa',
                province: 'Koshi',
                geo: {
                    lat: 26.5453,
                    lng: 88.0991
                }
            },
            permanent: {
                city: 'Birtamode',
                postal_code: 55704,
                district: 'Jhapa',
                province: 'Koshi'
            }
        }
    },

    preferences: {
        food: {
            dishes: {
                breakfast: [
                    { name: 'Bread', type: 'Light' },
                    { name: 'Chole', type: 'Heavy' }
                ],
                dinner: [
                    { name: 'Bhat', calories: 400 },
                    { name: 'Dal', calories: 150 },
                    { name: 'Sabji', calories: 120 }
                ]
            }
        },
        travel: {
            favorite_places: {
                countries: [
                    {
                        name: 'Switzerland',
                        cities: ['Zurich', 'Geneva']
                    },
                    {
                        name: 'Norway',
                        cities: ['Oslo']
                    }
                ],
                dream_city: {
                    name: 'Manang',
                    reasons: {
                        nature: true,
                        trekking: true,
                        snow: false
                    }
                }
            }
        }
    },

    activities: {
        hobbies: ['Coding', 'Reading', 'Traveling'],
        sports: {
            indoor: ['Chess', 'Table Tennis'],
            outdoor: [
                {
                    name: 'Football',
                    position: 'Midfielder',
                    experience_years: 5
                }
            ]
        }
    },

    system_meta: {
        created_at: '2026-01-01',
        last_updated: '2026-01-10',
        is_active: true
    }
};



const apiResponse = {
    status: "success",
    statusCode: 200,
    request_id: "req_9xA21Lm",
    timestamp: "2026-01-12T10:45:30.456Z",

    pagination: {
        current_page: 1,
        per_page: 10,
        total_pages: 5,
        total_records: 47
    },

    data: {
        user: {
            id: "usr_1029",
            is_verified: true,
            profile: {
                personal: {
                    name: "Nayan Pathak",
                    age: 22,
                    gender: "Male"
                },
                contact: {
                    email: "nayan.pathak@example.com",
                    phones: [
                        {
                            type: "primary",
                            number: "+977-98XXXXXXX",
                            verified: true
                        },
                        {
                            type: "secondary",
                            number: "+977-97XXXXXXX",
                            verified: false
                        }
                    ]
                }
            },

            roles: ["student", "developer"],

            permissions: {
                modules: {
                    dashboard: {
                        read: true,
                        write: false
                    },
                    courses: {
                        read: true,
                        write: true,
                        advanced: {
                            export: false,
                            import: true
                        }
                    }
                }
            }
        },

        academic: {
            enrolled_courses: [
                {
                    course_id: "CS101",
                    title: "Data Structures",
                    instructor: {
                        id: "ins_01",
                        name: "Dr. Sharma",
                        contact: {
                            email: "sharma@college.edu"
                        }
                    },
                    progress: {
                        completed_percentage: 68,
                        grades: {
                            mid_term: 75,
                            final_term: null
                        }
                    }
                },
                {
                    course_id: "CS205",
                    title: "Operating Systems",
                    instructor: {
                        id: "ins_04",
                        name: "Prof. Thapa"
                    },
                    progress: {
                        completed_percentage: 45,
                        grades: {
                            mid_term: 60,
                            final_term: null
                        }
                    }
                }
            ]
        },

        preferences: {
            ui: {
                theme: "dark",
                language: "en",
                accessibility: {
                    high_contrast: false,
                    text_size: "medium"
                }
            },
            notifications: {
                email: true,
                sms: false,
                push: {
                    enabled: true,
                    schedule: {
                        quiet_hours: {
                            from: "22:00",
                            to: "06:00"
                        },
                        timezone: "Asia/Kathmandu"
                    }
                }
            }
        }
    },

    logs: {
        last_login: {
            ip: "103.12.45.21",
            device: {
                type: "mobile",
                os: {
                    name: "Android",
                    version: "14"
                },
                browser: null
            }
        },
        activity_history: [
            {
                action: "LOGIN",
                timestamp: "2026-01-12T08:15:11.000Z"
            },
            {
                action: "COURSE_VIEW",
                meta: {
                    course_id: "CS101",
                    duration_seconds: 320
                }
            }
        ]
    },

    errors: null
    
};
