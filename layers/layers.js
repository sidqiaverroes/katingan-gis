var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kecamatan_1 = new ol.format.GeoJSON();
var features_Kecamatan_1 = format_Kecamatan_1.readFeatures(json_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_1.addFeatures(features_Kecamatan_1);
var lyr_Kecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kecamatan_1, 
                style: style_Kecamatan_1,
                interactive: true,
    title: 'Kecamatan<br />\
    <img src="styles/legend/Kecamatan_1_0.png" /> Kec. Bukit Raya<br />\
    <img src="styles/legend/Kecamatan_1_1.png" /> Kec. Kamipang<br />\
    <img src="styles/legend/Kecamatan_1_2.png" /> Kec. Katingan Hilir<br />\
    <img src="styles/legend/Kecamatan_1_3.png" /> Kec. Katingan Hulu<br />\
    <img src="styles/legend/Kecamatan_1_4.png" /> Kec. Katingan Kuala<br />\
    <img src="styles/legend/Kecamatan_1_5.png" /> Kec. Katingan Tengah<br />\
    <img src="styles/legend/Kecamatan_1_6.png" /> Kec. Marikit<br />\
    <img src="styles/legend/Kecamatan_1_7.png" /> Kec. Mendawai<br />\
    <img src="styles/legend/Kecamatan_1_8.png" /> Kec. Petak Malai<br />\
    <img src="styles/legend/Kecamatan_1_9.png" /> Kec. Pulau Malan<br />\
    <img src="styles/legend/Kecamatan_1_10.png" /> Kec. Sanaman Mantikei<br />\
    <img src="styles/legend/Kecamatan_1_11.png" /> Kec. Tasik Payawan<br />\
    <img src="styles/legend/Kecamatan_1_12.png" /> Kec. Tewang Sangalang Garing<br />'
        });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                interactive: true,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_3_1.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_3_2.png" /> <br />'
        });
var format_Ibukota_Kecamatan_4 = new ol.format.GeoJSON();
var features_Ibukota_Kecamatan_4 = format_Ibukota_Kecamatan_4.readFeatures(json_Ibukota_Kecamatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibukota_Kecamatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibukota_Kecamatan_4.addFeatures(features_Ibukota_Kecamatan_4);
var lyr_Ibukota_Kecamatan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibukota_Kecamatan_4, 
                style: style_Ibukota_Kecamatan_4,
                interactive: true,
                title: '<img src="styles/legend/Ibukota_Kecamatan_4.png" /> Ibukota_Kecamatan'
            });
var format_Ibukota_Kabupaten_5 = new ol.format.GeoJSON();
var features_Ibukota_Kabupaten_5 = format_Ibukota_Kabupaten_5.readFeatures(json_Ibukota_Kabupaten_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibukota_Kabupaten_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibukota_Kabupaten_5.addFeatures(features_Ibukota_Kabupaten_5);
var lyr_Ibukota_Kabupaten_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibukota_Kabupaten_5, 
                style: style_Ibukota_Kabupaten_5,
                interactive: true,
                title: '<img src="styles/legend/Ibukota_Kabupaten_5.png" /> Ibukota_Kabupaten'
            });
var format_IzinLokasiKebun_6 = new ol.format.GeoJSON();
var features_IzinLokasiKebun_6 = format_IzinLokasiKebun_6.readFeatures(json_IzinLokasiKebun_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IzinLokasiKebun_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IzinLokasiKebun_6.addFeatures(features_IzinLokasiKebun_6);
var lyr_IzinLokasiKebun_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IzinLokasiKebun_6, 
                style: style_IzinLokasiKebun_6,
                interactive: true,
    title: 'Izin Lokasi Kebun<br />\
    <img src="styles/legend/IzinLokasiKebun_6_0.png" /> Kamipang<br />\
    <img src="styles/legend/IzinLokasiKebun_6_1.png" /> Katingan Hilir<br />\
    <img src="styles/legend/IzinLokasiKebun_6_2.png" /> Katingan Kuala<br />\
    <img src="styles/legend/IzinLokasiKebun_6_3.png" /> Katingan Tengah, Pulau Malan<br />\
    <img src="styles/legend/IzinLokasiKebun_6_4.png" /> Mendawai<br />\
    <img src="styles/legend/IzinLokasiKebun_6_5.png" /> Mendawai, Kamipang<br />\
    <img src="styles/legend/IzinLokasiKebun_6_6.png" /> Pulau Malan<br />\
    <img src="styles/legend/IzinLokasiKebun_6_7.png" /> Pulau Malan, Katingan Tengah<br />\
    <img src="styles/legend/IzinLokasiKebun_6_8.png" /> Pulau Malan, Tewang Sangalang<br />\
    <img src="styles/legend/IzinLokasiKebun_6_9.png" /> Tasik Payawan<br />\
    <img src="styles/legend/IzinLokasiKebun_6_10.png" /> Tasik Payawan, Katingan Hilir<br />\
    <img src="styles/legend/IzinLokasiKebun_6_11.png" /> Tewang Sangalang Garing<br />'
        });
