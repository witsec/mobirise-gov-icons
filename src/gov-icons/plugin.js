defineM("witsec-gov-icons", function(g, mbrApp, tr) {
    mbrApp.registerPlugin("witsec-gov-icons", {
        name: "gov-icons",
        condition: !1,
        priority: 100,
        iconfont: {
            family: "GovIcons",
            title: "Gov Icons",
            prefix: "gi-",
            "class": "gi gi-fw",
            names: "18f 540 540-fedapi airplane ambulance ammo balance bar-chart barcode biohazard book briefcase building bus-front cac cac-o capitol caution cert check check-square-o clock-o cloud cloud-o code cog cogs comment comments construction database dc-flag dc-map desktop dna dogtags donkey drone elephant factory fedapi file file-contract-o file-excel file-excel-o file-o file-text file-text-o file-word file-word-o fingerprint folder folder-misc gavel gear gears globe gun handshake hard-hat heartbeat helicopter id-card id-card-o jefferson-memorial jet key leaf liberty-bell lightbulb lincoln-memorial line-chart lock medal-circle medal-star medkit metro-front microscope missile mobile-phone money nuclear-plant pallet pentagon pie-chart poison poison-bottle presenter radar radioactive recycle reticle-crosshair reticle-dot ribbon road road-barricade road-sign ruler satellite script search security-camera shield shield-o ship-front sol statue-of-liberty stethoscope submarine table tables tablet tank textile times tools train-front truck truck-front unlock us-flag-straight us-flag-wavy us-map us-shield us-tophat usd user user-military user-politician user-student user-suit users vote warning washington-monument wheel-barrow white-house world".split(" ")
        },
        files: "css/govicons.min.css fonts/govicons-webfont.eot fonts/govicons-webfont.svg fonts/govicons-webfont.ttf fonts/govicons-webfont.woff fonts/govicons-webfont.woff2".split(" ")
    });
}, ["jQuery", "mbrApp", "TR()"]);