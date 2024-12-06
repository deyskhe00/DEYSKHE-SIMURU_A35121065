var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Palu_2024_1 = new ol.format.GeoJSON();
var features_Palu_2024_1 = format_Palu_2024_1.readFeatures(json_Palu_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Palu_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Palu_2024_1.addFeatures(features_Palu_2024_1);
var lyr_Palu_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Palu_2024_1, 
                style: style_Palu_2024_1,
                popuplayertitle: "Palu_2024",
                interactive: true,
    title: 'Palu_2024<br />\
    <img src="styles/legend/Palu_2024_1_0.png" /> Mantikulore<br />\
    <img src="styles/legend/Palu_2024_1_1.png" /> Palu Barat<br />\
    <img src="styles/legend/Palu_2024_1_2.png" /> Palu Selatan<br />\
    <img src="styles/legend/Palu_2024_1_3.png" /> Palu Timur<br />\
    <img src="styles/legend/Palu_2024_1_4.png" /> Palu Utara<br />\
    <img src="styles/legend/Palu_2024_1_5.png" /> Tatanga<br />\
    <img src="styles/legend/Palu_2024_1_6.png" /> Tawaeli<br />\
    <img src="styles/legend/Palu_2024_1_7.png" /> Ulujadi<br />'
        });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: "Jalan",
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_2_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_2_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_2_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_2_3.png" /> Jalan Lokal<br />'
        });
var format_TitikPerkantoran_3 = new ol.format.GeoJSON();
var features_TitikPerkantoran_3 = format_TitikPerkantoran_3.readFeatures(json_TitikPerkantoran_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPerkantoran_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPerkantoran_3.addFeatures(features_TitikPerkantoran_3);
var lyr_TitikPerkantoran_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPerkantoran_3, 
                style: style_TitikPerkantoran_3,
                popuplayertitle: "Titik Perkantoran",
                interactive: true,
                title: '<img src="styles/legend/TitikPerkantoran_3.png" /> Titik Perkantoran'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_Palu_2024_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_TitikPerkantoran_3.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_Palu_2024_1,lyr_Jalan_2,lyr_TitikPerkantoran_3];
lyr_Palu_2024_1.set('fieldAliases', {'KDCPUM': 'KDCPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_Jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TitikPerkantoran_3.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', });
lyr_Palu_2024_1.set('fieldImages', {'KDCPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_TitikPerkantoran_3.set('fieldImages', {'Id': 'Range', 'Nama': 'TextEdit', });
lyr_Palu_2024_1.set('fieldLabels', {'KDCPUM': 'inline label - always visible', 'KDPKAB': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'UPDATED': 'inline label - always visible', });
lyr_Jalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TitikPerkantoran_3.set('fieldLabels', {'Id': 'no label', 'Nama': 'inline label - always visible', });
lyr_TitikPerkantoran_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});