require([
    "esri/Map", 
    "esri/views/MapView" ,
    "esri/layers/FeatureLayer",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/portal/PortalItem",
    "esri/widgets/LayerList",
    "esri/widgets/Legend",
    "esri/widgets/Measurement",
    "esri/widgets/Search",
    "esri/PopupTemplate"
], (Map, Mapview,FeatureLayer, BasemapGallery,Expand,PortalItem,LayerList,Legend,Measurement,Search,PopupTemplate) => { 

    const paryz = new FeatureLayer({
        portalItem: {  
            id: "50061743f7b04b369d370ef907d89d45",
            popupTemplate: {content:"Paryż"}
          }
    });
    const shanghai = new FeatureLayer({
        portalItem: {  
            id: "ea42ee99a2524db3a9a4b2ab22b94564"
          }
    });
    const hongkong = new FeatureLayer({
        portalItem: {  
            id: "87a90965ca71440bbbf9d42f93ef3c13"
          }
    });
    const floryda = new FeatureLayer({
        portalItem: {  
            id: "a6a4944783dd41308a3c349c69df59e2"
          }
    });
    const kalifornia = new FeatureLayer({
        portalItem: {  
            id: "ff93ca45271c4ac599240db5b73c1a20"
          }
    });
    const tokio = new FeatureLayer({
        portalItem: {  
            id: "e9bb3e61e5b349148f49c08f44898058"
          }
    });
    


    const map1 = new Map({ 
        basemap: "terrain",
        layers: [paryz,floryda,kalifornia,shanghai,hongkong,tokio]
    });

    const view = new Mapview({
        map: map1,
        container: "mapDiv",
        zoom: 5,
        center: [20,50],
    });
    //paryz
    let link1 = document.getElementById("link1");
    link1.addEventListener("click",function(){
        view.goTo({
            center:[2.781667, 48.868611],
            zoom:6
        })
    });
    //floryda
    let link2 = document.getElementById("link2");
    link2.addEventListener("click",function(){
        view.goTo({
            center:[-81.5494, 28.3722],
            zoom:8
        })
    });
    //kalifornia
    let link3 = document.getElementById("link3");
    link3.addEventListener("click",function(){
        view.goTo({
            center:[-117.918976, 33.812511],
            zoom:8
        })
    });
    //shanghai
    let link4 = document.getElementById("link4");
    link4.addEventListener("click",function(){
        view.goTo({
            center:[121.657, 31.144],
            zoom:8
        })
    });
    //hongkong
    let link5 = document.getElementById("link5");
    link5.addEventListener("click",function(){
        view.goTo({
            center:[114.043333, 22.313333],
            zoom:8
        })
    });
    //tokio
    let link6 = document.getElementById("link6");
    link6.addEventListener("click",function(){
        view.goTo({
            center:[139.880556, 35.632778],
            zoom:8
        })
    });
    // //tworzenie grafiki symbolu
    // // 1 geometria
    // const geom = {
    //     type: "point",
    //     longitude: 52,
    //     latitude: 31
    // };
    // //2 symbolizacja
    // const symbol ={
    //     type: "simple-marker",
    //     style: "x",
    //     size : 15,
    //     color: "blue",
    //     outline:{
    //         width:2,
    //         color:"red"
    //     }
    // };
    // // 3 atrybuty 
    // const attr = {
    //     name: "Polska",
    //     code:"POL"
    // };
    // const popTemplate ={
    //     //tytul
    //     title:"aplikacja web-gis",
    //     //zawartosc
    //     content: "Kraj: {name}"
    // };
    // //składanie grafiki
    // const graph = new Graphic({
    //     geometry: geom,
    //     attributes: attr,
    //     symbol: symbol,
    //     popupTemplate: popTemplate
    // });
    // //dodanie grafiki na mapę
    // // map1.graphics.add(graph);
    // //lepszy sposób na dodanie kilku grafik 
    // graphLayer.graphics.push(graph);

    //tworzenie widgetow
    const basemapGalleryWg = new BasemapGallery({
        view: view
    });
    const layerListWg = new LayerList({
        view : view
    });
    const legendWg = new Legend({
        view : view
    });
    const measurementWg = new Measurement({
        view : view,
        activeTool: "distance"
    });

    const searchWg = new Search({
        view: view
      });
    //dodanie do mapy, do interfejsu uzytkownika, zminimalizowanego
    const expWg = new Expand({ //jakie widgety mają być schowane
        view: view,
        content: basemapGalleryWg,
    });
    const expLL = new Expand({ 
        view: view,
        content: layerListWg,
    });
    const expLegend = new Expand({ 
        view: view,
        content: legendWg,
    });
    const expSearch = new Expand({ 
        view: view,
        content: searchWg,
    });
    view.ui.add(expWg,{position:"top-right"});
    view.ui.add(expLL,{position:"top-right"});
    view.ui.add(expLegend,{position:"top-right"});
    view.ui.add(measurementWg, "bottom-left");
    view.ui.add(expSearch,{position:"top-right"});
    
    

});