var format_Tambang_7 = new ol.format.GeoJSON();
var features_Tambang_7 = format_Tambang_7.readFeatures(json_Tambang_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambang_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambang_7.addFeatures(features_Tambang_7);
var lyr_Tambang_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tambang_7, 
                style: style_Tambang_7,
                interactive: true,
    title: 'Tambang<br />\
    <img src="styles/legend/Tambang_7_0.png" /> Batubara<br />\
    <img src="styles/legend/Tambang_7_1.png" /> Batubara Kalori Sedang<br />\
    <img src="styles/legend/Tambang_7_2.png" /> Batubara Kalori Tinggi<br />\
    <img src="styles/legend/Tambang_7_3.png" /> Emas Primer<br />\
    <img src="styles/legend/Tambang_7_4.png" /> Gambut<br />\
    <img src="styles/legend/Tambang_7_5.png" /> Granit<br />\
    <img src="styles/legend/Tambang_7_6.png" /> Lempung<br />\
    <img src="styles/legend/Tambang_7_7.png" /> Pasirkuarsa<br />\
    <img src="styles/legend/Tambang_7_8.png" /> Perak<br />\
    <img src="styles/legend/Tambang_7_9.png" /> Zircon<br />\
    <img src="styles/legend/Tambang_7_10.png" /> <br />'
        });
var format_KelapaSawit_8 = new ol.format.GeoJSON();
var features_KelapaSawit_8 = format_KelapaSawit_8.readFeatures(json_KelapaSawit_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelapaSawit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelapaSawit_8.addFeatures(features_KelapaSawit_8);
var lyr_KelapaSawit_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KelapaSawit_8, 
                style: style_KelapaSawit_8,
                interactive: true,
                title: '<img src="styles/legend/KelapaSawit_8.png" /> Kelapa Sawit'
            });
var format_LokasiWisata_9 = new ol.format.GeoJSON();
var features_LokasiWisata_9 = format_LokasiWisata_9.readFeatures(json_LokasiWisata_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiWisata_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiWisata_9.addFeatures(features_LokasiWisata_9);
var lyr_LokasiWisata_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LokasiWisata_9, 
                style: style_LokasiWisata_9,
                interactive: true,
    title: 'Lokasi Wisata<br />\
    <img src="styles/legend/LokasiWisata_9_0.png" /> Danau Biru<br />\
    <img src="styles/legend/LokasiWisata_9_1.png" /> Danau Bulat<br />\
    <img src="styles/legend/LokasiWisata_9_2.png" /> Danau Purun<br />\
    <img src="styles/legend/LokasiWisata_9_3.png" /> Riam Mangkikit<br />\
    <img src="styles/legend/LokasiWisata_9_4.png" /> Taman Nasional Bukit Baka-Bukit Raya<br />\
    <img src="styles/legend/LokasiWisata_9_5.png" /> Taman Nasional Sebangau<br />\
    <img src="styles/legend/LokasiWisata_9_6.png" /> Taman Wisata Bukit Batu<br />\
    <img src="styles/legend/LokasiWisata_9_7.png" /> Upacara Tiwah<br />\
    <img src="styles/legend/LokasiWisata_9_8.png" /> <br />'
        });
var format_JaringanSUTT_10 = new ol.format.GeoJSON();
var features_JaringanSUTT_10 = format_JaringanSUTT_10.readFeatures(json_JaringanSUTT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanSUTT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanSUTT_10.addFeatures(features_JaringanSUTT_10);
var lyr_JaringanSUTT_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanSUTT_10, 
                style: style_JaringanSUTT_10,
                interactive: true,
                title: '<img src="styles/legend/JaringanSUTT_10.png" /> Jaringan SUTT'
            });
var format_JaringanListrik_11 = new ol.format.GeoJSON();
var features_JaringanListrik_11 = format_JaringanListrik_11.readFeatures(json_JaringanListrik_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanListrik_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanListrik_11.addFeatures(features_JaringanListrik_11);
var lyr_JaringanListrik_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanListrik_11, 
                style: style_JaringanListrik_11,
                interactive: true,
                title: '<img src="styles/legend/JaringanListrik_11.png" /> Jaringan Listrik'
            });
