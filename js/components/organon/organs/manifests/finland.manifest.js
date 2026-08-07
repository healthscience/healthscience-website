// manifests/finland.manifest.js
export const FinlandOrganon = {
    id: "finland-01",
    name: "Finland Bioregional Organon",
    watershed: "Baltic / Lake District",
    sectionTitle: "What Needs Done",
    sectionSubtitle: "Mitä pitää tehdä — Siemensolmujen ja laitteiston rakentaminen",
    
    // 1. HARDWARE & MANUFACTURER CONTRACTS (Internal & External Conduction)
    manufacturers: [
        {
            partner: "Movesense",
            domain: "Body & Autonomic Conduction (Sisäinen tiedonjohtavuus)",
            targetDevice: "Movesense MD Class IIa ECG/HRV Wearables",
            specificNeed: "Contracting open-firmware flashing and direct BLE payload capture so raw heart-rate variability and autonomic biometrics stream straight to local Hyperbee datastores without cloud telemetry.",
            status: "Contract Ready",
            actionLabel: "Initiate Movesense Bridge"
        },
        {
            partner: "Ruuvi (Ruuvi Innovations Oy)",
            domain: "Air, Water & Soil Conduction (Ulkoinen tiedonjohtavuus)",
            targetDevice: "RuuviTag Pro Open Environmental Sensors",
            specificNeed: "Sourcing IP68-sealed open-source environmental sensors for watershed temperature, soil moisture, barometric pressure, and microclimate telemetry across the Lake District.",
            status: "Active Sourcing",
            actionLabel: "Connect Ruuvi Telemetry"
        },
        {
            partner: "Nordic Precision Housing Fabrication",
            domain: "Local Node & Scale Bridging (Laitteistokotelointi)",
            targetDevice: "8-Electrode Bio-Impedance & Gateway Enclosures",
            specificNeed: "Precision mechanical and embedded systems fabrication for bridging 8-point bio-impedance scales directly into local-first home gateways running pure JavaScript.",
            status: "Open Need",
            actionLabel: "Submit Fabrication Profile"
        }
    ],

    // 2. PEER COHORT & LOCAL ROLES (The People)
    peerCohort: {
        focusArea: "Nordic Winter Resilience & Autonomic Coherence",
        pipelineStage: "Story -> Interplay -> Emulation",
        openRoles: [
            {
                title: "Bioregional Data Steward",
                finnishTitle: "Vesistöalueen Ankkuri",
                deficit: "High Need",
                summary: "Grounding the peer cohort across the Baltic/Lake District watershed. Guiding local peers in cloud-free sensor pairing and Heli solar time synchrony."
            },
            {
                title: "Hardware & Sensor Bridge",
                finnishTitle: "Laitteistosillan Rakentaja",
                deficit: "Active Need",
                summary: "Embedded electronics technician to flash Movesense open firmware, calibrate 8-electrode bio-impedance scales, and verify direct BLE conduction to local gateways."
            },
            {
                title: "Core Seed Node Operator",
                finnishTitle: "Siemensolmun Ylläpitäjä",
                deficit: "Seeding",
                summary: "Maintaining an always-on local Hypercore/Hyperswarm peer node synchronized to local solar time, ensuring data conduction remains resilient without servers."
            }
        ]
    }
};