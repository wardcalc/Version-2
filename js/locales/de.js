const de = {
    /* --- NAVIGATION & GENERAL UI --- */
    "nav_dashboard": "Übersicht",
    "nav_favorites": "Favoriten",
    "nav_emergency": "NOTFALL",
    "search_placeholder": "Werkzeuge suchen (z.B. GCS, BMI)...",
    "hero_pill": "VON EINEM MEDIZINSTUDENTEN • FÜR MEDIZINISCHES FACHPERSONAL",
    "hero_title_1": "Klinische Werkzeuge",
    "hero_title_2": "für die Visite",
    "hero_subtitle": "Evidenzbasierte Rechner mit Merkhilfen in 4 Sprachen. Schnell, zuverlässig und mobile-first — alles, was Sie am Patientenbett brauchen.",
    "stat_tools": "Rechner",
    "stat_langs": "Sprachen",
    "stat_free": "Kostenlos",
    "stat_est": "Gegründet 2026",
    "search_empty_title": "Keine Werkzeuge gefunden",
    "search_empty_desc": "Versuchen Sie andere Suchbegriffe oder Kategorien.",

    /* --- CATEGORIES --- */
    "cat_all": "Alle",
    "cat_cardio": "Kardiologie",
    "cat_pulmo": "Pneumologie",
    "cat_gastro": "Gastroenterologie",
    "cat_nephro": "Nephrologie",
    "cat_critical": "Intensivmedizin",
    "cat_surgery": "Chirurgie",
    "cat_neuro": "Neurologie",
    "cat_general": "Allgemein & Päd",

    /* --- CLINICAL TOOLS (50) --- */
    // Cardiology
    "tool_chads_title": "CHA2DS2-VASc-Score", "tool_chads_desc": "Schlaganfallrisiko bei Vorhofflimmern.",
    "tool_hasbled_title": "HAS-BLED-Score", "tool_hasbled_desc": "Blutungsrisiko bei Vorhofflimmern.",
    "tool_heart_title": "HEART-Score", "tool_heart_desc": "6-Wochen-Risiko für schwere kardiale Ereignisse.",
    "tool_timi_title": "TIMI-Risk-Score", "tool_timi_desc": "Mortalitätsrisiko bei UA/NSTEMI.",
    "tool_grace_title": "GRACE-Score", "tool_grace_desc": "6-Monats-Mortalität bei akutem Koronarsyndrom.",
    "tool_ascvd_title": "ASCVD-Risiko", "tool_ascvd_desc": "10-Jahres-Risiko für kardiovaskuläre Erkrankungen.",
    "tool_framingham_title": "Framingham-Score", "tool_framingham_desc": "10-Jahres-Risiko für koronare Herzkrankheiten.",
    "tool_qtc_title": "QTc-Rechner", "tool_qtc_desc": "Korrigierte QT-Zeit nach Bazett.",
    
    // Pulmonology
    "tool_wells_title": "Wells-Score (LAE)", "tool_wells_desc": "Klinische Wahrscheinlichkeit einer Lungenembolie.",
    "tool_perc_title": "PERC-Rule", "tool_perc_desc": "Ausschlusskriterien für Lungenembolie.",
    "tool_curb_title": "CURB-65-Score", "tool_curb_desc": "Schweregrad und Hospitalisierung bei Pneumonie.",
    "tool_psi_title": "PSI / PORT-Score", "tool_psi_desc": "Pneumonie-Schweregrad-Index zur Mortalitätsvorhersage.",
    "tool_lights_title": "Light-Kriterien", "tool_lights_desc": "Unterscheidung zwischen Exsudat und Transsudat.",
    "tool_bode_title": "BODE-Index", "tool_bode_desc": "Multidimensionales Scoring für COPD-Überleben.",
    
    // Gastroenterology
    "tool_child_title": "Child-Pugh-Score", "tool_child_desc": "Prognose und Mortalität bei Leberzirrhose.",
    "tool_meld_title": "MELD-Score", "tool_meld_desc": "3-Monats-Mortalität bei terminaler Lebererkrankung.",
    "tool_meldna_title": "MELD-Na-Score", "tool_meldna_desc": "Natrium-korrigierter MELD für Lebertransplantationen.",
    "tool_gbs_title": "Glasgow-Blatchford", "tool_gbs_desc": "Screening für Interventionen bei oberer GI-Blutung.",
    "tool_rockall_title": "Rockall-Score", "tool_rockall_desc": "Mortalitätsrisiko nach oberer GI-Blutung.",
    "tool_maddrey_title": "Maddrey-Funktion", "tool_maddrey_desc": "Prognose und Steroidbedarf bei alkoholischer Hepatitis.",
    
    // Nephrology
    "tool_egfr_title": "eGFR-Rechner", "tool_egfr_desc": "Nierenfunktion nach der CKD-EPI-Gleichung.",
    "tool_crcl_title": "Kreatinin-Clearance", "tool_crcl_desc": "Cockcroft-Gault-Formel zur Medikamentendosierung.",
    "tool_fena_title": "FENa", "tool_fena_desc": "Fraktionelle Natriumexkretion zur AKI-Ätiologie.",
    "tool_feurea_title": "FEUrea", "tool_feurea_desc": "Fraktionelle Harnstoffexkretion bei Diuretika.",
    "tool_aniongap_title": "Anionenlücke", "tool_aniongap_desc": "Kategorisierung der metabolischen Azidose.",
    "tool_winters_title": "Winters-Formel", "tool_winters_desc": "Atemkompensation bei metabolischer Azidose.",
    "tool_calcium_title": "Korrigiertes Calcium", "tool_calcium_desc": "Calciumspiegel bei Hypoalbuminämie.",
    "tool_sodium_title": "Korrigiertes Natrium", "tool_sodium_desc": "Natriumspiegel bei Hyperglykämie.",
    
    // Critical Care
    "tool_gcs_title": "Glasgow Coma Scale", "tool_gcs_desc": "Aktive neurologische Bewertungsmatrix (Bewusstsein).",
    "tool_sofa_title": "SOFA-Score", "tool_sofa_desc": "Organversagen und Sepsis-Mortalität.",
    "tool_qsofa_title": "qSOFA-Score", "tool_qsofa_desc": "Schnelles Bedside-Screening für Sepsiskriterien.",
    "tool_apache_title": "APACHE-II-Score", "tool_apache_desc": "Krankheitsschwere und ITS-Mortalität.",
    "tool_parkland_title": "Parkland-Formel", "tool_parkland_desc": "Flüssigkeitssubstitution bei Verbrennungen (24h).",
    "tool_ivfluids_title": "Erhaltungsbedarf (IV)", "tool_ivfluids_desc": "4-2-1-Regel für intravenöse Flüssigkeitsrate.",
    "tool_nexus_title": "NEXUS-Kriterien", "tool_nexus_desc": "Klinischer Ausschluss von HWS-Verletzungen.",
    "tool_canadian_title": "Canadian CT Head Rule", "tool_canadian_desc": "Indikation zur CCT nach leichtem SHT.",
    
    // Surgery
    "tool_alvarado_title": "Alvarado-Score", "tool_alvarado_desc": "Klinische Wahrscheinlichkeit für akute Appendizitis.",
    "tool_ranson_title": "Ranson-Kriterien", "tool_ranson_desc": "Mortalitätsprädiktor bei akuter Pankreatitis.",
    "tool_caprini_title": "Caprini-Score", "tool_caprini_desc": "TVT- und LE-Risiko bei chirurgischen Patienten.",
    "tool_nsqip_title": "NSQIP-Risikorechner", "tool_nsqip_desc": "Prädiktor für postoperative Komplikationen.",
    
    // Neurology
    "tool_nihss_title": "NIHSS", "tool_nihss_desc": "Quantifiziert den Schweregrad des akuten Hirninfarkts.",
    "tool_abcd2_title": "ABCD2-Score", "tool_abcd2_desc": "Schlaganfallrisiko in den Tagen nach einer TIA.",
    "tool_hunt_title": "Hunt & Hess-Skala", "tool_hunt_desc": "Mortalität bei Subarachnoidalblutung.",
    "tool_chalice_title": "CHALICE-Rule", "tool_chalice_desc": "Indikation zur CCT bei kindlichem SHT.",
    
    // General & Peds
    "tool_apgar_title": "Apgar-Score", "tool_apgar_desc": "Vitalität von Neugeborenen nach 1 und 5 Minuten.",
    "tool_holliday_title": "Holliday-Segar-Formel", "tool_holliday_desc": "Kalorien- und Flüssigkeitsbedarf für Kinder.",
    "tool_bishop_title": "Bishop-Score", "tool_bishop_desc": "Zervixreife zur Geburtseinleitung.",
    "tool_centor_title": "Centor-Score (McIsaac)", "tool_centor_desc": "Wahrscheinlichkeit für A-Streptokokken-Pharyngitis.",
    "tool_bmi_title": "BMI & BSA", "tool_bmi_desc": "Body-Mass-Index und Körperoberfläche zur Dosierung.",
    "tool_ecog_title": "ECOG-Status", "tool_ecog_desc": "Klinischer Allgemeinzustand für Onkologie-Patienten.",

    /* --- FOOTER LINKS --- */
    "footer_about": "Über uns",
    "footer_contact": "Kontakt",
    "footer_privacy": "Datenschutz",
    "footer_terms": "AGB",
    "footer_disclaimer": "Haftungsausschluss",

    /* --- EXTENDED CLINICAL MANIFESTO (ABOUT US) --- */
    "about_manifesto": "Das klinische Manifest",
    "about_title": "Über WardCalc: Die Zukunft der patientennahen Diagnostik",
    "about_highlight": "Lehrbuch & Krankenbett.",
    "about_intro": "WardCalc entstand aus einer klinischen Realität: Das Gehirn ist ein Motor für Logik, aber eine fehlerhafte Festplatte für Formeln.",
    "about_p1": "WardCalc stellt einen grundlegenden Wandel in der Verarbeitung klinischer Daten dar. Entwickelt von einem Medizinstudenten am BSMI, entstand diese Plattform aus der stressigen Realität des modernen Klinikalltags. In einer Ära, in der sich das Wissen alle paar Monate verdoppelt, hat die kognitive Belastung für Assistenzärzte einen kritischen Punkt erreicht. WardCalc dient als dezentrales Gehirn – ein Instrument, das das Auswendiglernen komplexer Formeln ersetzt, damit sich der Behandler auf die Kunst der Diagnostik konzentrieren kann.",
    "about_p2": "Die Architektur basiert auf drei Säulen: Geschwindigkeit, Präzision und Barrierefreiheit. Zeit ist eine endliche Ressource, die direkt mit dem Patientenoutcome korreliert. Während andere Apps durch Registrierungen und Werbung bremsen, ist WardCalc für den sofortigen Einsatz im Schockraum oder bei der Visite optimiert. Jedes Pixel dient der klinischen Nützlichkeit.",
    "about_p3": "WardCalc ist der globalen medizinischen Gemeinschaft verpflichtet. Unsere multilinguale Matrix (Deutsch, Englisch, Russisch, Usbekisch) wurde speziell für internationale Mediziner entwickelt, die sich auf Prüfungen wie die Fachsprachprüfung (FSP) vorbereiten. Wir glauben, dass klinische Werkzeuge nicht durch wirtschaftliche Hürden eingeschränkt werden sollten, weshalb dieser Dienst weltweit kostenlos bleibt.",

    /* --- CONTACT & COLLABORATION --- */
    "contact_pill": "Globales Kommunikationszentrum",
    "contact_title": "Verbinden Sie sich mit dem",
    "contact_highlight": "WardCalc-Netzwerk.",
    "contact_intro": "Medizin ist eine kollaborative Wissenschaft. Ob klinisches Feedback oder institutionelle Partnerschaften – unsere Kommunikationswege sind offen.",
    "contact_h1": "Klinisches Feedback & Verifizierung",
    "contact_p1": "Im Hochrisikoumfeld der modernen Medizin ist isolierte Softwareentwicklung ein Risiko. Jeder Algorithmus muss klinisch auditiert werden. Wir betrachten unsere Nutzer als klinische Validatoren. Wenn Sie eine Diskrepanz finden, ist Ihr Feedback von höchster Bedeutung.",
    "contact_h2": "Akademische Integration",
    "contact_p3": "Wir suchen Partnerschaften mit Universitäten und Kliniken wie Prime Diagnostics, um WardCalc in den klinischen Alltag zu integrieren. Wir unterstützen maßgeschneiderte Implementierungen für spezifische Kohorten wie die Gruppe 2D-GenMed 21.",
    "contact_form_title": "Direktes Anfrageprotokoll",
    "contact_btn_send": "Nachricht senden",
    "contact_label_name": "Vollständiger Name & Titel",
    "contact_label_email": "Institutionelle E-Mail",
    "contact_label_subject": "Art der Anfrage",
    "contact_opt_1": "Klinisches Feedback",
    "contact_opt_2": "Institutionelle Partnerschaft",
    "contact_opt_3": "FSP & Linguistische Mitarbeit",
    "contact_opt_4": "Medien-Kooperation",
    "contact_opt_5": "Allgemeine Anfrage",
    "contact_label_message": "Detaillierter Vorschlag",

    /* --- MEDICAL DISCLAIMER --- */
    "disc_pill": "Klinischer Warnhinweis",
    "disc_title": "Umfassender",
    "disc_highlight": "Medizinischer Haftungsausschluss.",
    "disc_intro": "Gültig ab Mai 2026. Dieses Dokument bildet die rechtliche Grenze zwischen Algorithmen und klinischer Verantwortung.",
    "disc_h1": "1. Grundzweck und Nicht-Diagnostik",
    "disc_p1_1": "WardCalc ist ein Referenzinstrument und KEIN zertifiziertes diagnostiches Medizinprodukt. Es wurde weder von der FDA noch der EMA für autonome Entscheidungen bewertet.",
    "disc_p1_2": "Die Daten dienen nur Bildungszwecken. Der absolute Vorrang des unabhängigen menschlichen klinischen Urteilsvermögens ist die Grundvoraussetzung für die Nutzung.",
    "disc_h2": "2. Verantwortung des Behandlers",
    "disc_p2_1": "Kein Algorithmus kann die menschliche Physiologie vollständig abbilden. Der Nutzer trägt 100% der Verantwortung für jede eingeleitete klinische Intervention. Eine blinde Befolgung der Ergebnisse ist ein Verstoß gegen die medizinische Praxis.",

    /* --- PRIVACY POLICY --- */
    "priv_pill": "Recht & Compliance",
    "priv_title": "Klinische Daten &",
    "priv_highlight": "Datenschutzrichtlinie.",
    "priv_intro": "WardCalc arbeitet auf einer zustandslosen Architektur. Patientendaten werden niemals auf unseren Servern gespeichert oder übertragen.",
    "priv_h1": "1. Daten-Souveränität",
    "priv_p1_1": "Alle Eingaben wie Labordaten oder Vitalparameter existieren nur im flüchtigen Speicher Ihres Geräts. Sobald Sie den Tab schließen, werden alle klinischen Daten mathematisch vernichtet.",
    "priv_p1_2": "Wir sammeln keine geschützten Gesundheitsinformationen (PHI). WardCalc ist voll kompatibel mit der DSGVO (GDPR), da wir keine personenbezogenen Patientendaten verarbeiten.",

    /* --- TERMS & CONDITIONS --- */
    "terms_pill": "Nutzungsbedingungen",
    "terms_title": "Nutzungsbedingungen &",
    "terms_highlight": "Klinische Vereinbarung.",
    "terms_intro": "Durch die Nutzung der Plattform akzeptieren Sie diese Bedingungen. WardCalc ist ausschließlich für Fachpersonal bestimmt.",
    "terms_h1": "1. Geistiges Eigentum",
    "terms_p1_1": "Die UI-Architektur und die multilinguale Matrix sind Eigentum der Administration. Ein Reverse-Engineering oder kommerzielles Scraping ist strengstens untersagt.",
    "footer_rights": "© 2026 WardCalc-Netzwerk. Entwickelt für klinische Exzellenz."
};