var format_Jalan_12 = new ol.format.GeoJSON();
var features_Jalan_12 = format_Jalan_12.readFeatures(json_Jalan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_12.addFeatures(features_Jalan_12);
var lyr_Jalan_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_12, 
                style: style_Jalan_12,
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_12_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_12_1.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_12_2.png" /> <br />'
        });
var format_Terminal_13 = new ol.format.GeoJSON();
var features_Terminal_13 = format_Terminal_13.readFeatures(json_Terminal_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminal_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminal_13.addFeatures(features_Terminal_13);
var lyr_Terminal_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Terminal_13, 
                style: style_Terminal_13,
                interactive: true,
                title: '<img src="styles/legend/Terminal_13.png" /> Terminal'
            });
var format_Dermaga_14 = new ol.format.GeoJSON();
var features_Dermaga_14 = format_Dermaga_14.readFeatures(json_Dermaga_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dermaga_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dermaga_14.addFeatures(features_Dermaga_14);
var lyr_Dermaga_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dermaga_14, 
                style: style_Dermaga_14,
                interactive: true,
                title: '<img src="styles/legend/Dermaga_14.png" /> Dermaga'
            });
var format_Bandara_15 = new ol.format.GeoJSON();
var features_Bandara_15 = format_Bandara_15.readFeatures(json_Bandara_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bandara_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bandara_15.addFeatures(features_Bandara_15);
var lyr_Bandara_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bandara_15, 
                style: style_Bandara_15,
                interactive: true,
                title: '<img src="styles/legend/Bandara_15.png" /> Bandara'
            });
var format_DistribusiListrik_16 = new ol.format.GeoJSON();
var features_DistribusiListrik_16 = format_DistribusiListrik_16.readFeatures(json_DistribusiListrik_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribusiListrik_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistribusiListrik_16.addFeatures(features_DistribusiListrik_16);
var lyr_DistribusiListrik_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistribusiListrik_16, 
                style: style_DistribusiListrik_16,
                interactive: true,
    title: 'Distribusi Listrik<br />\
    <img src="styles/legend/DistribusiListrik_16_0.png" /> 1.276.948<br />\
    <img src="styles/legend/DistribusiListrik_16_1.png" /> 2.518.387<br />\
    <img src="styles/legend/DistribusiListrik_16_2.png" /> 364.217<br />\
    <img src="styles/legend/DistribusiListrik_16_3.png" /> 819.418<br />'
        });
var format_AirBersih_17 = new ol.format.GeoJSON();
var features_AirBersih_17 = format_AirBersih_17.readFeatures(json_AirBersih_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirBersih_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirBersih_17.addFeatures(features_AirBersih_17);
var lyr_AirBersih_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirBersih_17, 
                style: style_AirBersih_17,
                interactive: true,
    title: 'Air Bersih<br />\
    <img src="styles/legend/AirBersih_17_0.png" /> 0 - 117989<br />\
    <img src="styles/legend/AirBersih_17_1.png" /> 117989 - 235978<br />\
    <img src="styles/legend/AirBersih_17_2.png" /> 235978 - 353966<br />\
    <img src="styles/legend/AirBersih_17_3.png" /> 353966 - 471955<br />\
    <img src="styles/legend/AirBersih_17_4.png" /> 471955 - 589944<br />'
        });
var format_Pendidikan_18 = new ol.format.GeoJSON();
var features_Pendidikan_18 = format_Pendidikan_18.readFeatures(json_Pendidikan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_18.addFeatures(features_Pendidikan_18);
var lyr_Pendidikan_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pendidikan_18, 
                style: style_Pendidikan_18,
                interactive: true,
    title: 'Pendidikan<br />\
    <img src="styles/legend/Pendidikan_18_0.png" /> Pendidikan Anak Usia Dini<br />\
    <img src="styles/legend/Pendidikan_18_1.png" /> Pendidikan Dasar<br />\
    <img src="styles/legend/Pendidikan_18_2.png" /> Pendidikan Menengah Pertama<br />\
    <img src="styles/legend/Pendidikan_18_3.png" /> Pendidikan Menengah Umum<br />\
    <img src="styles/legend/Pendidikan_18_4.png" /> Pendidikan Keagamaan<br />\
    <img src="styles/legend/Pendidikan_18_5.png" /> Pendidikan Luar Sekolah<br />\
    <img src="styles/legend/Pendidikan_18_6.png" /> <br />'
        });
var format_Kesehatan_19 = new ol.format.GeoJSON();
var features_Kesehatan_19 = format_Kesehatan_19.readFeatures(json_Kesehatan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_19.addFeatures(features_Kesehatan_19);
var lyr_Kesehatan_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kesehatan_19, 
                style: style_Kesehatan_19,
                interactive: true,
    title: 'Kesehatan<br />\
    <img src="styles/legend/Kesehatan_19_0.png" /> Poliklinik/Polindes/Posyandu<br />\
    <img src="styles/legend/Kesehatan_19_1.png" /> Puskesmas/Puskesmas Pembantu<br />\
    <img src="styles/legend/Kesehatan_19_2.png" /> <br />'
        });
var format_PerumahanBersubsidi_20 = new ol.format.GeoJSON();
var features_PerumahanBersubsidi_20 = format_PerumahanBersubsidi_20.readFeatures(json_PerumahanBersubsidi_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerumahanBersubsidi_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerumahanBersubsidi_20.addFeatures(features_PerumahanBersubsidi_20);
var lyr_PerumahanBersubsidi_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PerumahanBersubsidi_20, 
                style: style_PerumahanBersubsidi_20,
                interactive: true,
                title: '<img src="styles/legend/PerumahanBersubsidi_20.png" /> Perumahan Bersubsidi'
            });
var format_Peribadatan_21 = new ol.format.GeoJSON();
var features_Peribadatan_21 = format_Peribadatan_21.readFeatures(json_Peribadatan_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peribadatan_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peribadatan_21.addFeatures(features_Peribadatan_21);
var lyr_Peribadatan_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peribadatan_21, 
                style: style_Peribadatan_21,
                interactive: true,
    title: 'Peribadatan<br />\
    <img src="styles/legend/Peribadatan_21_0.png" /> Gereja<br />\
    <img src="styles/legend/Peribadatan_21_1.png" /> Masjid<br />\
    <img src="styles/legend/Peribadatan_21_2.png" /> Vihara<br />\
    <img src="styles/legend/Peribadatan_21_3.png" /> Peribadatan/Sosial Lainnya<br />\
    <img src="styles/legend/Peribadatan_21_4.png" /> <br />'
        });
var format_Pergudangan_22 = new ol.format.GeoJSON();
var features_Pergudangan_22 = format_Pergudangan_22.readFeatures(json_Pergudangan_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pergudangan_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pergudangan_22.addFeatures(features_Pergudangan_22);
var lyr_Pergudangan_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pergudangan_22, 
                style: style_Pergudangan_22,
                interactive: true,
                title: '<img src="styles/legend/Pergudangan_22.png" /> Pergudangan'
            });
var format_BANK_23 = new ol.format.GeoJSON();
var features_BANK_23 = format_BANK_23.readFeatures(json_BANK_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANK_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANK_23.addFeatures(features_BANK_23);
var lyr_BANK_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANK_23, 
                style: style_BANK_23,
                interactive: true,
                title: '<img src="styles/legend/BANK_23.png" /> BANK'
            });
var format_Peniagaan_24 = new ol.format.GeoJSON();
var features_Peniagaan_24 = format_Peniagaan_24.readFeatures(json_Peniagaan_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peniagaan_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peniagaan_24.addFeatures(features_Peniagaan_24);
var lyr_Peniagaan_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peniagaan_24, 
                style: style_Peniagaan_24,
                interactive: true,
                title: '<img src="styles/legend/Peniagaan_24.png" /> Peniagaan'
            });
var format_HotelPenginapan_25 = new ol.format.GeoJSON();
var features_HotelPenginapan_25 = format_HotelPenginapan_25.readFeatures(json_HotelPenginapan_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelPenginapan_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelPenginapan_25.addFeatures(features_HotelPenginapan_25);
var lyr_HotelPenginapan_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HotelPenginapan_25, 
                style: style_HotelPenginapan_25,
                interactive: true,
                title: '<img src="styles/legend/HotelPenginapan_25.png" /> Hotel Penginapan'
            });
var format_TELKOM_26 = new ol.format.GeoJSON();
var features_TELKOM_26 = format_TELKOM_26.readFeatures(json_TELKOM_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TELKOM_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TELKOM_26.addFeatures(features_TELKOM_26);
var lyr_TELKOM_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TELKOM_26, 
                style: style_TELKOM_26,
                interactive: true,
                title: '<img src="styles/legend/TELKOM_26.png" /> TELKOM'
            });
var format_POLRES_27 = new ol.format.GeoJSON();
var features_POLRES_27 = format_POLRES_27.readFeatures(json_POLRES_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLRES_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLRES_27.addFeatures(features_POLRES_27);
var lyr_POLRES_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLRES_27, 
                style: style_POLRES_27,
                interactive: true,
                title: '<img src="styles/legend/POLRES_27.png" /> POLRES'
            });
var format_SPBU_28 = new ol.format.GeoJSON();
var features_SPBU_28 = format_SPBU_28.readFeatures(json_SPBU_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_28.addFeatures(features_SPBU_28);
var lyr_SPBU_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPBU_28, 
                style: style_SPBU_28,
                interactive: true,
                title: '<img src="styles/legend/SPBU_28.png" /> SPBU'
            });
var format_RSUD_29 = new ol.format.GeoJSON();
var features_RSUD_29 = format_RSUD_29.readFeatures(json_RSUD_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSUD_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSUD_29.addFeatures(features_RSUD_29);
var lyr_RSUD_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSUD_29, 
                style: style_RSUD_29,
                interactive: true,
                title: '<img src="styles/legend/RSUD_29.png" /> RSUD'
            });
var format_POLSEK_30 = new ol.format.GeoJSON();
var features_POLSEK_30 = format_POLSEK_30.readFeatures(json_POLSEK_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLSEK_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLSEK_30.addFeatures(features_POLSEK_30);
var lyr_POLSEK_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLSEK_30, 
                style: style_POLSEK_30,
                interactive: true,
                title: '<img src="styles/legend/POLSEK_30.png" /> POLSEK'
            });
var format_PLN_31 = new ol.format.GeoJSON();
var features_PLN_31 = format_PLN_31.readFeatures(json_PLN_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLN_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLN_31.addFeatures(features_PLN_31);
var lyr_PLN_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLN_31, 
                style: style_PLN_31,
                interactive: true,
                title: '<img src="styles/legend/PLN_31.png" /> PLN'
            });
var format_PEMDA_32 = new ol.format.GeoJSON();
var features_PEMDA_32 = format_PEMDA_32.readFeatures(json_PEMDA_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMDA_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMDA_32.addFeatures(features_PEMDA_32);
var lyr_PEMDA_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMDA_32, 
                style: style_PEMDA_32,
                interactive: true,
                title: '<img src="styles/legend/PEMDA_32.png" /> PEMDA'
            });
var format_PDAM_33 = new ol.format.GeoJSON();
var features_PDAM_33 = format_PDAM_33.readFeatures(json_PDAM_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDAM_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDAM_33.addFeatures(features_PDAM_33);
var lyr_PDAM_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PDAM_33, 
                style: style_PDAM_33,
                interactive: true,
                title: '<img src="styles/legend/PDAM_33.png" /> PDAM'
            });
var format_KantorPos_34 = new ol.format.GeoJSON();
var features_KantorPos_34 = format_KantorPos_34.readFeatures(json_KantorPos_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorPos_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPos_34.addFeatures(features_KantorPos_34);
var lyr_KantorPos_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorPos_34, 
                style: style_KantorPos_34,
                interactive: true,
                title: '<img src="styles/legend/KantorPos_34.png" /> Kantor Pos'
            });
var format_DAMKAR_35 = new ol.format.GeoJSON();
var features_DAMKAR_35 = format_DAMKAR_35.readFeatures(json_DAMKAR_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAMKAR_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAMKAR_35.addFeatures(features_DAMKAR_35);
var lyr_DAMKAR_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DAMKAR_35, 
                style: style_DAMKAR_35,
                interactive: true,
                title: '<img src="styles/legend/DAMKAR_35.png" /> DAMKAR'
            });
var format_PolaRuang_36 = new ol.format.GeoJSON();
var features_PolaRuang_36 = format_PolaRuang_36.readFeatures(json_PolaRuang_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolaRuang_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolaRuang_36.addFeatures(features_PolaRuang_36);
var lyr_PolaRuang_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PolaRuang_36, 
                style: style_PolaRuang_36,
                interactive: true,
    title: 'Pola Ruang<br />\
    <img src="styles/legend/PolaRuang_36_0.png" /> APL<br />\
    <img src="styles/legend/PolaRuang_36_1.png" /> Budidaya Perikanan<br />\
    <img src="styles/legend/PolaRuang_36_2.png" /> HL<br />\
    <img src="styles/legend/PolaRuang_36_3.png" /> HP<br />\
    <img src="styles/legend/PolaRuang_36_4.png" /> HPK<br />\
    <img src="styles/legend/PolaRuang_36_5.png" /> HPT<br />\
    <img src="styles/legend/PolaRuang_36_6.png" /> Hutan Mangrove<br />\
    <img src="styles/legend/PolaRuang_36_7.png" /> Kawasan Budidaya Adat<br />\
    <img src="styles/legend/PolaRuang_36_8.png" /> Konservasi Ekosistem<br />\
    <img src="styles/legend/PolaRuang_36_9.png" /> Perikanan Darat<br />\
    <img src="styles/legend/PolaRuang_36_10.png" /> Perkebunan<br />\
    <img src="styles/legend/PolaRuang_36_11.png" /> Perkebunan Kelapa Sawit<br />\
    <img src="styles/legend/PolaRuang_36_12.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/PolaRuang_36_13.png" /> Permukiman Pedesaan<br />\
    <img src="styles/legend/PolaRuang_36_14.png" /> Permukiman Perkotaan<br />\
    <img src="styles/legend/PolaRuang_36_15.png" /> Pertanian Holtikultura<br />\
    <img src="styles/legend/PolaRuang_36_16.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/PolaRuang_36_17.png" /> Pertanian Tanaman Pangan<br />\
    <img src="styles/legend/PolaRuang_36_18.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/PolaRuang_36_19.png" /> TNBBBR<br />\
    <img src="styles/legend/PolaRuang_36_20.png" /> TNS<br />\
    <img src="styles/legend/PolaRuang_36_21.png" /> Tubuh Air<br />\
    <img src="styles/legend/PolaRuang_36_22.png" /> Wilayah Kelola Masyarakat<br />'
        });
var group_TataRuang = new ol.layer.Group({
                                layers: [lyr_PolaRuang_36,],
                                title: "Tata Ruang"});
var group_PrasaranadanSarana = new ol.layer.Group({
                                layers: [lyr_DistribusiListrik_16,lyr_AirBersih_17,lyr_Pendidikan_18,lyr_Kesehatan_19,lyr_PerumahanBersubsidi_20,lyr_Peribadatan_21,lyr_Pergudangan_22,lyr_BANK_23,lyr_Peniagaan_24,lyr_HotelPenginapan_25,lyr_TELKOM_26,lyr_POLRES_27,lyr_SPBU_28,lyr_RSUD_29,lyr_POLSEK_30,lyr_PLN_31,lyr_PEMDA_32,lyr_PDAM_33,lyr_KantorPos_34,lyr_DAMKAR_35,],
                                title: "Prasarana dan Sarana"});
var group_Infrastruktur = new ol.layer.Group({
                                layers: [lyr_JaringanSUTT_10,lyr_JaringanListrik_11,lyr_Jalan_12,lyr_Terminal_13,lyr_Dermaga_14,lyr_Bandara_15,],
                                title: "Infrastruktur"});
var group_PotensiPariwisata = new ol.layer.Group({
                                layers: [lyr_LokasiWisata_9,],
                                title: "Potensi Pariwisata"});
var group_PotensiPerkebunan = new ol.layer.Group({
                                layers: [lyr_KelapaSawit_8,],
                                title: "Potensi Perkebunan"});
var group_PotensiSDA = new ol.layer.Group({
                                layers: [lyr_Tambang_7,],
                                title: "Potensi  SDA"});
var group_IzinLokasiEksisting = new ol.layer.Group({
                                layers: [lyr_IzinLokasiKebun_6,],
                                title: "Izin Lokasi Eksisting"});
var group_Administrasi = new ol.layer.Group({
                                layers: [lyr_Kecamatan_1,lyr_Sungai_2,lyr_Jalan_3,lyr_Ibukota_Kecamatan_4,lyr_Ibukota_Kabupaten_5,],
                                title: "Administrasi"});
var group_OnlineBasemap = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Online Basemap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Kecamatan_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_Ibukota_Kecamatan_4.setVisible(true);lyr_Ibukota_Kabupaten_5.setVisible(true);lyr_IzinLokasiKebun_6.setVisible(false);lyr_Tambang_7.setVisible(false);lyr_KelapaSawit_8.setVisible(false);lyr_LokasiWisata_9.setVisible(false);lyr_JaringanSUTT_10.setVisible(false);lyr_JaringanListrik_11.setVisible(false);lyr_Jalan_12.setVisible(false);lyr_Terminal_13.setVisible(false);lyr_Dermaga_14.setVisible(false);lyr_Bandara_15.setVisible(false);lyr_DistribusiListrik_16.setVisible(false);lyr_AirBersih_17.setVisible(false);lyr_Pendidikan_18.setVisible(false);lyr_Kesehatan_19.setVisible(false);lyr_PerumahanBersubsidi_20.setVisible(false);lyr_Peribadatan_21.setVisible(false);lyr_Pergudangan_22.setVisible(false);lyr_BANK_23.setVisible(false);lyr_Peniagaan_24.setVisible(false);lyr_HotelPenginapan_25.setVisible(false);lyr_TELKOM_26.setVisible(false);lyr_POLRES_27.setVisible(false);lyr_SPBU_28.setVisible(false);lyr_RSUD_29.setVisible(false);lyr_POLSEK_30.setVisible(false);lyr_PLN_31.setVisible(false);lyr_PEMDA_32.setVisible(false);lyr_PDAM_33.setVisible(false);lyr_KantorPos_34.setVisible(false);lyr_DAMKAR_35.setVisible(false);lyr_PolaRuang_36.setVisible(false);
var layersList = [group_OnlineBasemap,group_Administrasi,group_IzinLokasiEksisting,group_PotensiSDA,group_PotensiPerkebunan,group_PotensiPariwisata,group_Infrastruktur,group_PrasaranadanSarana,group_TataRuang];
lyr_Kecamatan_1.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Luas__Ha_': 'Luas__Ha_', });
lyr_Sungai_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Panjang_km': 'Panjang_km', });
lyr_Jalan_3.set('fieldAliases', {'REMARK': 'REMARK', 'Panjang_km': 'Panjang_km', });
lyr_Ibukota_Kecamatan_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Jrk_Kab': 'Jrk_Kab', });
lyr_Ibukota_Kabupaten_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Jrk_Prov': 'Jrk_Prov', });
lyr_IzinLokasiKebun_6.set('fieldAliases', {'PERUSAHAAN': 'PERUSAHAAN', 'PENERBIT_I': 'PENERBIT_I', 'SK_ILOK': 'SK_ILOK', 'TGL_SKILOK': 'TGL_SKILOK', 'LUAS_ILOK': 'LUAS_ILOK', 'SK_IUP': 'SK_IUP', 'TGL_SKIUP': 'TGL_SKIUP', 'LUAS_IUP': 'LUAS_IUP', 'DESA_1': 'DESA_1', 'KECAMATAN1': 'KECAMATAN1', 'luasan': 'luasan', 'Pos': 'Pos', 'ID_12': 'ID_12', });
lyr_Tambang_7.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', 'Perusahaan': 'Perusahaan', });
lyr_KelapaSawit_8.set('fieldAliases', {'Kawasan_20': 'Kawasan_20', 'Kecamatan': 'Kecamatan', 'Luas_Ha': 'Luas_Ha', });
lyr_LokasiWisata_9.set('fieldAliases', {'Nama_Pariw': 'Nama_Pariw', 'Ket': 'Ket', });
lyr_JaringanSUTT_10.set('fieldAliases', {'Id': 'Id', 'Panjang_Km': 'Panjang_Km', });
lyr_JaringanListrik_11.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', 'Panjang_Km': 'Panjang_Km', });
lyr_Jalan_12.set('fieldAliases', {'REMARK': 'REMARK', 'Panjang_km': 'Panjang_km', });
lyr_Terminal_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'Kecamatan': 'Kecamatan', });
lyr_Dermaga_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'Kecamatan': 'Kecamatan', });
lyr_Bandara_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'Kecamatan': 'Kecamatan', });
lyr_DistribusiListrik_16.set('fieldAliases', {'NO': 'NO', 'KECAMATAN': 'KECAMATAN', 'Distribusi': 'Distribusi', });
lyr_AirBersih_17.set('fieldAliases', {'NO': 'NO', 'KECAMATAN': 'KECAMATAN', 'Jml_Distri': 'Jml_Distri', });
lyr_Pendidikan_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'Kecamatan': 'Kecamatan', });
lyr_Kesehatan_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'Kecamatan': 'Kecamatan', });
lyr_PerumahanBersubsidi_20.set('fieldAliases', {'Perumahan': 'Perumahan', 'Kecamatan': 'Kecamatan', });
lyr_Peribadatan_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'Kecamatan': 'Kecamatan', });
lyr_Pergudangan_22.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Kecamatan': 'Kecamatan', });
lyr_BANK_23.set('fieldAliases', {'Nama_Bank': 'Nama_Bank', 'Kecamatan': 'Kecamatan', });
lyr_Peniagaan_24.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Kecamatan': 'Kecamatan', });
lyr_HotelPenginapan_25.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Nama_Hotel': 'Nama_Hotel', });
lyr_TELKOM_26.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_POLRES_27.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_SPBU_28.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_RSUD_29.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_POLSEK_30.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_PLN_31.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_PEMDA_32.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_PDAM_33.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_KantorPos_34.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_DAMKAR_35.set('fieldAliases', {'Nama': 'Nama', 'Kecamatan': 'Kecamatan', });
lyr_PolaRuang_36.set('fieldAliases', {'Kawasan_20': 'Kawasan_20', 'Luas_Ha': 'Luas_Ha', });
lyr_Kecamatan_1.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Luas__Ha_': 'TextEdit', });
lyr_Sungai_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'Panjang_km': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'REMARK': 'TextEdit', 'Panjang_km': 'TextEdit', });
lyr_Ibukota_Kecamatan_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'Jrk_Kab': 'TextEdit', });
lyr_Ibukota_Kabupaten_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'Jrk_Prov': 'TextEdit', });
lyr_IzinLokasiKebun_6.set('fieldImages', {'PERUSAHAAN': 'TextEdit', 'PENERBIT_I': 'TextEdit', 'SK_ILOK': 'TextEdit', 'TGL_SKILOK': 'TextEdit', 'LUAS_ILOK': 'TextEdit', 'SK_IUP': 'TextEdit', 'TGL_SKIUP': 'TextEdit', 'LUAS_IUP': 'TextEdit', 'DESA_1': 'TextEdit', 'KECAMATAN1': 'TextEdit', 'luasan': 'TextEdit', 'Pos': 'TextEdit', 'ID_12': 'TextEdit', });
lyr_Tambang_7.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', 'Perusahaan': 'TextEdit', });
lyr_KelapaSawit_8.set('fieldImages', {'Kawasan_20': 'TextEdit', 'Kecamatan': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_LokasiWisata_9.set('fieldImages', {'Nama_Pariw': 'TextEdit', 'Ket': 'TextEdit', });
lyr_JaringanSUTT_10.set('fieldImages', {'Id': 'Range', 'Panjang_Km': 'TextEdit', });
lyr_JaringanListrik_11.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', 'Panjang_Km': 'TextEdit', });
lyr_Jalan_12.set('fieldImages', {'REMARK': 'TextEdit', 'Panjang_km': 'TextEdit', });
lyr_Terminal_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_Dermaga_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_Bandara_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_DistribusiListrik_16.set('fieldImages', {'NO': 'TextEdit', 'KECAMATAN': 'TextEdit', 'Distribusi': 'TextEdit', });
lyr_AirBersih_17.set('fieldImages', {'NO': 'TextEdit', 'KECAMATAN': 'TextEdit', 'Jml_Distri': 'TextEdit', });
lyr_Pendidikan_18.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_Kesehatan_19.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_PerumahanBersubsidi_20.set('fieldImages', {'Perumahan': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_Peribadatan_21.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_Pergudangan_22.set('fieldImages', {'NAMOBJ': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_BANK_23.set('fieldImages', {'Nama_Bank': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_Peniagaan_24.set('fieldImages', {'NAMOBJ': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_HotelPenginapan_25.set('fieldImages', {'Kecamatan': 'TextEdit', 'Nama_Hotel': 'TextEdit', });
lyr_TELKOM_26.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_POLRES_27.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_SPBU_28.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_RSUD_29.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_POLSEK_30.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_PLN_31.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_PEMDA_32.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_PDAM_33.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_KantorPos_34.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_DAMKAR_35.set('fieldImages', {'Nama': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_PolaRuang_36.set('fieldImages', {'Kawasan_20': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_Kecamatan_1.set('fieldLabels', {});
lyr_Sungai_2.set('fieldLabels', {});
lyr_Jalan_3.set('fieldLabels', {});
lyr_Ibukota_Kecamatan_4.set('fieldLabels', {});
lyr_Ibukota_Kabupaten_5.set('fieldLabels', {});
lyr_IzinLokasiKebun_6.set('fieldLabels', {});
lyr_Tambang_7.set('fieldLabels', {});
lyr_KelapaSawit_8.set('fieldLabels', {});
lyr_LokasiWisata_9.set('fieldLabels', {});
lyr_JaringanSUTT_10.set('fieldLabels', {});
lyr_JaringanListrik_11.set('fieldLabels', {});
lyr_Jalan_12.set('fieldLabels', {});
lyr_Terminal_13.set('fieldLabels', {});
lyr_Dermaga_14.set('fieldLabels', {});
lyr_Bandara_15.set('fieldLabels', {});
lyr_DistribusiListrik_16.set('fieldLabels', {});
lyr_AirBersih_17.set('fieldLabels', {});
lyr_Pendidikan_18.set('fieldLabels', {});
lyr_Kesehatan_19.set('fieldLabels', {});
lyr_PerumahanBersubsidi_20.set('fieldLabels', {});
lyr_Peribadatan_21.set('fieldLabels', {});
lyr_Pergudangan_22.set('fieldLabels', {});
lyr_BANK_23.set('fieldLabels', {});
lyr_Peniagaan_24.set('fieldLabels', {});
lyr_HotelPenginapan_25.set('fieldLabels', {});
lyr_TELKOM_26.set('fieldLabels', {});
lyr_POLRES_27.set('fieldLabels', {});
lyr_SPBU_28.set('fieldLabels', {});
lyr_RSUD_29.set('fieldLabels', {});
lyr_POLSEK_30.set('fieldLabels', {});
lyr_PLN_31.set('fieldLabels', {});
lyr_PEMDA_32.set('fieldLabels', {});
lyr_PDAM_33.set('fieldLabels', {});
lyr_KantorPos_34.set('fieldLabels', {});
lyr_DAMKAR_35.set('fieldLabels', {});
lyr_PolaRuang_36.set('fieldLabels', {});
lyr_PolaRuang_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});